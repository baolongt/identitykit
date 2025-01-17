import { useCallback, useEffect, useState } from "react"
import { Signer, SignerOptions, Transport } from "@slide-computer/signer"
import { TransportBuilder } from "../../../lib/service"
import { TransportType, SignerConfig } from "../../../lib/types"

export function useSigner({
  signers,
  closeModal,
  crypto,
  ...props
}: {
  signers: SignerConfig[]
  closeModal: () => unknown
  options: Pick<
    SignerOptions<Transport>,
    "autoCloseTransportChannel" | "closeTransportChannelAfter"
  >
  crypto?: Pick<Crypto, "getRandomValues" | "randomUUID">
}) {
  const [selectedSigner, setSelectedSigner] = useState<Signer | undefined>(undefined)
  const [prevSigner, setPrevSigner] = useState<Signer | undefined>(undefined)

  const options = { ...(props.options ?? {}), crypto }

  const selectSigner = useCallback(
    async (cb: (signer?: Signer) => unknown, signerId?: string) => {
      if (!signerId) {
        localStorage.removeItem("signerId")
        return cb(undefined)
      }

      const signer = signers.find((s) => s.id === signerId)
      if (!signer) throw new Error(`Signer with id ${signerId} not found`)

      const { transportType, providerUrl } = signer

      const transport = await TransportBuilder.build({
        id: signer.id,
        transportType,
        url: providerUrl,
        crypto,
      })

      if (!transport.connection?.connected) {
        await transport.connection?.connect()
      }

      const createdSigner = new Signer({
        ...options,
        transport,
      })
      cb(createdSigner)

      localStorage.setItem("signerId", signerId)
      closeModal()

      return signer
    },
    [signers, selectedSigner, closeModal]
  )

  const selectCustomSigner = useCallback(async (url: string) => {
    const transport = await TransportBuilder.build({
      transportType: TransportType.NEW_TAB,
      url,
      crypto,
    })

    const createdSigner = new Signer({ ...options, transport })

    setSelectedSigner(createdSigner)
    closeModal()
  }, [])

  // default selected signer from local storage
  useEffect(() => {
    async function select() {
      if (!selectedSigner && localStorage.getItem("signerId") && !prevSigner)
        await selectSigner(setPrevSigner, localStorage.getItem("signerId")!)
    }

    select()
  }, [selectedSigner, selectSigner, setPrevSigner, prevSigner])

  return {
    selectSigner: async (signerId?: string) => {
      await selectSigner(setSelectedSigner, signerId)
    },
    // clear both signer and local storage signer
    clearSigner: async () => {
      await selectSigner(setSelectedSigner)
      await selectSigner(setPrevSigner)
    },
    selectCustomSigner,
    // selected signer is local storage signer by default (in case authenticated user)
    selectedSigner: selectedSigner ?? prevSigner,
  }
}

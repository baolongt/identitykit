import React, { useState, useCallback, PropsWithChildren, useEffect } from "react"
import { SignerConfig } from "../../lib/types"
import { IdentityKitContext } from "./context"
import { IdentityKitModal } from "./modal"
import { IdentityKitTheme } from "./constants"
import { PostMessageTransport } from "@slide-computer/signer-web"
import { Signer } from "@slide-computer/signer"
import { openPopup } from "./utils"
import { IdentityKit, IdentityKitSignerClient, IdentityKitSignerClientOptions } from "../../lib"

interface IdentityKitProviderProps extends PropsWithChildren {
  signers: SignerConfig[]
  theme?: IdentityKitTheme
  signerClientOptions?: Omit<IdentityKitSignerClientOptions, "signer">
}

globalThis.global = globalThis

export const IdentityKitProvider: React.FC<IdentityKitProviderProps> = ({
  children,
  signers,
  theme = IdentityKitTheme.SYSTEM,
  signerClientOptions = {},
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedSigner, setSelectedSigner] = useState<Signer | undefined>(undefined)
  const [identityKit, setIdentityKit] = useState<null | IdentityKit>(null)

  const createIdentityKitSignerClient = useCallback(async () => {
    if (selectedSigner)
      return await IdentityKitSignerClient.create({
        signer: selectedSigner,
        keyType: "Ed25519",
        ...signerClientOptions,
      })
    return null
  }, [selectedSigner])

  const createIdentityKit = useCallback(async () => {
    const signerClient = await createIdentityKitSignerClient()
    if (signerClient !== null) return new IdentityKit(signerClient)
    return null
  }, [createIdentityKitSignerClient])

  useEffect(() => {
    createIdentityKit().then(setIdentityKit)
  }, [createIdentityKit])

  const toggleModal = useCallback(() => {
    setIsModalOpen((prev) => !prev)
  }, [])

  const selectSigner = useCallback(
    (signerId?: string) => {
      if (typeof signerId === "undefined") return setSelectedSigner(undefined)
      const signer = signers.find((s) => s.id === signerId)
      if (!signer) throw new Error(`Signer with id ${signerId} not found`)

      // TODO should have openWindow according to transport
      const transport = new PostMessageTransport({
        openWindow: () => openPopup(signer.providerUrl, signer.label, 450, 640),
      })
      const createdSigner = new Signer({ transport })
      setSelectedSigner(createdSigner)
      setIsModalOpen(false)

      return signer
    },
    [signers, selectedSigner, setIsModalOpen]
  )

  // theme inherits from system by default
  const ctxTheme =
    theme === IdentityKitTheme.SYSTEM
      ? window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
        ? IdentityKitTheme.DARK
        : IdentityKitTheme.LIGHT
      : theme

  return (
    <IdentityKitContext.Provider
      value={{
        signers,
        selectedSigner,
        isModalOpen,
        toggleModal,
        selectSigner,
        theme: ctxTheme,
        identityKit: identityKit!,
      }}
    >
      <IdentityKitModal />
      {children}
    </IdentityKitContext.Provider>
  )
}

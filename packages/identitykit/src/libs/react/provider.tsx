import { useState, useCallback, PropsWithChildren } from "react"
import { SignerConfig } from "../../lib/types"
import { IdentityKitContext } from "./context"
import { IdentityKitModal } from "./modal"
import { IdentityKitTheme } from "./constants"
import {
  IdentityKitAuthKindType,
  IdentityKitAccountsSignerClientOptions,
  IdentityKitAuthKind,
  IdentityKitDelegationSignerClientOptions,
  IdentityKitSignerAgentOptions,
} from "../../lib"
import { useCreateIdentityKit, useSigner, useTheme } from "./hooks"

interface IdentityKitProviderProps<
  T extends IdentityKitAuthKindType = typeof IdentityKitAuthKind.DELEGATION,
> extends PropsWithChildren {
  authKind?: T
  signers: SignerConfig[]
  featuredSigner?: SignerConfig
  theme?: IdentityKitTheme
  signerClientOptions?: T extends typeof IdentityKitAuthKind.DELEGATION
    ? Omit<IdentityKitDelegationSignerClientOptions, "signer">
    : Omit<IdentityKitAccountsSignerClientOptions, "signer">
  signerAgentOptions?: {
    signer?: IdentityKitSignerAgentOptions["signer"]
    agent?: IdentityKitSignerAgentOptions["agent"]
  }
}

globalThis.global = globalThis

export const IdentityKitProvider = <T extends IdentityKitAuthKindType>({
  children,
  signers,
  signerClientOptions,
  signerAgentOptions,
  authKind,
  featuredSigner,
  ...props
}: IdentityKitProviderProps<T>) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const toggleModal = useCallback(() => {
    setIsModalOpen((prev) => !prev)
  }, [])

  const { selectSigner, selectedSigner, savedSigner, selectCustomSigner } = useSigner({
    signers,
    closeModal: () => setIsModalOpen(false),
  })

  const identityKit = useCreateIdentityKit({
    selectedSigner: selectedSigner ?? savedSigner,
    signerClientOptions,
    signerAgentOptions,
    authKind,
  })

  const theme = useTheme(props.theme)

  return (
    <IdentityKitContext.Provider
      value={{
        signers,
        selectedSigner,
        savedSigner,
        isModalOpen,
        toggleModal,
        selectSigner,
        selectCustomSigner,
        theme,
        featuredSigner,
        identityKit: identityKit!,
      }}
    >
      <IdentityKitModal />
      {children}
    </IdentityKitContext.Provider>
  )
}

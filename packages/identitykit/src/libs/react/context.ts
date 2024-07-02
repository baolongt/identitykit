import { createContext, useContext } from "react"
import { IdentityKitProvider } from "./types"
import { Signer } from "@slide-computer/signer"
import { SignerConfig } from "../../lib"

const defaultState: IdentityKitProvider = {
  signers: [],
  selectedSigner: undefined,
  isModalOpen: false,
  signerIframeRef: undefined,
  toggleModal: () => {
    throw new Error("toggleModal not implemented")
  },
  selectSigner: () => {
    throw new Error("selectSigner not implemented")
  },
}

export const IdentityKitContext = createContext<IdentityKitProvider>(defaultState)

export function useIdentityKit(): {
  selectedSigner?: Signer
  selectSigner: (signerId?: string | undefined) => void | SignerConfig
} {
  const { selectedSigner, selectSigner } = useContext(IdentityKitContext)

  return {
    selectedSigner,
    selectSigner,
  }
}

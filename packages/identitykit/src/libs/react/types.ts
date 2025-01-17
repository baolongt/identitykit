import { SignerConfig } from "../../lib/types"
import { Signer } from "@slide-computer/signer"
import { IdentityKitTheme } from "./constants"
import { IdentityKitSignerAgent } from "../../lib"

export interface IdentityKitProvider {
  signers: SignerConfig[]
  featuredSigner?: SignerConfig
  selectedSigner?: Signer
  isModalOpen: boolean
  toggleModal: () => void
  selectSigner: (signerId?: string) => Promise<SignerConfig | void>
  selectCustomSigner: (url: string) => Promise<void>
  theme: IdentityKitTheme
  agent: IdentityKitSignerAgent<Signer> | null
  connectedAccount?: string
  disconnect: () => unknown
  icpBalance?: number
}

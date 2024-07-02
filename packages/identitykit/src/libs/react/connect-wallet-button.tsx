import { useContext, useEffect, useState } from "react"
import { IdentityKitContext } from "./context"
import clsx from "clsx"
import { SignerClient } from "@slide-computer/signer-client"

export function ConnectWalletButton({ signerClient }: { signerClient?: SignerClient }) {
  const { selectedSigner, toggleModal, selectSigner } = useContext(IdentityKitContext)
  const [connectedAddress, setConnectedAddress] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (selectedSigner && signerClient) {
      signerClient.login({
        onSuccess: () => {
          setConnectedAddress(signerClient?.getIdentity().getPrincipal().toText())
        },
      })
    }
  }, [selectedSigner, signerClient])

  return (
    <button
      type="button"
      onClick={() => {
        if (connectedAddress) {
          signerClient!.logout()
          selectSigner(undefined)
          setConnectedAddress(undefined)
        } else {
          toggleModal()
        }
      }}
      className={clsx(
        "text-black bg-transparent border-gray-900",
        "hover:text-white hover:bg-gray-900 hover:border-gray-900 hover:shadow-md",
        "active:text-white active:bg-gray-900",
        "disabled:shadow-none disabled:bg-white disabled:border-gray-300 disabled:text-gray-300",
        "dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-white",
        "dark:active:text-black dark:active:bg-gray-300 dark:active:border-none",
        "h-12 px-[15px] rounded-xl border"
      )}
    >
      {connectedAddress
        ? `Disconnect wallet ${connectedAddress.substring(0, 5)}...${connectedAddress.substring(connectedAddress.length - 5)}`
        : "Connect wallet"}
    </button>
  )
}

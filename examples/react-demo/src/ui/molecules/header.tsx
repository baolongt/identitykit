import { useTheme } from "next-themes"
import { IconSvgMoon, IconSvgNFID, IconSvgNFIDWhite, IconSvgSun } from "../atoms/icons"
import { ConnectWalletButton, useIdentityKit } from "@nfid/identitykit/react"
import { SignerClient } from "@slide-computer/signer-client"
import { useEffect, useState } from "react"

export const Header = () => {
  const { theme, setTheme } = useTheme()
  const { selectedSigner } = useIdentityKit()
  const [signerClient, setSignerClient] = useState<SignerClient | undefined>(undefined)

  useEffect(() => {
    if (selectedSigner) {
      const createSignerClient = async () => {
        return await SignerClient.create({
          signer: selectedSigner,
          keyType: "Ed25519"
        })
      }
      createSignerClient().then((signerClient) => {
        setSignerClient(signerClient)
      })
    }
  }, [selectedSigner])

  return (
    <div className="flex items-center justify-between h-[68px] mb-3">
      <img className="dark:hidden" src={IconSvgNFID} alt="nfid" />
      <img className="hidden dark:block" src={IconSvgNFIDWhite} alt="nfid" />
      <div className="flex items-center gap-10">
        <p className="text-sm font-bold">NFID IdentityKit Docs</p>
        {theme === "light" ? (
          <img
            className="w-5 transition-opacity cursor-pointer hover:opacity-50"
            src={IconSvgSun}
            alt="light"
            onClick={() => setTheme("dark")}
          />
        ) : (
          <img
            className="w-5 transition-opacity cursor-pointer hover:opacity-50"
            src={IconSvgMoon}
            alt="dark"
            onClick={() => setTheme("light")}
          />
        )}
        <ConnectWalletButton signerClient={signerClient} />
      </div>
    </div>
  )
}

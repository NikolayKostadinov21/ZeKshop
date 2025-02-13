import { useAccount } from "@shieldswap/wallet-sdk/react";
import { createPXEClient } from "@aztec/aztec.js";
import { PopupWalletSdk } from "@shieldswap/wallet-sdk";
import BuyProduct from "../wallet/BuyProduct";
import ConnectWallet from "../navbar/ConnectWallet";

export default function BuyButton() {
  const PXE_URL = "http://localhost:8080";
  const PXE = createPXEClient(PXE_URL);

  const SDK = new PopupWalletSdk(PXE);
  const account = useAccount(SDK);
  return (
    <>{account ? <BuyProduct></BuyProduct> : <ConnectWallet></ConnectWallet>}</>
  );
}

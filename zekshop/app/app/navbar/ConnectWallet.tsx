import { toast } from "sonner";
import React, { useEffect, useState } from "react";
// import { ObsidionWalletSDK } from "obsidion-wallet";
import { ObsidionWalletSDK } from "../../libs/wallet-sdk/src/popup";
import { AztecAddress, createPXEClient } from "@aztec/aztec.js";
import { TokenContract } from "@aztec/noir-contracts.js/Token";
import { useAccount } from "../../libs/wallet-sdk/src/exports/react";
import { getDeployedTestAccountsWallets } from "@aztec/accounts/testing";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent } from "@/components/ui/card";
// import { Loader2 } from "lucide-react";

const OBSIDON_WALLET_URL = "https://obsidion.vercel.app/";
const PXE_URL = "https://pxe.obsidion.xyz/";
const PXE = createPXEClient(PXE_URL);

const sdk = new ObsidionWalletSDK(PXE, {
  walletUrl: OBSIDON_WALLET_URL,
});

const ConnectWallet = (props: any) => {
  const account = useAccount(sdk);

  const [tokenContract, setTokenContract] = useState<TokenContract | null>(
    null
  );
  const [tokenAddress, setTokenAddress] = useState<string | null>(null);
  const [amount, setAmount] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (tokenAddress && account) {
      const initTokenContract = async () => {
        const tokenContract = await TokenContract.at(
          AztecAddress.fromString(tokenAddress),
          account as any
        );
        setTokenContract(tokenContract);
      };
      initTokenContract();
    }
  }, [tokenAddress, account]);

  const handleConnect = async () => {
    setLoading(true);
    console.log("window.location.host: ", window.location.host);

    console.log("Clicked!");
    console.log("sdk: ", sdk);

    const account = await sdk.connect();

    console.log("account: ", account);

    if (!account) return;
    // setAccount(account);
    setLoading(false);
  };

  const handleDisconnect = async () => {
    await sdk.disconnect();
    setTokenContract(null);
    setTokenAddress(null);
  };

  const handleSendTx = async (isPrivate: boolean) => {
    if (!account) return;
    setLoading(true);
    const accs = await getDeployedTestAccountsWallets(PXE);

    if (!tokenContract) return;

    if (!amount) return;

    console.log("sending token");

    const txHash = await tokenContract
      .withWallet(account)
      .methods[isPrivate ? "transfer_in_private" : "transfer_in_public"](
        account.getAddress(),
        accs[1].getAddress(),
        BigInt(amount) * BigInt(1e18),
        0
      )
      .send()
      .wait();

    // console.log("txHash: ", txHash.txHash.toString());
    console.log("txHash: ", txHash);
    setLoading(false);
  };

  return (
    <div>
      <>Connect Wallet</>
      {account ? (
        <>
          <div>Account: {account.getAddress().toString()}</div>

          {tokenContract && tokenAddress ? (
            <>
              <div>Token: {tokenAddress}</div>
              <input
                style={{ width: "50%" }}
                placeholder="Amount"
                value={amount || ""}
                onChange={(e) => setAmount(e.target.value)}
              />
              <div style={{ display: "flex", gap: 10 }}>
                <button onClick={() => handleSendTx(true)}>
                  Send Token (Private)
                </button>
                <button onClick={() => handleSendTx(false)}>
                  Send Token (Public)
                </button>
              </div>
            </>
          ) : (
            // make the input wider
            <input
              style={{ width: "50%" }}
              placeholder="Token Address"
              value={tokenAddress || ""}
              onChange={(e) => setTokenAddress(e.target.value)}
            />
          )}
          <button onClick={handleDisconnect}>Disconnect</button>
        </>
      ) : (
        <>
          <button onClick={handleConnect}>Connect</button>
        </>
      )}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default ConnectWallet;

import React, { useEffect, useState } from "react";
import { AztecAddress, createPXEClient, Fr } from "@aztec/aztec.js";
import { useAccount } from "@shieldswap/wallet-sdk/react";
import { getDeployedTestAccountsWallets } from "@aztec/accounts/testing";
import { PopupWalletSdk } from "@shieldswap/wallet-sdk";
import { Contract } from "@shieldswap/wallet-sdk/eip1193";
import {
  TokenContract,
  TokenContractArtifact,
} from "@aztec/noir-contracts.js/Token";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

const PXE_URL = "http://localhost:8080";
const PXE = createPXEClient(PXE_URL);

const SDK = new PopupWalletSdk(PXE);

const BuyProduct = () => {
  const account = useAccount(SDK);

  const [tokenContract, setTokenContract] =
    useState<Contract<TokenContract> | null>(null);
  const [tokenAddress, setTokenAddress] = useState<string | null>(() => {
    return localStorage?.getItem("tokenAddress");
  });

  const [amount, setAmount] = useState<string | null>(null);
  const [recipient, setRecipient] = useState<string | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem("tokenAddress", tokenAddress || "");
  }, [tokenAddress]);

  useEffect(() => {
    console.log(tokenContract);
    if (tokenAddress && account) {
      const initTokenContract = async () => {
        const Token = Contract.fromAztec(TokenContract, TokenContractArtifact);
        const tokenContract = await Token.at(
          AztecAddress.fromString(tokenAddress),
          account
        );
        setTokenContract(tokenContract);
      };
      initTokenContract();
    }
  }, [tokenAddress, account]);

  const handleMintToken = async () => {
    if (!account) {
      setError("Account not found");
      setLoading(false);
      return;
    }

    setLoading(true);

    const deployer = (await getDeployedTestAccountsWallets(PXE))[0];
    const deployTx = await TokenContract.deploy(
      deployer,
      deployer.getAddress(),
      "Token",
      "TEST",
      18
    )
      .send({ contractAddressSalt: new Fr(4) })
      .wait();
    console.log("deployTx: ", deployTx);

    const tokenContract = deployTx.contract;
    await tokenContract.methods
      .mint_to_private(deployer.getAddress(), deployer.getAddress(), 1000e18)
      .send()
      .wait();
    await tokenContract.methods
      .transfer_in_private(deployer.getAddress(), account.address, 1000e18, 0)
      .send()
      .wait();
    await tokenContract.methods
      .mint_to_public(account.address, 1000e18)
      .send()
      .wait();

    const Token = Contract.fromAztec(TokenContract, TokenContractArtifact);
    const token = await Token.at(tokenContract.address, account);
    setTokenContract(token);
    setTokenAddress(tokenContract.address.toString());
    setLoading(false);
  };

  const handleSendTx = async (isPrivate: boolean, productPrice: string) => {
    console.log("tokenAddress", tokenAddress);
    setAmount(productPrice);
    setError(null);
    if (!account) {
      setError("Account not found");
      console.log(error);
      setLoading(false);
      return;
    }

    if (!tokenContract) {
      setError("Token contract not found");
      setLoading(false);
      return;
    }

    if (!amount) {
      setError("Amount is required");
      setLoading(false);
      return;
    }

    if (!recipient) {
      setError("Recipient is required");
      setLoading(false);
      return;
    }

    console.log("sending token");

    try {
      const txHash = await tokenContract.methods[
        isPrivate ? "transfer_in_private" : "transfer_in_public"
      ](
        account.getAddress(),
        AztecAddress.fromString(recipient),
        BigInt(amount) * BigInt(1e18),
        0
      )
        .send()
        .wait();
      console.log("txHash: ", txHash);
    } catch (e) {
      console.log(e);
      setError("Error sending transaction");
      setLoading(false);
      return;
    }

    setLoading(false);
  };

  return (
    <>
      {tokenContract && tokenAddress ? (
        <>
          <Input
            style={{ width: "50%" }}
            placeholder="Amount"
            value={amount || ""}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Input
            style={{ width: "50%" }}
            placeholder="ZeKshop addr"
            value={recipient || ""}
            onChange={(e) => setRecipient(e.target.value)}
          />
          <div style={{ display: "flex" }}>
            <Button
              disabled={loading}
              onClick={async () => await handleSendTx(true, amount as string)}
            >
              Buy
            </Button>
          </div>
        </>
      ) : (
        <>
          <Input
            label="Token Address"
            style={{ width: "50%" }}
            placeholder="0x..."
            value={tokenAddress || ""}
            onChange={(e) => {
              setTokenAddress(e.target.value);
              localStorage.setItem("tokenAddress", e.target.value);
            }}
          />
          <div style={{ display: "flex", gap: 20 }}>
            <Button disabled={loading} onPress={() => handleMintToken()}>
              Deploy & Mint Token
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default BuyProduct;

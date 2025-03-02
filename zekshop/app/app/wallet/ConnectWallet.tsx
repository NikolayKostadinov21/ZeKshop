"use client";

import React, { useEffect, useState } from "react";
import { AztecAddress, createPXEClient } from "@aztec/aztec.js";
import { useAccount } from "@shieldswap/wallet-sdk/react";
import { ReownPopupWalletSdk } from "@shieldswap/wallet-sdk";
import { Contract } from "@shieldswap/wallet-sdk/eip1193";
import {
  TokenContract,
  TokenContractArtifact,
} from "@aztec/noir-contracts.js/Token";
import { useLocalStorage } from "usehooks-ts";

const PXE_URL = "http://localhost:8080";
const PXE = createPXEClient(PXE_URL);

const wcOptions = {
  projectId: "067a11239d95dd939ee98ea22bde21da",
};

const SDK = new ReownPopupWalletSdk(PXE, wcOptions);

const ConnectWallet = () => {
  const account = useAccount(SDK);

  const [tokenContract, setTokenContract] =
    useState<Contract<TokenContract> | null>(null);
  // const [tokenAddress, setTokenAddress] = useState<string | null>(null);

  // maybe add `removetokenAddress`
  const [tokenAddress, setTokenAddress] = useLocalStorage("tokenAddress", "");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTokenAddress(tokenAddress);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && tokenAddress) {
      setTokenAddress(tokenAddress);
    }
  }, [tokenAddress]);

  useEffect(() => {
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

  return (
    <div>
      {account ? (
        <>
          <div>{account.getAddress().toString().substring(0, 8)}...</div>
          {tokenContract && tokenAddress ? <></> : <></>}
        </>
      ) : (
        <button
          onClick={async () => {
            if (!SDK) return;
            console.log("connecting...");
            const account = await SDK.connect();
            console.log("account: ", account);
          }}
        >
          Connect
        </button>
      )}
    </div>
  );
};

export default ConnectWallet;

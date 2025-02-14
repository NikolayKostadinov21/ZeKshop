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
import { showTransactionSuccess } from "../components/TransactionToast";
import { ToastContainer } from "react-toastify";

const PXE_URL = "http://localhost:8080";
const PXE = createPXEClient(PXE_URL);

const SDK = new PopupWalletSdk(PXE);

const Opinion: React.FC = () => {
  const account = useAccount(SDK);
  const is_address_eq_acc =
    account?.address.toString() == localStorage.getItem("verified_account");

  return (
    <>
      {is_address_eq_acc ? (
        <>
          <div>
            <Button>Give Opinion</Button>
          </div>
        </>
      ) : (
        <>
          <div>
            <Button isDisabled>Give Opinion</Button>
          </div>
        </>
      )}
    </>
  );
};

export default Opinion;

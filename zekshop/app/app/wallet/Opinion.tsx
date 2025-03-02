"use client";

import React from "react";
import { createPXEClient } from "@aztec/aztec.js";
import { useAccount } from "@shieldswap/wallet-sdk/react";
import { PopupWalletSdk } from "@shieldswap/wallet-sdk";
import { Button } from "@heroui/button";

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

"use client";
import { Button } from "@heroui/button";
import { Toaster } from "sonner";
import SpecialOffer from "./components/special-offer";
import BackedBy from "./components/BackedBy";
import Newsletter from "./components/newsletter";
import Contacts from "./components/Contacts";
import VideoBackground from "./background/video_background";
import Categories from "./components/Categories";
import Items from "./components/Items";
import ConnectWallet from "./wallet/ConnectWallet";
import styled from "styled-components";

const Logo = styled.img`
  height: 50px;
  cursor: pointer;
  border-radius: 20px;
`;

export default function Home() {
  const css = `
      html {
      scroll-behavior: smooth;
    }

    /* Custom scrollbar styling */
    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: #1f1f1f;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #9854bf;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: #c02c63;
    }
  `;
  return (
    <div>
      <style>{css}</style>
      <VideoBackground videoSrc="/background_video.mp4">
        <Logo src="/zekshop_logo_black_background.png" alt="al" />
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] font-extrabold leading-tight">
          ZeKshop
        </h1>
        <p className="mt-2 text-lg md:text-xl lg:text-2xl xl:text-3xl font-light">
          Pleasure in privacy.
        </p>
        <Button className="mt-4 text-base md:text-lg lg:text-xl px-5 py-2">
          Let's buy!
        </Button>
        <ConnectWallet />
      </VideoBackground>
      <Categories />
      <Items />
      <Newsletter />
      <Contacts />
      <BackedBy />
      <Toaster
        toastOptions={{
          style: {
            height: "40px",
          },
        }}
        richColors
        position="bottom-center"
      />
    </div>
  );
}

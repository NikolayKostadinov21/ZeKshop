"use client";
import Navbar from "./navbar/Navbar";
import {
  BackgroundSection,
  GlobalStyle,
  MainContent,
  NavbarOverlay,
} from "./background/background";
import { CardItem, CardContainer } from "./product_items/card_item";

import SmoothScroll from "smooth-scroll";
import { toast, Toaster } from "sonner";

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 600,
  speedAsDuration: true,
});

export default function Home() {
  const process_transaction = () => {
    console.log("ad");
    const promise = () =>
      new Promise((resolve) =>
        setTimeout(() => resolve({ name: "Sonner" }), 2000)
      );

    toast.promise(promise, {
      loading: "Loading...",
      success: (_) => {
        return `toast has been added`;
      },
      error: "Error",
    });
  };
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
      <GlobalStyle />
      <NavbarOverlay>
        <Navbar />
      </NavbarOverlay>
      <BackgroundSection />
      <MainContent>
        <CardContainer>
          <CardItem
            imageUrl="/22.png"
            onBuyClick={() => alert("Buying product 2")}
            onOpinionClick={() => alert("Give opinion on product 2")}
          />
          <CardItem
            imageUrl="/11.png"
            onBuyClick={() => alert("Buying product 2")}
            onOpinionClick={() => alert("Give opinion on product 2")}
          />
          <CardItem
            imageUrl="/21.png"
            onBuyClick={() => alert("Buying product 3")}
            onOpinionClick={() => alert("Give opinion on product 3")}
          />
          <CardItem
            imageUrl="/25.png"
            onBuyClick={() => alert("Buying product 3")}
            onOpinionClick={() => alert("Give opinion on product 3")}
          />
          <CardItem
            imageUrl="/12.png"
            onBuyClick={() => alert("Buying product 3")}
            onOpinionClick={() => alert("Give opinion on product 3")}
          />
          <CardItem
            imageUrl="/24.png"
            onBuyClick={() => alert("Buying product 3")}
            onOpinionClick={() => alert("Give opinion on product 3")}
          />
          <Toaster
            toastOptions={{
              style: {
                height: "40px",
              },
            }}
            richColors
            position="bottom-center"
          />
        </CardContainer>
      </MainContent>
    </div>
  );
}

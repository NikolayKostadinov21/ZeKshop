"use client";
import Navbar from "./navbar/Navbar";
import { Button } from "@heroui/button";
import { Toaster } from "sonner";
import SpecialOffer from "./components/special-offer";
import Testimonials from "./components/testimonials";
import Newsletter from "./components/newsletter";
import Footer from "./components/footer";
import VideoBackground from "./background/video_background";
import Categories from "./components/Categories";
import Items from "./components/Items";

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
      <Navbar />
      <VideoBackground videoSrc="/background_video.mp4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] font-extrabold leading-tight">
          ZeKshop
        </h1>
        <p className="mt-2 text-lg md:text-xl lg:text-2xl xl:text-3xl font-light">
          Pleasure in privacy.
        </p>
        <Button className="mt-4 text-base md:text-lg lg:text-xl px-5 py-2">
          Let's buy!
        </Button>
      </VideoBackground>
      <Categories />
      <Items />
      <SpecialOffer />
      <Testimonials />
      <Newsletter />
      <Toaster
        toastOptions={{
          style: {
            height: "40px",
          },
        }}
        richColors
        position="bottom-center"
      />
      <Footer />
    </div>
  );
}

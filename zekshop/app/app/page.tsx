"use client";
import Navbar from "./navbar/Navbar";
import { Button } from "@heroui/button";
import { Toaster } from "sonner";
import FeaturedProducts from "./components/featured-products";
import Categories from "./components/categories";
import SpecialOffer from "./components/special-offer";
import Testimonials from "./components/testimonials";
import Newsletter from "./components/newsletter";
import Footer from "./components/footer";
import VideoBackground from "./background/video_background";
import Helper from "./components/Helper";

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
        <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] font-extrabold leading-tight">
          ZeKshop
        </h1>
        <p className="mt-4 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light">
          Pleasure in privacy.
        </p>
        <Button className="mt-6 text-lg md:text-xl lg:text-2xl px-8 py-4">
          Let's buy!
        </Button>
      </VideoBackground>
      <Helper />
      <Categories />
      <FeaturedProducts />
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

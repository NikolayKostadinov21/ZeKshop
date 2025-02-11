"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
// import { button } from "@/components/ui/button";

const carouselSlides = [
  {
    title: "Innovative Solutions",
    description:
      "Discover cutting-edge technology that transforms your business operations.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Seamless Integration",
    description:
      "Effortlessly integrate our platform with your existing systems and workflows.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "24/7 Support",
    description:
      "Our dedicated team is always ready to assist you, ensuring smooth operations around the clock.",
    image: "/placeholder.svg?height=400&width=600",
  },
];

const TRANSITION_DURATION = 3000; // 3 seconds

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: TRANSITION_DURATION,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [progress, setProgress] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("scroll", () => {
      const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
      setProgress(progress * 100);
    });

    // Autoplay
    const intervalId = setInterval(
      () => emblaApi.scrollNext(),
      TRANSITION_DURATION
    );

    return () => {
      clearInterval(intervalId);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {carouselSlides.map((slide, index) => (
            <div
              className="flex-[0_0_100%] min-w-0 relative transition-opacity duration-500"
              key={index}
            >
              <div className="h-[400px] md:h-[500px] relative">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      {slide.title}
                    </h2>
                    <p className="text-lg md:text-xl max-w-md mx-auto">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300">
        <div
          className="h-full bg-purple-600 transition-all duration-300 ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

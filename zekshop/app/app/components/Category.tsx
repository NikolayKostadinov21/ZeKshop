import React, { useState, useRef, useEffect } from "react";

interface CategoryProps {
  text: string;
  imageSrc: string;
  event: React.MouseEvent;
}

const Category: React.FC<CategoryProps> = ({ text, imageSrc, event }) => {
  const [hovered, setHovered] = useState(false);
  const { clientX, clientY } = event;
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: clientX,
    y: clientY,
  });
  const textRef = useRef<HTMLHeadingElement>(null);

  // Handle mouse movement inside text bounds
  const handleMouseMove = (event: React.MouseEvent) => {
    if (textRef.current) {
      const { left, right, top, bottom } =
        textRef.current.getBoundingClientRect();
      const { clientX, clientY } = event;

      // Update position **only if inside text bounds**
      if (
        clientX >= left &&
        clientX <= right &&
        clientY >= top &&
        clientY <= bottom
      ) {
        setPosition({ x: clientX, y: clientY });
      }
    }
  };

  // Fix: Reset hover state on refresh
  useEffect(() => {
    setHovered(false);
  }, []);

  // Detect scrolling and smoothly hide the image instead of instantly removing it
  useEffect(() => {
    const handleScroll = () => {
      setHovered(false); // Hide on scroll, but allow dissolve effect
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative flex items-center justify-center transition-all duration-300 cursor-pointer"
      onMouseEnter={(event) => {
        setHovered(true);
        setPosition({ x: event.clientX, y: event.clientY }); // Set position instantly on hover
      }}
      onMouseLeave={() => {
        setHovered(false); // Now instantly starts the dissolve effect
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Floating Image Following Mouse (Now with Cloud-Like Entry Effect) */}
      <div
        className={`fixed w-40 h-40 rounded-full overflow-hidden pointer-events-none transition-all ${
          hovered
            ? "opacity-100 scale-100 blur-0"
            : "opacity-0 scale-90 blur-lg" // Cloud-like appearance on hover-in
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          transition: hovered
            ? "opacity 0.7s ease-out, transform 0.5s ease-out, filter 0.5s ease-out"
            : "opacity 0.9s ease-out, transform 0.9s ease-out, filter 0.9s ease-out",
        }}
      >
        <img src={imageSrc} alt={text} className="w-full h-full object-cover" />
      </div>

      {/* Text (Using a Ref for Bounds) */}
      <h2
        ref={textRef}
        className={`text-7xl font-extrabold uppercase transition-all duration-300 ${
          hovered ? "text-white" : "text-transparent stroke-current stroke-2"
        }`}
        style={{
          WebkitTextStroke: hovered ? "0px white" : "3px white",
        }}
      >
        {text}
      </h2>
    </div>
  );
};

export default Category;

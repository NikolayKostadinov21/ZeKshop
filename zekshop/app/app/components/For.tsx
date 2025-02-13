import React, { useState } from "react";

interface ForProps {
  text: string;
  imageSrc: string;
}

const For: React.FC<ForProps> = ({ text, imageSrc }) => {
  const [hovered, setHovered] = useState(false);
  const [position, setPosition] = useState<{
    x: number | null;
    y: number | null;
  }>({
    x: null,
    y: null,
  });

  const handleMouseMove = (event: React.MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      className="relative flex items-center justify-center transition-all duration-300 cursor-pointer"
      onMouseEnter={(event) => {
        setHovered(true);
        setPosition({ x: event.clientX, y: event.clientY });
      }}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Floating Image Following Mouse (Now Slightly Smaller) */}
      {position.x !== null && position.y !== null && (
        <div
          className={`fixed w-40 h-40 rounded-full overflow-hidden pointer-events-none transition-all ${
            hovered ? "opacity-100 scale-100" : "opacity-0 scale-140 blur-md" // Softer cloud effect on exit
          }`}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: "translate(-50%, -50%)",
            transition: hovered
              ? "left 0.3s ease-out, top 0.3s ease-out"
              : "opacity 0.9s ease-out, transform 0.9s ease-out",
          }}
        >
          <img
            src={imageSrc}
            alt={text}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Text (Reduced Just a Bit More) */}
      <h2
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

export default For;

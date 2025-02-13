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

  // Update position only when the mouse moves
  const handleMouseMove = (event: React.MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      className="relative flex items-center justify-center transition-all duration-300 cursor-pointer"
      onMouseEnter={(event) => {
        setHovered(true);
        setPosition({ x: event.clientX, y: event.clientY }); // Set initial position instantly
      }}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Floating Image Following Mouse */}
      {hovered && position.x !== null && position.y !== null && (
        <div
          className={`fixed w-24 h-24 rounded-full overflow-hidden transition-opacity duration-300 pointer-events-none ${
            hovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: "translate(-50%, -50%)", // Centers the image on the cursor
            transition: "left 0.1s ease-out, top 0.1s ease-out",
          }}
        >
          <img
            src={imageSrc}
            alt={text}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Text */}
      <h2
        className={`text-5xl font-bold uppercase transition-all duration-300 ${
          hovered ? "text-white" : "text-transparent stroke-current stroke-2"
        }`}
        style={{
          WebkitTextStroke: hovered ? "0px white" : "2px white",
        }}
      >
        {text}
      </h2>
    </div>
  );
};

export default For;

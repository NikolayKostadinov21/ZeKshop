import React from "react";

interface VideoBackgroundProps {
  videoSrc: string;
  children?: React.ReactNode;
}

const VideoBackground = ({ videoSrc, children }: VideoBackgroundProps) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay for better readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Foreground Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;

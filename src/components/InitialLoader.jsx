import React, { useState, useEffect } from "react";

export default function AavahanMarvelLoader() {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("ASSEMBLING HEROES");
  const [dots, setDots] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsComplete(true);
          return 100;
        }
        return prev + Math.random() * 2.2;
      });
    }, 60);

    const textInterval = setInterval(() => {
      const texts = [
        "ASSEMBLING HEROES",
        "CHARGING ARC REACTOR",
        "SUMMONING THOR’S STORM",
        "CALLING THE AVENGERS",
        "PREPARING AAVAHAN EXPERIENCE",
        "POWERING UP SHIELD SYSTEMS",
      ];
      setLoadingText(texts[Math.floor(Math.random() * texts.length)]);
    }, 1800);

    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 600);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
      clearInterval(dotsInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0b0c10] via-[#1f2833] to-[#0b0c10]">
      {/* Hero PNG placeholders */}
      <div className="absolute inset-0 opacity-60">
        {[
          { src: "/ironman.webp", x: "10%", y: "25%", size: "w-28 sm:w-40 md:w-48" },
          { src: "/thor.webp", x: "75%", y: "30%", size: "w-28 sm:w-40 md:w-48" },
          { src: "/captain.webp", x: "50%", y: "70%", size: "w-32 sm:w-44 md:w-52" },
          { src: "/hulk.webp", x: "15%", y: "65%", size: "w-32 sm:w-44 md:w-52" },
          { src: "/blackwidow.png", x: "80%", y: "55%", size: "w-24 sm:w-36 md:w-44" },
        ].map((hero, i) => (
          <img
            key={i}
            src={hero.src}
            alt="hero"
            className={`absolute ${hero.size} object-contain`}
            style={{
              left: hero.x,
              top: hero.y,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-widest font-clash drop-shadow-[0_0_25px_rgba(255,0,0,0.4)]">
          AAVAHAN<span className="text-[#e62429]">-2K26</span>
        </h1>
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-chakra text-blue-400 mt-3 tracking-[0.15em] sm:tracking-[0.2em]">
          CULTURAL FEST • MARVEL EDITION
        </h3>

        {/* Energy Loader (Simplified) */}
        <div className="relative w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 mx-auto my-8">
          <div className="absolute inset-0 rounded-full border-4 border-t-[#e62429] border-blue-600/40 animate-spin-slow"></div>
          <div className="absolute inset-10 bg-gradient-to-br from-[#e62429] to-[#111] rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(230,36,41,0.7)]">
            <span className="text-white text-xl sm:text-2xl font-bold font-clash">
              {Math.floor(progress)}%
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 sm:w-80 md:w-96 mx-auto bg-gray-800/60 rounded-full h-3 sm:h-4 overflow-hidden border border-blue-500/30 mb-6">
          <div
            className="h-full bg-gradient-to-r from-red-600 via-blue-600 to-purple-600 transition-all duration-500 ease-out rounded-full shadow-[0_0_15px_rgba(59,130,246,0.7)]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Loading Text */}
        <p className="text-blue-400 font-clash tracking-wide text-sm sm:text-base md:text-lg mb-4">
          {loadingText}
          {dots}
        </p>

        {/* Completion */}
        {isComplete && (
          <div className="text-[#e62429] text-base sm:text-lg md:text-xl font-clash font-extrabold tracking-widest animate-pulse">
            🚀 READY TO ASSEMBLE!
          </div>
        )}

        {/* Tagline */}
        <div className="text-gray-400 text-xs sm:text-sm font-chakra tracking-widest mt-4">
          EXPERIENCE THE HEROIC CULTURE • AAVAHAN-2K26
        </div>
      </div>
    </div>
  );
}

/* Add to your global CSS or Tailwind config */

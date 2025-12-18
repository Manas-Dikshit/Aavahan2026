import React, { useEffect } from "react";
import Image from "next/image";

export default function EventSlider() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.0/vanilla-tilt.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const tiltElements = document.querySelectorAll("[data-tilt]");
      if (window.VanillaTilt) {
        window.VanillaTilt.init(tiltElements, {
          max: 20,
          speed: 400,
          glare: true,
          "max-glare": 0.4,
          scale: 1.05,
          perspective: 900,
        });
      }
    };
  }, []);

  const events = [
    {
      title: "Return Zer0",
      image: "/Eventposter/returnzero.png",
    },
    {
      title: "Satyanweshi",
      image: "/Eventposter/satyanweshi.png",
    },
    {
      title: "Zer0 Day CTF",
      image: "/Eventposter/zeroday.png",
    },
  ];

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center py-24 overflow-hidden"
      style={{ backgroundColor: "#004aad" }}
    >
      {/* ✨ Background glow layers */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div
          className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,0,0,0.5)_0%,transparent_80%)] blur-[120px] animate-float-slow"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,150,255,0.5)_0%,transparent_80%)] blur-[120px] animate-float-slow"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* 🔥 Title */}
      <h1 className="relative z-10 text-[2.7rem] md:text-[4rem] font-clash font-bold text-center leading-tight tracking-wider bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">
        Shades of AAVAHAN26
      </h1>

      {/* 🎞 Event Cards */}
      <div className="relative z-10 flex flex-wrap justify-center gap-12 md:gap-16 mt-16 px-8">
        {events.map((event, i) => (
          <div
            key={i}
            data-tilt
            className="relative group rounded-xl overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.3)] hover:shadow-[0_0_50px_rgba(0,74,173,0.6)] transition-all duration-500 bg-[#003b94]/30 border border-white/10 backdrop-blur-lg"
          >
            {/* Card wrapper */}
            <div className="relative w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] h-[22rem] xl:h-[30rem] transform-style-3d rounded-lg overflow-hidden">
              {/* Event Label */}
              <span className="absolute left-[-1rem] top-5 z-20 bg-[#004aad] text-white font-semibold text-2xl md:text-3xl font-clash px-5 py-2 rounded-r-lg shadow-[0_0_15px_rgba(0,74,173,0.4)]">
                {event.title}
              </span>

              {/* Event Image */}
              <Image
                src={event.image}
                alt={event.title}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-lg transform transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001a4d]/90 via-[#004aad]/40 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-lg border border-blue-300/30 group-hover:border-blue-400/70 group-hover:shadow-[0_0_35px_rgba(0,123,255,0.5)] transition-all duration-500"></div>
            </div>
          </div>
        ))}
      </div>

      {/* ✨ Animated gradient bar at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[5px] bg-gradient-to-r from-[#004aad] via-blue-400 to-red-500 blur-sm opacity-80"></div>

      {/* 🪄 Styles */}
      <style jsx>{`
        @keyframes float-slow {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-40px) translateX(20px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

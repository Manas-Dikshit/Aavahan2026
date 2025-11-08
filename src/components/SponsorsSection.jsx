"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SponsorsSection() {
  const topRow = [
    "/sponsor-logos/1.png",
    "/sponsor-logos/2.png",
    "/sponsor-logos/3.png",
    "/sponsor-logos/4.png",
    "/sponsor-logos/5.png",
  ];

  const bottomRow = [
    "/sponsor-logos/6.png",
    "/sponsor-logos/7.png",
    "/sponsor-logos/8.png",
    "/sponsor-logos/9.png",
    "/sponsor-logos/10.png",
    "/sponsor-logos/11.png",
  ];

  return (
    <section className="relative overflow-hidden bg-[#050B1E] py-24 px-4 md:px-8 text-white">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,204,255,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('/textures/grid.svg')] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0F2C]/50 to-[#030712]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-extrabold font-clash bg-gradient-to-r from-[#00ccff] via-[#c400ff] to-[#ff0040] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,204,255,0.7)]"
        >
          OUR PAST SPONSORS
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-gray-400 text-lg md:text-xl mt-4 mb-16 max-w-2xl mx-auto"
        >
          Honoring those who powered our journey — together, stronger than ever.
        </motion.p>

        <div className="space-y-20">
          {/* Top Row - seamless scroll left */}
          <div className="overflow-hidden relative">
            <div className="flex w-max animate-scroll-left">
              {[...topRow, ...topRow].map((src, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.15 }}
                  className="mx-8 flex-shrink-0 relative w-40 sm:w-48 md:w-56 aspect-[3/2]"
                >
                  <Image
                    src={src}
                    alt={`Sponsor ${i + 1}`}
                    fill
                    className="object-contain drop-shadow-[0_0_15px_rgba(0,204,255,0.6)] hover:drop-shadow-[0_0_30px_rgba(255,0,150,0.8)] transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Row - seamless scroll right */}
          <div className="overflow-hidden relative">
            <div className="flex w-max animate-scroll-right">
              {[...bottomRow, ...bottomRow].map((src, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.15 }}
                  className="mx-8 flex-shrink-0 relative w-40 sm:w-48 md:w-56 aspect-[3/2]"
                >
                  <Image
                    src={src}
                    alt={`Sponsor ${i + 6}`}
                    fill
                    className="object-contain drop-shadow-[0_0_15px_rgba(255,0,150,0.6)] hover:drop-shadow-[0_0_30px_rgba(0,204,255,0.8)] transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-12"
          >
            <button className="relative px-10 py-4 text-lg md:text-xl font-bold uppercase tracking-wide rounded-xl bg-gradient-to-r from-[#ff0040] via-[#c400ff] to-[#00ccff] text-white shadow-[0_0_20px_rgba(255,0,150,0.6)] hover:shadow-[0_0_30px_rgba(0,200,255,0.9)] transition-all duration-500 overflow-hidden">
              <span className="relative z-10">Become a Sponsor</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-glow-sweep" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Keyframe Animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        @keyframes glow-sweep {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-scroll-left {
          display: flex;
          width: max-content;
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
          display: flex;
          width: max-content;
          animation: scroll-right 40s linear infinite;
        }
        .animate-glow-sweep {
          animation: glow-sweep 3s linear infinite;
        }
      `}</style>
    </section>
  );
}

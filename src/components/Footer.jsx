import React from "react";
import Navlink from "./Navlink";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="relative flex flex-col h-fit overflow-hidden text-white border-t border-gray-800 bg-gradient-to-br from-[#0a0a0a] via-[#18181b] to-[#232326] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-xl">
      {/* 3D grid net background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%" viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="netGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#e62429" stopOpacity="0.10" />
            </linearGradient>
          </defs>
          <g stroke="url(#netGradient)" strokeWidth="1.5">
            {Array.from({ length: 18 }).map((_, i) => (
              <polyline
                key={i}
                points={Array.from({ length: 12 }).map((_, j) => `${j * 120},${Math.sin((i + j / 2) * 0.7) * 18 + i * 18}`).join(" ")}
                fill="none"
                opacity={0.18 + i * 0.01}
              />
            ))}
          </g>
        </svg>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#232326]/60 to-[#18181b]/80" />
      </div>

      <div className="flex flex-wrap relative z-10 gap-8 py-8 px-4 md:px-10 lg:px-20">
        {/* Contact Section */}
        <div className="w-full lg:w-[22rem] border-b border-gray-800/60 lg:border-b-0 lg:border-r p-8 lg:p-10 flex flex-col items-start justify-center glass-card rounded-2xl shadow-lg backdrop-blur-md">
          <p className="font-ibm text-stone-400 font-semibold text-[1.1rem] mb-2 uppercase tracking-wide">Get in Touch</p>
          <p className="font-chakra font-semibold italic text-2xl hover:text-[#3b82f6] transition-colors duration-300 cursor-pointer select-text">aavahan@suiit.ac.in</p>
          <p className="font-chakra text-sm text-white/60 mt-4 leading-relaxed">Sambalpur University Institute of Information Technology, Jyoti Vihar, Burla, Odisha, India</p>
        </div>

        {/* Quick Links Section */}
        <div className="font-chakra grow text-white/80 border-b border-gray-800/60 md:border-b-0 md:border-r min-w-[21rem] xl:min-w-[25rem] flex flex-col gap-5 p-8 lg:p-10 justify-center glass-card rounded-2xl shadow-lg backdrop-blur-md">
          <p className="font-semibold text-2xl md:text-[1.7rem] text-white mb-2">Quick Links</p>
          <div className="flex gap-10 text-[1rem] md:text-[1.1rem] font-chakra flex-wrap">
            <div className="flex flex-col gap-2 w-[6rem]">
              {["Home", "Events", "Brochure"].map((name) => (
                <div key={name} className="hover:text-white transition-colors duration-300">
                  <Navlink name={name} link={`/${name === "Home" ? "" : name.toLowerCase()}`} />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {["Team", "Contact"].map((name) => (
                <div key={name} className="hover:text-white transition-colors duration-300">
                  <Navlink name={name} link={`/${name.toLowerCase()}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social & Hashtag Section */}
        <div className="min-w-[18rem] grow text-white/70 glass-card rounded-2xl shadow-lg backdrop-blur-md flex flex-col justify-between">
          <div className="flex font-chakra italic justify-between border-gray-800/60 border-b lg:border-t xl:border-t-0 min-h-[7rem] items-center font-bold text-3xl md:text-4xl pl-6 pr-4">
            <div className="hover:text-[#3b82f6] transition-colors duration-300">
              <Navlink name={"#AAVAHAN2026"} link={"/"} />
            </div>
            <button
              onClick={scrollToTop}
              className="text-white hover:text-[#ffd700] hover:-rotate-45 transform transition-all duration-500 ease-in-out"
              aria-label="Scroll to top"
            >
              <FiArrowUpRight size="2.8rem" />
            </button>
          </div>
          <div className="flex gap-2 py-4 px-2 justify-center">
            <Link href="https://youtube.com/@suiitofficial" target="_blank" className="social-links flex items-center justify-center grow min-w-[4rem] min-h-[4rem] rounded-xl bg-black/30 hover:bg-white/10 transition-all duration-300 shadow-md">
              <FaYoutube size="2.2rem" />
            </Link>
            <Link href="https://www.instagram.com/suiit_official/" target="_blank" className="social-links flex items-center justify-center grow min-w-[4rem] min-h-[4rem] rounded-xl bg-black/30 hover:bg-white/10 transition-all duration-300 shadow-md">
              <FaInstagram size="2.2rem" />
            </Link>
            <Link href="https://www.facebook.com/suiit.official" target="_blank" className="social-links flex items-center justify-center grow min-w-[4rem] min-h-[4rem] rounded-xl bg-black/30 hover:bg-white/10 transition-all duration-300 shadow-md">
              <FaFacebookF size="2rem" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 font-clash flex flex-col sm:flex-row justify-between items-center gap-2 py-3 text-[10px] md:text-xs px-4 border-t border-gray-800/60 text-white/60 glass-card backdrop-blur-md">
        <p>© 2026 AAVAHAN • Sambalpur University Institute of Information Technology</p>
        <span className="flex gap-4">
          <p className="hover:text-white transition-colors duration-300 cursor-pointer">Terms & Conditions</p>
          <p className="hover:text-white transition-colors duration-300 cursor-pointer">Privacy Policy</p>
        </span>
      </div>

      {/* Subtle gradient energy edges */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-600 via-gray-400 to-red-600 blur-sm opacity-80"></div>
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-600 via-gray-400 to-blue-600 blur-sm opacity-80"></div>

      {/* Glassmorphism utility class */}
      <style jsx>{`
        .glass-card {
          background: rgba(30, 32, 38, 0.55);
          box-shadow: 0 8px 32px 0 rgba(31,38,135,0.17);
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.08);
        }
      `}</style>
    </footer>
  );
}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-600 via-yellow-400 to-blue-600 blur-sm opacity-80"></div>

import React from "react";
import Navlink from "./Navlink";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer
      className="
        relative flex flex-col h-fit overflow-hidden text-white 
        border-t border-gray-700/50 
        bg-gradient-to-br from-[#0a0a0a] via-[#1b1b1f] to-[#2e2e31]
      "
    >
      {/* glowing overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-[radial-gradient(circle_at_top_left,rgba(255,0,0,0.25),transparent_70%)] blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-[radial-gradient(circle_at_bottom_right,rgba(0,102,255,0.25),transparent_70%)] blur-2xl"></div>
      </div>

      <div className="flex flex-wrap relative z-10">
        {/* contact */}
        <div className="w-full lg:w-[22rem] border-b border-gray-700/50 lg:border-b-0 lg:border-r p-8 lg:p-10 flex flex-col items-start justify-center">
          <p className="font-ibm text-stone-400 font-semibold text-[1.1rem] mb-2 uppercase tracking-wide">
            Get in Touch
          </p>
          <p className="font-chakra font-semibold italic text-2xl hover:text-[#ff3d3d] transition-colors duration-300">
            aavahan@suiit.ac.in
          </p>
          <p className="font-chakra text-sm text-white/60 mt-4 leading-relaxed">
            Sambalpur University Institute of Information Technology, Jyoti Vihar, Burla, Odisha, India
          </p>
        </div>

        {/* quick links */}
        <div className="font-chakra grow text-white/80 border-b border-gray-700/50 md:border-b-0 md:border-r min-w-[21rem] xl:min-w-[25rem] flex flex-col gap-5 p-8 lg:p-10 justify-center">
          <p className="font-semibold text-2xl md:text-[1.7rem] text-white">Quick Links</p>
          <div className="flex gap-10 text-[1rem] md:text-[1.1rem] font-chakra">
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

        {/* social / hashtag */}
        <div className="min-w-[18rem] grow text-white/70">
          <div className="flex font-chakra italic justify-between border-gray-700/50 border-b lg:border-t xl:border-t-0 min-h-[7rem] items-center font-bold text-3xl md:text-4xl pl-6 pr-4">
            <div className="hover:text-[#ff3d3d] transition-colors duration-300">
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

          <div className="flex">
            <Link
              href="https://youtube.com/@suiitofficial"
              target="_blank"
              className="social-links flex items-center justify-center grow min-w-[5rem] min-h-[12rem]
                         hover:text-[#ff0000] hover:bg-white transition-all duration-300"
            >
              <FaYoutube size="2.8rem" />
            </Link>
            <Link
              href="https://www.instagram.com/suiit_official/"
              target="_blank"
              className="social-links flex items-center justify-center grow min-w-[5rem] min-h-[12rem]
                         hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]
                         hover:text-white transition-all duration-300"
            >
              <FaInstagram size="2.8rem" />
            </Link>
            <Link
              href="https://www.facebook.com/suiit.official"
              target="_blank"
              className="social-links flex items-center justify-center grow min-w-[5rem] min-h-[12rem]
                         hover:bg-[#1877f2] hover:text-white transition-all duration-300"
            >
              <FaFacebookF size="2.6rem" />
            </Link>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="relative z-10 font-clash flex flex-col sm:flex-row justify-between items-center gap-2 py-3 text-[10px] md:text-xs px-4 border-t border-gray-700/50 text-white/60">
        <p>© 2026 AAVAHAN • Sambalpur University Institute of Information Technology</p>
        <span className="flex gap-4">
          <p className="hover:text-white transition-colors duration-300 cursor-pointer">Terms & Conditions</p>
          <p className="hover:text-white transition-colors duration-300 cursor-pointer">Privacy Policy</p>
        </span>
      </div>

      {/* gradient energy edges */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-600 via-yellow-400 to-blue-600 blur-sm opacity-80"></div>
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-600 via-cyan-400 to-red-600 blur-sm opacity-80"></div>
    </footer>
  );
}

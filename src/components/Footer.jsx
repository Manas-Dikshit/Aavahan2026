import React from "react";
import Navlink from "./Navlink";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="h-fit flex flex-col bg-soothing_black text-white border-t border-gray-700/50 overflow-hidden">
      <div className="flex flex-wrap">
        {/* Contact Section */}
        <div className="w-full lg:w-[22rem] border-b border-gray-700/50 lg:border-b-0 lg:border-r p-8 lg:p-10 flex flex-col items-start justify-center">
          <p className="font-ibm text-stone-400 font-semibold text-[1.1rem] mb-2 uppercase tracking-wide">
            Get in Touch
          </p>
          <p className="font-chakra font-semibold italic text-2xl hover:text-[#fcb045] transition-colors duration-300">
            aavahan@suiit.ac.in
          </p>
          <p className="font-chakra text-sm text-white/60 mt-4 leading-relaxed">
            Sambalpur University Institute of Information Technology, Jyoti Vihar, Burla, Odisha, India
          </p>
        </div>

        {/* Quick Links */}
        <div className="font-chakra grow text-white/80 border-b border-gray-700/50 md:border-b-0 md:border-r min-w-[21rem] xl:min-w-[25rem] flex flex-col gap-5 p-8 lg:p-10 justify-center">
          <p className="font-semibold text-2xl md:text-[1.7rem] text-white">Quick Links</p>
          <div className="flex gap-10 text-[1rem] md:text-[1.1rem] font-chakra">
            <div className="flex flex-col gap-2 w-[6rem]">
              <div className="hover:text-white transition-colors duration-300">
                <Navlink name={"Home"} link={"/"} />
              </div>
              <div className="hover:text-white transition-colors duration-300">
                <Navlink name={"Events"} link={"/events"} />
              </div>
              <div className="hover:text-white transition-colors duration-300">
                <Navlink name={"Brochure"} link={"/Brochure.pdf"} />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="hover:text-white transition-colors duration-300">
                <Navlink name={"Team"} link={"/teams"} />
              </div>
              <div className="hover:text-white transition-colors duration-300">
                <Navlink name={"Contact"} link={"/contact"} />
              </div>
            </div>
          </div>
        </div>

        {/* Social & Hashtag */}
        <div className="min-w-[18rem] grow text-white/70">
          <div className="flex font-chakra italic justify-between border-gray-700/50 border-b lg:border-t xl:border-t-0 min-h-[7rem] items-center font-bold text-3xl md:text-4xl pl-6 pr-4">
            <div className="hover:text-[#fcb045] transition-colors duration-300">
              <Navlink name={"#AAVAHAN2026"} link={"/"} />
            </div>
            <button
              onClick={scrollToTop}
              className="text-white hover:text-[#fcb045] hover:-rotate-45 transform transition-all duration-500 ease-in-out"
              aria-label="Scroll to top"
            >
              <FiArrowUpRight size="2.8rem" />
            </button>
          </div>

          {/* Social Links */}
          <div className="flex">
            <Link
              href="https://youtube.com/@suiitofficial"
              target="_blank"
              className="social-links flex items-center justify-center grow min-w-[5rem] min-h-[12rem] hover:text-youtubeColor hover:bg-white transition-all duration-300"
            >
              <FaYoutube size="2.8rem" />
            </Link>
            <Link
              href="https://www.instagram.com/suiit_official/"
              target="_blank"
              className="social-links flex items-center justify-center grow min-w-[5rem] min-h-[12rem] hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:text-white transition-all duration-300"
            >
              <FaInstagram size="2.8rem" />
            </Link>
            <Link
              href="https://www.facebook.com/suiit.official"
              target="_blank"
              className="social-links flex items-center justify-center grow min-w-[5rem] min-h-[12rem] hover:bg-facebookColor hover:text-white transition-all duration-300"
            >
              <FaFacebookF size="2.6rem" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="font-clash flex flex-col sm:flex-row justify-between items-center gap-2 py-3 text-[10px] md:text-xs px-4 border-t border-gray-700/50 text-white/60">
        <p>© 2026 AAVAHAN • Sambalpur University Institute of Information Technology</p>
        <span className="flex gap-4">
          <p className="hover:text-white transition-colors duration-300 cursor-pointer">Terms & Conditions</p>
          <p className="hover:text-white transition-colors duration-300 cursor-pointer">Privacy Policy</p>
        </span>
      </div>
    </footer>
  );
}

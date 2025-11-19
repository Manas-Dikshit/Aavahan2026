"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

function Hero() {
  const title = useRef(null);
  const title1 = useRef(null);
  const subtitle = useRef(null);
  const subtitle2 = useRef(null);
  const date = useRef(null);
  const poster = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1.2, ease: "power3.out" } });

    tl.fromTo(title.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, delay: 0.3 })
      .fromTo(title1.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0 }, "-=0.8")
      .fromTo(subtitle.current, { opacity: 0, y: 80 }, { opacity: 1, y: 0 }, "-=0.6")
      .fromTo(subtitle2.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0 }, "-=0.5")
      .fromTo(date.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, "-=0.4")
      .fromTo(poster.current, { opacity: 0, scale: 0.9, y: 60 }, { opacity: 1, scale: 1, y: 0 }, "-=1");
  }, []);

  return (
    <section className="hero relative py-10 md:py-16 h-fit flex flex-col justify-center overflow-hidden">
      {/* ✅ Logo */}
      <div className="flex justify-center items-center mb-8 mt-6 z-10">
        <Image
          src="/Cultural logo.svg"
          alt="AAVAHAN26"
          width={0}
          height={0}
          className="w-28 sm:w-36 md:w-44 lg:w-48 object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]"
          draggable="false"
        />
      </div>

      {/* ✅ Main Content: Text + Poster */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 px-4 sm:px-6 md:px-10">
        {/* Text Content */}
        <div className="text-white flex flex-col items-center lg:items-start uppercase font-extrabold z-10 order-2 lg:order-1 text-center lg:text-left max-w-2xl">
          <h1
            ref={title}
            className="font-chakra text-sm sm:text-lg md:text-xl lg:text-2xl opacity-0 tracking-wider"
          >
            SAMBALPUR UNIVERSITY INSTITUTE OF INFORMATION TECHNOLOGY
          </h1>
          <h2
            ref={title1}
            className="font-chakra text-base sm:text-lg md:text-xl opacity-0 mt-2 text-gray-200"
          >
            presents
          </h2>

          <div
            ref={subtitle}
            className="font-clash flex flex-wrap justify-center lg:justify-start items-end gap-2 opacity-0 mt-4"
          >
            <span className="text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7rem] leading-none">
              AAVAHAN
            </span>
            <span className="text-main_primary relative font-chakra text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[10rem] font-black drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] leading-none">
              2026
            </span>
          </div>

          <span
            ref={subtitle2}
            className="opacity-0 block text-[2.5rem] sm:text-[4rem] md:text-[5.5rem] font-clash leading-none mt-[-1rem]"
          >
            CULTURAL FEST
          </span>

          <button className="mt-8 px-10 py-3 bg-main_primary text-white font-semibold font-clash rounded-lg shadow-md hover:bg-white hover:text-main_primary hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300">
            <a href="/Brochure.pdf" download>
              DOWNLOAD BROCHURE
            </a>
          </button>
        </div>

        {/* Poster Image */}
        <div ref={poster} className="z-10 order-1 lg:order-2 opacity-0">
          <Image
            src="/club-poster-cultural.png"
            alt="Aavahan Cultural Fest Poster"
            width={450}
            height={600}
            className="w-[260px] sm:w-[340px] md:w-[420px] lg:w-[460px] object-contain rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.15)] border border-white/20 hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:scale-[1.03] transition-transform duration-300"
            draggable="false"
          />
        </div>
      </div>

      {/* ✅ Dates */}
      <div
        ref={date}
        className="mt-12 opacity-0 mx-auto lg:mx-0 bg-white text-black font-chakra font-bold px-6 py-3 rounded-lg text-lg sm:text-xl md:text-2xl lg:text-3xl shadow-md w-fit"
      >
        <span className="block mb-1">
          February <span className="font-clash text-main_primary">2026</span>
        </span>
        <span className="flex justify-center gap-3 sm:gap-5 text-[1.8rem] md:text-[2.2rem]">
          <span>20<b className="text-[0.8rem]">TH</b></span>
          <span>21<b className="text-[0.8rem]">ST</b></span>
          <span>22<b className="text-[0.8rem]">ND</b></span>
        </span>
      </div>
    </section>
  );
}

export default Hero;

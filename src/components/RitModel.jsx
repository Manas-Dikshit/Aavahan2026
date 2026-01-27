import React from "react";
import Image from "next/image";

const AavahanImage = ({ src, alt, className, sizes }) => (
  <div className={`relative w-full h-64 sm:h-80 md:h-auto ${className || ""}`}>
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className="object-contain object-center bg-[#004aad]"
      priority
    />
  </div>
);

export default function RitModel() {
  return (
    <section
      className="w-full flex justify-center items-center py-16 px-4 lg:pt-20 bg-[#004aad]"
      aria-label="About AAVAHAN section"
    >
      <div className="w-full max-w-6xl flex flex-col items-center gap-10">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center text-white font-clash tracking-wider">
          About AAVAHAN
        </h2>

        <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-10 lg:gap-12 w-full">
          {/* Mobile Top Image */}
          <div className="md:hidden">
            <AavahanImage
              src="/ca.png"
              alt="Cultural highlights of AAVAHAN"
              sizes="(max-width: 768px) 100vw"
            />
          </div>

          {/* Left Image (Desktop/Tablet) */}
          <div className="hidden md:flex md:w-1/5 lg:w-1/5 items-stretch">
            <AavahanImage
              src="/ca.png"
              alt="AAVAHAN cultural highlights"
              sizes="(min-width: 1024px) 20vw, (min-width: 768px) 24vw"
            />
          </div>

          {/* Center Text */}
          <article className="w-full md:w-3/5 lg:w-3/5 rounded-3xl border border-cyan-400/20 shadow-[0_0_45px_rgba(0,255,255,0.2)] p-6 sm:p-8 md:p-8 lg:p-10 backdrop-blur-md bg-gradient-to-br from-[#003a8c] via-[#004aad] to-[#005be0]">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-chakra text-white/90 leading-relaxed text-justify">
              <span className="font-semibold text-cyan-300">AAVAHAN</span> is the annual cultural fest of Sambalpur
              University Institute of Information Technology, Jyoti Vihar, Burla. It’s celebrated with great enthusiasm
              and participation from students and professionals across the region. The event showcases talent,
              innovation, and creativity through competitions, workshops, and performances.
              <br />
              <br />
              Over the years, AAVAHAN has become a much-anticipated event, creating memorable experiences and showcasing
              powerful organizational acumen — culminating in vibrant celebrity nights on the SUIIT campus.
              <br />
              <br />
              Every year, this festival welcomes thousands of technical and non-technical students from across Odisha
              and beyond, offering an opportunity to experience the rich culture of Western Odisha. What began in 2014
              as a small college function has, within a decade, built its own reputation across the state. The 13th
              edition celebrates 15 years of SUIIT’s excellence — a milestone of pride and progress.
            </p>
          </article>

          {/* Right Image (Desktop/Tablet) */}
          <div className="hidden md:flex md:w-1/5 lg:w-1/5 items-stretch">
            <AavahanImage
              src="/ra.png"
              alt="Crowd and performances at AAVAHAN"
              sizes="(min-width: 1024px) 20vw, (min-width: 768px) 24vw"
            />
          </div>

          {/* Mobile Bottom Image */}
          <div className="md:hidden">
            <AavahanImage
              src="/ra.png"
              alt="AAVAHAN crowd and performances"
              sizes="(max-width: 768px) 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

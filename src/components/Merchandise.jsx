
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MarvelMerchandise() {
  const sectionRef = useRef(null);
  const spidermanRef = useRef(null);
  const blastRef = useRef(null);
  const merchRefs = useRef([]);

  const items = [
    { name: "Aavahan Tee", image: "/merch/tee.png", price: "₹499" },
    { name: "Aavahan Hoodie", image: "/merch/hoodie.png", price: "₹999" },
  ];

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    gsap.set([blastRef.current, spidermanRef.current, ...merchRefs.current], { opacity: 0 });
    gsap.set(merchRefs.current, { y: 40 });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
    tl.to(blastRef.current, { opacity: 1, scale: 2, duration: 0.4, ease: "power2.out" })
      .to(blastRef.current, { opacity: 0, scale: 5, duration: 0.6, ease: "power2.in" })
      .fromTo(
        spidermanRef.current,
        { opacity: 0, scale: 0.5, y: 120 },
        { opacity: 1, scale: 1, y: 0, duration: 1, ease: "elastic.out(1, 0.6)" },
        "-=0.3"
      );
    if (isMobile) {
      tl.to(spidermanRef.current, {
        opacity: 0,
        scale: 0.7,
        y: -50,
        duration: 0.8,
        ease: "power2.inOut",
        delay: 0.8,
      })
        .to(
          merchRefs.current,
          {
            opacity: 1,
            y: 0,
            stagger: 0.25,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.2"
        );
    } else {
      tl.to(spidermanRef.current, {
        x: -50,
        duration: 0.8,
        ease: "power2.inOut",
      }).to(
        merchRefs.current,
        {
          opacity: 1,
          y: 0,
          stagger: 0.25,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3"
      );
    }
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-screen text-white overflow-hidden py-20 flex flex-col items-center justify-center"
      style={{ backgroundColor: '#004aad' }}
    >
      {/* Cosmic shimmer background (restored) */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(`
            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\">
              <defs>
                <radialGradient id=\"a\" cx=\"50%\" cy=\"50%\" r=\"50%\">
                  <stop offset=\"0%\" style=\"stop-color:#ff0000;stop-opacity:0.25\"/>
                  <stop offset=\"100%\" style=\"stop-color:#001133;stop-opacity:0.1\"/>
                </radialGradient>
              </defs>
              <circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"url(#a)\"/>
            </svg>
          `)}')`,
        }}
      ></div>

      {/* Header */}
      <div className="relative z-10 text-center mb-14 px-6">
        <h2 className="text-[2.5rem] md:text-[4rem] font-extrabold uppercase tracking-tight bg-gradient-to-r from-white via-blue-300 to-blue-700 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,74,173,0.5)]">
          Marvel Collection
        </h2>
        <p className="text-blue-100 text-lg md:text-xl mt-4 max-w-2xl mx-auto leading-relaxed">
          Official <span className="text-blue-200 font-bold">AAVAHAN</span> Merchandise — heroic, bold, and iconic.
        </p>
      </div>

      {/* Energy blast */}
      <div
        ref={blastRef}
        className="absolute w-[250px] h-[250px] bg-[radial-gradient(circle,rgba(255,0,0,0.6)_0%,transparent_70%)] rounded-full blur-[80px] scale-0 opacity-0 z-10"
      ></div>

      {/* Main layout */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 max-w-7xl mx-auto px-6 relative z-20">
        {/* Spider-Man (restored) */}
        <div
          ref={spidermanRef}
          className="flex justify-center items-center lg:w-[380px] lg:h-[550px]"
        >
          <img
            src="/spiderman.png"
            alt="Spider-Man"
            className="w-[220px] sm:w-[300px] md:w-[360px] lg:w-[400px] drop-shadow-[0_0_50px_rgba(230,36,41,0.8)] transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Merchandise Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 flex-1 justify-center items-center">
          {items.map((item, i) => (
            <div
              key={i}
              ref={(el) => (merchRefs.current[i] = el)}
              className="relative aspect-square w-full sm:w-[260px] md:w-[300px] lg:w-[340px] rounded-2xl overflow-hidden glass-card shadow-lg hover:shadow-2xl transition-all duration-500 opacity-0 translate-y-10"
            >
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/90 via-[#004aad]/60 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-blue-100 text-xl md:text-2xl font-bold uppercase tracking-wide">
                  {item.name}
                </h3>
                <p className="text-blue-200 font-bold text-2xl mt-1">{item.price}</p>
                <button className="mt-3 bg-[#004aad] hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-md uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(0,74,173,0.3)] hover:shadow-[0_0_30px_rgba(0,74,173,0.5)]">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom subtle gradient bar */}
      <div className="absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-r from-[#004aad] via-blue-400 to-blue-900 opacity-80 blur-sm"></div>

      {/* Glassmorphism utility class */}
      <style jsx>{`
        .glass-card {
          background: rgba(0, 74, 173, 0.25);
          box-shadow: 0 8px 32px 0 rgba(0,74,173,0.17);
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.08);
        }
      `}</style>
    </div>
  );
}

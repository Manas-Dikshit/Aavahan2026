"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MarvelMerchandise() {
  const sectionRef = useRef(null);
  const spidermanRef = useRef(null);
  const blastRef = useRef(null);
  const merchRefs = useRef([]);

  const items = [
    { name: "Aavahan T-shirt front", image: "/front.jpeg", price: "₹300" },
    { name: "Aavahan T-shirt back", image: "/back.jpeg", price: "₹300" },
  ];

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const section = sectionRef.current;
    const blast = blastRef.current;
    const spider = spidermanRef.current;
    const merch = merchRefs.current.filter(Boolean);

    if (!section || !blast || !spider || merch.length === 0) return;

    // Initial setup
    gsap.set([blast, spider], { opacity: 0 });

    if (isMobile) {
      // On mobile, we start them at 0 to animate them IN via the timeline
      gsap.set(merch, { opacity: 0, y: 20 });
    } else {
      gsap.set(merch, { opacity: 0, y: 60, rotateY: 20 });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // 1. The Blast Effect
    tl.to(blast, {
      opacity: 1,
      scale: 2,
      duration: 0.4,
      ease: "power2.out",
    })
      .to(blast, {
        opacity: 0,
        scale: 5,
        duration: 0.8,
        ease: "power2.inOut",
      })
      // 2. Spider-Man Enters
      .fromTo(
        spider,
        { opacity: 0, scale: 0.5, y: 150, rotateY: -45 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotateY: 0,
          duration: 1,
          ease: "elastic.out(1, 0.6)",
        },
        "-=0.2"
      );

    // 3. Sequential Animation based on Device
    if (isMobile) {
      tl.to(spider, {
        opacity: 0,
        scale: 0.8,
        y: -50,
        duration: 0.8,
        ease: "power2.inOut",
        delay: 0.6,
      })
      .to(merch, {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: "power2.out",
        clearProps: "all" // Clears GSAP styles so CSS hover effects work
      }, "-=0.4");
    } else {
      tl.to(spider, {
        x: -80,
        rotateY: -15,
        duration: 0.8,
        ease: "power2.inOut",
      }).to(
        merch,
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          stagger: 0.25,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3"
      );
    }

    // Parallax mouse tilt (Desktop only effectively)
    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(spider, {
        rotationY: x * 20,
        rotationX: -y * 15,
        transformPerspective: 800,
        ease: "power2.out",
        duration: 0.6,
      });
    };

    section.addEventListener("mousemove", handleMouseMove);
    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
      section.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-screen text-white overflow-hidden py-20 flex flex-col items-center justify-center perspective"
      style={{
        backgroundColor: "#004aad",
      }}
    >
      {/* Header */}
      <div className="relative z-20 text-center mb-16 px-6">
        <h2 className="text-[2.8rem] md:text-[4.2rem] font-extrabold uppercase tracking-tight bg-gradient-to-r from-white via-blue-300 to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,74,173,0.6)]">
          Marvel Collection
        </h2>
        <p className="text-blue-100 text-lg md:text-xl mt-4 max-w-2xl mx-auto leading-relaxed">
          Official <span className="text-blue-200 font-bold">AAVAHAN</span>{" "}
          Merchandise — heroic, bold, and iconic.
        </p>
      </div>

      {/* Energy blast */}
      <div
        ref={blastRef}
        className="absolute w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(255,0,0,0.8)_0%,transparent_70%)] rounded-full blur-[100px] scale-0 opacity-0 z-10"
      ></div>

      {/* Main layout */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 max-w-7xl mx-auto px-6 relative z-20 transform-gpu">
        {/* Spider-Man */}
        <div
          ref={spidermanRef}
          className="flex justify-center items-center lg:w-[380px] lg:h-[550px] transform-style-3d"
        >
          <Image
            src="/spider.png"
            alt="Spider-Man"
            width={420}
            height={560}
            sizes="(max-width: 640px) 240px, (max-width: 1024px) 340px, 420px"
            className="w-[240px] sm:w-[340px] lg:w-[420px] h-auto transition-transform duration-700 hover:scale-110"
          />
        </div>

        {/* Merchandise Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 flex-1 justify-center items-center">
          {items.map((item, i) => (
            <div
              key={i}
              ref={(el) => (merchRefs.current[i] = el)}
              className="relative aspect-square w-full sm:w-[260px] md:w-[300px] lg:w-[340px] rounded-3xl overflow-hidden glass-card shadow-xl hover:shadow-2xl transition-all duration-500 transform-style-3d"
            >
              <div className="relative w-full h-full group perspective">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 340px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/90 via-[#004aad]/60 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-blue-100 text-xl md:text-2xl font-bold uppercase tracking-wide">
                    {item.name}
                  </h3>
                  <p className="text-blue-200 font-bold text-2xl mt-1">{item.price}</p>
                  <button className="mt-3 bg-[#004aad] hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-md uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,74,173,0.3)] hover:shadow-[0_0_40px_rgba(0,74,173,0.6)] hover:scale-105">
                    <a
                      href="https://forms.gle/dbhxyiaUZoixqxiPA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      Register Now
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient bar */}
      <div className="absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-r from-[#004aad] via-blue-400 to-red-500 opacity-90 blur-sm"></div>

      <style jsx>{`
        .glass-card {
          background: rgba(0, 74, 173, 0.2);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          transform-style: preserve-3d;
        }
        .glass-card:hover {
          transform: rotateY(8deg) rotateX(4deg) scale(1.05);
          box-shadow: 0 0 40px rgba(0, 74, 173, 0.4);
        }
        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}
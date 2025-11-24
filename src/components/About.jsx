import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Navlink from "./Navlink";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const trigger = useRef(null);
  const suiitHeading = useRef(null);
  const aboutbit = useRef(null);
  const videoRef = useRef(null);
  const aurora = useRef(null);
  const particlesRef = useRef(null); // New ref for subtle particle effect

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero SVG entrance - Optimized for smoothness and reduced latency
      gsap.fromTo(
        trigger.current,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8, // Reduced duration for better performance
          ease: "power2.out",
          scrollTrigger: { trigger: trigger.current, start: "top 85%", once: true }, // Added 'once' to prevent re-triggering
        }
      );

      // Heading entrance - Smoother and faster
      gsap.fromTo(
        suiitHeading.current,
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: suiitHeading.current, start: "top 80%", once: true },
        }
      );

      // About content fade - Streamlined
      gsap.fromTo(
        aboutbit.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { trigger: aboutbit.current, start: "top 85%", once: true },
        }
      );

      // Stagger inner elements - Reduced stagger for efficiency
      gsap.fromTo(
        aboutbit.current.querySelectorAll("p, video"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power1.out",
          stagger: 0.1, // Reduced stagger
          scrollTrigger: { trigger: aboutbit.current, start: "top 85%", once: true },
        }
      );

      // Soft Aurora movement - Kept subtle, optimized
      gsap.to(aurora.current, {
        backgroundPosition: "180% 0%",
        duration: 60,
        ease: "none",
        repeat: -1,
      });

      // Subtle particle animation for Marvel multiverse vibe - New addition for attractiveness
      if (particlesRef.current) {
        gsap.to(particlesRef.current.children, {
          y: "-=10",
          opacity: 0.5,
          duration: 3,
          ease: "power1.inOut",
          stagger: 0.2,
          repeat: -1,
          yoyo: true,
        });
      }

      // Smooth parallax hover - Optimized for GPU
      const video = videoRef.current;
      if (video) {
        let animationFrame;
        const handleMove = (e) => {
          cancelAnimationFrame(animationFrame);
          animationFrame = requestAnimationFrame(() => {
            const rect = video.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(video, {
              rotationY: x / 60,
              rotationX: -y / 60,
              scale: 1.03,
              duration: 0.2, // Faster for responsiveness
              ease: "power1.out",
            });
          });
        };

        const reset = () => {
          cancelAnimationFrame(animationFrame);
          gsap.to(video, {
            rotationY: 0,
            rotationX: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        video.addEventListener("mousemove", handleMove);
        video.addEventListener("mouseleave", reset);
        return () => {
          video.removeEventListener("mousemove", handleMove);
          video.removeEventListener("mouseleave", reset);
        };
      }
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      className="relative min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 text-white overflow-hidden"
      style={{ backgroundColor: "#004aad", perspective: "1000px" }}
      role="main" // Added for accessibility
      aria-labelledby="about-heading"
    >
      {/* Aurora Background - Enhanced with subtle multiverse gradient */}
      <div
        ref={aurora}
        className="absolute inset-0 opacity-15 bg-[length:200%_200%] bg-gradient-to-r from-pink-500/10 via-blue-500/20 to-cyan-400/10 pointer-events-none"
      ></div>

      {/* Subtle Particles for Marvel Multiverse Effect - New for attractiveness */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* AAVAHAN SVG Section - Made larger and more responsive for "perfectness" */}
      <div
        ref={trigger}
        className="relative z-10 flex justify-center items-center mt-24 mb-24 px-4 sm:px-6 md:px-10"
      >
        <img
          src="./about-aavahan.svg"
          alt="AAVAHAN 26 - The Cultural Fest of SUIIT"
          className="w-[95%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[60%] max-w-[1200px] h-auto drop-shadow-[0_0_35px_rgba(255,255,255,0.25)] hover:scale-[1.02] transition-transform duration-600 ease-[cubic-bezier(0.25,1,0.5,1)]"
          loading="eager" // Preload for better performance
        />
      </div>

      {/* About SUIIT Section */}
      <div className="relative mt-10 z-10">
        <div className="flex justify-center mb-8 text-center">
          <h2
            id="about-heading" // Added for accessibility
            ref={suiitHeading}
            className="font-clash text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-extrabold bg-gradient-to-r from-blue-300 via-cyan-300 to-sky-500 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(0,204,255,0.5)] tracking-tight leading-tight"
          >
            About <Navlink name={"SUIIT"} link={"/#"} />
          </h2>
        </div>

        <div
          ref={aboutbit}
          className="flex flex-col xl:flex-row items-center gap-10 mt-8 bg-gradient-to-br from-[#0b173d] via-[#1a2a6c] to-[#2e3192] p-8 sm:p-10 rounded-3xl shadow-[0_0_50px_rgba(0,255,255,0.35)] border border-cyan-400/20 backdrop-blur-md hover:shadow-[0_0_80px_rgba(0,255,255,0.45)] transition-all duration-600 ease-out"
        >
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-chakra font-medium leading-relaxed text-white/90 flex-1 text-justify">
            <b className="text-cyan-400">
              Sambalpur University Institute of Information Technology (SUIIT)
            </b>{" "}
            is a{" "}
            <b className="text-yellow-400">
              Constituent Autonomous Unit of Sambalpur University
            </b>{" "}
            in the line of India’s premier <b>IIITs</b>,{" "}
            <b className="text-green-400">Approved by AICTE</b> and{" "}
            <b className="text-red-400">Accredited Grade A by NAAC</b>.
            <br className="my-2" />
            Guided by the motto —{" "}
            <b className="italic text-white">
              “Leveraging Technology • Inspiring Innovation • Flourishing
              Mankind”
            </b>{" "}
            — SUIIT strives to cultivate leaders who redefine technology and
            humanity.
            <br className="my-4" />
            Situated in the serene campus of{" "}
            <b className="text-blue-300">Jyoti Vihar, Burla</b>, SUIIT blends
            academic brilliance with creativity and collaboration. It offers a
            dynamic environment for exploration, innovation, and holistic
            development — shaping the{" "}
            <b>next generation of superheroes</b> in science, art, and
            technology.
          </p>

          <video
            ref={videoRef}
            src="/b2b.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata" // Added for better loading
            className="w-full md:w-[32rem] xl:w-[28rem] h-[18rem] md:h-[20rem] object-cover rounded-2xl border border-cyan-400/40 shadow-[0_0_40px_rgba(0,255,255,0.3)] transition-transform duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer transform-gpu"
            aria-label="Promotional video of SUIIT" // Added for accessibility
          />
        </div>
      </div>

      {/* Removed custom keyframes as GSAP handles it */}
    </div>
  );
}

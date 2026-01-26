import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Navlink from "./Navlink";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const trigger = useRef(null);
  const suiitHeading = useRef(null);
  const aboutbit = useRef(null);
  const videoRef = useRef(null);

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
      style={{ backgroundColor: "#004aad" }}
      role="main" // Added for accessibility
      aria-labelledby="about-heading"
    >
      
      {/* About SUIIT Section */}
      <div className="relative mt-10 z-10">
        <div className="flex items-center justify-center gap-6 sm:gap-10 md:gap-12 mb-8 text-center">
          <Image
            src="/Onemore.png"
            alt="Superhero swinging pose"
            width={140}
            height={260}
            className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto drop-shadow-[0_0_18px_rgba(0,0,0,0.6)] -rotate-45"
            priority
          />
          <h2
            id="about-heading" // Added for accessibility
            ref={suiitHeading}
            className="font-clash text-[2.1rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] font-extrabold bg-gradient-to-r from-blue-300 via-cyan-300 to-sky-500 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(0,204,255,0.5)] tracking-tight leading-tight px-4"
          >
            About <Navlink name={"SUIIT"} link={"/#"} />
          </h2>
          <Image
            src="/Onemore.png"
            alt="Superhero swinging pose"
            width={140}
            height={260}
            className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto drop-shadow-[0_0_18px_rgba(0,0,0,0.6)] rotate-45"
            priority
          />
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
            className="w-full md:w-[32rem] xl:w-[28rem] h-[18rem] md:h-[20rem] object-cover rounded-2xl border border-cyan-400/40 shadow-[0_0_40px_rgba(0,255,255,0.3)] transition-transform duration-200 ease-out cursor-pointer transform-gpu"
            aria-label="Promotional video of SUIIT" // Added for accessibility
          />
        </div>
      </div>

      {/* Removed custom keyframes as GSAP handles it */}
    </div>
  );
}

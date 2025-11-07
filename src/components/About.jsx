import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Navlink from "./Navlink";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const trigger = useRef(null);
  const aboutb2b = useRef(null);
  const aboutbit = useRef(null);
  const heroText = useRef(null);
  const subText = useRef(null);
  const suiitHeading = useRef(null);
  const videoRef = useRef(null);

  // Properly encoded SVG for cosmic background
  const svgData = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><radialGradient id="a" cx="50%" cy="50%" r="50%"><stop offset="0%" style="stop-color:#ff0000;stop-opacity:0.1"/><stop offset="100%" style="stop-color:#007bff;stop-opacity:0.05"/></radialGradient></defs><circle cx="50" cy="50" r="50" fill="url(#a)"/></svg>`);

  useEffect(() => {
    // Master timeline for coordinated animations
    const masterTl = gsap.timeline();

    // Hero text animation with Marvel-style entrance
    gsap.fromTo(
      heroText.current,
      { opacity: 0, scale: 0.8, rotationY: -90 },
      {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: trigger.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Subtext fade-in
    gsap.fromTo(
      subText.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: trigger.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // AAVAHAN description with staggered Marvel-like reveals
    gsap.fromTo(
      aboutb2b.current.children,
      { opacity: 0, x: -100, filter: "blur(10px)" },
      {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 1.5,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutb2b.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // SUIIT section with cinematic pan
    gsap.fromTo(
      suiitHeading.current,
      { opacity: 0, scale: 0.5, rotationX: -45 },
      {
        opacity: 1,
        scale: 1,
        rotationX: 0,
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: suiitHeading.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // About SUIIT content with parallax-like effect
    gsap.fromTo(
      aboutbit.current,
      { opacity: 0, y: 100, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.6,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: aboutbit.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Video hover effect
    gsap.set(videoRef.current, { scale: 1 });
    videoRef.current.addEventListener("mouseenter", () => {
      gsap.to(videoRef.current, { scale: 1.05, duration: 0.3, ease: "power2.out" });
    });
    videoRef.current.addEventListener("mouseleave", () => {
      gsap.to(videoRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 bg-gradient-to-b from-[#0b0c10] via-[#1f2833] to-[#0b0c10] text-white overflow-hidden">
      {/* Cosmic Background Effect */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ backgroundImage: `url('data:image/svg+xml,${svgData}')` }}
      ></div>

      {/* Cinematic Heading with Marvel Vibe */}
      <div className="flex flex-col text-center sm:text-left relative z-10">
        <h2 className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-clash font-extrabold tracking-tight">
          <span
            ref={subText}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-400 to-blue-600 drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] animate-pulse"
          >
            You might be thinking,
          </span>
          <span className="block mt-2 text-white text-shadow-lg">what is</span>
        </h2>

        <div ref={trigger} className="mt-4">
          <h1
            ref={heroText}
            className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] xl:text-[8rem] font-extrabold text-center sm:text-left text-transparent bg-clip-text bg-gradient-to-r from-[#ff0000] via-[#f8b700] to-[#007bff] animate-pulse drop-shadow-[0_0_30px_rgba(255,215,0,0.5)]"
          >
            <Navlink name={"AAVAHAN26 ?"} link={"/#"} />
          </h1>
        </div>
      </div>

      {/* AAVAHAN Description with Enhanced Styling */}
      <div
        ref={aboutb2b}
        className="font-chakra mt-10 space-y-8 text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed text-white/90 max-w-6xl mx-auto bg-gradient-to-r from-black/20 to-transparent p-8 rounded-2xl border border-red-500/20 shadow-[0_0_40px_rgba(255,0,0,0.2)] backdrop-blur-sm"
      >
        <p className="transform hover:scale-105 transition-transform duration-300">
          <b className="text-red-500 glow-red">AAVAHAN</b> is the annual cultural fest of{" "}
          <b className="text-blue-400 glow-blue">
            Sambalpur University Institute of Information Technology (SUIIT)
          </b>
          , Jyoti Vihar, Burla — celebrated with boundless enthusiasm and
          participation from students and professionals across the region. It
          brings together <b>talent, innovation, and creativity</b> through a
          dazzling mix of competitions, workshops, and performances.
        </p>

        <p className="transform hover:scale-105 transition-transform duration-300">
          Over the years, <b>AAVAHAN</b> has evolved into a{" "}
          <b>symbol of unity, art, and innovation</b>, known for its spectacular
          celebrity nights, vibrant performances, and electrifying energy that
          lights up the <b>SUIIT campus</b>.
        </p>

        <p className="transform hover:scale-105 transition-transform duration-300">
          Each edition welcomes <b>thousands of students</b> from across Odisha
          and beyond, giving them a chance to experience the{" "}
          <b>rich culture of Western Odisha</b> — a celebration of passion,
          creativity, and youth spirit.
        </p>

        <p className="transform hover:scale-105 transition-transform duration-300">
          What began in <b>2014</b> as a humble college function has transformed
          into one of Odisha’s most renowned cultural extravaganzas. As{" "}
          <b>AAVAHAN</b> enters its <b>13th edition</b>, it continues to expand
          its vision — celebrating <b>15 years of SUIIT’s excellence</b> and
          stepping into a new era of cultural and technological brilliance.
        </p>
      </div>

      {/* About SUIIT Section with Marvel Card Design */}
      <div className="relative mt-20 z-10">
        <div className="flex justify-center mb-8">
          <h2
            ref={suiitHeading}
            className="font-clash text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] font-extrabold bg-gradient-to-r from-blue-400 via-sky-500 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,204,255,0.6)] animate-bounce"
          >
            About <Navlink name={"SUIIT"} link={"/#"} />
          </h2>
        </div>

        <div
          ref={aboutbit}
          className="flex flex-col xl:flex-row items-center gap-8 mt-8 bg-gradient-to-br from-[#141e30] via-[#243b55] to-[#0b0c10] p-6 sm:p-10 rounded-3xl shadow-[0_0_50px_rgba(0,255,255,0.4)] border border-cyan-400/40 backdrop-blur-lg hover:shadow-[0_0_70px_rgba(0,255,255,0.6)] transition-shadow duration-500"
        >
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-chakra font-medium leading-relaxed text-white/90 flex-1">
            <b className="text-cyan-400 glow-cyan">
              Sambalpur University Institute of Information Technology (SUIIT)
            </b>{" "}
            is a{" "}
            <b className="text-yellow-400 glow-yellow">
              Constituent Autonomous Unit of Sambalpur University
            </b>{" "}
            in the line of India’s premier <b>IIITs</b>,{" "}
            <b className="text-green-400 glow-green">Approved by AICTE</b> and{" "}
            <b className="text-red-400 glow-red">Accredited Grade A by NAAC</b>.
            <br className="my-2" />
            Guided by the motto —{" "}
            <b className="italic text-white glow-white">
              “Leveraging Technology • Inspiring Innovation • Flourishing
              Mankind”
            </b>{" "}
            — SUIIT strives to cultivate leaders who redefine technology and
            humanity.
            <br className="my-4" />
            Situated in the serene campus of{" "}
            <b className="text-blue-300 glow-blue">Jyoti Vihar, Burla</b>, SUIIT blends
            academic brilliance with creativity and collaboration. It offers a
            dynamic environment for exploration, innovation, and holistic
            development — shaping the <b>next generation of superheroes</b> in
            science, art, and technology.
          </p>

          <video
            ref={videoRef}
            src="/b2b.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full md:w-[30rem] xl:w-[28rem] h-[18rem] md:h-[20rem] object-cover rounded-2xl border-2 border-cyan-400/60 shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all duration-500 cursor-pointer"
          />
        </div>
      </div>

      {/* Custom CSS for Glow Effects */}
      <style jsx>{`
        .glow-red { text-shadow: 0 0 10px rgba(255, 0, 0, 0.8); }
        .glow-blue { text-shadow: 0 0 10px rgba(0, 123, 255, 0.8); }
        .glow-cyan { text-shadow: 0 0 10px rgba(0, 255, 255, 0.8); }
        .glow-yellow { text-shadow: 0 0 10px rgba(255, 215, 0, 0.8); }
        .glow-green { text-shadow: 0 0 10px rgba(0, 255, 0, 0.8); }
        .glow-white { text-shadow: 0 0 10px rgba(255, 255, 255, 0.8); }
        .text-shadow-lg { text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); }
      `}</style>
    </div>
  );
}

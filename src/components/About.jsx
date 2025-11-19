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
  const aurora = useRef(null);

  const svgData = encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <defs>
        <radialGradient id="a" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style="stop-color:#ff0000;stop-opacity:0.1"/>
          <stop offset="100%" style="stop-color:#007bff;stop-opacity:0.05"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="50" fill="url(#a)"/>
    </svg>`);

  useEffect(() => {
    // Hero animations
    gsap.fromTo(
      heroText.current,
      { opacity: 0, scale: 0.9, rotateY: -30 },
      {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: { trigger: trigger.current, start: "top 80%" },
      }
    );

    gsap.fromTo(
      subText.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: { trigger: trigger.current, start: "top 90%" },
      }
    );

    // Content fade-in
    gsap.fromTo(
      aboutb2b.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: { trigger: aboutb2b.current, start: "top 85%" },
      }
    );

    gsap.fromTo(
      suiitHeading.current,
      { opacity: 0, scale: 0.8, y: 40 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: suiitHeading.current, start: "top 80%" },
      }
    );

    gsap.fromTo(
      aboutbit.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: { trigger: aboutbit.current, start: "top 85%" },
      }
    );

    // Video hover parallax
    videoRef.current.addEventListener("mousemove", (e) => {
      const rect = videoRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(videoRef.current, {
        rotationY: x / 40,
        rotationX: -y / 40,
        scale: 1.05,
        duration: 0.3,
      });
    });

    videoRef.current.addEventListener("mouseleave", () => {
      gsap.to(videoRef.current, {
        rotationY: 0,
        rotationX: 0,
        scale: 1,
        duration: 0.4,
      });
    });

    // Floating aurora lights
    gsap.to(aurora.current, {
      backgroundPosition: "200% 0%",
      duration: 20,
      ease: "linear",
      repeat: -1,
    });

    // Cleanup
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div
      className="relative min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 text-white overflow-hidden"
      style={{ backgroundColor: "#004aad", perspective: "1000px" }}
    >
      {/* Subtle cosmic background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: `url('data:image/svg+xml,${svgData}')`, backgroundSize: "cover" }}
      />

      {/* Animated aurora gradient */}
      <div
        ref={aurora}
        className="absolute inset-0 opacity-30 bg-[length:200%_200%] bg-gradient-to-r from-pink-500/20 via-blue-500/30 to-cyan-400/20 animate-[aurora_12s_infinite]"
      ></div>

      {/* Hero Section */}
      <div ref={trigger} className="relative z-10 text-center sm:text-left space-y-4 mt-12">
        <h2 className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-clash font-extrabold">
          <span
            ref={subText}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-blue-300 drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
          >
            You might be thinking,
          </span>
          <span className="block mt-2 text-white text-shadow-lg">what is</span>
        </h2>

        <h1
          ref={heroText}
          className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] xl:text-[8rem] font-extrabold text-center sm:text-left text-transparent bg-clip-text bg-gradient-to-r from-[#ff0000] via-[#f8b700] to-[#00c6ff] drop-shadow-[0_0_40px_rgba(255,215,0,0.6)]"
        >
          <Navlink name={"AAVAHAN26 ?"} link={"/#"} />
        </h1>
      </div>

      {/* About AAVAHAN */}
      <div
        ref={aboutb2b}
        className="mt-10 space-y-8 text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed text-white/90 max-w-6xl mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
      >
        <p>
          <b className="text-red-400">AAVAHAN</b> is the annual cultural fest of{" "}
          <b className="text-blue-400">
            Sambalpur University Institute of Information Technology (SUIIT)
          </b>, Jyoti Vihar, Burla — celebrated with boundless enthusiasm and
          participation from students and professionals across the region.
        </p>

        <p>
          Over the years, <b>AAVAHAN</b> has evolved into a{" "}
          <b>symbol of unity, art, and innovation</b>, known for its spectacular
          celebrity nights, vibrant performances, and electrifying energy that
          lights up the <b>SUIIT campus</b>.
        </p>

        <p>
          Each edition welcomes <b>thousands of students</b> from across Odisha
          and beyond, giving them a chance to experience the{" "}
          <b>rich culture of Western Odisha</b> — a celebration of passion,
          creativity, and youth spirit.
        </p>

        <p>
          What began in <b>2014</b> as a humble college function has transformed
          into one of Odisha’s most renowned cultural extravaganzas. As{" "}
          <b>AAVAHAN</b> enters its <b>13th edition</b>, it continues to expand
          its vision — celebrating <b>15 years of SUIIT’s excellence</b> and
          stepping into a new era of cultural and technological brilliance.
        </p>
      </div>

      {/* About SUIIT */}
      <div className="relative mt-20 z-10">
        <div className="flex justify-center mb-8">
          <h2
            ref={suiitHeading}
            className="font-clash text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] font-extrabold bg-gradient-to-r from-blue-300 via-cyan-300 to-sky-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,204,255,0.7)]"
          >
            About <Navlink name={"SUIIT"} link={"/#"} />
          </h2>
        </div>

        <div
          ref={aboutbit}
          className="flex flex-col xl:flex-row items-center gap-8 mt-8 bg-gradient-to-br from-[#0b173d] via-[#1a2a6c] to-[#2e3192] p-8 sm:p-10 rounded-3xl shadow-[0_0_60px_rgba(0,255,255,0.4)] border border-cyan-400/30 backdrop-blur-xl hover:shadow-[0_0_100px_rgba(0,255,255,0.6)] transition-all duration-700 transform-gpu"
        >
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-chakra font-medium leading-relaxed text-white/90 flex-1">
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
            className="w-full md:w-[30rem] xl:w-[28rem] h-[18rem] md:h-[20rem] object-cover rounded-2xl border-2 border-cyan-400/60 shadow-[0_0_40px_rgba(0,255,255,0.4)] transition-transform duration-500 cursor-pointer transform-gpu"
          />
        </div>
      </div>

      {/* Custom effects */}
      <style jsx>{`
        @keyframes aurora {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .text-shadow-lg {
          text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
        }
      `}</style>
    </div>
  );
}

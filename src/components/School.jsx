import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function School() {
  return ( 

    <section className="w-full mt-2 bg-gradient-to-br from-soothing_black via-primary to-black text-white overflow-hidden">

 
      {/* OUTER BORDER CARD */}
      <div className="border-4 border-main_primary/40 rounded-2xl shadow-2xl bg-gradient-to-br from-soothing_black/95 via-primary/20 to-soothing_black/95 backdrop-blur-sm">

        {/* EVENTS HERO */}
        <div className="relative w-full">

          {/* VIDEO */}
          <video
            src="/Events.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[70vh] md:h-[80vh] lg:h-[85vh] object-cover rounded-2xl"
          />

          {/* TEXT OVERLAY */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 md:pb-10 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-2xl">

            <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-main_primary font-semibold mb-2">
              Friday, February 27
            </p>

            <p className="text-base md:text-2xl font-chakra text-center leading-relaxed mb-5">
              One fest Endless memories,  Be there
            </p>

            <a
              href="#"
              className="px-12 py-3 bg-main_primary text-white font-semibold rounded-md hover:bg-white hover:text-main_primary transition"
            >
              Register Now
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

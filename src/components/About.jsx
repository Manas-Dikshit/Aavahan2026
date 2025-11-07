import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Navlink from "./Navlink";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const trigger = useRef(null);
  const aboutb2b = useRef(null);
  const aboutbit = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      trigger.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: trigger.current,
          start: window.innerWidth > 768 ? "top 80%" : "top 20%",
          end: "bottom 80%",

          ease: "power4.eae-InOut",
        },
      }
    );
  }, []);

  return (
    <div className="h-fit relative p-4 sm:p-6 md:p-8 lg:p-8 xl:p-10">
      <div className="about flex flex-wrap text-white tracking-wide sm:tracking-wider md:tracking-widest xl:tracking-[.5rem] text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6.7rem] leading-[35px] sm:leading-[50px] md:leading-[65px] lg:leading-[75px] xl:leading-[85px] font-clash font-bold mt-8 sm:mt-12 md:mt-16">
        <span>You might be</span>
        <span>Thinking what is</span>
        <span ref={trigger} className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] xl:text-[8rem] mt-2 md:mt-4 lg:mt-8">
          <h1 className="text-turquise">
            <Navlink name={"AAVAHAN26 ?"} link={"/#"} />
          </h1>
        </span>
        <span className="mt-2 md:mt-4 lg:mt-8"></span>
      </div>

      <div className="font-chakra py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 space-y-4 sm:space-y-6 md:space-y-8">
        <span
          ref={aboutb2b}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-medium block leading-relaxed tracking-wide"
        >
          <b>AAVAHAN</b> is the annual cultural fest of <b>Sambalpur University Institute of Information Technology (SUIIT), Jyoti Vihar, Burla</b> — celebrated with great enthusiasm and participation from students and professionals across the region. The event showcases <b>talent, innovation, and creativity</b> through various competitions, workshops, and performances.
          <br className="my-4" />
          Over the years, <b>AAVAHAN</b> has become a much-anticipated event, drawing a large audience and creating <b>memorable experiences</b>. It expresses the <b>spectrums of joy and happiness</b> combined with powerful organizational acumen and <b>celebrity nights</b> on the SUIIT campus.
          <br className="my-4" />
          Every year, this festival welcomes <b>thousands of students</b> — both technical and non-technical — from all over Odisha and beyond, providing an opportunity to experience and enjoy the <b>rich culture of Western Odisha</b>.
          <br className="my-4" />
          What started in <b>2014</b> as a simple college function has grown to earn a strong reputation across Odisha in just a decade. As <b>AAVAHAN</b> approaches its <b>13th edition</b>, it continues to set its vision higher — celebrating the <b>15 years of excellence</b> of SUIIT and striving to reach new horizons of creativity, unity, and cultural brilliance.
        </span>
      </div>


      <div className="absolute font-clash font-bold text-white">
        <span className="flex gap-4 sm:gap-6 text-[2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5.5rem] text-turquise">
          About <span className="text-white"><Navlink name={"SUIIT"} link={"/#"} /></span>
        </span>
      </div>

      <div ref={aboutbit} className="flex flex-col xl:flex-row items-center gap-4 sm:gap-6 md:gap-8  mt-[4rem] sm:mt-[4rem] md:mt-[5rem] lg:mt-[6rem] xl:mt-[7rem]">
        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-chakra font-medium leading-relaxed tracking-wide">
          <b>Sambalpur University Institute of Information Technology (SUIIT)</b> is a{" "}
          <b>Constituent Autonomous Unit of Sambalpur University</b> in the line of India’s
          premier <b>IIITs</b>, <b>Approved by AICTE</b> and <b>Accredited Grade A by NAAC</b>.
          <br className="my-2" />
          Guided by the motto — <b>“Leveraging Technology • Inspiring Innovation • Flourishing Mankind”</b> — SUIIT strives to nurture excellence in technology, research, and human development.
          <br className="my-4" />
          Established with the vision of becoming a hub of innovation and interdisciplinary learning, SUIIT offers a blend of <b>technical education, research-driven culture, and holistic growth</b>. The institute empowers students to push boundaries, explore emerging technologies, and contribute meaningfully to society.
          <br className="my-4" />
          Nestled in the serene campus of <b>Sambalpur University, Jyoti Vihar, Burla</b>, SUIIT provides a dynamic environment where academic brilliance meets creativity and collaboration. With a commitment to <b>quality education and technological advancement</b>, it continues to shape the next generation of innovators, leaders, and changemakers.
        </p>


        <video src="/b2b.mp4" autoPlay loop muted
          className="w-full md:w-full lg:w-full xl:w-[28rem] h-[18rem] md:h-[20rem] xl:h-[18rem] object-cover rounded-2xl border-2 border-gray/80"></video>
      </div>

    </div>
  );
}

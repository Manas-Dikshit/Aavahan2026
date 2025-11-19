import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Faq() {
  const [openFaq, setOpenFaq] = useState(null);
  const faqContainer = useRef(null);
  const faqItems = useRef([]);

  const toggleFaq = (index) => {
    const isOpen = openFaq === index;
    setOpenFaq(isOpen ? null : index);

    // Animate the toggle with GSAP
    const content = faqItems.current[index].querySelector('.faq-content');
    const icon = faqItems.current[index].querySelector('.faq-icon');

    if (isOpen) {
      gsap.to(content, { maxHeight: 0, opacity: 0, duration: 0.3, ease: "power2.out" });
      gsap.to(icon, { rotation: 0, duration: 0.3, ease: "power2.out" });
    } else {
      gsap.to(content, { maxHeight: 200, opacity: 1, duration: 0.3, ease: "power2.out" });
      gsap.to(icon, { rotation: 45, duration: 0.3, ease: "power2.out" });
    }
  };

  const faqs = [
    {
      question: "What is AAVAHAN26 ?",
      answer: "AAVAHAN26 is the annual cultural fest of our college Sambalpur University Institute Of Information Technology, first launched in 2006. It brings together students, performers, and creators to celebrate, learn, and explore across a variety of cultural and creative events."
    },
    {
      question: "What are the prerequisites for AAVAHAN26 ?",
      answer: "All students with a valid college ID can enter the fest for free"
    },
    {
      question: "Who can participate in AAVAHAN26 ?",
      answer: "Students from all colleges and universities are welcome to participate. Some events may require prior registration or team formation."
    },
    {
      question: "Is there any registration fee ?",
      answer: "Some events are free, while others may have a nominal registration fee. Details will be available on the official event page or brochure."
    },
    {
      question: "How can I register for the fest ?",
      answer: "Registrations can be done through our official website or on-spot (depending on the event). Keep an eye on our Instagram and website for updates."
    },
    {
      question: "Will participants receive certificates or prizes ?",
      answer: "Yes, all participants will receive certificates, and winners will be awarded with exciting prizes, cash rewards, and recognition."
    },
    {
      question: "What kind of events are organized ?",
      answer: "The fest features a wide range of events, including coding competitions, hackathons, robotics challenges, tech quizzes, paper presentations, gaming tournaments, workshops, and expert talks."
    }
  ];

  useEffect(() => {
    // Properly encoded SVG for cosmic background
    const svgData = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><radialGradient id="a" cx="50%" cy="50%" r="50%"><stop offset="0%" style="stop-color:#ff0000;stop-opacity:0.1"/><stop offset="100%" style="stop-color:#007bff;stop-opacity:0.05"/></radialGradient></defs><circle cx="50" cy="50" r="50" fill="url(#a)"/></svg>`);

    // Animate FAQ items on scroll
    gsap.fromTo(
      faqItems.current,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: faqContainer.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={faqContainer}
      className="relative min-h-screen px-2 py-4 xl:px-20 text-white overflow-hidden"
      style={{ backgroundColor: '#004aad' }}
    >
      {/* Cosmic Background Effect */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ backgroundImage: `url('data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><radialGradient id="a" cx="50%" cy="50%" r="50%"><stop offset="0%" style="stop-color:#ff0000;stop-opacity:0.1"/><stop offset="100%" style="stop-color:#007bff;stop-opacity:0.05"/></radialGradient></defs><circle cx="50" cy="50" r="50" fill="url(#a)"/></svg>')}` }}
      ></div>

      <div className="flex justify-start w-full font-clash font-bold relative z-10">
        <span className="text-white text-[5.5rem] xl:text-[7rem] bg-gradient-to-r from-red-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] animate-pulse">
          FAQs
        </span>
      </div>

      <div className="flex flex-col gap-4 xl:p-2 relative z-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            ref={(el) => (faqItems.current[index] = el)}
            className="font-chakra border-t-2 border-b-2 border-gray-400/40 overflow-hidden bg-gradient-to-r from-black/20 to-transparent rounded-lg shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-shadow duration-300"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full text-left block cursor-pointer font-semibold text-white text-xl md:text-2xl p-7 hover:bg-gradient-to-r hover:from-red-500/20 hover:to-blue-500/20 transition-all duration-300 flex justify-between items-center group"
            >
              <span className="group-hover:text-cyan-300 transition-colors duration-300">{faq.question}</span>
              <span
                className="faq-icon text-2xl text-cyan-400 group-hover:text-yellow-400 transition-colors duration-300"
              >
                +
              </span>
            </button>

            <div
              className="faq-content transition-all duration-300 ease-in-out max-h-0 opacity-0"
              style={{
                overflow: 'hidden'
              }}
            >
              <div className="text-white pl-8 pr-8 pb-6 text-lg leading-relaxed glow-text">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom CSS for Glow Effects */}
      <style jsx>{`
        .glow-text { text-shadow: 0 0 5px rgba(255, 255, 255, 0.5); }
      `}</style>
    </div>
  );
}

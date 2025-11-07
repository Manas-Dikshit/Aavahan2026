import React, { useState } from "react";

export default function Faq() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

    const faqs = [
    {
      question: "What is AAVAHAN26 ?",
      answer: "AAVAHAN26 is the annual cultural fest of our college Techno Bengal Institute of Technology, first launched in 2006. It brings together students, performers, and creators to celebrate, learn, and explore across a variety of cultural and creative events."
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

  return (
    <div className="px-2 py-4 xl:px-20 ">
      <div className="flex justify-start w-full font-clash font-bold">
        <span className="text-white text-[5.5rem] xl:text-[7rem]">FAQs</span>
      </div>

      <div className="flex flex-col gap-4 xl:p-2">
        {faqs.map((faq, index) => (
          <div key={index} className="font-chakra">
            <div className="border-t-2 border-b-2 border-gray/40 overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left block cursor-pointer font-semibold text-white text-xl md:text-2xl p-7 hover:bg-gray-800 hover:bg-opacity-30 transition-colors duration-200 flex justify-between items-center"
              >
                <span>{faq.question}</span>
                <span
                  className={`text-2xl transform transition-transform duration-300 ease-in-out ${openFaq === index ? 'rotate-45' : 'rotate-0'
                    }`}
                >
                  +
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${openFaq === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                  }`}
                style={{
                  overflow: 'hidden'
                }}
              >
                <div className="text-white pl-8 pr-8 pb-6 text-lg leading-relaxed">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
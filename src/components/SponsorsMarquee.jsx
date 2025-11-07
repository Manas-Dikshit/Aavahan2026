import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SponsorsSection() {
  const sponsorRows = [
    {
      direction: "left",
      logos: [
        { src: "/sponsor-logos/1.svg", alt: "Sponsor 1", width: 150 },
        { src: "/sponsor-logos/2.svg", alt: "Sponsor 2", width: 150 },
        { src: "/sponsor-logos/3.svg", alt: "Sponsor 3", width: 150 },
        { src: "/sponsor-logos/4.svg", alt: "Sponsor 4", width: 150 },        
        { src: "/sponsor-logos/5.svg", alt: "Sponsor 5", width: 150 },
     
      ]
    },
    {
      direction: "right",
      logos: [
        { src: "/sponsor-logos/6.svg", alt: "Sponsor 6", width: 150 },
        { src: "/sponsor-logos/7.svg", alt: "Sponsor 7", width: 150 },
        { src: "/sponsor-logos/8.svg", alt: "Sponsor 8", width: 150 },
        { src: "/sponsor-logos/9.svg", alt: "Sponsor 9", width: 150 },
        { src: "/sponsor-logos/10.svg", alt: "Sponsor 10", width: 150 },
        { src: "/sponsor-logos/11.svg", alt: "Sponsor 11", width: 150 },
        
        // Add more logos here
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-transparent to-primary">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-clash font-black text-white mb-16 text-center"
        >
          OUR SPONSORS
        </motion.h2>

        <div className="space-y-16">
          {sponsorRows.map((row, rowIndex) => (
            <div key={rowIndex} className="sponsor-scroll">
              <div className={`sponsor-content ${row.direction === "right" ? "reverse" : ""}`}>
                {/* Double the logos for seamless scroll */}
                {[...row.logos, ...row.logos].map((logo, index) => (
                  <div
                    key={index}
                    className="mx-8 my-4 p-4 bg-black/30 backdrop-blur-sm rounded-xl border-[1.5px] border-gray/30 hover:border-main_primary transition-all duration-300"
                  >
                    <div className="relative" style={{ width: logo.width, height: logo.width * 0.6 }}>
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Become a Sponsor */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-16"
          >
            <button className="px-8 py-4 bg-main_primary text-white font-semibold font-clash rounded-md shadow-lg hover:bg-white hover:text-main_primary transition-colors duration-300 text-xl">
              BECOME A SPONSOR
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
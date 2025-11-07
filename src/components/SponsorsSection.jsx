import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SponsorsSection() {
  const topRow = {
    direction: "left",
    logos: [
      { src: "/sponsor-logos/1.png", alt: "Sponsor 1", width: 180 },
      { src: "/sponsor-logos/2.png", alt: "Sponsor 2", width: 180 },
      { src: "/sponsor-logos/3.png", alt: "Sponsor 3", width: 180 },
      { src: "/sponsor-logos/4.png", alt: "Sponsor 4", width: 180 },
      { src: "/sponsor-logos/5.png", alt: "Sponsor 5", width: 180 },
    ]
  };
  
  const bottomRow = {
    direction: "right",
    logos: [
      { src: "/sponsor-logos/6.png", alt: "Sponsor 6", width: 180 },
      { src: "/sponsor-logos/7.png", alt: "Sponsor 7", width: 180 },
      { src: "/sponsor-logos/8.png", alt: "Sponsor 8", width: 180 },
      { src: "/sponsor-logos/9.png", alt: "Sponsor 9", width: 180 },
      { src: "/sponsor-logos/10.png", alt: "Sponsor 10", width: 180 },
      { src: "/sponsor-logos/11.png", alt: "Sponsor 11", width: 180 },
    ]
  };

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
          {/* Top Row Sponsors */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="sponsor-scroll">
              <div className={`sponsor-content`}>
                {/* Double the logos for seamless scroll */}
                {[...topRow.logos, ...topRow.logos].map((logo, index) => (
                  <div
                    key={index}
                    className="mx-8 my-4 p-4 hover:scale-110 transition-transform duration-300"
                  >
                    <div className="relative" style={{ width: logo.width, height: logo.width * 0.6 }}>
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom Row Sponsors */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="sponsor-scroll">
              <div className="sponsor-content reverse">
                {/* Double the logos for seamless scroll */}
                {[...bottomRow.logos, ...bottomRow.logos].map((logo, index) => (
                  <div
                    key={index}
                    className="mx-8 my-4 p-4 hover:scale-110 transition-transform duration-300"
                  >
                    <div className="relative" style={{ width: logo.width, height: logo.width * 0.6 }}>
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Become a Sponsor */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
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
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SponsorsSection() {
  const sponsors = [
    {
      name: "TIU",
      image: "/TIU.svg",
      tier: "title",
    },
    // Add more sponsors here
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
          {/* Title Sponsors */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-clash font-bold text-main_primary text-center">TITLE SPONSORS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {sponsors
                .filter((sponsor) => sponsor.tier === "title")
                .map((sponsor, index) => (
                  <div
                    key={index}
                    className="w-64 h-64 bg-black/30 backdrop-blur-sm rounded-xl border-[2px] border-gray/40 p-4 hover:border-main_primary transition-colors duration-300 flex flex-col items-center justify-center group"
                  >
                    <div className="w-48 h-48 relative">
                      <Image
                        src={sponsor.image}
                        fill
                        alt={sponsor.name}
                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <p className="mt-4 text-white font-clash font-bold">{sponsor.name}</p>
                  </div>
                ))}
            </div>
          </motion.div>

          {/* Add more tiers as needed */}

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
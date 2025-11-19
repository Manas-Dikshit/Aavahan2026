import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Sponsors() {
  const sponsors = [
    {
      name: "TIU",
      image: "/TIU.svg",
      tier: "title",
    },
    // Add more sponsors here
  ];

  return (
    <motion.div
      className="fixed top-[25vh] right-8 w-[200px] backdrop-blur-sm rounded-xl border-[2px] border-gray/40 p-4 hidden lg:block"
      style={{ backgroundColor: '#004aad' }}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-clash font-black text-white mb-4 text-center">SPONSORS</h2>
      <div className="flex flex-col gap-6">
        <div className="space-y-4">
          <h3 className="text-sm font-clash font-bold text-main_primary">TITLE SPONSORS</h3>
          <div className="flex flex-col items-center gap-4">
            {sponsors
              .filter((sponsor) => sponsor.tier === "title")
              .map((sponsor, index) => (
                <div
                  key={index}
                  className="w-32 h-32 bg-white/10 rounded-lg p-2 hover:bg-white/20 transition-colors duration-300 flex items-center justify-center"
                >
                  <Image
                    src={sponsor.image}
                    width={100}
                    height={100}
                    alt={sponsor.name}
                    className="object-contain"
                  />
                </div>
              ))}
          </div>
        </div>

        {/* Add more tiers as needed */}
        <div className="w-full h-[1px] bg-gray/40"></div>
        
        <button className="px-4 py-2 bg-main_primary text-white font-semibold font-clash rounded-md shadow-lg hover:bg-white hover:text-main_primary transition-colors duration-300 text-sm">
          BECOME A SPONSOR
        </button>
      </div>
    </motion.div>
  );
}
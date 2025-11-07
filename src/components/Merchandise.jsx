import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Merchandise() {
  const items = [
    { name: "Aavahan Tee", image: "/merch/tee.png", price: "499" },
    { name: "Aavahan Hoodie", image: "/merch/hoodie.png", price: "999" },
    { name: "Aavahan Cap", image: "/merch/cap.png", price: "299" },
  ];

  return (
    <div className="py-16 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-clash font-black text-white text-center mb-8"
        >
          MERCHANDISE
        </motion.h2>

        <p className="text-center text-gray mb-8 max-w-2xl mx-auto">
          Official Aavahan merchandise — get your tees, hoodies and accessories. Limited stock.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="bg-black/30 border-[1.5px] border-gray/30 rounded-xl p-4 flex flex-col items-center text-center"
            >
              <div className="w-40 h-40 relative mb-4">
                {/* use placeholder images in public/merch/ */}
                <Image src={item.image} alt={item.name} fill className="object-contain" />
              </div>
              <h3 className="text-lg font-clash font-bold text-white">{item.name}</h3>
              <p className="text-main_primary font-semibold mt-2">₹{item.price}</p>
              <button className="mt-4 px-6 py-2 bg-main_primary text-white rounded-md font-clash font-semibold hover:bg-white hover:text-main_primary transition-colors">
                BUY
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

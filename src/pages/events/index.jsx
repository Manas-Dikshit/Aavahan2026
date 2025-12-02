"use client";
import { useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import fsPromises from "fs/promises";
import path from "path";
import { FaInstagram, FaGithub, FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Team({ tabs }) {
  const [index, setIndex] = useState(0);
  const currentTab = tabs[index];

  return (
    <div className="min-h-screen w-full bg-soothing_black overflow-x-hidden">
      <Head>
        <title>AAVAHAN26 • Crew</title>
      </Head>

      <Header id="navbar" />

      {/* 🟣 Hero Section */}
      <section className="relative w-full h-[15rem] md:h-[22rem] flex flex-col items-center justify-center text-white font-clash font-black tracking-wider overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/banner.png"
            alt="Aavahan Crew Banner"
            fill
            priority
            quality={100}
            className="object-cover object-center brightness-[0.4]"
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl drop-shadow-lg">
            AAVAHAN’26&nbsp;2025
          </h1>
          <p className="text-2xl md:text-4xl mt-3 text-main_primary tracking-[0.3em]">
            CREW
          </p>
        </div>
      </section>

      {/* 🔹 Category Navigation */}
      <div className="w-full overflow-x-auto px-4 py-6 bg-gradient-to-b from-black/20 to-transparent">
        <div className="flex gap-3 md:gap-8 min-w-max justify-start md:justify-center">
          {tabs.map((tab, i) => (
            <motion.button
              key={i}
              whileTap={{ scale: 0.95 }}
              className={`text-[0.9rem] md:text-[1.1rem] font-semibold font-chakra text-white rounded-full px-5 md:px-8 py-3 transition-all duration-400 whitespace-nowrap ${
                index === i
                  ? "bg-main_primary/20 border border-main_primary/60 shadow-[0_0_15px_rgba(151,71,255,0.4)]"
                  : "hover:bg-white/10 border border-transparent"
              }`}
              onClick={() => setIndex(i)}
            >
              {tab.name}
            </motion.button>
          ))}
        </div>
      </div>

      {/* 👥 Team Grid */}
      <main className="w-full flex justify-center pb-16 px-4 md:px-8 lg:px-20">
        <div className="max-w-7xl w-full flex flex-col gap-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {currentTab.sections.map((section) => (
                <div key={section.id} className="mb-12">
                  <h1 className="text-white font-clash uppercase font-semibold text-4xl mb-8 text-center md:text-left">
                    {section.name}
                  </h1>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                    {section.members.map((member) => (
                      <motion.div
                        key={member.id}
                        whileHover={{ scale: 1.04 }}
                        className="relative bg-[#111]/70 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-[0_0_25px_rgba(151,71,255,0.25)] hover:border-main_primary/30 transition-all duration-300 flex flex-col items-center p-6"
                      >
                        {/* Image */}
                        <div className="w-[160px] h-[170px] overflow-hidden rounded-lg border border-white/10 mb-4">
                          <Image
                            src={member.img}
                            alt={member.name}
                            width={300}
                            height={300}
                            className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                          />
                        </div>

                        {/* Member Details */}
                        <div className="text-center font-chakra">
                          <p className="text-white/70 font-medium text-sm mb-1">
                            {member.post}
                          </p>
                          <h2 className="text-white font-bold text-xl group-hover:text-main_primary transition-colors duration-300">
                            {member.name}
                          </h2>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-3 mt-4">
                          {member.linkedin && (
                            <Link
                              href={member.linkedin}
                              target="_blank"
                              className="bg-white/10 hover:bg-main_primary/20 border border-white/20 hover:border-main_primary/40 p-2 rounded transition-all duration-300 transform hover:scale-110"
                            >
                              <FaLinkedinIn
                                size="1.1rem"
                                className="text-white/80 hover:text-main_primary transition-colors duration-300"
                              />
                            </Link>
                          )}
                          {member.insta && (
                            <Link
                              href={member.insta}
                              target="_blank"
                              className="bg-white/10 hover:bg-main_primary/20 border border-white/20 hover:border-main_primary/40 p-2 rounded transition-all duration-300 transform hover:scale-110"
                            >
                              <FaInstagram
                                size="1.1rem"
                                className="text-white/80 hover:text-main_primary transition-colors duration-300"
                              />
                            </Link>
                          )}
                          {member.github && (
                            <Link
                              href={member.github}
                              target="_blank"
                              className="bg-white/10 hover:bg-main_primary/20 border border-white/20 hover:border-main_primary/40 p-2 rounded transition-all duration-300 transform hover:scale-110"
                            >
                              <FaGithub
                                size="1.1rem"
                                className="text-white/80 hover:text-main_primary transition-colors duration-300"
                              />
                            </Link>
                          )}
                          {member.facebook && (
                            <Link
                              href={member.facebook}
                              target="_blank"
                              className="bg-white/10 hover:bg-main_primary/20 border border-white/20 hover:border-main_primary/40 p-2 rounded transition-all duration-300 transform hover:scale-110"
                            >
                              <FaFacebook
                                size="1.1rem"
                                className="text-white/80 hover:text-main_primary transition-colors duration-300"
                              />
                            </Link>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}

/* 🧩 Fetch JSON Data for Teams */
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "/teams.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData,
  };
}

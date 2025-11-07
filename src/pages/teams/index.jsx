"use client";
import { useState } from "react";
import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
} from "react-icons/fa";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import fsPromises from "fs/promises";
import path from "path";
import { motion, AnimatePresence } from "framer-motion";

export default function Team({ tabs }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="min-h-screen w-full bg-soothing_black overflow-x-hidden">
      <Head>
        <title>AAVAHAN26 • Crew</title>
      </Head>

      <Header id="navbar" />

      {/* Hero Banner */}
      <section className="relative w-full h-[15rem] md:h-[22rem] flex flex-col items-center justify-center text-white font-clash font-black tracking-wider overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/avengers.jpg"
            alt="Avengers Background"
            fill
            priority
            className="object-cover object-center brightness-[0.4]"
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl drop-shadow-lg">
            AAVAHAN26' 2025
          </h1>
          <p className="text-2xl md:text-4xl mt-3 text-main_primary tracking-[0.3em]">
            CREW
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
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

      {/* Main Content */}
      <main className="w-full flex justify-center pb-16 px-4 md:px-8 lg:px-20">
        <div className="max-w-7xl w-full flex flex-col gap-16">
          <AnimatePresence mode="wait">
            {tabs[index].sections.map((section) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Section Title */}
                <h2 className="text-white font-clash uppercase font-bold text-3xl md:text-4xl pb-6 border-b border-white/10">
                  {section.name}
                </h2>

                {/* Member Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
                  {section.members.map((member) => (
                    <motion.div
                      key={member.id}
                      whileHover={{
                        scale: 1.04,
                        rotateX: 2,
                        rotateY: -2,
                      }}
                      className="relative bg-[#111]/70 backdrop-blur-lg border border-white/10 rounded-xl p-5 shadow-md hover:shadow-[0_0_20px_rgba(151,71,255,0.2)] hover:border-main_primary/30 transition-all duration-300 flex flex-col"
                    >
                      {/* Top Tag */}
                      <div className="absolute top-4 right-4 bg-main_primary/20 text-main_primary text-xs px-3 py-1 rounded-full font-chakra tracking-wide">
                        AAVAHAN26
                      </div>

                      {/* Image */}
                      <div className="w-full h-[220px] overflow-hidden rounded-lg border border-white/10 mb-4">
                        <Image
                          src={member.img}
                          alt={member.name}
                          width={400}
                          height={400}
                          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                        />
                      </div>

                      {/* Details */}
                      <div className="text-left font-chakra mb-3">
                        <p className="text-white/60 text-sm">{member.post}</p>
                        <h3 className="text-white text-xl font-bold mt-1 group-hover:text-main_primary transition-colors duration-300">
                          {member.name}
                        </h3>
                      </div>

                      {/* Social Links */}
                      <div className="flex gap-3 mt-auto">
                        {member.linkedin && (
                          <Link
                            href={member.linkedin}
                            target="_blank"
                            aria-label="LinkedIn"
                            className="bg-white/5 p-2 rounded-md hover:bg-main_primary/20 border border-white/10 hover:border-main_primary/40 transition-all"
                          >
                            <FaLinkedinIn className="text-white/80 hover:text-main_primary" />
                          </Link>
                        )}
                        {member.insta && (
                          <Link
                            href={member.insta}
                            target="_blank"
                            aria-label="Instagram"
                            className="bg-white/5 p-2 rounded-md hover:bg-main_primary/20 border border-white/10 hover:border-main_primary/40 transition-all"
                          >
                            <FaInstagram className="text-white/80 hover:text-main_primary" />
                          </Link>
                        )}
                        {member.github && (
                          <Link
                            href={member.github}
                            target="_blank"
                            aria-label="GitHub"
                            className="bg-white/5 p-2 rounded-md hover:bg-main_primary/20 border border-white/10 hover:border-main_primary/40 transition-all"
                          >
                            <FaGithub className="text-white/80 hover:text-main_primary" />
                          </Link>
                        )}
                        {member.facebook && (
                          <Link
                            href={member.facebook}
                            target="_blank"
                            aria-label="Facebook"
                            className="bg-white/5 p-2 rounded-md hover:bg-main_primary/20 border border-white/10 hover:border-main_primary/40 transition-all"
                          >
                            <FaFacebook className="text-white/80 hover:text-main_primary" />
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}

/* Fetching JSON data */
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "/teams.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData,
  };
}

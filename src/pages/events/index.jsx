"use client";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import fsPromises from "fs/promises";
import path from "path";
import { motion, AnimatePresence } from "framer-motion";

export default function Events({ posts, names }) {
  const [index, setIndex] = useState(0);
  const individualPosts = posts[index];

  return (
    <div className="min-h-screen w-full bg-soothing_black overflow-x-hidden">
      <Head>
        <title>AAVAHAN26 • Events</title>
      </Head>

      <Header id="navbar" />

      {/* ✅ Hero Banner (same as Crew page) */}
      <section className="relative w-full h-[15rem] md:h-[22rem] flex flex-col items-center justify-center text-white font-clash font-black tracking-wider overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/avengers.jpg"
            alt="Aavahan Events Banner"
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
            EVENTS
          </p>
        </div>
      </section>

      {/* 🔹 Category Navigation */}
      <div className="w-full overflow-x-auto px-4 py-6 bg-gradient-to-b from-black/20 to-transparent">
        <div className="flex gap-3 md:gap-8 min-w-max justify-start md:justify-center">
          {names.map((name, i) => (
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
              {name}
            </motion.button>
          ))}
        </div>
      </div>

      {/* 🎯 Events Grid */}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
                {individualPosts.length > 0 ? (
                  individualPosts.map((post) => (
                    <motion.div
                      key={post.id}
                      whileHover={{
                        scale: 1.05,
                        rotateX: 2,
                        rotateY: -2,
                      }}
                      className="relative bg-[#111]/70 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-[0_0_25px_rgba(151,71,255,0.25)] hover:border-main_primary/30 transition-all duration-300 flex flex-col"
                    >
                      <Link href={`/events/${post.id}`}>
                        {/* Image */}
                        <div className="w-full h-[220px] overflow-hidden">
                          <Image
                            src={post.img}
                            alt={post.title}
                            width={400}
                            height={400}
                            className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                          />
                        </div>

                        {/* Details */}
                        <div className="p-5 flex flex-col flex-grow justify-between text-left font-chakra">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2">
                              {post.title}
                            </h3>
                            <p className="text-sm text-white/70 line-clamp-3">
                              {post.desc || "Click to learn more."}
                            </p>
                          </div>
                          <div className="mt-4 text-main_primary font-semibold text-sm tracking-wide">
                            Tap to View →
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-white text-2xl font-chakra font-semibold py-16 text-center animate-pulse">
                    Coming Soon...
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}

/* 🧩 Fetching JSON Data */
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "/events.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: {
      posts: objectData.posts,
      names: objectData.names,
    },
  };
}

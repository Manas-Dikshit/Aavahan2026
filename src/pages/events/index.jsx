"use client";
import { useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import fsPromises from "fs/promises";
import path from "path";

export default function EventsPage({ categories, posts }) {
  const [index, setIndex] = useState(0);
  const currentCategory = categories[index];
  const currentEvents = posts[index] || [];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#004aad] text-white">
      <Head>
        <title>AAVAHAN’26 • Events</title>
      </Head>

      {/* Navbar */}
      <Header id="navbar" />

      <main className="pt-[4.5rem] md:pt-[5rem] relative z-10">
        {/* Hero Section */}
        <section className="relative w-full h-[18rem] md:h-[24rem] flex items-center justify-center font-clash font-black tracking-wider overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#003b93] via-[#004aad] to-[#002f6d] opacity-90" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 px-4 text-center md:text-left">
          <div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl drop-shadow-lg">
              AAVAHAN’26
            </h1>
            <p className="text-2xl md:text-4xl mt-3 text-main_primary tracking-[0.25em]">
              EVENTS
            </p>
          </div>

          <div className="w-28 sm:w-36 md:w-48 lg:w-56 h-auto drop-shadow-[0_0_18px_rgba(0,0,0,0.7)]">
            <Image
              src="/iiiiiii.png"
              alt="Hero illustration"
              width={230}
              height={400}
              priority
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Decorative Characters */}
        <div className="pointer-events-none select-none">
          <div className="hidden sm:block absolute left-2 sm:left-6 bottom-0 w-20 sm:w-28 md:w-32 lg:w-36 opacity-90 animate-bounce-slow">
            <Image
              src="/gg.png"
              alt="Character illustration gg"
              width={200}
              height={260}
              className="object-contain drop-shadow-[0_0_18px_rgba(0,0,0,0.6)]"
            />
          </div>

          <div className="hidden md:block absolute right-4 md:right-10 bottom-0 w-24 md:w-32 lg:w-40 opacity-95 animate-float-slow">
            <Image
              src="/hh.png"
              alt="Character illustration hh"
              width={220}
              height={280}
              className="object-contain drop-shadow-[0_0_18px_rgba(0,0,0,0.6)]"
            />
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-20 sm:w-24 md:w-28 opacity-80 animate-pulse-slow">
            <Image
              src="/captain.webp"
              alt="Captain character illustration"
              width={180}
              height={220}
              className="object-contain drop-shadow-[0_0_18px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
        </section>

        {/* Category Tabs */}
        <div className="sticky top-[4.5rem] md:top-[5rem] w-full z-40 overflow-x-auto px-4 py-6 bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm">
          <div className="flex gap-3 md:gap-8 min-w-max justify-start md:justify-center">
            {categories.map((name, i) => (
              <button
                key={name}
                onClick={() => setIndex(i)}
                className={`text-[0.9rem] md:text-[1.1rem] font-semibold font-chakra text-white rounded-full px-5 md:px-8 py-3 transition-all duration-400 whitespace-nowrap ${
                  index === i
                    ? "bg-main_primary/25 border border-main_primary/60 shadow-[0_0_15px_rgba(151,71,255,0.4)]"
                    : "hover:bg-white/10 border border-transparent"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <section className="w-full flex justify-center pb-20 px-4 md:px-8 lg:px-20">
          <div className="max-w-7xl w-full flex flex-col gap-10">
          <h2 className="text-white font-clash uppercase font-semibold text-3xl md:text-4xl text-center md:text-left">
            {currentCategory}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {currentEvents.map((event) => (
              <div
                key={event.id}
                className="group relative bg-[#0b0b0b]/80 border border-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-[0_0_25px_rgba(151,71,255,0.3)] hover:border-main_primary/40 transition-all duration-300 flex flex-col"
              >
                {/* Consistent image height */}
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={event.img}
                    alt={event.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-main_primary font-chakra text-xs mb-1 tracking-wide">
                    AAVAHAN'26 EVENT
                  </p>
                  <h3 className="text-white font-clash font-semibold text-lg mb-2 line-clamp-1 group-hover:text-main_primary transition-colors">
                    {event.title}
                  </h3>
                  {event.description && (
                    <p className="text-white/70 text-sm mb-4 line-clamp-3">
                      {event.description}
                    </p>
                  )}

                  <div className="mt-auto flex justify-between items-center pt-2">
                    <span className="text-white/60 text-xs font-chakra">
                      Tap for details
                    </span>
                    <Link
                      href={`/events/${event.id}`}
                      className="bg-main_primary/80 hover:bg-main_primary text-white text-xs font-semibold font-chakra px-4 py-1.5 rounded-full transition-all duration-300"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

            {/* Empty state (no events) */}
            {currentEvents.length === 0 && (
              <p className="text-center text-white/70 font-chakra py-10 text-lg">
                No events found in this category yet.
              </p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Data fetching
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "/events.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: {
      categories: objectData.names,
      posts: objectData.posts,
    },
  };
}

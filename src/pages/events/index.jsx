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
    <div
      className="min-h-screen w-full overflow-x-hidden"
      style={{ backgroundColor: "#004aad" }}
    >
      <Head>
        <title>AAVAHAN26 • Events</title>
      </Head>

      <Header id="navbar" />

      {/* Hero Section */}
      <section className="relative w-full mt-[4.5rem] h-[18rem] md:h-[24rem] flex items-center justify-center text-white font-clash font-black tracking-wider overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Marvelheader.jpeg"
            alt="Aavahan Events Banner"
            fill
            priority
            quality={100}
            className="object-cover object-center brightness-[0.4]"
          />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 px-4">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl drop-shadow-lg">
              AAVAHAN’26
            </h1>
            <p className="text-2xl md:text-4xl mt-3 text-main_primary tracking-[0.3em]">
              EVENTS
            </p>
          </div>

          <div className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 h-auto drop-shadow-[0_0_18px_rgba(0,0,0,0.7)]">
            <Image
              src="/iiiiiii.png"
              alt="Armored hero illustration for events section"
              width={230}
              height={400}
              priority
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <div className="w-full overflow-x-auto px-4 py-6 bg-gradient-to-b from-black/20 to-transparent">
        <div className="flex gap-3 md:gap-8 min-w-max justify-start md:justify-center">
          {categories.map((name, i) => (
            <button
              key={name}
              className={`text-[0.9rem] md:text-[1.1rem] font-semibold font-chakra text-white rounded-full px-5 md:px-8 py-3 transition-all duration-400 whitespace-nowrap ${
                index === i
                  ? "bg-main_primary/20 border border-main_primary/60 shadow-[0_0_15px_rgba(151,71,255,0.4)]"
                  : "hover:bg-white/10 border border-transparent"
              }`}
              onClick={() => setIndex(i)}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <main className="w-full flex justify-center pb-16 px-4 md:px-8 lg:px-20">
        <div className="max-w-7xl w-full flex flex-col gap-8">
          <h2 className="text-white font-clash uppercase font-semibold text-3xl md:text-4xl mb-4 text-center md:text-left">
            {currentCategory}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {currentEvents.map((event) => (
              <div
                key={event.id}
                className="relative bg-[#111]/70 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-[0_0_25px_rgba(151,71,255,0.25)] hover:border-main_primary/30 transition-all duration-300 flex flex-col"
              >
                <div className="w-full h-48 overflow-hidden">
                  <Image
                    src={event.img}
                    alt={event.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                  />
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <p className="text-main_primary font-chakra text-xs mb-1 tracking-wide">
                    AAVAHAN'26 EVENT
                  </p>
                  <h3 className="text-white font-clash font-semibold text-lg mb-2">
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
                      className="bg-main_primary/80 hover:bg-main_primary text-white text-xs font-semibold font-chakra px-3 py-1 rounded-full transition-colors duration-200"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Fetch Events Data
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

import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import fsPromises from "fs/promises";
import path from "path";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/all";

export default function Events({ posts, names }) {
  const [index, setIndex] = useState(0);
  const individualPosts = posts[index];
  const cardsRef = useRef([]);
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax scroll on hero
    gsap.to(heroRef.current, {
      backgroundPosition: "50% 100%",
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        scrub: 1,
      },
    });

    // Staggered fade-in for cards
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50, rotateY: 15 },
      {
        opacity: 1,
        y: 0,
        rotateY: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
      }
    );
  }, [index]);

  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-[#000000] via-[#090909] to-[#1a002e] text-white overflow-x-hidden font-chakra">
      <Head>
        <title>AAVAHAN26 2K25 | Marvel-Inspired Events</title>
      </Head>

      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[18rem] md:h-[28rem] flex flex-col justify-center items-center text-center bg-[url('/avengers.jpg')] bg-cover bg-center bg-fixed"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 backdrop-blur-[1px]" />
        <div className="relative z-10 space-y-3">
          <h1 className="text-[2rem] md:text-[4.5rem] font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#ff004f] via-[#9747ff] to-[#00d4ff] drop-shadow-[0_0_15px_rgba(151,71,255,0.6)]">
            AAVAHAN 26' 2025
          </h1>
          <p className="text-[1.2rem] md:text-[2rem] font-semibold uppercase tracking-[0.3em] text-white/90">
            The Realm of Marvels
          </p>
        </div>
      </section>

      {/* Navigation Buttons */}
      <div className="w-full overflow-x-auto py-8 px-4 bg-black/20 backdrop-blur-sm border-y border-white/10">
        <div className="flex gap-4 md:gap-6 min-w-max justify-start md:justify-center">
          {names.map((name, i) => (
            <button
              key={i}
              className={`text-[1rem] font-semibold font-chakra rounded-full px-6 py-3 whitespace-nowrap flex-shrink-0 transition-all duration-500 ease-in-out 
                ${
                  index === i
                    ? "bg-gradient-to-r from-[#9747ff]/30 to-[#ff004f]/30 border border-[#9747ff] text-white shadow-[0_0_15px_rgba(151,71,255,0.4)]"
                    : "border border-transparent text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              onClick={() => setIndex(i)}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="flex flex-wrap justify-center gap-8 px-6 py-12">
        {individualPosts.length > 0 ? (
          individualPosts.map((post, i) => (
            <div
              key={post.id}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group relative w-[18rem] sm:w-[20rem] md:w-[22rem] h-[20rem] rounded-2xl overflow-hidden bg-gradient-to-b from-[#1b0036] to-[#000000] shadow-[0_0_30px_rgba(151,71,255,0.2)] transform perspective-[1000px] transition-all duration-500 hover:scale-[1.06] hover:rotateY-3 hover:shadow-[0_0_40px_rgba(151,71,255,0.5)]"
            >
              <Link href={`/events/${post.id}`}>
                <div className="relative w-full h-full">
                  <Image
                    src={post.img}
                    width={500}
                    height={500}
                    alt={`${post.title} image`}
                    className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                    <h2 className="text-lg md:text-xl font-bold tracking-wider text-white uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
                      {post.title || "Untitled Event"}
                    </h2>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="text-white font-semibold font-chakra text-2xl py-8 animate-pulse">
            Coming Soon...
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

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

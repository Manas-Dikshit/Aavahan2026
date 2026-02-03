"use client";
import Seo from "@/components/Seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import fsPromises from "fs/promises";
import path from "path";

export default function EventsPage({ events }) {
  // Group events by date
  const groupedEvents = events.reduce((acc, event) => {
    const date = event.date;
    if (!acc[date]) acc[date] = [];
    acc[date].push(event);
    return acc;
  }, {});

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#004aad] text-white">
      <Seo
        title="Events Schedule & Competitions"
        description="Browse all AAVAHAN'26 events at SUIIT – including cultural performances, music, dance, drama, literary events, gaming tournaments, workshops and more with dates, venues and registration links."
        keywords={[
          "Aavahan 2026 events",
          "Aavahan 2026 event list",
          "Aavahan events schedule",
          "SUIIT Aavahan competitions",
          "SUIIT cultural fest events",
          "Aavahan workshops and competitions",
          "SUIIT fest events Burla",
          "Aavahan technical events",
          "Aavahan cultural events",
        ]}
        type="website"
      />

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

        {/* Events Grid */}
        <section className="w-full flex justify-center pb-20 px-4 md:px-8 lg:px-20">
          <div className="max-w-7xl w-full flex flex-col gap-10">

          {Object.keys(groupedEvents).sort((a, b) => {
            const dateA = new Date(a.replace(/(\d+) (\w+) (\d+)/, '$2 $1, $3'));
            const dateB = new Date(b.replace(/(\d+) (\w+) (\d+)/, '$2 $1, $3'));
            return dateA - dateB;
          }).map(date => (
            <div key={date} className="flex flex-col gap-6">
              <h2 className="text-white font-clash uppercase font-semibold text-2xl md:text-3xl text-left border-b border-white/20 pb-2">
                {date}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                {groupedEvents[date].map((event) => (
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

                      {(event.time || event.venue) && (
                        <div className="text-white/70 text-xs font-chakra space-y-1 mb-4">
                          {event.time && (
                            <div>
                              <span className="text-white/50">Time:</span> {event.time}
                            </div>
                          )}
                          {event.venue && (
                            <div>
                              <span className="text-white/50">Venue:</span> {event.venue}
                            </div>
                          )}
                        </div>
                      )}

                      <div className="mt-auto flex justify-between items-center pt-2 gap-2">
                        <span className="text-white/60 text-xs font-chakra">
                          Tap for details
                        </span>
                        <div className="flex items-center gap-2">
                          <Link
                            href={`/events/${event.id}`}
                            className="bg-main_primary/80 hover:bg-main_primary text-white text-xs font-semibold font-chakra px-4 py-1.5 rounded-full transition-all duration-300"
                          >
                            View
                          </Link>
                          {event.reg === "Register Here" && event.reglink && event.reglink !== "Coming Soon" ? (
                            <a
                              href={event.reglink.trim()}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-white/90 hover:bg-white text-black text-xs font-semibold font-chakra px-4 py-1.5 rounded-full transition-all duration-300"
                            >
                              Register
                            </a>
                          ) : (
                            <button
                              className="bg-white/20 text-white/60 text-xs font-semibold font-chakra px-4 py-1.5 rounded-full cursor-not-allowed"
                              disabled
                            >
                              Register
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

            {/* Empty state (no events) */}
            {Object.keys(groupedEvents).length === 0 && (
              <p className="text-center text-white/70 font-chakra py-10 text-lg">
                No events found yet.
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
      events: objectData.events,
    },
  };
}

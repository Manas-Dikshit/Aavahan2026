import React, { useState } from "react";
import { FaInstagram, FaGithub, FaLinkedinIn, FaFacebook, FaEnvelope } from "react-icons/fa";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import fsPromises from "node:fs/promises";
import path from "node:path";
import PropTypes from "prop-types";

function Team(props) {
  const [index, setIndex] = useState(0);
  const tabs = props.tabs;
  console.log("tabs", tabs);

  return (
    <div
      className="relative min-h-screen w-screen overflow-hidden"
      style={{ backgroundColor: "#004aad" }}
    >
      <div className="relative z-10">
        <Head>
          <title>AAVAHAN26 Teams</title>
        </Head>
        <Header id="navbar" />

        <main>
          {/* Teams Hero Section */}
          <section className="relative w-full mt-[4.5rem] h-[16rem] md:h-[22rem] flex items-center justify-center text-white font-clash tracking-wide font-black overflow-hidden">
            {/* Placeholder for future banner background image */}
            {false && (
              <div className="absolute inset-0">
                <Image
                  src="/teams-banner-placeholder.png"
                  alt="Teams banner placeholder"
                  fill
                  priority
                  className="object-cover object-center opacity-60"
                />
              </div>
            )}

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 px-4">
              <div className="text-center md:text-left">
                <span className="block text-[1.6rem] md:text-[3.2rem] lg:text-[3.8rem]">
                  AAVAHAN'26
                </span>
                <span className="block text-[2.3rem] md:text-[3rem] lg:text-[3.4rem] tracking-wider">
                  CREW
                </span>
              </div>

              <div className="w-28 sm:w-36 md:w-44 lg:w-52 xl:w-60 h-auto drop-shadow-[0_0_18px_rgba(0,0,0,0.7)]">
                <Image
                  src="/hulk.webp"
                  alt="Heroic character illustration for AAVAHAN crew"
                  width={350}
                  height={420}
                  priority
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </section>

        {/* Fixed horizontal scrollable tab navigation */}
        <div className="w-full overflow-x-auto px-4 py-8">
          <div className="flex gap-2 md:gap-6 min-w-max justify-start md:justify-center">
            {tabs.map((tab, i) => (
              <button
                key={tab.id || tab.name}
                className="text-[0.8rem] md:text-[1rem] font-semibold font-chakra text-white rounded-full px-4 md:px-6 py-3 hover:bg-white/20 transition-all duration-500 ease-in-out whitespace-nowrap flex-shrink-0 cursor-pointer"
                style={{
                  border: index === i ? "1.75px solid #9747ff" : "1px solid transparent",
                  background: index === i ? "rgba(151, 71, 255, 0.1)" : "transparent"
                }}
                onClick={() => setIndex(i)}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full h-fit pb-10 flex justify-center">
          <div className="flex flex-col gap-10 px-4 lg:px-[6rem] md:pt-6 ">
            {tabs[index].sections.map((section) => (
              <div key={section.id || section.name}>
                <h1 className="text-white font-clash uppercase font-semibold text-4xl py-4 pb-8">
                  {section.name}
                </h1>

                <div className="flex flex-wrap justify-center gap-3 lg:gap-6 w-full h-fit pt-6 rounded-lg">
                  {section.members.map((member) => (
                    <div
                      key={member.id}
                      className="relative bg-soothing_black/90 border-2 border-white/20 rounded-lg p-6 w-[280px] min-h-[100px] flex flex-col shadow-lg hover:bg-white/10 hover:border-main_primary/40 transition-all duration-300 group"
                    >
                      {/* Header with organization name */}
                      <div className="text-left mb-4">
                        <h2 className="text-white font-bold font-chakra text-2xl group-hover:text-main_primary transition-colors duration-300">AAVAHAN26</h2>
                      </div>

                      {/* Member image left aligned */}
                      <div className="flex justify-start mb-4">
                        <div className="w-[160px] h-[170px] overflow-hidden rounded-lg border-2 border-white/10 group-hover:border-main_primary/30 transition-all duration-300">
                          <Image
                            src={member.img}
                            alt={member.name}
                            width={300}
                            height={300}
                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                      </div>

                      {/* Social icons dynamically positioned */}
                      <div className="absolute right-4 flex flex-col gap-2" style={{
                        top: `${100 + (170 - (Object.keys(member).filter(key => ['linkedin', 'insta', 'github', 'facebook', 'Email', 'email'].includes(key) && member[key]).length * 40)) / 5}px`
                      }}>
                        {member.linkedin && (
                          <Link href={`${member.linkedin}`} className="bg-white/10 hover:bg-main_primary/20 border border-white/20 hover:border-main_primary/40 p-2 rounded transition-all duration-300 transform hover:scale-110" target="_blank">
                            <FaLinkedinIn
                              size="1.1rem"
                              className="text-white/80 hover:text-main_primary transition-colors duration-300"
                            />
                          </Link>
                        )}
                        {member.insta && (
                          <Link href={`${member.insta}`} className="bg-white/10 hover:bg-main_primary/20 border border-white/20 hover:border-main_primary/40 p-2 rounded transition-all duration-300 transform hover:scale-110" target="_blank">
                            <FaInstagram
                              size="1.1rem"
                              className="text-white/80 hover:text-main_primary transition-colors duration-300"
                            />
                          </Link>
                        )}
                        {member.github && (
                          <Link href={`${member.github}`} className="bg-white/10 hover:bg-main_primary/20 border border-white/20 hover:border-main_primary/40 p-2 rounded transition-all duration-300 transform hover:scale-110" target="_blank" >
                            <FaGithub
                              size="1.1rem"
                              className="text-white/80 hover:text-main_primary transition-colors duration-300"
                            />
                          </Link>
                        )}
                        {member.facebook && (
                          <Link href={`${member.facebook}`} className="bg-white/10 hover:bg-main_primary/20 border border-white/20 hover:border-main_primary/40 p-2 rounded transition-all duration-300 transform hover:scale-110" target="_blank">
                            <FaFacebook
                              size="1.2rem"
                              className="text-white/80 hover:text-main_primary transition-colors duration-300"
                            />
                          </Link>
                        )}
                        {(member.Email || member.email) && (
                          <Link href={`mailto:${member.Email || member.email}`} className="bg-white/10 hover:bg-main_primary/20 border border-white/20 hover:border-main_primary/40 p-2 rounded transition-all duration-300 transform hover:scale-110">
                            <FaEnvelope
                              size="1.1rem"
                              className="text-white/80 hover:text-main_primary transition-colors duration-300"
                            />
                          </Link>
                        )}
                      </div>

                      {/* Member details at bottom */}
                      <div className="mt-auto text-left font-chakra">
                        <p className="text-white/80 font-medium text-sm mb-1">
                          {member.post}
                        </p>
                        <h1 className="text-white font-bold text-2xl group-hover:text-main_primary transition-colors duration-300">
                          {member.name}
                        </h1>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Team;

Team.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string.isRequired,
      sections: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
          name: PropTypes.string.isRequired,
          members: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            })
          ).isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "/teams.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData,
  };
}
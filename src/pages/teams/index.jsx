import React, { useState } from "react";
import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import Seo from "@/components/Seo";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import fsPromises from "node:fs/promises";
import path from "node:path";
import PropTypes from "prop-types";

function Team({ tabs }) {
  const [index, setIndex] = useState(0);

  // Safety: fallback if no data
  if (!tabs || tabs.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#004aad] text-white text-2xl font-chakra">
        No team data available.
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-screen overflow-hidden bg-[#004aad] text-white">
      <Seo
        title="Organizing Team & Crew"
        description="Meet the AAVAHAN'26 organizing committee, student coordinators and technical crew from SUIIT who manage the cultural fest events, production and promotions."
        keywords={[
          "Aavahan 2026 team",
          "Aavahan organizing committee",
          "SUIIT Aavahan core team",
          "Aavahan student coordinators",
          "Aavahan SUIIT crew",
          "SUIIT cultural fest organizing team",
        ]}
        type="website"
      />

      {/* Navbar */}
      <Header id="navbar" />

      <main className="pt-[4.5rem] md:pt-[5rem] relative z-10">
        {/* Hero Section */}
        <section className="relative w-full h-[16rem] md:h-[22rem] flex items-center justify-center font-clash tracking-wide font-black overflow-hidden">
          {false && (
            <div className="absolute inset-0">
              <Image
                src="/teams-banner-placeholder.png"
                alt="Teams banner background"
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
                alt="Heroic illustration for AAVAHAN crew"
                width={350}
                height={420}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>

        {/* Tabs Navigation */}
        <div className="w-full overflow-x-auto px-4 py-8 bg-[#004aad]/80 backdrop-blur-sm sticky top-[4.5rem] md:top-[5rem] z-40">
          <div className="flex gap-2 md:gap-6 min-w-max justify-start md:justify-center">
            {tabs.map((tab, i) => (
              <button
                key={tab.id || tab.name}
                onClick={() => setIndex(i)}
                className={`text-[0.8rem] md:text-[1rem] font-semibold font-chakra text-white rounded-full px-4 md:px-6 py-3 transition-all duration-500 ease-in-out whitespace-nowrap flex-shrink-0 cursor-pointer ${
                  index === i
                    ? "border-[1.75px] border-[#9747ff] bg-[#9747ff1A]"
                    : "border border-transparent hover:bg-white/20"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Team Members Section */}
        <section className="w-full h-fit pb-10 flex justify-center bg-[#004aad]">
          <div className="flex flex-col gap-10 px-4 lg:px-[6rem] md:pt-6">
            {tabs[index].sections.map((section) => (
              <div key={section.id || section.name}>
                <h2 className="text-white font-clash uppercase font-semibold text-4xl py-4 pb-8 text-center md:text-left">
                  {section.name}
                </h2>

                <div className="flex flex-wrap justify-center gap-3 lg:gap-6 w-full h-fit pt-6 rounded-lg">
                  {section.members.map((member, i) => (
                    <div
                      key={member.id || `${section.name}-${i}`}
                      className="relative bg-black/80 border-2 border-white/20 rounded-lg p-6 w-[280px] min-h-[100px] flex flex-col shadow-lg hover:bg-white/10 hover:border-main_primary/40 transition-all duration-300 group"
                    >
                      {/* Card Header */}
                      <div className="text-left mb-4">
                        <h3 className="text-white font-bold font-chakra text-2xl group-hover:text-main_primary transition-colors duration-300">
                          AAVAHAN’26
                        </h3>
                      </div>

                      {/* Member Image */}
                      <div className="flex justify-start mb-4">
                        <div className="w-[160px] h-[170px] overflow-hidden rounded-lg border-2 border-white/10 group-hover:border-main_primary/30 transition-all duration-300">
                          <Image
                            src={member.img || "/placeholder-profile.png"}
                            alt={member.name}
                            width={300}
                            height={300}
                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                            priority={i < 2}
                            loading={i < 2 ? "eager" : "lazy"}
                          />
                        </div>
                      </div>

                      {/* Social Icons */}
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                        {member.linkedin && (
                          <SocialIcon
                            href={member.linkedin}
                            label={`${member.name} LinkedIn`}
                          >
                            <FaLinkedinIn />
                          </SocialIcon>
                        )}
                        {member.insta && (
                          <SocialIcon
                            href={member.insta}
                            label={`${member.name} Instagram`}
                          >
                            <FaInstagram />
                          </SocialIcon>
                        )}
                        {member.github && (
                          <SocialIcon
                            href={member.github}
                            label={`${member.name} GitHub`}
                          >
                            <FaGithub />
                          </SocialIcon>
                        )}
                        {member.facebook && (
                          <SocialIcon
                            href={member.facebook}
                            label={`${member.name} Facebook`}
                          >
                            <FaFacebook />
                          </SocialIcon>
                        )}
                        {(member.email || member.Email) && (
                          <SocialIcon
                            href={`mailto:${member.email || member.Email}`}
                            label={`${member.name} Email`}
                          >
                            <FaEnvelope />
                          </SocialIcon>
                        )}
                      </div>

                      {/* Member Info */}
                      <div className="mt-auto text-left font-chakra">
                        <p className="text-white/80 font-medium text-sm mb-1">
                          {member.post}
                        </p>
                        <h4 className="text-white font-bold text-2xl group-hover:text-main_primary transition-colors duration-300">
                          {member.name}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* ----------------------------- SocialIcon Component ----------------------------- */
function SocialIcon({ href, label, children }) {
  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white/10 hover:bg-main_primary/20 border border-white/20 hover:border-main_primary/40 p-2 rounded transition-all duration-300 transform hover:scale-110 text-white/80 hover:text-main_primary"
    >
      {children}
    </Link>
  );
}

SocialIcon.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

/* ----------------------------- Prop Types ----------------------------- */
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
              id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired,
              name: PropTypes.string.isRequired,
              post: PropTypes.string,
              img: PropTypes.string,
              linkedin: PropTypes.string,
              insta: PropTypes.string,
              github: PropTypes.string,
              facebook: PropTypes.string,
              email: PropTypes.string,
              Email: PropTypes.string,
            })
          ).isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

/* ----------------------------- Static Props ----------------------------- */
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "/teams.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData,
  };
}

export default Team;

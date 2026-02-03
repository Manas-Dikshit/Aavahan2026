import { useEffect, useState } from "react";
import Seo from "@/components/Seo";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Brand from "@/components/brand";
const About = dynamic(() => import("@/components/About"), { ssr: false });
import Marque2 from "@/components/Marque2";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import Map from "@/components/Map";
import fsPromises from "fs/promises";
import path from "path";

import Marque1 from "@/components/Marque1";
const School = dynamic(() => import("@/components/School"), { ssr: false });
// import Image from "next/image";

const Clock = dynamic(() => import("@/components/Clock"), { ssr: false });
const RitModel = dynamic(() => import("@/components/RitModel"));
const Merchandise = dynamic(() => import("@/components/Merchandise"), { ssr: false });
const SponsorsSection = dynamic(() => import("@/components/SponsorsSection"));

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="h-fit" style={{backgroundColor: "#004aad"}}>
      <Seo
        title="Home - SUIIT Cultural Fest"
        description="Experience AAVAHAN'26, the annual cultural fest of SUIIT, Burla featuring music, dance, drama, fashion, gaming, workshops and competitions for students across Odisha."
        keywords={[
          "Aavahan 2026 fest",
          "Aavahan 2K26",
          "Aavahan SUIIT cultural fest",
          "SUIIT Aavahan 2026",
          "SUIIT cultural festival Burla",
          "Sambalpur University Aavahan fest",
          "Odisha college cultural fest",
          "Aavahan registration",
          "Aavahan events list",
          "Aavahan SUIIT Burla Odisha",
        ]}
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Event",
          name: "AAVAHAN'26 - SUIIT Cultural Fest",
          description:
            "AAVAHAN'26 is the annual cultural fest of SUIIT (Sambalpur University Institute of Information Technology), Burla, featuring cultural performances, competitions, workshops and pro-shows.",
          location: {
            "@type": "CollegeOrUniversity",
            name: "Sambalpur University Institute of Information Technology (SUIIT)",
            address: {
              "@type": "PostalAddress",
              streetAddress: "SUIIT Campus, Jyoti Vihar",
              addressLocality: "Burla",
              addressRegion: "Odisha",
              addressCountry: "IN",
            },
          },
          organizer: {
            "@type": "CollegeOrUniversity",
            name: "Sambalpur University Institute of Information Technology (SUIIT)",
          },
          eventAttendanceMode:
            "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
        }}
      />

      <Header id="navbar" />

      <section id="hero">
        <div>
          <Hero />
          <Brand />
        </div>
      </section>

      {isLoaded && <Clock />}

      <Marque1 />

      {isLoaded && <School />}

      <div className="bg-gradient-to-b from-primary to-transparent">
        {isLoaded && <RitModel />}
        <section id="about">
          {isLoaded && <About />}
        </section>
      </div>

      <Marque2 />

      <section id="faq">
        <Faq />
      </section>

      <section id="merchandise">
        {isLoaded && <Merchandise />}
      </section>

      <section id="sponsors">
        {isLoaded && <SponsorsSection />}
      </section>

      <Map />
      <Footer />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "/data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData,
  };
}
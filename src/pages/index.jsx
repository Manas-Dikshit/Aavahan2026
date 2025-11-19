import { useRef, useEffect, useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Brand from "@/components/brand";
import About from "@/components/About";
import Marque2 from "@/components/Marque2";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import Clock from "@/components/Clock";
import Map from "@/components/Map";
import gsap from "gsap";
import fsPromises from "fs/promises";
import path from "path";
import RitModel from "@/components/RitModel";
import EventSlider from "@/components/EventSlider";
import Marque1 from "@/components/Marque1";
import School from "@/components/School";
import Image from "next/image";
import Merchandise from "@/components/Merchandise";
import SponsorsSection from "@/components/SponsorsSection";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    gsap.fromTo(
      stagger.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5 }
    );
  }, []);

  const stagger = useRef(null);

  return (
    <div className="h-fit" style={{backgroundColor: "#004aad"}}>
      <Head>
        <title>AAVAHAN26 2K25</title>
      </Head>

      <Header id="navbar" />

      <section id="hero">
        <div>
          <Hero />
          <Brand />
        </div>
      </section>

      {isLoaded && <Clock />}

      <EventSlider />
      <Marque1 />

      <School />

      <div className="bg-gradient-to-b from-primary to-transparent">
        <RitModel />
        <section id="about">
          <About />
        </section>
      </div>

      <Marque2 />

      <section id="faq">
        <Faq />
      </section>

      <section id="merchandise">
        <Merchandise />
      </section>

      <section id="sponsors">
        <SponsorsSection />
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
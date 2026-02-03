import React from "react";
import Seo from "@/components/Seo";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/all";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Image from "next/image";
import fsPromises from "fs/promises";
import path from "path";

export default function Contact(props) {
  const posts = props.posts;
  console.log(posts);

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("progress", {
      value: 100,
      scrollTrigger: {
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <div className="relative min-h-screen w-screen overflow-hidden bg-[#004aad] text-white">
      <Seo
        title="Contact & Reach Us"
        description="Contact the AAVAHAN'26 organizing team at SUIIT, Burla for sponsorships, collaborations, registrations and general queries about the cultural fest."
        keywords={[
          "Aavahan contact",
          "Aavahan 2026 contact details",
          "SUIIT Aavahan helpline",
          "Aavahan SUIIT email",
          "Aavahan SUIIT Instagram",
          "SUIIT cultural fest contact number",
          "Aavahan sponsorship contact",
        ]}
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact AAVAHAN'26 Organizing Team",
          url: undefined,
          description:
            "Official contact page for AAVAHAN'26, the cultural fest of SUIIT, Burla.",
        }}
      />

      {/* Navbar */}
      <Header id="Navbar" />

      <main className="pt-[4.5rem] md:pt-[5rem] relative z-10">
        {/* Hero Section */}
        <section className="relative w-full h-[18rem] md:h-[24rem] flex flex-col items-center justify-center text-white font-clash font-black overflow-hidden text-center">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#004aad] via-[#003c8a] to-[#002f6d] opacity-90"></div>

          {/* Hero content */}
          <div className="relative z-10 px-6 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-clash font-bold mb-4">
              GET IN TOUCH
            </h1>
            <p className="max-w-3xl text-lg md:text-xl font-chakra text-white/90">
              Have questions about <span className="text-main_primary">AAVAHAN 2026</span>? 
              Want to collaborate or get involved? We’d love to hear from you!
            </p>
            <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-main_primary to-pink-400 mt-6 rounded-full" />
          </div>

          {/* Hero decorative images */}
          <motion.div
            className="absolute left-0 bottom-0 w-40 md:w-56 lg:w-64"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Image
              src="/hulk.webp"
              alt="Hulk illustration"
              width={300}
              height={400}
              className="object-contain"
            />
          </motion.div>

          <motion.div
            className="absolute right-0 bottom-0 w-36 md:w-48 lg:w-56"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <Image
              src="/ra.png"
              alt="RA illustration"
              width={300}
              height={400}
              className="object-contain"
            />
          </motion.div>

          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-0 w-28 md:w-36 opacity-70"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 0.7 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <Image
              src="/spider.png"
              alt="Spider illustration"
              width={200}
              height={200}
              className="object-contain"
            />
          </motion.div>

          <motion.div
            className="absolute right-[15%] top-[10%] w-28 md:w-36 opacity-80"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            <Image
              src="/ca.png"
              alt="Captain America illustration"
              width={200}
              height={200}
              className="object-contain"
            />
          </motion.div>
        </section>

        {/* Connect Section */}
        <section className="w-full py-16 px-4 lg:px-16 flex flex-col items-center justify-center">
          <motion.h2
            className="text-3xl md:text-4xl font-clash font-semibold text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Connect With Us
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 max-w-6xl">
            {/* Instagram */}
            <ContactCard
              icon={<FaInstagram className="w-8 h-8 text-white" />}
              title="Instagram"
              subtitle="Follow us for updates"
              link="https://www.instagram.com/aavahan.suiit"
              btnText="Follow Us"
              gradient="from-pink-500 to-orange-400"
            />

            {/* WhatsApp */}
            <ContactCard
              icon={<FaWhatsapp className="w-8 h-8 text-white" />}
              title="WhatsApp"
              subtitle="Quick support chat"
              link="http://wa.me/918117050246"
              btnText="Chat Now"
              gradient="from-green-400 to-green-600"
            />

            {/* Email */}
            <ContactCard
              icon={<FaEnvelope className="w-8 h-8 text-white" />}
              title="Email"
              subtitle="For inquiries"
              email="aavahan@suiit.ac.in"
              gradient="from-main_primary to-pink-500"
            />
          </div>
        </section>

        {/* Contact Info */}
        <section className="w-full pb-20 px-4 lg:px-16 flex flex-col items-center justify-center">
          <motion.h2
            className="text-3xl md:text-4xl font-clash font-semibold text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Information
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <InfoCard
              icon={<FaPhone className="w-6 h-6 text-white" />}
              title="Call Us"
              info="+91 8117050246"
              gradient="from-blue-500 to-purple-600"
            />
            <InfoCard
              icon={<FaMapMarkerAlt className="w-6 h-6 text-white" />}
              title="Visit Us"
              info="SUIIT Campus, Jyoti Vihar, Burla"
              gradient="from-red-500 to-orange-500"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* ---------------------- Reusable Components ---------------------- */

function ContactCard({ icon, title, subtitle, link, btnText, email, gradient }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className={`group relative bg-gradient-to-br ${gradient} p-[2px] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300`}
    >
      <div className="bg-white rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center min-h-[200px]">
        <div
          className={`bg-gradient-to-br ${gradient} p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>
        <h3 className="font-bold text-gray-800 mb-2 text-lg font-clash">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 font-chakra">{subtitle}</p>
        {email ? (
          <p className="text-black mb-2 text-lg font-chakra">{email}</p>
        ) : (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-gradient-to-r ${gradient} text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-200 font-chakra`}
          >
            {btnText}
          </a>
        )}
      </div>
    </motion.div>
  );
}

function InfoCard({ icon, title, info, gradient }) {
  return (
    <motion.div
      className="bg-white/10 border-[1px] border-white/30 backdrop-blur-lg rounded-xl p-6 shadow-xl hover:scale-105 hover:shadow-main_primary hover:shadow-md transition-all duration-500 ease-in-out"
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center justify-center mb-4">
        <div className={`bg-gradient-to-r ${gradient} p-3 rounded-full`}>
          {icon}
        </div>
      </div>
      <h3 className="font-bold text-white mb-2 text-lg sm:text-xl font-clash">
        {title}
      </h3>
      <p className="text-white mb-2 text-lg font-chakra">{info}</p>
    </motion.div>
  );
}

/* ---------------------- Static Props ---------------------- */
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "contact.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData,
  };
}

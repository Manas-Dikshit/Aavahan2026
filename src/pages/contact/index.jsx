import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/all";
import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

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
    <div className="h-fit w-screen bg-darkPurple">
      <Head>
        <title>AAVAHAN26 2K25 Contact</title>
      </Head>
      <Header id="Navbar" />
      <main className='pt-[5.5rem] h-full'>
        {/* Page Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 px-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-clash font-semibold mb-4 sm:mb-6">
            Get In Touch
          </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white font-clash max-w-3xl mx-auto leading-relaxed">
            Have questions about AAVAHAN26 2025? Want to collaborate or get involved? We'd love to hear from you!
          </p>
          <div className="w-20 sm:w-32 h-1 bg-gradient-to-r from-main_primary to-orange-400 mx-auto mt-6 sm:mt-8 rounded-full" />
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Connect With Us Section */}
          <motion.div
            className="mb-12 sm:mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-clash font-semibold mb-8 sm:mb-12">
              Connect With Us
            </h2>

            {/* Premium Social Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12">
              <motion.div
                className="group relative bg-gradient-to-br from-orange-500 to-pink-500 p-[2px] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <div className="bg-white rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center min-h-[200px]">
                  <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <FaInstagram className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2 text-lg font-clash">Instagram</h3>
                  <p className="text-gray-600 text-sm mb-4 font-clash">Follow us for updates</p>
                  <a
                    href="https://www.instagram.com/tbit_bits2bytes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-200 font-clash"
                  >
                    Follow Us
                  </a>
                </div>
              </motion.div>

              {/* WhatsApp Card */}
              <motion.div
                className="group relative bg-gradient-to-br from-green-400 to-green-600 p-[2px] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <div className="bg-white rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center min-h-[200px]">
                  <div className="bg-gradient-to-br from-green-400 to-green-600 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FaWhatsapp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2 text-lg font-clash">WhatsApp</h3>
                  <p className="text-gray-600 text-sm mb-4 font-clash">Quick support chat</p>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-200 font-clash"
                  >
                    Chat Now
                  </a>
                </div>
              </motion.div>

              {/* Email Card */}
              <motion.div
                className="group relative bg-gradient-to-br from-main_primary to-pink-500 p-[2px] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <div className="bg-white rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center min-h-[200px]">
                  <div className="bg-gradient-to-br from-main_primary to-pink-500 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FaEnvelope className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2 text-lg font-clash">Email</h3>
                  <p className="text-gray-600 text-sm mb-4 font-clash">Official inquiries</p>
                  <p className="text-black mb-2 text-lg font-chakra">aavahan26@bitcollege.in</p>
                </div>
              </motion.div>
            </div>

            {/* Additional Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <motion.div
                className="bg-white/10 border-[1px] border-white backdrop-blur-lg rounded-xl p-6 shadow-xl hover:scale-105 hover:shadow-main_primary hover:shadow-md transition-all duration-500 ease-in-out"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                    <FaPhone className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-white mb-2 text-lg sm:text-xl font-clash">Call Us</h3>
                <p className="text-white mb-2 text-lg font-chakra">+91 9801929811</p>
                <p className="text-white mb-2 text-lg font-chakra">+91 9330108191</p>
                <p className="text-sm text-white font-chakra">Mon-Fri, 9AM-5PM IST</p>
              </motion.div>

              <motion.div
                className="bg-white/10 border-[1px] border-white backdrop-blur-lg rounded-xl p-6 shadow-xl hover:scale-105 hover:shadow-main_primary hover:shadow-md transition-all duration-500 ease-in-out"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 p-3 rounded-full">
                    <FaMapMarkerAlt className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-white mb-2 text-lg sm:text-xl font-clash">Visit Us</h3>
                <p className="text-white mb-2 text-lg font-chakra">TBIT Campus</p>
                <p className="text-sm text-white font-chakra">Kolkata, West Bengal</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import fsPromises from "fs/promises";
import path from "path";
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "contact.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData,
  };
}
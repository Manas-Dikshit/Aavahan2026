// pages/gallery.js
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import fs from 'fs';
import path from 'path';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export async function getStaticProps() {
  const galleryDir = path.join(process.cwd(), 'public', 'gallary');
  let files = [];
  try {
    files = fs
      .readdirSync(galleryDir)
      .filter((f) => f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.jpeg') || f.toLowerCase().endsWith('.png'));
  } catch (e) {
    console.error('Error reading gallery folder:', e);
  }

  return { props: { galleryImages: files } };
}

export default function Gallery({ galleryImages }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryRef = useRef(null);
  const titleRef = useRef(null);

  // Animate section title and gallery
  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: titleRef.current, start: 'top 85%' },
      }
    );

    const galleryItems = galleryRef.current?.querySelectorAll('.gallery-item');
    if (galleryItems) {
      gsap.fromTo(
        galleryItems,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: { trigger: galleryRef.current, start: 'top 90%' },
        }
      );
    }
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  // Utility: Assign random grid size pattern
  const getGridStyle = (index) => {
    if (index % 9 === 0) return 'md:col-span-2 md:row-span-2'; // big square
    if (index % 5 === 0) return 'md:row-span-2'; // tall
    if (index % 7 === 0) return 'md:col-span-2'; // wide
    return '';
  };

  return (
    <div className="min-h-screen bg-[#004aad]">
      <Seo
        title="Gallery & Fest Moments"
        description="Relive the best moments from AAVAHAN'25 at SUIIT – a showcase of joy, energy, and creativity from the cultural fest."
        keywords={[
          'Aavahan 2026 gallery',
          'Aavahan fest photos',
          'SUIIT Aavahan pictures',
          'SUIIT cultural fest gallery',
          'Aavahan workshop photos',
          'Aavahan event highlights',
        ]}
        type="website"
      />

      <Header />

      <main className="pt-20 pb-24 px-4 relative">
        <section className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div ref={titleRef} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-clash font-extrabold text-white tracking-wider">
              FEST <span className="text-main_primary">GALLERY</span>
            </h2>
            <p className="text-white/70 font-chakra text-lg md:text-xl max-w-2xl mx-auto mt-4">
              Capturing the vibrant energy and unforgettable moments from AAVAHAN'26
            </p>
          </div>

          {/* Masonry Grid Layout */}
          <div
            ref={galleryRef}
            className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
          >
            {galleryImages.map((file, index) => {
              const src = `/gallary/${file}`;
              return (
                <div
                  key={file}
                  className={`gallery-item relative overflow-hidden rounded-2xl group cursor-pointer break-inside-avoid border border-white/10 hover:border-main_primary/30 transition-all duration-500 ${getGridStyle(
                    index
                  )}`}
                  onClick={() =>
                    openModal({
                      src,
                      alt: `Aavahan Fest Photo ${index + 1}`,
                    })
                  }
                >
                  <Image
                    src={src}
                    alt={`Aavahan Fest Photo ${index + 1}`}
                    width={500}
                    height={500}
                    loading="lazy"
                    className="w-full h-auto object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4">
                    <span className="text-white text-sm font-chakra">Click to View</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Modal for Full Image */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <div className="relative max-w-5xl max-h-[90vh] w-full">
                <button
                  onClick={closeModal}
                  className="absolute -top-12 right-0 text-white hover:text-main_primary transition-colors duration-200 z-10"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="relative bg-white/10 rounded-2xl overflow-hidden border border-white/20">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    width={1000}
                    height={800}
                    className="w-full h-auto max-h-[85vh] object-contain"
                  />
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Coming Soon Section */}
        <div className="text-center mt-20">
          <div className="inline-block relative">
            <div className="flex justify-center gap-2 mb-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-main_primary rounded-full animate-pulse"
                  style={{
                    animationDelay: `${i * 0.4}s`,
                    animationDuration: '2s',
                  }}
                ></div>
              ))}
            </div>
            <h3 className="text-2xl md:text-3xl font-clash font-bold text-transparent bg-gradient-to-r from-white via-main_primary to-white bg-clip-text animate-pulse">
              MORE MEMORIES LOADING...
            </h3>
            <p className="text-white/60 font-chakra mt-2 tracking-wide">
              Stay tuned for upcoming moments from AAVAHAN'26
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

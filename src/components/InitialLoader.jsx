
import React, { useState, useEffect } from 'react';

export default function InitialLoader() {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('INITIALIZING');
  const [dots, setDots] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsComplete(true);
          return 100;
        }
        return prev + Math.random() * 3;
      });
    }, 50);

    const textInterval = setInterval(() => {
      const texts = [
        'INITIALIZING CULTURAL FEST',
        'LOADING EVENTS',
        'SYNCING PERFORMANCES',
        'PREPARING EXPERIENCE',
        'ALMOST READY'
      ];
      setLoadingText(texts[Math.floor(Math.random() * texts.length)]);
    }, 1800);

    const dotsInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 600);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
      clearInterval(dotsInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-soothing_black via-primary to-black flex items-center justify-center overflow-hidden">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        {/* Vertical lines */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-main_primary to-transparent animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              height: `${Math.random() * 80 + 100}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
        {/* Horizontal lines */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-gradient-to-r from-main_primary to-transparent animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 80 + 100}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-main_primary/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-lg mx-auto px-6">
        {/* Logo/Title Section */}
        <div className="mb-12">
          <div className="relative">
            <h1 className="text-6xl md:text-7xl font-clash font-extrabold text-white leading-tight">
              AAVAHAN26
            </h1>
            <div className="relative -mt-4">
              <span className="text-5xl md:text-6xl font-clash font-black text-main_primary">
                2025
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-clash font-bold text-white/90 tracking-wider mt-2">
              CULTURAL FEST
            </h3>
          </div>
        </div>

        {/* Modern Loading Animation */}
        <div className="relative mb-10">
          <div className="w-40 h-40 mx-auto relative">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 border-2 border-main_primary/30 rounded-full border-t-main_primary animate-spin"></div>

            {/* Inner rotating ring */}
            <div className="absolute inset-6 border-2 border-white/20 rounded-full border-b-white animate-spin"
              style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>

            {/* Center core with progress */}
            <div className="absolute inset-12 bg-gradient-to-br from-main_primary to-purple-800 rounded-full flex items-center justify-center shadow-xl">
              <div className="text-white font-clash text-lg font-bold">
                {Math.floor(progress)}%
              </div>
            </div>

            {/* Orbiting dots */}
            {[...Array(6)].map((_, i) => (
              <div
                key={`orbit-${i}`}
                className="absolute w-3 h-3 bg-main_primary rounded-full animate-spin shadow-lg"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `rotate(${i * 60}deg) translateY(-85px)`,
                  transformOrigin: '0 85px',
                  animationDuration: '4s',
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden backdrop-blur-sm border border-gray/20">
            <div
              className="h-full bg-gradient-to-r from-main_primary to-purple-600 transition-all duration-500 ease-out relative rounded-full"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
              <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/40 animate-pulse rounded-full"></div>
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray mt-3">
            <span className="font-chakra">Loading Experience...</span>
            <span className="font-clash font-bold">{Math.floor(progress)}% Complete</span>
          </div>
        </div>

        {/* Loading Status Text */}
        <div className="mb-8">
          <div className="text-main_primary font-clash text-base font-semibold tracking-wide">
            {loadingText}{dots}
          </div>
        </div>

        {/* Tech Categories */}
        <div className="flex flex-wrap justify-center gap-3 text-xs text-gray/80 mb-6">
          {[
            'ARTIFICIAL INTELLIGENCE',
            'ROBOTICS',
            'CODING CONTESTS',
            'WORKSHOPS',
            'INNOVATION',
            'GAMING'
          ].map((tech, i) => (
            <span
              key={tech}
              className="px-3 py-1 border border-gray/30 rounded-full backdrop-blur-sm bg-white/5 font-chakra tracking-wide hover:border-main_primary/50 transition-colors duration-300"
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Completion Animation */}
        {isComplete && (
          <div className="animate-pulse">
            <div className="text-main_primary text-sm font-clash font-bold tracking-wider">
              🚀 READY FOR INNOVATION!
            </div>
          </div>
        )}

        {/* Bottom Tagline */}
        <div className="text-gray/70 text-xs font-chakra tracking-wider">
          EXPERIENCE THE BEST OF CULTURE
        </div>
      </div>

      {/* Elegant Corner Accents */}
      <div className="absolute top-6 left-6 w-10 h-10 border-l-2 border-t-2 border-main_primary/60 animate-pulse"></div>
      <div className="absolute top-6 right-6 w-10 h-10 border-r-2 border-t-2 border-main_primary/60 animate-pulse"></div>
      <div className="absolute bottom-6 left-6 w-10 h-10 border-l-2 border-b-2 border-main_primary/60 animate-pulse"></div>
      <div className="absolute bottom-6 right-6 w-10 h-10 border-r-2 border-b-2 border-main_primary/60 animate-pulse"></div>

      {/* Brand Watermark */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray/40 font-chakra tracking-widest">
        AAVAHAN26 • CULTURAL FEST 2025
      </div>
    </div>
  );
};

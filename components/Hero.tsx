'use client';

import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

const Hero = () => {
  const [useGif, setUseGif] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleError = () => {
        setUseGif(true);
      };
      video.addEventListener('error', handleError);
      return () => video.removeEventListener('error', handleError);
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/Home page video.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for better text readability - stronger on mobile */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 md:from-black/80 md:via-black/60 md:to-black/20"></div>
        
        {/* Left side half shadow overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent w-full md:w-3/4"></div>
      </div>

      {/* Diagonal Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 120L1440 120L1440 60C1440 60 1200 0 720 60C240 120 0 60 0 60L0 120Z" 
            fill="white"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-3 sm:px-4 z-10 max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl"
        >
          {/* Subtitle Tag */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-4 sm:mb-6"
          >
            <span className="inline-block bg-primary/90 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase">
              Powering a Green<span className="text-secondary-light">er</span> Tomorrow
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="block">Customized Solar Solutions,</span>
            <span className="block">Engineered for Excellence</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 md:mb-10 max-w-2xl leading-relaxed pr-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            8+ years of expertise in custom solar PV systems for homes, businesses, and industries—delivering quality, precision, and sustainable energy.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                href="/contact"
                className="bg-primary text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-bold flex items-center gap-2 sm:gap-3 hover:bg-primary-dark transition-all shadow-lg text-xs sm:text-sm md:text-base tracking-wide uppercase"
              >
                Contact Us
                <FiArrowRight size={18} className="sm:w-5 sm:h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-24 sm:bottom-28 left-1/2 transform -translate-x-1/2 hidden sm:block z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-white/50 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

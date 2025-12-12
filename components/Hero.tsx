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

      {/* Content */}
      <div className="container mx-auto px-3 sm:px-4 z-10 max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl pl-6 sm:pl-8 md:pl-12 lg:pl-16"
        >
          {/* Main Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="block text-white whitespace-normal sm:whitespace-nowrap">Power Your Future</span>
            <span className="block text-primary whitespace-normal sm:whitespace-nowrap">With Solar Energy</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white mb-4 sm:mb-6 md:mb-8 lg:mb-10 max-w-full sm:max-w-2xl md:max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Leading service provider of solar renewable energy solutions. Expertise in custom solar power systems for residential, commercial and industries sectors. Delivering high quality, reliability and sustainable power solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-nowrap items-center gap-3 sm:gap-4 md:gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <Link
                href="/contact"
                className="bg-primary text-white px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 rounded-full font-bold flex items-center gap-2 sm:gap-3 hover:bg-primary-dark transition-all shadow-lg text-[11px] sm:text-xs md:text-sm lg:text-base tracking-wide"
              >
                Get Started
                <FiArrowRight size={16} className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <Link
                href="#services"
                className="bg-white text-secondary px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 rounded-full font-bold flex items-center hover:bg-gray-100 transition-all shadow-lg text-[11px] sm:text-xs md:text-sm lg:text-base tracking-wide"
              >
                Our Services
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

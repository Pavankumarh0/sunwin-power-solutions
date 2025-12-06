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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-32">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/AdobeStock_1595633956_Video_HD_Preview.mov" type="video/quicktime" />
          <source src="/videos/AdobeStock_1595633956_Video_HD_Preview.mov" type="video/mp4" />
        </video>

        {/* Black dim overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Floating Solar Panel Animation - Hidden on mobile */}
      <motion.div
        className="absolute top-20 right-10 w-24 h-24 sm:w-32 sm:h-32 opacity-20 hidden sm:block"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?q=80&w=200"
          alt="Solar Panel"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 z-10 text-center max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 px-2 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Power Your Future
            <br />
            <span className="text-primary">With Solar Energy</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Leading service provider of solar renewable energy solutions. Expertise in custom solar power systems for residential, commercial and industries sectors. Delivering high quality, reliability and sustainable power solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors shadow-lg text-sm sm:text-base w-full sm:w-auto"
              >
                Get Started
                <FiArrowRight className="hidden sm:inline" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/services"
                className="bg-white text-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base w-full sm:w-auto text-center block"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

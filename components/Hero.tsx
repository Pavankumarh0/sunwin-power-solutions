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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-32">
      {/* Animated Background Video/GIF */}
      <div className="absolute inset-0 z-0">
        {/* Video Background - Preferred for better performance */}
        {!useGif && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.8 }}
            onError={() => setUseGif(true)}
          >
            {/* Solar plant background video */}
            <source src="/videos/177600-857741650_small.mp4" type="video/mp4" />
          </video>
        )}
        
        {/* Fallback: GIF Background (if video doesn't load) */}
        {useGif && (
          <div className="absolute inset-0 w-full h-full">
        <Image
              src="/images/solar-plant-background.gif"
              alt="Solar Plant Background"
          fill
          className="object-cover"
              style={{ opacity: 0.8 }}
              unoptimized
          priority
        />
          </div>
        )}
        
        {/* Black dim overlay for text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Floating Solar Panel Animation */}
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
      <div className="container mx-auto px-4 z-10 text-center max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Power Your Future
            <br />
            <span className="text-primary">With Solar Energy</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Leading service provider of solar renewable energy solutions. Expertise in custom solar power systems for residential, commercial and industries sectors. Delivering high quality, reliability and sustainable power solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="bg-primary text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-primary-dark transition-colors shadow-lg inline-flex"
            >
              Get Started
              <FiArrowRight />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/services"
                className="bg-white text-secondary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex"
            >
              Our Services
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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


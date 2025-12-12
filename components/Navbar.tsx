'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiMail, FiArrowRight } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Impact', href: '/impact' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 bg-white overflow-hidden transition-shadow duration-300 ${
      scrolled ? 'shadow-2xl' : 'shadow-lg'
    }`}>
      {/* Top Bar - Blue */}
      <div className="bg-secondary text-white py-1.5 sm:py-2 overflow-hidden">
        <div className="container mx-auto px-3 sm:px-4 flex justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <a href="mailto:sunwinps@gmail.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <FiMail size={14} /> 
              <span className="text-xs sm:text-sm">sunwinps@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="hidden sm:inline text-xs sm:text-sm text-white/80">Follow Us:</span>
            <a 
              href="https://www.facebook.com/share/1aYE6fbSHh/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook size={16} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={16} />
            </a>
            <a 
              href="https://www.instagram.com/sunwinps?igsh=MWtuaHhuNDhmdHl3dg==" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - White background */}
      <div className="container mx-auto px-3 sm:px-4 overflow-hidden bg-white/95 backdrop-blur-sm">
        <div className="flex justify-between items-center h-12 sm:h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 pl-6 sm:pl-8 md:pl-12 lg:pl-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/logo/sw logo.png"
                alt="Sunwin Power Solutions Logo"
                width={240}
                height={80}
                className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-secondary transition-colors hover:text-primary text-sm lg:text-base"
              >
                {item.name}
              </Link>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="bg-secondary text-white px-5 lg:px-6 py-2 lg:py-2.5 rounded-full hover:bg-secondary-light transition-colors inline-flex items-center gap-2 text-sm lg:text-base font-semibold tracking-wide"
              >
                GET QUOTE
                <FiArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-secondary flex-shrink-0 p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white shadow-2xl border-t border-gray-100"
          style={{
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div className="container mx-auto px-4 py-4 sm:py-6 flex flex-col gap-1 sm:gap-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-secondary font-medium hover:text-primary hover:bg-gray-50 transition-all py-2.5 sm:py-3 px-4 rounded-lg hover:shadow-sm text-base"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navItems.length * 0.05 }}
              className="mt-2"
            >
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-secondary text-white px-6 py-3 rounded-full text-center hover:bg-secondary-light transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 font-semibold"
              >
                GET QUOTE
                <FiArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

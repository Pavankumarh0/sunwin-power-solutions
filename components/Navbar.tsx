'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiPhone, FiMail } from 'react-icons/fi';
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
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Impact', href: '#impact' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 bg-white overflow-hidden transition-shadow duration-300 ${
      scrolled ? 'shadow-2xl' : 'shadow-lg'
    }`}>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 overflow-hidden shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink min-w-0">
            <a href="tel:+917200604242" className="flex items-center gap-1 sm:gap-2 hover:text-gray-200 whitespace-nowrap">
              <FiPhone className="flex-shrink-0" size={14} /> 
              <span className="hidden xs:inline">+91 72006 04242</span>
              <span className="xs:hidden text-xs">Call</span>
            </a>
            <a href="mailto:info@sunwinpower.com" className="hidden sm:flex items-center gap-2 hover:text-gray-200">
              <FiMail /> info@sunwinpower.com
            </a>
          </div>
          <div className="text-xs hidden sm:block flex-shrink-0">
            GST: 33CGWPN8077Q1Z3
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 overflow-hidden">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/logo/sw logo.png"
                alt="Sunwin Power Solutions Logo"
                width={180}
                height={60}
                className="h-10 sm:h-12 w-auto"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-gray-700 transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors"
            >
              Get Quote
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 flex-shrink-0 p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Enhanced Shadow Container */}
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
          <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
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
                  className="block text-gray-700 font-medium hover:text-primary hover:bg-gray-50 transition-all py-3 px-4 rounded-lg hover:shadow-sm"
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
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block bg-primary text-white px-6 py-3 rounded-full text-center hover:bg-primary-dark transition-all shadow-md hover:shadow-lg"
              >
                Get Quote
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;


'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'Contact', href: '/contact' },
    ],
    'Our Services': [
      { name: 'Solar Panel Installation', href: '/services' },
      { name: 'On Grid Solar Systems', href: '/services' },
      { name: 'Maintenance & Repair', href: '/services' },
      { name: 'Solar Street Lights', href: '/services' },
      { name: 'Inverter Battery', href: '/services' },
    ],
  };

  const socialLinks = [
    { icon: <FaFacebook />, href: 'https://www.facebook.com/share/1aYE6fbSHh/', label: 'Facebook', target: '_blank', rel: 'noopener noreferrer' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/sunwinps?igsh=MWtuaHhuNDhmdHl3dg==', label: 'Instagram', target: '_blank', rel: 'noopener noreferrer' },
  ];

  return (
    <footer className="bg-gray-200 text-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo/sw logo.png"
                alt="Sunwin Power Solutions Logo"
                width={200}
                height={70}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-sm mb-4 leading-relaxed text-gray-700">
              Leading service provider of solar renewable energy solutions. Expertise in custom solar power systems for residential, commercial and industries sectors. Delivering high quality, reliability and sustainable power solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.target || '_self'}
                  rel={social.rel || ''}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center hover:bg-primary transition-colors text-gray-700"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-lg font-bold text-secondary mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-700 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-secondary mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FiMapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-sm text-gray-700">
                  Plot No-19, Shop #4 Janakiram Nagar<br />
                  Kadappa Road, Puthagaram<br />
                  Kolathur Teachers Colony<br />
                  Chennai 600 099, Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-sm">
                  <a href="tel:+919500164901" className="text-gray-700 hover:text-primary transition-colors block">
                    +91 9500164901
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-sm">
                  <a href="mailto:sunwinps@gmail.com" className="text-gray-700 hover:text-primary transition-colors block">
                    sunwinps@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-700 text-center md:text-left">
              © {currentYear} Sunwin Power Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-700 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-700 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-700 hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
          <p className="text-xs text-gray-600 text-center mt-4">
            Proprietor: Sugantha N
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


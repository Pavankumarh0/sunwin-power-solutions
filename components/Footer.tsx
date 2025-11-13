'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', href: '#home' },
      { name: 'About Us', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Gallery', href: '#gallery' },
      { name: 'Contact', href: '#contact' },
    ],
    'Our Services': [
      { name: 'Solar Panel Installation', href: '#services' },
      { name: 'On Grid Solar Systems', href: '#services' },
      { name: 'Maintenance & Repair', href: '#services' },
      { name: 'Solar Street Lights', href: '#services' },
      { name: 'Inverter Battery', href: '#services' },
    ],
  };

  const socialLinks = [
    { icon: <FiFacebook />, href: '#', label: 'Facebook' },
    { icon: <FiTwitter />, href: '#', label: 'Twitter' },
    { icon: <FiLinkedin />, href: '#', label: 'LinkedIn' },
    { icon: <FiInstagram />, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
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
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm mb-4 leading-relaxed">
              Leading provider of solar renewable energy solutions in Chennai, Tamil Nadu. 
              Empowering sustainable future with innovative solar technology.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
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
              <h4 className="text-lg font-bold text-white mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-primary transition-colors inline-flex items-center gap-2 group"
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
            <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FiMapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-sm">
                  Plot No.19, Kadappa Road, Janki Raman Nagar<br />
                  Chennai-600099, Tamil Nadu
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-sm">
                  <a href="tel:+917200604242" className="hover:text-primary transition-colors">
                    +91 72006 04242
                  </a>
                  <br />
                  <a href="tel:+919952730863" className="hover:text-primary transition-colors">
                    +91 99527 30863
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@sunwinpower.com" className="text-sm hover:text-primary transition-colors">
                  info@sunwinpower.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left">
              © {currentYear} Sunwin Power Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center mt-4">
            GST No: 33CGWPN8077Q1Z3 | Proprietor: Sugantha N
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


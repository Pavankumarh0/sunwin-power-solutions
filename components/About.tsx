'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiCheckCircle } from 'react-icons/fi';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const solarCompetencies = [
    'Installation & commissioning of rooftop solar systems (Residential, Commercial & Industrial)',
    'Ground-mounted solar plant installation for kW-MW scale projects',
    'EPC services for solar developers',
    'System design, engineering, and project management',
    'Performance optimization, SCADA integration, and testing',
    'Electrical, structural, and civil works associated with solar installations',
    'Long-term O&M services for Solar power plants'
  ];

  const windCompetencies = [
    'Installation, erection & commissioning support for wind turbines.',
    'Electrical and civil balance of plant (BoP) works.',
    'Grid connectivity, substation work, and transmission line integration',
    'Preventive & corrective maintenance for wind assets',
    'Long-term O&M services for wind power plants'
  ];

  const keyHighlights = [
    'Capacity Range: From kW to MW scale',
    'Projects Turnkey solutions from design to commissioning',
    'Compliance with national and international standards',
    'Experienced engineering and project management team',
    'Assured quality, safety, and timely delivery'
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 px-2">
            About <span className="text-primary">Sunwin Power Solutions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Leading service provider of solar renewable energy solutions. Expertise in custom solar power systems for residential, commercial and industries sectors. Delivering high quality, reliability and sustainable power solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-10 sm:mb-12 md:mb-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000"
                alt="Solar Installation"
                fill
                className="object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-primary text-white p-4 sm:p-6 rounded-xl shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-2xl sm:text-3xl font-bold">20+</p>
              <p className="text-xs sm:text-sm">Years Experience</p>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
              Over 20 years of expertise in the Renewable Energy Sector (Solar & Wind).
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              With more than 20 years of proven experience, we have deep technical knowledge, strong execution
              capabilities in the Solar & Wind Energy sector. Our experience in the renewable energy industry
              enables us to deliver reliable, efficient, and future-ready solutions for projects of all scales.
            </p>
            <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Our mission is to empower you to "Power it Yourself" by providing the most advanced and reliable
              solar energy systems tailored to your unique needs. With a focus on quality, efficiency,
              and environmental responsibility, we deliver sustainable energy solutions that make a real difference.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors text-sm sm:text-base"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-10 sm:mb-12 md:mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center px-2">
            Our Core Competencies Includes:
          </h3>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Solar Energy Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="bg-white p-4 sm:p-6 rounded-xl shadow-lg"
            >
              <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 underline">
                Solar Energy Solutions
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {solarCompetencies.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="flex items-start gap-2 sm:gap-3"
                  >
                    <FiCheckCircle className="text-primary text-lg sm:text-xl flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Wind Energy Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="bg-white p-4 sm:p-6 rounded-xl shadow-lg"
            >
              <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 underline">
                Wind Energy Solutions
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {windCompetencies.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1.1 + index * 0.1 }}
                    className="flex items-start gap-2 sm:gap-3"
                  >
                    <FiCheckCircle className="text-primary text-lg sm:text-xl flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Key Highlights</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {keyHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.3 + index * 0.1 }}
                className="flex items-start gap-2 sm:gap-3"
              >
                <FiCheckCircle className="text-white text-lg sm:text-xl flex-shrink-0 mt-1" />
                <span className="text-gray-100 text-sm sm:text-base">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

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


  const keyHighlights = [
    'Capacity Range: From kW to MW scale',
    'Projects Turnkey solutions from design to commissioning',
    'Compliance with national and international standards',
    'Experienced engineering and project management team',
    'Assured quality, safety, and timely delivery'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-primary">Sunwin Power Solutions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Leading service provider of solar renewable energy solutions. Expertise in custom solar power systems for residential, commercial and industries sectors. Delivering high quality, reliability and sustainable power solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000"
                alt="Solar Installation"
                fill
                className="object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-3xl font-bold">20+</p>
              <p className="text-sm">Years Experience</p>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Over Two Decades of Expertise in Solar Energy Sector
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With more than 20 years of proven experience, we have deep technical knowledge, strong execution 
              capabilities in the Solar Energy sector. Our experience in the renewable energy industry 
              enables us to deliver reliable, efficient, and future-ready solutions for projects of all scales.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
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
              className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
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
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Core Competencies Includes:
          </h3>
          
          <div className="max-w-3xl mx-auto">
            {/* Solar Energy Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h4 className="text-2xl font-bold text-gray-800 mb-4 underline">
                Solar Energy Solutions
              </h4>
              <ul className="space-y-3">
                {solarCompetencies.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <FiCheckCircle className="text-primary text-xl flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
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
          className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Key Highlights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.3 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <FiCheckCircle className="text-white text-xl flex-shrink-0 mt-1" />
                <span className="text-gray-100">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

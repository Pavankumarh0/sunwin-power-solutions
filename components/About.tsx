'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { FiCheckCircle } from 'react-icons/fi';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    'Over 1 year of industry experience',
    'ISO certified quality standards',
    'Expert team of professionals',
    '24/7 customer support',
    'Competitive pricing',
    'Warranty on all installations',
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
            Leading provider of sustainable solar energy solutions in Chennai, Tamil Nadu
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
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
              <p className="text-3xl font-bold">1+</p>
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
              Providing Renewable Energy Solutions
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are a leading provider of solar renewable energy solutions, committed to helping 
              businesses and individuals harness the power of the sun. Based in Chennai, Tamil Nadu, 
              we specialize in providing comprehensive solar energy systems including installation, 
              maintenance, and repair services.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our mission is to empower you to "Power it Yourself" by providing the most advanced 
              and reliable solar energy systems tailored to your unique needs. With a focus on 
              quality, efficiency, and environmental responsibility, we deliver sustainable energy 
              solutions that make a real difference.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <FiCheckCircle className="text-primary text-xl flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;


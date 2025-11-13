'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { FiSun, FiTool, FiSettings, FiZap, FiCheckCircle, FiWifi } from 'react-icons/fi';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: <FiSun className="w-12 h-12" />,
      title: 'Solar Panel Installation',
      description: 'Professional installation of high-quality solar panels for residential and commercial properties.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=400',
      features: ['Ground Mount Solar', 'Industrial Roof Solar', 'RCC Roof Solar'],
    },
    {
      icon: <FiZap className="w-12 h-12" />,
      title: 'On Grid Solar Systems',
      description: 'Complete on-grid solar power systems connected to the utility grid for maximum efficiency.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400',
      features: ['Grid Connected', 'Net Metering', 'Cost Effective'],
    },
    {
      icon: <FiTool className="w-12 h-12" />,
      title: 'Installation Services',
      description: 'Expert installation services with professional team ensuring quality and timely completion.',
      image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=400',
      features: ['Quick Setup', 'Professional Team', 'Quality Assured'],
    },
    {
      icon: <FiSettings className="w-12 h-12" />,
      title: 'Maintenance & Repair',
      description: 'Comprehensive maintenance and repair services to keep your solar system running efficiently.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=400',
      features: ['Regular Checkups', 'Quick Repairs', '24/7 Support'],
    },
    {
      icon: <FiWifi className="w-12 h-12" />,
      title: 'Solar Street Lights',
      description: 'Energy-efficient solar street lighting solutions for public and private areas.',
      image: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=400',
      features: ['Auto On/Off', 'Long Battery Life', 'Weather Resistant'],
    },
    {
      icon: <FiCheckCircle className="w-12 h-12" />,
      title: 'Inverter Battery',
      description: 'High-quality inverter batteries for reliable backup power storage solutions.',
      image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?q=80&w=400',
      features: ['Long Lasting', 'High Capacity', 'Low Maintenance'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Offering sustainable energy services tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <FiCheckCircle className="text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 bg-gradient-to-r from-secondary to-secondary-dark text-white rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Why Choose Sunwin Power Solutions?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Expertise', desc: 'Professional team with years of experience' },
              { title: 'Quality Assurance', desc: 'Only the highest-quality materials' },
              { title: 'Custom Solutions', desc: 'Tailored to your specific needs' },
              { title: 'Sustainability', desc: 'Committed to reducing carbon footprints' },
              { title: '24/7 Support', desc: 'Always here when you need us' },
              { title: 'Competitive Pricing', desc: 'Best value for your investment' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-200 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;


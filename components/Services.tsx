'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
<<<<<<< HEAD
import { FiSun, FiTool, FiSettings, FiZap, FiCheckCircle, FiGrid } from 'react-icons/fi';
=======
import { FiSun, FiTool, FiSettings, FiZap, FiCheckCircle, FiWifi } from 'react-icons/fi';
>>>>>>> origin/main

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

<<<<<<< HEAD
  const mainServices = [
    {
      icon: <FiSun className="w-12 h-12" />,
      title: 'Installation and Commissioning Services',
      subtitle: 'Solar Power Plant range from kW to MW capacity',
      description: 'Complete installation and commissioning services for solar power plants of all scales.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=400',
      details: [
        {
          category: 'Rooftop Solar Installation – Residential, Commercial & Industrial Buildings',
          items: [
            'Design, supply, installation, testing, and commissioning of rooftop solar systems',
            'Customized solutions for homes, apartments, offices, malls, hospitals, institutions & Industrial Buildings',
            'Grid-tied, off-grid, and hybrid system integration'
          ]
        },
        {
          category: 'Ground-Mounted Solar Power Plant Installation',
          items: [
            'Site survey, layout planning, and civil works',
            'Module mounting structures, cabling, inverter stations, and pooling substations',
            'Transmission line connectivity and grid synchronization'
          ]
        }
      ]
    },
    {
      icon: <FiGrid className="w-12 h-12" />,
      title: 'EPC For Solar Power Plant Developers',
      description: 'End-to-end Engineering, Procurement, and Construction services for solar power plant developers.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400',
      details: [
        {
          category: 'EPC Services',
          items: [
            'Project execution and construction management',
            'Testing, commissioning, and handover'
          ]
        }
      ]
    },
    {
      icon: <FiSettings className="w-12 h-12" />,
      title: 'Operation and Maintenance of Solar Power Plants',
      subtitle: 'From KW to MW scale',
      description: 'Comprehensive O&M services to maximize energy generation and extend equipment lifespan.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=400',
      details: [
        {
          category: 'O&M Activities',
          items: [
            'Maximize Energy Generation (Kwh)',
            'Reduce down time and losses',
            'Ensure Safety and Compliance',
            'Extend Equipment life span by carry out the periodical maintenance in the solar plant',
            'Regular Cleaning of Solar panels',
            'Visual Inspection of solar modules for cracks, hotspot or any damages',
            'Checking mounting Structure for correction and alignments',
            'Inspection of Cables connectors and Junction boxes',
            'Cleaning of Solar Modules',
            'Checking the functioning of the inverters and its associated Electrical components',
            'Carry out all preventive/predictive maintenance activities'
          ]
        }
      ]
=======
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
>>>>>>> origin/main
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
<<<<<<< HEAD
            Installation and Commissioning services of Solar Power Plant range from kW to MW capacity
          </p>
        </motion.div>

        <div className="space-y-12">
          {mainServices.map((service, index) => (
=======
            Offering sustainable energy services tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
>>>>>>> origin/main
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
<<<<<<< HEAD
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 md:h-full min-h-[300px]">
=======
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
>>>>>>> origin/main
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
<<<<<<< HEAD
                    className="object-cover"
                />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
=======
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
>>>>>>> origin/main
                  {service.icon}
                </div>
              </div>

<<<<<<< HEAD
                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                  {service.subtitle && (
                    <p className="text-primary font-semibold mb-4">{service.subtitle}</p>
                  )}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                  {/* Service Details */}
                  {service.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="mb-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-3 underline">
                        {detail.category}
                      </h4>
                      <ul className="space-y-2">
                        {detail.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-gray-700">
                            <FiCheckCircle className="text-primary flex-shrink-0 mt-1" />
                            <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                    </div>
                  ))}
                </div>
=======
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
>>>>>>> origin/main
              </div>
            </motion.div>
          ))}
        </div>

<<<<<<< HEAD
        {/* Key Highlights */}
=======
        {/* Why Choose Us */}
>>>>>>> origin/main
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 bg-gradient-to-r from-secondary to-secondary-dark text-white rounded-2xl p-8 md:p-12"
        >
<<<<<<< HEAD
          <h3 className="text-3xl font-bold mb-8 text-center">Key Highlights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Capacity Range', desc: 'From kW to MW scale' },
              { title: 'Turnkey Solutions', desc: 'Projects from design to commissioning' },
              { title: 'Compliance', desc: 'With national and international standards' },
              { title: 'Expert Team', desc: 'Experienced engineering and project management team' },
              { title: 'Quality Assurance', desc: 'Assured quality, safety, and timely delivery' },
              { title: 'Long-term Support', desc: 'O&M services for sustainable operations' },
=======
          <h3 className="text-3xl font-bold mb-8 text-center">Why Choose Sunwin Power Solutions?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Expertise', desc: 'Professional team with years of experience' },
              { title: 'Quality Assurance', desc: 'Only the highest-quality materials' },
              { title: 'Custom Solutions', desc: 'Tailored to your specific needs' },
              { title: 'Sustainability', desc: 'Committed to reducing carbon footprints' },
              { title: '24/7 Support', desc: 'Always here when you need us' },
              { title: 'Competitive Pricing', desc: 'Best value for your investment' },
>>>>>>> origin/main
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
<<<<<<< HEAD
=======

>>>>>>> origin/main

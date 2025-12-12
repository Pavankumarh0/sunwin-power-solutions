'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { FiSun, FiTool, FiSettings, FiZap, FiCheckCircle, FiGrid } from 'react-icons/fi';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
      image: '/images/Solar-EPC-Company.jpg',
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
      image: '/images/operation-maintenance.jpg',
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
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Installation and Commissioning services of Solar Power Plant range from kW to MW capacity
          </p>
        </motion.div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100"
            >
              <div className="flex flex-col">
                {/* Image Section - Centered */}
                <div className="relative w-full max-w-2xl mx-auto h-64 md:h-96 min-h-[300px] flex items-center justify-center rounded-2xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white">
                  {service.icon}
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full p-8 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
                  {service.title}
                </h3>
                {service.subtitle && (
                  <p className="text-primary font-semibold mb-4">{service.subtitle}</p>
                )}
                <p className="text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Details */}
                {service.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="mb-6">
                    <h4 className="text-lg font-bold text-secondary mb-3 underline">
                      {detail.category}
                    </h4>
                    <ul className="space-y-2 text-left max-w-2xl mx-auto">
                      {detail.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-secondary">
                          <FiCheckCircle className="text-primary flex-shrink-0 mt-1" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 bg-gradient-to-r from-secondary to-secondary-dark text-white rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Key Highlights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Capacity Range', desc: 'From kW to MW scale' },
              { title: 'Turnkey Solutions', desc: 'Projects from design to commissioning' },
              { title: 'Compliance', desc: 'With national and international standards' },
              { title: 'Expert Team', desc: 'Experienced engineering and project management team' },
              { title: 'Quality Assurance', desc: 'Assured quality, safety, and timely delivery' },
              { title: 'Long-term Support', desc: 'O&M services for sustainable operations' },
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

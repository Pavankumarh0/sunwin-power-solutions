'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Ground Mount', 'Roof Solar', 'Industrial', 'Street Lights', 'Installations'];

  const galleryItems = [
    {
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800',
      title: 'Ground Mount Solar',
      category: 'Ground Mount',
    },
    {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800',
      title: 'Industrial Roof Solar',
      category: 'Industrial',
    },
    {
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800',
      title: 'RCC Roof Solar',
      category: 'Roof Solar',
    },
    {
      image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=800',
      title: 'Solar Panel Installation',
      category: 'Installations',
    },
    {
      image: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=800',
      title: 'Solar Street Light',
      category: 'Street Lights',
    },
    {
      image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?q=80&w=800',
      title: 'Rooftop Installation',
      category: 'Roof Solar',
    },
    {
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800',
      title: 'Industrial Solar System',
      category: 'Industrial',
    },
    {
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800',
      title: 'Ground Solar Farm',
      category: 'Ground Mount',
    },
    {
      image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?q=80&w=800',
      title: 'Residential Installation',
      category: 'Installations',
    },
  ];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our completed solar installations and see the quality of our work
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer h-80"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.category}</p>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-4 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Want to see more of our work?</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
          >
            Contact Us for Portfolio
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;


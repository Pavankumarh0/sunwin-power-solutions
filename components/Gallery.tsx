'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Ground Mounted Solar', 'RoofTop Solar'];

  // Roof-Top Pics from /public/images/Roof-Top Pics/
  const roofTopImages = [
    'RT-1.jpg',
    'RT-2.jpeg',
    'RT-3.jpeg',
    'RT-4.jpg',
    'RT-5.jpeg',
    'RT-6.jpg',
    'RT-7.jpg',
    'RT-8.jpeg',
    'RT-9.jpeg',
    'RT-10.jpeg',
    'RT-11.jpeg',
    'RT-12.jpeg',
    'RT-13.jpeg',
    'RT-14.jpeg',
    'RT-15.jpeg',
    'RT-16.jpg',
  ];

  // Ground Mount Pics from /public/images/Ground Mount pic/
  const groundMountImages = [
    'GM-1.jpg',
    'GM-2.jpeg',
    'GM-3.jpeg',
    'GM-4.jpeg',
  ];

  // Create gallery items from all images
  const galleryItems = [
    // Ground Mount Pics (Ground Mounted Solar category) - First
    ...groundMountImages.map((imageName, index) => ({
      image: `/images/Ground Mount pic/${imageName}`,
      title: `Ground Mount Solar ${index + 1}`,
      category: 'Ground Mounted Solar',
    })),
    // Roof-Top Pics (Roof Top Solar category) - After Ground Mount
    ...roofTopImages.map((imageName, index) => ({
      image: `/images/Roof-Top Pics/${imageName}`,
      title: `Rooftop Solar ${index + 1}`,
      category: 'RoofTop Solar',
    })),
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
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Our <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
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
                  : 'bg-white text-secondary hover:bg-gray-100'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        {filteredItems.length > 0 ? (
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={`${item.image}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="relative overflow-hidden rounded-xl shadow-lg h-80"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <p className="text-secondary">No images found in this category.</p>
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-secondary mb-4">Want to see more of our work?</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
            >
              Contact Us for Portfolio
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;

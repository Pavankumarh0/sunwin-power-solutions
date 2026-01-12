'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const GalleryPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Ground Mount Pics from /public/images/Ground Mount pic/
  const groundMountImages = [
    'GM-1.jpg',
    'GM-2.jpeg',
    'GM-3.jpeg',
    'GM-4.jpeg',
  ];

  // Roof-Top Pics from /public/images/Roof-Top Pics/
  const roofTopImages = [
    'RT-1.jpg',
    'RT-2.jpeg',
  ];

  // Create gallery items - Ground Mount first, then Roof Top
  const allGalleryItems = [
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

  // Show only first 6 images as preview
  const galleryItems = allGalleryItems.slice(0, 6);

  return (
    <section id="gallery-preview" className="py-20 bg-gray-50" ref={ref}>
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

        {/* Gallery Grid - Limited to 6 images */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={`${item.image}-${index}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
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

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/gallery"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors shadow-lg"
            >
              View More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPreview;


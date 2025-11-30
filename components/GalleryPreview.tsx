'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const GalleryPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Show only first 6 images as preview
  const previewImages = [
    'IMG-20251126-WA0011.jpg',
    'IMG-20251126-WA0012.jpg',
    'IMG-20251126-WA0013.jpg',
    'IMG-20251126-WA0015.jpg',
    'IMG-20251126-WA0016.jpg',
    'IMG-20251126-WA0017.jpg',
  ];

  const galleryItems = previewImages.map((imageName, index) => {
    const imageNumber = imageName.replace('IMG-20251126-WA', '').replace('.jpg', '');
    return {
      image: `/images/gallery/${imageName}`,
      title: `Solar Installation ${imageNumber}`,
    };
  });

  return (
    <section id="gallery-preview" className="py-20 bg-gray-50" ref={ref}>
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
              whileHover={{ y: -10 }}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer h-80"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-4 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
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


'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [beforeOpen, setBeforeOpen] = useState(false);
  const [afterOpen, setAfterOpen] = useState(false);

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
  // Before images from /public/Before/
  const beforeImages = [
    'IMG-20260411-WA0010.jpg',
    'IMG-20260411-WA0029.jpg',
    'IMG-20260411-WA0030.jpg',
    'IMG-20260411-WA0031.jpg',
    'IMG-20260411-WA0032.jpg',
    'IMG-20260411-WA0033.jpg',
    'IMG-20260411-WA0034.jpg',
    'IMG-20260411-WA0035.jpg',
    'IMG-20260411-WA0036.jpg',
    'IMG-20260411-WA0037.jpg',
    'IMG-20260411-WA0038.jpg',
    'IMG-20260411-WA0039.jpg',
    'IMG-20260411-WA0040.jpg',
    'IMG-20260411-WA0041.jpg',
  ];

  // After images from /public/After/
  const afterImages = [
    'IMG-20260411-WA0006.jpg',
    'IMG-20260411-WA0007(1).jpg',
    'IMG-20260411-WA0008.jpg',
    'IMG-20260411-WA0009(1).jpg',
    'IMG-20260411-WA0010(1).jpg',
    'IMG-20260411-WA0011(1).jpg',
    'IMG-20260411-WA0012(1).jpg',
    'IMG-20260411-WA0013(1).jpg',
    'IMG-20260411-WA0014(1).jpg',
    'IMG-20260411-WA0015(1).jpg',
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

        {/* Before & After toggles — shown inside RoofTop Solar section */}
        {(selectedCategory === 'All' || selectedCategory === 'RoofTop Solar') && (
          <div className="mt-10 space-y-4">
            {/* Before Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <button
                onClick={() => setBeforeOpen(!beforeOpen)}
                className="w-full flex items-center justify-between px-6 py-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200"
              >
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-orange-500 inline-block" />
                  <span className="text-xl font-bold text-secondary">Before</span>
                  <span className="text-sm text-gray-500 font-medium">({beforeImages.length} photos)</span>
                </div>
                <motion.span
                  animate={{ rotate: beforeOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-primary text-2xl font-bold"
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence>
                {beforeOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                      {beforeImages.map((img, index) => (
                        <motion.div
                          key={img}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05, duration: 0.4 }}
                          className="relative overflow-hidden rounded-xl shadow-lg h-80"
                        >
                          <Image
                            src={`/Before/${img}`}
                            alt={`Before ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                            Before
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* After Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <button
                onClick={() => setAfterOpen(!afterOpen)}
                className="w-full flex items-center justify-between px-6 py-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200"
              >
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
                  <span className="text-xl font-bold text-secondary">After</span>
                  <span className="text-sm text-gray-500 font-medium">({afterImages.length} photos)</span>
                </div>
                <motion.span
                  animate={{ rotate: afterOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-primary text-2xl font-bold"
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence>
                {afterOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                      {afterImages.map((img, index) => (
                        <motion.div
                          key={img}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05, duration: 0.4 }}
                          className="relative overflow-hidden rounded-xl shadow-lg h-80"
                        >
                          <Image
                            src={`/After/${img}`}
                            alt={`After ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                            After
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
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

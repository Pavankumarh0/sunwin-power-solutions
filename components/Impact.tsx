'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { FiZap, FiSun, FiUsers, FiTrendingUp, FiAward, FiCheck } from 'react-icons/fi';

const Impact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: <FiZap className="w-8 h-8" />,
      number: 50,
      suffix: '+',
      label: 'Projects Completed Experience',
      description: 'Solar installations across Tamil Nadu',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <FiSun className="w-8 h-8" />,
      number: 2,
      suffix: 'MW+',
      label: 'Installed Capacity Experience',
      description: 'Clean energy generation',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      number: 50,
      suffix: '+',
      label: 'Happy Customers',
      description: 'Satisfied clients in Tamil Nadu',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      number: 1.5,
      suffix: 'K+',
      label: 'Tons CO₂ Reduced',
      description: 'Environmental impact annually',
      color: 'from-emerald-500 to-teal-600',
    },
  ];

  const achievements = [
    'Authorized Partner with Leading Brands',
    'Expert Team with 10+ Years Experience',
    '24/7 Customer Support & Maintenance',
    'EMI Options from reputed Banks',
  ];

  return (
    <section id="impact" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" ref={ref}>
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <div className="bg-primary/10 text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
              Our Impact
            </div>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-3 sm:mb-4 px-2">
            Making a <span className="text-primary">Difference</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto text-sm sm:text-base px-4">
            Empowering homes and businesses with clean, sustainable energy solutions across Tamil Nadu
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
            >
              <StatCard stat={stat} isInView={isInView} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <FiAward className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary">
              Why Choose Us
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="flex items-start gap-3 p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                  <FiCheck className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <p className="text-secondary font-medium text-sm sm:text-base">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center mt-8 sm:mt-10 md:mt-12"
        >
          <p className="text-secondary mb-4 sm:mb-6 text-base sm:text-lg px-4">
            Experience the power of sustainable energy with our reliable solar solutions. Start your journey towards a greener future today.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Start Your Solar Journey
              <FiZap className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// StatCard Component with Counter Animation
const StatCard = ({ stat, isInView, index }: { stat: any; isInView: boolean; index: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = stat.number / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          setCount(stat.number);
          clearInterval(timer);
        } else {
          // Handle decimal numbers properly
          if (stat.number % 1 !== 0) {
            setCount(parseFloat(current.toFixed(1)));
          } else {
            setCount(Math.floor(current));
          }
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.number]);

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      {/* Icon */}
      <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center text-white mb-3 sm:mb-4 shadow-lg`}>
        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
          {stat.icon}
        </div>
      </div>

      {/* Number with Counter Animation */}
      <div className="mb-2">
        <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary">
          {typeof count === 'number' && count % 1 !== 0 ? count.toFixed(1) : count.toLocaleString()}
        </span>
        <span className={`text-2xl sm:text-3xl md:text-4xl font-bold ml-1 ${
          stat.suffix === '+' || stat.suffix === 'MW+' || stat.suffix === 'K+' ? 'text-green-500' : 'text-primary'
        }`}>
          {stat.suffix}
        </span>
      </div>

      {/* Label */}
      <h4 className="text-base sm:text-lg font-semibold text-secondary mb-1 sm:mb-2">{stat.label}</h4>

      {/* Description */}
      <p className="text-secondary text-xs sm:text-sm">{stat.description}</p>

      {/* Progress Bar Animation */}
      <div className="mt-3 sm:mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: '100%' } : {}}
          transition={{ delay: 0.5 + index * 0.1, duration: 1.5 }}
          className={`h-full bg-gradient-to-r ${stat.color}`}
        />
      </div>
    </div>
  );
};

export default Impact;

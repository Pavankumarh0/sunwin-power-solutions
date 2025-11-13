'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FiZap, FiSun, FiUsers, FiTrendingUp, FiAward, FiCheck } from 'react-icons/fi';

const Impact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: <FiZap className="w-8 h-8" />,
      number: 500,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Solar installations across Tamil Nadu',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <FiSun className="w-8 h-8" />,
      number: 25,
      suffix: 'MW+',
      label: 'Total Capacity Installed',
      description: 'Clean energy generation',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      number: 1000,
      suffix: '+',
      label: 'Happy Customers',
      description: 'Satisfied clients nationwide',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      number: 15,
      suffix: 'K+',
      label: 'Tons CO₂ Reduced',
      description: 'Environmental impact annually',
      color: 'from-emerald-500 to-teal-600',
    },
  ];

  const achievements = [
    'ISO 9001:2015 Certified Company',
    'Authorized Partner with Leading Brands',
    'Expert Team with 10+ Years Experience',
    '24/7 Customer Support & Maintenance',
    'Government Approved Solar Installer',
    'Competitive Pricing & Flexible EMI Options',
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" ref={ref}>
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              Our Impact
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Making a <span className="text-primary">Difference</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empowering homes and businesses with clean, sustainable energy solutions across Tamil Nadu
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <FiAward className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Why Choose Us
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="flex items-start gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                  <FiCheck className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Join thousands of satisfied customers who have made the switch to solar
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl"
          >
            Start Your Solar Journey
            <FiZap className="w-5 h-5" />
          </motion.a>
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
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.number]);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      {/* Icon */}
      <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center text-white mb-4 shadow-lg`}>
        {stat.icon}
      </div>

      {/* Number with Counter Animation */}
      <div className="mb-2">
        <span className="text-4xl md:text-5xl font-bold text-gray-800">
          {count.toLocaleString()}
        </span>
        <span className="text-3xl md:text-4xl font-bold text-primary ml-1">
          {stat.suffix}
        </span>
      </div>

      {/* Label */}
      <h4 className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</h4>

      {/* Description */}
      <p className="text-gray-600 text-sm">{stat.description}</p>

      {/* Progress Bar Animation */}
      <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
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


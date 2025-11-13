'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiPhone, FiMail, FiMapPin, FiSend, FiX, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      // Save to Firestore
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        timestamp: serverTimestamp(),
      });
      
      // Send email notification to admin (non-blocking)
      try {
        await fetch('/api/send-notification', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      } catch (emailError) {
        // Don't fail the form submission if email fails
        console.warn('Email notification failed:', emailError);
      }
      
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (err) {
      setError('Failed to submit. Please try again or call us directly.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const closeResult = () => {
    setSuccess(false);
    setError('');
  };

  const contactInfo = [
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: 'Phone',
      details: ['+91 72006 04242', '+91 99527 30863'],
      type: 'phone',
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      title: 'Email',
      details: ['info@sunwinpower.com', 'sales@sunwinpower.com'],
      type: 'email',
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: 'Address',
      details: ['Plot No.19, Kadappa Road', 'Chennai - 600099, Tamil Nadu'],
      type: 'address',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to harness the power of solar energy? Contact us today for a free consultation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="Your name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                >
                  <option value="">Select a service</option>
                  <option value="Solar Panel Installation">Solar Panel Installation</option>
                  <option value="On Grid Solar Systems">On Grid Solar Systems</option>
                  <option value="Maintenance & Repair">Maintenance & Repair</option>
                  <option value="Solar Street Lights">Solar Street Lights</option>
                  <option value="Inverter Battery">Inverter Battery</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>


              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
                <FiSend />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <div key={idx}>
                      {info.type === 'phone' ? (
                        <a 
                          href={`tel:${detail.replace(/\s/g, '')}`}
                          className="text-gray-600 hover:text-primary transition-colors hover:underline block"
                        >
                          {detail}
                        </a>
                      ) : info.type === 'email' ? (
                        <a 
                          href={`mailto:${detail}`}
                          className="text-gray-600 hover:text-primary transition-colors hover:underline block"
                        >
                          {detail}
                        </a>
                      ) : (
                        <p className="text-gray-600">
                          {detail}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Map or Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="bg-gradient-to-br from-primary to-primary-dark text-white p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
              <p className="mb-2">Monday - Saturday: 8:00 AM - 7:00 PM</p>
              <p className="mb-4">Sunday: Closed</p>
              <p className="text-sm opacity-90 mt-6">
                GST No: 33CGWPN8077Q1Z3
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Result Modal Container */}
      <AnimatePresence>
        {(success || error) && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeResult}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            >
              {/* Result Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
                className={`relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 ${
                  success ? 'border-2 border-green-500' : 'border-2 border-red-500'
                }`}
              >
                {/* Close Button - Top Right */}
                <button
                  onClick={closeResult}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700"
                  aria-label="Close"
                >
                  <FiX className="w-5 h-5" />
                </button>

                {/* Content */}
                <div className="text-center pt-4">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      success 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {success ? (
                      <FiCheckCircle className="w-10 h-10" />
                    ) : (
                      <FiAlertCircle className="w-10 h-10" />
                    )}
                  </motion.div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold mb-2 ${
                    success ? 'text-green-700' : 'text-red-700'
                  }`}>
                    {success ? 'Message Sent Successfully!' : 'Submission Failed'}
                  </h3>

                  {/* Message */}
                  <p className={`text-gray-700 mb-6 ${
                    success ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {success 
                      ? "Thank you for contacting us! We'll get back to you soon."
                      : error || "Something went wrong. Please try again or call us directly."
                    }
                  </p>

                  {/* Action Button */}
                  <motion.button
                    onClick={closeResult}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                      success
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'bg-red-600 hover:bg-red-700 text-white'
                    }`}
                  >
                    {success ? 'Great!' : 'Try Again'}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;


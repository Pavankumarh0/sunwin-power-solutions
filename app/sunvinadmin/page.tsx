'use client';

import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiUser, FiMessageSquare, FiTrash2, FiRefreshCw, FiLogOut, FiChevronDown, FiChevronUp, FiCalendar, FiPackage } from 'react-icons/fi';

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
  timestamp: any;
}

export default function SunvinAdminPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  // Simple password authentication (change this password!)
  const ADMIN_PASSWORD = 'Sunvin@2025';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
      localStorage.setItem('sunvin_admin_auth', 'true');
    } else {
      setError('Incorrect password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    localStorage.removeItem('sunvin_admin_auth');
  };

  useEffect(() => {
    // Check if already authenticated
    const isAuth = localStorage.getItem('sunvin_admin_auth') === 'true';
    setIsAuthenticated(isAuth);
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchContacts();
    }
  }, [isAuthenticated]);

  // Auto logout when exiting admin dashboard
  useEffect(() => {
    if (!isAuthenticated) return;

    // Function to perform logout (directly clears auth)
    const performLogout = () => {
      setIsAuthenticated(false);
      setPassword('');
      localStorage.removeItem('sunvin_admin_auth');
    };

    // Logout when page becomes hidden (tab switch, minimize, etc.)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        performLogout();
      }
    };

    // Logout when user closes/navigates away from the page
    const handleBeforeUnload = () => {
      performLogout();
    };

    // Add event listeners
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup function - logout on component unmount
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      // Logout when component unmounts (navigation away)
      performLogout();
    };
  }, [isAuthenticated]);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'contacts'), orderBy('timestamp', 'desc'));
      const querySnapshot = await getDocs(q);
      const contactsData: Contact[] = [];
      querySnapshot.forEach((doc) => {
        contactsData.push({ id: doc.id, ...doc.data() } as Contact);
      });
      setContacts(contactsData);
      setError('');
    } catch (error) {
      console.error('Error fetching contacts:', error);
      setError('Failed to load messages. Make sure Firestore rules allow reading.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this message?')) {
      try {
        await deleteDoc(doc(db, 'contacts', id));
        setContacts(contacts.filter((c) => c.id !== id));
        if (expandedRow === id) {
          setExpandedRow(null);
        }
      } catch (error) {
        console.error('Error deleting contact:', error);
        alert('Failed to delete message');
      }
    }
  };

  const toggleRow = (id: string) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'N/A';
    try {
      const date = timestamp.toDate();
      return date.toLocaleString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return 'N/A';
    }
  };

  const filteredContacts = contacts.filter((contact) => {
    if (filter === 'all') return true;
    return contact.service === filter;
  });

  const services = Array.from(new Set(contacts.map((c) => c.service).filter(Boolean)));

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-secondary to-secondary-dark flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Sunvin Admin Panel</h1>
          <p className="text-gray-600 mb-6 text-center">Sunwin Power Solutions</p>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="Enter admin password"
                required
              />
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Login
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-6 text-center">
            Contact administrator if you don't have access
          </p>
        </motion.div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Sunvin Admin Dashboard</h1>
              <p className="text-xs sm:text-sm text-gray-600">Contact Form Submissions</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <button
                onClick={fetchContacts}
                className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex-1 sm:flex-none text-sm"
              >
                <FiRefreshCw size={16} /> 
                <span className="hidden sm:inline">Refresh</span>
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex-1 sm:flex-none text-sm"
              >
                <FiLogOut size={16} /> 
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Messages</p>
                <p className="text-3xl font-bold text-gray-800">{contacts.length}</p>
              </div>
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                <FiMail className="text-primary text-xl" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Today</p>
                <p className="text-3xl font-bold text-gray-800">
                  {contacts.filter((c) => {
                    if (!c.timestamp) return false;
                    const today = new Date();
                    const msgDate = c.timestamp.toDate();
                    return msgDate.toDateString() === today.toDateString();
                  }).length}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-500 bg-opacity-10 rounded-full flex items-center justify-center">
                <FiMessageSquare className="text-green-500 text-xl" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Unique Services</p>
                <p className="text-3xl font-bold text-gray-800">{services.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-500 bg-opacity-10 rounded-full flex items-center justify-center">
                <FiUser className="text-blue-500 text-xl" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Filter */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 sm:px-4 py-2 rounded-lg font-semibold transition-colors text-xs sm:text-sm ${
                filter === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All ({contacts.length})
            </button>
            {services.map((service) => (
              <button
                key={service}
                onClick={() => setFilter(service || '')}
                className={`px-3 sm:px-4 py-2 rounded-lg font-semibold transition-colors text-xs sm:text-sm ${
                  filter === service
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="hidden sm:inline">{service || 'Unknown'}</span>
                <span className="sm:hidden">{service ? service.split(' ')[0] : 'Unknown'}</span> ({contacts.filter((c) => c.service === service).length})
              </button>
            ))}
          </div>
        </div>

        {/* Messages Table/Cards */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {loading ? (
            <div className="p-12 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading messages...</p>
            </div>
          ) : filteredContacts.length === 0 ? (
            <div className="p-12 text-center">
              <FiMail className="text-6xl text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600">No messages found</p>
            </div>
          ) : (
            <>
              {/* Desktop Table View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Name</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Contact</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Service</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Preview</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
                    </tr>
                  </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredContacts.map((contact, index) => (
                    <React.Fragment key={contact.id}>
                      <motion.tr
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`hover:bg-gray-50 cursor-pointer ${expandedRow === contact.id ? 'bg-blue-50' : ''}`}
                        onClick={() => toggleRow(contact.id)}
                      >
                        <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <FiCalendar className="text-gray-400" />
                            {formatDate(contact.timestamp)}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <FiUser className="text-gray-400" />
                            <span className="text-sm font-medium text-gray-800">{contact.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-600">
                            <div className="flex items-center gap-2 mb-1">
                              <FiMail className="text-gray-400" />
                              <a 
                                href={`mailto:${contact.email}`} 
                                className="hover:text-primary"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {contact.email}
                              </a>
                            </div>
                            <div className="flex items-center gap-2">
                              <FiPhone className="text-gray-400" />
                              <a 
                                href={`tel:${contact.phone}`} 
                                className="hover:text-primary"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {contact.phone}
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                            <FiPackage size={12} />
                            {contact.service || 'Not specified'}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <FiMessageSquare className="text-gray-400" />
                            <p className="text-sm text-gray-600 max-w-md line-clamp-2">{contact.message}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                            <button
                              onClick={() => handleDelete(contact.id)}
                              className="text-red-500 hover:text-red-700 transition-colors p-2 hover:bg-red-50 rounded"
                              title="Delete message"
                            >
                              <FiTrash2 size={18} />
                            </button>
                            {expandedRow === contact.id ? (
                              <FiChevronUp className="text-gray-400" size={20} />
                            ) : (
                              <FiChevronDown className="text-gray-400" size={20} />
                            )}
                          </div>
                        </td>
                      </motion.tr>
                      
                      {/* Expanded Row */}
                      <AnimatePresence>
                        {expandedRow === contact.id && (
                          <motion.tr
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <td colSpan={6} className="px-6 py-4 bg-blue-50">
                              <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {/* Full Contact Details */}
                                  <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                      <FiUser className="text-primary" />
                                      Contact Information
                                    </h3>
                                    <div className="space-y-2 text-sm">
                                      <div>
                                        <span className="text-gray-600 font-medium">Name:</span>
                                        <p className="text-gray-800 font-semibold">{contact.name}</p>
                                      </div>
                                      <div>
                                        <span className="text-gray-600 font-medium">Email:</span>
                                        <a href={`mailto:${contact.email}`} className="text-primary hover:underline block">
                                          {contact.email}
                                        </a>
                                      </div>
                                      <div>
                                        <span className="text-gray-600 font-medium">Phone:</span>
                                        <a href={`tel:${contact.phone}`} className="text-primary hover:underline block">
                                          {contact.phone}
                                        </a>
                                      </div>
                                      <div>
                                        <span className="text-gray-600 font-medium">Service:</span>
                                        <p className="text-gray-800">{contact.service || 'Not specified'}</p>
                                      </div>
                                      <div>
                                        <span className="text-gray-600 font-medium">Date:</span>
                                        <p className="text-gray-800">{formatDate(contact.timestamp)}</p>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Full Message */}
                                  <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                      <FiMessageSquare className="text-primary" />
                                      Full Message
                                    </h3>
                                    <div className="text-sm text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200 whitespace-pre-wrap">
                                      {contact.message}
                                    </div>
                                  </div>
                                </div>

                                {/* Quick Actions */}
                                <div className="flex gap-3 justify-end">
                                  <a
                                    href={`mailto:${contact.email}?subject=Re: Your inquiry about ${contact.service || 'our services'}&body=Dear ${contact.name},%0D%0A%0D%0AThank you for your inquiry.%0D%0A%0D%0A`}
                                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                                  >
                                    <FiMail />
                                    Reply via Email
                                  </a>
                                  <a
                                    href={`tel:${contact.phone}`}
                                    className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
                                  >
                                    <FiPhone />
                                    Call Now
                                  </a>
                                </div>
                              </div>
                            </td>
                          </motion.tr>
                        )}
                      </AnimatePresence>
                    </React.Fragment>
                  ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="md:hidden divide-y divide-gray-200">
                {filteredContacts.map((contact, index) => (
                  <motion.div
                    key={contact.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`p-4 ${expandedRow === contact.id ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                  >
                    {/* Card Header */}
                    <div 
                      className="space-y-3 cursor-pointer"
                      onClick={() => toggleRow(contact.id)}
                    >
                      {/* Name and Date */}
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                          <FiUser className="text-gray-400 flex-shrink-0" />
                          <span className="text-sm font-semibold text-gray-800">{contact.name}</span>
                        </div>
                        <div className="text-xs text-gray-500 flex items-center gap-1">
                          <FiCalendar className="flex-shrink-0" />
                          {formatDate(contact.timestamp).split(',')[0]}
                        </div>
                      </div>

                      {/* Service Badge */}
                      <div>
                        <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                          <FiPackage size={12} />
                          {contact.service || 'Not specified'}
                        </span>
                      </div>

                      {/* Contact Info */}
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center gap-2">
                          <FiMail className="text-gray-400 flex-shrink-0" size={14} />
                          <a 
                            href={`mailto:${contact.email}`} 
                            className="text-primary hover:underline truncate"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {contact.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiPhone className="text-gray-400 flex-shrink-0" size={14} />
                          <a 
                            href={`tel:${contact.phone}`} 
                            className="text-primary hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {contact.phone}
                          </a>
                        </div>
                      </div>

                      {/* Message Preview */}
                      <div className="flex items-start gap-2 text-sm text-gray-600">
                        <FiMessageSquare className="text-gray-400 flex-shrink-0 mt-0.5" size={14} />
                        <p className="line-clamp-2 flex-1">{contact.message}</p>
                      </div>

                      {/* Expand Indicator */}
                      <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                        <span className="text-xs text-gray-500">
                          {expandedRow === contact.id ? 'Tap to collapse' : 'Tap to view full details'}
                        </span>
                        {expandedRow === contact.id ? (
                          <FiChevronUp className="text-primary" size={20} />
                        ) : (
                          <FiChevronDown className="text-gray-400" size={20} />
                        )}
                      </div>
                    </div>

                    {/* Expanded Details */}
                    <AnimatePresence>
                      {expandedRow === contact.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-blue-200 space-y-4"
                        >
                          {/* Full Message */}
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                              <FiMessageSquare className="text-primary" />
                              Full Message
                            </h4>
                            <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded border border-gray-200 whitespace-pre-wrap">
                              {contact.message}
                            </div>
                          </div>

                          {/* Full Contact Details */}
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                              <FiUser className="text-primary" />
                              Contact Information
                            </h4>
                            <div className="space-y-2 text-sm">
                              <div>
                                <span className="text-gray-600 font-medium">Name:</span>
                                <p className="text-gray-800 font-semibold">{contact.name}</p>
                              </div>
                              <div>
                                <span className="text-gray-600 font-medium">Email:</span>
                                <a href={`mailto:${contact.email}`} className="text-primary hover:underline block break-all">
                                  {contact.email}
                                </a>
                              </div>
                              <div>
                                <span className="text-gray-600 font-medium">Phone:</span>
                                <a href={`tel:${contact.phone}`} className="text-primary hover:underline block">
                                  {contact.phone}
                                </a>
                              </div>
                              <div>
                                <span className="text-gray-600 font-medium">Service:</span>
                                <p className="text-gray-800">{contact.service || 'Not specified'}</p>
                              </div>
                              <div>
                                <span className="text-gray-600 font-medium">Date:</span>
                                <p className="text-gray-800">{formatDate(contact.timestamp)}</p>
                              </div>
                            </div>
                          </div>

                          {/* Quick Actions */}
                          <div className="grid grid-cols-2 gap-2">
                            <a
                              href={`mailto:${contact.email}?subject=Re: Your inquiry about ${contact.service || 'our services'}&body=Dear ${contact.name},%0D%0A%0D%0AThank you for your inquiry.%0D%0A%0D%0A`}
                              className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                            >
                              <FiMail size={16} />
                              Reply
                            </a>
                            <a
                              href={`tel:${contact.phone}`}
                              className="flex items-center justify-center gap-2 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
                            >
                              <FiPhone size={16} />
                              Call
                            </a>
                          </div>

                          {/* Delete Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(contact.id);
                            }}
                            className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm"
                          >
                            <FiTrash2 size={16} />
                            Delete Message
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>

        {error && (
          <div className="mt-6 p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}


'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, User, Calendar, Trash2 } from 'lucide-react';
import AdminLayout from '@/components/AdminLayout';
import toast from 'react-hot-toast';

interface ContactInquiry {
  id: string;
  name: string;
  phone: string;
  service: string | null;
  message: string;
  createdAt: string;
}

export default function ContactInquiriesPage() {
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const response = await fetch('/api/contact-inquiries');
      if (response.ok) {
        const data = await response.json();
        setInquiries(data);
      } else {
        toast.error('Failed to load contact inquiries');
      }
    } catch (error) {
      console.error('Error fetching inquiries:', error);
      toast.error('Failed to load contact inquiries');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteInquiry = async (id: string) => {
    if (!confirm('Are you sure you want to delete this inquiry?')) return;

    try {
      const response = await fetch(`/api/contact-inquiries/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        toast.success('Inquiry deleted successfully');
        fetchInquiries(); // Refresh the list
      } else {
        toast.error('Failed to delete inquiry');
      }
    } catch (error) {
      console.error('Error deleting inquiry:', error);
      toast.error('Failed to delete inquiry');
    }
  };

  const handleCall = (phone: string) => {
    window.open(`tel:${phone}`, '_self');
  };

  const handleWhatsApp = (phone: string, name: string) => {
    const message = `Hi ${name}! Thank you for contacting Abdulzzz Services Hub. How can we help you today?`;
    const whatsappUrl = `https://wa.me/${phone.replace(/\s/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading contact inquiries...</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contact Inquiries</h1>
          <p className="text-gray-600">View and manage customer contact form submissions</p>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Inquiries</p>
              <p className="text-2xl font-bold text-gray-900">{inquiries.length}</p>
            </div>
          </div>
        </div>

        {/* Inquiries List */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Inquiries</h2>
          </div>
          
          {inquiries.length === 0 ? (
            <div className="p-8 text-center">
              <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No contact inquiries yet</p>
              <p className="text-sm text-gray-500 mt-2">Customer messages will appear here</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {inquiries.map((inquiry) => (
                <motion.div
                  key={inquiry.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{inquiry.name}</h3>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {inquiry.service || 'General Inquiry'}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-1" />
                          {inquiry.phone}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(inquiry.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{inquiry.message}</p>
                      
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleCall(inquiry.phone)}
                          className="flex items-center px-3 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 transition-colors"
                        >
                          <Phone className="w-4 h-4 mr-1" />
                          Call
                        </button>
                        <button
                          onClick={() => handleWhatsApp(inquiry.phone, inquiry.name)}
                          className="flex items-center px-3 py-1 bg-green-500 text-white rounded-md text-sm hover:bg-green-600 transition-colors"
                        >
                          <MessageCircle className="w-4 h-4 mr-1" />
                          WhatsApp
                        </button>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => handleDeleteInquiry(inquiry.id)}
                      className="ml-4 p-2 text-gray-400 hover:text-red-600 transition-colors"
                      title="Delete inquiry"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

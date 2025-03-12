'use client';

import React, { useState } from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    window.location.href = `mailto:ssa@sheridancollege.ca?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-[rgba(8,2,46,0.8)] p-8 rounded-lg h-fit">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="mb-4">
                  <a href="mailto:ssa@sheridancollege.ca" className="text-blue-400 hover:text-blue-300">
                    ssa@sheridancollege.ca
                  </a>
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Social Media</h3>
                <div className="space-y-2">
                  <a
                    href="https://www.instagram.com/ssa_sheridan?igsh=MXBvNHRramNvcmN2dQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
                  >
                    <FaInstagram className="text-2xl" />
                    <span>@ssa_sheridan</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/sikh-students-association-sheridan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
                  >
                    <FaLinkedin className="text-2xl" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://chat.whatsapp.com/KgIUbxDjkNz5uRg4c0UxgD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
                  >
                    <FaWhatsapp className="text-2xl" />
                    <span>WhatsApp Group</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p>Sheridan College</p>
                <p>Davis Campus</p>
                <p>7899 McLaughlin Road</p>
                <p>Brampton, ON L6Y 5H9</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[rgba(8,2,46,0.8)] p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[rgba(8,2,46,0.9)] border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[rgba(8,2,46,0.9)] border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[rgba(8,2,46,0.9)] border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-[rgba(8,2,46,0.9)] border border-gray-600 focus:border-blue-500 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Subtle gradient transition */}
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[rgba(8,2,46,0.95)] pointer-events-none"></div>
    </div>
  );
} 
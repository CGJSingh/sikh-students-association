'use client';

import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[rgba(8,2,46,0.98)] to-[rgba(8,2,46,0.95)] text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-700/5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            <div className="relative">
              <h3 className="text-xl font-bold mb-4 text-blue-200">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">Home</Link></li>
                <li><Link href="/about" className="hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">About</Link></li>
                <li><Link href="/events" className="hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">Events</Link></li>
                <li><Link href="/get-involved" className="hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">Get Involved</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            <div className="relative">
              <h3 className="text-xl font-bold mb-4 text-blue-200">About SSA</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-blue-300 transition-colors duration-200">Sheridan College</li>
                <li className="hover:text-blue-300 transition-colors duration-200">Student Association</li>
                <li className="hover:text-blue-300 transition-colors duration-200">Promoting Sikh Values</li>
                <li className="hover:text-blue-300 transition-colors duration-200">Supporting Students</li>
              </ul>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            <div className="relative">
              <h3 className="text-xl font-bold mb-4 text-blue-200">Connect With Us</h3>
              <div className="space-y-4">
                <a
                  href="mailto:ssa@sheridancollege.ca"
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-300 transition-all duration-200 group/link"
                >
                  <FaEnvelope className="text-xl text-blue-400 group-hover/link:scale-110 transition-transform duration-200" />
                  <span className="group-hover/link:translate-x-1 transform transition-transform duration-200">ssa@sheridancollege.ca</span>
                </a>
                <a
                  href="https://www.instagram.com/ssa_sheridan?igsh=MXBvNHRramNvcmN2dQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-300 transition-all duration-200 group/link"
                >
                  <FaInstagram className="text-xl text-blue-400 group-hover/link:scale-110 transition-transform duration-200" />
                  <span className="group-hover/link:translate-x-1 transform transition-transform duration-200">@ssa_sheridan</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/sikh-students-association-sheridan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-300 transition-all duration-200 group/link"
                >
                  <FaLinkedin className="text-xl text-blue-400 group-hover/link:scale-110 transition-transform duration-200" />
                  <span className="group-hover/link:translate-x-1 transform transition-transform duration-200">LinkedIn</span>
                </a>
                <a
                  href="https://chat.whatsapp.com/KgIUbxDjkNz5uRg4c0UxgD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-300 transition-all duration-200 group/link"
                >
                  <FaWhatsapp className="text-xl text-blue-400 group-hover/link:scale-110 transition-transform duration-200" />
                  <span className="group-hover/link:translate-x-1 transform transition-transform duration-200">Join WhatsApp Group</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative mt-12 pt-8 border-t border-blue-900/50">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent"></div>
          <p className="text-center text-gray-400 relative">&copy; {new Date().getFullYear()} Sikh Students Association - Sheridan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <div className="relative min-h-[500px] sm:h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-primary-dark">
          <Image
            src="/images/Banner2.png"
            alt="SSA Banner"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
            quality={100}
            className="opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/70 to-primary-dark/90 flex items-center justify-center py-8">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Sikh Students Association
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 drop-shadow-lg">
              Promoting Sikhi and Supporting Students at Sheridan College
            </p>
            <Link
              href="/get-involved"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-r from-primary-dark via-blue-900/30 to-primary-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center transform transition-transform hover:scale-105 duration-300">
              <h3 className="text-3xl sm:text-4xl font-bold mb-2 text-blue-400">Humility</h3>
              <div className="w-16 h-1 bg-blue-500 mx-auto mb-4 rounded-full"></div>
              <p className="text-gray-300">Walking with grace and modesty</p>
            </div>
            <div className="text-center transform transition-transform hover:scale-105 duration-300">
              <h3 className="text-3xl sm:text-4xl font-bold mb-2 text-blue-400">Service</h3>
              <div className="w-16 h-1 bg-blue-500 mx-auto mb-4 rounded-full"></div>
              <p className="text-gray-300">Dedicating ourselves to others</p>
            </div>
            <div className="text-center transform transition-transform hover:scale-105 duration-300">
              <h3 className="text-3xl sm:text-4xl font-bold mb-2 text-blue-400">Inclusivity</h3>
              <div className="w-16 h-1 bg-blue-500 mx-auto mb-4 rounded-full"></div>
              <p className="text-gray-300">Welcoming all with open arms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-primary-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-lg mb-8">
            The Sikh Students Association at Sheridan College is dedicated to promoting awareness of Sikhi,
            fostering a sense of community among students, and providing support for academic and personal growth.
            We organize events, workshops, and social gatherings that celebrate Sikh culture and values while
            creating an inclusive environment for all students.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-primary-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-primary-dark/50 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Events</h3>
              <p className="mb-4">
                Join us for cultural celebrations, educational workshops, and social gatherings throughout the year.
              </p>
              <Link href="/events" className="text-blue-400 hover:text-blue-300">
                View Events →
              </Link>
            </div>
            <div className="text-center p-6 bg-primary-dark/50 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Community</h3>
              <p className="mb-4">
                Connect with fellow students, make new friends, and be part of a supportive community.
              </p>
              <Link href="/about" className="text-blue-400 hover:text-blue-300">
                Learn More →
              </Link>
            </div>
            <div className="text-center p-6 bg-primary-dark/50 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Get Involved</h3>
              <p className="mb-4">
                Discover opportunities to volunteer, lead, and make a difference in our community.
              </p>
              <Link href="/get-involved" className="text-blue-400 hover:text-blue-300">
                Join Us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Event {
  title: string;
  date: string;
  location: string;
  description: string;
  image?: string;
}

interface EventCardProps {
  event: Event;
  isUpcoming?: boolean;
}

interface EventModalProps {
  event: Event;
  onClose: () => void;
}

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const upcomingEvents = [
    {
      title: "Vaisakhi - Khalsa Sajna Divas",
      date: "April 2, 2025",
      location: "Sheridan College",
      description: "Kirtan by Sheridan Students and Inspire students by the history and will let them know who the Khalsa is.",
      image: "/images/Events/Vaisakhi - Khalsa Sajna Divas.jpg",
    },
  ];

  const pastEvents = [
    {
      title: "Pathways To Success",
      date: "February 5, 2025",
      location: "Sheridan College",
      description: "Educated Students to build Resumes, Cover Letters and encouraged to get into their field jobs",
      image: "/images/Events/Pathways To Success.jpg",
    },
    {
      title: "Shaheedi Smagam",
      date: "November 27, 2024",
      location: "Sheridan College",
      description: "Kirtan Smagam and Langar in remembrence of Shaheedi of Chaar Sahibzadey",
      image: "/images/Events/Shaheedi Smagam.jpg",
    },
    {
      title: "EmpowerHer",
      date: "October 30, 2024",
      location: "Sheridan College",
      description: "To enhance the leadership in girls, to empower them",
      image: "/images/Events/EmpowerHer.jpg",
    },
    {
      title: "Miri Piri",
      date: "July 24, 2024",
      location: "Sheridan College",
      description: "On the pious occasion of Miri Piri, did kirtan, and a presentation about the history",
      image: "/images/Events/Miri Piri.jpg",
    },
    {
      title: "Chhabeel On Campus",
      date: "June 5, 2024",
      location: "Sheridan College",
      description: "Served Chhabeel(Cold Flavoured drink) in remebrence of Shahhedi Of Guru Arjan Dev Ji.",
      image: "/images/Events/Chhabeel On Campus.jpg",
    },
    {
      title: "Hola Mohalla",
      date: "March 22, 2024",
      location: "Sheridan College",
      description: "Celeberated Hola Mohalla by doing kirtan, katha and Dadhi Vaaran",
      image: "/images/Events/Holla Mohalla.jpg",
    },
    {
      title: "Student Rights and Responsibilities Event",
      date: "January 30, 2024",
      location: "Sheridan College",
      description: "Educated students about their rights and responsibilities",
      image: "/images/Events/Student Rights.jpg",
    },
    {
      title: "Guru Nanak Dev Ji's Gurupurab",
      date: "November 30, 2023",
      location: "Sheridan College",
      description: "Celeberated the Gurupurab of Sri Guru Nanak Dev Ji by doing Kirtan, Katha and presentation on History.",
      image: "/images/Events/Guru Nanak Dev Ji's Gurupurab.png",
    },
    {
      title: "International Students Legal Rights Workshop",
      date: "2023",
      location: "Sheridan College",
      description: "Educated International about their legal rights and duties.",
    },
  ];

  const EventCard = ({ event, isUpcoming = false }: EventCardProps) => (
    <div 
      onClick={() => setSelectedEvent(event)}
      className="bg-[rgba(8,2,46,0.8)] p-6 rounded-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer border border-transparent hover:border-blue-500/30 group"
    >
      <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-blue-900/20 group-hover:shadow-lg">
        {event.image ? (
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover transform transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={isUpcoming || false}
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-blue-400/50 text-lg">{isUpcoming ? 'Upcoming Event' : 'Event Photo'}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,2,46,0.8)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{event.title}</h3>
      <p className="text-blue-400 mb-2">{event.date}</p>
      <p className="text-gray-300 mb-2">{event.location}</p>
      <p className="text-gray-100">{event.description}</p>
      <div className="mt-4 flex justify-end">
        <span className="text-blue-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Click to learn more →
        </span>
      </div>
    </div>
  );

  // Modal for detailed event information
  const EventModal = ({ event, onClose }: EventModalProps) => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    if (!event) return null;

    if (isFullScreen && event.image) {
      return (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" onClick={() => setIsFullScreen(false)}>
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={event.image}
              alt={event.title}
              className="max-h-[90vh] w-auto object-contain"
              width={1200}
              height={800}
              priority
              unoptimized
            />
            <button
              onClick={() => setIsFullScreen(false)}
              className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              Close Full View
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={onClose}>
        <div 
          className="bg-[rgba(8,2,46,0.95)] max-w-4xl w-full rounded-lg p-6 max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
            {event.image ? (
              <>
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                  unoptimized
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsFullScreen(true);
                  }}
                  className="absolute bottom-4 right-4 bg-blue-600/80 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded-lg transition-colors"
                >
                  View Full Image
                </button>
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-blue-900/20">
                <span className="text-blue-400/50 text-lg">Event Photo</span>
              </div>
            )}
          </div>
          
          <h2 className="text-3xl font-bold mb-4">{event.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-blue-400 text-lg mb-2">Date & Time</p>
              <p className="text-gray-100">{event.date}</p>
            </div>
            <div>
              <p className="text-blue-400 text-lg mb-2">Location</p>
              <p className="text-gray-100">{event.location}</p>
            </div>
          </div>
          
          <div className="mb-6">
            <p className="text-blue-400 text-lg mb-2">Description</p>
            <p className="text-gray-100">{event.description}</p>
          </div>

          {/* Placeholder for additional details - to be added later */}
          <div className="space-y-4">
            <div className="border-t border-blue-900/30 pt-4">
              <h3 className="text-xl font-bold mb-2">Event Details</h3>
              <p className="text-gray-300">Additional information will be available soon.</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Events</h1>

        {/* Introduction Section */}
        <section className="mb-16">
          <div className="bg-[rgba(8,2,46,0.8)] p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Celebrating Our Culture & Community</h2>
            <div className="space-y-4 text-gray-100">
              <p>
                At Sikh Students Association (SSA), we organize a diverse range of events throughout the year that reflect our commitment to Sikh values, student support, and community engagement. Our events are designed to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Celebrate important dates in Sikh history and culture</li>
                <li>Provide educational opportunities for all students</li>
                <li>Create platforms for community building and networking</li>
                <li>Support student success through workshops and seminars</li>
                <li>Promote understanding and awareness of Sikhi</li>
              </ul>
              <p>
                From religious celebrations like Vaisakhi and Gurpurabs to educational workshops and career development sessions, our events cater to both spiritual growth and practical needs of students.
              </p>
              <p className="text-blue-400">
                All our events are open to everyone, regardless of their background or beliefs. We welcome you to join us and experience the warmth of our community!
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} event={event} isUpcoming={true} />
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </section>

        {/* Get Involved */}
        <section className="relative pb-32 pt-16">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(8,2,46,0.3)] to-[rgba(8,2,46,1)]"></div>
          <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
            <div className="bg-[rgba(8,2,46,0.6)] backdrop-blur-sm p-8 rounded-lg shadow-lg border border-blue-900/30">
              <h2 className="text-3xl font-bold mb-4">Want to Get Involved?</h2>
              <p className="text-lg mb-8">
                We're always looking for volunteers to help organize and run our events.
                Join our team and be part of creating meaningful experiences for our community!
              </p>
              <a
                href="mailto:sikhstudentsassociation.sheridan@gmail.com"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Event Modal */}
        {selectedEvent && (
          <EventModal 
            event={selectedEvent} 
            onClose={() => setSelectedEvent(null)} 
          />
        )}
      </div>
    </div>
  );
} 
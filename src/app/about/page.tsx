import Image from 'next/image';
import React from 'react';

export default function About() {
  const teamMembers = [
    {
      name: "Chan Gaganjeet Singh",
      role: "Executive",
      imageUrl: "/images/executives/Chan Gaganjeet Singh.jpg",
    },
    {
      name: "Haquikat Singh",
      role: "Treasurer",
      imageUrl: "/images/executives/Haquikat SIngh.jpg",
    },
    {
      name: "Arshdeep Kaur",
      role: "Executive",
      imageUrl: "/images/executives/Arshdeep Kaur.png",
    },
    {
      name: "Mehtab Singh",
      role: "Executive",
      imageUrl: "/images/executives/Mehtab Singh.jpg",
    },
    {
      name: "Sukhjinder Singh",
      role: "Executive",
      imageUrl: "/images/executives/Sukhjinder Singh.jpg",
    },
    {
      name: "Khushbu",
      role: "Executive",
      imageUrl: "/images/executives/Khushbu.jpg",
    }
  ];

  return (
    <div className="pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Image
              src="/images/round-logo.png"
              alt="SSA Logo"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Who We Are</h2>
            <div className="space-y-6 text-lg">
              <p className="leading-relaxed">
                The Sikh Students Association at Sheridan College is a vibrant community of students dedicated
                to promoting awareness of Sikhi while fostering an inclusive environment for all students,
                regardless of their religion, caste, or race. We advocate for all Sheridan students, ensuring
                that everyone feels supported and valued.
              </p>
              <p className="leading-relaxed">
                Founded with the vision of creating a supportive space for Sikh students and those interested
                in learning about Sikhi, we have grown into a dynamic organization that serves the entire
                Sheridan community.
              </p>
              <p className="leading-relaxed">
                Our association is run by students, for students, with the support of faculty advisors and
                community leaders. We organize various events throughout the academic year, from cultural
                celebrations to educational workshops, creating opportunities for learning, growth, and
                connection for everyone.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[rgba(8,2,46,0.8)] rounded-lg">
              <h3 className="text-xl font-bold mb-4">Service (Seva)</h3>
              <p>
                We believe in the importance of selfless service and giving back to our community through
                various initiatives and volunteer opportunities.
              </p>
            </div>
            <div className="p-6 bg-[rgba(8,2,46,0.8)] rounded-lg">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <p>
                We are committed to creating awareness about Sikhi and providing educational resources
                to help students learn and grow.
              </p>
            </div>
            <div className="p-6 bg-[rgba(8,2,46,0.8)] rounded-lg">
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <p>
                We foster a welcoming and inclusive environment where students can connect, support
                each other, and build lasting friendships.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Impact</h2>
          <div className="text-lg text-center max-w-3xl mx-auto space-y-6">
            <p className="leading-relaxed">
              Since our establishment, we have organized numerous successful events, workshops, and
              initiatives that have positively impacted the Sheridan community. From Shaheedi Samagam
              celebrations to Weekly Rehras Sahib, we continue to create meaningful experiences
              that promote understanding and unity.
            </p>
            <p className="leading-relaxed">
              We invite you to join us in our mission to create a more inclusive and understanding
              campus community. Whether you're a Sikh student looking for connection, someone
              interested in learning more about Sikhi, or even if you seek help, there's a place
              for you in our association.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Constitution</h2>
          <div className="bg-[rgba(8,2,46,0.8)] p-8 rounded-lg max-w-3xl mx-auto">
            <p className="text-lg text-center mb-6">
              Our constitution outlines our organization's structure, mission, values, and governance principles. 
              It serves as a guide for our operations and ensures we maintain our commitment to serving the student community.
            </p>
            <div className="text-center">
              <a
                href="/images/CONSTITUTION - SIKH STUDENTS ASSOCIATION, SHERIDAN COLLEGE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Read Our Constitution
              </a>
            </div>
          </div>
        </div>

        <div className="pb-16 bg-gradient-to-b from-transparent to-[rgba(8,2,46,0.8)]">
          <h2 className="text-2xl font-bold mb-2 text-center">Our Team</h2>
          <p className="text-center text-lg mb-8 text-gray-300">Meet our dedicated executive team</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-[rgba(8,2,46,0.95)] rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="aspect-w-4 aspect-h-5 w-full h-[300px] relative">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 3}
                    quality={100}
                    unoptimized
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-xl mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
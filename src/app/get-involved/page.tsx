export default function GetInvolved() {
  const opportunities = [
    {
      title: "Join as a Member",
      description: "Become an official member of SSA and help us advocate for all students while promoting Sikh values and culture.",
      benefits: [
        "Access to all SSA events",
        "Student advocacy support",
        "Leadership development",
        "Community engagement",
      ],
    },
    {
      title: "Volunteer",
      description: "Help organize and run our events while making a positive impact in the community.",
      benefits: [
        "Earn CCR points",
        "Meet new people",
        "Serve the community",
        "Develop new skills",
      ],
    },
    {
      title: "Leadership Roles",
      description: "Take on a leadership position and help shape the future of SSA.",
      benefits: [
        "Lead initiatives",
        "Develop management skills",
        "Create meaningful impact",
        "Opportunity for Sewa",
      ],
    },
  ];

  return (
    <div className="pt-24 px-4 pb-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Get Involved</h1>
        
        <div className="text-center mb-12">
          <p className="text-lg max-w-3xl mx-auto">
            Join the Sikh Students Association and be part of a vibrant community that advocates for all Sheridan students 
            while promoting Sikhi and Sikh values. Anyone can join us, whether you're a Sikh student or simply interested 
            in learning about Sikhi. There's a place for you here!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {opportunities.map((opportunity, index) => (
            <div key={index} className="bg-gradient-to-br from-[rgba(8,2,46,0.95)] to-[rgba(8,2,46,0.85)] p-6 rounded-lg border border-blue-400/30 hover:border-blue-400/60 shadow-lg hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1">
              <h2 className="text-2xl font-bold mb-4 text-blue-200">{opportunity.title}</h2>
              <p className="mb-6 text-gray-300">{opportunity.description}</p>
              <h3 className="text-xl font-bold mb-3 text-blue-300">Benefits:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                {opportunity.benefits.map((benefit, idx) => (
                  <li key={idx} className="hover:text-blue-300 transition-colors duration-200">{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative bg-gradient-to-br from-[rgba(8,2,46,0.95)] to-[rgba(8,2,46,0.85)] p-8 rounded-lg mb-16 shadow-lg group">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-blue-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-0 rounded-lg border-2 border-blue-400/30 group-hover:border-blue-400/60 transition-colors duration-300"></div>
          <div className="relative">
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-200">How to Join</h2>
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8 text-lg">
                <p className="text-blue-300 mb-2 font-semibold">Everyone is Welcome!</p>
                <p className="text-gray-200">You do not have to be from a specific community to be part of the association - just be kind and respectful.</p>
              </div>
              <ol className="space-y-4">
                <li className="flex items-start group/item">
                  <span className="font-bold mr-4 text-blue-300">1.</span>
                  <p className="text-gray-200">Fill out our membership form: <a 
                      href="https://forms.office.com/r/ackW8bMdtn" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center group-hover/item:translate-x-1 transform transition-transform duration-200"
                    >
                      Click here to join
                    </a>
                  </p>
                </li>
                <li className="flex items-start group/item">
                  <span className="font-bold mr-4 text-blue-300">2.</span>
                  <p className="text-gray-200">Follow us on <a
                    href="https://www.instagram.com/ssa_sheridan?igsh=MXBvNHRramNvcmN2dQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center group-hover/item:translate-x-1 transform transition-transform duration-200"
                  >
                    Instagram
                  </a>{" "}to stay updated with our latest events and announcements.
                  </p>
                </li>
                <li className="flex items-start group/item">
                  <span className="font-bold mr-4 text-blue-300">3.</span>
                  <p className="text-gray-200">Join our WhatsApp group to stay connected with the community</p>
                </li>
              </ol>
              <div className="text-center mt-8">
                <p className="text-gray-300">Have questions? Email us at <a
                  href="mailto:ssa@sheridancollege.ca"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  ssa@sheridancollege.ca
                </a> - we'd love to hear from you!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-[rgba(8,2,46,0.95)] to-[rgba(8,2,46,0.85)] p-8 rounded-lg group">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-blue-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-0 rounded-lg border-2 border-blue-400/30 group-hover:border-blue-400/60 transition-colors duration-300"></div>
          <div className="relative text-center">
            <h2 className="text-2xl font-bold mb-4 text-blue-200">Ready to Join?</h2>
            <p className="text-lg mb-8 text-gray-200">
              Take the first step towards becoming part of our community!
            </p>
            <a
              href="https://forms.office.com/r/ackW8bMdtn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 
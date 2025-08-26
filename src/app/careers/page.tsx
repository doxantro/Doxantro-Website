import React from "react";
import Link from "next/link";

const jobOpenings = [
  {
    title: "Senior AI Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote / Hybrid",
    experience: "5+ years",
    description: "Lead the development of cutting-edge AI solutions across multiple industries, from concept to deployment.",
    requirements: [
      "Advanced degree in Computer Science, AI, or related field",
      "Expertise in machine learning frameworks (TensorFlow, PyTorch)",
      "Experience with large-scale AI systems and cloud platforms",
      "Strong background in algorithm development and optimization"
    ],
    responsibilities: [
      "Design and implement AI algorithms and models",
      "Lead technical architecture decisions",
      "Mentor junior engineers and conduct code reviews",
      "Collaborate with cross-functional teams on project delivery"
    ]
  },
  {
    title: "AI Solutions Architect",
    department: "Solutions",
    type: "Full-time",
    location: "Remote / Hybrid",
    experience: "7+ years",
    description: "Design comprehensive AI solutions for enterprise clients, ensuring scalability, performance, and business value.",
    requirements: [
      "Proven experience in enterprise AI solution design",
      "Deep understanding of AI/ML technologies and platforms",
      "Strong business acumen and client relationship skills",
      "Experience with cloud architecture and deployment"
    ],
    responsibilities: [
      "Lead solution design and architecture for client projects",
      "Define technical requirements and implementation strategies",
      "Work closely with clients to understand business needs",
      "Ensure solutions meet performance and scalability requirements"
    ]
  },
  {
    title: "Data Scientist",
    department: "Data Science",
    type: "Full-time",
    location: "Remote / Hybrid",
    experience: "3+ years",
    description: "Transform complex data into actionable insights and develop predictive models for business applications.",
    requirements: [
      "Degree in Statistics, Mathematics, or related field",
      "Proficiency in Python, R, and SQL",
      "Experience with statistical modeling and machine learning",
      "Strong analytical and problem-solving skills"
    ],
    responsibilities: [
      "Develop and implement machine learning models",
      "Perform data analysis and create visualizations",
      "Collaborate with engineering teams on model deployment",
      "Communicate findings to stakeholders and clients"
    ]
  },
  {
    title: "AI Product Manager",
    department: "Product",
    type: "Full-time",
    location: "Remote / Hybrid",
    experience: "4+ years",
    description: "Drive product strategy and development for our AI solutions, ensuring market fit and customer satisfaction.",
    requirements: [
      "Experience in AI/ML product management",
      "Strong understanding of AI technologies and market trends",
      "Excellent communication and stakeholder management skills",
      "Background in B2B SaaS or enterprise software"
    ],
    responsibilities: [
      "Define product vision and roadmap",
      "Gather and prioritize customer requirements",
      "Work with engineering teams on product development",
      "Analyze market trends and competitive landscape"
    ]
  }
];

const benefits = [
  {
    icon: "🏠",
    title: "Flexible Work",
    description: "Remote-first culture with flexible hours and work arrangements"
  },
  {
    icon: "💰",
    title: "Competitive Salary",
    description: "Above-market compensation with equity options and performance bonuses"
  },
  {
    icon: "🏥",
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs"
  },
  {
    icon: "📚",
    title: "Learning & Growth",
    description: "Continuous learning opportunities, conferences, and skill development"
  },
  {
    icon: "🎯",
    title: "Impact",
    description: "Work on cutting-edge AI solutions that transform industries"
  },
  {
    icon: "🤝",
    title: "Team Culture",
    description: "Collaborative environment with passionate AI professionals"
  }
];

const values = [
  {
    icon: "💡",
    title: "Innovation",
    description: "We push boundaries and explore new possibilities in AI technology"
  },
  {
    icon: "🤝",
    title: "Collaboration",
    description: "We believe in the power of diverse teams working together"
  },
  {
    icon: "🌱",
    title: "Growth",
    description: "We invest in our people's development and career advancement"
  },
  {
    icon: "🎯",
    title: "Excellence",
    description: "We strive for the highest quality in everything we do"
  }
];

export default function Careers() {
  return (
    <main className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us build the future of AI technology. Join a team of passionate innovators working to solve the world's most complex challenges.
          </p>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Work at Doxantro?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building more than just AI solutions - we're creating a culture of innovation, collaboration, and impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              At Doxantro Systems, we believe that human creativity combined with artificial intelligence can solve the world's most pressing challenges. 
              We're not just building technology - we're building solutions that inspire hope and create positive change across industries and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Benefits & Perks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We take care of our team so you can focus on what matters most - building amazing AI solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to join our team? Explore our current openings and find the perfect role for your skills and passion.
            </p>
          </div>

          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {job.type}
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {job.location}
                      </span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors whitespace-nowrap"
                  >
                    Apply Now
                  </Link>
                </div>

                <p className="text-gray-600 mb-6">{job.description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Responsibilities</h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Application Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've streamlined our hiring process to make it simple and efficient for both candidates and our team.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Apply</h3>
              <p className="text-gray-600">
                Submit your application with resume and cover letter through our portal
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Review</h3>
              <p className="text-gray-600">
                Our team reviews your application and reaches out within 48 hours
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Interview</h3>
              <p className="text-gray-600">
                Technical assessment and team interviews to ensure mutual fit
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Offer</h3>
              <p className="text-gray-600">
                Welcome to the team! We'll help you get started on your journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Send Your Resume
            </Link>
            <Link
              href="/about"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 
import React from "react";
import Link from "next/link";

const caseStudies = [
  {
    title: "Financial Fraud Detection System",
    client: "Global Bank Corporation",
    industry: "Finance",
    challenge: "The bank was experiencing significant losses due to sophisticated fraud schemes that traditional rule-based systems couldn'apos;t detect.",
    solution: "We implemented an AI-powered fraud detection system using machine learning algorithms that analyze transaction patterns in real-time.",
    results: [
      "Reduced fraud losses by 87%",
      "Improved detection accuracy by 92%",
      "Reduced false positives by 75%",
      "ROI of 340% within 12 months"
    ],
    technologies: ["Machine Learning", "Real-time Analytics", "Pattern Recognition", "Risk Scoring"],
    duration: "6 months",
    team: "8 AI engineers + 3 domain experts"
  },
  {
    title: "Healthcare Diagnostic Assistant",
    client: "Metropolitan Medical Center",
    industry: "Healthcare",
    challenge: "Doctors were spending excessive time on routine diagnostics, leading to longer patient wait times and reduced efficiency.",
    solution: "Developed an AI diagnostic assistant that analyzes medical images and patient data to provide preliminary assessments and recommendations.",
    results: [
      "Reduced diagnosis time by 65%",
      "Improved diagnostic accuracy by 89%",
      "Increased patient throughput by 40%",
      "Enhanced doctor productivity by 35%"
    ],
    technologies: ["Computer Vision", "Natural Language Processing", "Medical AI", "Data Analytics"],
    duration: "8 months",
    team: "6 AI engineers + 4 medical specialists"
  },
  {
    title: "Agricultural Yield Optimization",
    client: "Green Valley Farms Cooperative",
    industry: "Agriculture",
    challenge: "The cooperative was struggling with unpredictable crop yields and inefficient resource allocation across 50,000+ acres.",
    solution: "Implemented an AI-driven crop management system that monitors soil health, weather patterns, and crop conditions to optimize farming decisions.",
    results: [
      "Increased crop yields by 28%",
      "Reduced water usage by 42%",
      "Minimized pesticide application by 55%",
      "Improved resource efficiency by 38%"
    ],
    technologies: ["IoT Sensors", "Predictive Analytics", "Climate Modeling", "Resource Optimization"],
    duration: "10 months",
    team: "5 AI engineers + 3 agricultural experts"
  },
  {
    title: "Supply Chain Intelligence Platform",
    client: "TechCorp Manufacturing",
    industry: "Manufacturing",
    challenge: "The company faced frequent supply chain disruptions, inventory inefficiencies, and delayed deliveries affecting customer satisfaction.",
    solution: "Built an AI-powered supply chain platform that provides real-time visibility, demand forecasting, and automated optimization recommendations.",
    results: [
      "Reduced inventory costs by 32%",
      "Improved delivery efficiency by 45%",
      "Minimized supply disruptions by 78%",
      "Enhanced customer satisfaction by 25%"
    ],
    technologies: ["Demand Forecasting", "Inventory Optimization", "Route Planning", "Real-time Tracking"],
    duration: "7 months",
    team: "7 AI engineers + 2 logistics experts"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CTO",
    company: "Global Bank Corporation",
    quote: "Doxantro'apos;s AI solution transformed our fraud detection capabilities. The results exceeded our expectations, and the team'apos;s expertise in both AI and finance was invaluable.",
    rating: 5
  },
  {
    name: "Dr. Michael Chen",
    position: "Chief Medical Officer",
    company: "Metropolitan Medical Center",
    quote: "The AI diagnostic assistant has revolutionized how our doctors work. It'apos;s like having an expert consultant available 24/7, improving both efficiency and patient care.",
    rating: 5
  },
  {
    name: "Robert Martinez",
    position: "Operations Director",
    company: "Green Valley Farms Cooperative",
    quote: "Doxantro'apos;s agricultural AI solution has made our farming operations more sustainable and profitable. The insights we get are game-changing for our industry.",
    rating: 5
  }
];

export default function CaseStudies() {
  return (
    <main className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI solutions have transformed businesses across industries, delivering measurable results and driving innovation.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real projects, real results, real impact on businesses and organizations worldwide.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'apos;lg:grid-flow-col-dense'apos; : 'apos;'apos;
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'apos;lg:col-start-2'apos; : 'apos;'apos;}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                    <span className="text-gray-500 text-sm">{study.duration}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{study.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    <strong>Client:</strong> {study.client}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">The Challenge</h4>
                    <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Our Solution</h4>
                    <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-sm text-gray-500">
                      <strong>Team:</strong> {study.team}
                    </p>
                  </div>
                  
                  <Link
                    href="/contact"
                    className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors"
                  >
                    Discuss Similar Project
                  </Link>
                </div>

                {/* Visual Element */}
                <div className={index % 2 === 1 ? 'apos;lg:col-start-1'apos; : 'apos;'apos;}>
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl p-8 text-center h-full flex flex-col justify-center">
                    <div className="text-6xl mb-6">
                      {study.industry === 'apos;Finance'apos; && 'apos;💰'apos;}
                      {study.industry === 'apos;Healthcare'apos; && 'apos;🏥'apos;}
                      {study.industry === 'apos;Agriculture'apos; && 'apos;🌾'apos;}
                      {study.industry === 'apos;Manufacturing'apos; && 'apos;🏭'apos;}
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">{study.industry}</h4>
                    <p className="text-gray-700 mb-6">
                      {study.title}
                    </p>
                    <div className="text-3xl font-bold text-orange-600">
                      {study.results[0]}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from the organizations that have transformed their operations with our AI solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="text-yellow-400 text-xl">⭐</div>
                  ))}
                </div>
                <blockquote className="text-gray-600 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  <p className="text-orange-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Impact by the Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI solutions have delivered measurable results across industries and use cases.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
              <p className="text-gray-600">Successful Projects</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">25+</div>
              <p className="text-gray-600">Industries Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">300%</div>
              <p className="text-gray-600">Average ROI</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Let'apos;s discuss how our AI solutions can transform your business and deliver similar results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 
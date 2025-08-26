import React from "react";
import Link from "next/link";

const caseStudies = [
  {
    title: "Financial Fraud Detection System",
    client: "Major National Bank",
    industry: "Finance",
    duration: "6 months",
    challenge: "The bank was experiencing increasing fraud attempts with traditional rule-based systems that couldn't detect sophisticated attacks. They needed a solution that could adapt to new fraud patterns in real-time.",
    solution: "We implemented an AI-powered fraud detection system using machine learning algorithms that analyze transaction patterns, user behavior, and network activity. The system continuously learns from new data and adapts to emerging threats.",
    results: [
      "90% reduction in fraud detection time",
      "95% improvement in detection accuracy",
      "87% reduction in false positives",
      "Real-time threat response"
    ],
    technologies: ["Machine Learning", "Real-time Analytics", "Behavioral Analysis", "API Integration"],
    team: "5 AI Engineers, 2 Data Scientists, 1 DevOps Engineer",
    image: "💰"
  },
  {
    title: "Healthcare Diagnostic Assistant",
    client: "Regional Medical Center",
    industry: "Healthcare",
    duration: "8 months",
    challenge: "Doctors were spending excessive time on routine diagnostics, leading to longer patient wait times and reduced efficiency. They needed an AI solution to assist with preliminary assessments.",
    solution: "We developed an AI diagnostic assistant that analyzes medical images, patient symptoms, and medical history to provide preliminary assessments and recommendations, allowing doctors to focus on complex cases.",
    results: [
      "85% improvement in diagnostic accuracy",
      "60% reduction in patient wait times",
      "40% increase in doctor productivity",
      "24/7 diagnostic support"
    ],
    technologies: ["Computer Vision", "Natural Language Processing", "Medical AI", "Cloud Computing"],
    team: "4 AI Engineers, 3 Medical AI Specialists, 2 Healthcare Consultants",
    image: "🏥"
  },
  {
    title: "Agricultural Yield Optimization",
    client: "Farming Cooperative",
    industry: "Agriculture",
    duration: "12 months",
    challenge: "The cooperative was struggling with inconsistent crop yields and inefficient resource usage. They needed a solution to optimize farming operations and increase productivity while reducing costs.",
    solution: "We implemented an AI-powered precision agriculture system that monitors crop health, soil conditions, and weather patterns to provide optimal farming recommendations and resource allocation.",
    results: [
      "30% increase in crop yields",
      "40% reduction in water usage",
      "25% decrease in fertilizer costs",
      "Sustainable farming practices"
    ],
    technologies: ["IoT Sensors", "Satellite Imagery", "Predictive Analytics", "Mobile Apps"],
    team: "3 AI Engineers, 2 Agricultural Specialists, 1 Data Scientist",
    image: "🌾"
  },
  {
    title: "Supply Chain Optimization",
    client: "Global Manufacturing Company",
    industry: "Manufacturing",
    duration: "10 months",
    challenge: "The company was experiencing supply chain disruptions, inventory inefficiencies, and delayed deliveries. They needed an intelligent system to optimize their entire supply chain operations.",
    solution: "We developed an AI-powered supply chain management system that provides demand forecasting, inventory optimization, route planning, and supplier risk assessment to streamline operations.",
    results: [
      "35% reduction in supply chain costs",
      "50% improvement in delivery times",
      "45% reduction in inventory waste",
      "Real-time supply chain visibility"
    ],
    technologies: ["Demand Forecasting", "Inventory Management", "Route Optimization", "Risk Analytics"],
    team: "4 AI Engineers, 2 Supply Chain Experts, 1 Business Analyst",
    image: "📦"
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
            Real projects, real results. See how our AI solutions have transformed businesses across industries, 
            delivering measurable results and driving innovation.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
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
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl p-8 text-center h-full flex flex-col justify-center">
                    <div className="text-6xl mb-6">
                      {study.image}
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
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-semibold">JD</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">John Davis</h4>
                  <p className="text-gray-600">CTO, National Bank</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Doxantro's AI solution transformed our fraud detection capabilities. The results exceeded our expectations, and the team's expertise in both AI and finance was invaluable."
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-semibold">SM</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah Mitchell</h4>
                  <p className="text-gray-600">Medical Director, Regional Center</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The AI diagnostic assistant has revolutionized how our doctors work. It's like having an expert consultant available 24/7, improving both efficiency and patient care."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quantifying the success of our AI implementations across industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">90%</div>
              <p className="text-gray-600">Average Efficiency Improvement</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">$50M+</div>
              <p className="text-gray-600">Total Client Savings</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">25+</div>
              <p className="text-gray-600">Successful Implementations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
              <p className="text-gray-600">Client Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Let's discuss how our AI solutions can transform your business and deliver similar results.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}




'apos;use client'apos;;

import React, { useState } from "react";

const demos = [
  {
    id: "finance",
    title: "AI Fraud Detection",
    industry: "Finance",
    description: "Real-time transaction monitoring and fraud detection using advanced machine learning algorithms.",
    features: [
      "Real-time transaction analysis",
      "Pattern recognition",
      "Risk scoring",
      "Instant alerts"
    ],
    status: "available",
    icon: "💰",
    color: "blue"
  },
  {
    id: "healthcare",
    title: "Medical Image Analysis",
    industry: "Healthcare",
    description: "AI-powered diagnostic support for medical imaging with high accuracy and speed.",
    features: [
      "Image preprocessing",
      "Disease detection",
      "Confidence scoring",
      "Report generation"
    ],
    status: "coming-soon",
    icon: "🏥",
    color: "green"
  },
  {
    id: "agriculture",
    title: "Crop Health Monitoring",
    industry: "Agriculture",
    description: "Satellite and drone imagery analysis for crop health assessment and yield prediction.",
    features: [
      "Satellite imagery analysis",
      "Disease detection",
      "Yield prediction",
      "Resource optimization"
    ],
    status: "coming-soon",
    icon: "🌾",
    color: "orange"
  },
  {
    id: "supply-chain",
    title: "Supply Chain Optimization",
    industry: "Supply Chain",
    description: "Intelligent demand forecasting and inventory optimization for supply chain management.",
    features: [
      "Demand forecasting",
      "Inventory optimization",
      "Route planning",
      "Risk assessment"
    ],
    status: "coming-soon",
    icon: "📦",
    color: "purple"
  },
  {
    id: "security",
    title: "Threat Detection",
    industry: "Security",
    description: "Advanced cybersecurity threat detection and response using AI and machine learning.",
    features: [
      "Threat monitoring",
      "Behavioral analysis",
      "Incident response",
      "Security analytics"
    ],
    status: "coming-soon",
    icon: "🔒",
    color: "red"
  },
  {
    id: "energy",
    title: "Smart Grid Management",
    industry: "Energy",
    description: "AI-powered energy consumption optimization and grid management solutions.",
    features: [
      "Load balancing",
      "Consumption optimization",
      "Predictive maintenance",
      "Grid analytics"
    ],
    status: "coming-soon",
    icon: "⚡",
    color: "yellow"
  }
];

export default function AIDemoSection() {
  const [selectedDemo, setSelectedDemo] = useState(demos[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getStatusBadge = (status: string) => {
    if (status === "available") {
      return (
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
          Live Demo Available
        </span>
      );
    }
    return (
      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
        Coming Soon
      </span>
    );
  };

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "from-blue-50 to-blue-100 border-blue-200",
      green: "from-green-50 to-green-100 border-green-200",
      orange: "from-orange-50 to-orange-100 border-orange-200",
      purple: "from-purple-50 to-purple-100 border-purple-200",
      red: "from-red-50 to-red-100 border-red-200",
      yellow: "from-yellow-50 to-yellow-100 border-yellow-200"
    };
    return colorMap[color] || "from-gray-50 to-gray-100 border-gray-200";
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Experience AI in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our interactive AI demonstrations and see how our solutions work in real-world scenarios. 
            Get hands-on experience with cutting-edge artificial intelligence technology.
          </p>
        </div>

        {/* Demo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {demos.map((demo) => (
            <div
              key={demo.id}
              className={`bg-gradient-to-br ${getColorClasses(demo.color)} border rounded-2xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300 ${
                selectedDemo.id === demo.id ? 'apos;ring-2 ring-orange-500'apos; : 'apos;'apos;
              }`}
              onClick={() => setSelectedDemo(demo)}
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{demo.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{demo.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{demo.industry}</p>
                {getStatusBadge(demo.status)}
              </div>
              
              <p className="text-gray-700 text-sm mb-4">{demo.description}</p>
              
              <div className="space-y-2">
                {demo.features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Demo Details */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  {selectedDemo.industry}
                </span>
                {getStatusBadge(selectedDemo.status)}
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedDemo.title}</h3>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {selectedDemo.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {selectedDemo.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {selectedDemo.status === "available" ? (
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors"
                  >
                    Launch Demo
                  </button>
                ) : (
                  <button
                    disabled
                    className="bg-gray-300 text-gray-500 px-6 py-3 rounded-full font-semibold cursor-not-allowed"
                  >
                    Demo Coming Soon
                  </button>
                )}
                <a
                  href="/contact"
                  className="border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition-colors text-center"
                >
                  Request Early Access
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-8xl mb-6">{selectedDemo.icon}</div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Demo Preview</h4>
                <p className="text-gray-600 text-sm mb-4">
                  {selectedDemo.status === "available" 
                    ? "Click 'apos;Launch Demo'apos; to experience this AI solution in action"
                    : "This demo is currently in development. Contact us to be notified when it'apos;s ready."
                  }
                </p>
                {selectedDemo.status === "available" && (
                  <div className="text-2xl">🚀</div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Demo Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedDemo.title} - Live Demo
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center mb-6">
                <div className="text-6xl mb-4">🎯</div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Demo Environment</h4>
                <p className="text-gray-700 mb-6">
                  This is a simulated environment showcasing our {selectedDemo.title.toLowerCase()} capabilities.
                  In a real implementation, this would connect to your actual data and systems.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Demo Features</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Interactive data visualization</li>
                      <li>• Real-time processing simulation</li>
                      <li>• Performance metrics display</li>
                      <li>• Configuration options</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 mb-2">What You'apos;ll See</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• AI model predictions</li>
                      <li>• Data flow visualization</li>
                      <li>• Alert and notification system</li>
                      <li>• Dashboard interface</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  This demo showcases the core functionality of our {selectedDemo.title.toLowerCase()}. 
                  Contact us to discuss how we can implement this solution for your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors"
                  >
                    Schedule a Consultation
                  </a>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Close Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

'use client';

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

const getStatusBadge = (status: string) => {
  switch (status) {
    case "available":
      return <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Available</span>;
    case "coming-soon":
      return <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Coming Soon</span>;
    default:
      return <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">In Development</span>;
  }
};

const getColorClasses = (color: string) => {
  switch (color) {
    case "blue":
      return "from-blue-500 to-blue-600";
    case "green":
      return "from-green-500 to-green-600";
    case "orange":
      return "from-orange-500 to-orange-600";
    case "purple":
      return "from-purple-500 to-purple-600";
    case "red":
      return "from-red-500 to-red-600";
    case "yellow":
      return "from-yellow-500 to-yellow-600";
    default:
      return "from-gray-500 to-gray-600";
  }
};

export default function AIDemoSection() {
  const [selectedDemo, setSelectedDemo] = useState(demos[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDemoLaunch = () => {
    if (selectedDemo.status === "available") {
      setIsModalOpen(true);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Experience AI in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our interactive AI demos and see how our solutions work in real-world scenarios. 
            Get hands-on experience with cutting-edge artificial intelligence technology.
          </p>
        </div>

        {/* Demo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {demos.map((demo) => (
            <div
              key={demo.id}
              onClick={() => setSelectedDemo(demo)}
              className={`bg-white rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                selectedDemo.id === demo.id ? 'ring-2 ring-orange-500' : ''
              }`}
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{demo.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{demo.title}</h3>
                <p className="text-gray-600 mb-4">{demo.description}</p>
                
                <div className="mb-4">
                  {getStatusBadge(demo.status)}
                </div>
                
                <div className="space-y-2">
                  {demo.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Demo Details */}
        <div className="bg-gray-50 rounded-3xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-6xl">{selectedDemo.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedDemo.title}</h3>
                  <p className="text-gray-600">{selectedDemo.industry}</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">{selectedDemo.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {selectedDemo.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                {getStatusBadge(selectedDemo.status)}
              </div>
              
              <div className="text-sm text-gray-600 mb-6">
                {selectedDemo.status === "available" 
                  ? "Click 'Launch Demo' to experience this AI solution in action"
                  : "This demo is currently in development. Contact us to be notified when it's ready."}
              </div>
              
              {selectedDemo.status === "available" ? (
                <button
                  onClick={handleDemoLaunch}
                  className={`bg-gradient-to-r ${getColorClasses(selectedDemo.color)} text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity`}
                >
                  Launch Demo
                </button>
              ) : (
                <button className="bg-gray-200 text-gray-500 px-8 py-3 rounded-full font-semibold cursor-not-allowed">
                  Request Early Access
                </button>
              )}
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="text-8xl mb-6">{selectedDemo.icon}</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">{selectedDemo.title}</h4>
              <p className="text-gray-600 mb-6">
                Experience the future of {selectedDemo.industry.toLowerCase()} with AI
              </p>
              
              <div className="space-y-3">
                <h5 className="font-semibold text-gray-900 mb-2">What You'll See</h5>
                <div className="text-sm text-gray-600 space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Real-time processing</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Interactive interface</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Performance metrics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 max-w-2xl mx-4">
            <div className="text-center">
              <div className="text-6xl mb-6">{selectedDemo.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Launching {selectedDemo.title}</h3>
              <p className="text-gray-600 mb-6">
                You're about to experience our AI solution in a simulated environment.
              </p>
              
              <div className="bg-gray-100 rounded-2xl p-6 mb-6">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Demo Environment</h4>
                <p className="text-gray-600 text-sm">
                  This is a demonstration environment with sample data. 
                  Contact us to see this solution with your actual data.
                </p>
              </div>
              
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
                <a
                  href="/contact"
                  className="px-6 py-3 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-colors"
                >
                  Request Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

import React from "react";
import Link from "next/link";

const solutions = [
  {
    title: "Crop Health Monitoring",
    description: "AI-powered analysis of satellite and drone imagery for real-time crop health assessment and disease detection.",
    features: [
      "Multi-spectral image analysis",
      "Early disease detection",
      "Nutrient deficiency identification",
      "Growth stage monitoring",
      "Automated alert systems",
      "Historical trend analysis"
    ],
    benefits: [
      "Increase crop yields by 25-30%",
      "Reduce pesticide usage by 50%",
      "Early detection of crop diseases",
      "Optimize resource allocation"
    ],
    icon: "🌾"
  },
  {
    title: "Precision Agriculture",
    description: "Data-driven farming decisions using AI to optimize irrigation, fertilization, and crop management practices.",
    features: [
      "Soil moisture monitoring",
      "Variable rate application",
      "Weather integration",
      "Yield prediction models",
      "Resource optimization",
      "Field mapping and zoning"
    ],
    benefits: [
      "Reduce water usage by 40%",
      "Minimize fertilizer waste by 35%",
      "Improve crop quality",
      "Lower operational costs"
    ],
    icon: "🎯"
  },
  {
    title: "Supply Chain Optimization",
    description: "AI-powered logistics and supply chain management for agricultural products from farm to market.",
    features: [
      "Demand forecasting",
      "Route optimization",
      "Storage optimization",
      "Quality monitoring",
      "Cold chain management",
      "Market price prediction"
    ],
    benefits: [
      "Reduce post-harvest losses by 30%",
      "Optimize storage conditions",
      "Improve market timing",
      "Enhance product quality"
    ],
    icon: "🚛"
  },
  {
    title: "Climate Adaptation",
    description: "AI models that help farmers adapt to changing climate conditions and extreme weather events.",
    features: [
      "Climate pattern analysis",
      "Weather prediction models",
      "Crop adaptation strategies",
      "Risk assessment",
      "Insurance optimization",
      "Sustainable farming practices"
    ],
    benefits: [
      "Reduce climate-related losses by 45%",
      "Improve resilience to weather events",
      "Enable sustainable farming",
      "Optimize crop selection"
    ],
    icon: "🌤️"
  }
];

const useCases = [
  {
    title: "Large-Scale Farms",
    description: "Optimize operations across thousands of acres with AI-powered monitoring and automation.",
    icon: "🏭",
    examples: ["Crop monitoring", "Resource optimization", "Yield prediction", "Automation"]
  },
  {
    title: "Agricultural Cooperatives",
    description: "Improve efficiency and profitability for member farmers through shared AI insights and resources.",
    icon: "🤝",
    examples: ["Shared analytics", "Bulk purchasing", "Market access", "Quality control"]
  },
  {
    title: "Food Processing Companies",
    description: "Ensure consistent quality and supply through AI-powered agricultural monitoring and forecasting.",
    icon: "🥫",
    examples: ["Quality assurance", "Supply forecasting", "Processing optimization", "Waste reduction"]
  },
  {
    title: "Government Agencies",
    description: "Support agricultural policy and food security through comprehensive AI-powered monitoring systems.",
    icon: "🏛️",
    examples: ["Policy planning", "Food security", "Disaster response", "Resource allocation"]
  }
];

const implementationSteps = [
  {
    step: "01",
    title: "Field Assessment",
    description: "We analyze your current farming operations and identify AI opportunities for maximum impact.",
    duration: "2-3 weeks"
  },
  {
    step: "02",
    title: "Data Collection",
    description: "Setup of sensors, drones, and data collection systems for comprehensive farm monitoring.",
    duration: "4-6 weeks"
  },
  {
    step: "03",
    title: "AI Model Development",
    description: "Development of custom AI models trained on your specific crops and farming conditions.",
    duration: "8-10 weeks"
  },
  {
    step: "04",
    title: "Field Testing",
    description: "Rigorous testing in real farming conditions to ensure accuracy and reliability.",
    duration: "6-8 weeks"
  },
  {
    step: "05",
    title: "Full Deployment",
    description: "Production deployment with comprehensive training and ongoing support for your team.",
    duration: "2-3 weeks"
  }
];

export default function AIAgriculture() {
  return (
    <main className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI for Agriculture
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your farming operations with smart AI solutions for crop management, yield prediction, 
            and sustainable agriculture practices that feed the world more efficiently.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors mr-4"
            >
              Get Started
            </a>
            <a
              href="#demo"
              className="inline-block border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition-colors"
            >
              Request Demo
            </a>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why AI in Agriculture?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The world'apos;s population is growing, and we need to produce more food with fewer resources. 
              AI offers sustainable solutions that increase yields while protecting our environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🌱</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainable Growth</h3>
              <p className="text-gray-600">
                Increase crop yields while reducing environmental impact through precision agriculture and smart resource management.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">💧</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Resource Efficiency</h3>
              <p className="text-gray-600">
                Optimize water, fertilizer, and pesticide usage to reduce waste and lower operational costs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🔮</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Predictive Insights</h3>
              <p className="text-gray-600">
                Anticipate weather changes, disease outbreaks, and market conditions to make better farming decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our AI Solutions for Agriculture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed specifically for modern farming challenges, 
              from precision agriculture to climate adaptation.
            </p>
          </div>
          
          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-4xl">{solution.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-6">{solution.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {solution.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-gray-600">
                              <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Farming Benefits</h4>
                        <ul className="space-y-2">
                          {solution.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-gray-600">
                              <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center">
                    <div className="text-6xl mb-4">{solution.icon}</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h4>
                    <p className="text-gray-700">
                      Ready for field deployment
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Agricultural Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI solutions are designed to address the specific challenges and opportunities 
              across different agricultural operations and scales.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.examples.map((example, idx) => (
                    <span
                      key={idx}
                      className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our agriculture-focused implementation methodology ensures successful AI deployment 
              with minimal disruption to farming operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {implementationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-2">{step.description}</p>
                <span className="text-sm text-orange-600 font-medium">{step.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Farming Operations?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Let'apos;s discuss how our AI solutions can increase yields, reduce costs, and create sustainable farming practices for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule a Consultation
            </a>
            <a
              href="/case-studies"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              View Agriculture Case Studies
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

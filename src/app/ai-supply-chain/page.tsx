import React from "react";
import Link from "next/link";

const solutions = [
  {
    title: "Demand Forecasting",
    description: "AI-powered demand prediction using historical data, market trends, and external factors for accurate inventory planning.",
    features: [
      "Multi-variable analysis",
      "Seasonal pattern recognition",
      "Market trend integration",
      "Real-time updates",
      "Confidence scoring",
      "Scenario planning"
    ],
    benefits: [
      "Reduce inventory costs by 20-30%",
      "Improve forecast accuracy by 85%",
      "Minimize stockouts and overstock",
      "Optimize production planning"
    ],
    icon: "📊"
  },
  {
    title: "Inventory Optimization",
    description: "Intelligent inventory management that balances stock levels, costs, and service levels for maximum efficiency.",
    features: [
      "Dynamic reorder points",
      "Safety stock optimization",
      "Multi-location coordination",
      "ABC analysis automation",
      "Lead time optimization",
      "Cost-benefit analysis"
    ],
    benefits: [
      "Reduce carrying costs by 25%",
      "Improve service levels by 15%",
      "Optimize warehouse space",
      "Reduce obsolescence risk"
    ],
    icon: "📦"
  },
  {
    title: "Route Planning & Optimization",
    description: "AI-powered logistics optimization for delivery routes, transportation modes, and scheduling efficiency.",
    features: [
      "Multi-stop route optimization",
      "Real-time traffic integration",
      "Vehicle capacity planning",
      "Fuel consumption optimization",
      "Delivery time windows",
      "Dynamic rerouting"
    ],
    benefits: [
      "Reduce transportation costs by 30%",
      "Improve delivery efficiency by 40%",
      "Reduce carbon footprint",
      "Enhance customer satisfaction"
    ],
    icon: "🚛"
  },
  {
    title: "Supplier Risk Assessment",
    description: "Comprehensive risk monitoring and assessment for suppliers using AI-powered analytics and predictive modeling.",
    features: [
      "Financial health monitoring",
      "Performance tracking",
      "Geopolitical risk analysis",
      "Supply disruption prediction",
      "Alternative supplier identification",
      "Risk scoring and alerts"
    ],
    benefits: [
      "Reduce supply disruptions by 60%",
      "Improve supplier performance by 25%",
      "Enable proactive risk management",
      "Optimize supplier relationships"
    ],
    icon: "⚠️"
  }
];

const useCases = [
  {
    title: "Manufacturing Companies",
    description: "Optimize production planning, inventory management, and supplier relationships with AI-powered insights.",
    icon: "🏭",
    examples: ["Production planning", "Inventory optimization", "Supplier management", "Quality control"]
  },
  {
    title: "Retail Chains",
    description: "Improve demand forecasting, store replenishment, and omnichannel inventory management.",
    icon: "🛍️",
    examples: ["Demand forecasting", "Store replenishment", "Omnichannel inventory", "Seasonal planning"]
  },
  {
    title: "Logistics Providers",
    description: "Enhance route optimization, fleet management, and delivery efficiency with intelligent AI solutions.",
    icon: "🚚",
    examples: ["Route optimization", "Fleet management", "Delivery tracking", "Capacity planning"]
  },
  {
    title: "E-commerce Platforms",
    description: "Optimize inventory allocation, fulfillment strategies, and customer delivery experiences.",
    icon: "🛒",
    examples: ["Inventory allocation", "Fulfillment optimization", "Delivery prediction", "Returns management"]
  }
];

const implementationSteps = [
  {
    step: "01",
    title: "Supply Chain Assessment",
    description: "We analyze your current supply chain operations and identify AI opportunities for maximum impact.",
    duration: "2-3 weeks"
  },
  {
    step: "02",
    title: "Data Integration",
    description: "Secure integration with your existing ERP, WMS, and supply chain systems for comprehensive data access.",
    duration: "4-6 weeks"
  },
  {
    step: "03",
    title: "AI Model Development",
    description: "Development of custom AI models tailored to your specific supply chain challenges and requirements.",
    duration: "8-10 weeks"
  },
  {
    step: "04",
    title: "Testing & Validation",
    description: "Rigorous testing with historical data and real-time scenarios to ensure accuracy and reliability.",
    duration: "4-6 weeks"
  },
  {
    step: "05",
    title: "Deployment & Training",
    description: "Production deployment with comprehensive team training and ongoing optimization support.",
    duration: "2-3 weeks"
  }
];

export default function AISupplyChain() {
  return (
    <main className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI for Supply Chain
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Streamline your logistics and supply chain operations with intelligent AI solutions for better efficiency, 
            cost optimization, and customer satisfaction.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors mr-4"
            >
              Get Started
            </a>
            <a
              href="#demo"
              className="inline-block border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-colors"
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
              Why AI in Supply Chain?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern supply chains are complex and vulnerable to disruptions. AI offers intelligent solutions that 
              provide visibility, predictability, and optimization across the entire supply chain.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">👁️</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">End-to-End Visibility</h3>
              <p className="text-gray-600">
                Real-time tracking and monitoring across your entire supply chain for better decision-making and risk management.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">⚡</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Predictive Capabilities</h3>
              <p className="text-gray-600">
                Anticipate disruptions, optimize inventory levels, and improve demand forecasting with AI-powered insights.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">💰</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Optimization</h3>
              <p className="text-gray-600">
                Reduce operational costs, minimize waste, and optimize resource allocation across your supply chain.
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
              Our AI Solutions for Supply Chain
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed specifically for supply chain challenges, 
              from demand forecasting to risk management.
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
                              <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Business Benefits</h4>
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
                  
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
                    <div className="text-6xl mb-4">{solution.icon}</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h4>
                    <p className="text-gray-700">
                      Ready for supply chain integration
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
              Supply Chain Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI solutions are designed to address the specific challenges and opportunities 
              across different supply chain operations and industries.
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
                      className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
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
              Our supply chain-focused implementation methodology ensures successful AI deployment 
              with minimal disruption to your operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {implementationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-2">{step.description}</p>
                <span className="text-sm text-purple-600 font-medium">{step.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let'apos;s discuss how our AI solutions can improve efficiency, reduce costs, and create a more resilient supply chain for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule a Consultation
            </a>
            <a
              href="/case-studies"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Supply Chain Case Studies
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

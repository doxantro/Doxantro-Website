import React from "react";
import Link from "next/link";

const solutions = [
  {
    title: "Smart Grid Management",
    description: "AI-powered grid optimization for efficient energy distribution, load balancing, and real-time monitoring.",
    features: [
      "Real-time load balancing",
      "Grid stability monitoring",
      "Predictive maintenance",
      "Fault detection",
      "Energy flow optimization",
      "Grid resilience enhancement"
    ],
    benefits: [
      "Improve grid efficiency by 30%",
      "Reduce energy losses by 25%",
      "Enhance grid reliability",
      "Optimize energy distribution"
    ],
    icon: "⚡"
  },
  {
    title: "Energy Consumption Analytics",
    description: "Intelligent analysis of energy usage patterns to optimize consumption and reduce costs.",
    features: [
      "Usage pattern analysis",
      "Peak demand prediction",
      "Energy efficiency recommendations",
      "Cost optimization",
      "Real-time monitoring",
      "Historical trend analysis"
    ],
    benefits: [
      "Reduce energy costs by 15-25%",
      "Improve energy efficiency by 20%",
      "Optimize consumption patterns",
      "Enable demand response"
    ],
    icon: "📊"
  },
  {
    title: "Renewable Energy Optimization",
    description: "AI-powered optimization of renewable energy systems for maximum efficiency and grid integration.",
    features: [
      "Solar panel optimization",
      "Wind turbine efficiency",
      "Energy storage management",
      "Grid integration",
      "Weather prediction",
      "Performance monitoring"
    ],
    benefits: [
      "Increase renewable energy output by 20%",
      "Improve grid integration efficiency",
      "Optimize energy storage",
      "Reduce intermittency issues"
    ],
    icon: "🌞"
  },
  {
    title: "Predictive Maintenance",
    description: "AI-driven maintenance scheduling for energy infrastructure to prevent failures and optimize performance.",
    features: [
      "Equipment health monitoring",
      "Failure prediction",
      "Maintenance scheduling",
      "Performance optimization",
      "Cost-benefit analysis",
      "Risk assessment"
    ],
    benefits: [
      "Prevent equipment failures by 80%",
      "Reduce maintenance costs by 30%",
      "Improve equipment lifespan",
      "Optimize maintenance schedules"
    ],
    icon: "🔧"
  }
];

const useCases = [
  {
    title: "Utility Companies",
    description: "Transform grid operations with AI-powered monitoring, optimization, and predictive maintenance.",
    icon: "🏭",
    examples: ["Grid optimization", "Load balancing", "Predictive maintenance", "Customer service"]
  },
  {
    title: "Industrial Facilities",
    description: "Optimize energy consumption and reduce costs with intelligent energy management systems.",
    icon: "🏭",
    examples: ["Energy optimization", "Cost reduction", "Efficiency improvement", "Sustainability"]
  },
  {
    title: "Commercial Buildings",
    description: "Enhance building energy efficiency with AI-powered monitoring and optimization.",
    icon: "🏢",
    examples: ["Building automation", "Energy management", "Cost optimization", "Sustainability"]
  },
  {
    title: "Renewable Energy Providers",
    description: "Maximize renewable energy output and grid integration with intelligent optimization.",
    icon: "🌱",
    examples: ["Output optimization", "Grid integration", "Storage management", "Performance monitoring"]
  }
];

const implementationSteps = [
  {
    step: "01",
    title: "Energy Assessment",
    description: "We analyze your current energy systems and identify AI opportunities for maximum efficiency.",
    duration: "2-3 weeks"
  },
  {
    step: "02",
    title: "System Integration",
    description: "Secure integration with your existing energy management systems and data sources.",
    duration: "4-6 weeks"
  },
  {
    step: "03",
    title: "AI Model Development",
    description: "Development of custom AI models tailored to your specific energy challenges and requirements.",
    duration: "8-10 weeks"
  },
  {
    step: "04",
    title: "Testing & Validation",
    description: "Rigorous testing with real energy data to ensure accuracy and reliability.",
    duration: "4-6 weeks"
  },
  {
    step: "05",
    title: "Deployment & Training",
    description: "Production deployment with comprehensive team training and ongoing optimization support.",
    duration: "2-3 weeks"
  }
];

export default function AIEnergy() {
  return (
    <main className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI for Energy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Optimize energy consumption and management with intelligent AI solutions for smart grids, 
            renewable energy systems, and sustainable energy practices.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block bg-yellow-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-700 transition-colors mr-4"
            >
              Get Started
            </a>
            <a
              href="#demo"
              className="inline-block border-2 border-yellow-600 text-yellow-600 px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 hover:text-white transition-colors"
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
              Why AI in Energy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The energy sector is undergoing a transformation toward sustainability and efficiency. 
              AI offers intelligent solutions that optimize energy systems and reduce environmental impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🌱</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                Optimize energy systems for maximum efficiency and minimal environmental impact.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">💰</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Reduction</h3>
              <p className="text-gray-600">
                Reduce energy costs through intelligent optimization and predictive maintenance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🔮</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Predictive Insights</h3>
              <p className="text-gray-600">
                Anticipate energy needs and optimize systems for peak performance and reliability.
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
              Our AI Solutions for Energy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed specifically for energy challenges, 
              from grid optimization to renewable energy management.
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
                              <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Energy Benefits</h4>
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
                  
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 text-center">
                    <div className="text-6xl mb-4">{solution.icon}</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h4>
                    <p className="text-gray-700">
                      Ready for energy deployment
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
              Energy Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI solutions are designed to address the specific energy challenges and opportunities 
              across different sectors and applications.
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
                      className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm"
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
              Our energy-focused implementation methodology ensures successful AI deployment 
              with minimal disruption to your energy operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {implementationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-2">{step.description}</p>
                <span className="text-sm text-yellow-600 font-medium">{step.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Optimize Your Energy Systems?
          </h2>
          <p className="text-xl text-yellow-100 mb-8">
            Let's discuss how our AI solutions can improve efficiency, reduce costs, and create sustainable energy practices for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-yellow-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule a Consultation
            </a>
            <a
              href="/case-studies"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-yellow-600 transition-colors"
            >
              View Energy Case Studies
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}





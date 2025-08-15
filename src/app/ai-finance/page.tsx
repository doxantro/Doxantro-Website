import React from "react";
import Link from "next/link";

const solutions = [
  {
    title: "Fraud Detection & Prevention",
    description: "Advanced AI algorithms that detect fraudulent transactions in real-time with 99.9% accuracy.",
    features: [
      "Real-time transaction monitoring",
      "Behavioral pattern analysis",
      "Machine learning-based risk scoring",
      "Instant fraud alerts and blocking",
      "Adaptive learning from new threats",
      "Regulatory compliance reporting"
    ],
    benefits: [
      "Reduce fraud losses by up to 90%",
      "Minimize false positives by 75%",
      "24/7 automated monitoring",
      "Compliance with financial regulations"
    ],
    icon: "🛡️"
  },
  {
    title: "Credit Risk Assessment",
    description: "Intelligent credit scoring using alternative data and machine learning for more accurate risk evaluation.",
    features: [
      "Alternative data analysis",
      "Predictive risk modeling",
      "Real-time credit decisions",
      "Portfolio risk management",
      "Dynamic credit limit adjustment",
      "Regulatory stress testing"
    ],
    benefits: [
      "Improve approval rates by 25%",
      "Reduce default rates by 30%",
      "Faster credit decisions",
      "Better risk-adjusted returns"
    ],
    icon: "📊"
  },
  {
    title: "Algorithmic Trading",
    description: "AI-powered trading strategies that analyze market data and execute trades with optimal timing and precision.",
    features: [
      "Market sentiment analysis",
      "Predictive price modeling",
      "Risk management algorithms",
      "Portfolio optimization",
      "Real-time market monitoring",
      "Automated trade execution"
    ],
    benefits: [
      "Increase trading returns by 15-25%",
      "Reduce trading costs by 40%",
      "24/7 market coverage",
      "Emotion-free decision making"
    ],
    icon: "📈"
  },
  {
    title: "Regulatory Compliance",
    description: "Automated compliance monitoring and reporting using AI to ensure adherence to financial regulations.",
    features: [
      "Automated regulatory reporting",
      "Compliance risk assessment",
      "Real-time monitoring",
      "Audit trail generation",
      "Policy violation detection",
      "Regulatory change tracking"
    ],
    benefits: [
      "Reduce compliance costs by 60%",
      "Eliminate manual reporting errors",
      "Real-time compliance status",
      "Automated regulatory updates"
    ],
    icon: "⚖️"
  }
];

const useCases = [
  {
    title: "Retail Banking",
    description: "Transform customer experience with AI-powered fraud detection, personalized services, and automated loan processing.",
    icon: "🏦",
    examples: ["Fraud detection", "Credit scoring", "Customer service", "Risk management"]
  },
  {
    title: "Investment Banking",
    description: "Enhance trading strategies, risk assessment, and client portfolio management with intelligent AI solutions.",
    icon: "💼",
    examples: ["Algorithmic trading", "Portfolio optimization", "Risk modeling", "Market analysis"]
  },
  {
    title: "Insurance",
    description: "Improve underwriting accuracy, fraud detection, and claims processing with AI-powered insights.",
    icon: "🛡️",
    examples: ["Claims fraud detection", "Risk assessment", "Underwriting automation", "Customer segmentation"]
  },
  {
    title: "Fintech",
    description: "Accelerate innovation and scale operations with AI-driven automation and intelligent decision-making.",
    icon: "🚀",
    examples: ["Digital lending", "Payment processing", "Regulatory compliance", "Customer onboarding"]
  }
];

const implementationSteps = [
  {
    step: "01",
    title: "Assessment & Strategy",
    description: "We analyze your current financial systems and develop a comprehensive AI implementation strategy.",
    duration: "2-3 weeks"
  },
  {
    step: "02",
    title: "Data Preparation",
    description: "Our team prepares and validates your financial data for AI model training and deployment.",
    duration: "3-4 weeks"
  },
  {
    step: "03",
    title: "Model Development",
    description: "We develop custom AI models tailored to your specific financial use cases and requirements.",
    duration: "6-8 weeks"
  },
  {
    step: "04",
    title: "Testing & Deployment",
    description: "Rigorous testing ensures accuracy and reliability before production deployment.",
    duration: "2-3 weeks"
  },
  {
    step: "05",
    title: "Monitoring & Optimization",
    description: "Continuous monitoring and optimization ensure peak performance and accuracy over time.",
    duration: "Ongoing"
  }
];

export default function AIFinance() {
  return (
    <main className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI for Finance
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your financial operations with intelligent AI solutions that provide real-time insights, 
            risk assessment, and automated decision-making for better business outcomes.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors mr-4"
            >
              Get Started
            </a>
            <a
              href="#demo"
              className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors"
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
              Why AI in Finance?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The financial industry is undergoing a digital transformation. AI is not just an option—it'apos;s a necessity 
              for staying competitive and meeting evolving customer expectations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">💰</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Reduction</h3>
              <p className="text-gray-600">
                Automate routine tasks and reduce operational costs by up to 40% while improving accuracy and efficiency.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">⚡</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Processing</h3>
              <p className="text-gray-600">
                Process transactions and detect risks in milliseconds, enabling faster decision-making and better customer service.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🎯</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Risk Management</h3>
              <p className="text-gray-600">
                Identify and mitigate risks proactively with AI-powered predictive analytics and real-time monitoring.
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
              Our AI Solutions for Finance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed specifically for the unique challenges and opportunities in the financial sector.
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
                              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
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
                  
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
                    <div className="text-6xl mb-4">{solution.icon}</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h4>
                    <p className="text-gray-700">
                      Ready to implement and scale
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
              Industry Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI solutions are designed to address the specific challenges and opportunities across different 
              financial sectors and business models.
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
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
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
              Our proven methodology ensures successful AI implementation with minimal disruption to your operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {implementationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-2">{step.description}</p>
                <span className="text-sm text-blue-600 font-medium">{step.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Financial Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let'apos;s discuss how our AI solutions can drive innovation, reduce costs, and improve risk management in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule a Consultation
            </a>
            <a
              href="/case-studies"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Finance Case Studies
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

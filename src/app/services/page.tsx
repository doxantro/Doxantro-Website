import React from "react";
import Link from "next/link";

const services = [
  {
    title: "AI for Finance",
    icon: "💰",
    description: "Transform your financial operations with intelligent AI solutions that provide real-time insights, risk assessment, and automated decision-making.",
    features: [
      "Predictive Analytics & Forecasting",
      "Fraud Detection & Prevention",
      "Risk Management & Assessment",
      "Automated Trading Systems",
      "Customer Credit Scoring",
      "Regulatory Compliance"
    ],
    benefits: [
      "Reduce fraud losses by up to 90%",
      "Improve risk assessment accuracy by 85%",
      "Automate 70% of routine financial tasks",
      "Real-time market insights and predictions"
    ],
    useCases: [
      "Banks & Financial Institutions",
      "Insurance Companies",
      "Investment Firms",
      "Fintech Startups"
    ],
    demo: true
  },
  {
    title: "AI for Healthcare",
    icon: "🏥",
    description: "Revolutionize patient care with AI-powered diagnostic tools, treatment optimization, and healthcare management systems.",
    features: [
      "Medical Image Analysis",
      "Diagnostic Support Systems",
      "Patient Risk Prediction",
      "Drug Discovery & Development",
      "Healthcare Resource Optimization",
      "Personalized Medicine"
    ],
    benefits: [
      "Improve diagnostic accuracy by 95%",
      "Reduce diagnosis time by 60%",
      "Optimize treatment plans for better outcomes",
      "Streamline healthcare operations"
    ],
    useCases: [
      "Hospitals & Clinics",
      "Medical Research Centers",
      "Pharmaceutical Companies",
      "Health Insurance Providers"
    ],
    demo: false
  },
  {
    title: "AI for Agriculture",
    icon: "🌾",
    description: "Optimize farming operations with smart AI solutions for crop management, yield prediction, and sustainable agriculture practices.",
    features: [
      "Crop Monitoring & Analysis",
      "Yield Prediction Models",
      "Soil Health Assessment",
      "Pest & Disease Detection",
      "Resource Optimization",
      "Climate Adaptation"
    ],
    benefits: [
      "Increase crop yields by 25-30%",
      "Reduce water usage by 40%",
      "Minimize pesticide application by 50%",
      "Improve resource efficiency"
    ],
    useCases: [
      "Large-Scale Farms",
      "Agricultural Cooperatives",
      "Food Processing Companies",
      "Government Agricultural Agencies"
    ],
    demo: false
  },
  {
    title: "AI for Supply Chain",
    icon: "📦",
    description: "Streamline your logistics and supply chain operations with intelligent AI solutions for better efficiency and cost optimization.",
    features: [
      "Demand Forecasting",
      "Inventory Optimization",
      "Route Planning & Optimization",
      "Supplier Risk Assessment",
      "Real-time Tracking",
      "Predictive Maintenance"
    ],
    benefits: [
      "Reduce inventory costs by 20-30%",
      "Improve delivery efficiency by 35%",
      "Minimize supply chain disruptions",
      "Optimize warehouse operations"
    ],
    useCases: [
      "Manufacturing Companies",
      "Retail Chains",
      "Logistics Providers",
      "E-commerce Platforms"
    ],
    demo: false
  },
  {
    title: "AI for Security",
    icon: "🔒",
    description: "Enhance your security infrastructure with advanced AI-powered threat detection, cybersecurity, and surveillance systems.",
    features: [
      "Threat Detection & Prevention",
      "Cybersecurity Monitoring",
      "Surveillance & Recognition",
      "Access Control Systems",
      "Incident Response Automation",
      "Security Analytics"
    ],
    benefits: [
      "Detect threats 10x faster than traditional methods",
      "Reduce false positives by 80%",
      "24/7 automated security monitoring",
      "Proactive threat prevention"
    ],
    useCases: [
      "Corporate Offices",
      "Government Facilities",
      "Financial Institutions",
      "Critical Infrastructure"
    ],
    demo: false
  },
  {
    title: "AI for Energy",
    icon: "⚡",
    description: "Optimize energy consumption and management with intelligent AI solutions for smart grids and renewable energy systems.",
    features: [
      "Smart Grid Management",
      "Energy Consumption Analytics",
      "Renewable Energy Optimization",
      "Predictive Maintenance",
      "Load Balancing",
      "Energy Trading"
    ],
    benefits: [
      "Reduce energy costs by 15-25%",
      "Improve grid efficiency by 30%",
      "Optimize renewable energy utilization",
      "Prevent equipment failures"
    ],
    useCases: [
      "Utility Companies",
      "Industrial Facilities",
      "Commercial Buildings",
      "Renewable Energy Providers"
    ],
    demo: false
  }
];

export default function Services() {
  return (
    <main className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our AI Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations and drive innovation across industries.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Industry-Specific AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in developing tailored AI solutions that address the unique challenges and opportunities in your industry.
            </p>
          </div>

          {/* Quick Navigation to Industry Pages */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Explore Our Industry Solutions</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              <Link
                href="/ai-finance"
                className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4 text-center hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-3xl mb-2">💰</div>
                <h4 className="font-semibold text-blue-900 group-hover:text-blue-700">Finance</h4>
                <p className="text-xs text-blue-700 mt-1">Fraud Detection, Trading, Risk</p>
              </Link>
              
              <Link
                href="/ai-healthcare"
                className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-4 text-center hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-3xl mb-2">🏥</div>
                <h4 className="font-semibold text-green-900 group-hover:text-green-700">Healthcare</h4>
                <p className="text-xs text-green-700 mt-1">Diagnostics, Analytics, Drug Discovery</p>
              </Link>
              
              <Link
                href="/ai-agriculture"
                className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-4 text-center hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-3xl mb-2">🌾</div>
                <h4 className="font-semibold text-orange-900 group-hover:text-orange-700">Agriculture</h4>
                <p className="text-xs text-orange-700 mt-1">Crop Monitoring, Yield Prediction</p>
              </Link>
              
              <Link
                href="/ai-supply-chain"
                className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-4 text-center hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-3xl mb-2">📦</div>
                <h4 className="font-semibold text-purple-900 group-hover:text-purple-700">Supply Chain</h4>
                <p className="text-xs text-purple-700 mt-1">Optimization, Forecasting, Logistics</p>
              </Link>
              
              <Link
                href="/ai-security"
                className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-xl p-4 text-center hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-3xl mb-2">🔒</div>
                <h4 className="font-semibold text-red-900 group-hover:text-red-700">Security</h4>
                <p className="text-xs text-red-700 mt-1">Threat Detection, Surveillance</p>
              </Link>
              
              <Link
                href="/ai-energy"
                className="bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 rounded-xl p-4 text-center hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="font-semibold text-yellow-900 group-hover:text-yellow-700">Energy</h4>
                <p className="text-xs text-yellow-700 mt-1">Grid Management, Optimization</p>
              </Link>
            </div>
          </div>

          {/* Services Grid */}
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'apos;lg:grid-flow-col-dense'apos; : 'apos;'apos;
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'apos;lg:col-start-2'apos; : 'apos;'apos;}>
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Business Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Ideal For</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8">
                    {service.demo ? (
                      <Link
                        href="/contact"
                        className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors mr-4"
                      >
                        Request Demo
                      </Link>
                    ) : (
                      <span className="inline-block bg-gray-200 text-gray-500 px-6 py-3 rounded-full font-semibold mr-4">
                        Coming Soon
                      </span>
                    )}
                    <Link
                      href={service.title === "AI for Finance" ? "/ai-finance" : 
                            service.title === "AI for Healthcare" ? "/ai-healthcare" : 
                            service.title === "AI for Agriculture" ? "/ai-agriculture" :
                            service.title === "AI for Supply Chain" ? "/ai-supply-chain" :
                            service.title === "AI for Security" ? "/ai-security" :
                            service.title === "AI for Energy" ? "/ai-energy" : "/contact"}
                      className="inline-block border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>

                {/* Visual Element */}
                <div className={index % 2 === 1 ? 'apos;lg:col-start-1'apos; : 'apos;'apos;}>
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl p-8 text-center h-full flex flex-col justify-center">
                    <div className="text-8xl mb-6">{service.icon}</div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h4>
                    <p className="text-gray-700">
                      Transform your {service.title.toLowerCase()} operations with cutting-edge AI technology
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful AI implementation and maximum ROI for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery</h3>
              <p className="text-gray-600">
                We analyze your business needs and identify the best AI opportunities for your organization.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy</h3>
              <p className="text-gray-600">
                We develop a comprehensive AI strategy tailored to your business goals and technical requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600">
                Our expert team builds and deploys your AI solution with rigorous testing and quality assurance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Optimization</h3>
              <p className="text-gray-600">
                We continuously monitor, optimize, and scale your AI solution for maximum performance and ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Let'apos;s discuss how our AI solutions can drive innovation and growth in your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/case-studies"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 
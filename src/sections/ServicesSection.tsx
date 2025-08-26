import React from "react";
import Link from "next/link";

const services = [
  {
    title: "AI for Finance",
    description: "Automate financial analysis, risk assessment, and fraud detection with intelligent algorithms.",
    icon: "💰",
    features: ["Predictive Analytics", "Risk Management", "Fraud Detection"],
    demo: true
  },
  {
    title: "AI for Healthcare",
    description: "Enhance diagnostics, patient care, and medical research with advanced AI solutions.",
    icon: "🏥",
    features: ["Diagnostic Support", "Patient Monitoring", "Research Analysis"],
    demo: false
  },
  {
    title: "AI for Agriculture",
    description: "Optimize crop management, yield prediction, and sustainable farming practices.",
    icon: "🌾",
    features: ["Crop Monitoring", "Yield Prediction", "Resource Optimization"],
    demo: false
  },
  {
    title: "AI for Supply Chain",
    description: "Streamline logistics, inventory management, and demand forecasting.",
    icon: "📦",
    features: ["Logistics Optimization", "Inventory Management", "Demand Forecasting"],
    demo: false
  },
  {
    title: "AI for Security",
    description: "Advanced threat detection, cybersecurity, and surveillance systems.",
    icon: "🔒",
    features: ["Threat Detection", "Cybersecurity", "Surveillance"],
    demo: false
  },
  {
    title: "AI for Energy",
    description: "Smart grid management, renewable energy optimization, and consumption analytics.",
    icon: "⚡",
    features: ["Grid Management", "Energy Optimization", "Consumption Analytics"],
    demo: false
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our AI Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver cutting-edge AI solutions across industries, helping organizations solve complex business challenges and drive innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{service.icon}</div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <div className="mt-auto">
                {service.demo ? (
                  <Link
                    href="/contact"
                    className="inline-block bg-orange-600 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-700 transition-colors w-full text-center"
                  >
                    Request Demo
                  </Link>
                ) : (
                  <span className="inline-block text-gray-400 px-6 py-2 rounded-full font-medium bg-gray-100 w-full text-center">
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Ready to transform your business with AI?
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
          >
            Let's Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}

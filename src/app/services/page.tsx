import React from "react";
import Link from "next/link";

const services = [
  {
    title: "AI for Finance",
    description: "Transform financial operations with intelligent fraud detection, credit risk assessment, and algorithmic trading solutions.",
    icon: "💰",
    features: ["Fraud Detection", "Credit Risk", "Algorithmic Trading", "Regulatory Compliance"],
    benefits: ["Reduced fraud losses", "Improved risk management", "Enhanced trading performance", "Regulatory compliance"],
    useCases: ["Banks", "Insurance", "Investment Firms", "Fintech"],
    demo: true,
    link: "/ai-finance",
    color: "blue"
  },
  {
    title: "AI for Healthcare",
    description: "Revolutionize patient care with medical image analysis, predictive analytics, and drug discovery AI.",
    icon: "🏥",
    features: ["Medical Image Analysis", "Predictive Analytics", "NLP", "Drug Discovery"],
    benefits: ["Improved diagnostics", "Better patient outcomes", "Reduced costs", "Faster drug development"],
    useCases: ["Hospitals", "Clinics", "Research Labs", "Pharmaceuticals"],
    demo: false,
    link: "/ai-healthcare",
    color: "green"
  },
  {
    title: "AI for Agriculture",
    description: "Optimize farming operations with crop health monitoring, precision agriculture, and climate adaptation.",
    icon: "🌾",
    features: ["Crop Health Monitoring", "Precision Agriculture", "Supply Chain", "Climate Adaptation"],
    benefits: ["Increased yields", "Reduced costs", "Sustainable practices", "Better resource management"],
    useCases: ["Farms", "Cooperatives", "Agribusiness", "Research Institutions"],
    demo: false,
    link: "/ai-agriculture",
    color: "orange"
  },
  {
    title: "AI for Supply Chain",
    description: "Streamline operations with intelligent demand forecasting, inventory optimization, and route planning.",
    icon: "📦",
    features: ["Demand Forecasting", "Inventory Optimization", "Route Planning", "Supplier Risk"],
    benefits: ["Reduced costs", "Improved efficiency", "Better customer service", "Risk mitigation"],
    useCases: ["Manufacturing", "Retail", "Logistics", "E-commerce"],
    demo: false,
    link: "/ai-supply-chain",
    color: "purple"
  },
  {
    title: "AI for Security",
    description: "Enhance cybersecurity with advanced threat detection, behavioral analysis, and incident response.",
    icon: "🔒",
    features: ["Threat Detection", "Cybersecurity", "Surveillance", "Access Control"],
    benefits: ["Better security", "Faster response", "Reduced breaches", "Compliance"],
    useCases: ["Enterprises", "Government", "Financial", "Healthcare"],
    demo: false,
    link: "/ai-security",
    color: "red"
  },
  {
    title: "AI for Energy",
    description: "Optimize energy systems with smart grid management, consumption analytics, and renewable optimization.",
    icon: "⚡",
    features: ["Smart Grid Management", "Consumption Analytics", "Renewable Energy", "Predictive Maintenance"],
    benefits: ["Reduced costs", "Improved efficiency", "Sustainability", "Better reliability"],
    useCases: ["Utilities", "Manufacturing", "Commercial", "Residential"],
    demo: false,
    link: "/ai-energy",
    color: "yellow"
  }
];

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

export default function Services() {
  return (
    <main className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our AI Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions designed specifically for modern business challenges, 
            from precision agriculture to cybersecurity.
          </p>
        </div>
      </section>

      {/* Quick Navigation Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Choose Your Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select your industry to explore tailored AI solutions designed for your specific challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange-200"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-orange-600 font-semibold group-hover:text-orange-700">
                    Learn More →
                  </span>
                  {service.demo && (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Demo Available
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Detailed Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore comprehensive details about each AI solution, including features, benefits, and implementation details.
            </p>
          </div>
          
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
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
                      href={service.link}
                      className="inline-block border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>

                {/* Visual Element */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
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

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Let's discuss how our AI solutions can drive innovation and growth in your organization.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  );
}

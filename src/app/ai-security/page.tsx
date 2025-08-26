import React from "react";
import Link from "next/link";

const solutions = [
  {
    title: "Threat Detection & Prevention",
    description: "Advanced AI algorithms that detect and prevent security threats in real-time with minimal false positives.",
    features: [
      "Behavioral analysis",
      "Pattern recognition",
      "Anomaly detection",
      "Real-time monitoring",
      "Threat intelligence integration",
      "Automated response"
    ],
    benefits: [
      "Detect threats 10x faster than traditional methods",
      "Reduce false positives by 80%",
      "24/7 automated monitoring",
      "Proactive threat prevention"
    ],
    icon: "🛡️"
  },
  {
    title: "Cybersecurity Monitoring",
    description: "Comprehensive network and endpoint security monitoring using AI-powered threat detection and response.",
    features: [
      "Network traffic analysis",
      "Endpoint behavior monitoring",
      "Malware detection",
      "Vulnerability assessment",
      "Incident response automation",
      "Security analytics dashboard"
    ],
    benefits: [
      "Improve threat detection accuracy by 95%",
      "Reduce incident response time by 70%",
      "Automate routine security tasks",
      "Enhance security team productivity"
    ],
    icon: "🔒"
  },
  {
    title: "Surveillance & Recognition",
    description: "AI-powered video analytics for security monitoring, facial recognition, and behavioral analysis.",
    features: [
      "Video analytics",
      "Facial recognition",
      "Behavioral analysis",
      "Object detection",
      "Real-time alerts",
      "Historical analysis"
    ],
    benefits: [
      "Improve security monitoring efficiency by 85%",
      "Reduce false alarms by 75%",
      "24/7 automated surveillance",
      "Enhanced incident investigation"
    ],
    icon: "📹"
  },
  {
    title: "Access Control Systems",
    description: "Intelligent access management using AI for authentication, authorization, and threat detection.",
    features: [
      "Multi-factor authentication",
      "Behavioral biometrics",
      "Risk-based access control",
      "Privilege escalation detection",
      "Session monitoring",
      "Automated access reviews"
    ],
    benefits: [
      "Reduce unauthorized access by 90%",
      "Improve user experience",
      "Automate compliance reporting",
      "Enhance security posture"
    ],
    icon: "🚪"
  }
];

const useCases = [
  {
    title: "Corporate Offices",
    description: "Protect corporate assets and personnel with AI-powered security monitoring and access control.",
    icon: "🏢",
    examples: ["Access control", "Surveillance", "Threat detection", "Incident response"]
  },
  {
    title: "Government Facilities",
    description: "Secure critical infrastructure and sensitive information with advanced AI security solutions.",
    icon: "🏛️",
    examples: ["Perimeter security", "Access management", "Threat intelligence", "Compliance"]
  },
  {
    title: "Financial Institutions",
    description: "Protect financial assets and customer data with AI-powered fraud detection and security monitoring.",
    icon: "🏦",
    examples: ["Fraud detection", "Transaction monitoring", "Access control", "Compliance"]
  },
  {
    title: "Critical Infrastructure",
    description: "Secure power plants, transportation systems, and other critical infrastructure with intelligent security.",
    icon: "⚡",
    examples: ["SCADA security", "Physical security", "Cyber protection", "Incident response"]
  }
];

const implementationSteps = [
  {
    step: "01",
    title: "Security Assessment",
    description: "We analyze your current security infrastructure and identify AI opportunities for maximum protection.",
    duration: "2-3 weeks"
  },
  {
    step: "02",
    title: "System Integration",
    description: "Secure integration with your existing security systems and data sources for comprehensive monitoring.",
    duration: "4-6 weeks"
  },
  {
    step: "03",
    title: "AI Model Development",
    description: "Development of custom AI models trained on your specific security data and threat patterns.",
    duration: "8-10 weeks"
  },
  {
    step: "04",
    title: "Testing & Validation",
    description: "Rigorous testing with real security scenarios to ensure accuracy and reliability.",
    duration: "4-6 weeks"
  },
  {
    step: "05",
    title: "Deployment & Training",
    description: "Production deployment with comprehensive security team training and ongoing support.",
    duration: "2-3 weeks"
  }
];

export default function AISecurity() {
  return (
    <main className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI for Security
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your security infrastructure with advanced AI-powered threat detection, cybersecurity, 
            and surveillance systems that protect your assets 24/7.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors mr-4"
            >
              Get Started
            </a>
            <a
              href="#demo"
              className="inline-block border-2 border-red-600 text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-colors"
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
              Why AI in Security?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern security threats are sophisticated and constantly evolving. AI offers intelligent solutions that 
              provide proactive protection and real-time response capabilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">⚡</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Response</h3>
              <p className="text-gray-600">
                Detect and respond to security threats in milliseconds, preventing damage before it occurs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🧠</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Intelligent Analysis</h3>
              <p className="text-gray-600">
                AI algorithms learn from patterns and adapt to new threats, improving detection accuracy over time.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🔄</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Learning</h3>
              <p className="text-gray-600">
                Systems that continuously improve and adapt to new security challenges and threat patterns.
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
              Our AI Solutions for Security
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed specifically for security challenges, 
              from threat detection to access control.
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
                              <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Security Benefits</h4>
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
                  
                  <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center">
                    <div className="text-6xl mb-4">{solution.icon}</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h4>
                    <p className="text-gray-700">
                      Ready for security deployment
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
              Security Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI solutions are designed to address the specific security challenges and requirements 
              across different industries and environments.
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
                      className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm"
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
              Our security-focused implementation methodology ensures successful AI deployment 
              with minimal disruption to your security operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {implementationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-2">{step.description}</p>
                <span className="text-sm text-red-600 font-medium">{step.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Enhance Your Security with AI?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Let's discuss how our AI solutions can improve threat detection, reduce response times, and create a more secure environment for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule a Consultation
            </a>
            <a
              href="/case-studies"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              View Security Case Studies
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}



import React from "react";
import Link from "next/link";

const solutions = [
  {
    title: "Medical Image Analysis",
    description: "AI-powered diagnostic support for medical imaging with high accuracy and speed across multiple modalities.",
    features: [
      "Multi-modal image processing (X-ray, MRI, CT, Ultrasound)",
      "Disease detection and classification",
      "Automated measurement and quantification",
      "Integration with PACS systems",
      "Real-time analysis and reporting",
      "Continuous learning from new cases"
    ],
    benefits: [
      "Improve diagnostic accuracy by 95%",
      "Reduce diagnosis time by 60%",
      "24/7 availability for radiologists",
      "Standardize reporting across facilities"
    ],
    icon: "🔬"
  },
  {
    title: "Predictive Analytics",
    description: "Advanced AI models that predict patient outcomes, readmission risks, and treatment effectiveness.",
    features: [
      "Patient risk stratification",
      "Readmission prediction models",
      "Treatment outcome forecasting",
      "Population health analytics",
      "Early warning systems",
      "Resource utilization optimization"
    ],
    benefits: [
      "Reduce readmission rates by 30%",
      "Improve patient outcomes by 25%",
      "Optimize resource allocation",
      "Enable proactive care delivery"
    ],
    icon: "📊"
  },
  {
    title: "Natural Language Processing",
    description: "Intelligent processing of medical records, clinical notes, and research literature for better insights.",
    features: [
      "Clinical document processing",
      "Medical entity extraction",
      "Sentiment analysis",
      "Automated coding and billing",
      "Research literature analysis",
      "Multi-language support"
    ],
    benefits: [
      "Reduce documentation time by 40%",
      "Improve coding accuracy by 85%",
      "Faster research insights",
      "Better patient data understanding"
    ],
    icon: "📝"
  },
  {
    title: "Drug Discovery & Development",
    description: "AI-powered drug discovery platforms that accelerate the development of new treatments and therapies.",
    features: [
      "Molecular structure analysis",
      "Drug-target interaction prediction",
      "Clinical trial optimization",
      "Adverse effect prediction",
      "Drug repurposing analysis",
      "Personalized medicine support"
    ],
    benefits: [
      "Accelerate drug development by 50%",
      "Reduce development costs by 40%",
      "Improve success rates",
      "Enable precision medicine"
    ],
    icon: "💊"
  }
];

const useCases = [
  {
    title: "Hospitals & Medical Centers",
    description: "Transform patient care with AI-powered diagnostics, predictive analytics, and operational optimization.",
    icon: "🏥",
    examples: ["Diagnostic support", "Patient monitoring", "Resource optimization", "Quality improvement"]
  },
  {
    title: "Radiology Departments",
    description: "Enhance diagnostic accuracy and efficiency with AI-powered image analysis and reporting.",
    icon: "🔍",
    examples: ["Image analysis", "Report generation", "Quality assurance", "Workflow optimization"]
  },
  {
    title: "Pharmaceutical Companies",
    description: "Accelerate drug development and improve clinical trial success with AI-powered insights.",
    icon: "🏭",
    examples: ["Drug discovery", "Clinical trials", "Safety monitoring", "Market analysis"]
  },
  {
    title: "Research Institutions",
    description: "Advance medical research with AI-powered data analysis and pattern recognition.",
    icon: "🔬",
    examples: ["Data analysis", "Pattern recognition", "Literature review", "Hypothesis generation"]
  }
];

const implementationSteps = [
  {
    step: "01",
    title: "Clinical Assessment",
    description: "We analyze your current healthcare systems and identify AI opportunities for maximum impact.",
    duration: "2-3 weeks"
  },
  {
    step: "02",
    title: "Data Integration",
    description: "Secure integration with your existing healthcare systems and data sources.",
    duration: "4-6 weeks"
  },
  {
    step: "03",
    title: "AI Model Development",
    description: "Development of custom AI models trained on your specific data and use cases.",
    duration: "8-12 weeks"
  },
  {
    step: "04",
    title: "Clinical Validation",
    description: "Rigorous testing and validation with healthcare professionals to ensure accuracy and safety.",
    duration: "4-6 weeks"
  },
  {
    step: "05",
    title: "Deployment & Training",
    description: "Production deployment with comprehensive staff training and ongoing support.",
    duration: "2-3 weeks"
  }
];

export default function AIHealthcare() {
  return (
    <main className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI for Healthcare
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionize patient care with AI-powered diagnostic tools, treatment optimization, 
            and healthcare management systems that improve outcomes and reduce costs.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors mr-4"
            >
              Get Started
            </a>
            <a
              href="#demo"
              className="inline-block border-2 border-green-600 text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-colors"
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
              Why AI in Healthcare?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Healthcare is facing unprecedented challenges. AI offers solutions that improve patient outcomes, 
              reduce costs, and enable healthcare providers to focus on what matters most - patient care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🎯</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Improved Accuracy</h3>
              <p className="text-gray-600">
                AI algorithms can analyze vast amounts of data to provide more accurate diagnoses and treatment recommendations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">⚡</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Faster Diagnosis</h3>
              <p className="text-gray-600">
                Reduce diagnosis time from hours to minutes, enabling faster treatment and better patient outcomes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">💰</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Reduction</h3>
              <p className="text-gray-600">
                Automate routine tasks and optimize resource allocation to reduce healthcare costs while improving quality.
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
              Our AI Solutions for Healthcare
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed specifically for healthcare challenges, 
              with a focus on accuracy, safety, and clinical validation.
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
                              <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Clinical Benefits</h4>
                        <ul className="space-y-2">
                          {solution.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-gray-600">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
                    <div className="text-6xl mb-4">{solution.icon}</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h4>
                    <p className="text-gray-700">
                      Clinically validated and ready for deployment
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
              Healthcare Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI solutions are designed to address the specific challenges and opportunities 
              across different healthcare settings and specialties.
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
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
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
              Our healthcare-focused implementation methodology ensures successful AI deployment 
              with minimal disruption to clinical operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {implementationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-2">{step.description}</p>
                <span className="text-sm text-green-600 font-medium">{step.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Healthcare with AI?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Let'apos;s discuss how our AI solutions can improve patient care, reduce costs, and enhance clinical outcomes in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule a Consultation
            </a>
            <a
              href="/case-studies"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              View Healthcare Case Studies
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

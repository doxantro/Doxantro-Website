import React from "react";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import ServicesSection from "../sections/ServicesSection";
import AIDemoSection from "../sections/AIDemoSection";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Industry Statistics Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              AI Market Statistics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The AI revolution is transforming industries worldwide. Here are some key numbers that demonstrate the impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">$500B+</div>
              <p className="text-gray-600">Global AI Market Value by 2027</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">40%</div>
              <p className="text-gray-600">Average Cost Reduction with AI</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">85%</div>
              <p className="text-gray-600">Companies Planning AI Investment</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">3.5x</div>
              <p className="text-gray-600">Productivity Increase with AI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading organizations across sectors trust our AI solutions to drive innovation and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-2xl">🏦</span>
              </div>
              <p className="text-sm text-gray-600">Finance</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-2xl">🏥</span>
              </div>
              <p className="text-sm text-gray-600">Healthcare</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-2xl">🌾</span>
              </div>
              <p className="text-sm text-gray-600">Agriculture</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-2xl">📦</span>
              </div>
              <p className="text-sm text-gray-600">Supply Chain</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-2xl">🔒</span>
              </div>
              <p className="text-sm text-gray-600">Security</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <p className="text-sm text-gray-600">Energy</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Demo Section */}
      <AIDemoSection />

      {/* Newsletter Signup */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Updated with AI Innovation
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get the latest insights on AI technology, industry trends, and how organizations are 
            transforming their operations with intelligent solutions.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-orange-200 text-sm mt-3">
              Join 10,000+ professionals already subscribed
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

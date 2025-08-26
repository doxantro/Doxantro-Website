import React from "react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Doxantro Systems
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              We are a technology startup that believes in the power of human creativity combined with artificial intelligence to solve the world's most pressing challenges.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our mission is to empower businesses, government agencies, and organizations with intelligent AI solutions that drive innovation, efficiency, and sustainable growth across diverse industries.
            </p>
            
            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">Innovation First</h3>
                  <p className="text-gray-600">Cutting-edge AI technology that transforms business processes</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">Industry Expertise</h3>
                  <p className="text-gray-600">Deep understanding of finance, healthcare, agriculture, and more</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">Proven Results</h3>
                  <p className="text-gray-600">Track record of successful AI implementations and business transformations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl p-8 text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Think, Build and Solve</h3>
              <p className="text-gray-700">
                Our mantra drives everything we do - from concept to deployment
              </p>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-600 rounded-full opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-400 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

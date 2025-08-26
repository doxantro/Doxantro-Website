import React from "react";

export default function About() {
  return (
    <main className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About Doxantro Systems
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a technology startup that believes in the power of human creativity combined with artificial intelligence to solve the world&apos;s most pressing challenges.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to bridge the gap between human ingenuity and artificial intelligence, Doxantro Systems emerged from the belief that technology should serve humanity, not replace it.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our journey began when we recognized that many organizations struggled to harness the full potential of AI due to complex implementations and lack of industry-specific expertise.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we&apos;re proud to be at the forefront of AI innovation, helping businesses across diverse sectors transform their operations and achieve unprecedented growth.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl p-8 text-center">
                <div className="text-6xl mb-4">🌟</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Innovation Meets Purpose</h3>
                <p className="text-gray-700">
                  Every solution we create is designed with a purpose - to make technology work for people, not against them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower organizations with intelligent AI solutions that drive innovation, efficiency, and sustainable growth while maintaining the highest standards of ethical technology development.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading force in democratizing AI technology, making advanced solutions accessible to businesses of all sizes and creating a future where human creativity and artificial intelligence work in perfect harmony.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Doxantro Systems
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">💡</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation First</h3>
              <p className="text-gray-600">
                We constantly push boundaries and explore new possibilities in AI technology to deliver cutting-edge solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🤝</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Client Partnership</h3>
              <p className="text-gray-600">
                We believe in building long-term relationships with our clients, understanding their needs deeply and delivering solutions that exceed expectations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🌱</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainable Growth</h3>
              <p className="text-gray-600">
                We're committed to creating solutions that not only drive immediate results but also ensure long-term success and scalability.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🔒</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ethical AI</h3>
              <p className="text-gray-600">
                We develop AI solutions with responsibility, transparency, and fairness at the core, ensuring our technology benefits society.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🚀</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every project, maintaining the highest quality standards and delivering exceptional results.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🌍</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Impact</h3>
              <p className="text-gray-600">
                We&apos;re committed to creating positive change across industries and communities worldwide through innovative AI solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate professionals behind Doxantro Systems
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-3xl">👨‍💼</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Leadership Team</h3>
              <p className="text-gray-600">
                Experienced executives with decades of combined experience in technology, AI, and business transformation.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-3xl">👩‍💻</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI Engineers</h3>
              <p className="text-gray-600">
                Skilled professionals specializing in machine learning, data science, and AI algorithm development.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-3xl">👨‍🔬</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Domain Experts</h3>
              <p className="text-gray-600">
                Industry specialists with deep knowledge of finance, healthcare, agriculture, and other sectors we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Let&apos;s discuss how our AI solutions can transform your business
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </main>
  );
} 
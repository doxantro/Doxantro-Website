import React from "react";
import Link from "next/link";

const blogPosts = [
  {
    title: "The Future of AI in Financial Services: Trends to Watch in 2024",
    excerpt: "Discover how artificial intelligence is revolutionizing the financial industry, from fraud detection to personalized banking experiences.",
    category: "AI Trends",
    author: "Dr. Sarah Chen",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "💰",
    featured: true
  },
  {
    title: "How AI is Transforming Healthcare: From Diagnosis to Treatment",
    excerpt: "Explore the latest developments in AI-powered healthcare solutions and their impact on patient care and medical outcomes.",
    category: "Healthcare AI",
    author: "Dr. Michael Rodriguez",
    date: "March 10, 2024",
    readTime: "6 min read",
    image: "🏥",
    featured: false
  },
  {
    title: "Sustainable Agriculture Through AI: Feeding the World Smarter",
    excerpt: "Learn how artificial intelligence is helping farmers optimize crop yields while reducing environmental impact and resource consumption.",
    category: "Agriculture Tech",
    author: "Emma Thompson",
    date: "March 5, 2024",
    readTime: "7 min read",
    image: "🌾",
    featured: false
  },
  {
    title: "Building Ethical AI: Principles and Best Practices",
    excerpt: "Understanding the importance of ethical AI development and how organizations can implement responsible AI practices.",
    category: "AI Ethics",
    author: "Prof. James Wilson",
    date: "February 28, 2024",
    readTime: "10 min read",
    image: "🤖",
    featured: false
  },
  {
    title: "AI-Powered Supply Chain Optimization: A Game Changer for Manufacturing",
    excerpt: "Discover how AI is revolutionizing supply chain management, reducing costs, and improving efficiency across manufacturing industries.",
    category: "Supply Chain",
    author: "Lisa Chang",
    date: "February 20, 2024",
    readTime: "9 min read",
    image: "📦",
    featured: false
  },
  {
    title: "Machine Learning vs. Traditional Programming: When to Use What",
    excerpt: "A comprehensive guide to understanding the differences between machine learning and traditional programming approaches.",
    category: "Technology",
    author: "Alex Kumar",
    date: "February 15, 2024",
    readTime: "12 min read",
    image: "💻",
    featured: false
  }
];

const categories = [
  "All Posts",
  "AI Trends",
  "Healthcare AI",
  "Agriculture Tech",
  "AI Ethics",
  "Supply Chain",
  "Technology"
];

export default function Blog() {
  return (
    <main className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Insights & Updates
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the curve with our latest insights on AI technology, industry trends, and innovative solutions that are shaping the future.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Featured Article
            </h2>
          </div>

          {blogPosts.filter(post => post.featured).map((post, index) => (
            <div key={index} className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {post.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-semibold">
                        {post.author.split('apos; 'apos;).map(n => n[0]).join('apos;'apos;)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{post.author}</p>
                      <p className="text-gray-500 text-sm">{post.date}</p>
                    </div>
                  </div>
                  
                  <Link
                    href="#"
                    className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors"
                  >
                    Read Full Article
                  </Link>
                </div>
                
                <div className="text-center">
                  <div className="text-8xl mb-6">{post.image}</div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Key Takeaways</h4>
                    <ul className="text-left text-gray-600 space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                        Industry insights and trends
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                        Practical implementation strategies
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                        Future outlook and predictions
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  index === 0 
                    ? 'apos;bg-orange-600 text-white'apos; 
                    : 'apos;bg-white text-gray-700 hover:bg-orange-100 hover:text-orange-700'apos;
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our collection of insights, tutorials, and industry analysis to stay informed about the latest in AI technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <article key={index} className="bg-white rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  
                  <div className="text-4xl mb-4">{post.image}</div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-semibold text-sm">
                          {post.author.split('apos; 'apos;).map(n => n[0]).join('apos;'apos;)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{post.author}</p>
                        <p className="text-gray-500 text-xs">{post.date}</p>
                      </div>
                    </div>
                    
                    <Link
                      href="#"
                      className="text-orange-600 hover:text-orange-700 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Stay Updated with AI Insights
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest articles, industry updates, and AI trends delivered directly to your inbox.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Have an AI Topic to Discuss?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            We'apos;re always looking for new perspectives and insights. Let'apos;s collaborate on content that matters to the AI community.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
} 
import React from "react";
import Link from "next/link";

const featuredArticle = {
  title: "The Future of AI in Business: 2024 Trends and Predictions",
  excerpt: "Discover how artificial intelligence is reshaping industries and what businesses need to know to stay competitive in the AI revolution.",
  author: "Doxantro Team",
  date: "August 15, 2024",
  readTime: "8 min read",
  category: "AI Trends",
  image: "🚀"
};

const blogPosts = [
  {
    title: "Implementing AI Fraud Detection: A Complete Guide",
    excerpt: "Step-by-step guide to implementing AI-powered fraud detection systems in financial institutions.",
    author: "Sarah Johnson",
    date: "August 12, 2024",
    readTime: "12 min read",
    category: "Implementation",
    image: "💰"
  },
  {
    title: "AI in Healthcare: Transforming Patient Care",
    excerpt: "How AI is revolutionizing healthcare delivery and improving patient outcomes across the industry.",
    author: "Dr. Michael Chen",
    date: "August 10, 2024",
    readTime: "10 min read",
    category: "Healthcare",
    image: "🏥"
  },
  {
    title: "Precision Agriculture: AI Solutions for Modern Farming",
    excerpt: "Exploring the latest AI technologies that are optimizing agricultural operations and increasing yields.",
    author: "Emma Rodriguez",
    date: "August 8, 2024",
    readTime: "15 min read",
    category: "Agriculture",
    image: "🌾"
  },
  {
    title: "Supply Chain Optimization with Machine Learning",
    excerpt: "How machine learning algorithms are streamlining supply chain operations and reducing costs.",
    author: "David Kim",
    date: "August 5, 2024",
    readTime: "11 min read",
    category: "Supply Chain",
    image: "📦"
  },
  {
    title: "Cybersecurity in the AI Era: Threats and Solutions",
    excerpt: "Understanding the evolving cybersecurity landscape and how AI is both a threat and a solution.",
    author: "Lisa Thompson",
    date: "August 3, 2024",
    readTime: "9 min read",
    category: "Security",
    image: "🔒"
  },
  {
    title: "Energy Management: AI for Sustainable Operations",
    excerpt: "Leveraging AI to optimize energy consumption and create more sustainable business operations.",
    author: "Robert Wilson",
    date: "August 1, 2024",
    readTime: "13 min read",
    category: "Energy",
    image: "⚡"
  }
];

const categories = ["All", "AI Trends", "Implementation", "Healthcare", "Agriculture", "Supply Chain", "Security", "Energy"];

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
            Stay informed about the latest developments in AI technology, industry trends, 
            and best practices for implementing intelligent solutions.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Featured Article
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredArticle.category}
                  </span>
                  <span className="text-gray-500 text-sm">{featuredArticle.readTime}</span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {featuredArticle.title}
                </h3>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-semibold">
                      {featuredArticle.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{featuredArticle.author}</p>
                    <p className="text-gray-500 text-sm">{featuredArticle.date}</p>
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
                <div className="text-8xl mb-6">{featuredArticle.image}</div>
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
                    ? 'bg-orange-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-orange-100 hover:text-orange-700'
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
            {blogPosts.map((post, index) => (
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
                          {post.author.split(' ').map(n => n[0]).join('')}
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
          
          <div className="text-center mt-12">
            <Link
              href="#"
              className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Updated with AI Insights
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get the latest AI trends, implementation guides, and industry insights delivered to your inbox.
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
              Join 5,000+ professionals already receiving our insights
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Have a Story to Share?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're always looking for industry experts and thought leaders to contribute to our blog.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors"
          >
            Submit Your Article
          </Link>
        </div>
      </section>
    </main>
  );
}




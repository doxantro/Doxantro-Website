'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Fixed for better visibility */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <Image 
                src="/dox1.jpg" 
                alt="Doxantro Systems Logo" 
                width={50} 
                height={50} 
                className="rounded-lg object-cover"
                priority
                onError={(e) => {
                  console.error('Logo failed to load:', e);
                }}
              />
            </div>
            <span className="text-xl font-bold text-gray-900">Doxantro Systems</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-orange-600 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-700 transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-orange-600"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-gray-700 hover:text-orange-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-orange-600 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-700 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 
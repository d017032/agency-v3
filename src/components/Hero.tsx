import React from 'react';
import data from '../data/business-data.json';

export default function Hero() {
  // Logic to pull CTA based on site type
  const ctaText = data.cta[data.siteType as keyof typeof data.cta];

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Modern Solutions for <span className="text-blue-600">{data.businessName}</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We build high-performance, AI-ready static sites tailored for {data.siteType} businesses. 
            Speed, SEO, and scalability—delivered in hours.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-full bg-black px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-all"
            >
              {ctaText}
            </a>
            <a href="/services" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Visual Decorator */}
      <div className="absolute top-0 -z-10 h-full w-full bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,102,255,0.05)_0,rgba(255,255,255,0)_100%)]" />
    </section>
  );
}
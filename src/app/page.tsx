"use client";

import React, { useEffect, useRef } from 'react';
import Button from './components/ui/Button';
import Section from './components/ui/Section';

export default function HomePage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="pt-16 overflow-hidden">
      
      {/* Hero Section - Cleaner Design */}
      <Section background="gradient" padding="xl" className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary opacity-90"></div>
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          {/* Main Hero Content */}
          <div className="mb-8 animate-[fadeIn_1.2s_ease-out]">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
              Building
              <span className="block text-secondary animate-[slideInRight_1.2s_ease-out_0.3s_both]">
                Excellence
              </span>
            </h1>
            <div className="h-1 w-24 bg-secondary mx-auto mb-8 animate-[scaleX_0.8s_ease-out_0.6s_both] origin-left"></div>
          </div>

          {/* Service Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-[slideUp_1s_ease-out_0.9s_both]">
            {[
              "Interior Design", "MEP Works", "Facility Management", 
              "Civil Construction", "Turnkey Solutions"
            ].map((service, index) => (
              <span 
                key={service}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                {service}
              </span>
            ))}
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed animate-[slideUp_1s_ease-out_1.2s_both]">
            Dynamic and dedicated contracting company specializing in comprehensive 
            construction and facility management solutions across Saudi Arabia
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[slideUp_1s_ease-out_1.5s_both]">
            <Button 
              href="/projects" 
              variant="secondary" 
              size="lg"
              className="group hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              <span className="flex items-center">
                Explore Projects
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Button>
            <Button 
              href="/contact" 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary group hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              <span className="flex items-center">
                Get Quote
                <svg className="ml-2 w-5 h-5 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </span>
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-white/20 rounded-lg animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-secondary/30 rounded-full animate-[float_8s_ease-in-out_infinite_reverse]"></div>
      </Section>

      {/* Company Introduction */}
      <Section background="white" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="animate-on-scroll opacity-0 translate-x-[-50px] transition-all duration-1000 ease-out order-2 lg:order-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight px-4 sm:px-0 text-center lg:text-left">
              Building Excellence Since Our Launch
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-600 mb-4 sm:mb-6 leading-relaxed px-4 sm:px-0 text-center lg:text-left">
              Vel Amrith Company Limited stands as a dynamic and dedicated contracting company, 
              specializing in comprehensive Civil, Interior, MEP and Facility Management solutions. 
              As a sister company of Sim Arabia Co. Ltd., we bring vast experience and professional 
              management to every project.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8 px-4 sm:px-0">
              {[
                "ISO 9001:2015 Certified",
                "ISO 14001:2015 Certified", 
                "ISO 45001:2018 Certified",
                "Professional Management"
              ].map((cert, index) => (
                <div 
                  key={cert}
                  className="flex items-center space-x-2 group hover:scale-105 transition-transform duration-300 p-2 rounded-lg hover:bg-neutral-50 justify-center lg:justify-start"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-accent rounded-full group-hover:scale-125 transition-transform duration-300 flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm md:text-base text-neutral-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>
            <div className="px-4 sm:px-0 text-center lg:text-left">
              <Button href="/about" className="group hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                <span className="flex items-center justify-center">
                  Learn More About Us
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Button>
            </div>
          </div>
          <div className="animate-on-scroll opacity-0 translate-x-[50px] transition-all duration-1000 ease-out order-1 lg:order-2">
            <div className="relative group w-full max-w-sm sm:max-w-md mx-auto px-4 sm:px-0">
              <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-lg sm:rounded-xl flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500 relative w-full shadow-sm hover:shadow-md">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
                <div className="relative z-10 text-center p-3 sm:p-4 md:p-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:rotate-12 transition-transform duration-500">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-neutral-700 mb-2">Excellence in Construction</h3>
                  <p className="text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed">Building the future with innovation and quality</p>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 md:-bottom-4 md:-right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-lg group-hover:rotate-12 transition-transform duration-500"></div>
              <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-secondary/10 rounded-full group-hover:-rotate-12 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Overview */}
      <Section background="neutral" padding="lg">
        <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-[30px] transition-all duration-1000 ease-out">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            From interior design to facility management, we provide comprehensive solutions 
            for all your construction and maintenance needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Interior Design & Construction",
              description: "Complete interior fit-out solutions with modern design and quality construction.",
              icon: "🏗️",
              color: "from-blue-500 to-blue-600"
            },
            {
              title: "MEP Services",
              description: "Execution of MEP, Firefighting, Fire Alarm, and CCTV works with expert precision.",
              icon: "⚡",
              color: "from-yellow-500 to-orange-500"
            },
            {
              title: "Facility Management",
              description: "Comprehensive maintenance including AC, plumbing, electrical, and handyman services.",
              icon: "🔧",
              color: "from-green-500 to-green-600"
            },
            {
              title: "Civil Works",
              description: "General contracting for buildings including construction, demolition, and renovation.",
              icon: "🏢",
              color: "from-gray-600 to-gray-700"
            },
            {
              title: "FF & FA Works",
              description: "Furniture, fixtures, and equipment installation for complete project delivery.",
              icon: "🪑",
              color: "from-purple-500 to-purple-600"
            },
            {
              title: "Joinery & Fabrication",
              description: "Custom joinery, decoration, and gypsum works with attention to detail.",
              icon: "🔨",
              color: "from-amber-500 to-amber-600"
            }
          ].map((service, index) => (
            <div 
              key={index}
              className="animate-on-scroll opacity-0 translate-y-[30px] transition-all duration-1000 ease-out bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {service.title}
              </h3>
              <p className="text-neutral-600 mb-4">
                {service.description}
              </p>
              <Button href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}`} variant="ghost" size="sm" className="group-hover:scale-105 transition-transform duration-300">
                <span className="flex items-center">
                  Learn More
                  <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured Projects */}
      <Section background="white" padding="lg">
        <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-[30px] transition-all duration-1000 ease-out">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Showcasing our expertise across various industries and project types.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            { title: "Business Centers", category: "Commercial", image: "business-center-placeholder" },
            { title: "Coffee Shops & Restaurants", category: "Hospitality", image: "restaurant-placeholder" },
            { title: "Hyper Markets", category: "Retail", image: "hypermarket-placeholder" },
            { title: "Car Service & Showrooms", category: "Automotive", image: "showroom-placeholder" },
            { title: "Corporate Offices", category: "Corporate", image: "office-placeholder" },
            { title: "Government Buildings", category: "Government", image: "government-placeholder" }
          ].map((project, index) => (
            <div 
              key={index}
              className="animate-on-scroll opacity-0 translate-y-[30px] transition-all duration-1000 ease-out group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-500"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="bg-neutral-200 h-64 flex items-center justify-center relative overflow-hidden">
                <span className="text-neutral-500">{project.image}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-sm text-white/80 mb-1">{project.category}</div>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center animate-on-scroll opacity-0 translate-y-[30px] transition-all duration-1000 ease-out">
          <Button href="/projects" size="lg" className="hover:scale-105 transition-all duration-300">
            <span className="flex items-center">
              View All Projects
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Button>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="neutral" padding="lg">
        <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-[30px] transition-all duration-1000 ease-out">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Why Choose Vel Amrith?
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Our commitment to excellence, professional management, and client-centric approach 
            sets us apart in the construction industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Vast Experience", description: "Years of expertise in construction and facility management across diverse industries.", icon: "📈" },
            { title: "Professional Management", description: "Systematic approach with experienced management ensuring project success.", icon: "👥" },
            { title: "Quality Assurance", description: "ISO certified processes ensuring the highest standards in every project.", icon: "✅" },
            { title: "Skilled Team", description: "Qualified engineers, staff, and technicians ensuring top-notch results.", icon: "🎯" },
            { title: "Timely Completion", description: "Commitment to deadlines with efficient project management and execution.", icon: "⏰" },
            { title: "Client-Centric Approach", description: "Focused on understanding and exceeding client expectations consistently.", icon: "🤝" }
          ].map((advantage, index) => (
            <div 
              key={index}
              className="animate-on-scroll opacity-0 translate-y-[30px] transition-all duration-1000 ease-out text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md hover:scale-105 hover:-translate-y-1 transition-all duration-300 group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">{advantage.icon}</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {advantage.title}
              </h3>
              <p className="text-neutral-600">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Client Logos */}
      <Section background="white" padding="md">
        <div className="text-center mb-8 animate-on-scroll opacity-0 translate-y-[30px] transition-all duration-1000 ease-out">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-neutral-600">
            We&apos;re proud to work with some of the most respected companies in the region.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {["COSTA", "Kadien Investment", "HyperPanda", "Ford", "Siemens", "Almarai"].map((client, index) => (
            <div 
              key={index}
              className="animate-on-scroll opacity-0 translate-y-[20px] transition-all duration-1000 ease-out text-center p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 hover:scale-105 hover:shadow-md transition-all duration-300 group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <span className="text-neutral-600 font-medium group-hover:text-primary transition-colors duration-300">{client}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="primary" padding="lg">
        <div className="text-center max-w-4xl mx-auto animate-on-scroll opacity-0 translate-y-[30px] transition-all duration-1000 ease-out">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get in touch with our team for a consultation and discover how we can bring 
            your vision to life with our comprehensive construction and facility management solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg" className="hover:scale-105 transition-all duration-300 group">
              <span className="flex items-center">
                Get a Free Quote
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </span>
            </Button>
            <Button href="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300 group">
              <span className="flex items-center">
                Explore Services
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

"use client";

import React from 'react';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';

export default function AnimatedAboutPage() {
  React.useEffect(() => {
    const observer = new window.IntersectionObserver(
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
    animateElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-16">
      
      {/* Hero Section */}
      <Section background="gradient" padding="lg" className="text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary opacity-90"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white animate-[fadeIn_1.2s_ease-out]">
            About Vel Amrith
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 animate-[slideUp_1s_ease-out_0.3s_both]">
            Dynamic and dedicated contracting company building excellence across Saudi Arabia
          </p>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 border-2 border-white/20 rounded-lg animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 border-2 border-secondary/30 rounded-full animate-[float_8s_ease-in-out_infinite_reverse]"></div>
      </Section>

      {/* Company Story */}
      <Section background="white" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="animate-on-scroll opacity-0 translate-x-[-50px] transition-all duration-1000 ease-out order-2 lg:order-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight px-4 sm:px-0 text-center lg:text-left">
              Our Story
            </h2>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg lg:text-xl text-neutral-600 leading-relaxed px-4 sm:px-0 text-center lg:text-left">
              <p>
                Vel Amrith Company Limited was established as a dynamic and dedicated contracting company, 
                specializing in comprehensive construction and facility management solutions. Our journey 
                began with a vision to deliver excellence in every project we undertake.
              </p>
              <p>
                As a sister company of Sim Arabia Co. Ltd., we leverage vast experience and professional 
                management practices that have been refined over years of successful operations. This 
                partnership enables us to bring unparalleled expertise to the Saudi Arabian construction market.
              </p>
              <p>
                Our commitment to quality, innovation, and client satisfaction has made us a trusted partner 
                for businesses across various industries, from commercial spaces to specialized facilities.
              </p>
            </div>
          </div>
          <div className="animate-on-scroll opacity-0 translate-x-[50px] transition-all duration-1000 ease-out order-1 lg:order-2">
            <div className="relative group max-w-sm sm:max-w-md mx-auto px-4 sm:px-0">
              <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-lg sm:rounded-xl flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500 relative shadow-sm hover:shadow-md">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
                <div className="relative z-10 text-center p-3 sm:p-4 md:p-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:rotate-12 transition-transform duration-500">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-neutral-700 mb-2">Global Standards</h3>
                  <p className="text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed">International expertise, local excellence</p>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 md:-bottom-4 md:-right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-lg group-hover:rotate-12 transition-transform duration-500"></div>
              <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-secondary/10 rounded-full group-hover:-rotate-12 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section background="neutral" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Mission */}
          <div className="animate-on-scroll opacity-0 translate-y-[30px] transition-all duration-1000 ease-out bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center mr-3 sm:mr-4 group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-900">Our Mission</h2>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg text-neutral-600">
                To provide exceptional construction and facility management services that exceed our 
                clients&apos; expectations while maintaining the highest standards of quality, safety, and 
                environmental responsibility.
              </p>
              <p className="text-base sm:text-lg text-neutral-600">
                We are committed to building lasting partnerships with our clients by delivering 
                innovative solutions, maintaining transparency, and ensuring every project is completed 
                on time and within budget.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="animate-on-scroll opacity-0 translate-y-[30px] transition-all duration-1000 ease-out bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300" style={{ transitionDelay: '0.2s' }}>
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-lg flex items-center justify-center mr-3 sm:mr-4 group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-900">Our Vision</h2>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg text-neutral-600">
                To be the leading construction and facility management company in Saudi Arabia, 
                recognized for our innovation, reliability, and contribution to the Kingdom&apos;s 
                development and Vision 2030.
              </p>
              <p className="text-base sm:text-lg text-neutral-600">
                We envision a future where our sustainable construction practices and cutting-edge 
                solutions contribute to building smarter, more efficient, and environmentally 
                responsible infrastructure.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="white" padding="lg">
        <div className="text-center mb-8 sm:mb-12 animate-on-scroll opacity-0 translate-y-[30px] transition-all duration-1000 ease-out">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Why Choose Vel Amrith?
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-3xl mx-auto">
            Our unique combination of experience, expertise, and commitment sets us apart 
            in the construction and facility management industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Vast Experience",
              description: "Years of proven expertise in construction and facility management across diverse industries and project scales.",
              icon: "📈",
              color: "bg-blue-50 text-blue-600"
            },
            {
              title: "Professional Management",
              description: "Systematic approach with experienced management team ensuring every project is executed with precision and efficiency.",
              icon: "👥",
              color: "bg-green-50 text-green-600"
            },
            {
              title: "Quality Assurance",
              description: "ISO certified processes and rigorous quality control measures ensuring the highest standards in every project.",
              icon: "✅",
              color: "bg-purple-50 text-purple-600"
            },
            {
              title: "Skilled Team",
              description: "Qualified engineers, staff, and technicians with extensive experience ensuring top-notch results and innovation.",
              icon: "🎯",
              color: "bg-orange-50 text-orange-600"
            },
            {
              title: "Timely Completion",
              description: "Strong commitment to deadlines with efficient project management and resource allocation ensuring on-time delivery.",
              icon: "⏰",
              color: "bg-red-50 text-red-600"
            },
            {
              title: "Client-Centric Approach",
              description: "Focused on understanding and exceeding client expectations with personalized service and transparent communication.",
              icon: "🤝",
              color: "bg-indigo-50 text-indigo-600"
            }
          ].map((advantage, index) => (
            <div 
              key={index} 
              className="animate-on-scroll opacity-0 translate-y-[30px] transition-all duration-1000 ease-out bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-neutral-100 group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg ${advantage.color} flex items-center justify-center mb-3 sm:mb-4 text-xl sm:text-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                {advantage.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-2 sm:mb-3">
                {advantage.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-600">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Leadership Team */}
      <Section background="neutral" padding="lg">
        <div className="text-center mb-8 sm:mb-12 animate-on-scroll opacity-0 translate-y-[30px] transition-all duration-1000 ease-out">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Our Leadership Team
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-3xl mx-auto">
            Meet the experienced professionals who guide Vel Amrith Company Limited 
            towards excellence and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              name: "Leadership Team Member",
              position: "Chief Executive Officer",
              description: "Leading the company with vision and strategic direction.",
              image: "ceo-placeholder"
            },
            {
              name: "Leadership Team Member",
              position: "Chief Operations Officer",
              description: "Overseeing operational excellence and project delivery.",
              image: "coo-placeholder"
            },
            {
              name: "Leadership Team Member",
              position: "Chief Technical Officer",
              description: "Driving innovation and technical excellence.",
              image: "cto-placeholder"
            }
          ].map((member, index) => (
            <div 
              key={index} 
              className="animate-on-scroll opacity-0 translate-y-[30px] transition-all duration-1000 ease-out bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center group"
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-neutral-200 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
                <div className="relative z-10 text-center">
                  <svg className="w-8 h-8 sm:w-12 sm:h-12 text-primary mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-xs text-neutral-500">Professional</span>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                {member.position}
              </p>
              <p className="text-neutral-600 text-sm sm:text-base">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Certifications & Partnerships */}
      <Section background="white" padding="lg">
        <div className="text-center mb-8 sm:mb-12 animate-on-scroll opacity-0 translate-y-[30px] transition-all duration-1000 ease-out">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 leading-tight px-4 sm:px-0">
            Certifications & Partnerships
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Our commitment to quality and excellence is validated by international 
            certifications and strategic partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="animate-on-scroll opacity-0 translate-x-[-50px] transition-all duration-1000 ease-out order-2 lg:order-1">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-900 mb-4 sm:mb-6 px-4 sm:px-0 text-center lg:text-left">ISO Certifications</h3>
            <div className="space-y-3 sm:space-y-4 px-4 sm:px-0">
              {[
                {
                  title: "ISO 9001:2015",
                  description: "Quality Management Systems - Ensuring consistent quality in all our processes and services.",
                  icon: "✅"
                },
                {
                  title: "ISO 14001:2015", 
                  description: "Environmental Management Systems - Committed to environmentally responsible practices.",
                  icon: "🌱"
                },
                {
                  title: "ISO 45001:2018",
                  description: "Occupational Health & Safety Management - Prioritizing the safety and wellbeing of our workforce.",
                  icon: "🛡️"
                }
              ].map((cert, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3 p-3 sm:p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 hover:shadow-md transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-xl sm:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{cert.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-neutral-900 mb-1 sm:mb-2 text-sm sm:text-base md:text-lg">
                      {cert.title}
                    </h4>
                    <p className="text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 px-4 sm:px-0">
              <h4 className="text-base sm:text-lg md:text-xl font-semibold text-neutral-900 mb-3 sm:mb-4 text-center lg:text-left">Strategic Partnership</h4>
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-3 sm:p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3 justify-center lg:justify-start">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h5 className="font-semibold text-neutral-900 text-sm sm:text-base md:text-lg">Sister Company of Sim Arabia Co. Ltd.</h5>
                </div>
                <p className="text-neutral-700 text-xs sm:text-sm md:text-base leading-relaxed text-center lg:text-left">
                  Our strategic partnership with Sim Arabia Co. Ltd. brings decades of combined 
                  experience and established industry relationships, enabling us to deliver 
                  exceptional results with proven expertise and resources.
                </p>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 translate-x-[50px] transition-all duration-1000 ease-out order-1 lg:order-2">
            <div className="relative group max-w-sm sm:max-w-md mx-auto px-4 sm:px-0">
              <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-lg sm:rounded-xl flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500 relative shadow-sm hover:shadow-md">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
                <div className="relative z-10 text-center p-3 sm:p-4 md:p-6">
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                    {[
                      { icon: "🏆", label: "Quality" },
                      { icon: "🌍", label: "Environment" },
                      { icon: "🛡️", label: "Safety" },
                      { icon: "🤝", label: "Partnership" }
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className="text-center p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-lg group-hover:scale-110 transition-transform duration-300 hover:bg-white/30"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">{item.icon}</div>
                        <span className="text-xs sm:text-sm font-medium text-neutral-700">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 md:-bottom-4 md:-right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-accent/10 rounded-lg group-hover:rotate-12 transition-transform duration-500"></div>
              <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-secondary/10 rounded-full group-hover:-rotate-12 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="primary" padding="lg">
        <div className="text-center max-w-4xl mx-auto animate-on-scroll opacity-0 translate-y-[30px] transition-all duration-1000 ease-out">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
            Ready to Partner with Excellence?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8">
            Let&apos;s discuss how Vel Amrith Company Limited can bring our expertise, 
            quality, and innovation to your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg" className="hover:scale-105 transition-all duration-300 group">
              <span className="flex items-center">
                Start Your Project
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Button>
            <Button href="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300 group">
              <span className="flex items-center">
                Explore Our Services
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
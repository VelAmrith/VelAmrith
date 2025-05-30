"use client";

import React from 'react';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';

export default function AnimatedServicesPage() {
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

  const services = [
    {
      slug: "interior-design",
      title: "Interior Design & Construction",
      shortDesc: "Complete interior fit-out solutions with modern design and quality construction.",
      fullDesc: "Transform your space with our comprehensive interior design and construction services. From concept to completion, we deliver stunning interiors that blend functionality with aesthetic appeal.",
      features: [
        "Space Planning & Design",
        "3D Visualization & Rendering", 
        "Material Selection & Sourcing",
        "Project Management",
        "Quality Construction",
        "Turnkey Solutions"
      ],
      icon: "🏗️",
      color: "from-blue-500 to-blue-600"
    },
    {
      slug: "mep-works",
      title: "MEP Services",
      shortDesc: "Execution of MEP, Firefighting, Fire Alarm, and CCTV works with expert precision.",
      fullDesc: "Our mechanical, electrical, and plumbing services ensure your building's infrastructure operates efficiently and safely with cutting-edge technology and expert installation.",
      features: [
        "HVAC Systems",
        "Electrical Installations", 
        "Plumbing Systems",
        "Fire Fighting Systems",
        "Fire Alarm Systems",
        "CCTV & Security Systems"
      ],
      icon: "⚡",
      color: "from-yellow-500 to-orange-500"
    },
    {
      slug: "facility-management",
      title: "Facility Management & Maintenance",
      shortDesc: "Comprehensive maintenance including AC, plumbing, electrical, and handyman services.",
      fullDesc: "Keep your facility running smoothly with our comprehensive facility management services. We provide ongoing maintenance and support to ensure optimal performance.",
      features: [
        "Air Conditioning Maintenance",
        "Plumbing Services", 
        "Electrical Services",
        "Handyman Services",
        "Preventive Maintenance",
        "Emergency Response"
      ],
      icon: "🔧",
      color: "from-green-500 to-green-600"
    },
    {
      slug: "civil-works",
      title: "Civil Works",
      shortDesc: "General contracting for buildings including construction, demolition, and renovation.",
      fullDesc: "From foundation to finish, our civil works services cover all aspects of construction, renovation, and demolition with attention to quality and safety.",
      features: [
        "New Construction",
        "Renovation & Remodeling", 
        "Demolition Services",
        "Structural Works",
        "Site Preparation",
        "Quality Assurance"
      ],
      icon: "🏢",
      color: "from-gray-600 to-gray-700"
    },
    {
      slug: "ff-fa-works",
      title: "FF & FA Works",
      shortDesc: "Furniture, fixtures, and equipment installation for complete project delivery.",
      fullDesc: "Complete your project with our furniture, fixtures, and fittings services. We handle everything from procurement to installation for a seamless finish.",
      features: [
        "Furniture Procurement",
        "Fixture Installation", 
        "Equipment Setup",
        "Custom Solutions",
        "Project Coordination",
        "Quality Control"
      ],
      icon: "🪑",
      color: "from-purple-500 to-purple-600"
    },
    {
      slug: "joinery",
      title: "Joinery & Fabrication",
      shortDesc: "Custom joinery, decoration, and gypsum works with attention to detail.",
      fullDesc: "Enhance your space with our expert joinery and fabrication services. We create custom woodwork and decorative elements that add character and functionality.",
      features: [
        "Custom Joinery",
        "Gypsum Works", 
        "Decorative Elements",
        "Built-in Solutions",
        "Finishing Works",
        "Detail Craftsmanship"
      ],
      icon: "🔨",
      color: "from-amber-500 to-amber-600"
    },
    {
      slug: "project-management",
      title: "Project Management & Coordination",
      shortDesc: "Professional project management ensuring timely delivery and quality execution.",
      fullDesc: "Our experienced project management team coordinates all aspects of your project, ensuring seamless execution, timely delivery, and budget compliance.",
      features: [
        "Project Planning",
        "Resource Management", 
        "Timeline Coordination",
        "Quality Control",
        "Budget Management",
        "Stakeholder Communication"
      ],
      icon: "📋",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      slug: "renovation-remodeling",
      title: "Renovation & Remodeling",
      shortDesc: "Transform existing spaces with our comprehensive renovation and remodeling services.",
      fullDesc: "Breathe new life into your existing spaces with our renovation and remodeling expertise. We handle everything from minor updates to major transformations.",
      features: [
        "Space Redesign",
        "Structural Modifications", 
        "System Upgrades",
        "Interior Renovation",
        "Exterior Improvements",
        "Code Compliance"
      ],
      icon: "🔄",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <div className="pt-16">
      
      {/* Hero Section */}
      <Section background="gradient" padding="lg" className="text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary opacity-90"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white animate-[fadeIn_1.2s_ease-out]">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 animate-[slideUp_1s_ease-out_0.3s_both]">
            Comprehensive construction and facility management solutions tailored to your needs
          </p>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 border-2 border-white/20 rounded-lg animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 border-2 border-secondary/30 rounded-full animate-[float_8s_ease-in-out_infinite_reverse]"></div>
      </Section>

      {/* Services Overview */}
      <Section background="white" padding="lg">
        <div className="text-center mb-8 sm:mb-12 animate-on-scroll opacity-0 translate-y-[30px] transition-all duration-1000 ease-out">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Complete Construction Solutions
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-3xl mx-auto">
            From initial design to ongoing maintenance, we provide end-to-end services 
            that ensure your project&apos;s success at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="animate-on-scroll opacity-0 translate-y-[30px] transition-all duration-1000 ease-out bg-white border border-neutral-200 rounded-lg shadow-md hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="text-2xl sm:text-3xl mr-3 sm:mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-neutral-600 mb-4 sm:mb-6">
                  {service.shortDesc}
                </p>
                <div className="space-y-2 mb-4 sm:mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs sm:text-sm text-neutral-600">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-xs sm:text-sm text-neutral-500 italic">
                      +{service.features.length - 3} more services
                    </div>
                  )}
                </div>
                <Button
                  href="#"
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Choose Our Services */}
      <Section background="neutral" padding="lg">
        <div className="text-center mb-8 sm:mb-12 animate-on-scroll opacity-0 translate-y-[30px] transition-all duration-1000 ease-out">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Why Choose Our Services?
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-3xl mx-auto">
            Our comprehensive approach and commitment to excellence ensure your project 
            exceeds expectations at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              title: "Expert Team",
              description: "Skilled professionals with years of industry experience",
              icon: "👥",
              color: "bg-blue-50 text-blue-600"
            },
            {
              title: "Quality Materials",
              description: "Premium materials sourced from trusted suppliers",
              icon: "⭐",
              color: "bg-green-50 text-green-600"
            },
            {
              title: "Timely Delivery",
              description: "Projects completed on schedule with attention to detail",
              icon: "⏰",
              color: "bg-orange-50 text-orange-600"
            },
            {
              title: "Comprehensive Support",
              description: "End-to-end service from planning to maintenance",
              icon: "🛠️",
              color: "bg-purple-50 text-purple-600"
            }
          ].map((benefit, index) => (
            <div 
              key={index}
              className="animate-on-scroll opacity-0 translate-y-[30px] transition-all duration-1000 ease-out bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 ${benefit.color} rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 text-xl sm:text-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                {benefit.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-neutral-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process Overview */}
      <Section background="white" padding="lg">
        <div className="text-center mb-8 sm:mb-12 animate-on-scroll opacity-0 translate-y-[30px] transition-all duration-1000 ease-out">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Our Process
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-3xl mx-auto">
            A systematic approach that ensures quality results and client satisfaction 
            from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              step: "01",
              title: "Consultation",
              description: "Initial meeting to understand your requirements and vision"
            },
            {
              step: "02", 
              title: "Planning",
              description: "Detailed project planning with timelines and resource allocation"
            },
            {
              step: "03",
              title: "Execution",
              description: "Professional implementation with quality control and regular updates"
            },
            {
              step: "04",
              title: "Delivery",
              description: "Final inspection, handover, and ongoing support services"
            }
          ].map((step, index) => (
            <div 
              key={index}
              className="animate-on-scroll opacity-0 translate-y-[30px] transition-all duration-1000 ease-out text-center group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 relative z-10">
                  <span className="text-lg sm:text-xl font-bold text-white">{step.step}</span>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-primary/20 transform -translate-y-1/2 z-0"></div>
                )}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-2 sm:mb-3">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="primary" padding="lg">
        <div className="text-center max-w-4xl mx-auto animate-on-scroll opacity-0 translate-y-[30px] transition-all duration-1000 ease-out">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8">
            Contact us today to discuss your construction and facility management needs. 
            Let&apos;s bring your vision to life with our expert services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg" className="hover:scale-105 transition-all duration-300 group">
              <span className="flex items-center">
                Get Quote
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Button>
            <Button href="/about" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300 group">
              <span className="flex items-center">
                Learn More
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
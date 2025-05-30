"use client";

import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';

const projects = [
  {
    id: 1,
    title: "Modern Business Center",
    category: "Business Centers",
    industry: "Commercial",
    services: ["Interior Design", "MEP Works", "Civil Works"],
    description: "Complete fit-out of a modern business center with state-of-the-art facilities and contemporary design.",
    image: "business-center-1",
    featured: true,
    completionYear: "2023"
  },
  {
    id: 2,
    title: "Premium Coffee Shop Chain",
    category: "Coffee Shops & Restaurants",
    industry: "Hospitality",
    services: ["Interior Design", "Joinery", "MEP Works"],
    description: "Multiple locations for a premium coffee shop chain with consistent branding and efficient layout.",
    image: "coffee-shop-1",
    featured: true,
    completionYear: "2023"
  },
  {
    id: 3,
    title: "HyperPanda Retail Store",
    category: "Hyper Markets",
    industry: "Retail",
    services: ["Civil Works", "MEP Works", "Facility Management"],
    description: "Large-scale hypermarket construction and fit-out with advanced cooling and lighting systems.",
    image: "hypermarket-1",
    featured: true,
    completionYear: "2022"
  },
  {
    id: 4,
    title: "Ford Automotive Showroom",
    category: "Car Service & Showrooms",
    industry: "Automotive",
    services: ["Interior Design", "Civil Works", "MEP Works"],
    description: "Modern automotive showroom with service center facilities and customer lounge areas.",
    image: "automotive-1",
    featured: true,
    completionYear: "2023"
  },
  {
    id: 5,
    title: "Corporate Office Complex",
    category: "Corporate Offices",
    industry: "Corporate",
    services: ["Interior Design", "MEP Works", "FF&FA Works"],
    description: "Multi-floor corporate office with modern workspaces, meeting rooms, and collaborative areas.",
    image: "office-1",
    featured: false,
    completionYear: "2022"
  },
  {
    id: 6,
    title: "Government Administration Building",
    category: "Government Buildings",
    industry: "Government",
    services: ["Civil Works", "MEP Works", "QHSE"],
    description: "Government facility construction with emphasis on security, accessibility, and energy efficiency.",
    image: "government-1",
    featured: false,
    completionYear: "2023"
  },
  {
    id: 7,
    title: "Luxury Retail Boutique",
    category: "Retail Stores",
    industry: "Retail",
    services: ["Interior Design", "Joinery", "FF&FA Works"],
    description: "High-end retail boutique with custom fixtures, premium finishes, and sophisticated lighting.",
    image: "retail-1",
    featured: false,
    completionYear: "2023"
  },
  {
    id: 8,
    title: "Banking Branch Renovation",
    category: "Banks",
    industry: "Banking",
    services: ["Renovation", "MEP Works", "Security Systems"],
    description: "Complete renovation of banking branch with enhanced security systems and customer service areas.",
    image: "bank-1",
    featured: false,
    completionYear: "2022"
  },
  {
    id: 9,
    title: "Restaurant Chain Expansion",
    category: "Coffee Shops & Restaurants",
    industry: "Hospitality",
    services: ["Interior Design", "MEP Works", "Joinery"],
    description: "Multiple restaurant locations with standardized design and efficient kitchen layouts.",
    image: "restaurant-1",
    featured: false,
    completionYear: "2023"
  },
  {
    id: 10,
    title: "Mixed-Use Development",
    category: "Business Centers",
    industry: "Commercial",
    services: ["Civil Works", "MEP Works", "Project Management"],
    description: "Large mixed-use development with retail, office, and service components.",
    image: "mixed-use-1",
    featured: false,
    completionYear: "2022"
  }
];

const categories = [
  "All Projects",
  "Business Centers",
  "Coffee Shops & Restaurants",
  "Hyper Markets",
  "Car Service & Showrooms",
  "Retail Stores",
  "Corporate Offices",
  "Government Buildings",
  "Banks"
];

const services = [
  "All Services",
  "Interior Design",
  "MEP Works",
  "Civil Works",
  "Facility Management",
  "Joinery",
  "FF&FA Works",
  "Renovation"
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [activeService, setActiveService] = useState("All Services");

  const filteredProjects = projects.filter(project => {
    const categoryMatch = activeCategory === "All Projects" || project.category === activeCategory;
    const serviceMatch = activeService === "All Services" || project.services.some(service => service.includes(activeService));
    return categoryMatch && serviceMatch;
  });

  return (
    <div className="pt-16">
      
      {/* Hero Section */}
      <Section background="gradient" padding="lg" className="text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-white/90">
            Showcasing our expertise across various industries and project types
          </p>
        </div>
      </Section>

      {/* Project Stats */}
      <Section background="white" padding="md">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "100+", label: "Projects Completed" },
            { number: "50+", label: "Happy Clients" },
            { number: "8", label: "Industry Sectors" },
            { number: "5+", label: "Years of Excellence" }
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-neutral-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Filters */}
      <Section background="neutral" padding="md">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">Filter by Category</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-white text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">Filter by Service</h3>
            <div className="flex flex-wrap gap-2">
              {services.map((service) => (
                <button
                  key={service}
                  onClick={() => setActiveService(service)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeService === service
                      ? 'bg-secondary text-white'
                      : 'bg-white text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-neutral-600">
              Showing <span className="font-semibold text-primary">{filteredProjects.length}</span> projects
            </p>
          </div>
        </div>
      </Section>

      {/* Projects Grid */}
      <Section background="white" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative">
                <div className="bg-neutral-200 h-64 flex items-center justify-center">
                  <span className="text-neutral-500">{project.image}</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-neutral-700">
                    {project.completionYear}
                  </span>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-white px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button href={`/projects/${project.id}`} variant="secondary" size="sm" className="w-full">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary font-medium">{project.category}</span>
                  <span className="text-xs text-neutral-500">{project.industry}</span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-neutral-600 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.services.map((service, index) => (
                    <span 
                      key={index}
                      className="bg-neutral-100 text-neutral-700 px-2 py-1 rounded text-xs"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-neutral-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              No projects found
            </h3>
            <p className="text-neutral-600 mb-4">
              Try adjusting your filters to see more projects.
            </p>
            <Button 
              onClick={() => {
                setActiveCategory("All Projects");
                setActiveService("All Services");
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </Section>

      {/* Client Logos */}
      <Section background="neutral" padding="lg">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-neutral-600">
            We&apos;re proud to have worked with some of the most respected companies in the region.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {[
            { name: "COSTA", industry: "Hospitality" },
            { name: "Kadien Investment", industry: "Real Estate" },
            { name: "HyperPanda", industry: "Retail" },
            { name: "Ford", industry: "Automotive" },
            { name: "Siemens", industry: "Technology" },
            { name: "Almarai", industry: "FMCG" }
          ].map((client, index) => (
            <div 
              key={index}
              className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 group"
            >
              <div className="font-bold text-lg text-neutral-800 mb-1 group-hover:text-primary transition-colors duration-300">
                {client.name}
              </div>
              <div className="text-xs text-neutral-500">
                {client.industry}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="primary" padding="lg">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s discuss how we can bring your vision to life with our proven expertise
            and commitment to excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Start Your Project
            </Button>
            <Button href="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Our Services
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
} 
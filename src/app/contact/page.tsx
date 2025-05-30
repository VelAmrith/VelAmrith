"use client";

import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
    
    setIsSubmitting(false);
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  return (
    <div className="pt-16">
      
      {/* Hero Section */}
      <Section background="gradient" padding="lg" className="text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/90">
            Get in touch with our team to discuss your project requirements and discover 
            how we can bring your vision to life
          </p>
        </div>
      </Section>

      {/* Contact Information */}
      <Section background="white" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Visit Our Office",
              icon: "📍",
              details: [
                "Building No:2775, Al Madinah Al Munawarah Road",
                "Al Faisaliyah District", 
                "Riyadh 12891",
                "Kingdom Of Saudi Arabia"
              ]
            },
            {
              title: "Call Us",
              icon: "📞",
              details: [
                "Office: 011 506 2001",
                "Mobile: 055 867 8834",
                "Available: Sun - Thu, 8:00 AM - 6:00 PM"
              ]
            },
            {
              title: "Email Us",
              icon: "✉️",
              details: [
                "info@velamrith.com",
                "We typically respond within 24 hours"
              ]
            }
          ].map((contact, index) => (
            <div key={index} className="text-center p-6 bg-neutral-50 rounded-lg">
              <div className="text-4xl mb-4">{contact.icon}</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                {contact.title}
              </h3>
              <div className="space-y-2">
                {contact.details.map((detail, idx) => (
                  <p key={idx} className="text-neutral-600">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Form & Map */}
      <Section background="neutral" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Send Us a Message
            </h2>
            <p className="text-neutral-600 mb-8">
              Fill out the form below and we&apos;ll get back to you as soon as possible to discuss your project.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    placeholder="+966 XX XXX XXXX"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                >
                  <option value="">Select a service</option>
                  <option value="interior-design">Interior Design & Construction</option>
                  <option value="mep-works">MEP Services</option>
                  <option value="facility-management">Facility Management</option>
                  <option value="civil-works">Civil Works</option>
                  <option value="joinery">Joinery & Fabrication</option>
                  <option value="project-management">Project Management</option>
                  <option value="renovation">Renovation & Remodeling</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 resize-vertical"
                  placeholder="Please describe your project requirements, timeline, and any specific details..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
                size="lg"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Map and Additional Info */}
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Find Us
            </h2>
            
            {/* Map Placeholder */}
            <div className="bg-neutral-200 h-64 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="text-4xl mb-2">🗺️</div>
                <p className="text-neutral-600">Interactive Map</p>
                <p className="text-sm text-neutral-500">
                  24°38&apos;57.5&quot;N 46°46&apos;41.0&quot;E
                </p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                Office Hours
              </h3>
              <div className="space-y-2">
                {[
                  { day: "Sunday - Thursday", hours: "8:00 AM - 6:00 PM" },
                  { day: "Friday", hours: "Closed" },
                  { day: "Saturday", hours: "Closed" }
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-neutral-700">{schedule.day}</span>
                    <span className="text-neutral-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                Quick Contact
              </h3>
              <div className="space-y-3">
                <a 
                  href="tel:0115062001" 
                  className="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors duration-200"
                >
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">Call Office</p>
                    <p className="text-sm text-neutral-600">011 506 2001</p>
                  </div>
                </a>

                <a 
                  href="mailto:info@velamrith.com" 
                  className="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors duration-200"
                >
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">Email Us</p>
                    <p className="text-sm text-neutral-600">info@velamrith.com</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Common questions about our services and processes
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              question: "What types of projects do you handle?",
              answer: "We handle a wide range of projects including interior design, MEP works, civil construction, facility management, and more across various industries such as commercial, retail, hospitality, and government sectors."
            },
            {
              question: "How long does a typical project take?",
              answer: "Project timelines vary depending on scope and complexity. Small fit-out projects may take 4-8 weeks, while larger construction projects can take several months. We provide detailed timelines during the planning phase."
            },
            {
              question: "Do you provide free consultations?",
              answer: "Yes, we offer free initial consultations to understand your requirements and provide preliminary guidance on your project."
            },
            {
              question: "Are you ISO certified?",
              answer: "Yes, we are certified under ISO 9001:2015 (Quality Management), ISO 14001:2015 (Environmental Management), and ISO 45001:2018 (Occupational Health & Safety Management)."
            },
            {
              question: "Do you handle both design and construction?",
              answer: "Absolutely! We provide end-to-end services from initial design and planning through construction and final handover, ensuring seamless project delivery."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-neutral-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-neutral-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="primary" padding="lg">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Don&apos;t wait any longer. Contact us today and let&apos;s discuss how we can 
            transform your vision into reality with our expert construction and facility management services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="tel:0115062001" variant="secondary" size="lg">
              Call Now: 011 506 2001
            </Button>
            <Button href="mailto:info@velamrith.com" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Email Us
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
} 
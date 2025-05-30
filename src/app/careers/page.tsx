"use client";

import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null as File | null,
    coverLetter: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Career application submitted:', formData);
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      resume: null,
      coverLetter: ''
    });
    
    setIsSubmitting(false);
    alert('Thank you for your application! We will review your submission and get back to you soon.');
  };

  return (
    <div className="pt-16">
      
      {/* Hero Section */}
      <Section background="gradient" padding="lg" className="text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Join Our Team
          </h1>
          <p className="text-lg sm:text-xl text-white/90">
            Ready to build your career with a leading construction and facility management company? 
            Submit your application and we&apos;ll reach out to you.
          </p>
        </div>
      </Section>

      {/* Company Values */}
      <Section background="white" padding="lg">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Why Work at Vel Amrith?
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-3xl mx-auto">
            Join a dynamic team that values excellence, innovation, and professional growth 
            in the construction and facility management industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {[
            {
              title: "Career Growth",
              description: "Clear advancement paths and professional development opportunities",
              icon: "📈"
            },
            {
              title: "Competitive Benefits",
              description: "Market-competitive salary, health insurance, and comprehensive benefits",
              icon: "💰"
            },
            {
              title: "Innovative Projects",
              description: "Work on diverse, challenging projects across multiple industries",
              icon: "🚀"
            },
            {
              title: "Team Excellence",
              description: "Collaborate with experienced professionals in a supportive environment",
              icon: "🤝"
            }
          ].map((value, index) => (
            <div key={index} className="text-center p-4 sm:p-6 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors duration-300">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{value.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-2 sm:mb-3">
                {value.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Application Form */}
      <Section background="neutral" padding="lg">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Submit Your Application
            </h2>
            <p className="text-base sm:text-lg text-neutral-600">
              Tell us about yourself and we&apos;ll get back to you if there&apos;s a good fit for our team.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
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
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Contact & Position */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    placeholder="+966 XX XXX XXXX"
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-neutral-700 mb-2">
                    Position of Interest *
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select a position</option>
                    <option value="project-manager">Project Manager</option>
                    <option value="mep-engineer">MEP Engineer</option>
                    <option value="interior-designer">Interior Designer</option>
                    <option value="site-supervisor">Site Supervisor</option>
                    <option value="quality-inspector">Quality Control Inspector</option>
                    <option value="business-development">Business Development</option>
                    <option value="civil-engineer">Civil Engineer</option>
                    <option value="facility-manager">Facility Manager</option>
                    <option value="other">Other (Please specify in cover letter)</option>
                  </select>
                </div>
              </div>

              {/* Experience */}
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-neutral-700 mb-2">
                  Years of Experience *
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                >
                  <option value="">Select experience level</option>
                  <option value="0-1">0-1 years (Entry Level)</option>
                  <option value="2-3">2-3 years</option>
                  <option value="4-5">4-5 years</option>
                  <option value="6-10">6-10 years</option>
                  <option value="10+">10+ years (Senior Level)</option>
                </select>
              </div>

              {/* Resume Upload */}
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-neutral-700 mb-2">
                  Resume/CV *
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-white hover:file:bg-primary-dark"
                />
                <p className="text-xs text-neutral-500 mt-1">
                  Accepted formats: PDF, DOC, DOCX (Max 5MB)
                </p>
              </div>

              {/* Cover Letter */}
              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium text-neutral-700 mb-2">
                  Cover Letter *
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 resize-vertical"
                  placeholder="Tell us why you&apos;re interested in joining Vel Amrith Company Limited and what you can bring to our team. Include relevant experience, skills, and career goals..."
                />
              </div>

              {/* Terms */}
              <div className="bg-neutral-50 p-4 rounded-lg">
                <p className="text-sm text-neutral-600">
                  <strong>Privacy Notice:</strong> By submitting this application, you consent to Vel Amrith Company Limited 
                  processing your personal data for recruitment purposes. We will only use your information to evaluate 
                  your application and contact you regarding potential opportunities.
                </p>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3"
                  size="lg"
                >
                  {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Section>

      {/* Next Steps */}
      <Section background="white" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            What Happens Next?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                step: "1",
                title: "Application Review",
                description: "Our HR team will review your application and qualifications"
              },
              {
                step: "2",
                title: "Initial Contact",
                description: "If you&apos;re a good fit, we&apos;ll reach out within 1-2 weeks"
              },
              {
                step: "3",
                title: "Interview Process",
                description: "Selected candidates will be invited for interviews"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="primary" padding="lg">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Questions About Working with Us?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8">
            Have questions about career opportunities, company culture, or the application process? 
            We&apos;re here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg" className="hover:scale-105 transition-all duration-300">
              Contact HR Team
            </Button>
            <Button href="mailto:careers@velamrith.com" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300">
              Email Careers
            </Button>
          </div>
          <p className="text-lg sm:text-xl text-white/90 mt-6 sm:mt-8">
            Let&apos;s build the future together. Apply today and become part of our
          </p>
        </div>
      </Section>
    </div>
  );
} 
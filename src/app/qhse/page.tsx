import React from 'react';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';

export const metadata = {
  title: "QHSE - Quality, Health, Safety & Environment | Vel Amrith Company Limited",
  description: "Our commitment to Quality, Health, Safety, and Environmental standards with ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certifications.",
};

export default function QHSEPage() {
  return (
    <div className="pt-16">
      
      {/* Hero Section */}
      <Section background="gradient" padding="lg" className="text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Quality, Health, Safety & Environment
          </h1>
          <p className="text-xl text-white/90">
            Our unwavering commitment to excellence, safety, and environmental responsibility 
            in every project we undertake
          </p>
        </div>
      </Section>

      {/* QHSE Overview */}
      <Section background="white" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Our QHSE Commitment
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            At Vel Amrith Company Limited, we believe that quality, health, safety, and environmental 
            responsibility are not just compliance requirements but fundamental pillars of our business philosophy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Quality",
              icon: "⭐",
              color: "from-blue-500 to-blue-600",
              description: "Delivering excellence through systematic quality management and continuous improvement.",
              features: ["ISO 9001:2015 Certified", "Quality Control Processes", "Continuous Improvement"]
            },
            {
              title: "Health",
              icon: "🏥",
              color: "from-green-500 to-green-600", 
              description: "Prioritizing the health and wellbeing of our workforce and all stakeholders.",
              features: ["Health Monitoring", "Wellness Programs", "Medical Support"]
            },
            {
              title: "Safety",
              icon: "🛡️",
              color: "from-red-500 to-red-600",
              description: "Maintaining the highest safety standards to protect lives and prevent accidents.",
              features: ["ISO 45001:2018 Certified", "Safety Training", "Risk Assessment"]
            },
            {
              title: "Environment",
              icon: "🌱",
              color: "from-green-400 to-green-500",
              description: "Committed to environmental stewardship and sustainable construction practices.",
              features: ["ISO 14001:2015 Certified", "Sustainable Practices", "Waste Reduction"]
            }
          ].map((pillar, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-lg flex items-center justify-center text-2xl mx-auto mb-4`}>
                {pillar.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {pillar.title}
              </h3>
              <p className="text-neutral-600 mb-4">
                {pillar.description}
              </p>
              <ul className="text-sm text-neutral-500 space-y-1">
                {pillar.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* ISO Certifications */}
      <Section background="neutral" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            ISO Certifications
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Our ISO certifications demonstrate our commitment to international standards 
            and best practices in quality, environmental, and safety management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              standard: "ISO 9001:2015",
              title: "Quality Management System",
              description: "Ensures consistent quality in all our processes, products, and services through systematic quality management.",
              benefits: [
                "Enhanced customer satisfaction",
                "Improved operational efficiency", 
                "Consistent quality delivery",
                "Continuous improvement culture"
              ],
              icon: "🏆",
              color: "border-blue-500 bg-blue-50"
            },
            {
              standard: "ISO 14001:2015",
              title: "Environmental Management System",
              description: "Demonstrates our commitment to environmental responsibility and sustainable business practices.",
              benefits: [
                "Reduced environmental impact",
                "Sustainable resource usage",
                "Waste minimization",
                "Environmental compliance"
              ],
              icon: "🌍",
              color: "border-green-500 bg-green-50"
            },
            {
              standard: "ISO 45001:2018",
              title: "Occupational Health & Safety Management",
              description: "Ensures the safety and wellbeing of our workforce and all stakeholders through systematic safety management.",
              benefits: [
                "Reduced workplace accidents",
                "Enhanced safety culture",
                "Legal compliance",
                "Employee wellbeing"
              ],
              icon: "🦺",
              color: "border-orange-500 bg-orange-50"
            }
          ].map((cert, index) => (
            <div key={index} className={`bg-white rounded-lg border-2 ${cert.color} p-6 hover:shadow-lg transition-shadow duration-300`}>
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{cert.icon}</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {cert.standard}
                </h3>
                <p className="text-primary font-semibold">
                  {cert.title}
                </p>
              </div>
              <p className="text-neutral-600 mb-6">
                {cert.description}
              </p>
              <div>
                <h4 className="font-semibold text-neutral-900 mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {cert.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-neutral-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Safety Policies */}
      <Section background="white" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Our Safety Policy
            </h2>
            <p className="text-lg text-neutral-600 mb-6">
              Safety is not just a priority at Vel Amrith Company Limited – it&apos;s a core value 
              that guides every decision we make and every action we take.
            </p>
            
            <div className="space-y-4">
              {[
                {
                  title: "Zero Accident Policy",
                  description: "We are committed to achieving zero accidents through comprehensive risk management and safety protocols."
                },
                {
                  title: "Training & Development",
                  description: "Regular safety training programs for all employees to ensure awareness and competency in safety practices."
                },
                {
                  title: "Risk Assessment",
                  description: "Systematic identification, assessment, and mitigation of potential risks in all our operations."
                },
                {
                  title: "Emergency Preparedness",
                  description: "Well-defined emergency response procedures and regular drills to ensure readiness for any situation."
                }
              ].map((policy, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-neutral-50 rounded-lg">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">
                      {policy.title}
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      {policy.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-neutral-100 h-96 rounded-lg flex items-center justify-center">
              <span className="text-neutral-500">Safety Policy Image</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Environmental Commitment */}
      <Section background="neutral" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Environmental Commitment
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            We are committed to minimizing our environmental impact and contributing 
            to sustainable development through responsible construction practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Sustainable Materials",
              description: "Prioritizing eco-friendly and sustainable materials in our construction projects.",
              icon: "♻️"
            },
            {
              title: "Waste Reduction",
              description: "Implementing comprehensive waste management strategies to minimize environmental impact.",
              icon: "🗂️"
            },
            {
              title: "Energy Efficiency",
              description: "Designing and building energy-efficient structures that reduce long-term environmental impact.",
              icon: "⚡"
            },
            {
              title: "Water Conservation",
              description: "Implementing water-saving technologies and practices in our construction processes.",
              icon: "💧"
            },
            {
              title: "Carbon Footprint Reduction",
              description: "Actively working to reduce our carbon footprint through sustainable practices and technologies.",
              icon: "🌿"
            },
            {
              title: "Environmental Compliance",
              description: "Ensuring full compliance with all environmental regulations and exceeding minimum requirements.",
              icon: "📋"
            }
          ].map((commitment, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{commitment.icon}</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {commitment.title}
              </h3>
              <p className="text-neutral-600">
                {commitment.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Quality Assurance Process */}
      <Section background="white" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Quality Assurance Process
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Our systematic approach to quality assurance ensures consistent excellence 
            in every project we undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Planning & Design Review",
              description: "Thorough review of project plans and designs to ensure quality standards are met from the start."
            },
            {
              step: "02",
              title: "Material Inspection",
              description: "Rigorous inspection and testing of all materials before use to ensure they meet our quality specifications."
            },
            {
              step: "03",
              title: "Construction Monitoring",
              description: "Continuous monitoring and inspection during construction to maintain quality standards throughout the process."
            },
            {
              step: "04",
              title: "Final Quality Check",
              description: "Comprehensive final inspection and testing before project handover to ensure complete satisfaction."
            }
          ].map((process, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                  {process.step}
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-neutral-300 transform translate-x-8"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {process.title}
              </h3>
              <p className="text-neutral-600">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Compliance & Certifications */}
      <Section background="neutral" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Compliance & Legal Requirements
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            We maintain full compliance with all relevant regulations and hold necessary 
            certifications to operate in Saudi Arabia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Company Registration Certificate",
              description: "Officially registered and licensed to operate in Saudi Arabia",
              icon: "📄"
            },
            {
              title: "VAT Registration Certificate",
              description: "Compliant with Saudi Arabia's VAT regulations and requirements",
              icon: "🧾"
            },
            {
              title: "Building Permits",
              description: "All necessary permits and approvals for construction activities",
              icon: "🏗️"
            },
            {
              title: "Safety Certifications",
              description: "Certified safety protocols and procedures for all operations",
              icon: "🛡️"
            }
          ].map((compliance, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl mb-3">{compliance.icon}</div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {compliance.title}
              </h3>
              <p className="text-neutral-600 text-sm">
                {compliance.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="primary" padding="lg">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner with a Certified Excellence Provider
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Choose Vel Amrith Company Limited for your next project and experience 
            the difference that comes with our unwavering commitment to quality, 
            safety, and environmental responsibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Discuss Your Project
            </Button>
            <Button href="/projects" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              View Our Projects
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
} 
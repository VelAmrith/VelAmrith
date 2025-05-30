import React from 'react';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';

export const metadata = {
  title: "Testimonials - Client Success Stories | Vel Amrith Company Limited",
  description: "Read what our satisfied clients say about our construction and facility management services. Testimonials from leading companies across Saudi Arabia.",
};

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Al-Rashid",
      position: "Project Manager",
      company: "COSTA Coffee",
      industry: "Hospitality",
      rating: 5,
      testimonial: "Vel Amrith Company Limited exceeded our expectations in every aspect of our coffee shop fit-out project. Their attention to detail, quality workmanship, and timely delivery made them the perfect partner for our expansion across multiple locations.",
      project: "Coffee Shop Chain Fit-out",
      image: "client-1"
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      position: "Facility Director",
      company: "Ford Saudi Arabia",
      industry: "Automotive",
      rating: 5,
      testimonial: "The professionalism and expertise demonstrated by Vel Amrith in our showroom renovation was outstanding. They understood our brand requirements and delivered a modern, customer-friendly space that has significantly enhanced our customer experience.",
      project: "Automotive Showroom Renovation",
      image: "client-2"
    },
    {
      id: 3,
      name: "Mohammad Hassan",
      position: "Operations Manager",
      company: "HyperPanda",
      industry: "Retail",
      rating: 5,
      testimonial: "Working with Vel Amrith on our hypermarket construction was a seamless experience. Their comprehensive approach, from MEP works to final fit-out, ensured our store was ready for operation on schedule and within budget.",
      project: "Hypermarket Construction & Fit-out",
      image: "client-3"
    },
    {
      id: 4,
      name: "Dr. Fatima Al-Zahra",
      position: "Head of Administration",
      company: "Ministry of Health",
      industry: "Government",
      rating: 5,
      testimonial: "Vel Amrith's commitment to quality and compliance made them an ideal partner for our government facility project. Their ISO certifications and adherence to safety standards gave us complete confidence throughout the project.",
      project: "Government Healthcare Facility",
      image: "client-4"
    },
    {
      id: 5,
      name: "Khalid bin Abdullah",
      position: "CEO",
      company: "Kadien Investment",
      industry: "Real Estate",
      rating: 5,
      testimonial: "The business center fit-out delivered by Vel Amrith has become a flagship property in our portfolio. Their innovative design solutions and quality execution have attracted premium tenants and exceeded our investment expectations.",
      project: "Premium Business Center",
      image: "client-5"
    },
    {
      id: 6,
      name: "Michael Thompson",
      position: "Regional Manager",
      company: "Siemens Middle East",
      industry: "Technology",
      rating: 5,
      testimonial: "Vel Amrith's expertise in MEP works and their understanding of technical requirements made our office renovation project a great success. Their team's technical knowledge and project management skills are truly impressive.",
      project: "Corporate Office Renovation",
      image: "client-6"
    }
  ];

  const stats = [
    { number: "98%", label: "Client Satisfaction Rate" },
    { number: "95%", label: "Projects Delivered On Time" },
    { number: "100%", label: "Quality Compliance" },
    { number: "50+", label: "Happy Clients" }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-neutral-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="pt-16">
      
      {/* Hero Section */}
      <Section background="gradient" padding="lg" className="text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl text-white/90">
            Discover what our satisfied clients say about our construction and facility management services
          </p>
        </div>
      </Section>

      {/* Success Stats */}
      <Section background="white" padding="md">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
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

      {/* Featured Testimonial */}
      <Section background="neutral" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="mb-6">
              {renderStars(5)}
            </div>
            <blockquote className="text-xl md:text-2xl text-neutral-700 mb-8 italic">
              &quot;Vel Amrith Company Limited has been our trusted partner for multiple projects. 
              Their commitment to quality, attention to detail, and professional approach 
              consistently delivers results that exceed our expectations.&quot;
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-neutral-200 rounded-full flex items-center justify-center">
                <span className="text-neutral-500 text-sm">Client Photo</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-neutral-900">Ahmed Al-Mansouri</div>
                <div className="text-primary">General Manager</div>
                <div className="text-neutral-600 text-sm">Leading Construction Company</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* All Testimonials */}
      <Section background="white" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Authentic feedback from clients across various industries who have experienced 
            the Vel Amrith difference firsthand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex">
                  {renderStars(testimonial.rating)}
                </div>
                <span className="text-xs text-neutral-500 bg-neutral-100 px-2 py-1 rounded">
                  {testimonial.industry}
                </span>
              </div>
              
              <blockquote className="text-neutral-700 mb-6 text-sm leading-relaxed">
                &quot;{testimonial.testimonial}&quot;
              </blockquote>
              
              <div className="border-t border-neutral-100 pt-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center">
                    <span className="text-neutral-500 text-xs">{testimonial.image}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900 text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-neutral-600 text-xs">
                      {testimonial.position}
                    </div>
                    <div className="text-primary text-xs font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
                <div className="text-xs text-neutral-500">
                  Project: {testimonial.project}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Industry Testimonials */}
      <Section background="neutral" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Trusted Across Industries
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Our expertise spans multiple sectors, earning trust and satisfaction 
            from diverse industries across Saudi Arabia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              industry: "Hospitality",
              companies: ["COSTA Coffee", "Premium Restaurant Chains", "Hotel Groups"],
              testimonialSnippet: "Exceptional attention to detail in our restaurant fit-outs.",
              icon: "🍽️"
            },
            {
              industry: "Retail",
              companies: ["HyperPanda", "Luxury Boutiques", "Shopping Centers"],
              testimonialSnippet: "Creating engaging retail environments that drive sales.",
              icon: "🛍️"
            },
            {
              industry: "Automotive",
              companies: ["Ford Saudi Arabia", "Car Dealerships", "Service Centers"],
              testimonialSnippet: "Modern showrooms that enhance brand experience.",
              icon: "🚗"
            },
            {
              industry: "Government",
              companies: ["Ministry Facilities", "Public Buildings", "Administrative Centers"],
              testimonialSnippet: "Reliable partner for government infrastructure projects.",
              icon: "🏛️"
            },
            {
              industry: "Corporate",
              companies: ["Siemens", "Business Centers", "Office Complexes"],
              testimonialSnippet: "Professional workspaces that inspire productivity.",
              icon: "🏢"
            },
            {
              industry: "Healthcare",
              companies: ["Medical Centers", "Clinics", "Healthcare Facilities"],
              testimonialSnippet: "Safe and compliant healthcare environments.",
              icon: "🏥"
            }
          ].map((sector, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">{sector.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {sector.industry}
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-sm text-neutral-600 italic mb-3">
                  &quot;{sector.testimonialSnippet}&quot;
                </p>
                <div className="text-xs text-neutral-500">
                  <strong>Clients include:</strong>
                  <ul className="mt-1 space-y-1">
                    {sector.companies.map((company, idx) => (
                      <li key={idx}>• {company}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Video Testimonials */}
      <Section background="white" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Video Testimonials
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Watch our clients share their experiences working with Vel Amrith Company Limited.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "COSTA Coffee Project Success",
              client: "Ahmed Al-Rashid, Project Manager",
              duration: "2:45",
              thumbnail: "video-costa"
            },
            {
              title: "Ford Showroom Transformation",
              client: "Sarah Mitchell, Facility Director",
              duration: "3:12",
              thumbnail: "video-ford"
            },
            {
              title: "Government Facility Excellence",
              client: "Dr. Fatima Al-Zahra, Head of Administration",
              duration: "2:58",
              thumbnail: "video-government"
            }
          ].map((video, index) => (
            <div key={index} className="bg-neutral-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="bg-neutral-200 h-48 flex items-center justify-center relative">
                <span className="text-neutral-500">{video.thumbnail}</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-neutral-900 mb-2">
                  {video.title}
                </h3>
                <p className="text-sm text-neutral-600">
                  {video.client}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="primary" padding="lg">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Satisfied Clients
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Experience the same level of excellence and professionalism that has earned 
            us the trust and satisfaction of leading companies across Saudi Arabia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Start Your Project
            </Button>
            <Button href="/projects" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              View Our Work
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
} 
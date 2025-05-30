import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-lg">VA</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold text-white">Vel Amrith</span>
                <span className="text-xs text-neutral-300">Company Limited</span>
              </div>
            </div>
            <p className="text-neutral-300 text-sm mb-4">
              Dynamic and dedicated contracting company specializing in comprehensive Civil, Interior, MEP and Facility Management solutions.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a href="#" className="text-neutral-400 hover:text-primary transition-colors duration-200" aria-label="LinkedIn">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary transition-colors duration-200" aria-label="Twitter">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="mailto:info@velamrith.com" className="text-neutral-400 hover:text-primary transition-colors duration-200" aria-label="Email">
                <span className="sr-only">Email</span>
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-neutral-300 hover:text-primary transition-colors duration-200">About Us</Link></li>
              <li><Link href="/services" className="text-neutral-300 hover:text-primary transition-colors duration-200">Services</Link></li>
              <li><Link href="/projects" className="text-neutral-300 hover:text-primary transition-colors duration-200">Projects</Link></li>
              <li><Link href="/qhse" className="text-neutral-300 hover:text-primary transition-colors duration-200">Our Motto</Link></li>
              <li><Link href="/testimonials" className="text-neutral-300 hover:text-primary transition-colors duration-200">Testimonials</Link></li>
              <li><Link href="/careers" className="text-neutral-300 hover:text-primary transition-colors duration-200">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/interior-design" className="text-neutral-300 hover:text-primary transition-colors duration-200">Interior Design</Link></li>
              <li><Link href="/services/mep-works" className="text-neutral-300 hover:text-primary transition-colors duration-200">MEP Works</Link></li>
              <li><Link href="/services/facility-management" className="text-neutral-300 hover:text-primary transition-colors duration-200">Facility Management</Link></li>
              <li><Link href="/services/civil-works" className="text-neutral-300 hover:text-primary transition-colors duration-200">Civil Works</Link></li>
              <li><Link href="/services/joinery" className="text-neutral-300 hover:text-primary transition-colors duration-200">Joinery</Link></li>
              <li><Link href="/services/project-management" className="text-neutral-300 hover:text-primary transition-colors duration-200">Project Management</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-neutral-300">
                  <p>Building No:2775, Al Madinah Al Munawarah Road</p>
                  <p>Al Faisaliyah District, Riyadh 12891</p>
                  <p>Kingdom Of Saudi Arabia</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:0115062001" className="text-neutral-300 hover:text-primary transition-colors duration-200">
                  011 506 2001
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M6 6h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2z" />
                </svg>
                <a href="tel:0558678834" className="text-neutral-300 hover:text-primary transition-colors duration-200">
                  055 867 8834
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@velamrith.com" className="text-neutral-300 hover:text-primary transition-colors duration-200">
                  info@velamrith.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-neutral-800">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-neutral-400">
              <span className="text-center">© {currentYear} Vel Amrith Company Limited. All rights reserved.</span>
              <span className="hidden sm:inline">|</span>
              <span className="text-center">Sister Company of Sim Arabia Co. Ltd.</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link href="/privacy-policy" className="text-neutral-400 hover:text-primary transition-colors duration-200 whitespace-nowrap">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="text-neutral-400 hover:text-primary transition-colors duration-200 whitespace-nowrap">
                Terms & Conditions
              </Link>
              <Link href="/sitemap" className="text-neutral-400 hover:text-primary transition-colors duration-200 whitespace-nowrap">
                Sitemap
              </Link>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-neutral-800">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-neutral-500">
              <span className="flex items-center space-x-2">
                <svg className="h-3 w-3 sm:h-4 sm:w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>ISO 9001:2015</span>
              </span>
              <span className="flex items-center space-x-2">
                <svg className="h-3 w-3 sm:h-4 sm:w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>ISO 14001:2015</span>
              </span>
              <span className="flex items-center space-x-2">
                <svg className="h-3 w-3 sm:h-4 sm:w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>ISO 45001:2018</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
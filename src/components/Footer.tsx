import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import logo from 'figma:asset/31d98d8fdebbd5d47bc479f6e9cd6a7b8f22c109.png';

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Southern Pool Group" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-light-grey mb-4">
              Premium pool design, construction, and maintenance services for luxury homes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-light-grey hover:text-accent-blue">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-light-grey hover:text-accent-blue">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-light-grey hover:text-accent-blue">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="mb-4">Quick Links</h6>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-light-grey hover:text-accent-blue">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-light-grey hover:text-accent-blue">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-light-grey hover:text-accent-blue">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-light-grey hover:text-accent-blue">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-light-grey hover:text-accent-blue">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h6 className="mb-4">Services</h6>
            <ul className="space-y-2 text-light-grey">
              <li>Custom Pool Design</li>
              <li>Pool Installation</li>
              <li>Pool Renovations</li>
              <li>Maintenance & Repairs</li>
              <li>Water Features</li>
              <li>Equipment Installation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="mb-4">Contact Us</h6>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-light-grey">(555) 123-4567</p>
                  <p className="text-sm text-medium-grey">Mon-Fri 8AM-6PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-1" />
                <p className="text-light-grey">info@southernpoolgroup.com</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <p className="text-light-grey">123 Pool Lane<br />Miami, FL 33131</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Bar */}
      <div className="bg-accent-blue py-8">
        <div className="container-custom text-center">
          <h4 className="mb-4">Ready to Build Your Dream Pool?</h4>
          <Link
            to="/contact"
            className="inline-block bg-white text-accent-blue px-8 py-3 rounded hover:bg-light-grey"
          >
            Get Free Quote Now
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-dark-grey py-4">
        <div className="container-custom text-center text-sm text-medium-grey">
          © {new Date().getFullYear()} Southern Pool Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

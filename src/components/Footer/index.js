import React, { Component } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Heart, ArrowUp } from "lucide-react";

import "./styles.css";

export const Footer = () => {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Web Development",
    "Frontend Design",
    "React Applications",
    "UI/UX Design",
    "Responsive Design"
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "#333" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "#0077b5" },
    { icon: Twitter, href: "#", label: "Twitter", color: "#1da1f2" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-light position-relative overflow-hidden">
      {/* Background decoration */}
      <div 
        className="position-absolute w-100 h-100 opacity-25"
        style={{
          background: 'linear-gradient(45deg, rgba(13, 110, 253, 0.1) 0%, rgba(111, 66, 193, 0.1) 100%)',
          zIndex: 0
        }}
      />
      
      {/* Main footer content */}
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row py-5">
          {/* Brand section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="mb-4">
              <h3 className="h4 fw-bold text-white mb-3">
                <span className="text-primary">Web</span> Developer
              </h3>
              <p className="text-light opacity-75 mb-4">
                Passionate about creating beautiful, functional web experiences that make a difference. 
                Let's build something amazing together.
              </p>
              
              {/* Contact info */}
              <div className="d-flex flex-column gap-2">
                <div className="d-flex align-items-center gap-2 text-light opacity-75">
                  <Mail size={16} />
                  <small>kitrickd.bell@gmail.com</small>
                </div>
                <div className="d-flex align-items-center gap-2 text-light opacity-75">
                  <Phone size={16} />
                  <small>+1 (832) 965-6585</small>
                </div>
                <div className="d-flex align-items-center gap-2 text-light opacity-75">
                  <MapPin size={16} />
                  <small>Texas, USA</small>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="text-white fw-semibold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              {quickLinks.map((link) => (
                <li key={link.name} className="mb-2">
                  <a 
                    href={link.href} 
                    className="text-light text-decoration-none opacity-75 d-block py-1"
                    style={{ transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => {
                      e.target.style.opacity = '1';
                      e.target.style.paddingLeft = '8px';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.opacity = '0.75';
                      e.target.style.paddingLeft = '0';
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-white fw-semibold mb-3">Services</h5>
            <ul className="list-unstyled">
              {services.map((service) => (
                <li key={service} className="mb-2">
                  <span className="text-light opacity-75 d-flex align-items-center">
                    <span 
                      className="bg-primary rounded-circle me-2"
                      style={{ width: '6px', height: '6px' }}
                    />
                    <small>{service}</small>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-white fw-semibold mb-3">Stay Connected</h5>
            <p className="text-light opacity-75 small mb-3">
              Follow me on social media for updates and insights.
            </p>
            
            {/* Social Links */}
            <div className="d-flex gap-3 mb-4">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  className="d-flex align-items-center justify-content-center bg-secondary rounded-circle text-decoration-none"
                  style={{
                    width: '40px',
                    height: '40px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = color;
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#6c757d';
                    e.target.style.transform = 'translateY(0)';
                  }}
                  aria-label={label}
                >
                  <Icon size={18} className="text-white" />
                </a>
              ))}
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="btn btn-outline-primary btn-sm d-flex align-items-center gap-2"
              style={{ transition: 'all 0.3s ease' }}
            >
              <ArrowUp size={16} />
              Back to Top
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-top border-secondary pt-4 pb-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="text-light opacity-75 mb-0 small">
                © 2025 Kitrick's Portfolio. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="text-light opacity-75 mb-0 small d-flex align-items-center justify-content-md-end justify-content-start gap-1">
                Made with <Heart size={14} className="text-danger" /> using React & Bootstrap
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
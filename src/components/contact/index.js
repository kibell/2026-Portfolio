import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kitrickd.bell@gmail.com",
      href: "mailto:kitrickd.bell@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (832) 965-6585",
      href: "tel:+18329656585"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Texas, USA",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <section id="contact" className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-dark mb-3">Get In Touch</h2>
          <div className="mx-auto bg-primary" style={{width: '96px', height: '4px', background: 'linear-gradient(to right, #0d6efd, #6f42c1)'}}></div>
          <p className="text-muted mt-3 mx-auto" style={{maxWidth: '48rem'}}>
            I'm always interested in new opportunities and interesting projects. 
            Feel free to reach out through any of the channels below!
          </p>
        </div>

        <div className="row justify-content-center">
          {/* Contact Information */}
          <div className="col-lg-8 col-xl-6">
            <h3 className="h3 fw-semibold text-dark mb-4 text-center">Let's Connect</h3>
            
            <div className="mb-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="d-flex align-items-center p-4 bg-light rounded mb-3 text-decoration-none text-dark"
                  style={{transition: 'all 0.2s'}}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f8f9fa';
                    e.currentTarget.querySelector('.icon-container').style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#f8f9fa';
                    e.currentTarget.querySelector('.icon-container').style.transform = 'scale(1)';
                  }}
                >
                  <div 
                    className="icon-container d-flex align-items-center justify-content-center me-4 text-white rounded"
                    style={{
                      width: '56px', 
                      height: '56px', 
                      background: 'linear-gradient(to right, #0d6efd, #6f42c1)',
                      transition: 'transform 0.2s'
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="small text-muted mb-1">{label}</p>
                    <p className="text-dark fw-medium mb-0 h6">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center">
              <h4 className="h5 fw-semibold text-dark mb-3">Follow Me</h4>
              <div className="d-flex justify-content-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="d-flex align-items-center justify-content-center bg-light rounded text-dark text-decoration-none"
                    style={{
                      width: '56px', 
                      height: '56px',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(to right, #0d6efd, #6f42c1)';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#f8f9fa';
                      e.currentTarget.style.color = '#212529';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    aria-label={label}
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5 pt-4 border-top text-center">
          <p className="text-muted mb-0">
            © Kitrick's Portfolio. Built with React & Bootstrap
          </p>
        </div>
      </div>
    </section>
  );
};


export default Contact;
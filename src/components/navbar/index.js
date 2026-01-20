import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className={`navbar navbar-expand-lg fixed-top transition-all ${
      scrolled ? "bg-white shadow-lg" : "bg-transparent"
    }`} style={{ backdropFilter: scrolled ? 'blur(10px)' : 'none' }}>
      <div className="container-fluid px-4">
        <a className="navbar-brand fw-bold fs-3" href="#" style={{
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Kitrick Bell
        </a>
        
        {/* Desktop Navigation */}
        <div className="d-none d-lg-flex navbar-nav ms-auto">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link mx-2 fw-medium text-dark"
              style={{
                transition: 'color 0.3s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                const target = e.target;
                target.style.color = '#3b82f6';
              }}
              onMouseLeave={(e) => {
                const target = e.target;
                target.style.color = '#1f2937';
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler d-lg-none border-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          style={{ padding: '0.5rem' }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="position-absolute top-100 start-0 w-100 bg-white shadow-lg rounded-bottom d-lg-none" style={{ zIndex: 1000 }}>
            <div className="p-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="d-block py-2 text-dark text-decoration-none fw-medium"
                  onClick={() => setIsOpen(false)}
                  onMouseEnter={(e) => {
                    const target = e.target;
                    target.style.color = '#3b82f6';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target;
                    target.style.color = '#1f2937';
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default NavBar;
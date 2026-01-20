import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
// import { Button } from "flowbite-react";
import * as React from "react";
import { useEffect, useState } from "react";
import "./styles.css";

export const Landing = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="position-relative overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Enhanced Parallax Background with Multiple Layers */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(147, 51, 234, 0.25) 50%, rgba(236, 72, 153, 0.2) 100%)",
          transform: `translateY(${scrollY * 0.8}px)`,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -3,
        }}
      />

      {/* Additional Parallax Layer */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          background:
            "radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.2) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)",
          transform: `translateY(${scrollY * 0.3}px)`,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -2,
        }}
      />

      {/* Enhanced Animated Geometric Shapes */}
      <div className="position-absolute w-100 h-100" style={{ zIndex: -1 }}>
        {/* Large floating circle */}
        <div
          className="position-absolute rounded-circle"
          style={{
            width: "500px",
            height: "500px",
            background:
              "linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.25))",
            top: "5%",
            left: "0%",
            transform: `translateY(${scrollY * 1.5}px) rotate(${
              scrollY * 0.4
            }deg)`,
            animation: "float 10s ease-in-out infinite",
            filter: "blur(2px)",
            willChange: "transform",
          }}
        />

        {/* Medium triangle */}
        <div
          className="position-absolute"
          style={{
            width: "350px",
            height: "350px",
            background:
              "linear-gradient(45deg, rgba(147, 51, 234, 0.25), rgba(236, 72, 153, 0.2))",
            top: "40%",
            right: "5%",
            transform: `translateY(${scrollY * 0.7}px) rotate(${
              45 + scrollY * 0.1
            }deg)`,
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            animation: "float 8s ease-in-out infinite reverse",
            willChange: "transform",
          }}
        />

        {/* Small square */}
        <div
          className="position-absolute"
          style={{
            width: "250px",
            height: "250px",
            background:
              "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",
            top: "15%",
            right: "10%",
            transform: `translateY(${scrollY * 1.1}px) rotate(${
              scrollY * 0.25
            }deg)`,
            borderRadius: "30px",
            animation: "float 6s ease-in-out infinite",
            willChange: "transform",
          }}
        />

        {/* Additional floating elements */}
        <div
          className="position-absolute rounded-circle"
          style={{
            width: "180px",
            height: "180px",
            background: "rgba(236, 72, 153, 0.2)",
            top: "65%",
            left: "15%",
            transform: `translateY(${scrollY * 0.9}px)`,
            animation: "float 9s ease-in-out infinite",
            filter: "blur(1px)",
          }}
        />

        <div
          className="position-absolute"
          style={{
            width: "120px",
            height: "120px",
            background:
              "linear-gradient(45deg, rgba(59, 130, 246, 0.3), transparent)",
            top: "75%",
            right: "20%",
            transform: `translateY(${scrollY * 10}px) rotate(${
              scrollY * 1
            }deg)`,
            borderRadius: "50%",
            animation: "float 5s ease-in-out infinite reverse",
          }}
        />
      </div>

      <div
        className="container-fluid d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="row justify-content-center w-100">
          <div className="col-12 col-lg-8 text-center">
            <div className="animate__animated animate__fadeInUp">
              <h1
                className="display-1 fw-bold mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, #1f2937 0%, #1e40af 50%, #7c3aed 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontSize: "clamp(3rem, 8vw, 6rem)",
                }}
              >
                Web Developer
              </h1>
              <p
                className="lead fs-3 text-muted mb-5 mx-auto"
                style={{ maxWidth: "600px", lineHeight: "1.6" }}
              >
                Crafting beautiful, functional, and user-centered digital
                experiences with modern technologies
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center mb-5">
                <button
                  size="lg"
                  className="btn btn-primary btn-lg px-4 py-3 fw-semibold"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                    border: "none",
                    borderRadius: "50px",
                    boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
                  }}
                >
                  View My Work
                </button>
                <button
                  variant="outline"
                  size="lg"
                  className="btn btn-outline-primary btn-lg px-4 py-3 fw-semibold"
                  style={{
                    borderRadius: "50px",
                  }}
                >
                  Download Resume
                </button>
              </div>

              <div className="d-flex justify-content-center gap-3">
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Mail, href: "#contact", label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                      e.currentTarget.style.backgroundColor =
                        "rgba(255, 255, 255, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.backgroundColor =
                        "rgba(255, 255, 255, 0.1)";
                    }}
                    aria-label={label}
                  >
                    <Icon size={24} className="text-dark" />
                  </a>
                ))}
              </div>
            </div>

            <div
              className="position-absolute start-50 translate-middle-x"
              style={{
                bottom: "2rem",
                animation: "bounce 2s infinite",
              }}
            >
              <ArrowDown size={24} className="text-muted" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.8;
          }
          33% { 
            transform: translateY(-40px) rotate(120deg); 
            opacity: 1;
          }
          66% { 
            transform: translateY(-20px) rotate(240deg); 
            opacity: 0.9;
          }
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translateY(0) translateX(-50%); }
          40%, 43% { transform: translateY(-30px) translateX(-50%); }
          70% { transform: translateY(-15px) translateX(-50%); }
          90% { transform: translateY(-4px) translateX(-50%); }
        }
        
        /* Ensure smooth scrolling for parallax effect */
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* <div class="wave-container">
  <div class="wave"></div>
</div> */}
    </section>
  );
};
export default Landing;

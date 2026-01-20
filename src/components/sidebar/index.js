import {
  User,
  Briefcase,
  FolderOpen,
  GraduationCap,
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  Globe,
  Smartphone,
  FileUser,
} from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { id: "about", label: "About Me", icon: User },
  { id: "education", label: "Education", icon: GraduationCap },
  {
    id: "projects",
    label: "Projects",
    icon: FolderOpen,
    subItems: [
      { id: "projects-apps", label: "Apps", icon: Smartphone },
      { id: "projects-websites", label: "Websites", icon: Globe },
    ],
  },
  { id: "experience", label: "Experience", icon: Briefcase },
];

export const Sidebar = ({ activeSection, onSectionChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState(["projects"]);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleMenu = (menuId) => {
    setExpandedMenus((prev) =>
      prev.includes(menuId)
        ? prev.filter((id) => id !== menuId)
        : [...prev, menuId]
    );
  };

  const handleSectionChange = (sectionId) => {
    onSectionChange(sectionId);
    setIsMobileOpen(false);
  };

  const cn = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-4 left-4 z-50 d-lg-none btn btn-warning p-3"
        style={{
          border: "3px solid #000",
          boxShadow: "3px 3px 0 #000",
        }}
      >
        {isMobileOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="position-fixed w-100 h-100 d-lg-none"
          style={{
            top: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 30,
          }}
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "position-fixed position-lg-sticky d-flex flex-column",
          "panel-bg-ly border-end brdr-panel ",
          isMobileOpen ? "" : "d-none d-lg-flex"
        )}
        style={{
          top: 0,
          left: 0,
          height: "100vh",
          width: isCollapsed ? "80px" : "256px",
          zIndex: 40,
          transition: "all 0.3s",
        }}
      >
        {/* Header */}
        <div
          className="p-4 bg-theme-yellow halftone-pattern black-text text-center"
          style={{
            borderBottom: "4px solid #000",
          }}
        >
          <h1 className={cn("fw-bold mb-0", isCollapsed ? "fs-6" : "fs-4")}>
            {isCollapsed ? "DEV" : "KB PORTFOLIO"}
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex-grow-1 p-3 overflow-auto">
          <div className="d-flex flex-column gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                activeSection === item.id ||
                (activeSection && activeSection.startsWith(item.id + "-"));
              // ...existing code...
              const hasSubItems = item.subItems && item.subItems.length > 0;
              const isExpanded = expandedMenus.includes(item.id);

              return (
                <div key={item.id}>
                  <button
                    onClick={() => {
                      if (hasSubItems && !isCollapsed) {
                        toggleMenu(item.id);
                        // Also set the main projects section as active when clicking Projects
                        if (item.id === "projects") {
                          handleSectionChange("projects");
                        }
                      } else {
                        handleSectionChange(item.id);
                      }
                    }}
                    className={cn(
                      "w-100 d-flex align-items-center gap-3 p-3 fw-bold",
                      isActive ? "btn-prime" : "btn-sec"
                    )}
                    style={{
                      border: "3px solid #000",
                      boxShadow: isActive ? "4px 4px 0 #000" : "2px 2px 0 #000",
                      justifyContent: isCollapsed ? "center" : "flex-start",
                    }}
                  >
                    <Icon size={isCollapsed ? 28 : 20} />
                    {!isCollapsed && (
                      <>
                        <span className="flex-grow-1 text-start">
                          {item.label}
                        </span>
                        {hasSubItems && (
                          <ChevronDown
                            size={16}
                            style={{
                              transform: isExpanded
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                              transition: "transform 0.3s",
                            }}
                          />
                        )}
                      </>
                    )}
                  </button>

                  {/* Sub Items */}
                  {hasSubItems && isExpanded && !isCollapsed && (
                    <div className="ms-4 mt-2">
                      <div className="d-flex flex-column gap-2">
                        {item.subItems.map((subItem) => {
                          const SubIcon = subItem.icon;
                          const isSubActive = activeSection === subItem.id;

                          return (
                            <button
                              key={subItem.id}
                              onClick={() => handleSectionChange(subItem.id)}
                              className={cn(
                                "btn w-100 d-flex align-items-center gap-3 p-2",
                                isSubActive
                                  ? "btn-secondary"
                                  : "btn-outline-secondary"
                              )}
                              style={{
                                border: "2px solid #000",
                                boxShadow: "2px 2px 0 #000",
                              }}
                            >
                              <SubIcon size={16} />
                              <span>{subItem.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-4">
            {!isCollapsed && <p className="fw-bold black-text">Action Links</p>}

            <button
              className="w-100 d-flex align-items-center gap-3 p-3 fw-bold halftone-pattern panel-bg-green comic-panel"
              style={{
                transition: "all 0.3s",
                textDecoration: "none",
                justifyContent: isCollapsed ? "center" : "flex-start",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translate(2px, 2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translate(0, 0)";
              }}
            >
              <a
                href="/resume/Kbell_Resume.pdf"
                download="Kbell_Resume.pdf"
                style={{ textDecoration: "none" }}
                className={cn(
                  "black-text d-flex align-items-center",
                  isCollapsed ? "justify-content-center" : "gap-3"
                )}
              >
                <FileUser size={isCollapsed ? 28 : 20} />
                {!isCollapsed && <span>Download Resume</span>}
              </a>
            </button>
{/* 
            <button
              className="w-100 d-flex align-items-center gap-3 p-3 fw-bold halftone-pattern panel-bg-green comic-panel"
              style={{
                transition: "all 0.3s",
                textDecoration: "none",
                justifyContent: isCollapsed ? "center" : "flex-start",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translate(2px, 2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translate(0, 0)";
              }}
            >
              <a
                href="/resume/Kbell_Resume.pdf"
                download="Kbell_Resume.pdf"
                style={{ textDecoration: "none" }}
                className={cn(
                  "black-text d-flex align-items-center",
                  isCollapsed ? "justify-content-center" : "gap-3"
                )}
              >
                <FileUser size={20} />
                {!isCollapsed && <span>Download Resume</span>}
              </a>
            </button> */}
          </div>
        </nav>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="halftone-pattern dark-light-color mx-3 mb-3 d-flex align-items-center gap-3 p-3"
          style={{
            justifyContent: isCollapsed ? "center" : "flex-start",
          }}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} color="yellow" />}
          {!isCollapsed && <span>{isDark ? "Light Mode" : "Dark Mode"}</span>}
        </button>

        {/* Collapse Toggle (Desktop) */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="btn btn-secondary d-none d-lg-flex align-items-center justify-content-center p-3"
          style={{
            borderTop: "4px solid #000",
            borderRadius: "0",
          }}
        >
          <span className="fw-bold small">
            {isCollapsed ? ">>" : "<< COLLAPSE"}
          </span>
        </button>
      </aside>
    </>
  );
};
export default Sidebar;

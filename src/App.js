import { Sidebar } from "./components/sidebar"; // Note: destructured import
import About from "./components/about";
import Work from "./components/work";
import Education from "./components/education";
import Footer from "./components/Footer";
import Projects from "./components/projects";
import "./App.css";

import React, { Fragment, useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const [activeSection, setActiveSection] = useState("about");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [contentKey, setContentKey] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [nextSection, setNextSection] = useState(null);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleSectionChange = (section) => {
    if (section === activeSection) return;

    setIsExiting(true);
    setNextSection(section);

    // Wait for slide down animation to complete
    setTimeout(() => {
      setActiveSection(section);
      setIsExiting(false);
      setContentKey((prev) => prev + 1);

      // Scroll to top of content
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1000);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "projects":
        return <Projects filter="all" />;
      case "projects-apps":
        return <Projects filter="apps" />;
      case "projects-websites":
        return <Projects filter="websites" />;
      case "experience":
        return <Work />;
      case "education":
        return <Education />;
      default:
        return <About />;
    }
  };

  return (
    <Fragment>
      <div className="main-container position-relative">
        {/* Sidebar */}
        <Sidebar
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />

        {/* Main Content */}
        <div
          key={contentKey}
          className={
            "flex-grow-1  p-md-5 p-sm-1 " +
            (isExiting ? "content-slide-down" : "content-slide-in") +
            " " +
            (isCollapsed ? "offset-md-1" : "offset-lg-2 offset-md-0")
          }
        >
          {renderSection()}
        </div>
      </div>

      <Footer />
    </Fragment>
  );
}

export default App;

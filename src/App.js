import { Sidebar } from "./components/sidebar"; // Note: destructured import
import Landing from "./components/landing";
import About from "./components/about";
import Work from "./components/work";
import Education from "./components/education";
import Footer from "./components/Footer";
import Projects from "./components/projects";
import Contact from "./components/contact";
import "./App.css";

import React, { Fragment, useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const [activeSection, setActiveSection] = useState("about");
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
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
      <div className="main-container">
        {/* Sidebar */}
        <Sidebar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />

        {/* Main Content */}
        <div
          className={
            "flex-grow-1  p-md-5 p-sm-1 " +
            (isCollapsed ? "offset-md-1" : "offset-lg-2 offset-md-0")
          }
        >
          {renderSection()}
        </div>
      </div>

      {/* <Footer /> */}
    </Fragment>
  );
}

export default App;

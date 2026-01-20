import NavBar from "./components/navbar";
import { Sidebar } from "./components/sidebar"; // Note: destructured import
import Landing from "./components/landing";
import About from "./components/about";
import Work from "./components/work";
import Education from "./components/education";
import Footer from "./components/Footer";
import Skill from "./components/skills";
import Projects from "./components/projects";
import Blog from "./components/blog";
import Contact from "./components/contact";
import "./App.css";

import React, { Fragment, useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const [activeSection, setActiveSection] = useState("about");

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
        return <Projects filter="all"/>;
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
      <div className="d-flex ">
        {/* Sidebar */}
        <Sidebar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        {/* Main Content */}
        <div className="flex-grow-1 offset-md-2 p-5">{renderSection()}</div>
      </div>

      {/* <Footer /> */}
    </Fragment>
  );
}

export default App;

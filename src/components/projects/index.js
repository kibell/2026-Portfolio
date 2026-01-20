import React, { useState } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";
import coronaApp from "./images/ctrack.gif";
import letMeet from "./images/letsme.gif";
import Solo from "./images/solo.gif";
import imagine from "./images/imagine.gif";
import clicky from "./images/React App.gif";
import comic from "./images/comic.mp4";
import yir2024 from "./images/yir2024.gif";
import amazon from "./images/amazon.mp4";
import resourcePage from "./images/resource.gif";
import oneOfUs from "./images/oneofus.mp4";
import campus from "./images/CampusEvent.mp4";

import "./style.css";

const projects = [
  {
    title: "Solo Fitness App",
    description:
      "A cross-platform mobile fitness application designed with a gamified RPG experience, allowing users to track nutrition, fitness metrics, and character progression through daily and weekly goals. Highlights • Swipeable dashboard (daily, weekly, food logs)• Calorie & macro tracking with visual progress indicators• Character avatar with XP-based progression",
    tech: [
      "MySQL",
      "Express",
      "TypeScript",
      "React Native (Expo)",
      "API Ninjas",
    ],
    color: "red",
    stars: 128,
    liveUrl: "https://kibell.github.io/Meetme/",
    githubUrl: "https://github.com/kibell/Meetme",
    category: "apps",
    frontImage: Solo,
  },

  {
    title: "Reimagined Adventure Flight App",
    description:
      "A full-stack Java web application built with Spring Boot that enables users to register, search flights between cities, view flight details, and manage bookings through a secure, MVC-based architecture. Secure login with BCrypt, REST controllers, service-layer business logic",
    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JPA",
      "Thymeleaf",
      "MySQL",
    ],
    color: "red",
    stars: 128,
    liveUrl: "https://kibell.github.io/Meetme/",
    githubUrl: "https://github.com/kibell/Meetme",
    category: "apps",
    frontImage: imagine,
  },
  {
    title: "Lets Meet App",
    description:
      "An application that allows you and your friend to select a midpoint location based on your preferences. Simply enter each location and select a type of event and this app will pinpoint the location that is closest to both parties. We utilized Googles Maps API and Geolocation API to calculate distances and find locations that fit the criteria.",
    tech: ["HTML", "JavaScript", "Jquery", "Bootstrap", "Google Maps API"],
    color: "red",
    stars: 128,
    liveUrl: "https://kibell.github.io/Meetme/",
    githubUrl: "https://github.com/kibell/Meetme",
    category: "apps",
    frontImage: letMeet,
  },

  {
    title: "Clicky Game",
    description:
      "A memory-based clicker game where users must click on unique images without repeating any selections. Each correct click increases the score, while a repeated click resets the score. The game features dynamic image shuffling, score tracking, and responsive design to enhance user engagement and challenge memory skills.",
    tech: ["React", "Node.js", "CSS", "JavaScript"],
    color: "red",
    stars: 128,
    liveUrl: "https://naughty-allen-95382a.netlify.app/",
    githubUrl: "https://github.com/kibell/Clicky-Game-React",
    category: "apps",
    frontImage: clicky,
  },

  {
    title: "Trivia Game",
    description:
      "A dynamic trivia game that displays questions based on comic book themes, allowing users to test their knowledge across various categories and difficulty levels. The game features a countdown timer for each question, score tracking, and immediate feedback on answers, providing an engaging and educational experience.",
    tech: ["React", "Node.js", "HTML", "Jquery"],
    color: "red",
    stars: 128,
    liveUrl: "https://kibell.github.io/Trivia-Game-/",
    githubUrl: "https://github.com/kibell/Trivia-Game-",
    category: "apps",
    frontImage: comic,
  },

  {
    title: "Corona TRACKER",
    description:
      "Application to track coronavirus cases and statistics in real-time. The app fetches data from a public API and displays it using interactive charts and graphs. Users can view global statistics as well as country-specific data. The interface is designed to be user-friendly and informative, providing insights into the pandemic's progression.",
    tech: ["React", "Node.js", "chart.js", "Jquery"],
    color: "red",
    stars: 128,
    liveUrl: "#",
    githubUrl: "https://github.com/kibell/CoronaTracker",
    category: "apps",
    frontImage: coronaApp,
  },

  {
    title: "SNHU Wrapped Year in Review 2024",
    description:
      "A dynamic web page that provides Southern New Hampshire University (SNHU) students with a personalized year-in-review experience. The website aggregates user data to showcase academic achievements, campus involvement, and memorable moments from the past year. Features include interactive timelines, multimedia integration, and social sharing options to celebrate student life at SNHU.",
    tech: ["HTML", "JavaScript", "Jquery", "Bootstrap", "AmpScript", "Figma"],
    color: "red",
    stars: 128,
    liveUrl:
      "https://cloud.dream.snhu.edu/SNHU-Year-In-Review?utm_medium=email&utm_source=SFMC&utm_campaign=Remarketing&utm_content=em195855&sfid=0033l000037WZpFAAW&utm_source=sfmc&utm_term=&utm_content=454257&utm_id=dc7c332a-53e8-4ab8-a623-15b9da3affe1&sfmc_activityid=e856fe44-3458-485d-8a2f-2d7fd79c4453&utm_medium=email&sfmc_journey_id=dc7c332a-53e8-4ab8-a623-15b9da3affe1&sfmc_journey_name=BJA--VRGGUY-ae_rnIR_veei-w02422103&sfmc_activity_id=e856fe44-3458-485d-8a2f-2d7fd79c4453&sfmc_activity_name=MEA--VRGGUY-ae_rnIR_veei-w02422103&sfmc_asset_id=454257&sfmc_channel=email#wrap-section",
    githubUrl: "https://github.com/kibell/Meetme",
    category: "websites",
    frontImage: yir2024,
  },
  {
    title: "Amazon How to submit guide",
    description:
      "Partnered with Amazon to create a comprehensive guide for sellers on how to submit products effectively. The website offers step-by-step instructions, best practices, and tips to help sellers navigate the submission process smoothly. It includes visual aids, FAQs, and contact information for further assistance, ensuring a seamless experience for Amazon sellers.",
    tech: ["HTML", "JavaScript", "Jquery", "Bootstrap", "Figma"],
    color: "red",
    stars: 128,
    liveUrl: "https://kibell.github.io/amazon-LP/",
    githubUrl: "https://github.com/kibell/Meetme",
    category: "websites",
    frontImage: amazon,
  },
  {
    title: "Student Video Resouce Page",
    description:
      "A resource page designed for students to access a curated collection of educational videos. The website categorizes videos by subject, difficulty level, and format, making it easy for students to find relevant content. Features include search functionality, user ratings, and the ability to bookmark favorite videos for quick access. The page aims to enhance learning by providing diverse multimedia resources.",
    tech: ["HTML", "JavaScript", "Jquery", "Bootstrap", "JSON", "Figma"],
    color: "red",
    stars: 128,
    liveUrl: "https://cloud.dream.snhu.edu/video-resource",
    githubUrl: "https://github.com/kibell/video-resource-page",
    category: "websites",
    frontImage: resourcePage,
  },

  {
    title: "One of us Student Viewbook LP",
    description:
      "A landing page created for SNHU's 'One of Us' campaign, aimed at prospective students. The page features compelling visuals, testimonials, and key information about SNHU's programs and campus life. It is designed to engage visitors and encourage them to explore further or apply. The layout is user-friendly, with clear calls to action and easy navigation to other parts of the SNHU website.",
    tech: ["HTML", "JavaScript", "Jquery", "Bootstrap", "JSON", "Figma"],
    color: "red",
    stars: 128,
    liveUrl: "https://cloud.dream.snhu.edu/oneofus",
    githubUrl: "https://github.com/kibell/viewbook-LP",
    category: "websites",
    frontImage: oneOfUs,
  },

  {
    title: "Campus Events Directory",
    description:
      "A comprehensive directory of campus events designed to keep students informed and engaged. The website features a calendar view, event categories, and detailed descriptions for each event. Users can filter events by date, type, and location, making it easy to find activities that interest them. The directory aims to foster a vibrant campus community by promoting student involvement and participation.",
    tech: [
      "HTML",
      "JavaScript",
      "Jquery",
      "Bootstrap",
      "JSON",
      "Figma",
      "AMPScript",
    ],
    color: "red",
    stars: 128,
    liveUrl:
      "https://cloud.dream.snhu.edu/campus-event-listing-directory?_gl=1*11buhbj*_gcl_au*NTE5NzkzNTk1LjE3NjA0NjEyNjQ.*_ga*MjExMjUwMDA4NC4xNzYwNDYxMjY0*_ga_JFPHZGFXPH*czE3NjA5Njk4ODMkbzI0JGcxJHQxNzYwOTcwNzgzJGo1MyRsMCRoMA..*_fplc*YjFCUG1CY2tQdzJHS1VwaWZORTVydzBrSmVFNmVMc09MSW1FZVRXJTJCU1pUbXpWcVQyZmFLcmtWWG9CbGxCTmpKZGlHOFBjQ1Z1cTg5djQ5MjcyNHNSS25CM0NaSTVzODkybUxnVGhOekJlQjdLSWg0RmRhempMUCUyRkxmRjFOUSUzRCUzRA..",
    githubUrl: "#",
    category: "websites",
    frontImage: campus,
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <div className="col-md-6">
      <div className="flip-card h-100">
        <div>
          {/* Front of card */}
          <div className="py-5 px-3 panel-bg comic-panel halftone-pattern position-relative d-flex flex-column">
            {/* Project Number */}
            <div
              className="position-absolute bg-dark text-white font-display fs-4 d-flex align-items-center justify-content-center border border-2 border-dark mb-4"
              style={{
                width: "48px",
                height: "48px",
                top: "-12px",
                left: "-12px",
              }}
            >
              #{index + 1}
            </div>

            <div className="pt-3 flex-grow-1 d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between mb-3">
                <h3 className="font-display fs-4 mb-0 text-uppercase black-text">
                  {project.title}
                </h3>
              </div>

              {/* Project Image */}
             {project.frontImage && (
  <div className="mb-3 flex-grow-1">
    {project.frontImage.endsWith('.mp4') ? (
      <video
        src={project.frontImage}
        autoPlay
        loop
        muted
        className="w-100 h-100 border border-2 border-dark"
        style={{
          objectFit: "cover",
          minHeight: "400px",
          maxHeight: "400px",
        }}
      />
    ) : (
      <img
        src={project.frontImage}
        alt={project.title}
        className="w-100 h-100 border border-2 border-dark black-text"
        style={{
          objectFit: "cover",
          minHeight: "400px",
          maxHeight: "400px",
        }}
      />
    )}
  </div>
)}

              <div className="mb-3">
                <p className="font-body mb-0 black-text">{project.description}</p>
              </div>

              {/* Tech Stack */}
              <div className="d-flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-dark text-white px-2 py-1 font-display small"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 d-flex justify-content-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    Github <Github size={16} className="ms-1" />
                  </button>
                </a>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    Live Preview <ExternalLink size={16} className="ms-1" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = ({ filter = "all" }) => {
  const filteredProjects =
    filter === "all" || filter === "projects"
      ? projects
      : projects.filter((p) => p.category === filter);

  const sectionTitle =
    filter === "apps"
      ? "APPS"
      : filter === "websites"
      ? "WEBSITES"
      : "PROJECTS";

  return (
    <section className="d-flex flex-column gap-4">
      {/* Section Header */}
      <div className="d-flex align-items-center gap-3">
        <h2 className="font-display display-5 mb-0">
          <span className="color-blue px-3 py-2 d-inline-block comic-border">
            {sectionTitle}
          </span>
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="row g-4">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center halftone">
        <p className="font-display fs-4 mb-3">WANT TO SEE MORE?</p>
        <a
          href="https://github.com/kibell"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-comic bg-comic-red black-text px-4 py-2">
            <Github size={16} className="me-2" />
            VIEW MY GITHUB
          </button>
        </a>
      </div>
    </section>
  );
};

export default Projects;

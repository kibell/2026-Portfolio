import { GraduationCap, Award, BookOpen, Dock, Info } from "lucide-react";
import React, { useState } from "react";
import CertModal from "../certModal";
import UMHB from "./images/umhbDip.png";
import UOT from "./images/UOTCert.png";
import SNHU from "./images/snhuDip.png";
import loading from "../../images/loading.gif";
// import "./style.css";
import { useEffect } from "react";

export const Education = () => {
  useEffect(() => {
    // Enable Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  const education = [
    {
      progress: "bg-success",
      focus: "Software Application Development, Software Design & Modeling,	Object Oriented App Development, Distributed App Development",
      complete: "COMPLETED ✓",
      index: 2,
      degree: "Master of Science in Software Application Development",
      school: "Southern New Hampshire University",
      period: "2023 -2025",
      gpa: "3.8 / 4.0",
      achievements: [
        {
          title: "Honor Roll Achievements",
          description:
            "Consistently recognized on the Honor Roll for academic excellence throughout my studies at SNHU.",
          link: (
            <a
              href="https://meritpages.com/kibell"
              target="_blank"
              rel="noopener noreferrer"
            >
              Honor Roll Achievements
            </a>
          ),
        },

        {
          title: "SNHU Year in Review 2024",
          description:
            "An overview of my achievements and activities during the  2024 year.",
          link: (
            <a
              href="https://cloud.dream.snhu.edu/SNHU-Year-In-Review?utm_medium=email&utm_source=SFMC&utm_campaign=Remarketing&utm_content=em195855&sfid=0033l000037WZpFAAW&utm_source=sfmc&utm_term=&utm_content=454257&utm_id=dc7c332a-53e8-4ab8-a623-15b9da3affe1&sfmc_activityid=e856fe44-3458-485d-8a2f-2d7fd79c4453&utm_medium=email&sfmc_journey_id=dc7c332a-53e8-4ab8-a623-15b9da3affe1&sfmc_journey_name=BJA--VRGGUY-ae_rnIR_veei-w02422103&sfmc_activity_id=e856fe44-3458-485d-8a2f-2d7fd79c4453&sfmc_activity_name=MEA--VRGGUY-ae_rnIR_veei-w02422103&sfmc_asset_id=454257&sfmc_channel=email"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check out some highlights in 2024{" "}
              <span
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="An overview of my achievements and activities during the  2024 year. (Was a part of building this site and getting it disturbed to Grad and under Grad students and SNHU)"
                style={{ cursor: "pointer", marginLeft: 4 }}
              >
                <Info size={16} />
              </span>
            </a>
          ),
        },
      ],
      src: SNHU,
    },
    {
      progress: "bg-success",
      complete: "COMPLETED ✓",
      focus:
        "Computer Information Systems, Web Development, Software Development",
      index: 0,
      degree: "Bachelor of Business Administration in Computer Info Systems",
      school: "University of Mary Hardin-Baylor",
      period: "2010 - 2015",
      gpa: "3.2 / 4.0",
      achievements: [
        {
          title: "University Ambassador (Leadership & Outreach)",
          description:
            "Served as a University Ambassador, representing UMHB at various events and providing campus tours to prospective students and their families.",
        },
        {
          title: "All American in NCAA Basketball",
          description:
            "Achieved All American status in NCAA Basketball, demonstrating excellence in athletic performance and teamwork.",
          link: (
            <a
              href="https://cruathletics.com/sports/mens-basketball/roster/kitrick-bell/2601"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          ),
        },
        {
          title:
            "Current Record holder in ASC and UMHB for most rebounds in a game (24)",
          description:
            "Set the all-time record for most rebounds in a single game at both the American Southwest Conference (ASC) and University of Mary Hardin-Baylor (UMHB) levels.",
          link: (
            <a
              href="https://www.pinterest.com/pin/497366352568107581/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Record
            </a>
          ),
        },
        {
          title:
            "Lead UMHB to schools first finalist showcase in the  NCAA tournament",
          description:
            "Played a pivotal role in leading the UMHB basketball team to its first-ever Top 2 finish in the NCAA tournament, showcasing leadership and competitive spirit.",
          link: (
            <a
              href="https://cruathletics.com/news/2013/4/3/MBB_0403135444.aspx?path=wten"
              target="_blank"
              rel="noopener noreferrer"
            >
              View History
            </a>
          ),
        },
        {
          title: "Loyalty Award Recipient",
          description:
            "Received the Loyalty Award for consistent dedication and commitment to the university community.",
        },
      ],
      src: UMHB,
    },
    {
      progress: "bg-success",
      focus: "Full-Stack Web Development",
      complete: "COMPLETED ✓",
      index: 1,
      degree: "Full-Stack Web Development Bootcamp",
      school: "University of Texas at Austin",
      period: "2019 - 2020",
      gpa: "A+",
      achievements: [
        {
          title: "Built 10+ projects",
          description:
            "Developed over 10 full-stack web applications using modern technologies such as React, Node.js, Express, and MongoDB.",
        },
        {
          title: "Collaborative Learning",
          description:
            "Engaged in pair programming and group projects to enhance teamwork and coding skills.",
        },
        {
          title: "Comprehensive Curriculum",
          description:
            "Completed an intensive curriculum covering front-end and back-end development, databases, and deployment.",
        },
      ],
      src: UOT,
    },

    {
      progress: "bg-warning",
      complete: "In Progress ⏳",
      focus: "Cyber Security",
      index: 3,
      degree: "Master of Science in Cyber Security",
      school: "Southern New Hampshire University",
      period: "2025 - Currently Pursuing",
      gpa: "Current 4.0",
      src: loading,
    },
  ];

  const certifications = [
    "AWS Certified Developer",
    "Google Cloud Professional",
    "React Developer Certification",
    "MongoDB Certified Developer",
  ];

  const [openCert, setOpenCert] = useState(null);

  return (
    <section className="d-flex flex-column gap-4">
      {/* Section Header */}
      <div className="d-flex align-items-center gap-3">
        <h2 className="font-display display-5 mb-0">
          <span className="color-blue px-3 py-2 d-inline-block ">
            EDUCATION
          </span>
        </h2>
        <p className="black-text">
          Hover over the <Dock size={20} className="black-text" /> icons to view
          certificates
        </p>
      </div>

      {/* Degrees */}
      <div className="row g-4">
        {education.map((edu) => (
          <div key={edu.degree} className="col-md-6">
            <div
              className={`h-100 position-relative panel-bg brdr-panel p-4  halftone-pattern ${
                edu.index === 0
                  ? "bg-theme-yellow-600"
                  : edu.index === 1
                  ? "bg-theme-yellow-600"
                  : edu.index === 2
                  ? "panel-bg-green"
                  : "panel-bg-green"
              }`}
            >
              <div className="d-flex flex-column">
                <div className="d-flex align-items-baseline justify-content-between">
                  <h3 className="font-display fs-4 mb-3 ">
                    {edu.degree}
                  </h3>

                  <div className="d-flex align-items-center flex-column ms-2">
                    <button
                      type="button"
                      className="btn p-0 ms-2 text"
                      onMouseEnter={() => setOpenCert(edu.degree)}
                      title="View Certificate"
                    >
                      <Dock size={30} className="black-text" />
                    </button>
                    <span
                      className={`badge ${
                        edu.complete === "COMPLETED ✓"
                          ? "text-bg-success"
                          : "text-bg-warning"
                      }`}
                    >
                      {edu.complete}
                    </span>
                  </div>
                  {openCert === edu.degree && (
                    <CertModal
                      name={edu?.complete}
                      src={edu?.src}
                      progress={edu?.progress}
                      onClose={() => setOpenCert(null)}
                      onMouseLeave={() => setOpenCert(null)}
                    />
                  )}
                </div>
                <p className="fw-bold fs-5 black-text mb-2">{edu.school}</p>

                <div className="d-flex flex-wrap gap-2 mb-3">
                  <span className="panel-bg-red  black-text brdr-panel fw-semibold px-3 py-1 ">
                    {edu.period}
                  </span>
                  <span className="panel-bg-blue  white-text brdr-panel font-display fw-semibold medium px-3 py-1">
                    GPA: {edu.gpa}
                  </span>
                </div>

                <div>
                  <p className="font-body mb-0 black-text">
                    <strong>Focus:</strong> {edu.focus}
                  </p>
                </div>
                {edu.achievements && (
                  <div className="mt-3">
                    <p className="font-body mb-1 black-text fw-semibold">
                      Achievements:
                    </p>
                    <div
                      className="accordion bg-transparent"
                      id={`accordionExample${edu.index}`}
                    >
                      {edu.achievements.map((achieve, idx) => {
                        return (
                          <div
                            className="accordion-item bg-transparent border-0"
                            key={idx}
                          >
                            <h2
                              className="accordion-header"
                              id={`heading${edu.index}${idx}`}
                            >
                              <button
                                className="accordion-button bg-transparent collapsed black-text fw-semibold fs-6"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${edu.index}${idx}`}
                                aria-expanded="false"
                                aria-controls={`collapse${edu.index}${idx}`}
                              >
                                {edu.achievements[idx].title}
                              </button>
                            </h2>
                            <div
                              id={`collapse${edu.index}${idx}`}
                              className="accordion-collapse collapse"
                              aria-labelledby={`heading${edu.index}${idx}`}
                              data-bs-parent={`#accordionExample${edu.index}`}
                            >
                              <div className="accordion-body panel-bg p-3 black-text">
                                {edu.achievements[idx].description}{" "}
                                {edu.achievements[idx].link}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Awards */}

      {/* Fun Footer */}
      <div className="text-center py-4 d-none">
        <div
          className="d-inline-block bg-white comic-border-sm p-4"
          style={{ transform: "rotate(-1deg)" }}
        >
          <p className="font-display fs-4 mb-0">
            "WITH GREAT CODE COMES GREAT RESPONSIBILITY!"
          </p>
          <p className="font-body text-muted mt-2 mb-0">
            - Every Developer Ever
          </p>
        </div>
      </div>
    </section>
  );
};
export default Education;

import { Calendar, MapPin } from "lucide-react";

export const Work = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Southern New Hampshire University",
      location: "Manchester, NH",
      period: "2023 - Present",
      description: [
        "Led front-end development and A/B testing of the Admissions Portal Action Items page, increasing applicant clicks to DocuSign by 16.24%, resulting in ~49,000 additional document completions annually",
        "Developed and enhanced student-facing pages that guide users from inquiry to enrollment, leveraging analytics to measure engagement and improved the end-to-end student experience.",
        "Developed and maintained a reusable front-end component library in Salesforce to standardize UI patterns, improved performance, and accelerated delivery across student facing applications.",
      ],
    },
    {
      title: "Senior Frontend Developer",
      company: "Empyrean Benefits Solutions",
      location: "Houston, TX",
      period: "2021 - 2023",
      description: [
        "Promoted to Senior Front-End Developer in recognition of technical leadership, ownership of high-impact features, and cross-functional collaboration.",
        "Led the redesign of an internal admin platform, standardizing color systems, typography,semantics, and reusable components to improve usability, accessibility, and long-term maintainability.",
        "Developed internal admin tools and client-facing benefits applications using ASP.NET MVC/Razor, integrating controllers, models, and views with newly built and existing APIs.",
        "Built complex product features including a recommendations dashboard and communications hub, enabling metrics visualization, message auditing, and dry-run validation using data visualization and table libraries.",
      ],
    },
    {
      title: "Junior Frontend Developer",
      company: "Empyrean Benefits Solutions",
      location: "Houston, TX",
      period: "2020 - 2021",
      description: [
        "Built and maintained company website using HTML, CSS, and JavaScript.",
        "Participated in agile development processes and code reviews.",
        "Supported feature development using React and Bootstrap while participating in code reviews and agile delivery.",
      ],
    },
    {
      title: "Business Systems Analyst",
      company: "Empyrean Benefits Solutions",
      location: "Houston, TX",
      period: "2017 - 2020",
      description: [
        "Led client implementations and complex system configurations for benefits platforms serving 250,000+ employees, launching websites for 12+ unique groups while mentoring entry-level analysts and ensuring alignment with business requirements.",
        "Developed Python scripts and optimized SQL Server queries for eligibility logic, rate calculations, and premium reporting, reducing processing time from 16+ hours to 4 hours and improving operational efficiency.",
        "Collaborated with DevOps and front-end teams to implement responsive UI customizations, perform QA, and approve production releases, ensuring seamless functionality across all platforms.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-5 panel-bg comic-panel halftone-pattern"
    >
      <div className="container">
        <div className="mb-5">
          <h2 className="display-4 fw-bold black-text mb-3  mtop-sm-4">Work Experience</h2>
          <div
            className="mx-auto"
            style={{
              width: "6rem",
              height: "4px",
              borderRadius: "2px",
            }}
          ></div>
        </div>

        <div className="position-relative">

          <div className="row g-4">
            {experiences.map((exp, index) => (
              <div key={index} className="col-12 position-relative">

                <div
                  className={` comic-panel halftone-pattern p-4  brdr-panel ${
                    index === 0 ? "panel-bg-blue" : "bg-theme-yellow-600"
                  }`}
                >
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-3">
                    <div>
                      <h3 className="h5 fw-semibold text-dark mb-1">
                        {exp.title}
                      </h3>
                      <p className="h6  fw-medium mb-0">
                        {exp.company}
                      </p>
                    </div>
                    <div className="d-flex flex-column align-items-md-end text-muted small mt-2 mt-md-0">
                      <div className="d-flex align-items-center mb-1">
                        <Calendar size={16} className="me-1" />
                        {exp.period}
                      </div>
                      <div className="d-flex align-items-center">
                        <MapPin size={16} className="me-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="list-unstyled ">
                    {exp.description.map((item, i) => (
                      <li key={i} className="d-flex align-items-start mb-2">
                        <span
                          className="rounded-circle me-3 mt-1 flex-shrink-0"
                          style={{
                            width: "8px",
                            height: "8px",
                            backgroundColor: "black",
                          }}
                        ></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Work;

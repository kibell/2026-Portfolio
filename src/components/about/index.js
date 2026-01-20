import { Code, Zap, Coffee, Gamepad, ChartNetwork, Blocks, FileUser } from "lucide-react";
import Lottie from "lottie-react";
import KB from "../../images/hey.png";
import city from "../../images/city.jpg";
import interest from "../../images/interest.png";
import dev from "../../images/Game Development.json";
import ball from "../../images/ball.png";
import lost from "../../images/lost.png";
import grad from "../../images/graduation.png";
import defeated from "../../images/defeated.png";
import rain from "../../images/Rain animation.json";
import raining from "../../images/raining.png";
import think from "../../images/think.png";
import cost from "../../images/cost.png";
import squat from "../../images/squat.png";
import surfing from "../../images/surfing.png";

export const About = () => {
  return (
    <div className="container-fluid p-4">
      {/* Hero Panel */}
      <div
        className="row mb-5  brdr-panel"
      >
        <div className="panel-bg halftone-pattern col-12 d-flex flex-column flex-md-row gap-4 align-items-center p-4">
          <div className="position-relative">
            <div
              className="sky-theme d-flex align-items-center justify-content-center  brdr-panel halftone-pattern"
              style={{
                width: "192px",
                height: "192px",
              }}
            >
              <span className="fw-bold" style={{ fontSize: "4rem" }}>
                <img
                  src={KB}
                  alt="KB"
                  style={{ width: "100%", height: "100%" }}
                />
              </span>
            </div>
            <div
              className="position-absolute p-2 bg-theme-yellow brdr-panel"
              style={{
                bottom: "-1rem",
                right: "-1rem",
              }}
            >
              <span className="fw-bold fs-5 info-text">Welcome</span>
            </div>
          </div>

          <div className="flex-fill px-4 ">
            <h1
              className="display-2 fw-bold  mb-3 color-blue"
              style={{
                fontFamily: "Impact, 'Arial Black', sans-serif",
                textShadow: "3px 3px 0 #000",
                transform: "skew(-5deg)",
              }}
            >
              KITRICK BELL
            </h1>
            <p
              className="fs-4 info-text text-uppercase fw-bold mb-3"
              style={{ fontFamily: "Comic Sans MS, cursive" }}
            >
              Senior Front-End Developer
            </p>
            <p className="fs-5 lh-base info-text">
              Senior Front-End Developer with 5+ years of experience building
              analytics-driven, enterprise-scale applications. Proven track
              record of improving conversion, performance, and usability through
              data-informed UI development and component-driven design systems.
            </p>
          </div>
       
</div>
      </div>

      {/* Skills Panel */}
      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div
            className="p-4 brdr-panel panel-bg-blue halftone-pattern h-100"
            style={{
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            <Code size={48} color="#EAC8A6" className="mb-3 mx-auto d-block" />
            <h3
              className="fs-4 mb-2 fw-bold text-black text-center"
              style={{ fontFamily: "Comic Sans MS, cursive" }}
            >
              Clean Code
            </h3>
            <p className="info-text text-center text-black">
              Writing maintainable, scalable, and efficient code is my
              superpower.
            </p>
          </div>
        </div>

        <div className=" col-md-4">
          <div
            className="p-4 brdr-panel panel-bg-red halftone-pattern h-100"
            style={{
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            <Zap size={48} className="mb-3 text-primary mx-auto d-block" />
            <h3
              className="fs-4 mb-2 fw-bold text-center"
              style={{ fontFamily: "Comic Sans MS, cursive" }}
            >
              Fast Delivery
            </h3>
            <p className="info-text text-center">
              Quick turnaround without compromising on quality or attention to
              detail.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div
            className="p-4 brdr-panel panel-bg-green halftone-pattern  h-100"
            style={{
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            <Coffee size={48} className="mb-3 text-primary mx-auto d-block" />
            <h3
              className="fs-4 mb-2 fw-bold text-center info-text"
              style={{ fontFamily: "Comic Sans MS, cursive" }}
            >
              Always Learning
            </h3>
            <p className="info-text text-center">
              Staying updated with the latest technologies and best practices.
            </p>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div
        className="p-4 panel-bg-yellow border border-dark mb-5 brdr-panel halftone-pattern"
        style={{
          border: "4px solid #000",
          boxShadow: "8px 8px 0 #000",
        }}
      >
        <h2
          className="fs-2 mb-4 fw-bold"
          style={{ fontFamily: "Comic Sans MS, cursive" }}
        >
          <span className="text-primary">★</span> Skills
        </h2>

        <div className="row g-4">
          {/* Front-End Development */}
          <div className="col-md-6">
            <div className="mb-3">
              <h3
                className="fs-5 fw-bold mb-3"
                style={{
                  fontFamily: "Comic Sans MS, cursive",
                  color: "var(--theme-color-blue-500)",
                }}
              >
                <Code size={20} className="me-2" />
                FRONT-END DEVELOPMENT
              </h3>
              <p
                className="mb-1 fw-bold text-dark"
                style={{ lineHeight: "1.8" }}
              >
                {["HTML5", "CSS3", "Sass", "Tailwind CSS", "Bootstrap"].join(
                  " • "
                )}
              </p>
              <p
                className="mb-0 fw-bold text-dark"
                style={{ lineHeight: "1.8" }}
              >
                {[
                  "JavaScript",
                  "jQuery",
                  "React",
                  "Razor/MVC",
                  "Vite",
                  "Figma",
                ].join(" • ")}
              </p>
            </div>
          </div>

          {/* Back-End & Databases */}
          <div className="col-md-6">
            <div className="mb-3">
              <h3
                className="fs-5 fw-bold mb-3"
                style={{
                  fontFamily: "Comic Sans MS, cursive",
                  color: "var(--theme-color-blue-600)",
                }}
              >
                <ChartNetwork size={20} className="me-2" />
                BACK-END & DATABASES
              </h3>
              <p
                className="mb-1 fw-bold text-dark"
                style={{ lineHeight: "1.8" }}
              >
                {["Node.js", "Java", "Spring"].join(" • ")}
              </p>
              <p
                className="mb-0 fw-bold text-dark"
                style={{ lineHeight: "1.8" }}
              >
                {[
                  "SQL Server",
                  "MySQL",
                  "API Integration",
                  "Functional Programming",
                ].join(" • ")}
              </p>
            </div>
          </div>

          {/* Enterprise & Marketing Platform */}
          <div className="col-md-6">
            <div className="mb-3">
              <h3
                className="fs-5 fw-bold mb-3"
                style={{
                  fontFamily: "Comic Sans MS, cursive",
                  color: "var(--theme-color-blue-600)",
                }}
              >
                <Blocks size={20} className="me-2" />
                ENTERPRISE & MARKETING
              </h3>
              <p
                className="mb-1 fw-bold text-dark"
                style={{ lineHeight: "1.8" }}
              >
                {[
                  "Salesforce Marketing Cloud",
                  "Ampscript",
                  "Meridian Benefits Platform",
                ].join(" • ")}
              </p>
              <p
                className="mb-0 fw-bold text-dark"
                style={{ lineHeight: "1.8" }}
              >
                {["FormAssembly", "Vidyard", "VWO"].join(" • ")}
              </p>
            </div>
          </div>

          {/* Tools & Workflow */}
          <div className="col-md-6">
            <div className="mb-3">
              <h3
                className="fs-5 fw-bold mb-3"
                style={{
                  fontFamily: "Comic Sans MS, cursive",
                  color: "var(--theme-color-blue-500)",
                }}
              >
                <Gamepad size={20} className="me-2" />
                TOOLS & WORKFLOW
              </h3>
              <p
                className="mb-1 fw-bold text-dark"
                style={{ lineHeight: "1.8" }}
              >
                {["Git", "GitHub", "Git Extensions", "CI/CD Pipelines"].join(
                  " • "
                )}
              </p>
              <p
                className="mb-0 fw-bold text-dark"
                style={{ lineHeight: "1.8" }}
              >
                {[
                  "Agile/Scrum",
                  "QA/Testing",
                  "Accessibility (WCAG)",
                  "Jira",
                ].join(" • ")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Origin Story */}

      <div className="col-md-4 p-4 mb-5 brdr-panel bg-warning halftone-pattern comic-brdr">
        <h2
          className="fs-2 mb-4 fw-bold"
          style={{ fontFamily: "Comic Sans MS, cursive" }}
        >
          <span className="text-primary">★</span> Origin Story
        </h2>
      </div>

      <div className="row">
        <div className="col-md-3">
          <div
            className=" brdr-panel min-height-350 "
            style={{
              backgroundImage: `url(${city})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            <p className="panel-text-wrapper  halftone-pattern">
              I was born and raised in Houston Tx{" "}
            </p>
          </div>
        </div>

        <div
          className="col-md-5 min-height-350"
          style={{
            transition: "transform 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.02)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          <div className=" brdr-panel panel-bg-green halftone-pattern min-height-350">
            <p className="panel-text-wrapper  halftone-pattern">
              At a young age I loved to express creativity by making storylines,
              building maps for games, and designing my myspace page{" "}
            </p>
            <div className="d-flex  justify-content-center">
              <img src={interest} alt="Interest" style={{ width: "45%" }} />
              <div className="ms-3">
                <Lottie animationData={dev} loop={true} className="" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="col-md-4 min-height-350 mb-5"
          style={{
            transition: "transform 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.02)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          <div className=" brdr-panel panel-bg-red halftone-pattern mb-2 min-height-350">
            <p className="panel-text-wrapper  halftone-pattern">
              My love for basketball landed me an opportunity to play in college{" "}
            </p>
            <div className="d-flex  justify-content-center">
              <img src={ball} alt="Interest" style={{ width: "90%" }} />
              <div></div>
            </div>
          </div>
        </div>

        <div
          className="col-md-3 min-height-350 mb-5"
          style={{
            transition: "transform 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.02)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          <div className=" brdr-panel panel-bg-red halftone-pattern ">
            <p className="panel-text-wrapper  halftone-pattern">
              But like most college students I did not know what I wanted to do
              with my life.{" "}
            </p>
            <div className="d-flex  justify-content-center">
              <img src={lost} alt="Interest" style={{ width: "100%" }} />
              <div></div>
            </div>
          </div>
        </div>

        <div
          className="col-md-4  min-height-350"
          style={{
            transition: "transform 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.02)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          <div className=" brdr-panel panel-bg-yellow halftone-pattern ">
            <p className="panel-text-wrapper  halftone-pattern">
              After a long journey I finally graduated, but now the real journey
              begins .{" "}
            </p>
            <div className="d-flex  justify-content-center">
              <img src={grad} alt="Interest" style={{ width: "50%" }} />
              <div></div>
            </div>
          </div>
        </div>

        <div
          className="col-md-5 min-height-350 mb-5"
          style={{
            transition: "transform 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.02)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          <div className=" brdr-panel panel-bg-green halftone-pattern ">
            <p className="panel-text-wrapper  halftone-pattern">
              I found myself working jobs where I would be working for 70 hours
              a week on call, and I couldn't find any fulfillment. Was this
              going to be how my story pans out? I did not give up! I kept
              working and ended up making really good friends along the way. But
              then ....{" "}
            </p>
            <div className="d-flex  justify-content-center">
              <img src={defeated} alt="Interest" style={{ width: "34%" }} />
              <div></div>
            </div>
          </div>
        </div>

        <div
          className="col-md-3 min-height-350 mb-5"
          style={{
            transition: "transform 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.02)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          <div className=" brdr-panel panel-bg halftone-pattern ">
            <p className="panel-text-wrapper  halftone-pattern">
              One of the biggest hurricanes on record hit the Houston area
              impacting many of our jobs, thus I ended up getting laid off{" "}
            </p>
            <div className="d-flex  justify-content-center">
              <Lottie
                animationData={rain}
                loop={true}
                style={{ width: "95%" }}
                className=""
              />
              {/* <img src={raining} alt="Interest" style={{ width: "95%" }} /> */}
              <div></div>
            </div>
          </div>
        </div>

        <div
          className="col-md-3 min-height-350 mb-5"
          style={{
            transition: "transform 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.02)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          <div className=" brdr-panel panel-bg-red halftone-pattern ">
            <p className="panel-text-wrapper  halftone-pattern">
              Slightly discouraged but hopeful that there was a world of
              opportunity waiting for me. As I was online looking for any open
              positions I came across a boot camp for full stack development{" "}
            </p>
            <div className="d-flex  justify-content-center">
              <img src={think} alt="Interest" style={{ width: "75%" }} />
              <div></div>
            </div>
          </div>
        </div>

        <div
          className="col-md-3 min-height-350 mb-5"
          style={{
            transition: "transform 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.02)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          <div className=" brdr-panel panel-bg-yellow halftone-pattern ">
            <p className="panel-text-wrapper  halftone-pattern">
              I knew right away this was something I wanted to do. But tuition
              fees made me question how I would ever be able to attend.{" "}
            </p>
            <div className="d-flex  justify-content-center">
              <img src={cost} alt="Interest" style={{ width: "85%" }} />
              <div></div>
            </div>
          </div>
        </div>

        <div
          className="col-md-3  min-height-350 mb-4 mt-4"
          style={{
            transition: "transform 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.02)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          <div className=" brdr-panel panel-bg-yellow halftone-pattern ">
            <div
              className="d-flex  justify-content-center position-relative"
              style={{ height: "150px" }}
            >
              <img
                src={squat}
                alt="Interest"
                style={{ width: "95%", top: "-10rem", left: "5rem" }}
                className="position-absolute"
              />

              <div></div>
            </div>
            <p className="panel-text-wrapper  halftone-pattern">
              My wife was very supportive and we came up with a plan so that I
              could get certified in a field that I knew I would enjoy and
              change my life.{" "}
            </p>
          </div>
        </div>

        <div
          className="col-md-3 min-height-350 mb-4 mt-4"
          style={{
            transition: "transform 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.02)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          <div className=" brdr-panel panel-bg halftone-pattern ">
            <p className="panel-text-wrapper  halftone-pattern">
              I enrolled and worked really hard to earn my certification. Right
              after I completed my certification I was able to get my first
              position as a junior developer.{" "}
            </p>
            <div className="d-flex  justify-content-center">
              {/* <img src={squat} alt="Interest" style={{ width: "95%", top: "-10rem", left: "5rem"  }}/> */}

              <div></div>
            </div>
          </div>
        </div>

        <div
          className="col-md-5 mb-4 mt-5"
          style={{
            transition: "transform 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.02)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          <div className=" brdr-panel panel-bg-green halftone-pattern ">
            <p className="panel-text-wrapper  halftone-pattern">
              Present day I continue to work hard and learn in my field. I love
              what I do and I am so grateful for the fact I get to do what I
              love for work. My journey is far from over and I am excited for
              what lies ahead. I know that with God at the center of my life
              there is no way I could fail. I am always reminded that when
              storms come growth always happens after.{" "}
            </p>
            <div className="d-flex  justify-content-center">
              <img src={surfing} alt="Interest" style={{ width: "45%" }} />

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

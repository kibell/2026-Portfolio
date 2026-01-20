import React, { Component } from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { BsFiletypeSql } from "react-icons/bs";
import { SiAdobexd } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { FaPython } from "react-icons/fa";
import line from "../../images/line.json";
import Lottie from "lottie-react";
import "./style.css";
import "../../utilities.css";

class Skills extends Component {
  render() {
    return (
      <section class="skillSec" id="skillSec">
        <div className="container">
          <h1 class="skillName">
            <span className="blue-hl">Skills</span>
          </h1>

          <div class="row mr-0">
            <div className=" col-md-2 text-center font-rem-5">
              {" "}
              <FaHtml5 className="icon" /> <br />{" "}
              <p className="text-white"> HTML </p>
            </div>
            <div className=" col-md-2 text-center font-rem-5">
              {" "}
              <FaCss3Alt className="icon" /> <br />{" "}
              <p className="text-white"> CSS </p>
            </div>
            <div className=" col-md-2 text-center font-rem-5">
              {" "}
              <DiJavascript className="icon" /> <br />{" "}
              <p className="text-white"> JavaScript </p>
            </div>
            <div className="col-md-6"></div>
            <div className=" col-md-2 text-center font-rem-5">
              {" "}
              <FaGitAlt className="icon" /> <br />{" "}
              <p className="text-white"> GIT BASH </p>
            </div>
            <div className=" col-md-2 text-center font-rem-5">
              {" "}
              <FaReact className="icon" /> <br />{" "}
              <p className="text-white"> REACT </p>
            </div>
            <div className=" col-md-2 text-center font-rem-5">
              {" "}
              <BsFiletypeSql className="icon" /> <br />{" "}
              <p className="text-white"> </p>
            </div>
            <div className="col-md-6"></div>
            <div className=" col-md-2 text-center font-rem-5">
              {" "}
              <FaPython className="icon" /> <br />{" "}
              <p className="text-white"> FaPython </p>
            </div>
            <div className=" col-md-2 text-center font-rem-5">
              {" "}
              <SiAdobexd className="icon" /> <br />{" "}
              <p className="text-white"> Adobe XD </p>
            </div>
            <div className=" col-md-2 text-center font-rem-5">
              {" "}
              <FiFigma className="icon" /> <br />{" "}
              <p className="text-white"> Figma </p>
            </div>
            
            <div className="col-md-6 skillCube"><Lottie animationData={line} loop={true} className="lottie" /></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;

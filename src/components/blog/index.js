import React, { Component } from "react";
import KBimg from "../../images/blog.json";
import { FaArrowDown } from "react-icons/fa";
import Lottie from "lottie-react";
import "./styles.css";
import "../../utilities.css";

class Blog extends Component {
  render() {
    return (
      <section className="blog mb-5 mt-5" id="blog">
        <div className="container theme-border p-5">
        <div className="row" id="blogSec"></div>

        <div className="row">
          <div className="col-lg-6 col-md-6  animate__animated animate__bounceInLeft animate__slower">
            <h1 className="mtc blogHead">Blogs
            </h1>


            <p>
              Check out my recent blogs{" "}
             
            </p>

              {" "}
              <a
                href="https://bellsproutdesigns.com/blog/"
                rel="noreferrer"
                target="_blank"
                className="theme-btn"
              >
                Read Blogs{" "}
              </a>{" "}
          </div>

          {/* <img className="mypic col-lg-5 col-md-12 col-sm-4 animate__animated animate__bounceInRight animate__slower" src={KBimg}  alt=""/> */}
          <Lottie animationData={KBimg} loop={true} className="blogBear" />
        </div>
        </div>
      </section>
    );
  }
}

export default Blog;

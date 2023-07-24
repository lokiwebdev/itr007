import React from "react";
import "../stylesheets/profile.css";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <section id="header">
        <div className="col-md-11  ">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 hero  ">
              {/* <h3 className="fw-bold text-primary">WELCOME TO ITR007</h3> */}
              <h1>
                Hi, I’m <span>Lokinder Singh</span>
              </h1>
              <h1>
                a
                <span>
                  <Typewriter
                    words={[
                      " React Developer ⌨ ",
                      " Professional Coder.",
                      " Web Developer.",
                      " Ethusiastic Dev 🙂 ",
                      " Cross Platform Dev 😎",
                    ]}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>

              <p>
                I use animation as a third dimension by which to simplify
                experiences and kuiding thro each and every interaction. I’m not
                adding motion just to spruce things up, but doing it in ways
                that.
              </p>

              <div className="profile-options">
                <button className="btnA primary-btn">Hire Me</button>
                <a href="lokicv.pdf" download="Lokinder lokicv.pdf">
                  <button className="btnA highlighted-btn">Get Resume</button>
                </a>
              </div>
            </div>

            <div className="col-md-5 ">
              <div className="profile-picture">
                <div className="profile-picture-background"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;

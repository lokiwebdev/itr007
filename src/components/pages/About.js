import React from "react";
import { NavLink } from "react-router-dom";
// import Typical from 'react-typical'

const About = () => {
  return (
    <>
      <section id="header">
        <div className="col-md-11  ">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6  ">
              <h1>
                {/* We Welcome's You In */}
                Income Tax e-Filing With
                <strong className="brand-name"> ITR007</strong>
              </h1>
              <h2 className="my-3">
              We are leaders in building technology for tax and compliance solutions
              </h2>
              <h2 className="my-3">
                Here You Can Get Help In Filing Your Incum Tax Return Online So Contact Now.
              </h2>
             
              <div className="my-4">
                <NavLink to="/contact" className="btnA">
                  Contact Us
                </NavLink>
              </div>
            </div>

            <div className="col-md-5 ">
              <lottie-player
                // src="https://assets8.lottiefiles.com/packages/lf20_rnnlxazi.json"
                src="https://assets3.lottiefiles.com/packages/lf20_XyoSty.json"
                background="transparent"
                speed="1"
                // style="width: 300px; height: 300px;"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

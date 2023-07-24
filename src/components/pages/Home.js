import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    // Set the date we're counting down to
    const countDownDate = new Date("July 31, 2023 24:00:00").getTime();

    // Update the count down every 1 second
    const interval = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Format the countdown time
      const formattedTime = `${days} days ${hours} hours ${minutes}m ${seconds}s`;

      // Update the timeLeft state
      setTimeLeft(formattedTime);

      // If the count down is finished, clear the interval
      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft("EXPIRED");
      }
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section id="header">
        <div className="col-md-11  ">
          <section className="container ">
            <p className="h1 fw-bold text-primary my-4">
              Hurry! Only{" "}
              <span className="fw-bold" id="timer">
                {timeLeft}
              </span>{" "}
              left.
            </p>
          </section>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6  ">
              <h1>
                File your ITR online with
                <strong className="brand-name"> ITR007</strong>
              </h1>
              <h2 className="my-3">
                Leave all your Tax-filing work with us. Our CAs and Tax-Experts
                will review your documents and file tax return for you. Sit back
                and relax, and let us do the heavy lifting for you.
              </h2>
              <div className="my-4">
                <NavLink to="/contact" className="btnA">
                  Contact Us
                </NavLink>
              </div>
            </div>

            <div className="col-md-5 ">
              <lottie-player
                src="https://assets8.lottiefiles.com/packages/lf20_rnnlxazi.json"
                // src="https://assets3.lottiefiles.com/packages/lf20_XyoSty.json"
                background="transparent"
                speed="1"
                // style="width: 300px; height: 300px;"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          <div>
            <p className="my-4">
              Our mission is to simplify finances, save money and time for
              millions of Indian businesses and people. We are a technology
              company that builds trusted, useful and insightful platforms for
              our clients to run their finances and improve their relationship
              with money.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

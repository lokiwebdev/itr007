import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
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
    <>
      <div className="my-5 container">
        <section className="container ">
          <p className="h1 fw-bold text-primary">
            Hurry! Only{" "}
            <span className="fw-bold" id="timer">
              {timeLeft}
            </span>{" "}
            left.
          </p>
        </section>

        <div className="my-5 row col-md-12 justify-content-around align-items-center ">
          <div className="col-md-6  ">
            <h1>
              File your ITR online with
              <strong className="brand-name"> ITR007</strong>
            </h1>

            <div className="lil-flex lil-pt-6 lil-items-center sm:lil-items-start">
              <p className="sm:lil-w-5/6 lil-w-10/12">
                Our mission is to simplify finances, save money and time for
                millions of Indian businesses and people. We are a technology
                company that builds trusted, useful and insightful platforms for
                our clients to run their finances and improve their relationship
                with money.
              </p>
            </div>
            <div className="my-4">
              <Link to="/contact" className="btnA">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="col-md-5 m-2 ">
            <video width="100%" height="auto" autoPlay muted loop className="">
              <source
                src="https://assets1.cleartax-cdn.com/cleartax/images/1612528082_aboutus_banner_31.mp4"
                background="transparent"
                type="video/mp4"
              />
              Your browser does not support HTML video.
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

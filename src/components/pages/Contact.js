import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import contact1 from "../assets/boy.png"
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setData] = useState({
    name: "",
    phone: "",
    email: "",
    msg: "",
  });

  let navigate = useNavigate();
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oi2ktic', 'template_vyq0mgg', form.current, 'w7IEDknGECMVj6hXg')
      .then((result) => {
          console.log(result.text);
          alert("Your Form Submited ")
      }, (error) => {
          console.log(error.text);
      });
      // e.target.reset();
      setData({name: "", phone: "", email: "", msg: "" });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${formData.name}.My mobile number is ${formData.phone} and email is ${formData.email}, Here is what i whant to say : ${formData.msg} `
    );

    // Perform API upload here using formData state

    const url = `https://64af87c2c60b8f941af42f32.mockapi.io/costumers`;

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers:{
        "Content-Type":'application/json',
        "Accept":'application/json'
      }
    })
      .then((response) => response.json())
      .then((formData) => {
        // Handle success response
        console.log('Upload successful', formData);
      })
      .catch((error) => {
        // Handle error
        console.error('Upload error', error);
      });

    // navigate("/");
    // e.target.reset();
    setData({name: "", phone: "", email: "", msg: "" });
  };

  return (
    <div className="my-5 container">
      <section className="container ">
        <div className="col">
          {/* <p className="h1 fw-bold text-primary">Contact Us</p> */}
          <p className="h1 fw-bold text-primary">File ITR confidently for any income</p>
          <p className=" fst-italic">
            Our mission is to simplify finances, save money and time for
            millions of Indian businesses and people. We are a technology
            company that builds trusted, useful and insightful platforms for our
            clients to run their finances and improve their relationship with
            money.
          </p>
          <p className="h4 fw-bold text-primary" >
            {/* File This Form We Will Contact You */}
            Get Instant Tax Help
          </p>
        </div>
      </section>

      <div className="my-5 row col-md-12 justify-content-around align-items-center ">
        <div className="col-md-5 m-2 ">
          {/* <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_twijbubv.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player> */}

          {/* <div className='left'> */}
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact1} alt='img' />
                </div>
                <div className='details'>
                  <h1>Lokinder Singh</h1>
                  <p>Front-End Web Developer</p>
                  {/* <p>I am available for freelance work. Connect with me via and call in to my account.</p> <br /> */}
                  <p>Phone: +91-8468092173</p>
                  <p>Email: lokinder007@gmail.com</p> <br />
                  <span>FOLLOW US</span>
                  <div className='f_flex'>
                    <a className='btn_shadow' href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
                      <i class='fab fa-facebook-f' />
                    </a>
                    <a className='btn_shadow' href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
                      <i class='fab fa-twitter' />
                    </a>
                    {/* <a className='btn_shadow' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
                      <i class='fab fa-instagram' />
                    </a> */}
                    <a className='btn_shadow' href="https://www.linkedin.com/in/lokinder007/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                      <i class='fab fa-linkedin-in' />
                    </a>  
                  </div>
                </div>
              </div>
            {/* </div> */}
        </div>

        <form ref={form} className="form col-md-5 m-2 " onSubmit={sendEmail}>
          <h1 style={{ fontSize: 30 }}>We Will Contact You</h1>
          <p style={{ fontSize: 20 }}>Enter Your Details </p>

          <div className="mb-1">
            <label htmlFor="name" className="px-3 h5">
              Name*:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter Your FullName"
            />
          </div>

          <div className="mb-1">
            <label className="px-3 h5">Phone:</label>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Mobile Number"
            />
          </div>

          <div className="mb-1">
            <label className="px-3 h5">Email*:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              required
            />
          </div>

          <div className="mt-3">
            <label className="px-1 h5">Message*</label>
            <textarea
              rows="3"
              name="msg"
              value={formData.msg}
              onChange={handleChange}
              placeholder="Enter Your Message Here"
              required
            />
          </div>

          {/* <button className="btnAbtn-outline-primary" type="submit">Submit form</button> */}
          <button className="btnA my-4" type="submit">
            Submit form
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

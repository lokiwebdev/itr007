import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import PdtImg from "../assets/pdtImg.jpg"

const CstAdd = () => {
  const [formData, setData] = useState({
    name: "",
    phone: "",
    email: "",
    msg: "",
  });

  const url = `https://64af87c2c60b8f941af42f32.mockapi.io/costumers/`;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...formData, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/service");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="row col-md-12">
        <div className="row text-center">
          <div className="col">
            <p className="h1 fw-bold text-primary">Add Customer</p>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              voluptas officia officiis vero quibusdam ab maiores, quasi tenetur
              corporis sapiente veniam, ipsa expedita alias amet unde eum quas
              laboriosam voluptate provident.
            </p>
          </div>
        </div>

        <form className="form col-md-5 m-2 " onSubmit={handlesubmit}>
          <h1 className="mb-5" style={{ fontSize: 30 }}>Enter Customer's Details</h1>
          {/* <p style={{ fontSize: 30 }}>Enter Your Details </p> */}

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
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-1">
            <label className="px-3 h5">Phone:</label>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your mobile number"
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
          <button className="btnA mt-4" type="submit">
            Submit form
          </button>
        </form>

        <div className="col-md-5 m-4 ">
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_twijbubv.json"
            background="transparent"
            speed="1"
            // style="width: 300px; height: 300px;"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </>
  );
};

export default CstAdd;

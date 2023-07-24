import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import photo from "../assets/boy.png"

const CstEdit = () => {
  const { cstid } = useParams();

  //const [empdata, empdatachange] = useState({});

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const url = `https://64af87c2c60b8f941af42f32.mockapi.io/costumers/`;

  useEffect(() => {
    fetch(url + cstid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setId(resp.id);
        setName(resp.name);
        setEmail(resp.email);
        setPhone(resp.phone);
        setMsg(resp.msg);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [cstid]);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const cstdata = { name, email, phone, msg };

    fetch(url + cstid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(cstdata),
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
            <p className="h1 fw-bold text-primary">Edit Customer</p>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              voluptas officia officiis vero quibusdam ab maiores, quasi tenetur
              corporis sapiente veniam, ipsa expedita alias amet unde eum quas
              laboriosam voluptate provident.
            </p>
          </div>
        </div>

        <div className="col-md-5 m-4 ">
          <img className="productView-img" src={photo} alt="" />
        </div>

        <form className="form col-md-5 m-4 " onSubmit={handlesubmit}>
          <h1 className="mb-5" style={{ fontSize: 25 }}>
            Update Customer Details
          </h1>

          <div className="mb-1 ">
            <label className="px-3 h5">Photo:</label>
            <input
              type="text"
              name="photo"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="Product pic url"
            />
          </div>
          <div className="mb-1 ">
            <label htmlFor="name" className="px-3 h5">
              Name*:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter the product name"
            />
          </div>
          <div className="mb-1 ">
            <label className="px-3 h5">Email*:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter The Email"
              required
            />
          </div>
          <div className="mb-1 ">
            <label className="px-3 h5">Phone No*:</label>
            <input
              type="number"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter The Phone No"
              required
            />
          </div>
          <div className="mb-1 ">
            <label className="px-3 h5">Message:</label>
            <input
              type="text"
              rows="3"
              name="msg"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Enter The Message"
              required
            />
          </div>
          {/* <div className="mt-3">
            <label className="px-1 h5">Message*:</label>
            <textarea
              rows="3"
              name="msg"
              value={formData.msg}
              onChange={handleChange}
              placeholder="Enter Your Message Here"
              required
            />
          </div> */}

          <button className="btnA mx-2 my-4" type="submit">
            Update
          </button>
          <Link to="/service" className="btnA mx-2 my-4">
            Back
          </Link>
        </form>
      </div>
    </>
  );
};

export default CstEdit;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import Loader from "../layout/Loader";
// import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "female",
  });
  const [loading, setLoading] = useState(false);
  // const auth = getAuth();

  useEffect(() => {
    const auth = localStorage.getItem("token");
    if (auth) {
      navigate("/");
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `https://64af87c2c60b8f941af42f32.mockapi.io/users`;

    fetch(url, {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((input) => {
        // Handle success response
        console.log("Registered successfully", input);
      })
      .catch((error) => {
        // Handle error
        console.error("Upload error", error);
      });

    // localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };

  return (
    <div className="register-parent my-3">
       {/* {loading && <Loader />}  */}

      <div className="row justify-content-center py-3">
        <div className="col-md-5 z1">
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_yr6zz3wv.json"
            background="transparent"
            speed="1"
            // style="width: 300px; height: 300px;"
            loop
            autoplay
          ></lottie-player>
        </div>

        <div className="col-md-5 z1">
          <form onSubmit={handleSubmit}>
            <div className="register-form">
              <h2>Register</h2>
              <hr />
              <input
                type="text"
                className="form-control my-2"
                placeholder="Name"
                name="name"
                value={input.name}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                required
              />
              <input
                type="text"
                className="form-control my-2"
                placeholder="Email"
                name="email"
                value={input.email}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                required
              />
              <input
                type="password"
                className="form-control my-2"
                placeholder="Password"
                name="password"
                value={input.password}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                required
              />
              <input
                type="number"
                className="form-control my-2"
                placeholder="Phone No"
                name="phone"
                value={input.phone}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                required
              />
              
              <div className="form-group my-2">
                <label htmlFor="gender" className="mx-2 h5">
                  Gender:
                </label>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    checked={input.gender === "male"}
                    onChange={(e) =>
                      setInput({ ...input, [e.target.name]: e.target.value })
                    }
                    name="gender"
                    value="male"
                    className="form-check-input"
                  />
                  <label htmlFor="male" className="form-check-label mr-2">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    checked={input.gender === "female"}
                    onChange={(e) =>
                      setInput({ ...input, [e.target.name]: e.target.value })
                    }
                    name="gender"
                    value="female"
                    className="form-check-input"
                  />
                  <label htmlFor="female" className="form-check-label">
                    Female
                  </label>
                </div>
              </div>

              <div className="">
                <input
                  className="form-check-input mx-2"
                  type="checkbox"
                  value=""
                  id="invalidCheck"
                  required
                />
                <label className="form-check-label fs-6" for="invalidCheck">
                  I Agree to terms and conditions
                </label>
              </div>
              <br />
              <button className="btnA" type="submit">
                REGISTER
              </button>

              <hr />
              {/* <Link activeStyle={{ color:'green', fontWeight: 'bold'}} to="/login">Click Here to Login</Link> */}
              <Link to="/login">Already Registered? Login</Link>
            </div>
          </form>
        </div>
      </div>
      <div className="register-bottom "></div>
    </div>
  );
};

export default Register;

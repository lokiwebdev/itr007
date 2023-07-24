import React, { useContext, useEffect, useState } from 'react'
import { useRef } from 'react';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
// import { toast } from 'react-toastify';
// import { LoginContext } from '../../App';
// import Loader from '../layout/Layout';

function Login() {
    // const { cstid } = useParams();

    const [cstData, setCstData] = useState({});

    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: "",
    });
    const url = `https://64af87c2c60b8f941af42f32.mockapi.io/users?email=`;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const [loading, setLoading] = useState(false)
    // const  setLoggedIn = useContext(LoginContext);
    const [loggedIn, setLoggedIn] = useState(localStorage.token ? true : false);

    // useEffect(() => {
    //     const auth = localStorage.getItem("token")

    //     if (auth) {
    //         navigate("/")
    //     }

    // }, [])

    const handleLogin = async(e) => {
        e.preventDefault();

        try {
            const response = await fetch(url + input.email);
            const cstData = await response.json();
            localStorage.setItem("user", JSON.stringify(cstData));
        
            const user = localStorage.getItem("user");
            const loggeduser = JSON.parse(user);
            
            if (!user) {
              alert("Please Register Yourself Then Login");
              setInput({ email: "", password: "" });
            } else if (user && input.email === loggeduser[0].email && input.password === loggeduser[0].password) {
              localStorage.setItem("token", JSON.stringify(input));
              setLoggedIn(true);
              console.log("Sign-in successful");
              navigate("/service");
            } else {
              alert("Invalid Email or Password");
              setInput({ email: "", password: "" });
            }
          } catch (error) {
            console.log('Login error', error.message);
          }

    }


    return (
        <div className='login-parent my-3 '>
            {/* {loading && (<Loader />)} */}

            <div className="row justify-content-center py-3">

                <div className="col-md-4 z1">
                    <div className="login-form">
                        <h2>Login</h2>
                        <hr />
                        <input
                            className='form-control my-2'
                            type="email"
                            name="email"
                            value={input.email}
                            onChange={handleChange}
                            placeholder="Enter Your Email"
                            required
                        />

                         {/* <br/> */}
                        <input
                            className='form-control my-2'
                            type="password"
                            name="password"
                            value={input.password}
                            onChange={handleChange}
                            placeholder="Enter Your Password"
                            required
                        />
                         <br />
                        <button className=' btnA' onClick={handleLogin}>LOGIN</button>
                       

                        <hr />
                        <Link className='text-smart' to='/register'>Click Here to Register</Link>

                    </div>
                </div>
                <div className="col-md-5 z1">
                    <lottie-player
                        src="https://assets2.lottiefiles.com/packages/lf20_gjmecwii.json"
                        background="transparent"
                        speed="1"
                        // style="width: 300px; height: 300px;"
                        loop
                        autoplay>

                    </lottie-player>
                </div>
            </div>

            {/* <div className="login-bottom "></div> */}


        </div>
    )
}

export default Login
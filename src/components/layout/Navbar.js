import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/lion.png";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const loggeduser = JSON.parse(localStorage.getItem("user"));
  const [loggedInNav, setLoggedInNav] = useState(
    localStorage.token ? true : false
  );
  let navigate = useNavigate();

  // const location = useLocation();

  useEffect(() => {
    localStorage.token ? setLoggedInNav(true) : setLoggedInNav(false);
  }, [localStorage.length]);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await localStorage.removeItem("token");
      console.log("Signed-out successfully");
      // localStorage.clear()
      setLoggedInNav(false);
      navigate("/login");
    } catch {
      alert("Error!");
      console.log("error in signOut");
    }
  };
  return (
    <>
      <nav>
        <div className="logoContainer">
          <Link className="logo " to="/">
            <img src={logo} alt="logo" className="logoImg" />
            <h2>
              <span>ITR</span>
              00<span>7</span>
            </h2>
          </Link>
        </div>

        <div>
          {loggedInNav ? (
            <ul className={clicked ? "navbar active" : "navbar"}>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink
                  className="dropdown-toggle"
                  to="$"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {loggeduser[0].name}
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink to="/profile">
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/service">
                      Service
                    {/* {loggeduser.email} */}
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink  onClick={handleLogout} to="$">
                      LogOut
                    </NavLink>
                  </li>
                </ul>
              </li>

            </ul>
          ) : (
            <ul className={clicked ? "navbar active" : "navbar"}>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <button className="btnA" onClick={() => navigate("/login")} >Login</button>
              </li>
            </ul>
          )}
        </div>

        <div id="mobile" onClick={() => setClicked(!clicked)}>
          <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import "./components/stylesheets/layout.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Errorpage from "./components/pages/Errorpage";

import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Service from "./components/pages/Service";
import Blog from "./components/pages/Blog/Blog";
import BlogA from "./components/pages/BlogA";
import Profile from "./components/pages/Profile";
import CstAdd from "./components/pages/CstAdd";
import CstView from "./components/pages/CstView";
import CstEdit from "./components/pages/CstEdit";

export default function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/" exact element={<Home />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/blog" exact element={<Blog />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/contact" exact element={<Contact />} />

            <Route path="/service" exact element={<Service />} />
            <Route path='/customers/add' element={<CstAdd />} />
            <Route path='/customers/view/:cstid' element={<CstView />} />
            <Route path='/customers/edit/:cstid' element={<CstEdit />} />

            {/* <Route path="/task" exact element={<Task />} /> */}

            <Route path="*" element={<Errorpage />} />
          </Routes>
        </div>
        <Footer />
      </>
    </Router>
  );
}

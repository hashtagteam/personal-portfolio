import React from "react";
import Footer from "./Head&Footer/Footer";
import Nav from "./Head&Footer/Nav";
import About from "./Home/About";
import Home from "./Home/Home";
import Projects from "./Home/Projects";
import Testimonial from "./Home/Testimonial"
import Blogs from "./Home/Blogs"
import Contact from "./Home/Contact";

const Whole = () => {
  return (
    <>
      <div className="sm:relative w-[100%]">
        <div className=" sm:fixed sm:left-0 sm:top-0 sm:w-1/5">
          <Nav />
          <div className="hidden sm:block">
            <Footer />
          </div>
        </div>

        <div className="sm:flex sm:justify-end">
        <div className=" sm:w-4/5">
          <Home />
          <About />
          <Projects/>
          <Testimonial/>
          <Blogs/>
          <Contact/>
        </div>
        </div>
      </div>

      <div className="block sm:hidden">
        <Footer />
      </div>
    </>
  );
};

export default Whole;

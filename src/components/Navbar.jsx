import React from "react";
import { Link } from "react-scroll";
export const Navbar = () => {
  return (
    <div id="navbar" className="fixed w-full">
      <div className="flex w-full bg-gradient-to-r from-teal-300 to-fuchsia-400 h-28  items-center px-4 justify-between sticky">
        <div>
          <img
            src="https://i.ibb.co/LvMSQDX/DC3-A629-D-11-EF-4-B1-F-B8-FA-85-E588-DD56-BE-1-201-a.jpg"
            alt="DC3-A629-D-11-EF-4-B1-F-B8-FA-85-E588-DD56-BE-1-201-a"
            className="rounded-full h-24 w-24"
          />
        </div>
        <div className="flex flex-wrap  w-[55%] sm:w-auto sm:space-x-2  bg-gradient-to-r from-fuchsia-50 to-cyan-100 bg-clip-text text-transparent md:space-x-4 lg:space-x-6 font-normal">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            className="cursor-pointer mr-6 mb-2 sm:mr-0"
          >
            Home
          </Link>

          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            className="cursor-pointer  mr-6  mb-2 sm:mr-0"
          >
            <p>About</p>
          </Link>

          <Link
            activeClass="active"
            to="certifications"
            spy={true}
            smooth={true}
            className="cursor-pointer  mr-6 mb-2 sm:mr-0"
          >
            <p>Certifications</p>
          </Link>

          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            className="cursor-pointer  mr-6 mb-2 sm:mr-0"
          >
            <p>Projects</p>
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            className="cursor-pointer  mr-6 mb-2 sm:mr-0"
          >
            <p>skills</p>
          </Link>

          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            className="cursor-pointer  mr-6  mb-2 sm:mr-0"
          >
            <p>Contact Me</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

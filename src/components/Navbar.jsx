import React from "react";
import { Link } from "react-scroll";
import { useState } from "react";

const links = [
  { id: 1, to: "home", title: "Home" },
  { id: 2, to: "about", title: "About" },
  { id: 3, to: "certifications", title: "Certifications" },
  { id: 4, to: "projects", title: "Projects" },
  { id: 5, to: "skills", title: "Skills" },
  { id: 6, to: "contact", title: "Contact" },
];

const NavLink = ({ to, isactive, title, id, handleClick }) => {
  return (
    <div>
      <Link
        activeClass={id === 1 && "active"}
        to={to}
        spy={true}
        smooth={true}
        className="cursor-pointer mr-6 mb-2 sm:mr-0"
        onClick={() => handleClick(id)}
      >
        {title}
      </Link>
      {isactive && (
        <div className="h-1 bg-gradient-to-l from-cyan-500 to-fuchsia-600 mr-5 sm:mr-0 rounded"></div>
      )}
    </div>
  );
};

export const Navbar = () => {
  const [activeTab, setActiveTab] = useState(links[0].id);
  const handleClick = (value) => {
    setActiveTab(value);
  };

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
          {links.map((each) => (
            <NavLink
              id={each.id}
              to={each.to}
              title={each.title}
              handleClick={handleClick}
              isactive={activeTab === each.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

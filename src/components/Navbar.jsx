import React from "react";

export const Navbar = () => {
  return (
    <div className="flex w-full bg-gradient-to-r from-teal-300 to-fuchsia-400 h-28  items-center px-4 justify-between">
      <div>
        <img
          src="https://i.ibb.co/LvMSQDX/DC3-A629-D-11-EF-4-B1-F-B8-FA-85-E588-DD56-BE-1-201-a.jpg"
          alt="DC3-A629-D-11-EF-4-B1-F-B8-FA-85-E588-DD56-BE-1-201-a"
          className="rounded-full h-24 w-24"
        />
      </div>
      <div className="flex sm:space-x-2  bg-gradient-to-r from-fuchsia-50 to-cyan-100 bg-clip-text text-transparent md:space-x-4 lg:space-x-6 font-light">
        <p>Home</p>
        <p>About</p>
        <p>Certifications</p>
        <p>Projects</p>
        <p>Contact Me</p>
      </div>
    </div>
  );
};

import React from "react";

export const Home = () => {
  return (
    <div id="home">
      <div className="flex sm:flex-row flex-col bg-gradient-to-r from-fuchsia-200 to-cyan-200 h-[820px] items-center justify-center sm:justify-around pt-20">
        <p className="text-fuchsia-900 p-4 text-center font-light sm:text-xl">
          Hi I am
          <span className="block text-4xl lg:text-6xl sm:text-5xl font-light">
            Sruthi, a front-end developer
          </span>{" "}
          with 1.2 years of freelancing experience.I design and build
          user-interfaces.
          <span className="block">
            I make web a beautiful place with every line of code
          </span>
        </p>
        <img
          src="https://i.ibb.co/VCkkWxT/8530-E800-530-C-4-B32-BC4-B-988093897853-1-201-a.jpg"
          alt="8530-E800-530-C-4-B32-BC4-B-988093897853-1-201-a"
          className="rounded-t-full h-[450px] sm:h-[500px] lg:h-[550px] xl:h-[550px] mt-4 "
        />
      </div>
    </div>
  );
};

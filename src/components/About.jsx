import React from "react";
import { Skills } from "./Skills";

export const About = () => {
  return (
    <div id="about">
      <div className="flex flex-col xl:gap-16 justify-between xl:flex-row bg-gradient-to-r from-cyan-200 to-fuchsia-200  p-11 py-20 text-fuchsia-900 font-light">
        <div className="xl:w-[55%]">
          <h1 className="text-4xl font-light py-5 sm:text-6xl">About Me</h1>
          <div className="flex items-center justify-center ">
            <div className="sm:text-lg xl:text-xl">
              <p>
                My name is Sruthi Palle. I have completed my graduation in
                Humanities. After completion of my graduation i was looking for
                good career options. While using websites with good Ui design, i
                found myself interested in Web Development.I learnt Front-End
                Web Development from my sister who is a Reactjs developer.After
                that I started doing freelancing projects in october,2021. In
                May 2022,I joined NxtWave Full Stack Web Development Course to
                learn Backend technologies. Currently i am having 1.2 years of
                freelancing experience.currently i am looking for Full-time
                oportunities in Front-end Developer roles
              </p>
              <p className="mt-5">
                <span className="font-bold text-3xl">
                  Experience/Services :
                </span>{" "}
                I have designed and built user Interfaces. I have worked on{" "}
                <span className="font-medium text-xl">
                  Login authentication and Authorisation, JWT, File and Folder
                  structure, Git, Pull requests on github, Fetch API
                </span>
                . Designing the website using Functional Components and React
                Hooks. Implementing the figma design into functionable Website
                using ReactJs. I have worked on{" "}
                <span className="font-medium text-xl">State Management</span> in
                ReactJS using{" "}
                <span className="font-medium text-xl">
                  Redux State Management toolkit
                </span>
                . I have experience of using{" "}
                <span className="font-medium text-xl">Tailwind Css</span> for
                styling the website with{" "}
                <span className="font-medium text-xl">
                  Minimal and Clean Code.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="xl:w-[45%]" id="skills">
          <Skills />
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Skills } from "./Skills";

export const About = () => {
  return (
    <div id="about">
      <div className="flex flex-col xl:gap-16 justify-around xl:flex-row bg-gradient-to-r from-cyan-200 to-fuchsia-200  p-11 py-20 text-fuchsia-900 font-light">
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

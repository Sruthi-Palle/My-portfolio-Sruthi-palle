import React from "react";
import html from "../Icons/html.png";
import jsPink from "../Icons/jsPink.png";
import htmloutline from "../Icons/htmloutline.png";
import htmlPink from "../Icons/htmlPink.png";
import css from "../Icons/css.png";
import js from "../Icons/js.png";
import react from "../Icons/React.png";
import reactBlue from "../Icons/reactBlue.png";
import mui from "../Icons/mui.png";
import tailwind from "../Icons/tailwind.png";
import redux from "../Icons/redux.png";
import node from "../Icons/nodejs.jpeg";
import git from "../Icons/git.png";
import github from "../Icons/github.png";
import router from "../Icons/router.png";

const imageLinks = [
  { image: htmloutline, title: "HTML" },
  { image: css, title: "CSS" },
  { image: jsPink, title: "JavaScript" },
  { image: react, title: "React Js" },
  { image: mui, title: "Material UI" },
  { image: tailwind, title: "Tailwind CSS" },
  { image: redux, title: "Redux" },
  { image: router, title: "Router" },
  { image: git, title: "Git" },
  { image: github, title: "Github" },

  { image: node, title: "Node Js" },
];

const LogoImage = ({ image, title }) => {
  return (
    <div>
      <img
        src={image}
        className=" h-20 w-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28"
        alt="html"
      />
      <h1 className="font-medium text-center">{title}</h1>
    </div>
  );
};

export const Skills = () => {
  return (
    <>
      <h1 className="text-4xl font-light py-5 sm:text-6xl">Skills</h1>
      <div className="flex flex-wrap gap-5 justify-around sm:justify-start">
        {imageLinks.map((each) => (
          <LogoImage image={each.image} title={each.title} />
        ))}
      </div>
    </>
  );
};

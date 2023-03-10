import React from "react";
import blogimage from "../images/blogs.png";
import jobbyImage from "../images/jobbyApp.png";
import projectApp from "../images/projectsWebsite.png";
import spotifyImage from "../images/SpotifyClone.png";
import Swiggyimage from "../images/SwiggyWebsite.png";
import porfolioImage from "../images/portfolioWebsite.png";
import wikiInage from "../images/WikipediaImage.png";
import todoimage from "../images/TodoImage.png";
import { CardProject } from "./CardProject";
const links = [
  {
    id: 1,
    image: spotifyImage,
    website: "spotify-app-sruthi-palle.netlify.app/",
    title: "Spotify Music App",
    description:
      "Implemented a responsive Spotify Music App where users can hear favourite and popular songs by searching the song or movie name or language name in the search bar.",
    githubLink: "https://github.com/Sruthi-Palle/spotify-app-sruthiPalle",
    tech: "HTML, CSS, JavaScript,React Js, Redux, Tailwind CSS,RestAPI,React-router V6",
  },
  {
    id: 2,
    image: porfolioImage,
    website: "",
    title: "My Portfolio Website",
    description:
      "Implemented portfolio Website with beatiful UI which showcase my Skills, Certifications, Projects. ",
    githubLink: "https://github.com/Sruthi-Palle/My-portfolio-Sruthi-palle",
    tech: "HTML, CSS, JavaScript,React Js,TailWind Css,RestAPI",
  },
  {
    id: 3,
    image: Swiggyimage,
    website: "sruthikitchen.ccbp.tech",
    title: "Swiggy Clone",
    description:
      "Implemented a responsive Online Food Ordering System like Swiggy/Zomato where users can see popular restaurants with sort by rating, specific restaurant details, adding or removing food items to cart, and payments section",
    githubLink: "https://github.com/Sruthi-Palle/swiggy-Clone",
    tech: "HTML, CSS, JavaScript, React JS, Bootstrap, React Slick, Figma,JWT Token,Authentication and Authorisation ",
  },
  {
    id: 4,
    image: jobbyImage,
    website: "https://nxtjobby.ccbp.tech/login",
    title: "Jobby App",
    description:
      "Implemented Jobby App where users can log in and can see a list of jobs with search by Job title, filters based on Salary range and Employment type, etc",
    githubLink: "",
    tech: "HTML,React JS, JS, CSS, Bootstrap, Routing, REST API Calls,JWT Token,Authentication and Authorisation",
  },
  {
    id: 5,
    image: blogimage,
    website: "shruthi-blogs-api-react-app.netlify.app/",
    title: "Blogs App",
    description:
      "Developed simple blog list application where user can see list of blogs in user profile section.Implemented blog list using React component, props, lists & keys",
    githubLink:
      "https://github.com/Sruthi-Palle/fetch-api-blogs-react-router-app",
    tech: "HTML, CSS, JavaScript,React Js,FetchAPI,React-router-v6",
  },
  {
    id: 6,
    image: projectApp,
    website: "shruthi-projects-reactjs-website.netlify.app/",
    title: "Projects App",
    description:
      "Developed a website where people like interviewers can see list of projects that a person implemented.",
    githubLink:
      "https://github.com/Sruthi-Palle/ReactJs-projects-categories-app",
    tech: "HTML, CSS, JavaScript,React Js",
  },
  {
    id: 7,
    image: wikiInage,
    website: "sruthipallewiki.ccbp.tech",
    title: "Wikipedia App",
    description:
      "Developed custom wikipedia search application where user can search and view curated results and can see detailed explanation in wikipedia by clicking on the specific result.",
    githubLink: "https://github.com/Sruthi-Palle/sruthipalle_wikipedia_app",
    tech: "HTML, CSS, JavaScript,Bootstrap",
  },
  {
    id: 8,
    image: todoimage,
    website: "sruthipalletodo.ccbp.tech",
    title: "Todo App",
    description:
      "Developed persistent todo application with CRUD operations to track list of tasks.updated UI dynamically by using JavaScript DOM operations.",
    githubLink: "",
    tech: "HTML, CSS, JavaScript,Bootstrap",
  },
];

export const Projects = () => {
  return (
    <div id="projects">
      <div className="bg-gradient-to-r from-cyan-200 to-fuchsia-200  p-5 text-fuchsia-800 font-light ">
        <h1 className="text-4xl font-light py-5 sm:text-6xl text-fuchsia-800  px-10 pb-16">
          Projects
        </h1>
        <div className="flex  sm:flex-row flex-col flex-wrap gap-10 justify-around items-center lg:justify-start p-2 lg:gap-12 lg:pl-9">
          {links.map((each) => (
            <CardProject
              image={each.image}
              website={each.website}
              title={each.title}
              description={each.description}
              githubLink={each.githubLink}
              key={each.id}
              tech={each.tech}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

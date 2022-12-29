import React from "react";

export const CardProject = ({
  image,
  website,
  title,
  description,
  githubLink,
  tech,
}) => {
  return (
    <div className="bg-gradient-to-r from-pink-300 to-pink-400 sm:w-[45%] w-[90%] h-[600px] lg:w-[30%] rounded-xl p-7 ">
      <img src={image} alt={title} className="rounded-lg" />
      <h1 className="text-cyan-700 text-2xl font-medium pb-2 pt-7">{title}</h1>
      <p className="text-cyan-700 font-light ">{description}</p>
      <p className="text-cyan-700 my-2 ">
        <span className="text-cyan-700 font-bold">Technologies used : </span>
        {tech}
      </p>
      <button className="my-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 bg-transparent hover:bg-cyan-500 text-cyan-600 font-semibold hover:text-white py-2 px-4 border border-cyan-600 hover:border-transparent rounded">
        <a href={githubLink}>View Code</a>
      </button>
    </div>
  );
};

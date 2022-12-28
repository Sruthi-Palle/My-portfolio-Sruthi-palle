import React from "react";

export const CardProject = ({
  image,
  website,
  title,
  description,
  githubLink,
}) => {
  return (
    <div className="bg-gradient-to-r from-pink-300 to-pink-400 sm:w-[45%] w-[90%] h-[500px] lg:w-1/3 rounded-xl p-7 ">
      <img src={image} alt={title} className="rounded-lg" />
      <h1 className="text-teal-900 font-medium py-2">{title}</h1>
      <p className="text-teal-900">{description}</p>
    </div>
  );
};

import React from "react";

export const CertificationsCard = ({ certification, title, verify }) => {
  return (
    <div className=" text-fuchsia-800 px-10 py-6 lg:w-[45%] md:mx-20 lg:m-0 ">
      <img src={certification} alt={title} />
      <h1 className="text-2xl py-2 lg:truncate">{title}</h1>
      <button className="bg-transparent hover:bg-cyan-500 text-cyan-600 font-semibold hover:text-white py-2 px-4 border border-cyan-600 hover:border-transparent rounded">
        <a href={verify}>verify</a>
      </button>
    </div>
  );
};

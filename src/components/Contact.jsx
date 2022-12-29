import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactsIcon from "@mui/icons-material/Contacts";
import EmailIcon from "@mui/icons-material/Email";

export const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col bg-gradient-to-r from-fuchsia-200 to-cyan-200 text-fuchsia-900  py-20 items-center"
    >
      <div>
        <h1>
          <ContactsIcon />
          <span className="ml-1"> Contact No : </span>8712149947
        </h1>
        <h1>
          <EmailIcon />
          <span className="ml-1"> Email.id :</span> pallesruthi12@gmail.com{" "}
        </h1>
        <h1>
          <LinkedInIcon />
          <span className="ml-1">Linkedin :</span>{" "}
          https://www.linkedin.com/in/shruthi-40584224a/{" "}
        </h1>
      </div>
    </div>
  );
};

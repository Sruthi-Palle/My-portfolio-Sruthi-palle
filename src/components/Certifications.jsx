import React from "react";
import { CertificationsCard } from "./certificationsCard";
import devFoundations from "../images/developerfoundationCertificate.jpg";
import Nodejscertificate from "../images/NodeJsCertification.jpg";
import Reactcertification from "../images/ReactjsCertification.jpg";
import responsiveDesign from "../images/responsiveDesignCertification.jpg";
import StaticDesign from "../images/StaticWebsiteCertification.jpg";

const links = [
  {
    certi: devFoundations,
    title: "Developer Foundations Certification",
    verify:
      "https://certificates.ccbp.in/intensive/developer-foundations?id=VFZJGGZGWD",
  },
  {
    certi: StaticDesign,
    title: "Build Your Own Static Website Certification",
    verify:
      "https://certificates.ccbp.in/intensive/static-website?id=MWJKJTXHCM",
  },
  {
    certi: responsiveDesign,
    title: "Build Your Own Responsive Website Certification",
    verify:
      "https://certificates.ccbp.in/intensive/responsive-website?id=DATJCGIVFO",
  },
  {
    certi: Reactcertification,
    title: "React Js Certification",
    verify: "https://certificates.ccbp.in/intensive/react-js?id=DFTLJKHOZX",
  },
  {
    certi: Nodejscertificate,
    title: "Node Js Certification",
    verify: "https://certificates.ccbp.in/intensive/node-js?id=SRDHAZFGDA",
  },
];

export const Certifications = () => {
  return (
    <div className="bg-gradient-to-r from-fuchsia-200 to-cyan-200 py-6">
      <h1 className="text-4xl font-light py-5 sm:text-6xl text-fuchsia-800  px-10">
        Certifications
      </h1>
      <div className="flex flex-wrap flex-col md:flex-row justify-center gap-8  ">
        {links.map((each) => (
          <CertificationsCard
            certification={each.certi}
            title={each.title}
            verify={each.verify}
          />
        ))}
      </div>
    </div>
  );
};

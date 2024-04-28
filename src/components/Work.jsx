import React from "react";
import WorkItem from "./WorkItem";

const Work = () => {
  const data = [
    {
      year: "Feb 2022 - Jan 2024",
      title: "Front End Software developer",
      company: "NZME.",
      duration: "2 years",
      details:
        "Contributed to the construction, testing, and deployment of resilient, high-performance applications, ensuring they meet current needs while allowing adaptability for future modifications. Enhanced user experiences on the NZ Herald website by utilizing Javascript, React, CSS/SCSS,TailwindCSS Arc API, and adhering to software engineering standards."    },
    {
      year: "Jan 2020 - Feb 2022",
      title: "Front End Software developer",
      company: "ecoPortal",
      duration: "2 year",
      details:
        "Delivered engaging user experience through optimization of images, code, and cross-browser compatibility, increasing website performance based on tech SEO. Created dynamic and browser-compatible pages utilizing HTML5, CSS3, jQuery and Javascript.",
    },
    {
      year: "Feb 2009 - Feb 2012",
      title: "ICT teacher",
      company: "Professional College of Far Eastern Federal University (FEFU)",
      duration: "3 years",
      details:
        "Formulating study programs, delivering lectures, facilitating practical classes, providing guidance and support for study projects",
    },
  ];

  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 pt-32">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]  mb-4">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;

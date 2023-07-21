import React from "react";
import WorkItem from "./WorkItem";

const Work = () => {
  const data = [
    {
      year: "2020 - current time",
      title: "Front End Software developer",
      duration: "3 years",
      details:
        "Turpis egestas sed tempus urna et pharetra pharetra massa massa. Libero justo laoreet sit amet cursus sit. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Accumsan lacus vel facilisis volutpat. Tincidunt lobortis feugiat vivamus at augue. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus.",
    },
    {
      year: "2019 - 2020",
      title: "Junior Front End Software developer",
      duration: "1 year",
      details:
        "Vivamus arcu felis bibendum ut tristique et. Risus quis varius quam quisque. Imperdiet proin fermentum leo vel. Pharetra pharetra massa massa ultricies mi quis. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet.",
    },
    {
      year: "2013 - 2017",
      title: "ICT teacher",
      duration: "4 years",
      details:
        "Bibendum at varius vel pharetra vel turpis. Id ornare arcu odio ut sem nulla pharetra. Arcu risus quis varius quam quisque id diam vel quam. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. In fermentum posuere urna nec tincidunt praesent semper. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean.",
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

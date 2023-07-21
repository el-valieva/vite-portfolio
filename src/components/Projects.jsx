import React from "react";
import ProjectItem from "./ProjectItem";
import propertyImg from "../assets/property.jpeg";
import bitcoinImg from "../assets/bitcoin.jpg";
import booksImg from "../assets/books.jpg";
import musicImg from "../assets/music.jpg";


const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-20">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
      <p className="text-center py-8">
        Ac tortor vitae purus faucibus ornare. Semper auctor neque vitae tempus
        quam. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames. Auctor urna nunc id cursus metus aliquam eleifend mi.
        Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Sodales
        neque sodales ut etiam sit amet nisl.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={propertyImg} title="Property App"/>
        <ProjectItem img={bitcoinImg} title="Bitcoin App"/>
        <ProjectItem img={booksImg} title="Books App"/>
        <ProjectItem img={musicImg} title="Music App"/>
        </div>
    </div>
  );
};

export default Projects;

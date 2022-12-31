import Portfolio from "../templates/Portfolio";
import { Skill, SkillGallery } from "../../models/Skills";
import { FcElectroDevices } from "react-icons/all";
import * as React from "react";
import { ProjectGalleryProps } from "../../models/Project";

const softSkills: SkillGallery = {
  skills: [
    {
      title: "titulo1",
      body: "cuerpo1",
      icon: <FcElectroDevices />,
    },
  ],
  title: "soft skills",
};
const contact = {
  name: "xoje",
  email: "vilchessanchezjose@gmail.com",
  phone: "622721994",
};
const projects: ProjectGalleryProps = {
  projects: [
    {
      title: "Featured post",
      date: "Nov 12",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: {
        src: "https://source.unsplash.com/random",
        alt: "Image Text",
      },

      deployUrl: "",
      repositoryUrl: "",
    },
    {
      title: "Post title",
      date: "Nov 11",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: {
        src: "https://source.unsplash.com/random",
        alt: "Image Text",
      },

      deployUrl: "",
      repositoryUrl: "",
    },
  ],
};

function XojePortfolio() {
  return (
    <Portfolio
      softSkills={softSkills}
      hardSkills={softSkills}
      contact={contact}
      projects={projects}
    />
  );
}

export default XojePortfolio;

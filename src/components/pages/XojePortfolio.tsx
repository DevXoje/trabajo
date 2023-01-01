import Portfolio from "../templates/Portfolio";
import { FcElectroDevices } from "react-icons/all";
import * as React from "react";
import { PortfolioProps } from "../../models/Portfolio";

const portfolio: PortfolioProps = {
  props: {
    contact: {
      name: "xoje",
      email: "vilchessanchezjose@gmail.com",
      phone: "622721994",
      photo: "../../assets/person.png",
      description: {
        title: "Titulazo xoje porfoloio",
        paragraphs: ["idea1", "idea2"],
      },
      message: {
        subject: "Hablemos",
        content: "Contactame",
      },
      linkedin: "https://www.linkedin.com/in/jose-vilches-sanchez/",
    },
    softSkills: {
      props: {
        title: "soft skills",
        items: [
          {
            props: {
              title: "titulo1",
              body: "cuerpo1",
              icon: <FcElectroDevices />,
            },
          },
        ],
      },
    },
    hardSkills: {
      props: {
        title: "soft skills",
        items: [
          {
            props: {
              title: "titulo1",
              body: "cuerpo1",
              icon: <FcElectroDevices />,
            },
          },
        ],
      },
    },
    projects: {
      props: {
        items: [
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
      },
    },
  },
};

/*const softSkills: SkillGalleryProps = {
  items: [
    {
      title: "titulo1",
      body: "cuerpo1",
      icon: <FcElectroDevices />,
    },
  ],
  title: "soft skills",
};
const contact: Contact = {
  name: "xoje",
  email: "vilchessanchezjose@gmail.com",
  phone: "622721994",
  photo: "../../assets/person.png",
};
const projects: ProjectGalleryProps = {
  items: [
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
};*/

function XojePortfolio() {
  return <Portfolio props={portfolio.props} />;
}

export default XojePortfolio;

import TopNavigation from "../organisms/TopNavigation";
import * as React from "react";
import SoftSkillsGallery from "../organisms/SoftSkillsGallery";
import { PortfolioProps } from "../../models/Portfolio";
import Hero from "../organisms/Hero";
import AboutMe from "../organisms/AboutMe";
import StickyFooter from "../organisms/Footer";
import ContactForm from "../organisms/ContactForm";
import ProjectGallery from "../organisms/ProjectGallery";

const hero_content = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
  linkText: "Continue reading…",
};

function Portfolio({ props: portfolio }: PortfolioProps) {
  return (
    <>
      <TopNavigation props={portfolio.contact} />
      <Hero content={hero_content} />
      <AboutMe props={portfolio.contact} />
      <SoftSkillsGallery props={portfolio.softSkills.props} />
      <ProjectGallery props={portfolio.projects.props} />
      <ContactForm />
      <StickyFooter />
    </>
  );
}

export default Portfolio;

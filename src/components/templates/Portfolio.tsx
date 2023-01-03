import TopNavigation from "../organisms/TopNavigation";
import * as React from "react";
import SoftSkillsGallery from "../organisms/SoftSkillsGallery";
import { PortfolioProps } from "../../models/Portfolio";
import Hero from "../organisms/Hero";
import AboutMe from "../organisms/AboutMe";
import StickyFooter from "../organisms/Footer";
import ContactForm from "../organisms/ContactForm";
import ProjectGallery from "../organisms/ProjectGallery";

function Portfolio({ props: portfolio }: PortfolioProps) {
  const { contact, softSkills, hardSkills, projects } = portfolio;
  return (
    <>
      <TopNavigation props={contact} />
      <Hero props={contact} />
      <AboutMe props={contact} />
      <SoftSkillsGallery props={softSkills.props} />
      <ProjectGallery props={projects.props} />
      <ContactForm />
      <StickyFooter />
    </>
  );
}

export default Portfolio;

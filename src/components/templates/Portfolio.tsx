import TopNavigation from "../organisms/TopNavigation";
import * as React from "react";
import SoftSkillsGallery from "../organisms/SoftSkillsGallery";
import { PortfolioProps } from "../../models/Portfolio";
import Hero from "../organisms/Hero";
import AboutMe from "../organisms/AboutMe";
import StickyFooter from "../organisms/Footer";
import ContactForm from "../organisms/ContactForm";
import ProjectGallery from "../organisms/ProjectGallery";

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
  linkText: "Continue reading…",
};

function Portfolio({
  contact,
  softSkills,
  hardSkills,
  projects,
}: PortfolioProps) {
  return (
    <>
      <TopNavigation />
      <Hero post={mainFeaturedPost} />
      <AboutMe />
      <SoftSkillsGallery skills={softSkills.skills} title={softSkills.title} />
      <ProjectGallery projects={projects} />
      <ContactForm />
      <StickyFooter />
    </>
  );
}

export default Portfolio;

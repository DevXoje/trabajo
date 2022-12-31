import TopNavigation from "../organisms/TopNavigation";
import StickyFooter from "../organisms/Footer";
import ProjectGallery from "../organisms/ProjectGallery";
import Hero from "../organisms/Hero";
import * as React from "react";
import AboutMe from "../organisms/AboutMe";
import SoftSkillsGallery from "../organisms/SoftSkillsGallery";
import ContactForm from "../organisms/ContactForm";

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
  linkText: "Continue reading…",
};

function Portfolio() {
  return (
    <>
      <TopNavigation />
      <Hero post={mainFeaturedPost} />
      <AboutMe />
      <SoftSkillsGallery />
      <ProjectGallery />
      <ContactForm />
      <StickyFooter />
    </>
  );
}

export default Portfolio;

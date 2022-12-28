import TopNavigation from "../organisms/TopNavigation";
import StickyFooter from "../organisms/Footer";
import ProjectGallery from "../organisms/ProjectGallery";
import Hero from "../organisms/Hero";
import * as React from "react";
const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
  linkText: "Continue reading…",
};
interface PortfolioProps {
  backgroundColor: string;
  label: string;
}

function Portfolio({ backgroundColor, label }: PortfolioProps) {
  return (
    <>
      <TopNavigation />
      <Hero post={mainFeaturedPost} />

      <ProjectGallery />
      <StickyFooter />
    </>
  );
}

export default Portfolio;

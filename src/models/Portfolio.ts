import { SkillGalleryProps } from "./Skills";
import { ProjectGalleryProps } from "./Project";

export type Contact = {
  name: string;
  email: string;
  phone: string;
  photo: string;
  linkedin: string;
  description: Description;
  message: {
    subject: string;
    content: string;
  };
};
export type ContactProps = {
  props: Contact;
};
type Description = {
  title: string;
  paragraphs: string[];
};
export type DescriptionProps = {
  props: Description;
};
export type PortfolioProps = {
  props: Portfolio;
};
type Portfolio = {
  contact: Contact;
  softSkills: SkillGalleryProps;
  hardSkills: SkillGalleryProps;
  projects: ProjectGalleryProps;
};

import { SkillGallery } from "./Skills";
import { ProjectGallery } from "./Project";

export type PortfolioProps = {
  contact: {
    name: string;
    email: string;
    phone: string;
  };
  softSkills: SkillGallery;
  hardSkills: SkillGallery;
  projects: ProjectGallery;
};

import { IconType } from "react-icons";

export type sSkill = {
  algo: string | number;
};

export type Skill = {
  title: string;
  body: string;
  icon: JSX.Element;
};
export type SkillGallery = {
  title: string;
  skills: Skill[];
};

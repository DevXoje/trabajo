export type sSkill = {
  algo: string | number;
};
export type Skill = {
  title: string;
  body: string;
  icon: JSX.Element;
};

export type SkillProps = {
  props: Skill;
};
export type SkillGalleryProps = {
  props: GalleryProps;
};
export type GalleryProps = {
  title: string;
  items: SkillProps[];
};

import { Image } from "./Image";

export type ProjectProps = {
  title: string;
  deployUrl: string;
  repositoryUrl: string;
  date: string;
  description: string;
  image: Image;
};

export type ProjectGalleryProps = {
  projects: ProjectProps[];
};

import { Image } from "./Image";

export type Project = {
  title: string;
  deployUrl: string;
  repositoryUrl: string;
  date: string;
  description: string;
  image: Image;
};

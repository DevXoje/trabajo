import { Display, Orientation } from "./Common";

export type LinkProps = {
  icon: string;
  text: string;

  route: string;
  onClick: any;
};

export type LinkListProps = {
  anchorOrigin?: Orientation;
  transformOrigin?: Orientation;
  links: LinkProps[];
  id: string;
  anchorEl: null | Element;
  onClose: any;
  customStyles?: {
    mt?: string;
    display?: Display;
  };
};

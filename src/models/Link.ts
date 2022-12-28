export type LinkProps = {
  icon: string;
  text: string;

  route: string;
};

export type LinkListProps = {
  links: LinkProps[];
  orientation: "vertical" | "horizontal";
};

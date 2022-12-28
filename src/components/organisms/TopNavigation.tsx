import LinkList from "../molecules/LinkList";
import { LinkProps } from "../../models/Link";
import Logo from "../atoms/Logo";

interface TopNavigationProps {
  backgroundColor: string;
  label: string;
}

function TopNavigation({ backgroundColor, label }: TopNavigationProps) {
  const linkList: LinkProps[] = [
    {
      text: "algo",
      route: "",
      icon: "",
    },
    {
      text: "mola",
      route: "",
      icon: "",
    },
    {
      text: "mucho",
      route: "",
      icon: "",
    },
  ];

  return (
    <>
      <Logo backgroundColor={"algo"} label={"labeel"} />
      <LinkList links={linkList} orientation={"vertical"} />
    </>
  );
}

export default TopNavigation;

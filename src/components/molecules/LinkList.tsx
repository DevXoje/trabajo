import Link from "../atoms/Link";
import { LinkListProps } from "../../models/Link";

function LinkList({ links }: LinkListProps) {
  const allLinks = links.map((link) => (
    <Link icon={link.icon} text={link.text} route={link.route} />
  ));
  return <>{allLinks}</>;
}

export default LinkList;

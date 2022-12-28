import TopNavigation from "../organisms/TopNavigation";
import Footer from "../organisms/Footer";
import Link from "../atoms/Link";
import { LinkProps } from "../../models/Link";
import LinkList from "../molecules/LinkList";

interface PortfolioProps {
  backgroundColor: string;
  label: string;
}

function Portfolio({ backgroundColor, label }: PortfolioProps) {
  return (
    <>
      <TopNavigation backgroundColor={"añgp"} label={"agñ"} />
      <Footer backgroundColor={"añgp"} label={"agñ"} />
      <br />
      <hr />
      pruebas
      <br />
    </>
  );
}

export default Portfolio;

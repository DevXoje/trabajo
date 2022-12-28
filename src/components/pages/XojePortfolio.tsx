import Portfolio from "../templates/Portfolio";

interface XojePortfolioProps {
  backgroundColor: string;
  label: string;
}

function XojePortfolio({ backgroundColor, label }: XojePortfolioProps) {
  return <Portfolio backgroundColor={"añgp"} label={"agñ"} />;
}

export default XojePortfolio;

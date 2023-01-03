import Portfolio from "../templates/Portfolio";
import * as React from "react";
import { XojePorfolioData } from "../../XojePorfolioData";

export default function XojePortfolio() {
  return <Portfolio props={XojePorfolioData.props} />;
}

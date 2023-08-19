import React from "react";
import Nav from "../../../common/Nav";
import Footer from "../../../common/Footer";
import LeftPortfolio from "./LeftPortfolio/LeftPortfolio";
import RightPortfolio from "./RightPortfolio/RightPortfolio";


const PortfolioRebalancing = () => {
  return (
    <div>
      {/* <!----------------------------------A----------------------------------------> */}
      <Nav />

      {/* <!----------------------------------B----------------------------------------> */}
      <div class="pb-20 lg:flex lg:justify-center lg:divide-x lg:divide-gray-300">
        <LeftPortfolio/>
        <RightPortfolio/>
      </div>

      {/* <!----------------------------------C----------------------------------------> */}
      <Footer />
    </div>
  );
};

export default PortfolioRebalancing;

import React from "react";
import Nav from "../../../common/Nav";
import Footer from "../../../common/Footer";
import LeftMutual from "./LeftMutual/LeftMutual";
import RightMutual from "./RightMutual/RightMutual";

const MutualFund = () => {
  return (
    <div>
      {/* <!----------------------------------A----------------------------------------> */}
      <Nav />

      {/* <!----------------------------------B----------------------------------------> */}
      <div class="pb-20 lg:flex lg:justify-center lg:divide-x lg:divide-gray-300">
        <LeftMutual/>
        <RightMutual/>
      </div>

      {/* <!----------------------------------C----------------------------------------> */}

      <Footer />
    </div>
  );
};

export default MutualFund;

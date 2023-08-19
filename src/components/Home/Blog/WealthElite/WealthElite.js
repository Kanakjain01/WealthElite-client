import React from "react";
import Nav from "../../../common/Nav";
import Footer from "../../../common/Footer";
import LeftWealth from "./LeftWealth/LeftWealth";
import RightWealth from "./RightWealth/RightWealth";

const WealthElite = () => {
  return (
    <div>
      {/* <!----------------------------------A----------------------------------------> */}
     <Nav/>

      {/* <!----------------------------------B----------------------------------------> */}
      <div class="pb-20 lg:flex lg:justify-center lg:divide-x lg:divide-gray-300">
        <LeftWealth/>

      <RightWealth/>
      </div>

      {/* <!----------------------------------C----------------------------------------> */}
     <Footer/>
    </div>
  );
};

export default WealthElite;

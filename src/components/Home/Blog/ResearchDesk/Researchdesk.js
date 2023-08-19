import React from "react";
import Nav from "../../../common/Nav";
import Footer from "../../../common/Footer";
import LeftResearch from "./LeftResearch/LeftResearch";
import RightResearch from "./RightResearch/RightResearch";

const Researchdesk = () => {
  return (
    <div>
      {/* <!----------------------------------A----------------------------------------> */}
    <Nav/>

      {/* <!----------------------------------B----------------------------------------> */}
      <div class="pb-20 lg:flex lg:justify-center lg:divide-x lg:divide-gray-300">
        <LeftResearch/>
<RightResearch/>
      </div>

      {/* <!----------------------------------C----------------------------------------> */}
      <Footer/>
    </div>
  );
};

export default Researchdesk;

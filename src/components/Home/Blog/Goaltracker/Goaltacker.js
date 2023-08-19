import React from "react";
import Nav from "../../../common/Nav";
import Footer from "../../../common/Footer";
import LeftGoal from "./LeftGoal/LeftGoal";
import RightGoal from "./Goaltracker/LeftGoal/RightGoal";

const Goaltacker = () => {
  return (
    <div>
      {/* <!----------------------------------A----------------------------------------> */}
     <Nav/>

      {/* <!----------------------------------B----------------------------------------> */}
      <div class="pb-20 lg:flex lg:justify-center lg:divide-x lg:divide-gray-300">
       <LeftGoal/>

        <RightGoal/>
      </div>

      {/* <!----------------------------------C----------------------------------------> */}
      
      <Footer/>
    </div>
  );
};

export default Goaltacker;

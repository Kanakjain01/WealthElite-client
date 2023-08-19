import React from "react";
import Nav from "../../../common/Nav";
import Footer from "../../../common/Footer";
import LeftVideoKYC from "./LeftVideoKYC/LeftVideoKYC";
import RightVideoKYC from "./RightVideoKYC/RightVideoKYC";

const VideoKYC = () => {
  return (
    <div>
      {/* <!----------------------------------A----------------------------------------> */}
     <Nav/>

      {/* <!----------------------------------B----------------------------------------> */}
      <div class="pb-20 lg:flex lg:justify-center lg:divide-x lg:divide-gray-300">
        <LeftVideoKYC/>

        <RightVideoKYC/>
      </div>

      {/* <!----------------------------------C----------------------------------------> */}
     <Footer/>
    </div>
  );
};

export default VideoKYC;

import React from "react";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";
import Section6 from "./Section6/Section6";

const AdvisorX = () => {
  return (
    <div>
      {/* <!-- FIRST --> */}
      <div class="bg-gradient-to-b from-indigo-100 via-indigo-400 to-indigo-400 pb-20">
        <Navbar />

        {/* <!-- SECOND  --> */}
        <Section2 />
      </div>

      {/* <!-- THIRD --> */}

      <Section3 />

      {/* <!-- FOURTH --> */}
      <Section4 />
      {/* <!-- FIFTH --> */}
      <Section5 />

      {/* <!-- SIXTH --> */}
      <Section6 />
      {/* <!----------------------------------LAST-------------------------------------> */}
      <Footer />
    </div>
  );
};

export default AdvisorX;

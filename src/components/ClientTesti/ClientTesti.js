import React from "react";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";

const ClientTesti = () => {
  return (
    <div>
      {/* <!----------------------------------- FIRST--------------------------- --> */}
      <Navbar />

      {/* <!---------------------------------- SECOND ----------------------------> */}
     <Section2/>

      {/* <!-- THIRD --> */}
      <Section3/>
      {/* <!----------------------------------LAST-------------------------------------> */}
      <Footer />
    </div>
  );
};

export default ClientTesti;

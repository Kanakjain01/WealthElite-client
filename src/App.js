import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import IFA from "./components/Home/Advisor's/IFA";
import Corporate from "./components/Home/Advisor's/Corporate";
import BackOffice from "./components/Home/Advisor's/BackOffice";
import SubBroker from "./components/Home/Advisor's/SubBroker";
import Branch from "./components/Home/Advisor's/Branch";
import Investors from "./components/Investors";

import Footer from "./components/common/Footer";
// import Investor from "./components/common/Investor";
import Navbar from "./components/common/Navbar";
import PayOnline from "./components/PayOnline";
import ClientTesti from "./components/ClientTesti";
import AdvisorX from "./components/AdvisorX";
// import Navigation from "./components/common/Navigation";

function App() {
  return (
    <div className="   ">
      <Router>
        {/* <Navbar /> */}

        <Routes>
          <Route exact path={"/advisorX"} element={<AdvisorX />} />
          <Route exact path={"/clientTesti"} element={<ClientTesti />} />
          <Route exact path={"/payonline"} element={<PayOnline />} />
          <Route exact path={"/investors"} element={<Investors />} />
          <Route exact path={"/ifa"} element={<IFA />} />
          <Route exact path={"/corporate"} element={<Corporate />} />
          <Route exact path={"/backoffice"} element={<BackOffice />} />
          <Route exact path={"/subbroker"} element={<SubBroker />} />
          <Route exact path={"/branch"} element={<Branch />} />
          {/* <Investor title="Hello world" /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;

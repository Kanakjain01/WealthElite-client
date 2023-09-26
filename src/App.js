import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import IFA from "./components/Advisor/IFA";
import Corporate from "./components/Advisor/Corporate";
import BackOffice from "./components/Advisor/BackOffice";
import SubBroker from "./components/Advisor/SubBroker";
import Branch from "./components/Advisor/Branch";
import Investors from "./components/Investors/Investors";
import PayOnline from "./components/PayOnline/PayOnline";
import ClientTesti from "./components/ClientTesti/ClientTesti";
import AdvisorX from "./components/AdvisorX/AdvisorX";
import Refund from "./components/common/Refund";
import PrivacyPolicy from "./components/common/PrivacyPolicy";
import Index from "./components/index/Index";
import Payment from "./components/payment/Payment";
import Registration from "./components/registration/Registration";

function App() {
  return (
    <div className="   ">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path={"/pay"} element={<Payment/>} />
          <Route exact path={"/signup"} element={<Registration/>} />
          <Route exact path={"/"} element={<Index />} />
          <Route exact path={"/advisorX"} element={<AdvisorX />} />
          <Route exact path={"/clientTesti"} element={<ClientTesti />} />
          <Route exact path={"/payonline"} element={<PayOnline />} />
          <Route exact path={"/investors"} element={<Investors />} />
          <Route exact path={"/ifa"} element={<IFA />} />
          <Route exact path={"/corporate"} element={<Corporate />} />
          <Route exact path={"/backoffice"} element={<BackOffice />} />
          <Route exact path={"/subbroker"} element={<SubBroker />} />
          <Route exact path={"/branch"} element={<Branch />} />
          <Route exact path={"/privacypolicy"} element={<PrivacyPolicy />} />
          <Route exact path={"/refundpolicy"} element={<Refund />} />
          {/* <Investor title="Hello world" /> */}
        </Routes>
        {/* <Footer /> */}
        {/* <PrivacyPolicy/> */}
        {/* <Refund/> */}
      </Router>
    </div>
  );
}

export default App;

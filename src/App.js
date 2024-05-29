import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./component/Header/Header";
import Sidebar from "./component/Sidebar/Sidebar";
import HomePage from "./pages/HomePage/HomePage";
import RecentlyAccessPage from "./pages/RecentlyAccessPage/RecentlyAccessPage";
import MyData from "./pages/MyData/MyData";
import BsyncPage from "./pages/BsyncPage/BsyncPage";
import TrashPage from "./pages/TrashPage/TrashPage";
import CreateContract from "./pages/CreateContract/CreateContract";
import EsignPage from "./pages/EsignPage/EsignPage";
import SettingPage from "./pages/SettingPage/SettingPage";
import CertificatePage from "./pages/CertificatePage/CertificatePage";
import ChooseCertificate from "./pages/CertificatePage/ChooseCertificate";
import CreateCertificate from "./pages/CertificatePage/CreateCertificate";
import CreateCertificateNextstep from "./pages/CertificatePage/CreateCertificateNextstep";
import ContractRecepient from "./pages/CreateContract/ContractRecepient";
import WizardForm from "./pages/CreateContract/WizardForm";
import RegisterOrganization from "./component/RegisterOrganization/RegisterOrganization";
import CertificateSign from "./pages/CertificatePage/CertificateSign";
import Signup from "./component/Signup/Signup";
// import Welcome from "./component/Welcome/Welcome";
import SharedFile from "./pages/SharedFile/SharedFile";
import './'


const App = () => {
  const location = useLocation();
  const isSignupOrWelcomePage =
    location.pathname === "/Signup" || location.pathname === "/Welcome";

  return (
    <>
      {isSignupOrWelcomePage ? null : <Header />}
      {isSignupOrWelcomePage ? null : <Sidebar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recentleaccess" element={<RecentlyAccessPage />} />
        <Route path="/mydata" element={<MyData />} />
        <Route path="/bsync" element={<BsyncPage />} />
        <Route path="/sharedfile" element={<SharedFile />} />
        <Route path="/trash" element={<TrashPage />} />
        <Route path="/createcontract" element={<CreateContract />} />
        <Route path="/Esign" element={<EsignPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/certificate" element={<CertificatePage />} />
        <Route path="/choosecertificate" element={<ChooseCertificate />} />
        <Route path="/createcertificate" element={<CreateCertificate />} />
        <Route
          path="/createcertificatenextstep"
          element={<CreateCertificateNextstep />}
        />
        <Route path="/contractrecepient" element={<ContractRecepient />} />
        <Route path="/WizardForm" element={<WizardForm />} />
        <Route
          path="/RegisterOrganization"
          element={<RegisterOrganization />}
        />
        <Route path="/certificatesign" element={<CertificateSign />} />
        <Route path="/Signup" element={<Signup />} />
        {/* <Route path="/Welcome" element={<Welcome />} /> */}
      </Routes>
    </>
  );
};

export default App;



















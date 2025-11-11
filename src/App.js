// import React from "react";
// import Header from "./components/Header";
// import HeroSection from "./components/HeroSection";
// import ServicesSection from "./components/ServicesSection";
// import AboutSection from "./components/AboutSection";
// import IndustriesSection from "./components/IndustriesSection";
// import TeamSection from "./components/TeamSection";
// import MissionVisionSection from "./components/MissionVisionSection";
// import Footer from "./components/Footer";
// import TestimonialsSection from "./components/TestimonialsSection";

// function App() {
//   return (
//     <div>
//       <Header />
//       <HeroSection />
//       <ServicesSection />
//       <IndustriesSection />
//       <AboutSection />

//        <MissionVisionSection />
//        <TeamSection />
//        <Footer />
//           {/* <TestimonialsSection /> */}
      
//     </div>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import IndustriesSection from "./components/IndustriesSection";
import AboutSection from "./components/AboutSection";
import MissionVisionSection from "./components/MissionVisionSection";
import TeamSection from "./components/TeamSection";
import AboutUs from "./pages/Aboutus";
import ContactUs from "./pages/ContactUs";
import AuditAssurance from "./pages/AuditAssurance";
import Career from "./pages/Career";
import TaxationCompliance from "./pages/TaxationCompliance";
import CorporateCompliance from "./pages/CorporateCompliance";
import BusinessAdvisory from "./pages/BusinessAdvisory";
import BankingFinance from "./pages/BankingFinance";
import CapitalMarketSEBI from "./pages/CapitalMarketSEBI";
import InternationalNRI from "./pages/InternationalNRI";
import OutsourcingOther from "./pages/OutsourcingOther";
import Achievements from "./pages/Achievements";


function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <HeroSection />
              <ServicesSection />
              <IndustriesSection />
              <AboutSection />
              <MissionVisionSection />
              <TeamSection />
              <Footer />
            </>
          }
        />

        {/* About Page */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/audit-assurance" element={<AuditAssurance />} />
        <Route path="/taxation-compliance" element={<TaxationCompliance />} />
        <Route path="/corporate-compliance" element={<CorporateCompliance />} />
        <Route path="/business-advisory" element={<BusinessAdvisory />} />
        <Route path="/banking-finance" element={<BankingFinance />} />
        <Route path="/capital-market-sebi" element={<CapitalMarketSEBI />} />
        <Route path="/international-nri" element={<InternationalNRI />} />
        <Route path="/outsourcing-other" element={<OutsourcingOther />} />
        <Route path="/achievements" element={<Achievements />} />




      </Routes>
    </Router>
  );
}

export default App;

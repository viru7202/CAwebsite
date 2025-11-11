import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CapitalMarketSEBI() {
  return (
    <>
      <Header />
      {/* <section className="capital-market-banner">
        <div className="container">
          <h1>Capital Market & SEBI Advisory</h1>
          <p>
            We provide expert guidance on SEBI regulations, IPO support, and compliance management to help businesses navigate the complexities of capital markets.
          </p>
        </div>
      </section> */}

          <section
        className="about-hero"
        style={{
          backgroundImage: "url('/assets/img/sebi.jpg')",
        }}
      >
        <div className="overlay"></div>
        <div className="about-hero-text">
          <h1>Capital Market & SEBI Advisory</h1>
          <p>
            We provide expert guidance on SEBI regulations, IPO support, and compliance management to help businesses navigate the complexities of capital markets.
          </p>
        </div>
      </section>


      <section className="capital-market-content">
        <div className="container">
          <h2>Our Capital Market Services</h2>
          <p>
            Our firm offers comprehensive assistance to organizations and startups in meeting all regulatory and operational requirements related to SEBI and capital markets. We ensure your business remains compliant and investment-ready.
          </p>

          <div className="capital-market-grid">
            <div className="service-card">
              <h3>📈 IPO & Listing Advisory</h3>
              <p>
                Assistance in preparing for IPOs, compliance with SEBI requirements, and coordination with merchant bankers and stock exchanges.
              </p>
            </div>

            <div className="service-card">
              <h3>📜 SEBI Compliance</h3>
              <p>
                Regular advisory and review of SEBI regulations applicable to listed and unlisted companies.
              </p>
            </div>

            <div className="service-card">
              <h3>💼 Valuation & Due Diligence</h3>
              <p>
                Providing valuation reports, financial due diligence, and support during investor negotiations.
              </p>
            </div>

            <div className="service-card">
              <h3>🏛 Corporate Governance</h3>
              <p>
                Ensuring board structure, internal control, and governance frameworks meet SEBI and Companies Act standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="capital-market-highlight">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Experienced SEBI & corporate finance professionals</li>
            <li>Strong understanding of capital market regulations</li>
            <li>End-to-end assistance from planning to post-listing compliance</li>
            <li>Tailored advisory for both startups and established enterprises</li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}

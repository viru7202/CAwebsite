import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function InternationalNRI() {
  return (
    <>
      <Header />

      {/* ===== Banner Section ===== */}
      {/* <section className="nri-banner">
        <div className="container">
          <h1>International & NRI Services</h1>
          <p>
            Comprehensive advisory and compliance solutions for Non-Resident
            Indians (NRIs) and foreign investors to manage their financial,
            taxation, and regulatory requirements in India.
          </p>
        </div>
      </section> */}


          <section
        className="about-hero"
        style={{
          backgroundImage: "url('/assets/img/international-nriservice.jpg')",
        }}
      >
        <div className="overlay"></div>
        <div className="about-hero-text">
          <h1>International & NRI Services</h1>
          <p>
            Comprehensive advisory and compliance solutions for Non-Resident
            Indians (NRIs) and foreign investors to manage their financial,
            taxation, and regulatory requirements in India.
          </p>
        </div>
      </section>


      {/* ===== Services Section ===== */}
      <section className="nri-services">
        <div className="container">
          <h2>Our NRI & International Services</h2>
          <p>
            We assist NRIs, expatriates, and global investors in efficiently
            managing their Indian income, tax filings, investments, and
            repatriation, while ensuring full compliance with Indian and
            international tax laws.
          </p>

          <div className="nri-grid">
            <div className="service-card">
              <h3>🌍 NRI Taxation & Filing</h3>
              <p>
                Assistance in filing Indian income tax returns, claiming DTAA
                benefits, and managing tax refunds for NRIs and foreign
                nationals.
              </p>
            </div>

            <div className="service-card">
              <h3>🏦 Repatriation & FEMA Compliance</h3>
              <p>
                Guidance on repatriation of funds, FEMA/RBI compliance,
                investment approvals, and foreign remittance documentation.
              </p>
            </div>

            <div className="service-card">
              <h3>🏘 Property & Investment Advisory</h3>
              <p>
                Advisory on purchase/sale of property in India, rental income,
                and investment planning for NRIs and foreign citizens.
              </p>
            </div>

            <div className="service-card">
              <h3>🧾 DTAA & Cross-Border Tax Planning</h3>
              <p>
                Structuring of income and investments under Double Taxation
                Avoidance Agreements between India and other countries.
              </p>
            </div>

            <div className="service-card">
              <h3>💼 Setting up Business in India</h3>
              <p>
                End-to-end support for NRIs and foreign entities in establishing
                companies, subsidiaries, or liaison offices in India.
              </p>
            </div>

            <div className="service-card">
              <h3>🔍 RBI & Regulatory Support</h3>
              <p>
                Assistance in obtaining approvals, managing reporting
                requirements, and ensuring FEMA and RBI compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Why Choose Us ===== */}
      <section className="nri-highlight">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Dedicated NRI & International taxation experts</li>
            <li>Assistance with FEMA, DTAA, and global tax compliance</li>
            <li>Seamless coordination with banks, RBI, and authorities</li>
            <li>End-to-end support from tax filing to repatriation</li>
            <li>Trusted by NRIs across USA, UK, UAE, Australia, and Canada</li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}

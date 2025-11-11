import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import "./BankingFinance.css";

export default function BankingFinance() {
  return (
    <>
      <Header />

      {/* ===== HERO SECTION ===== */}
      {/* <section
        className="bf-hero"
        style={{
          backgroundImage: "url('/assets/img/bankingfinance.jpeg')",
        }}
      >
        <div className="bf-hero-overlay">
          <div className="container">
            <h1>Banking & Project Finance</h1>
            <p>
              Expert financial structuring and advisory for business expansion,
              infrastructure projects, and long-term capital growth.
            </p>
          </div>
        </div>
      </section> */}


          <section
        className="about-hero"
        style={{
          backgroundImage: "url('/assets/img/bankingfinance.jpeg')",
        }}
      >
        <div className="overlay"></div>
        <div className="about-hero-text">
           <h1>Banking & Project Finance</h1>
            <p>
              Expert financial structuring and advisory for business expansion,
              infrastructure projects, and long-term capital growth.
            </p>
        </div>
      </section>


      {/* ===== INTRO ===== */}
      <section className="bf-intro container">
        <h2>Strategic Financing for Sustainable Growth</h2>
        <p className="lead">
          Our Banking and Project Finance division helps businesses secure
          optimal funding solutions. We work closely with clients to structure,
          negotiate, and manage finance deals that align with their business
          goals and financial health.
        </p>
      </section>

      {/* ===== SECTION 1 ===== */}
      <section className="bf-section">
        <div className="container bf-grid">
          <div className="bf-media">
            <img src="/assets/img/Project Finance.jpeg" alt="Project Finance" />
          </div>
          <div className="bf-text">
            <h3>Project Financing Solutions</h3>
            <p>
              We assist businesses in obtaining project-specific financing for
              expansion, infrastructure, and development. Our team ensures
              efficient capital structure and cost-effective funding.
            </p>
            <ul>
              <li>Feasibility and financial viability reports</li>
              <li>Debt syndication and refinancing</li>
              <li>Term loans and working capital arrangements</li>
              <li>Assistance with banks and financial institutions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2 ===== */}
      <section className="bf-section">
        <div className="container bf-grid reverse">
          <div className="bf-media">
            <img src="/assets/img/Banking Advisory.jpg" alt="Banking Advisory" />
          </div>
          <div className="bf-text">
            <h3>Banking Advisory & Debt Restructuring</h3>
            <p>
              Our experts provide end-to-end banking advisory, restructuring
              debt, and helping clients maintain optimal credit health and
              financial discipline.
            </p>
            <ul>
              <li>Bank loan restructuring and CDR assistance</li>
              <li>Preparation of detailed project reports (DPR)</li>
              <li>Financial statement analysis</li>
              <li>Negotiation support for credit facilities</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3 ===== */}
      <section className="bf-section">
        <div className="container bf-grid">
          <div className="bf-media">
            <img src="/assets/img/Investment Advisory.jpg" alt="Investment Advisory" />
          </div>
          <div className="bf-text">
            <h3>Investment & Capital Advisory</h3>
            <p>
              We guide clients through the process of identifying suitable
              funding sources, investment partners, and financial instruments to
              enhance their growth potential.
            </p>
            <ul>
              <li>Private equity and venture funding advisory</li>
              <li>Due diligence and valuation support</li>
              <li>Financial modelling and scenario planning</li>
              <li>Investor relations and capital structuring</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bf-cta">
        <div className="container cta-wrap">
          <div>
            <h3>Need Expert Help with Banking or Project Finance?</h3>
            <p>
              Get professional guidance for funding, debt restructuring, and
              project finance solutions tailored to your business.
            </p>
          </div>
          <div>
            <a href="/contact" className="btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

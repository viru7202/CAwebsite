import React from "react";
import Header from "../components/Header";   // adjust path if your Header is named/located differently
import Footer from "../components/Footer";
// import "./CorporateCompliance.css";

export default function CorporateCompliance() {
  return (
    <>
      <Header />

      {/* HERO */}
      {/* <section
        className="cc-hero"
        style={{
          backgroundImage: "url('/assets/img/corporate-hero.jpg')",
        }}
      >
        <div className="cc-hero-overlay">
          <div className="container">
            <h1>Corporate & ROC Compliances</h1>
            <p>
              End-to-end corporate compliance, ROC filings and secretarial services to keep your company compliant and secure.
            </p>
          </div>
        </div>
      </section> */}


          <section
        className="about-hero"
        style={{
          backgroundImage: "url('/assets/img/corporate-compliance.jpeg')",
        }}
      >
        <div className="overlay"></div>
        <div className="about-hero-text">
         <h1>Corporate & ROC Compliances</h1>
            <p>
              End-to-end corporate compliance, ROC filings and secretarial services to keep your company compliant and secure.
            </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="cc-intro container">
        <h2>Comprehensive Corporate Compliance Services</h2>
        <p className="lead">
          We assist companies (private, public, LLPs and startups) with all filings, statutory formalities and ongoing secretarial requirements to ensure regulatory peace of mind.
        </p>
      </section>

      {/* SECTION: Company Formation */}
      <section className="cc-section cc-formation">
        <div className="container cc-grid">
          <div className="cc-media">
            <img src="/assets/img/images.jpg" alt="Company Formation" />
          </div>
          <div className="cc-text">
            <h3>Company Formation & Registrations</h3>
            <p>
              Start your business right. We handle company incorporation, LLP registration, DIN/DIR applications, MOA/AOA drafting, and initial ROC filings.
            </p>
            <ul>
              <li>Entity selection & registration (Private Ltd / LLP / OPC)</li>
              <li>DIN, DSC & director onboarding</li>
              <li>MOA/AOA / LLP agreement drafting</li>
              <li>Initial ROC filing & statutory setup</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION: Annual ROC Filings */}
      <section className="cc-section cc-roc">
        <div className="container cc-grid reverse">
          <div className="cc-media">
            <img src="/assets/img/roc-filing-1.jpg" alt="ROC Filings" />
          </div>
          <div className="cc-text">
            <h3>Annual ROC Filings & Statutory Compliance</h3>
            <p>
              Stay compliant with timely annual returns, financial statement filings, and other ROC mandated submissions.
            </p>
            <ul>
              <li>Annual Return (Form MGT-7) & financial statements (AOC-4)</li>
              <li>ADRs, event-based filings and board resolution support</li>
              <li>Filing of changes to directors, registered office, share capital</li>
              <li>Remedial filings and ROC regularization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION: Secretarial Compliance */}
      <section className="cc-section cc-secretarial">
        <div className="container cc-grid">
          <div className="cc-media">
            <img src="/assets/img/images (1).jpg" alt="Secretarial Compliance" />
          </div>
          <div className="cc-text">
            <h3>Secretarial Compliance & Corporate Governance</h3>
            <p>
              Expert secretarial services to implement corporate governance, maintain statutory books, convene meetings and manage compliance checklists.
            </p>
            <ul>
              <li>Board & AGM notices, minutes & resolutions</li>
              <li>Statutory registers, share transfers and share certificates</li>
              <li>Secretarial audit and compliance calendar</li>
              <li>Corporate governance advice and policy drafting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cc-cta">
        <div className="container cta-wrap">
          <div>
            <h3>Need help with Corporate Compliance?</h3>
            <p>Talk with our experts to ensure your company stays fully compliant — fast and worry-free.</p>
          </div>
          <div>
            <a href="/contact" className="btn-primary">Contact Us</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

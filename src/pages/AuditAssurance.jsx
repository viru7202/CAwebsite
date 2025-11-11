import React from "react";
// import "./AuditAssurance.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AuditAssurance() {
  return (
    <>
      <Header />
      <section className="audit-hero">
        <div className="audit-overlay">
          <div className="audit-text">
            <h1>Audit & Assurance</h1>
            <p>
              Providing clarity and confidence through accurate financial
              insights and independent assurance.
            </p>
          </div>
        </div>
      </section>

      <section className="audit-content container my-5">
        <h2>Our Audit & Assurance Services</h2>
        <p>
          At <strong>SDPM & Co.</strong>, we provide reliable audit and assurance
          services that strengthen your organization’s financial integrity and
          enhance stakeholder confidence. Our team of qualified professionals
          follows the latest auditing standards to ensure transparency and
          compliance.
        </p>

        <div className="audit-grid">
          <div className="audit-card">
            <h3>Statutory Audits</h3>
            <p>
              Comprehensive audits conducted in accordance with applicable laws
              and regulations to ensure accurate reporting and compliance.
            </p>
          </div>

          <div className="audit-card">
            <h3>Internal Audits</h3>
            <p>
              Strengthen internal controls and improve risk management with our
              detailed internal audit reviews and recommendations.
            </p>
          </div>

          <div className="audit-card">
            <h3>Tax Audits</h3>
            <p>
              Expert review of your books and records to ensure compliance with
              tax laws and to optimize tax efficiency.
            </p>
          </div>

          <div className="audit-card">
            <h3>Management Audits</h3>
            <p>
              Evaluate the effectiveness of your business operations and provide
              actionable insights for improved performance.
            </p>
          </div>
        </div>
      </section>

    <Footer />
    </>
  );
}

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import "./TaxationCompliance.css";

export default function TaxationCompliance() {
  const [activeTab, setActiveTab] = useState("direct");

  return (
    <>
      <Header />

      {/* ===== HERO SECTION ===== */}
     
{/* 
       <section className="audit-hero">
        <div className="audit-overlay">
          <div className="audit-text">
             <h1>Taxation & Compliance</h1>
        <p>
          Comprehensive tax advisory and compliance solutions tailored for
          individuals and businesses.
        </p>
          </div>
        </div>
      </section> */}

       <section
        className="about-hero"
        style={{
          backgroundImage: "url('/assets/img/result_0.jpeg')",
        }}
      >
        <div className="overlay"></div>
        <div className="about-hero-text">
          <h1>Taxation & Compliance</h1>
        <p>
          Comprehensive tax advisory and compliance solutions tailored for
          individuals and businesses.
        </p>
        </div>
      </section>

      {/* ===== TAB SECTION ===== */}
      <div className="tax-tabs">
        <button
          className={activeTab === "direct" ? "active" : ""}
          onClick={() => setActiveTab("direct")}
        >
          Direct Tax (Income Tax)
        </button>
        <button
          className={activeTab === "indirect" ? "active" : ""}
          onClick={() => setActiveTab("indirect")}
        >
          Indirect Tax (GST)
        </button>
      </div>

      {/* ===== TAB CONTENT ===== */}
      <section className="tax-content container my-5">
        {activeTab === "direct" && (
          <div className="tab-panel fade-in">
            <h2>Direct Tax (Income Tax)</h2>
            <p>
              Our Direct Tax team provides expert guidance and assistance in
              handling income tax matters for individuals, firms, and corporate
              entities. We focus on ensuring compliance while optimizing tax
              efficiency.
            </p>

            <ul>
              <li>Tax planning and advisory for individuals and corporates</li>
              <li>Preparation and filing of Income Tax returns</li>
              <li>Assessment representation and litigation support</li>
              <li>TDS/TCS compliance and management</li>
              <li>Tax audit and certification under Income Tax Act</li>
            </ul>
          </div>
        )}

        {activeTab === "indirect" && (
          <div className="tab-panel fade-in">
            <h2>Indirect Tax (GST)</h2>
            <p>
              We offer end-to-end GST consulting, compliance, and audit
              services. Our team ensures smooth functioning of your indirect tax
              operations while maintaining full regulatory compliance.
            </p>

            <ul>
              <li>GST registration and return filing</li>
              <li>GST audit and reconciliation</li>
              <li>Advisory on GST implications and input credit management</li>
              <li>Representation before tax authorities</li>
              <li>Compliances under customs and other indirect tax laws</li>
            </ul>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}

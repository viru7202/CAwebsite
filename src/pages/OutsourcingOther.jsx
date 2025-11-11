import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import "../assets/css/OutsourcingOther.css";

export default function OutsourcingOther() {
  return (
    <>
      <Header />

      {/* ===== Hero Section ===== */}
      {/* <section className="outsourcing-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Outsourcing & Other Services</h1>
          <p>
            Empowering businesses through efficient outsourcing, compliance
            management, and financial excellence.
          </p>
        </div>
      </section> */}

      <section
        className="about-hero"
        style={{
          backgroundImage: "url('/assets/img/OutsourcingOther.jpg')",
        }}
      >
        <div className="overlay"></div>
        <div className="about-hero-text">
          <h1>Outsourcing & Other Services</h1>
          <p>
            Empowering businesses through efficient outsourcing, compliance
            management, and financial excellence.
          </p>
        </div>
      </section>

      {/* ===== Introduction Section ===== */}
      <section className="outsourcing-intro">
        <div className="container">
          <h2>Comprehensive Outsourcing Solutions</h2>
          <p>
            In today’s dynamic business environment, outsourcing allows you to
            focus on growth while experts manage your financial, operational,
            and compliance needs. Our team ensures accuracy, confidentiality,
            and timely delivery of outsourced functions for businesses of every
            scale.
          </p>
        </div>
      </section>

      {/* ===== Service Cards ===== */}
      <section className="outsourcing-services">
        <div className="container service-grid">
          <div className="service-card">
            <h3>Accounting & Bookkeeping</h3>
            <p>
              Accurate and transparent financial reporting using the latest
              software tools for consistent compliance.
            </p>
          </div>
          <div className="service-card">
            <h3>Payroll Processing</h3>
            <p>
              Simplify your monthly operations with our secure, accurate, and
              confidential payroll management solutions.
            </p>
          </div>
          <div className="service-card">
            <h3>Virtual CFO Services</h3>
            <p>
              Expert financial strategy, analysis, and decision-making support —
              without a full-time cost.
            </p>
          </div>
          <div className="service-card">
            <h3>Management Reporting</h3>
            <p>
              Custom MIS and analytics to track business performance,
              profitability, and financial health.
            </p>
          </div>
          <div className="service-card">
            <h3>Startup Support</h3>
            <p>
              Guidance for startups in registration, taxation setup, and
              establishing strong financial systems.
            </p>
          </div>
          <div className="service-card">
            <h3>Back Office Outsourcing</h3>
            <p>
              Delegate administrative, compliance, and accounting operations to
              our experienced professionals.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Why Choose Us ===== */}

      <section className="nri-highlight">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Expert professionals with domain-specific experience</li>
            <li>End-to-end confidentiality and data security</li>
            <li>Timely and accurate financial delivery</li>
            <li>Scalable services tailored for all business sizes</li>
          </ul>
          <p className="closing-text">
            Our outsourcing and other services empower businesses to simplify
            back-office operations, maintain compliance, and ensure sustainable
            financial growth — with complete peace of mind.
          </p>
        </div>
      </section>

      {/* ===== Partner Section ===== */}
      <section className="outsourcing-partner">
        <div className="container">
          <h2>Partner With Us</h2>
          <p>
            Experience stress-free outsourcing and back-office support handled
            by experts. Let’s help your business grow efficiently, securely, and
            confidently.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

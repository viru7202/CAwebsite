import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BusinessAdvisory() {
  return (
    <>
      <Header />

      {/* ===== HERO SECTION ===== */}
      {/* <section
        className="ba-hero"
        style={{
          backgroundImage: "url('/assets/img/business-advisory-hero.jpg')",
        }}
      >
        <div className="ba-hero-overlay">
          <div className="container">
            <h1>Business Advisory & CFO Services</h1>
            <p>
              Strategic financial guidance, business growth planning, and
              CFO-level insights for modern enterprises.
            </p>
          </div>
        </div>
      </section> */}

          <section
        className="about-hero"
        style={{
          backgroundImage: "url('/assets/img/BusinessAdvisory.jpeg')",
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

      {/* ===== INTRO ===== */}
      <section className="ba-intro container mt-5">
        <h2>Empowering Businesses with Expert Financial Leadership</h2>
        <p className="lead">
          Our Business Advisory & CFO services help you make smarter financial
          decisions, optimize resources, and achieve sustainable growth. Whether
          you're a startup or an established enterprise, our experienced
          professionals act as your financial partners.
        </p>
      </section>

      {/* ===== SECTION 1 ===== */}
      <section className="ba-section">
        <div className="container ba-grid">
          <div className="ba-media">
            <img
              src="/assets/img/financial.jpg"
              alt="Financial Planning"
            />
          </div>
          <div className="ba-text">
            <h3>Financial Planning & Strategy</h3>
            <p>
              We design data-driven strategies that align financial management
              with business goals. Our planning ensures long-term growth and
              stability through strategic budgeting, forecasting, and
              performance analytics.
            </p>
            <ul>
              <li>Budgeting & financial forecasting</li>
              <li>Cash flow management</li>
              <li>Business performance analysis</li>
              <li>Growth and profitability strategies</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2 ===== */}
      <section className="ba-section">
        <div className="container ba-grid reverse">
          <div className="ba-media">
            <img src="/assets/img/Virtual-CFO-Services.jpg" alt="Virtual CFO Services" />
          </div>
          <div className="ba-text">
            <h3>Virtual CFO Services</h3>
            <p>
              Gain CFO-level expertise without the full-time cost. Our virtual
              CFOs provide ongoing financial oversight, helping you make
              informed, strategic decisions with clarity and confidence.
            </p>
            <ul>
              <li>Monthly financial reporting & dashboards</li>
              <li>Cost optimization and cash control</li>
              <li>Strategic business review meetings</li>
              <li>Financial policy & system setup</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3 ===== */}
      <section className="ba-section">
        <div className="container ba-grid">
          <div className="ba-media">
            <img src="/assets/img/advisory.webp" alt="Advisory" />
          </div>
          <div className="ba-text">
            <h3>Business Advisory & Decision Support</h3>
            <p>
              We partner with management to identify growth opportunities,
              assess business risks, and streamline operations through expert
              financial and operational advisory.
            </p>
            <ul>
              <li>Business restructuring and valuations</li>
              <li>Funding and investment advisory</li>
              <li>Performance improvement initiatives</li>
              <li>Strategic decision support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="ba-cta">
        <div className="container cta-wrap">
          <div>
            <h3>Looking for Professional CFO or Business Advisory Support?</h3>
            <p>
              Let’s take your business to the next level with expert financial
              insight and growth strategies.
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

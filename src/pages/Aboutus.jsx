import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MissionVisionSection from"../components/MissionVisionSection";
const About = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        className="about-hero"
        style={{
          backgroundImage: "url('/assets/img/img2.jpeg')",
        }}
      >
        <div className="overlay"></div>
        <div className="about-hero-text">
          <h1>About Our Firm</h1>
          <p>Committed to excellence in accounting, audit & taxation.</p>
        </div>
      </section>

      {/* About Intro */}
      <section className="about-intro">
        <div className="container">
          <h2 className="section-title">Who We Are</h2>
          <p>
           S D P M & Co is a premier Chartered Accountancy firm delivering
            excellence in Audit, Taxation, and Financial Consulting. With years
            of experience, our professionals offer deep industry insights and
            tailored strategies to empower businesses for sustainable growth.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      {/* <section
        className="mission-vision"
        style={{
          backgroundImage: "url('/assets/img/mission-bg.jpg')",
        }}
      >
        <div className="overlay"></div>
        <div className="container mission-content">
          <h2 className="section-title" style={{ color: "white" }}>
            Our Mission & Vision
          </h2>

          <div className="mission-box">
            <h3>Our Mission</h3>
            <p>
              To deliver reliable and strategic financial solutions that drive
              client success and contribute to business excellence.
            </p>
          </div>

          <div className="vision-box">
            <h3>Our Vision</h3>
            <p>
              To be recognized as a trusted leader in professional accounting,
              audit, and financial advisory services across India and beyond.
            </p>
          </div>
        </div>
      </section> */}

      <MissionVisionSection />

      {/* Why Choose Us */}
      <section className="why-choose">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="why-grid">
            <div className="why-card">
              <h4>Expert Team</h4>
              <p>Our professionals bring years of expertise in diverse domains.</p>
            </div>
            <div className="why-card">
              <h4>Client-Centric</h4>
              <p>We build long-term partnerships focused on your success.</p>
            </div>
            <div className="why-card">
              <h4>Ethical Practices</h4>
              <p>Integrity and transparency are at the heart of all we do.</p>
            </div>
            <div className="why-card">
              <h4>Comprehensive Solutions</h4>
              <p>From compliance to consulting — we’ve got you covered.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <img src="/assets/img/team1.jpg" alt="Team Member" />
              <h4>CA Dhiren Shah</h4>
              <p>Founder & Managing Partner</p>
            </div>
            <div className="team-card">
              <img src="/assets/img/team2.jpg" alt="Team Member" />
              <h4>CA Karan Shah</h4>
              <p>Senior Partner</p>
            </div>
            <div className="team-card">
              <img src="/assets/img/team3.jpg" alt="Team Member" />
              <h4>CA Sneha Patel</h4>
              <p>Audit & Tax Specialist</p>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </>
  );
};

export default About;

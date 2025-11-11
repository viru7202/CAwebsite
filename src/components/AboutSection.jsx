import React from "react";
import { FaUserTie, FaBriefcase, FaHandsHelping } from "react-icons/fa";


const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
           <h2 className="section-title">About Our Firm</h2>

            <h3>Your Trusted Chartered Accountancy Partner</h3>
            <p>
              We are a team of experienced Chartered Accountants offering a
              comprehensive range of services in auditing, taxation, compliance,
              and business consulting. Our goal is to help individuals and
              businesses make sound financial decisions and stay compliant with
              ever-changing laws.
            </p>

            <div className="about-stats">
              <div className="stat">
                <FaUserTie className="stat-icon" />
                <h4>10+ Years</h4>
                <p>Professional Experience</p>
              </div>
              <div className="stat">
                <FaBriefcase className="stat-icon" />
                <h4>500+ Clients</h4>
                <p>Across Various Industries</p>
              </div>
              <div className="stat">
                <FaHandsHelping className="stat-icon" />
                <h4>100% Commitment</h4>
                <p>To Quality & Integrity</p>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img src="/assets/img/Audit.jpg" alt="About Us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

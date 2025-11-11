import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Achievements() {
  return (
    <>
      <Header />

      {/* ===== PAGE BANNER ===== */}
      {/* <section className="achievements-banner">
        <div className="banner-content">
          <h1>Our Achievements</h1>
          <p>Celebrating milestones, excellence, and client trust since 2010</p>
        </div>
      </section> */}

      <section
        className="about-hero"
        style={{
          backgroundImage: "url('/assets/img/Achievements.jpg')",
        }}
      >
        <div className="overlay"></div>
        <div className="about-hero-text">
           <h1>Our Achievements</h1>
          <p>Celebrating milestones, excellence, and client trust since 2010</p>
        </div>
      </section>

      {/* ===== AWARDS SECTION ===== */}
      <section className="awards-section container">
        <h2 className="section-title">Awards & Recognitions</h2>
        <div className="awards-grid">
          <div className="award-card">
            <img src="/assets/img/Award.jpg" alt="Award 1" />
            <h4>Best CA Firm 2023</h4>
            <p>
              Honored for excellence in audit and tax advisory by the Institute of Chartered Accountants.
            </p>
          </div>
          <div className="award-card">
            <img src="/assets/img/Award.jpg" alt="Award 2" />
            <h4>Top Advisory Team 2022</h4>
            <p>
              Recognized for innovative financial strategies and client success achievements.
            </p>
          </div>
          <div className="award-card">
            <img src="/assets/img/Award.jpg" alt="Award 3" />
            <h4>Excellence in Compliance</h4>
            <p>
              Acknowledged for our commitment to transparency and corporate governance.
            </p>
          </div>
        </div>
      </section>

      {/* ===== MILESTONES TIMELINE ===== */}
      <section className="milestones-section">
        <h2 className="section-title">Our Journey</h2>
        <div className="timeline-container">
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>2010</h3>
              <p>Founded S D P M & Co. with a mission to deliver excellence in Chartered Accountancy.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>2015</h3>
              <p>Expanded our services to include Business Advisory and CFO consultancy.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>2019</h3>
              <p>Crossed 500+ corporate and individual clients across India and overseas.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>2023</h3>
              <p>Recognized among the top-performing CA firms in Gujarat for financial excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATES / GALLERY ===== */}
      <section className="certificates-section container">
        <h2 className="section-title">Certificates & Highlights</h2>
        <div className="certificates-grid">
          <img src="/assets/img/Certificates.jpg" alt="Certificate 1" />
          <img src="/assets/img/Certificates.jpg" alt="Certificate 2" />
          <img src="/assets/img/Certificates.jpg" alt="Certificate 3" />
          <img src="/assets/img/Certificates.jpg" alt="Certificate 4" />
          <img src="/assets/img/Certificates.jpg" alt="Certificate 5" />
          <img src="/assets/img/Certificates.jpg" alt="Certificate 6" />
        </div>
      </section>

      <Footer />
    </>
  );
}

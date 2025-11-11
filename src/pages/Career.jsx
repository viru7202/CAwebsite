import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Career() {
  return (
    <>
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section
        className="about-hero"
        style={{
          backgroundImage: "url('/assets/img/career1.jpg')",
        }}
      >
        <div className="overlay"></div>
        <div className="about-hero-text">
           <h1>Join Our Team</h1>
        <p>Build your career with S D P M & Co. – where passion meets purpose.</p>
        </div>
      </section>

      {/* ===== ABOUT CAREER ===== */}
      <section className="career-about container my-5">
        <h2 className="section-title">Why Work With Us</h2>
        <p>
          At <strong>S D P M & Co.</strong>, we believe in nurturing talent and
          providing a platform for professional and personal growth. Our firm
          offers diverse opportunities to work with leading clients and gain
          hands-on experience in accounting, taxation, and consultancy.
        </p>
      </section>

      {/* ===== JOB OPENINGS ===== */}
      <section className="career-jobs container my-5">
        <h2 className="section-title">Current Openings</h2>
        <div className="job-list">
          {[
            {
              title: "Audit Assistant",
              type: "Full Time",
              location: "Mumbai",
              desc: "Assist in audit planning, fieldwork, and finalization of reports.",
            },
            {
              title: "Tax Consultant",
              type: "Full Time",
              location: "Delhi",
              desc: "Manage direct and indirect taxation, filing returns, and client advisory.",
            },
            {
              title: "Article Trainee",
              type: "Internship",
              location: "Ahmedabad",
              desc: "Practical exposure in audit, taxation, and ROC filings.",
            },
          ].map((job, index) => (
            <div key={index} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.desc}</p>
              <div className="job-meta">
                <span>{job.type}</span> | <span>{job.location}</span>
              </div>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* ===== APPLY FORM ===== */}
      <section className="career-form container my-5">
        <h2 className="section-title">Apply Now</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Position Applying For" required />
            <input type="file" />
          </div>
          <textarea placeholder="Your Message" rows="5"></textarea>
          <button type="submit" className="submit-btn">Submit Application</button>
        </form>
      </section>

      <Footer />
    </>
  );
}

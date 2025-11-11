import React from "react";
// import "./TeamSection.css";

const teamMembers = [
  {
    name: "CA Rajesh Patel",
    role: "Founder & Managing Partner",
    img: "/assets/img/user.png",
  },
  {
    name: "CA Sneha Sharma",
    role: "Taxation & Compliance Expert",
    img: "/assets/img/user.png",
  },
  {
    name: "CA Amit Verma",
    role: "Corporate Finance Consultant",
    img: "/assets/img/user.png",
  },
  {
    name: "CA Priya Nair",
    role: "Audit & Assurance Specialist",
    img: "/assets/img/user.png",
  },
];

export default function TeamSection() {
  return (
    <section className="team-section">
      <div className="container">
        <h2 className="section-title">Meet Our Expert Team</h2>
        <p className="section-subtitle">
          A team of qualified Chartered Accountants and finance professionals committed to your business success.
        </p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-img-wrap">
                <img src={member.img} alt={member.name} className="team-img" />
              </div>
              <h5>{member.name}</h5>
              <span>{member.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

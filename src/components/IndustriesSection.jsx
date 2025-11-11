import React from "react";
import {
  FaBuilding,
  FaHospital,
  FaUniversity,
  FaIndustry,
  FaShoppingBag,
  FaChartLine,
} from "react-icons/fa";
// import "./IndustriesSection.css";

export default function IndustriesSection() {
  const industries = [
    {
      icon: <FaBuilding />,
      title: "Real Estate",
      desc: "Helping builders, agents, and developers manage tax & compliance efficiently.",
    },
    {
      icon: <FaHospital />,
      title: "Healthcare",
      desc: "Trusted accounting & payroll solutions for clinics, hospitals, and medical professionals.",
    },
    {
      icon: <FaUniversity />,
      title: "Education",
      desc: "Support for schools, colleges, and universities with bookkeeping & audits.",
    },
    {
      icon: <FaIndustry />,
      title: "Manufacturing",
      desc: "Cost optimization and financial planning for factories & production units.",
    },
    {
      icon: <FaShoppingBag />,
      title: "Retail",
      desc: "Simplified inventory management and GST compliance for retail businesses.",
    },
    {
      icon: <FaChartLine />,
      title: "Finance",
      desc: "Strategic financial consulting for startups and corporate firms.",
    },
  ];

  return (
    <section className="industries-area">
      <div className="industries-overlay"></div>
      <div className="container text-center">
        <h2 className="section-title text-white">Industries We Serve</h2>
        <p className="section-subtitle text-light">
          Empowering diverse sectors with tailored financial & business solutions.
        </p>

        <div className="industries-grid">
          {industries.map((item, index) => (
            <div key={index} className="industry-card">
              <div className="icon-box">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

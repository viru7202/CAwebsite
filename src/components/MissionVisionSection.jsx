import React from "react";

const MissionVisionSection = () => {
  return (
    <section className="mission-vision-section my-5">
      <div className="overlay"></div>
      <div className="container">
       <h2 className="section-title" style={{ color: "white" }}>
  Our Mission & Vision
</h2>


        <div className="mission-vision-content">
          <div className="mission-box">
           <h3 style={{ color: "white" }}>Our Mission</h3>
            <p>
              To empower businesses and individuals with accurate, reliable,
              and timely financial insights. We strive to build long-term
              relationships with our clients based on trust, integrity, and
              excellence in accounting and consultancy services.
            </p>
          </div>

          <div className="vision-box">
            <h3 style={{ color: "white" }}>Our Vision</h3>
            <p>
              To be recognized as a leading Chartered Accountancy firm known
              for innovation, client satisfaction, and professionalism — helping
              clients achieve sustainable financial success globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;

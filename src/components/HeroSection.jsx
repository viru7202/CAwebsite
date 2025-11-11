import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "../assets/style.css"; // make sure this path is correct

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <section className="hero-slider">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div
          className="hero-slide"
        
        >
          <div className="overlay"></div>
          <div className="hero-text">
            <h1>Empowering Your Financial Future</h1>
            <p>
              Expert Chartered Accountancy services for individuals &
              businesses.
            </p>
            <button className="apply-btn">Discover More</button>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          className="hero-slide"
         
        >
          <div className="overlay1"></div>
          <div className="hero-text">
            <h1>Trusted Advisors, Proven Results</h1>
            <p>
              Your growth is our mission. We simplify finance and taxation for
              you.
            </p>
            <button className="apply-btn">Our Services</button>
          </div>
        </div>

        {/* Slide 3 */}
        <div
          className="hero-slide"
          
        >
          <div className="overlay2"></div>
          <div className="hero-text">
            <h1>Building Stronger Financial Foundations</h1>
            <p>
              We deliver tailored solutions to strengthen your business
              financially.
            </p>
            <button className="apply-btn">Contact Us</button>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default HeroSection;

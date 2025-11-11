import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import "./ContactUs.css";

export default function ContactUs() {
  return (
    <>
      <Header />

      {/* ===== Hero Section ===== */}
      {/* <section className="contact-hero">
        <div className="overlay">
          <h1>Contact Us</h1>
          <p>
            We’d love to hear from you. Let’s discuss how we can help with your
            accounting, audit, and tax needs.
          </p>
        </div>
      </section> */}

         <section
        className="about-hero"
        style={{
          backgroundImage: "url('/assets/img/contact.jpeg')",
        }}
      >
        <div className="overlay"></div>
        <div className="about-hero-text">
          <h1>Contact Us</h1>
          <p> We’d love to hear from you. Let’s discuss how we can help with your
            accounting, audit, and tax needs.</p>
        </div>
      </section>

      {/* ===== Contact Content ===== */}
      <section className="contact-container">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            Whether you have a question, need a consultation, or just want to
            connect, our team is always available to assist you with expert
            advice.
          </p>

          <ul className="info-list">
            <li>
              <span>📍</span>
              <div>
                <strong>Office Address:</strong> <br />
                1018 Anand mangal3 Ahmedabad, Gujarat
              </div>
            </li>
            <li>
              <span>📞</span>
              <div>
                <strong>Phone:</strong> +91 98765 99999
              </div>
            </li>
            <li>
              <span>📧</span>
              <div>
                <strong>Email:</strong> ca@yourcompany.com
              </div>
            </li>
            <li>
              <span>⏰</span>
              <div>
                <strong>Working Hours:</strong> Mon–Sat: 10:00 AM – 7:00 PM
              </div>
            </li>
          </ul>
        </div>

        {/* ===== Form Section ===== */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-row">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Phone Number" required />
              <input type="text" placeholder="Company Name" />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="6" required></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ===== Google Map Section ===== */}
      <section className="map-section">
         <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.157826348176!2d72.55361707520261!3d23.017976616499855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84fcd3666ae9%3A0x9ccfe5140d6785b4!2sTulsi%20Baug%20Rd%2C%20Tulsibag%20Society%2C%20Ambawadi%2C%20Ahmedabad%2C%20Gujarat%20380006!5e0!3m2!1sen!2sin!4v1762420820997!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </section>

      <Footer />
    </>
  );
}

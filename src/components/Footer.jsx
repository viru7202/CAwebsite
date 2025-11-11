import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  // Scroll to top instantly on navigation
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <footer className="footer">
      <div className="footer-overlay">
        <div className="container footer-content">
          {/* ==== Top Footer Columns ==== */}
          <div className="footer-grid">
            {/* Column 1 */}
            <div className="footer-col">
              <img alt="Logo" className="logo" src="/assets/img/ca-logo.jpg" />
              <p>
                Providing expert Chartered Accountancy, taxation, and business
                consulting services to help individuals and businesses achieve
                financial excellence.
              </p>
              <div className="footer-social">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaInstagram /></a>
              </div>
            </div>

            {/* Column 2 */}
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
                <li><Link to="/about" onClick={scrollToTop}>About Us</Link></li>
                <li><Link to="/Achievements" onClick={scrollToTop}>Achievements</Link></li>
                <li><Link to="/career" onClick={scrollToTop}>Career</Link></li>
                <li><Link to="/contactus" onClick={scrollToTop}>Contact Us</Link></li>
                
              </ul>
            </div>

            {/* Column 3 */}
            <div className="footer-col">
              <h4>Our Services</h4>
              <ul>
                <li><Link to="/audit-assurance" onClick={scrollToTop}>Audit & Assurance</Link></li>
                <li><Link to="/taxation-compliance" onClick={scrollToTop}>Taxation & Compliance</Link></li>
                <li><Link to="/corporate-compliance" onClick={scrollToTop}>Corporate & ROC Compliances</Link></li>
                <li><Link to="/business-advisory" onClick={scrollToTop}>Business Advisory & CFO</Link></li>
                <li><Link to="/banking-finance" onClick={scrollToTop}>Banking & Project Finance</Link></li>
                <li><Link to="/capital-market-sebi" onClick={scrollToTop}>Capital Market & SEBI</Link></li>
                <li><Link to="/international-nri" onClick={scrollToTop}>International & NRI Services</Link></li>
                <li><Link to="/outsourcing-other" onClick={scrollToTop}>Outsourcing & Other</Link></li>

              </ul>
            </div>

            {/* Column 4 */}
            <div className="footer-col">
              <h4>Contact Info</h4>
              <p>📍 1018 Anand Mangal 3, Ahmedabad, Gujarat</p>
              <p>📞 +91 99999 99999</p>
              <p>📧 ca@cafirm.com</p>
            </div>
          </div>

          {/* ==== Bottom Footer ==== */}
          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} <strong>S D P M & Co.</strong> All Rights Reserved. | Designed by <span>Viren</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaEnvelope,
//   FaPhoneAlt,
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
// } from "react-icons/fa";
// // import "../style.css";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header>
//       {/* ==== Top Contact Bar ==== */}
//       <div className="topbar">
//         <div className="container topbar-content">
//           <div className="topbar-left">
//             <p>
//               <FaEnvelope className="icon" /> ca@gmail.com
//             </p>
//             <p>
//               <FaPhoneAlt className="icon" /> +91 99999 90999
//             </p>
//           </div>
//           <div className="topbar-right">
//             <a href="#">
//               <FaFacebookF />
//             </a>
//             <a href="#">
//               <FaTwitter />
//             </a>
//             <a href="#">
//               <FaLinkedinIn />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* ==== Main Navigation ==== */}
//       <nav className="navbar">
//         <div className="container navbar-content">
//           {/* Logo Section */}
//           <div className="logo-section">
//             <img src="/assets/img/ca-logo.jpg" alt="Logo" className="logo" />
//             <div className="logo-text">
//               <h2>S D P M & Co.</h2>
//               <p>Chartered Accountants</p>
//             </div>
//           </div>

//           {/* Hamburger Button */}
//           <div
//             className={`hamburger ${menuOpen ? "active" : ""}`}
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>

//           {/* Navigation Links */}
//           <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About Us</Link>
//             </li>
//             <li>
//               <Link to="/services">Services</Link>
//             </li>
//             <li>
//               <Link to="/achievements">Achievements</Link>
//             </li>
//             <li>
//               <Link to="/career">Career</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact Us</Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// }

import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ClientNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // ✅ Scroll to top instantly on link click
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className="main-header">
      {/* ===== TOP BAR ===== */}
      <div className="topbar">
        <div className="container topbar-content">
          <div className="topbar-left">
            <p>
              <FaEnvelope className="icon" /> ca@gmail.com
            </p>
            <p>
              <FaPhoneAlt className="icon" /> +91 99999 90999
            </p>
          </div>
          <div className="topbar-right">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* ===== NAVBAR ===== */}
      <div className="nav-container">
        {/* Logo Section */}
        <div className="logo-section">
          <img src="/assets/img/ca-logo.jpg" alt="Logo" className="logo" />
          <div className="logo-text">
            <h2>S D P M & Co.</h2>
            <p>Chartered Accountants</p>
          </div>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation */}
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <Link
                to="/"
                onClick={() => {
                  scrollToTop();
                  setMenuOpen(false);
                }}
              >
                Home
              </Link>
            </li>

            <li
              className={`dropdown ${
                activeDropdown === "services" ? "active" : ""
              }`}
            >
              <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("services");
                }}
              >
                Services ▾
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    to="/audit-assurance"
                    onClick={() => {
                      scrollToTop();
                      setMenuOpen(false);
                    }}
                  >
                    Audit & Assurance
                  </Link>
                </li>

                <li className="dropdown-sub">
                  <Link
                    to="/taxation-compliance"
                    onClick={() => {
                      scrollToTop();
                      setMenuOpen(false);
                    }}
                  >
                    Taxation & Compliance ▸
                  </Link>
                  <ul className="dropdown-submenu">
                    <li>
                      <Link
                        to="/taxation-compliance"
                        onClick={() => {
                          scrollToTop();
                          setMenuOpen(false);
                        }}
                      >
                        Direct Tax (Income Tax)
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/taxation-compliance"
                        onClick={() => {
                          scrollToTop();
                          setMenuOpen(false);
                        }}
                      >
                        Indirect Tax (GST)
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link
                    to="/corporate-compliance"
                    onClick={() => {
                      scrollToTop();
                      setMenuOpen(false);
                    }}
                  >
                    Corporate & ROC Compliances
                  </Link>
                </li>
                <li>
                  <Link
                    to="/business-advisory"
                    onClick={() => {
                      scrollToTop();
                      setMenuOpen(false);
                    }}
                  >
                    Business Advisory & CFO
                  </Link>
                </li>
                <li>
                  <Link
                    to="/banking-finance"
                    onClick={() => {
                      scrollToTop();
                      setMenuOpen(false);
                    }}
                  >
                    Banking & Project Finance
                  </Link>
                </li>
                <li>
                  <Link
                    to="/capital-market-sebi"
                    onClick={() => {
                      scrollToTop();
                      setMenuOpen(false);
                    }}
                  >
                    Capital Market & SEBI
                  </Link>
                </li>
                <li>
                  <Link
                    to="/international-nri"
                    onClick={() => {
                      scrollToTop();
                      setMenuOpen(false);
                    }}
                  >
                    International & NRI Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/outsourcing-other"
                    onClick={() => {
                      scrollToTop();
                      setMenuOpen(false);
                    }}
                  >
                    Outsourcing & Other
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                to="/achievements"
                onClick={() => {
                  scrollToTop();
                  setMenuOpen(false);
                }}
              >
                Achievements
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => {
                  scrollToTop();
                  setMenuOpen(false);
                }}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/career"
                onClick={() => {
                  scrollToTop();
                  setMenuOpen(false);
                }}
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                to="/contactus"
                onClick={() => {
                  scrollToTop();
                  setMenuOpen(false);
                }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

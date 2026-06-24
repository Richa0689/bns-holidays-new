import React from "react";
import "./Footer.css";
import logo from "./images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faWhatsapp, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT SIDE */}
        <div className="footer-left">
          <div className="footer-logo-wrap">
            <img src={logo} alt="Logo" className="footer-logo" />
          </div>
          <p className="gst">GST No: 27HARPK3244Q1ZS</p><br />
          <p className="bns">BNS Holidays operates as a proud division of the BNS Group of Companies, offering premium travel solutions backed by strong industry expertise and a legacy of trust.</p>
           <div className="social-icons">
              <a href=" https://www.facebook.com/profile.php?id=1039337035919403" target="_blank" rel="noreferrer" className="icon fb">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>

              <a href=" https://wa.me/917066620673?text=Hello" target="_blank" rel="noreferrer" className="icon wa">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>

              <a href="https://www.youtube.com/results?search_query=bns+holidays" target="_blank" rel="noreferrer" className="icon yt">
                <FontAwesomeIcon icon={faYoutube} />
              </a>

              <a href=" https://www.instagram.com/bns.holidays/" target="_blank" rel="noreferrer" className="icon ig">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
        </div>

        {/* RIGHT SIDE COLUMNS */}
        <div className="footer-columns">

          {/* COLUMN 1 */}
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li>Home</li>
              <li>India Tour</li>
              <li>International Tour</li>
              <li>Fixed Departure</li>
              <li><Link to="/villa">Villa</Link></li>
              <li><Link to="/visa">Visa</Link></li>
            </ul>
          </div>

          {/* COLUMN 2 */}
          <div className="footer-col">
            <h4>Courses</h4>
            <ul>
              <li>Travel Planning</li>
              <li>Tour Management</li>
              <li>Hospitality</li>
              <li>Guide Training</li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div className="footer-col">
            <h4>Policy</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="contact-list">
              <li><FontAwesomeIcon icon={faPhone} className="contact-icon-inline" /><span>+91 70666 20673</span></li>
              <li><FontAwesomeIcon icon={faEnvelope} className="contact-icon-inline" /><span>bnsholidays@bnsholidays.co.in</span></li>
              <li><FontAwesomeIcon icon={faLocationDot} className="contact-icon-inline" /><span>BNS Holidays, Office no A403, A Wing, Gera's imperium Gateway, Opp. Bhosari Metro Station, Pune, India</span></li>
            </ul>
          </div>

          {/* COLUMN 5 - MAP (new, last column, right corner) */}
          <div className="footer-col footer-map-col">
            <h4>Find Us</h4>
            <div className="footer-map">
              <iframe
                src="https://www.google.com/maps?q=BNS+Holidays&ftid=0x3bc2b92d91d5ee87:0x9208c0c307eeaf87&output=embed"
                title="BNS Holidays Location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="footer-bottom">
        © 2026 BNS Holidays. All Rights Reserved.
      </div>

    </footer>

  );
};

export default Footer;
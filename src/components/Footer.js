import React from "react";
import "./Footer.css";
import logo from "./images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faWhatsapp, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT SIDE */}
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="gst">GST No: 27HARPK3244Q1ZS</p><br />
          <p className="bns">BNS Holidays operates as a proud division of the BNS Group of Companies, offering premium travel solutions backed by strong industry expertise and a legacy of trust.</p>
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
              <Link to="/villa" style={{ color: "inherit", textDecoration: "none" }}>Villa</Link>
               <li><Link to="/visa"  style={{ color: "inherit", textDecoration: "none" }}>Visa</Link></li>
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
            <ul>
              <li>📞 +91 70666 20673</li>
              <li>📧 bnsholidays@bnsholidays.co.in</li>
              <li>📍 BNS Holidays, Office no A403, A Wing, Gera's imperium Gateway, Opp. Bhosari Metro Station, Pune, India</li>
            </ul>
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
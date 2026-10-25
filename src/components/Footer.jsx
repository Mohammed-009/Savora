import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="py-5 footer-section">
      <div className="container">
        <div className="row g-4">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6">
            <h5 className="mb-4" style={{ color: "var(--color-gold)" }}>
              About Us
            </h5>
            <p className="mb-4">
              We are dedicated to providing innovative solutions that help
              businesses grow and succeed in the digital age.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="mb-4" style={{ color: "var(--color-gold)" }}>
              Quick Links
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="footer-link">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" className="footer-link">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="/menu" className="footer-link">
                  Menu
                </a>
              </li>
              <li className="mb-2">
                <a href="/gallery" className="footer-link">
                  Gallery
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="col-lg-2 col-md-6">
            <h5 className="mb-4" style={{ color: "var(--color-gold)" }}>
              Hours
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <p href="#" className="footer-link">
                  <span className="px-1">Mon</span>
                  <span>(6am – 10pm)</span>
                </p>
              </li>
              <li className="mb-2">
                <p href="#" className="footer-link">
                  <span className="px-1">Tue</span>
                  <span>(6am – 10pm)</span>
                </p>
              </li>
              <li className="mb-2">
                <p href="#" className="footer-link">
                  <span className="px-1">Wed</span>
                  <span>(6am – 10pm)</span>
                </p>
              </li>
              <li className="mb-2">
                <p href="#" className="footer-link">
                  <span className="px-1">Thur</span>
                  <span>(6am – 10pm)</span>
                </p>
              </li>
              <li className="mb-2">
                <p href="#" className="footer-link">
                  <span className="px-1">Fri</span>
                  <span>(6am – 10pm)</span>
                </p>
              </li>
              <li className="mb-2">
                <p href="#" className="footer-link">
                  <span className="px-1">Sat</span>
                  <span>(6am – 10pm)</span>
                </p>
              </li>
              <li className="mb-2">
                <p href="#" className="footer-link">
                  <span className="px-1">Sun</span>
                  <span>(6am – 10pm)</span>
                </p>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-md-6">
            <h5 className="mb-4" style={{ color: "var(--color-gold)" }}>
              Contact Info
            </h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="fas fa-map-marker-alt me-2"></i>
                123 Business Street, New York, NY 10001
              </li>
              <li className="mb-3">
                <i className="fas fa-phone me-2"></i>
                <a href="tel:+1234567890" className="footer-link">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="mb-3">
                <i className="fas fa-envelope me-2"></i>
                <a href="mailto:contact@example.com" className="footer-link">
                  contact@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div class="row mt-5">
          <div class="col-12">
            <hr class="mb-4" />
            <div class="text-center">
              <p class="mb-0">&copy; 2024 Your Company. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

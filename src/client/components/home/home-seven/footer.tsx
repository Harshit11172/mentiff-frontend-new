import React from 'react'
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath'
import { Link } from "react-router-dom";

const HomeSevenFooter = () => {
  return (
    <div>
        <>
  {/* Footer */}
  <footer className="footer footer-eight">
    {/* Footer Top */}
    <div className="footer-top aos" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            {/* Footer Widget */}
            <div className="footer-widget footer-about">
              <div className="footer-logo">
                <ImageWithBasePath src="assets/img/logo-5.png" alt="logo" />
              </div>
              <div className="footer-about-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
            </div>
            {/* /Footer Widget */}
          </div>
          <div className="col-lg-3 col-md-6">
            {/* Footer Widget */}
            <div className="footer-widget footer-menu">
              <h2 className="footer-title">For Mentee</h2>
              <ul>
                <li>
                  <Link to="/mentee/search-mentor">Search Mentors</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/mentee/booking1">Booking</Link>
                </li>
                <li>
                  <Link to="/mentee/dashboard">Mentee Dashboard</Link>
                </li>
              </ul>
            </div>
            {/* /Footer Widget */}
          </div>
          <div className="col-lg-3 col-md-6">
            {/* Footer Widget */}
            <div className="footer-widget footer-menu">
              <h2 className="footer-title">For Mentors</h2>
              <ul>
                <li>
                  <Link to="/mentor/bookings">Appointments</Link>
                </li>
                <li>
                  <Link to="/mentor/chat-mentor">Chat</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/mentor/mentor-dashboard">Mentor Dashboard</Link>
                </li>
              </ul>
            </div>
            {/* /Footer Widget */}
          </div>
          <div className="col-lg-3 col-md-6">
            {/* Footer Widget */}
            <div className="footer-widget footer-contact">
              <h2 className="footer-title">Contact Us</h2>
              <div className="footer-contact-info">
                <div className="footer-address">
                  <p>
                    {" "}
                    3556 Beech Street, San Francisco,
                    <br /> California, CA 94108{" "}
                  </p>
                </div>
                <p>+1 315 369 5943</p>
                <p className="mb-0">mentoring@example.com</p>
              </div>
            </div>
            {/* /Footer Widget */}
          </div>
        </div>
      </div>
    </div>
    {/* /Footer Top */}
    {/* Footer Bottom */}
    <div className="footer-bottom">
      <div className="container">
        {/* Copyright */}
        <div className="copyright">
          <div className="row">
            <div className="col-md-6">
              <div className="copyright-text">
                <p className="mb-0">© 2024 Mentoring. All rights reserved.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="social-icon text-md-end">
                <ul>
                  <li>
                    <Link to="#" target="_blank">
                      <i className="fab fa-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" target="_blank">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" target="_blank">
                      <i className="fab fa-twitter" />{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /Copyright */}
      </div>
    </div>
    {/* /Footer Bottom */}
  </footer>
  {/* /Footer */}
</>

    </div>
  )
}

export default HomeSevenFooter
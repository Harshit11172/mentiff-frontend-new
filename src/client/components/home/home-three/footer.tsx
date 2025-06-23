import React from "react";
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath";
import { Link } from "react-router-dom";

const HomeThreeFooter = () => {
  return (
    <footer className="footer footer-two">
      {/* Footer Top */}
      <div className="footer-top footer-two-top aos " data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-6">
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
            <div className="col-lg-2 col-md-6">
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
            {/* Footer Widget */}
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">More</h2>
                <ul>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/mentee/mentee-chat">Chat</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                  <li>
                    <Link to="/mentee/search-mentor">Search Mentees</Link>
                  </li>
                  <li>
                    <Link to="/mentee/search-mentor">Search Mentors</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* /Footer Widget */}
            <div className="col-md-6">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">Subscribe to get Updates</h2>
                <p className="fotter-para">
                  Our goal is to translate the positive effects from
                  revolutionizing
                </p>
                <div className="email-box">
                  <input type="email" placeholder="Your email address" />
                  <Link to="#">
                    <ImageWithBasePath src="assets/img/icon/subscribe-icon.svg" alt="" />
                  </Link>
                </div>
                <ul className="icon-socials">
                  <li>
                    <Link to="#">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-linkedin" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-behance" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Footer Top */}
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          {/* Copyright */}
          <div className="copyright-border" />
          <div className="copyright ">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-4">
                <div className="copyright-text">
                  <p className="mb-0">© 2024 Mentoring. All rights reserved.</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-8">
                <div className="term-privacy">
                  <div className="social-icon">
                    <ul className="align-items-center">
                      <li>
                        <Link to="#">About</Link>
                      </li>
                      <li>
                        <Link to="#">Become a Mentor </Link>
                      </li>
                      <li>
                        <Link to="#">Become a Mentee</Link>
                      </li>
                      <li>
                        <Link to="#">Pricing</Link>
                      </li>
                      <li>
                        <Link to="#">All Courses</Link>
                      </li>
                      <li>
                        <Link to="#">Help </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Copyright */}
          
        </div>
      </div>
      {/* /Footer Bottom */}
    </footer>
  );
};

export default HomeThreeFooter;

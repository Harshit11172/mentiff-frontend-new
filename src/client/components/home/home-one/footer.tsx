import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath";

const HomeOnefooter = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <footer className="footer">
      {/* Footer Top */}
      <div className="footer-top aos" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              {/* Footer Widget */}
              <div className="footer-widget footer-about">
                <div className="footer-logo">
                  <ImageWithBasePath src="assets/img/logo.png" alt="logo" />
                </div>
                <div className="footer-about-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                  <div className="social-icon">
                    <ul>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="fab fa-facebook-f" />{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="fab fa-twitter" />{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="fab fa-dribbble" />{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
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
                    <Link to="/mentor/bookings">Appointments</Link>
                  </li>
                  <li>
                    <Link to="/mentor/chat-mentor">Chat</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/mentee/mentee-dashboard">Mentee Dashboard</Link>
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
                    <Link to="/mentee/search-mentor">Search for Mentor</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                  <li>
                    <Link to="/mentors/booking">Booking</Link>
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
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icon/location-icon.svg"
                        alt=""
                      />
                    </span>
                    <p>
                      3556 Beech Street, San Francisco,
                      <br /> California, CA 94108{" "}
                    </p>
                  </div>
                  <p>
                    <span className="d-inline-block">
                      <ImageWithBasePath
                        src="assets/img/icon/call-icon.svg"
                        alt=""
                      />
                    </span>
                    +1 315 369 5943
                  </p>
                  <p className="mb-0">
                    <span className="d-inline-block">
                      <ImageWithBasePath
                        src="assets/img/icon/mail-icon.svg"
                        alt=""
                      />
                    </span>
                    mentoring@example.com
                  </p>
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
              <div className="col-12 text-center">
                <div className="copyright-text">
                  <p className="mb-0">© 2024 Mentoring. All rights reserved.</p>
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

export default HomeOnefooter;

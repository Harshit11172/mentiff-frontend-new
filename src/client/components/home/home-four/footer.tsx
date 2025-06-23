import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeFourfooter = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <footer className="footer footer-three">
      {/* Footer Top */}
      <div className="footer-top footer-two-top footer-four-index aos ">
        <div className="container">
          <div className="row" data-aos="fade-up">
            <div className="col-lg-4 col-md-6">
              {/* Footer Widget */}
              <div className="footer-widget footer-about">
                <h2 className="footer-title">Contact US</h2>
                <div className="footer-about-content">
                  <p className="footer-sub-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    consequat mauris Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Ut consequat
                  </p>
                </div>
                <div className="footer-three-contact">
                  <ul>
                    <li>
                      <i className="fe fe-map-pin" />
                      121 King St, Melbourne den 3000, Australia
                    </li>
                    <li>
                      <i className="fe fe-phone" />
                      +1 55265 164561
                    </li>
                    <li>
                      <i className="fe fe-mail" />
                      mentoring@example.com
                    </li>
                  </ul>
                  <ul className="icon-socials d-flex">
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
                    <Link  to="/mentor/mentor-dashboard">Mentor Dashboard</Link>
                  </li>
                </ul>
              </div>
              {/* /Footer Widget */}
            </div>
            <div className="col-lg-2 col-md-6">
              {/* Footer Widget */}
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">Community </h2>
                <ul>
                  <li>
                    <Link to="/mentee/mentor-profile">Learners</Link>
                  </li>
                  <li>
                    <Link to="/mentor/mentee-profile">Partners</Link>
                  </li>
                  <li>
                    <Link to="/mentee/mentor-profile">Developers</Link>
                  </li>
                  <li>
                    <Link to="/mentee/search-mentor">Free Courses</Link>
                  </li>
                  <li>
                    <Link  to="/mentor/mentor-dashboard">Affiliates</Link>
                  </li>
                  <li>
                    <Link to="/mentor-blog">Blogs</Link>
                  </li>
                  <li>
                    <Link to="/mentee/search-mentor">Become a Mentee</Link>
                  </li>
                </ul>
              </div>
              {/* /Footer Widget */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Footer News letter */}
              <div className="subscriber-two">
                <h2 className="footer-title">Subscribe to get Updates</h2>
                <p>
                  Our goal is to translate the positive effects from
                  revolutionizing
                </p>
                <form action="/mentee/search-mentor">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your email address"
                    />
                    <Link to="#">
                      <ImageWithBasePath src="assets/img/icon/subscribe-icon.svg" alt="" />
                    </Link>
                  </div>
                  <div className="bottom-border-two" />
                </form>
              </div>
              {/* /Footer News letter */}
            </div>
          </div>
        </div>
      </div>
      {/* /Footer Top */}
      {/* Footer Bottom */}
      <div className="footer-bottom index-four-footer-bottom">
        <div className="container">
          {/* Copyright */}
          <div className="copyright-border" />
          <div className="copyright p-0">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="copyright-text">
                  <p className="mb-0">
                    {" "}
                    © 2024 Mentoring. All rights reserved.
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="footer-logo text-center">
                  <ImageWithBasePath
                    src="assets/img/logo-5.png"
                    className="img-fluid"
                    alt="Logo"
                  />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="term-privacy">
                  <div className="terms">
                    <ul className="align-items-center">
                      <li>
                        <Link to="#">Terms &amp; Condition</Link>
                      </li>
                      <li>
                        <Link to="#">Privacy Policy </Link>
                      </li>
                      <li>
                        <Link to="#">Cookie Policy </Link>
                      </li>
                      <li>
                        <Link to="#">Sitemap </Link>
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

export default HomeFourfooter;

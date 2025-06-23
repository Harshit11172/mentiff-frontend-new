import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeEightfooter = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <>
        {/* Footer */}
        <footer className="footer footer-two footer-four foot-eight">
          {/* Footer Top */}
          <div className="footer-top footer-two-top aos " data-aos="fade-up">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12"></div>
                <div className="col-lg-4 col-md-6">
                  <div className="footer-logo">
                    <ImageWithBasePath src="assets/img/logo-5.png" alt="logo" />
                  </div>
                  {/* Footer Widget */}
                  <div className="footer-widget footer-about">
                    <div className="footer-about-content">
                      <h2 className="footer-title">About Mentoring</h2>
                      <p className="footer-sub-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut consequat mauris Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Ut consequat mauris{" "}
                      </p>
                    </div>
                  </div>
                  {/* /Footer Widget */}
                </div>
                <div className="col-lg-4 col-md-6">
                  {/* Footer News letter */}
                  <div className="subscriber-two">
                    <h2 className="footer-title">Subscribe</h2>
                    <form action="/mentee/search-mentor">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="E-email address"
                        />
                        <Link
                          to="/mentee/search-mentor"
                          className="btn bg-path d-flex align-items-center"
                        >
                          <i className="fas fa-arrow-up" />
                        </Link>
                      </div>
                      <div className="bottom-border-two" />
                    </form>
                    <div className="footer-list">
                      <ul className="footer-social-list">
                        <li>
                          <Link to="">Facebook</Link>
                        </li>
                        <li>
                          <Link to="">Instagram </Link>
                        </li>
                        <li>
                          <Link to="">Linkedin </Link>
                        </li>
                        <li>
                          <Link to="">Pinterest</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /Footer News letter */}
                </div>
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
                        <Link  to="/mentor/mentor-dashboard">Mentor Dashboard</Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Footer Widget */}
                </div>
              </div>
            </div>
          </div>
          {/* /Footer Top */}
          {/* Footer Bottom */}
          <div className="footer-bottom ">
            <div className="container">
              {/* Copyright */}
              <div className="copyright-border" />
              <div className="copyright ">
                <div className="row align-items-center">
                  <div className="col-md-6 ">
                    <div className="copyright-text">
                      <p className="mb-0">
                        © 2024 Mentoring. All rights reserved.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="term-privacy">
                      <div className="social-icon">
                        <ul className="align-items-center">
                          <li>
                            <Link to="#">Terms</Link>
                          </li>
                          <li>
                            <Link to="#">Privacy </Link>
                          </li>
                          <li>
                            <Link to="#">Cookies </Link>
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
        {/* /Footer */}
      </>
    </div>
  );
};

export default HomeEightfooter;

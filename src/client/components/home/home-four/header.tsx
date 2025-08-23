import React from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath";

const HomeFourHeader = () => {
  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };
  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };

  return (
    <header className="header header-three">
      <div className="header-fixed">
        <nav className="navbar navbar-expand-lg header-nav scroll-sticky-three">
          <div className="container">
            <div className="navbar-header">
              <Link id="mobile_btn" to="#" onClick={() => onHandleMobileMenu()}>
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </Link>
              <Link to="/index" className="navbar-brand logo">
                <ImageWithBasePath
                  src="assets/img/logo-5.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/index" className="menu-logo">
                  <ImageWithBasePath
                    src="assets/img/logo-4.png"
                    className="img-fluid"
                    alt="Logo"
                  />
                </Link>
                <Link
                  id="menu_close"
                  className="menu-close"
                  onClick={() => onhandleCloseMenu()}
                  to="#"
                >
                  <i className="fas fa-times" />
                </Link>
              </div>
              <ul className="main-nav">
                <li className="active megamenu has-submenu">
                  <Link to="/index">
                    Home <i className="fas fa-chevron-down" />
                  </Link>
                  <ul className="submenu mega-submenu">
                    <li>
                      <div className="megamenu-wrapper">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="single-demo">
                              <div className="demo-img">
                                <Link to="/index" className="inner-demo-img">
                                  <ImageWithBasePath
                                    src="assets/img/home-1.jpg"
                                    className="img-fluid "
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link to="/index" className="inner-demo-img">
                                  Home - 1
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="single-demo ">
                              <div className="demo-img">
                                <Link
                                  to="/index-2"
                                  className="inner-demo-img"
                                >
                                  <ImageWithBasePath
                                    src="assets/img/home-2.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link
                                  to="/index-2"
                                  className="inner-demo-img"
                                >
                                  Home - 2
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="single-demo">
                              <div className="demo-img">
                                <Link
                                  to="/index-2"
                                  className="inner-demo-img"
                                >
                                  <ImageWithBasePath
                                    src="assets/img/home-3.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link
                                  to="/index-2"
                                  className="inner-demo-img"
                                >
                                  Home - 3
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="single-demo active">
                              <div className="demo-img">
                                <Link
                                  to="/index-4"
                                  className="inner-demo-img"
                                >
                                  <ImageWithBasePath
                                    src="assets/img/home-4.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link
                                  to="/index-4"
                                  className="inner-demo-img"
                                >
                                  Home - 4
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="single-demo">
                              <div className="demo-img">
                                <Link
                                  to="/index-5"
                                  className="inner-demo-img"
                                >
                                  <ImageWithBasePath
                                    src="assets/img/home-6.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link
                                  to="/index-5"
                                  className="inner-demo-img"
                                >
                                  Home - 5
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="single-demo">
                              <div className="demo-img">
                                <Link
                                  to="/index-6"
                                  className="inner-demo-img"
                                >
                                  <ImageWithBasePath
                                    src="assets/img/home-8.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link
                                  to="/index-6"
                                  className="inner-demo-img"
                                >
                                  Home - 6
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="single-demo">
                              <div className="demo-img">
                                <Link
                                  to="/index-7"
                                  className="inner-demo-img"
                                >
                                  <ImageWithBasePath
                                    src="assets/img/home-7.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link
                                  to="/index-7"
                                  className="inner-demo-img"
                                >
                                  Home - 7
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="single-demo">
                              <div className="demo-img">
                                <Link
                                  to="/index-8"
                                  className="inner-demo-img"
                                >
                                  <ImageWithBasePath
                                    src="assets/img/home-5.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link
                                  to="/index-8"
                                  className="inner-demo-img"
                                >
                                  Home - 8
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="#">
                    Mentor <i className="fas fa-chevron-down" />
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link  to="/mentor/mentor-dashboard">Mentor Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/mentor/bookings">Bookings</Link>
                    </li>
                    <li>
                      <Link to="/mentor/schedule-timing">Schedule Timing</Link>
                    </li>
                    <li>
                      <Link to="/mentor/mentee-list">Mentee List</Link>
                    </li>
                    <li>
                      <Link to="/mentor/mentee-profile">Mentee Profile</Link>
                    </li>
                    <li className="has-submenu">
                      <Link to="/mentor-blog">Blog</Link>
                      <ul className="submenu">
                        <li>
                          <Link to="/mentor-blog">Blog</Link>
                        </li>
                        <li>
                          <Link to="/blog/blog-details">Blog View</Link>
                        </li>
                        <li>
                          <Link to="/blog/add-blog">Add Blog</Link>
                        </li>
                        <li>
                          <Link to="/blog/edit-blog">Edit Blog</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/mentor/chat-mentor">Chat</Link>
                    </li>
                    <li>
                      <Link to="/mentor/invoice">Invoices</Link>
                    </li>
                    <li>
                      <Link to="/mentor/profile-setting">Profile Settings</Link>
                    </li>
                    <li>
                      <Link to="/mentor/review">Reviews</Link>
                    </li>
                    <li>
                      <Link to="/mentor/mentor-register">Mentor Register</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="#">
                    Mentee <i className="fas fa-chevron-down" />
                  </Link>
                  <ul className="submenu">
                    <li className="has-submenu">
                      <Link to="#">Mentors</Link>
                      <ul className="submenu">
                        <li>
                          <Link to="/mentee/map-grid">Map Grid</Link>
                        </li>
                        <li>
                          <Link to="/mentee/map-list">Map List</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/mentee/search-mentor">Search Mentor</Link>
                    </li>
                    <li>
                      <Link
                        to="/mentee/mentor-profile"
                        onClick={() => onhandleCloseMenu()}
                      >
                        Mentor Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/univ/universities">Bookings</Link>
                    </li>
                    <li>
                      <Link to="/mentee/checkout">Checkout</Link>
                    </li>
                    <li>
                      <Link to="/mentee/booking-success">Booking Success</Link>
                    </li>
                    <li>
                      <Link to="/mentee/dashboard">Mentee Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/mentee/favourites">Favourites</Link>
                    </li>
                    <li>
                      <Link to="/mentee/mentee-chat">Chat</Link>
                    </li>
                    <li>
                      <Link to="/mentee/profile">
                        Profile Settings
                      </Link>
                    </li>
                    <li>
                      <Link to="/mentee/change-password">Change Password</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="#">
                    Pages <i className="fas fa-chevron-down" />
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/pages/voice-call">Voice Call</Link>
                    </li>
                    <li>
                      <Link to="/pages/video-call">Video Call</Link>
                    </li>
                    <li>
                      <Link to="/mentee/search-mentor">Search Mentors</Link>
                    </li>
                    <li>
                      <Link to="/pages/component">Components</Link>
                    </li>
                    <li className="has-submenu">
                      <Link to="/mentor/invoice">Invoices</Link>
                      <ul className="submenu">
                        <li>
                          <Link to="/mentor/invoice">Invoices</Link>
                        </li>
                        <li>
                          <Link to="/pages/invoice-view">Invoice View</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/pages/blank-page">Starter Page</Link>
                    </li>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                    <li>
                      <Link to="/forgot-password">Forgot Password</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="#">
                    Blog <i className="fas fa-chevron-down" />
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/blog/blog-list">Blog List</Link>
                    </li>
                    <li>
                      <Link to="/blog/blog-grid">Blog Grid</Link>
                    </li>
                    <li>
                      <Link to="/blog/blog-details">Blog Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/admin" target="_blank">
                    Admin
                  </Link>
                </li>
                <li className="login-link">
                  <Link to="/login">Login / Signup</Link>
                </li>
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <li className="nav-item">
                <Link className="nav-link header-login-two" to="/login">
                  Start Login
                  <ImageWithBasePath
                    src="assets/img/icon/login-circle.svg"
                    alt=""
                    className="ms-2"
                  />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header-login" to="/register">
                  Register Now
                  <i className="fas fa-user ms-2" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HomeFourHeader;

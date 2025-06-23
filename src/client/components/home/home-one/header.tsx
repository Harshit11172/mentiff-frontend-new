import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../../../admin/components/imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  home1,
  home2,
  home3,
  home4,
  home5,
  home6,
  home7,
  home8,
} from "../../imagepath";
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath";

const HomeOneHeader = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const config = "/react/template";

  //mobile menu
  const [change, setChange] = useState(false);
  const [isSideMenu, setSideMenu] = useState("");
  const [isSideMenuone, setSideMenuone] = useState("");
  const [isSideMenutwo, setSideMenutwo] = useState("");
  const [isSideSearch, setSideSearch] = useState("");
  const [isSidebooking, setSideBooking] = useState("");
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const [isSideMenuthree, setSideMenuthree] = useState("");
  const [isSideMenufour, setSideMenufour] = useState("");
  const [sideMenufive, setSideMenufive] = useState("");
  const [menu, setMenu] = useState(false);

  // const [menu1, setMenu1] = useState(false);
  const toggleSidebarthree = (value) => {
    setSideMenuthree(value);
  };
  const toggleSidebar = (value) => {
    setSideMenu(value);
  };
  const toggleSidebarfour = (value) => {
    setSideMenufour(value);
  };
  const toggleSidebarfive = (value) => {
    setSideMenufive(value);
  };
  const toggleSidebarone = (value) => {
    setSideMenuone(value);
  };
  const toggleSidebartwo = (value) => {
    setSideMenutwo(value);
  };
  const toggleSidebarsearch = (value) => {
    setSideSearch(value);
  };
  const toggleSidebarbooking = (value) => {
    setSideBooking(value);
  };

  // const mobilemenus = () => {
  //   setMenu(!true);
  // };

  // Rest of your code that uses pathnames

  let pathnames = window.location.pathname;

  // const [active, setActive] = useState(false);
  const url = pathnames.split("/").slice(0, -1).join("/");

  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };

  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };

  //nav transparent

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <header className="header">
      <div className="header-fixed">
        <nav className="navbar navbar-expand-lg header-nav">
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
                src="assets/img/logo.png"
                className="img-fluid"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <Link to="/index" className="menu-logo">
                <ImageWithBasePath
                  src="assets/img/logo.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
              <Link id="menu_close" className="menu-close" to="#" onClick={() => onhandleCloseMenu()}>
                <i className="fas fa-times" />
              </Link>
            </div>
            <ul className="main-nav">
              <li
                className={`has-submenu   ${
                  pathnames.includes("index")
                    ? "active"
                    : "" || pathnames.includes("home")
                    ? "active"
                    : ""
                }`}
              >
                {/* <Link
                  to="/index"
                  // target="_blank"
                >
                  Home
                </Link> */}
              </li>
              <li className="active megamenu has-submenu ">
                <Link
                 to="#"
                 className={isSideMenu == "home" ? "subdrop " : ""}
                 onMouseEnter={() =>
                   toggleSidebar(
                     isSideMenu == "home" ? "submenu" : "home"
                   )
                 }
                >
                  Home <i className="fas fa-chevron-down" />
                </Link>
                {isSideMenu == "home" ? (
                <ul 
                // className="submenu mega-submenu"
                className={`${
                  isSideMenu == "home" ? "submenu mega-submenu d-block" : "mega-submenu"
                }`}
                >
                  <li>
                    <div className="megamenu-wrapper">
                      <div className="row">
                        <div className="col-lg-3">
                          <div className="single-demo active">
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
                              <Link to="/index-2" className="inner-demo-img">
                                <ImageWithBasePath
                                  src="assets/img/home-2.jpg"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                            </div>
                            <div className="demo-info">
                              <Link to="/index-2" className="inner-demo-img">
                                Home - 2
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="single-demo">
                            <div className="demo-img">
                              <Link to="/index-3" className="inner-demo-img">
                                <ImageWithBasePath
                                  src="assets/img/home-3.jpg"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                            </div>
                            <div className="demo-info">
                              <Link to="/index-3" className="inner-demo-img">
                                Home - 3
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="single-demo">
                            <div className="demo-img">
                              <Link to="/index-4" className="inner-demo-img">
                                <ImageWithBasePath
                                  src="assets/img/home-4.jpg"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                            </div>
                            <div className="demo-info">
                              <Link to="/index-4" className="inner-demo-img">
                                Home - 4
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="single-demo">
                            <div className="demo-img">
                              <Link to="/index-5" className="inner-demo-img">
                                <ImageWithBasePath
                                  src="assets/img/home-6.jpg"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                            </div>
                            <div className="demo-info">
                              <Link to="/index-5" className="inner-demo-img">
                                Home - 5
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="single-demo">
                            <div className="demo-img">
                              <Link to="/index-6" className="inner-demo-img">
                                <ImageWithBasePath
                                  src="assets/img/home-8.jpg"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                            </div>
                            <div className="demo-info">
                              <Link to="/index-6" className="inner-demo-img">
                                Home - 6
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="single-demo">
                            <div className="demo-img">
                              <Link to="/index-7" className="inner-demo-img">
                                <ImageWithBasePath
                                  src="assets/img/home-7.jpg"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                            </div>
                            <div className="demo-info">
                              <Link to="/index-7" className="inner-demo-img">
                                Home - 7
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="single-demo">
                            <div className="demo-img">
                              <Link to="/index-8" className="inner-demo-img">
                                <ImageWithBasePath
                                  src="assets/img/home-5.jpg"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                            </div>
                            <div className="demo-info">
                              <Link to="/index-8" className="inner-demo-img">
                                Home - 8
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                 ) : (
                  ""
                )}
              </li>
              <li
                className={`has-submenu ${
                  url.includes("/mentor") ? "active" : ""
                }`}
              >
                <Link
                  to="#"
                  className={isSideMenu == "doctors" ? "subdrop " : ""}
                  onMouseEnter={() =>
                    toggleSidebar(
                      isSideMenu == "doctors" ? "submenu" : "doctors"
                    )
                  }
                >
                  Mentor <i className="fas fa-chevron-down" />
                </Link>
                {isSideMenu == "doctors" ? (
                  <ul
                    className={`${
                      isSideMenu == "doctors" ? "submenu d-block" : "submenu"
                    }`}
                  >
                    <li
                      className={
                        pathnames.includes("mentor-dashboard") ? "active" : ""
                      }
                    >
                      <Link
                        to="/mentor/mentor-dashboard"
                        onClick={() => onhandleCloseMenu()}
                      >
                        Mentor Dashboard
                      </Link>
                    </li>
                    <li
                      className={pathnames.includes("bookings") ? "active" : ""}
                    >
                      <Link
                        to="/mentor/bookings"
                        onClick={() => onhandleCloseMenu()}
                      >
                        Bookings
                      </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("schedule-timing") ? "active" : ""
                      }
                    >
                      <Link
                        to="/mentor/schedule-timing"
                        onClick={() => onhandleCloseMenu()}
                      >
                        Schedule Timing
                      </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("my-patients") ? "active" : ""
                      }
                    >
                      <Link
                        to="/mentor/mentee-list"
                        onClick={() => onhandleCloseMenu()}
                      >
                        Mentee List
                      </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("mentee-profile") ? "active" : ""
                      }
                    >
                      <Link
                        to="/mentor/mentee-profile"
                        onClick={() => onhandleCloseMenu()}
                      >
                        Mentee Profile
                      </Link>
                    </li>
                    <li
                      className={`has-submenu ${
                        pathnames.includes("mentor-blog") ? "active" : ""
                      }`}
                    >
                      <Link
                        to="/mentor-blog"
                        onClick={() => onhandleCloseMenu()}
                      >
                        Blog
                      </Link>
                      <ul className="submenu">
                        <li>
                          <Link
                            to="/mentor-blog"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/blog/blog-details"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Blog view
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/blog/add-blog"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Add Blog
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/blog/edit-blog"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Edit Blog
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={
                        pathnames.includes("chat-mentor") ? "active" : ""
                      }
                    >
                      <Link
                        to="/mentor/chat-mentor"
                        onClick={() => onhandleCloseMenu()}
                      >
                        Chat
                      </Link>
                    </li>
                    <li
                      className={pathnames.includes("invoice") ? "active" : ""}
                    >
                      <Link
                        to="/mentor/invoice"
                        onClick={() => onhandleCloseMenu()}
                      >
                        Invoices
                      </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("profile-setting") ? "active" : ""
                      }
                    >
                      <Link
                        to="/mentor/profile-setting"
                        onClick={() => onhandleCloseMenu()}
                      >
                        Profile Settings
                      </Link>
                    </li>
                    <li
                      className={pathnames.includes("review") ? "active" : ""}
                    >
                      <Link
                        to="/mentor/review"
                        onClick={() => onhandleCloseMenu()}
                      >
                        Reviews
                      </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("mentor-register") ? "active" : ""
                      }
                    >
                      <Link
                        to="/mentor/mentor-register"
                        onClick={() => onhandleCloseMenu()}
                      >
                        Mentor Register
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li
                className={`has-submenu ${
                  url.includes("/mentee") ? "active" : ""
                }`}
              >
                <Link
                  to="#"
                  className={isSideMenu == "patients" ? "subdrop" : ""}
                  onMouseEnter={() =>
                    toggleSidebar(
                      isSideMenu == "patients" ? "submenu" : "patients"
                    )
                  }
                >
                  Mentee <i className="fas fa-chevron-down" />
                </Link>
                {isSideMenu == "patients" ? (
                  <ul
                    className={`${
                      isSideMenu == "patients" ? "submenu d-block" : "submenu"
                    }`}
                  >
                    <li
                      className={`has-submenu ${
                        pathnames.includes("doctor") &&
                        !pathnames.includes("mentor-profile") &&
                        !pathnames.includes("search-doctor")
                          ? "active"
                          : ""
                      }`}
                    >
                      <Link
                        to="#0"
                        className={isSideMenutwo == "doctor" ? "subdrop" : ""}
                        onMouseEnter={() =>
                          toggleSidebartwo(
                            isSideMenutwo == "doctor" ? "" : "doctor"
                          )
                        }
                      >
                        Mentors{" "}
                      </Link>
                      {isSideMenutwo == "doctor" ? (
                        <ul
                          className={
                            isSideMenutwo == "doctor"
                              ? "submenu d-block"
                              : "submenu"
                          }
                        >
                          <li
                            className={
                              pathnames.includes("map-grid") ? "active" : ""
                            }
                          >
                            <Link
                              to="/mentee/map-grid"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Map Grid
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("map-list") ? "active" : ""
                            }
                          >
                            <Link
                              to="/mentee/map-list"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Map List
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                    <li
                      className={
                        pathnames.includes("search-mentor") ? "active" : ""
                      }
                    >
                      <Link
                        to="/mentee/search-mentor"
                        onClick={() => onhandleCloseMenu()}
                      >
                        Search Mentor
                      </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("mentor-profile") ? "active" : ""
                      }
                    >
                      <Link
                        to="/mentee/mentor-profile"
                        onClick={() => onhandleCloseMenu()}
                      >
                        Mentor Profile
                      </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("mentee-bookings") ? "active" : ""
                      }
                    >
                      <Link
                        to="/mentee/mentee-bookings"
                        onClick={() => onhandleCloseMenu()}
                      >
                        Bookings
                      </Link>
                    </li>

                    {/* <li className={pathnames.includes("booking") && !pathnames.includes("booking-success") ? "active" : ""}>
                          <Link to="/mentee/booking1" onClick={() => onhandleCloseMenu()}>Booking</Link>
                        </li> */}
                    <li
                      className={pathnames.includes("checkout") ? "active" : ""}
                    >
                      <Link
                        to="/mentee/checkout"
                        onClick={() => onhandleCloseMenu()}
                      >
                        Checkout
                      </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("booking-success") ? "active" : ""
                      }
                    >
                      <Link
                        to="/mentee/booking-success"
                        onClick={() => onhandleCloseMenu()}
                      >
                        Booking Success
                      </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("dashboard") ? "active" : ""
                      }
                    >
                      <Link
                        to="/mentee/dashboard"
                        onClick={() => onhandleCloseMenu()}
                      >
                        Mentee Dashboard
                      </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("favourites") ? "active" : ""
                      }
                    >
                      <Link
                        to="/mentee/favourites"
                        onClick={() => onhandleCloseMenu()}
                      >
                        Favourites
                      </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("mentee-chat") ? "active" : ""
                      }
                    >
                      <Link
                        to="/mentee/mentee-chat"
                        onClick={() => onhandleCloseMenu()}
                      >
                        Chat
                      </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("profile") &&
                        !pathnames.includes("mentor-profile")
                          ? "active"
                          : ""
                      }
                    >
                      <Link
                        to="/mentee/profile"
                        onClick={() => onhandleCloseMenu()}
                      >
                        Profile Settings
                      </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("change-password") ? "active" : ""
                      }
                    >
                      <Link
                        to="/mentee/change-password"
                        onClick={() => onhandleCloseMenu()}
                      >
                        Change Password
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>

              <li
                className={`has-submenu ${
                  url.includes("/pages") ? "active" : ""
                }`}
              >
                <Link
                  to="#"
                  className={isSideMenu == "pages" ? "subdrop" : ""}
                  onMouseEnter={() =>
                    toggleSidebar(isSideMenu == "pages" ? "submenu" : "pages")
                  }
                >
                  Pages <i className="fas fa-chevron-down" />
                </Link>
                {isSideMenu == "pages" ? (
                  <ul
                    className={`${
                      isSideMenu == "pages" ? "submenu d-block" : "submenu"
                    }`}
                  >
                    <li
                      className={`${
                        pathnames.includes("/voice-call") ? "active" : ""
                      }`}
                    >
                      <Link
                        to="/pages/voice-call"
                        onClick={() => onhandleCloseMenu()}
                      >
                        Voice Call
                      </Link>
                    </li>
                    <li
                      className={`${
                        pathnames.includes("/video-call") ? "active" : ""
                      }`}
                    >
                      <Link
                        to="/pages/video-call"
                        onClick={() => onhandleCloseMenu()}
                      >
                        Video Call
                      </Link>
                    </li>
                    <li
                      className={`${
                        pathnames.includes("/search-mentor") ? "active" : ""
                      }`}
                    >
                      <Link
                        to="/mentee/search-mentor"
                        onClick={() => onhandleCloseMenu()}
                      >
                        Search Mentors
                      </Link>
                    </li>
                    <li
                      className={`${
                        pathnames.includes("/component") ? "active" : ""
                      }`}
                    >
                      <Link
                        to="/pages/component"
                        onClick={() => onhandleCloseMenu()}
                      >
                        Components
                      </Link>
                    </li>
                    <li
                      className={`has-submenu ${
                        pathnames.includes("/invoice-view") ? "active" : ""
                      }`}
                    >
                      <Link
                        to="#"
                        className={isSideMenuone == "invoices" ? "subdrop" : ""}
                        onMouseEnter={() =>
                          toggleSidebarone(
                            isSideMenuone == "invoices" ? "" : "invoices"
                          )
                        }
                      >
                        Invoices{" "}
                      </Link>
                      {isSideMenuone == "invoices" ? (
                        <ul
                          className={
                            isSideMenuone == "invoices"
                              ? "submenu d-block"
                              : "submenu"
                          }
                        >
                          <li
                            className={
                              pathnames.includes("invoice") ? "active" : ""
                            }
                          >
                            <Link
                              to="/pages/invoice"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Invoices
                            </Link>
                          </li>
                          <li
                            className={
                              pathnames.includes("-view") ? "active" : ""
                            }
                          >
                            <Link
                              to="/pages/invoice-view"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Invoice View
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                    <li
                      className={`${
                        pathnames.includes("/blank-page") ? "active" : ""
                      }`}
                    >
                      <Link
                        to="/pages/blank-page"
                        onClick={() => onhandleCloseMenu()}
                      >
                        Starter Page
                      </Link>
                    </li>
                    <li
                      className={`${
                        pathnames.includes("/login") ? "active" : ""
                      }`}
                    >
                      <Link to="/login" onClick={() => onhandleCloseMenu()}>
                        Login
                      </Link>
                    </li>
                    <li
                      className={`${
                        pathnames.includes("/register") ? "active" : ""
                      }`}
                    >
                      <Link to="/register" onClick={() => onhandleCloseMenu()}>
                        Register
                      </Link>
                    </li>
                    <li
                      className={`${
                        pathnames.includes("/forgot-password") ? "active" : ""
                      }`}
                    >
                      <Link
                        to="/forgot-password"
                        onClick={() => onhandleCloseMenu()}
                      >
                        Forgot Password
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>

              <li
                className={`has-submenu ${
                  url.includes("/blog") ? "active" : ""
                }`}
              >
                <Link
                  to="#"
                  className={isSideMenu == "blog" ? "subdrop" : ""}
                  onMouseEnter={() =>
                    toggleSidebar(isSideMenu == "blog" ? "submenu" : "blog")
                  }
                >
                  Blog <i className="fas fa-chevron-down" />
                </Link>
                {isSideMenu == "blog" ? (
                  <ul
                    className={`${
                      isSideMenu == "blog" ? "submenu d-block" : "submenu"
                    }`}
                  >
                    <li
                      className={
                        pathnames.includes("blog-list") ? "active" : ""
                      }
                    >
                      <Link
                        to="/blog/blog-list"
                        onClick={() => onhandleCloseMenu()}
                      >
                        Blog List
                      </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("blog-grid") ? "active" : ""
                      }
                    >
                      <Link
                        to="/blog/blog-grid"
                        onClick={() => onhandleCloseMenu()}
                      >
                        Blog Grid
                      </Link>
                    </li>
                    <li
                      className={
                        pathnames.includes("blog-details") ? "active" : ""
                      }
                    >
                      <Link
                        to="/blog/blog-details"
                        onClick={() => onhandleCloseMenu()}
                      >
                        Blog Details
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
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
              <Link className="nav-link header-login" to="/login">
                Log In
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link header-one-register" to="/register">
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HomeOneHeader;

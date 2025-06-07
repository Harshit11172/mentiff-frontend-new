// import React from 'react'
// import ImageWithBasePath from '../../../../core/img/ImageWithBasePath'
// import { Link } from "react-router-dom";

// const HomeFiveHeader= () => {
//   const onHandleMobileMenu = () => {
//     var root = document.getElementsByTagName("html")[0];
//     root.classList.add("menu-opened");
//   };
//   const onhandleCloseMenu = () => {
//     var root = document.getElementsByTagName("html")[0];
//     root.classList.remove("menu-opened");
//   };
//   return (
//     <div>
//         <>
//   {/* Header */}
//   <header className="header header-five">
//     <div className="header-fixed">
//       <nav className="navbar navbar-expand-lg header-nav">
//         <div className="container">
//           <div className="navbar-header">
//             <Link id="mobile_btn" to="#" onClick={() => onHandleMobileMenu()}>
//               <span className="bar-icon">
//                 <span />
//                 <span />
//                 <span />
//               </span>
//             </Link>
//             <Link to="/index" className="navbar-brand logo">
//               <ImageWithBasePath
//                 src="assets/img/logo-5.png"
//                 className="img-fluid"
//                 alt="Logo"
//               />
//             </Link>
//           </div>
//           <div className="main-menu-wrapper">
//             <div className="menu-header">
//               <Link to="/index" className="menu-logo">
//                 <ImageWithBasePath
//                   src="assets/img/logo.png"
//                   className="img-fluid"
//                   alt="Logo"
//                 />
//               </Link>
//               <Link
//                 id="menu_close"
//                 className="menu-close"
//                 to="#"
//                 onClick={() => onhandleCloseMenu()}
//               >
//                 <i className="fas fa-times" />
//               </Link>
//             </div>
//             <ul className="main-nav">
//               <li className="active megamenu has-submenu">
//                 <Link to="/index">
//                   Home <i className="fas fa-chevron-down" />
//                 </Link>
//                 <ul className="submenu mega-submenu">
//                   <li>
//                     <div className="megamenu-wrapper">
//                       <div className="row">
//                         <div className="col-lg-3">
//                           <div className="single-demo">
//                             <div className="demo-img">
//                               <Link to="/index" className="inner-demo-img">
//                                 <ImageWithBasePath
//                                   src="assets/img/home-1.jpg"
//                                   className="img-fluid "
//                                   alt="img"
//                                 />
//                               </Link>
//                             </div>
//                             <div className="demo-info">
//                               <Link to="/index" className="inner-demo-img">
//                                 Home - 1
//                               </Link>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-3">
//                           <div className="single-demo ">
//                             <div className="demo-img">
//                               <Link to="/index-2" className="inner-demo-img">
//                                 <ImageWithBasePath
//                                   src="assets/img/home-2.jpg"
//                                   className="img-fluid"
//                                   alt="img"
//                                 />
//                               </Link>
//                             </div>
//                             <div className="demo-info">
//                               <Link to="/index-2" className="inner-demo-img">
//                                 Home - 2
//                               </Link>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-3">
//                           <div className="single-demo">
//                             <div className="demo-img">
//                               <Link to="/index-3" className="inner-demo-img">
//                                 <ImageWithBasePath
//                                   src="assets/img/home-3.jpg"
//                                   className="img-fluid"
//                                   alt="img"
//                                 />
//                               </Link>
//                             </div>
//                             <div className="demo-info">
//                               <Link to="/index-3" className="inner-demo-img">
//                                 Home - 3
//                               </Link>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-3">
//                           <div className="single-demo">
//                             <div className="demo-img">
//                               <Link to="/index-4" className="inner-demo-img">
//                                 <ImageWithBasePath
//                                   src="assets/img/home-4.jpg"
//                                   className="img-fluid"
//                                   alt="img"
//                                 />
//                               </Link>
//                             </div>
//                             <div className="demo-info">
//                               <Link to="/index-4" className="inner-demo-img">
//                                 Home - 4
//                               </Link>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-3">
//                           <div className="single-demo active">
//                             <div className="demo-img">
//                               <Link to="/index-5" className="inner-demo-img">
//                                 <ImageWithBasePath
//                                   src="assets/img/home-6.jpg"
//                                   className="img-fluid"
//                                   alt="img"
//                                 />
//                               </Link>
//                             </div>
//                             <div className="demo-info">
//                               <Link to="/index-5" className="inner-demo-img">
//                                 Home - 5
//                               </Link>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-3">
//                           <div className="single-demo">
//                             <div className="demo-img">
//                               <Link to="/index-6" className="inner-demo-img">
//                                 <ImageWithBasePath
//                                   src="assets/img/home-8.jpg"
//                                   className="img-fluid"
//                                   alt="img"
//                                 />
//                               </Link>
//                             </div>
//                             <div className="demo-info">
//                               <Link to="/index-6" className="inner-demo-img">
//                                 Home - 6
//                               </Link>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-3">
//                           <div className="single-demo">
//                             <div className="demo-img">
//                               <Link to="/index-7" className="inner-demo-img">
//                                 <ImageWithBasePath
//                                   src="assets/img/home-7.jpg"
//                                   className="img-fluid"
//                                   alt="img"
//                                 />
//                               </Link>
//                             </div>
//                             <div className="demo-info">
//                               <Link to="/index-7" className="inner-demo-img">
//                                 Home - 7
//                               </Link>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-3">
//                           <div className="single-demo">
//                             <div className="demo-img">
//                               <Link to="/index-8" className="inner-demo-img">
//                                 <ImageWithBasePath
//                                   src="assets/img/home-5.jpg"
//                                   className="img-fluid"
//                                   alt="img"
//                                 />
//                               </Link>
//                             </div>
//                             <div className="demo-info">
//                               <Link to="/index-8" className="inner-demo-img">
//                                 Home - 8
//                               </Link>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                 </ul>
//               </li>
//               <li className="has-submenu">
//                 <Link to="#">
//                   Mentor <i className="fas fa-chevron-down" />
//                 </Link>
//                 <ul className="submenu">
//                   <li>
//                     <Link to="/mentor/mentor-dashboard">Mentor Dashboard</Link>
//                   </li>
//                   <li>
//                     <Link to="/mentor/bookings">Bookings</Link>
//                   </li>
//                   <li>
//                     <Link to="/mentor/schedule-timing">Schedule Timing</Link>
//                   </li>
//                   <li>
//                     <Link to="/mentor/mentee-list">Mentee List</Link>
//                   </li>
//                   <li>
//                     <Link to="/mentor/mentee-profile">Mentee Profile</Link>
//                   </li>
//                   <li className="has-submenu">
//                     <Link to="/mentor-blog">Blog</Link>
//                     <ul className="submenu">
//                       <li>
//                         <Link to="/mentor-blog">Blog</Link>
//                       </li>
//                       <li>
//                         <Link to="/blog/blog-details">Blog View</Link>
//                       </li>
//                       <li>
//                         <Link to="/blog/add-blog">Add Blog</Link>
//                       </li>
//                       <li>
//                         <Link to="/blog/edit-blog">Edit Blog</Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li>
//                     <Link to="/mentor/chat-mentor">Chat</Link>
//                   </li>
//                   <li>
//                     <Link to="/mentor/invoice">Invoices</Link>
//                   </li>
//                   <li>
//                     <Link to="/mentor/profile-setting">Profile Settings</Link>
//                   </li>
//                   <li>
//                     <Link to="/mentor/review">Reviews</Link>
//                   </li>
//                   <li>
//                     <Link to="/mentor/mentor-register">Mentor Register</Link>
//                   </li>
//                 </ul>
//               </li>
//               <li className="has-submenu">
//                 <Link to="#">
//                   Mentee <i className="fas fa-chevron-down" />
//                 </Link>
//                 <ul className="submenu">
//                   <li className="has-submenu">
//                     <Link to="#">Mentors</Link>
//                     <ul className="submenu">
//                       <li>
//                         <Link to="/mentee/map-grid">Map Grid</Link>
//                       </li>
//                       <li>
//                         <Link to="/mentee/map-list">Map List</Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li>
//                     <Link to="/mentee/search-mentor">Search Mentor</Link>
//                   </li>
//                   <li>
//                     <Link to="/mentee/mentor-profile">Mentor Profile</Link>
//                   </li>
//                   <li>
//                     <Link to="/mentee/mentee-bookings">Bookings</Link>
//                   </li>
//                   <li>
//                     <Link to="/mentee/checkout">Checkout</Link>
//                   </li>
//                   <li>
//                     <Link to="/mentee/booking-success">Booking Success</Link>
//                   </li>
//                   <li>
//                     <Link to="/mentee/dashboard">Mentee Dashboard</Link>
//                   </li>
//                   <li>
//                     <Link to="/mentee/favourites">Favourites</Link>
//                   </li>
//                   <li>
//                     <Link to="/mentee/mentee-chat">Chat</Link>
//                   </li>
//                   <li>
//                     <Link to="/mentee/profile">Profile Settings</Link>
//                   </li>
//                   <li>
//                     <Link to="/mentee/change-password">Change Password</Link>
//                   </li>
//                 </ul>
//               </li>
//               <li className="has-submenu">
//                 <Link to="#">
//                   Pages <i className="fas fa-chevron-down" />
//                 </Link>
//                 <ul className="submenu">
//                   <li>
//                     <Link to="/pages/voice-call">Voice Call</Link>
//                   </li>
//                   <li>
//                     <Link to="/pages/video-call">Video Call</Link>
//                   </li>
//                   <li>
//                     <Link to="/mentee/search-mentor">Search Mentors</Link>
//                   </li>
//                   <li>
//                     <Link to="/pages/component">Components</Link>
//                   </li>
//                   <li className="has-submenu">
//                     <Link to="/mentor/invoice">Invoices</Link>
//                     <ul className="submenu">
//                       <li>
//                         <Link to="/mentor/invoice">Invoices</Link>
//                       </li>
//                       <li>
//                         <Link to="/pages/invoice-view">Invoice View</Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li>
//                     <Link to="/pages/blank-page">Starter Page</Link>
//                   </li>
//                   <li>
//                     <Link to="/login">Login</Link>
//                   </li>
//                   <li>
//                     <Link to="/register">Register</Link>
//                   </li>
//                   <li>
//                     <Link to="/forgot-password">Forgot Password</Link>
//                   </li>
//                 </ul>
//               </li>
//               <li className="has-submenu">
//                 <Link to="#">
//                   Blog <i className="fas fa-chevron-down" />
//                 </Link>
//                 <ul className="submenu">
//                   <li>
//                     <Link to="/blog/blog-list">Blog List</Link>
//                   </li>
//                   <li>
//                     <Link to="/blog/blog-grid">Blog Grid</Link>
//                   </li>
//                   <li>
//                     <Link to="/blog/blog-details">Blog Details</Link>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <Link to="/admin" target="_blank">
//                   Admin
//                 </Link>
//               </li>
//               <li className="login-link">
//                 <Link to="/login">Login / Signup</Link>
//               </li>
//             </ul>
//           </div>
//           <ul className="nav header-navbar-rht">
//             <li className="nav-item">
//               <Link className="nav-link" to="/register">
//                 Register
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link header-login" to="/login">
//                 Log In
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   </header>
//   {/* /Header */}
// </>

//     </div>
//   )
// }

// export default HomeFiveHeader


import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
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

  const [user, setUser] = useState(null);

  const history = useHistory();

  const config = "/";

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

  const profilePicStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px',
  };

  const dropdownStyle = {
    position: 'relative',
    display: 'inline-block',
  };

  const dropbtnStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  };

  const dropdownContentStyle = {
    display: 'none',
    position: 'absolute',
    backgroundColor: 'white',
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1,
  };

  const dropdownHoverStyle = {
    display: 'block',
  };

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
    // Retrieve token and user data from local storage
    const token = localStorage.getItem('authToken');
    console.log("Token in header?", token);

    const userDataString = localStorage.getItem('userData');
    console.log("User data in header?", userDataString);

    let userData;
    try {
      if (userDataString) {
        userData = JSON.parse(userDataString);
        console.log("Parsed user data in header?", userData);
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
    }

    if (token && userData) {
      console.log("Token and user found in header");
      setUser(userData); // Set user data if token exists
    }

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

  const logout = () => {

    // Clear local storage
    localStorage.clear();
    // Clear local storage on logout
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    setUser(null); // Clear user state

    // Redirect to home page
    history.push('/index-5');
  };


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
                className={`has-submenu   ${pathnames.includes("index")
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
                    className={`${isSideMenu == "home" ? "submenu mega-submenu d-block" : "mega-submenu"
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
                className={`has-submenu ${url.includes("/mentor") ? "active" : ""
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
                    className={`${isSideMenu == "doctors" ? "submenu d-block" : "submenu"
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
                      className={`has-submenu ${pathnames.includes("mentor-blog") ? "active" : ""
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
                className={`has-submenu ${url.includes("/mentee") ? "active" : ""
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
                    className={`${isSideMenu == "patients" ? "submenu d-block" : "submenu"
                      }`}
                  >
                    <li
                      className={`has-submenu ${pathnames.includes("doctor") &&
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
                className={`has-submenu ${url.includes("/pages") ? "active" : ""
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
                    className={`${isSideMenu == "pages" ? "submenu d-block" : "submenu"
                      }`}
                  >
                    <li
                      className={`${pathnames.includes("/voice-call") ? "active" : ""
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
                      className={`${pathnames.includes("/video-call") ? "active" : ""
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
                      className={`${pathnames.includes("/search-mentor") ? "active" : ""
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
                      className={`${pathnames.includes("/component") ? "active" : ""
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
                      className={`has-submenu ${pathnames.includes("/invoice-view") ? "active" : ""
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
                      className={`${pathnames.includes("/blank-page") ? "active" : ""
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
                      className={`${pathnames.includes("/login") ? "active" : ""
                        }`}
                    >
                      <Link to="/login" onClick={() => onhandleCloseMenu()}>
                        Login
                      </Link>
                    </li>
                    <li
                      className={`${pathnames.includes("/register") ? "active" : ""
                        }`}
                    >
                      <Link to="/register" onClick={() => onhandleCloseMenu()}>
                        Register
                      </Link>
                    </li>
                    <li
                      className={`${pathnames.includes("/forgot-password") ? "active" : ""
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
                className={`has-submenu ${url.includes("/blog") ? "active" : ""
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
                    className={`${isSideMenu == "blog" ? "submenu d-block" : "submenu"
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
            {user ? (


              // <>
              //   <li className="nav-item" style={dropdownStyle}>
              //     <img src={user.profilePic} alt="Profile" style={profilePicStyle} />
              //     <div className="dropdown">
              //       <button style={dropbtnStyle}>Options</button>
              //       <div
              //         style={dropdownContentStyle}
              //         onMouseEnter={(e) => (e.currentTarget.style.display = 'block')}
              //         onMouseLeave={(e) => (e.currentTarget.style.display = 'none')}
              //       >
              //         <Link to="/profile">Profile</Link>
              //         <Link to="/settings">Settings</Link>
              //         <button onClick={logout}>Logout</button>
              //       </div>
              //     </div>
              //   </li>
              // </>
              <>


                <li className="nav-item dropdown has-arrow logged-item">
                  <Link
                    to="#"
                    className="dropdown-toggle nav-link"
                    data-bs-toggle="dropdown"
                  >
                    <span className="user-img">
                      <img
                        className="rounded-circle"
                        src={user.profile_picture}
                        width="31"
                        alt={user.username}
                      />
                    </span>





                  </Link>
                  <div className="dropdown-menu dropdown-menu-end">
                    <div className="user-header">
                      <div className="avatar avatar-sm">
                        <img
                          src={user.profile_picture}
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="user-text">
                        <h6>{user.first_name} {user.last_name}</h6>
                        <p className="text-muted mb-0">{user.user_type}</p>
                      </div>
                    </div>


                    {user.user_type === "mentor" ? (
                      <Link className="dropdown-item" to="/mentor/mentor-dashboard">
                        Dashboard
                      </Link>

                    ) : user.user_type === "mentee" ? (
                      <Link className="dropdown-item" to="/mentee/dashboard">
                        Dashboard
                      </Link>
                    ) : null /* Optional: handle other user types or show nothing */}

                    {user.user_type === "mentor" ? (
                      <Link className="dropdown-item" to="/mentor/profile-setting">
                        Profile Settings
                      </Link>

                    ) : user.user_type === "mentee" ? (
                      <Link className="dropdown-item" to="/mentee/profile">
                        Profile Settings
                      </Link>
                    ) : null /* Optional: handle other user types or show nothing */}


                    {/* <Link className="dropdown-item" to="/mentee/dashboard">
                      Dashboard
                    </Link>

                    <Link className="dropdown-item" to="/mentee/profile">
                      Profile Settings
                    </Link> */}
                    
                    {/* <Link className="dropdown-item" to="/login">
                          Logout
                        </Link> */}
                    <button className="dropdown-item" onClick={logout}>Logout</button>
                  </div>
                </li>
              </>


            ) : (
              <li className="nav-item">
                <Link className="nav-link header-login" to="/login">
                  Log In
                </Link>
              </li>
            )}

            {/* Uncomment if you have a register link */}
            {/* <li className="nav-item">
        <Link className="nav-link header-one-register" to="/register">
          Register
        </Link>
      </li> */}
          </ul>

        </nav>
      </div>
    </header>
  );
};

export default HomeOneHeader;

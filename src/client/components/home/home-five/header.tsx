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
//                   src="assets/img/logo_mentiff.png"
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

import './homefiveheader.css';

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
    history.push('/');
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
        <Link to="/" className="navbar-brand logo">
          <ImageWithBasePath src="assets/img/logo_mentiff.png" className="img-fluid" alt="Logo" />
        </Link>
      </div>

      {/* DESKTOP MENU */}
      <ul className="nav header-navbar-rht d-none d-lg-flex">
        {user ? (
          <li className="nav-item dropdown has-arrow logged-item">
            <Link to="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
              <span className="user-img">
                <img className="rounded-circle" src={user.profile_picture} width="31" alt={user.username} />
              </span>
            </Link>
            <div className="dropdown-menu dropdown-menu-end">
              <div className="user-header">
                <div className="avatar avatar-sm">
                  <img src={user.profile_picture} alt="User" className="avatar-img rounded-circle" />
                </div>
                <div className="user-text">
                  <h6>{user.first_name} {user.last_name}</h6>
                  <p className="text-muted mb-0">{user.user_type}</p>
                </div>
              </div>
              <Link className="dropdown-item" to={user.user_type === "mentor" ? "/mentor/mentor-dashboard" : "/mentee/dashboard"}>Dashboard</Link>
              <Link className="dropdown-item" to={user.user_type === "mentor" ? "/mentor/profile-setting" : "/mentee/profile"}>Profile Settings</Link>
              <button className="dropdown-item" onClick={logout}>Logout</button>
            </div>
          </li>
        ) : (
          <li className="nav-item">
            <div className="d-flex gap-2">
              <Link to="/login" className="btn btn-success">Register</Link>
              <Link to="/login" className="btn btn-primary">Login</Link>
            </div>
          </li>
        )}
      </ul>

      {/* MOBILE MENU */}
      <div className="main-menu-wrapper d-lg-none">
        <div className="menu-header d-flex justify-content-between align-items-center px-3 py-2 border-bottom">
          <Link to="/" className="menu-logo">
            <ImageWithBasePath src="assets/img/logo_mentiff.png" className="img-fluid" alt="Logo" />
          </Link>
          <Link id="menu_close" to="#" onClick={onhandleCloseMenu}>
            <i className="fas fa-times fs-4" />
          </Link>
        </div>

        <ul className="main-nav px-3 py-2">
          {user ? (
            <>
              <li className="nav-item mb-2">
                <strong>{user.first_name} {user.last_name}</strong><br />
                <small className="text-muted">{user.user_type}</small>
              </li>
              <li><Link to={user.user_type === "mentor" ? "/mentor/mentor-dashboard" : "/mentee/dashboard"}>Dashboard</Link></li>
              <li><Link to={user.user_type === "mentor" ? "/mentor/profile-setting" : "/mentee/profile"}>Profile Settings</Link></li>
              <li><button onClick={logout} className="btn btn-sm btn-danger mt-2">Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/login">Register</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  </div>
</header>

  );

  

};

export default HomeOneHeader;

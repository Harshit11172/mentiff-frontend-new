

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { doctor_thumb_02 } from "../../imagepath";

const DoctorSidebar = () => {
  const pathnames = window.location.pathname;
  // // const [userData, setUserData] = useState(null);
  // const userData = localStorage.getItem("userData");

  // console.log(userData)
  // localStorage.setItem('groupId', `${userData.groups.group_id}`);
  // console.log("groupId set in localStorage")
  // // console.log(`${group.id}`)

  // Retrieve userData from localStorage and parse it
  const userDataString = localStorage.getItem("userData");

  // Ensure the userData exists and is not null or empty
  let userData = null;
  if (userDataString) {
    try {
      userData = JSON.parse(userDataString);  // Parse the JSON string to an object
      console.log("Parsed userData: ", userData);  // Log the whole object to understand its structure
    } catch (error) {
      console.error("Error parsing userData from localStorage:", error);
    }
  } else {
    console.log("No userData found in localStorage.");
  }

  // Check the structure of the parsed data and retrieve groupId
  if (userData && userData.groups && userData.groups.length > 0) {
    const groupId = userData.groups[0].group_id;  // Access the first group in the array

    if (groupId !== undefined) {
      // If group_id exists, store it in localStorage
      localStorage.setItem("groupId", `${groupId}`);
      console.log("groupId set in localStorage:", groupId);
    } else {
      // Handle case when group_id is missing
      console.log("group_id is missing from the first group.");
    }
  } else {
    console.log("No groups found in userData.");
  }



  const isMentor = userData?.user_type == "mentor";
  const isMentee = userData?.user_type == "mentee";

  return (
    <>
      {/* Profile Sidebar */}
      <div className="profile-sidebar">
        <div className="widget-profile pro-widget-content">
          <div className="profile-info-widget">
            <Link to={`/mentee/mentor-profile/${userData.mentor_id}`} className="booking-doc-img">
              <img src={userData.profile_picture} alt="User Image" />
            </Link>
            <div className="profile-det-info">
              <h3>
                {userData?.first_name && userData?.last_name
                  ? `${userData.first_name} ${userData.last_name}`
                  : userData?.first_name || userData?.last_name || ""}
              </h3>
              <div className="patient-details">
                <h5 className="mb-0">
                  {userData?.user_type || ""}
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-widget">
          <nav className="dashboard-menu">
            <ul>

              <li
                className={
                  pathnames.includes("/mentor/mentor-dashboard") ? "active" : ""
                }
              >
                <Link to="/mentor/mentor-dashboard">
                  <i className="fas fa-columns" />
                  <span>Dashboard</span>
                </Link>
              </li>

              <li
                className={
                  pathnames.includes("/mentor/chat-mentor") ? "active" : ""
                }
              >
                <Link to="/mentor/chat-mentor">
                  <i className="fas fa-comments" />
                  <span>Chat Group </span>
                  {/* <small className="unread-msg">23</small> */}
                  {/* <span style={{ fontSize: '12px', wordWrap: 'break-word', whiteSpace: 'normal' }}>
                    {userData.groups[0].group_name}
                  </span> */}
                  <span style={{ fontSize: '12px', wordWrap: 'break-word', whiteSpace: 'normal' }}>
                    {userData?.groups?.[0]?.group_name || "No Group"}
                  </span>

                </Link>


              </li>
              <li
                className={pathnames.includes("mentee/mentor-profile/") ? "active" : ""}
              >
                <Link to={`/mentee/mentor-profile/${userData.mentor_id}`}>
                  <i className="fas fa-star" />
                  <span>Profile view</span>
                </Link>
              </li>


              {/* <li
                className={
                  pathnames.includes("/mentor/bookings") ? "active" : ""
                }
              >
                <Link to="/mentor/bookings">
                  <i className="fas fa-calendar-check" />
                  <span>Appointments</span>
                
                </Link>
              </li> */}

              {/* <li
                className={
                  pathnames.includes("/mentor/mentee-list") ? "active" : ""
                }
              >
                <Link to="/mentor/mentee-list">
                  <i className="fas fa-user-injured" />
                  <span>My Mentees</span>
                </Link>
              </li> */}


              <li
                className={
                  pathnames.includes("/mentor/schedule-timing") ? "active" : ""
                }
              >
                <Link to="/mentor/schedule-timing">
                  <i className="fas fa-hourglass-start" />
                  <span>Schedule Timings</span>
                </Link>
              </li>


              {/* <li
                className={
                  pathnames.includes("/mentor/available-timing") ? "active" : ""
                }
              >
                <Link to="/mentor/available-timing">
                  <i className="fas fa-clock" />
                  <span>Available Timings</span>
                </Link>
              </li> */}

              {/* <li
                className={pathnames.includes("/pages/invoice") ? "active" : ""}
              >
                <Link to="/pages/invoice">
                  <i className="fas fa-file-invoice" />
                  <span>Invoices</span>
                </Link>
              </li> */}

              <li
                className={
                  pathnames.includes("/mentor/account") ? "active" : ""
                }
              >
                <Link to="/mentor/account">
                  <i className="fas fa-file-invoice-dollar" />
                  <span>Accounts</span>
                </Link>
              </li>

              {/* <li
                className={pathnames.includes("/mentor/review") ? "active" : ""}
              >
                <Link to="/mentor/review">
                  <i className="fas fa-star" />
                  <span>Reviews</span>
                </Link>
              </li> */}






              {/* <li
                className={
                  pathnames.includes("/mentor/chat-mentor") ? "active" : ""
                }
              >
                <Link to="/mentor/chat-mentor">
                  <i className="fas fa-comments" />
                  <span>Message</span>
                  <small className="unread-msg">23</small>
                </Link>
              </li> */}
              
              
                      
              <li
                className={
                  pathnames.includes("/mentor/profile-setting") ? "active" : ""
                }
              >
                <Link to="/mentor/profile-setting">
                  <i className="fas fa-user-cog" />
                  <span>Profile Settings</span>
                </Link>
              </li> 
              

              {/* <li
                className={
                  pathnames.includes("/mentor/doctor-change-password")
                    ? "active"
                    : ""
                }
              >
                <Link to="/mentor/doctor-change-password">
                  <i className="fas fa-lock" />
                  <span>Change Password</span>
                </Link>
              </li> */}


              {/* <li
                className={
                  pathnames.includes("/mentor/social-media") ? "active" : ""
                }
              >
                <Link to="/mentor/social-media">
                  <i className="fas fa-share-alt" />
                  <span>Social Media</span>
                </Link>
              </li> */}

              {/* <li className={pathnames.includes("/index-2") ? "active" : ""}>
                <Link to="/index-2">
                  <i className="fas fa-sign-out-alt" />
                  <span>Logout</span>
                </Link>
              </li> */}

            </ul>
          </nav>
        </div>
      </div>



    </>
  );
};

export default DoctorSidebar;































// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { doctor_thumb_02 } from "../../imagepath";

// const DoctorSidebar = () => {
//   const pathnames = window.location.pathname;
//   const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

//   // Retrieve userData from localStorage and parse it
//   const userDataString = localStorage.getItem("userData");

//   // Ensure the userData exists and is not null or empty
//   let userData = null;
//   if (userDataString) {
//     try {
//       userData = JSON.parse(userDataString);
//       console.log("Parsed userData: ", userData);
//     } catch (error) {
//       console.error("Error parsing userData from localStorage:", error);
//     }
//   } else {
//     console.log("No userData found in localStorage.");
//   }

//   // Check the structure of the parsed data and retrieve groupId
//   if (userData && userData.groups && userData.groups.length > 0) {
//     const groupId = userData.groups[0].group_id;

//     if (groupId !== undefined) {
//       localStorage.setItem("groupId", `${groupId}`);
//       console.log("groupId set in localStorage:", groupId);
//     } else {
//       console.log("group_id is missing from the first group.");
//     }
//   } else {
//     console.log("No groups found in userData.");
//   }

//   const isMentor = userData?.user_type == "mentor";
//   const isMentee = userData?.user_type == "mentee";

//   // Navigation items matching your existing structure
//   const mainNavItems = [
//     {
//       path: "/mentor/mentor-dashboard",
//       icon: "fas fa-columns",
//       label: "Dashboard",
//       shortLabel: "Dashboard"
//     },
//     {
//       path: "/mentor/chat-mentor",
//       icon: "fas fa-comments",
//       label: "Chat Group",
//       shortLabel: "Chat",
//       hasUnread: true,
//       subtitle: userData?.groups?.[0]?.group_name || "No Group"
//     },
//     {
//       path: `/mentee/mentor-profile/${userData?.mentor_id}`,
//       icon: "fas fa-star",
//       label: "Profile view",
//       shortLabel: "Profile"
//     },
//     {
//       path: "/mentor/schedule-timing",
//       icon: "fas fa-hourglass-start",
//       label: "Schedule Timings",
//       shortLabel: "Schedule"
//     }
//   ];

//   const moreNavItems = [
//     {
//       path: "/mentor/account",
//       icon: "fas fa-file-invoice-dollar",
//       label: "Accounts"
//     },
//     {
//       path: "/mentor/profile-setting",
//       icon: "fas fa-user-cog",
//       label: "Profile Settings"
//     }
//   ];

//   return (
//     <>
//       {/* Desktop Sidebar - Keep Original */}
//       <div className="profile-sidebar d-none d-lg-block">
//         <div className="widget-profile pro-widget-content">
//           <div className="profile-info-widget">
//             <Link to={`/mentee/mentor-profile/${userData?.mentor_id}`} className="booking-doc-img">
//               <img src={userData?.profile_picture} alt="User Image" />
//             </Link>
//             <div className="profile-det-info">
//               <h3>
//                 {userData?.first_name && userData?.last_name
//                   ? `${userData.first_name} ${userData.last_name}`
//                   : userData?.first_name || userData?.last_name || ""}
//               </h3>
//               <div className="patient-details">
//                 <h5 className="mb-0">
//                   {userData?.user_type || ""}
//                 </h5>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="dashboard-widget">
//           <nav className="dashboard-menu">
//             <ul>
//               {mainNavItems.map((item, index) => (
//                 <li
//                   key={index}
//                   className={pathnames.includes(item.path) ? "active" : ""}
//                 >
//                   <Link to={item.path}>
//                     <i className={item.icon} />
//                     <span>{item.label}</span>
//                     {item.subtitle && (
//                       <span style={{ fontSize: '12px', wordWrap: 'break-word', whiteSpace: 'normal' }}>
//                         {item.subtitle}
//                       </span>
//                     )}
//                   </Link>
//                 </li>
//               ))}
              
//               {moreNavItems.map((item, index) => (
//                 <li
//                   key={`more-${index}`}
//                   className={pathnames.includes(item.path) ? "active" : ""}
//                 >
//                   <Link to={item.path}>
//                     <i className={item.icon} />
//                     <span>{item.label}</span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </div>

//       {/* Mobile Bottom Navigation - Matching Your Theme */}
//       <div className="mobile-bottom-navigation d-lg-none">
//         {/* Backdrop for more menu */}
//         {isMoreMenuOpen && (
//           <div 
//             className="mobile-nav-backdrop" 
//             onClick={() => setIsMoreMenuOpen(false)}
//           ></div>
//         )}

//         {/* More Menu Dropdown */}
//         {isMoreMenuOpen && (
//           <div className="mobile-more-menu">
//             <div className="more-menu-header">
//               <div className="user-profile-card">
//                 <div className="profile-img">
//                   <img src={userData?.profile_picture} alt="User Image" />
//                 </div>
//                 <div className="profile-info">
//                   <h4>
//                     {userData?.first_name && userData?.last_name
//                       ? `${userData.first_name} ${userData.last_name}`
//                       : userData?.first_name || userData?.last_name || ""}
//                   </h4>
//                   <span className="user-type">{userData?.user_type || ""}</span>
//                 </div>
//               </div>
//             </div>
            
//             <div className="more-menu-items">
//               {moreNavItems.map((item, index) => (
//                 <Link
//                   key={index}
//                   to={item.path}
//                   className={`more-menu-item ${pathnames.includes(item.path) ? 'active' : ''}`}
//                   onClick={() => setIsMoreMenuOpen(false)}
//                 >
//                   <i className={item.icon}></i>
//                   <span>{item.label}</span>
//                   <i className="fas fa-chevron-right"></i>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Bottom Navigation Bar */}
//         <div className="mobile-nav-container">
//           <div className="mobile-nav-content">
//             {mainNavItems.map((item, index) => (
//               <Link
//                 key={index}
//                 to={item.path}
//                 className={`mobile-nav-item ${pathnames.includes(item.path) ? 'active' : ''}`}
//               >
//                 <div className="nav-item-icon">
//                   <i className={item.icon}></i>
//                   {item.hasUnread && <span className="unread-indicator"></span>}
//                 </div>
//                 <span className="nav-item-label">{item.shortLabel}</span>
//               </Link>
//             ))}
            
//             <button
//               className={`mobile-nav-item more-button ${isMoreMenuOpen ? 'active' : ''}`}
//               onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
//             >
//               <div className="nav-item-icon">
//                 <i className={isMoreMenuOpen ? "fas fa-times" : "fas fa-ellipsis-h"}></i>
//               </div>
//               <span className="nav-item-label">More</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         /* Mobile Bottom Navigation Styles - Matching Your Theme */
//         .mobile-bottom-navigation {
//           position: fixed;
//           bottom: 0;
//           left: 0;
//           right: 0;
//           z-index: 9999;
//         }

//         .mobile-nav-backdrop {
//           position: fixed;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: rgba(0, 0, 0, 0.5);
//           z-index: 9998;
//         }

//         .mobile-nav-container {
//           background: #fff;
//           border-top: 1px solid #e6e7e8;
//           box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
//           padding-bottom: env(safe-area-inset-bottom, 0);
//         }

//         .mobile-nav-content {
//           display: flex;
//           align-items: center;
//           justify-content: space-around;
//           padding: 10px 8px 12px;
//           max-width: 100%;
//         }

//         .mobile-nav-item {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           text-decoration: none;
//           color: #6c757d;
//           transition: all 0.3s ease;
//           padding: 8px 4px;
//           border-radius: 8px;
//           min-width: 60px;
//           background: transparent;
//           border: none;
//           cursor: pointer;
//         }

//         .mobile-nav-item:hover,
//         .mobile-nav-item.active {
//           color: #007bff;
//           text-decoration: none;
//           background: rgba(0, 123, 255, 0.08);
//         }

//         .nav-item-icon {
//           position: relative;
//           font-size: 20px;
//           margin-bottom: 4px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           width: 24px;
//           height: 24px;
//         }

//         .nav-item-label {
//           font-size: 11px;
//           font-weight: 500;
//           text-align: center;
//           line-height: 1.2;
//           max-width: 60px;
//           overflow: hidden;
//           text-overflow: ellipsis;
//           white-space: nowrap;
//         }

//         .unread-indicator {
//           position: absolute;
//           top: -2px;
//           right: -2px;
//           width: 8px;
//           height: 8px;
//           background: #dc3545;
//           border-radius: 50%;
//           border: 2px solid #fff;
//         }

//         /* More Menu Styles */
//         .mobile-more-menu {
//           position: fixed;
//           bottom: 80px;
//           left: 16px;
//           right: 16px;
//           background: #fff;
//           border-radius: 10px;
//           box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
//           z-index: 9999;
//           overflow: hidden;
//           border: 1px solid #e6e7e8;
//           animation: slideUpMenu 0.3s ease-out;
//         }

//         .more-menu-header {
//           padding: 20px;
//           background: #f8f9fa;
//           border-bottom: 1px solid #e6e7e8;
//         }

//         .user-profile-card {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//         }

//         .profile-img {
//           width: 50px;
//           height: 50px;
//           border-radius: 50%;
//           overflow: hidden;
//         }

//         .profile-img img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }

//         .profile-info h4 {
//           margin: 0 0 4px 0;
//           font-size: 16px;
//           font-weight: 600;
//           color: #333;
//         }

//         .user-type {
//           font-size: 12px;
//           color: #6c757d;
//           text-transform: capitalize;
//         }

//         .more-menu-items {
//           padding: 8px 0;
//         }

//         .more-menu-item {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           padding: 14px 20px;
//           color: #333;
//           text-decoration: none;
//           transition: all 0.2s ease;
//           font-size: 14px;
//         }

//         .more-menu-item:hover,
//         .more-menu-item.active {
//           background: rgba(0, 123, 255, 0.08);
//           color: #007bff;
//           text-decoration: none;
//         }

//         .more-menu-item i:first-child {
//           width: 18px;
//           text-align: center;
//           font-size: 16px;
//         }

//         .more-menu-item span {
//           flex: 1;
//         }

//         .more-menu-item .fas.fa-chevron-right {
//           width: auto;
//           font-size: 12px;
//           color: #ccc;
//         }

//         /* Responsive Design */
//         @media (max-width: 375px) {
//           .mobile-nav-content {
//             padding: 8px 4px 10px;
//           }
          
//           .nav-item-icon {
//             font-size: 18px;
//           }
          
//           .nav-item-label {
//             font-size: 10px;
//           }
          
//           .mobile-more-menu {
//             left: 12px;
//             right: 12px;
//           }
//         }

//         @media (max-width: 320px) {
//           .mobile-nav-item {
//             min-width: 50px;
//             padding: 6px 2px;
//           }
          
//           .nav-item-label {
//             font-size: 9px;
//           }
          
//           .mobile-more-menu {
//             left: 8px;
//             right: 8px;
//           }
//         }

//         /* Add bottom padding to body when mobile nav is visible */
//         @media (max-width: 991.98px) {
//           body {
//             padding-bottom: 80px !important;
//           }
          
//           .main-wrapper,
//           .content,
//           .page-wrapper {
//             padding-bottom: 80px !important;
//           }
//         }

//         /* Animation for menu */
//         @keyframes slideUpMenu {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         /* Dark mode support matching your theme */
//         @media (prefers-color-scheme: dark) {
//           .mobile-nav-container {
//             background: #2c2c2c;
//             border-top-color: #444;
//           }
          
//           .mobile-nav-item {
//             color: #aaa;
//           }
          
//           .mobile-nav-item:hover,
//           .mobile-nav-item.active {
//             color: #007bff;
//             background: rgba(0, 123, 255, 0.15);
//           }
          
//           .mobile-more-menu {
//             background: #2c2c2c;
//             border-color: #444;
//           }
          
//           .more-menu-header {
//             background: #333;
//             border-bottom-color: #444;
//           }
          
//           .profile-info h4 {
//             color: #fff;
//           }
          
//           .more-menu-item {
//             color: #ccc;
//           }
          
//           .more-menu-item:hover,
//           .more-menu-item.active {
//             background: rgba(191, 200, 210, 0.15);
//             color: #007bff;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default DoctorSidebar;






























































{/* /Profile Sidebar */ }

{/* <div className="new-sidebar">
        <div className="profile-sidebar">
          <div className="user-widget">
            <div className="pro-avatar">JD</div>
            <div className="rating">
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star" />
            </div>
            <div className="user-info-cont">
              <h4 className="usr-name">harshit </h4>
              <p className="mentor-type">English Literature (M.A)</p>
            </div>
          </div>
          <div className="progress-bar-custom">
            <h6>Complete your profiles &gt;</h6>
            <div className="pro-progress">
              <div className="tooltip-toggle" tabIndex={0} />
              <div className="tooltip">80%</div>
            </div>
          </div>
          <div className="custom-sidebar-nav">
            <ul>
              <li
                className={
                  pathnames.includes("/mentor/mentor-dashboard") ? "active" : ""
                }
              >
                <Link to="/mentor/mentor-dashboard">
                  <i className="fas fa-home" />
                  Dashboard
                  <span>
                    <i className="fas fa-chevron-right" />
                  </span>
                </Link>
              </li>
              <li
                className={
                  pathnames.includes("/mentor/bookings") ? "active" : ""
                }
              >
                <Link to="/mentor/bookings">
                <i className="fas fa-clock" />
                  Bookings
                  <span>
                    <i className="fas fa-chevron-right" />
                  </span>
                </Link>
              </li>
              <li
                className={
                  pathnames.includes("/mentor/schedule-timing") ? "active" : ""
                }
              >
                <Link to="/mentor/schedule-timing">
                  <i className="fas fa-hourglass-start" />
                  Schedule Timings
                  <span>
                    <i className="fas fa-chevron-right" />
                  </span>
                </Link>
              </li>
              <li
                className={
                  pathnames.includes("/mentor/chat-mentor") ? "active" : ""
                }
              >
                <Link to="/mentor/chat-mentor">
                  <i className="fas fa-comments" />
                  Message
                  <span>
                    <i className="fas fa-chevron-right" />
                  </span>
                </Link>
              </li>
              <li
                className={pathnames.includes("/pages/invoice") ? "active" : ""}
              >
                <Link to="/pages/invoice">
                  <i className="fas fa-file-invoice" />
                  Invoices
                  <span>
                    <i className="fas fa-chevron-right" />
                  </span>
                </Link>
              </li>
              <li
                className={pathnames.includes("/mentor/review") ? "active" : ""}
              >
                <Link to="/mentor/review">
                  <i className="fas fa-eye" />
                  Reviews
                  <span>
                    <i className="fas fa-chevron-right" />
                  </span>
                </Link>
              </li>
              <li
                className={
                  pathnames.includes("/mentor-blog") ? "active" : ""
                }
              >
                <Link to="/mentor-blog">
                  <i className="fab fa-blogger-b" />
                  Blog
                  <span>
                    <i className="fas fa-chevron-right" />
                  </span>
                </Link>
              </li>

              <li
                className={
                  pathnames.includes("/mentor/profile-setting") ? "active" : ""
                }
              >
                <Link to="/mentor/profile-setting">
                  <i className="fas fa-user-cog" />
                  Profile
                  <span>
                    <i className="fas fa-chevron-right" />
                  </span>
                </Link>
              </li>
              <li className={pathnames.includes("/index-2") ? "active" : ""}>
                <Link to="/logout">
                  <i className="fas fa-sign-out-alt" />
                  Logout
                </Link>
              </li>
            </ul>
            
          </div>
        </div>
      </div> */}
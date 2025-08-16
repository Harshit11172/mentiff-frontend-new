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
            <Link to="#" className="booking-doc-img">
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
              <li
                className={
                  pathnames.includes("/mentor/available-timing") ? "active" : ""
                }
              >
                <Link to="/mentor/available-timing">
                  <i className="fas fa-clock" />
                  <span>Available Timings</span>
                </Link>
              </li>

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
              <li
                className={pathnames.includes("/mentor/review") ? "active" : ""}
              >
                <Link to="/mentor/review">
                  <i className="fas fa-star" />
                  <span>Reviews</span>
                </Link>
              </li>
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


              <li
                className={
                  pathnames.includes("/mentor/social-media") ? "active" : ""
                }
              >
                <Link to="/mentor/social-media">
                  <i className="fas fa-share-alt" />
                  <span>Social Media</span>
                </Link>
              </li>

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


      {/* /Profile Sidebar */}

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

    </>
  );
};

export default DoctorSidebar;

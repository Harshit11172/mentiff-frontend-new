import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IMG01 from "../../../../assets/images/patient.jpg";

export const DashboardSidebar = () => {
  const pathnames = window.location.pathname;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from localStorage
    const storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
      // Parse user data and set it to the state
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  if (!userData) {
    return <div>Loading...</div>; // Show loading if user data is not yet available
  }

  // Get user role (mentor or mentee)
  const isMentor = userData?.user_type == "mentor";
  const isMentee = userData?.user_type == "mentee";

  return (
    <div className="new-sidebar">
      <div className="profile-sidebar">
        <div className="user-widget">

          <div className="profile-sidebar">
            {/* Display user's initials or a default avatar */}
            {/* {userData?.name ? userData.name.split(" ").map(word => word[0]).join("") : "JD"} */}

            {/* Check if profile picture exists */}
            {userData?.profile_picture ? (
              <img
                src={userData.profile_picture} // The profile picture URL
                alt={`${userData.first_name} ${userData.last_name}`}
                className="profile-img"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }} // Adjust size as needed
              />
            ) : (
              // If no profile picture, display initials
              userData?.first_name && userData?.last_name
                ? userData.first_name[0] + userData.last_name[0]
                : ""
            )}

          </div>


          {/* <div className="rating">
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star filled" />
            <i className="fas fa-star" />
          </div> */}

          <div className="user-info-cont">
            <h4 className="usr-name">
              {userData?.first_name && userData?.last_name
                ? `${userData.first_name} ${userData.last_name}`
                : userData?.first_name || userData?.last_name || ""}
            </h4>
            <p className="mentor-type">{userData?.user_type || ""}</p>
          </div>
        </div>

        {/* <div className="progress-bar-custom">
          <h6>Complete your profiles &gt;</h6>
          <div className="pro-progress">
            <div className="tooltip-toggle" tabIndex={0} />
            <div className="tooltip">{userData?.profileCompletion || "0%"}</div>
          </div>
        </div> */}

        <div className="custom-sidebar-nav">
          <ul>

            {/* Show Dashboard for both Mentor and Mentee */}
            <li className={pathnames.includes("/dashboard") ? "active" : ""}>
              <Link to="/mentee/dashboard">
                <i className="fas fa-home" />
                Dashboard
                <span>
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </li>

            {/* Show Bookings for Mentee only */}
            {isMentee && (
              <li className={pathnames.includes("/medicalrecords") ? "active" : ""}>
                <Link to="/mentee/medicalrecords">
                  <i className="fas fa-clock" />
                  Bookings
                  <span>
                    <i className="fas fa-chevron-right" />
                  </span>
                </Link>
              </li>
            )}
            
            {isMentor && (
              <li className={pathnames.includes("/medicalrecords") ? "active" : ""}>
                <Link to="/mentee/mentee-bookings">
                <i className="fas fa-comments" />
                  Community Chat
                  <span>
                    <i className="fas fa-chevron-right" />
                  </span>
                </Link>
              </li>
            )}


            {/* Show Message for both Mentor and Mentee */}
            {/* <li className={pathnames.includes("/mentee-chat") ? "active" : ""}>
              <Link to="/mentee/mentee-chat">
                <i className="fas fa-comments" />
                Message
                <span>
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </li> */}

            {/* Show Favourites for Mentee only */}
            {isMentee && (
              <li className={pathnames.includes("/favourites") ? "active" : ""}>
                <Link to="/mentee/favourites">
                  <i className="fas fa-star" />
                  Favourites
                  <span>
                    <i className="fas fa-chevron-right" />
                  </span>
                </Link>
              </li>
            )}
            {/* Show Profile for both Mentor and Mentee */}
            <li className={pathnames.includes("/mentee/mentor-profile") ? "active" : ""}>
              <Link to="/mentee/profile">
                <i className="fas fa-user-cog" />
                Profile Settings
                <span>
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </li>

            {/* Show Logout for both Mentor and Mentee */}
            {/* <li className={pathnames.includes("/index-2") ? "active" : ""}>
              <Link to="/logout">
                <i className="fas fa-sign-out-alt" />
                Logout
              </Link>
            </li> */}


          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
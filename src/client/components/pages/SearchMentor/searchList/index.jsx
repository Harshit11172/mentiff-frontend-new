import React from "react";
import { Link } from "react-router-dom";

const SearchList = ({ mentors }) => {
  if (!mentors || mentors.length === 0) {
    return <p>No mentors available.</p>;
  }

  return (
    <div>
      {mentors.map((mentor, index) => {
        const fullName = `${mentor.user.first_name} ${mentor.user.last_name}`;
        const profileImg = mentor.profile_picture || "/default-user.jpg";
        const expertise = mentor.expertise || "";
        const university = mentor.university || "";
        const degree = mentor.degree || "";
        const major = mentor.major || "";

        const rating = Math.round(mentor.rating || 0);// you can replace with real data when available
        const feedbackCount = mentor.feedback_count || 0; // replace with real reviews if present
        const callsBooked = mentor.calls_booked || 0;
        const sessionFee = mentor.session_fee || 250;

        return (
          <div className="card" key={mentor.id}>
            <div className="card-body">
              <div className="doctor-widget">
                <div className="doc-info-left">
                  <div className="doctor-img">
                    <Link to={`/mentee/mentor-profile/${mentor.id}`}>
                      <img
                        src={profileImg}
                        className="img-fluid"
                        alt={fullName}
                      />
                    </Link>
                  </div>
                  <div className="doc-info-cont">
                    <h4 className="doc-name">
                      <Link to={`/mentee/mentor-profile/${mentor.id}`}>
                        {fullName}
                      </Link>
                    </h4>
                    <p className="doc-speciality">{expertise}</p>
                    <p className="doc-speciality">
                      {degree} {major}
                    </p>

                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`fas fa-star ${i < rating ? "filled" : ""}`}
                        ></i>
                      ))}
                      <span className="d-inline-block average-rating ms-1">
                        ({rating.toFixed(1)})
                      </span>

                    </div>

                    <div className="clinic-details">
                      <p className="doc-location">
                        <i className="fas fa-university"></i> {university}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="doc-info-right">

                  <div className="clini-infos">
                    <ul>
                      <li>
                        <i className="far fa-comment"></i> {feedbackCount} Feedback
                      </li>
                      <li>
                        {/* <i className="fas fa-map-marker-alt"></i> India */}
                        <i className="far fa-headset"></i> {callsBooked} Bookings
                      </li>
                      <li>
                        <i className="far fa-money-bill-alt"></i> ₹{sessionFee} / session
                      </li>
                    </ul>
                  </div>



                  <div className="clinic-booking">
                    <Link className="apt-btn" to={`/mentee/mentor-profile/${mentor.id}`}>
                      Call
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchList;

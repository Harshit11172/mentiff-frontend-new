import React, { useState , useEffect } from "react";

import Footer from "../../footer";
import Header from "../../header";
import "react-datepicker/dist/react-datepicker.css";
import { user } from "../../../../admin/components/imagepath";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useLocation } from 'react-router-dom';


const MenteeProfile = (props) => {
  const location = useLocation();
  const mentor = location.state?.mentor; // Get mentor data passed from the previous page
  
  const [mentorDetails, setMentorDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Only call the API if we have a mentor ID

    if (mentor?.id) {
      const fetchMentorDetails = async () => {
        try {
          // const response = await axios.get(`http://www.mentiff.com/api_backend/api/users/mentors/${mentor.id}/`);
          const response = await axios.get(`http://www.mentiff.com/api_backend/api/users/mentors/1/`);
          setMentorDetails(response.data);
        } catch (err) {
          setError("Error fetching mentor details.");
        } finally {
          setLoading(false);
        }
      };

      fetchMentorDetails();
    } else {
      setLoading(false);
    }
  }, [mentor]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!mentorDetails) {
    return <p>No mentor details available.</p>;
  }

  return (
    <div>
      <Header {...props} />
      <div>
        {/* Breadcrumb */}
        
        <div className="breadcrumb-bar-two">
        <div className="container-fluid">
          <div className="row align-items-start inner-banner">
            <div className="col-md-12 col-12 text-start">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                  Mentee Profile
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Mentee Profile</h2>

            </div>
          </div>
        </div>
      </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container">
            {/* Mentor Widget */}
            <div className="card col-10 me-auto ms-auto p-0">
              <div className="card-body">
                <div className="mentor-widget">
                  <div className="user-info-left align-items-center">
                    <div className="mentor-img d-flex flex-wrap justify-content-center">
                      <div className="pro-avatar">JD</div>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                      </div>
                      <div className="mentor-details m-0">
                        <p className="user-location m-0">
                          <i className="fas fa-map-marker-alt" /> Tamil Nadu,
                          India
                        </p>
                      </div>
                    </div>
                    <div className="user-info-cont">
                      <h4 className="usr-name">Harshit</h4>
                      <p className="mentor-type">English Literature (M.A)</p>
                      <div className="mentor-action">
                        <p className="mentor-type social-title">Contact Me</p>
                        <Link to="#" className="btn-blue">
                          <i className="fas fa-comments" />
                        </Link>
                        <Link to="/mentor/chat-mentor" className="btn-blue">
                          <i className="fas fa-envelope" />
                        </Link>
                        <Link
                          to="#"
                          className="btn-blue"
                          data-toggle="modal"
                          data-target="#voice_call"
                        >
                          <i className="fas fa-phone-alt" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="user-info-right d-flex align-items-end flex-wrap">
                    <div className="hireme-btn text-center">
                      <span className="hire-rate">$500 / Hour</span>
                      <Link className="blue-btn-radius" to="/mentee/booking1">
                        Hire Me
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Mentor Widget */}
            {/* Mentor Details Tab */}
            <div className="card col-10 me-auto ms-auto p-0">
              <div className="card-body custom-border-card pb-0">
                {/* Tab Content */}
                <div className="tab-content pt-0">
                  {/* Biography Content */}
                  <div
                    role="tabpanel"
                    id="biography"
                    className="tab-pane fade show active"
                  >
                    <div className="row">
                      <div className="col-md-12">
                        {/* About Details */}
                        <div className="widget about-widget custom-about mb-0">
                          <h4 className="widget-title">About Me</h4>
                          <hr />
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                          </p>
                          <p>
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                          </p>
                        </div>
                        {/* /About Details */}
                      </div>
                    </div>
                  </div>
                  {/* /biography Content */}
                </div>
              </div>
            </div>
            {/* <div className="card col-10 me-auto ms-auto p-0">
              <div className="card-body custom-border-card pb-0"> */}

                
                {/* Personal Details */}
                {/* <div className="widget education-widget mb-0">
                  <h4 className="widget-title">Personal Details</h4>
                  <hr />
                  <div className="experience-box">
                    <ul className="experience-list profile-custom-list">
                      <li>
                        <div className="experience-content">
                          <div className="timeline-content">
                            <span>Gender</span>
                            <div className="row-result">Male</div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="experience-content">
                          <div className="timeline-content">
                            <span>Date of Birth</span>
                            <div className="row-result">01 - 02 - 2000</div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="experience-content">
                          <div className="timeline-content">
                            <span>Where did you hear about us?</span>
                            <div className="row-result">Through web search</div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div> */}
                {/* /Personal Details */}

{/* 

              </div>
            </div>
             */}
            
            
            <div className="card col-10 me-auto ms-auto p-0">
              <div className="card-body custom-border-card pb-0">
                {/* Qualification Details */}
                <div className="widget experience-widget mb-0">
                  <h4 className="widget-title">Qualification</h4>
                  <hr />
                  <div className="experience-box">
                    <ul className="experience-list profile-custom-list">
                      
                      
                      <li>
                        <div className="experience-content">
                          <div className="timeline-content">
                            <span>Undergraduate College</span>
                            <div className="row-result">
                              Coimbatore University
                            </div>
                          </div>
                        </div>
                      </li>
                
                    
                    
                    </ul>
                  </div>
                </div>
                {/* /Qualification Details */}
              </div>
            </div>
            
            
            
            {/* <div className="card col-10 me-auto ms-auto p-0">
              <div className="card-body custom-border-card pb-0"> */}
                
                
                {/* Location Details */}
                
{/*                 
                <div className="widget awards-widget m-0">
                  <h4 className="widget-title">Location</h4>
                  <hr />
                  <div className="experience-box">
                    <ul className="experience-list profile-custom-list">
                      <li>
                        <div className="experience-content">
                          <div className="timeline-content">
                            <span>Address 1</span>
                            <div className="row-result">No : 5 ABC Avenue</div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="experience-content">
                          <div className="timeline-content">
                            <span>Address 2</span>
                            <div className="row-result">
                              National highway road
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="experience-content">
                          <div className="timeline-content">
                            <span>Country</span>
                            <div className="row-result">India</div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="experience-content">
                          <div className="timeline-content">
                            <span>City</span>
                            <div className="row-result">Coimbatore</div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="experience-content">
                          <div className="timeline-content">
                            <span>State</span>
                            <div className="row-result">Tamil Nadu</div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="experience-content">
                          <div className="timeline-content">
                            <span>Postal Code</span>
                            <div className="row-result">641001</div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                 */}
                {/* /Location Details */}
             
{/*   
              </div>
            </div>
             */}
            
            
            {/* /Mentor Details Tab */}
          </div>
        </div>
        {/* /Page Content */}
      </div>

      <Footer {...props} />

      {/* Voice Call Modal */}
      <div className="modal fade call-modal" id="voice_call">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              {/* Outgoing Call */}
              <div className="call-box incoming-box">
                <div className="call-wrapper">
                  <div className="call-inner">
                    <div className="call-user">
                      <img
                        alt="User Image"
                        src={user}
                        className="call-avatar"
                      />
                      <h4>Jonathan Doe</h4>
                      <span>Connecting...</span>
                    </div>
                    <div className="call-items">
                      <Link
                        to="#"
                        className="btn call-item call-end"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <i className="material-icons">call_end</i>
                      </Link>
                      <Link
                        to="/pages/voice-call"
                        className="btn call-item call-start"
                      >
                        <i className="material-icons">call</i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Outgoing Call */}
            </div>
          </div>
        </div>
      </div>
      {/* /Voice Call Modal */}
      {/* Video Call Modal */}
      <div className="modal fade call-modal" id="video_call">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              {/* Incoming Call */}
              <div className="call-box incoming-box">
                <div className="call-wrapper">
                  <div className="call-inner">
                    <div className="call-user">
                      <img
                        className="call-avatar"
                        src={user}
                        alt="User Image"
                      />
                      <h4> Darren Elder</h4>
                      <span>Calling ...</span>
                    </div>
                    <div className="call-items">
                      <Link
                        to="#"
                        className="btn call-item call-end"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <i className="material-icons">call_end</i>
                      </Link>
                      <Link
                        to="/pages/video-call"
                        className="btn call-item call-start"
                      >
                        <i className="material-icons">videocam</i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Incoming Call */}
            </div>
          </div>
        </div>
      </div>
      {/* Video Call Modal */}
    </div>
  );
};

export default MenteeProfile;

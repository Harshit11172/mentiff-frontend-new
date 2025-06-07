import React from "react";
import { Link } from "react-router-dom";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import {
  IMG01,
  IMG02,
  IMG03,
  IMG06,
  IMG05,

} from "./img";


const SearchList = () => {
  return (
    <div>
      <div className="card">
                <div className="card-body">
                  <div className="doctor-widget">
                    <div className="doc-info-left">
                      <div className="doctor-img">
                        <Link to="/mentee/mentor-profile">
                          <img src={IMG01} className="img-fluid" alt="User" />
                        </Link>
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name">
                          <Link to="/mentee/mentor-profile">
                            Ruby Perrin
                          </Link>
                        </h4>
                        <p className="doc-speciality">
                        Digital Marketer
                        </p>
                        <div className="rating">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star"></i>
                          <span className="d-inline-block average-rating ms-1">
                            (17)
                          </span>
                        </div>
                        <div className="clinic-details">
                          <p className="doc-location">
                            <i className="fas fa-map-marker-alt"></i> Florida,
                            USA
                          </p>
                          
                        </div>
                        
                      </div>
                    </div>
                    <div className="doc-info-right">
                      <div className="clini-infos">
                        <ul>
                          <li>
                            <i className="far fa-comment"></i> 17 Feedback
                          </li>
                          <li>
                            <i className="fas fa-map-marker-alt"></i> Florida,
                            USA
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt"></i> $300 -
                            $1000{" "}
                            <i
                              className="fas fa-info-circle"
                              data-bs-toggle="tooltip"
                              title="Lorem Ipsum"
                            ></i>{" "}
                          </li>
                        </ul>
                      </div>
                      <div className="clinic-booking">
                        
                        <Link className="apt-btn" to="/mentee/booking1">
                          Book Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="doctor-widget">
                    <div className="doc-info-left">
                      <div className="doctor-img">
                        <Link to="/mentee/mentor-profile">
                          <img src={IMG02} className="img-fluid" alt="User" />
                        </Link>
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name">
                          <Link to="/mentee/mentor-profile">
                            Darren Elder
                          </Link>
                        </h4>
                        <p className="doc-speciality">
                        Digital Marketer
                        </p>
                        <div className="rating">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star"></i>
                          <span className="d-inline-block average-rating ms-1">
                            (35)
                          </span>
                        </div>
                        <div className="clinic-details">
                          <p className="doc-location">
                            <i className="fas fa-map-marker-alt"></i> Newyork,
                            USA
                          </p>
                          
                        </div>
                        
                      </div>
                    </div>
                    <div className="doc-info-right">
                      <div className="clini-infos">
                        <ul>
                          <li>
                            <i className="far fa-comment"></i> 35 Feedback
                          </li>
                          <li>
                            <i className="fas fa-map-marker-alt"></i> Newyork,
                            USA
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt"></i> $50 - $300{" "}
                            <i
                              className="fas fa-info-circle"
                              data-bs-toggle="tooltip"
                              title="Lorem Ipsum"
                            ></i>
                          </li>
                        </ul>
                      </div>
                      <div className="clinic-booking">
                        
                        <Link className="apt-btn" to="/mentee/booking1">
                          Book Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="doctor-widget">
                    <div className="doc-info-left">
                      <div className="doctor-img">
                        <Link to="/mentee/mentor-profile">
                          <img src={IMG03} className="img-fluid" alt="User" />
                        </Link>
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name">
                          <Link to="/mentee/mentor-profile">
                            Deborah Angel
                          </Link>
                        </h4>
                        <p className="doc-speciality">
                        UNIX, Calculus, Trigonometry
                        </p>
                        
                        <div className="rating">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star"></i>
                          <span className="d-inline-block average-rating ms-1">
                            (27)
                          </span>
                        </div>
                        <div className="clinic-details">
                          <p className="doc-location">
                            <i className="fas fa-map-marker-alt"></i> Georgia,
                            USA
                          </p>
                          
                        </div>
                        
                      </div>
                    </div>
                    <div className="doc-info-right">
                      <div className="clini-infos">
                        <ul>
                          <li>
                            <i className="far fa-comment"></i> 35 Feedback
                          </li>
                          <li>
                            <i className="fas fa-map-marker-alt"></i> Newyork,
                            USA
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt"></i> $100 -
                            $400{" "}
                            <i
                              className="fas fa-info-circle"
                              data-bs-toggle="tooltip"
                              title="Lorem Ipsum"
                            ></i>
                          </li>
                        </ul>
                      </div>
                      <div className="clinic-booking">
                        
                        <Link className="apt-btn" to="/mentee/booking1">
                          Book Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="doctor-widget">
                    <div className="doc-info-left">
                      <div className="doctor-img">
                        <Link to="/mentee/mentor-profile">
                          <img src={IMG05} className="img-fluid" alt="User" />
                        </Link>
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name">
                          <Link to="/mentee/mentor-profile">
                            Sofia Brient
                          </Link>
                        </h4>
                        <p className="doc-speciality">
                        ASP.NET,Computer Gaming
                        </p>
                        <div className="rating">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star"></i>
                          <span className="d-inline-block average-rating ms-1">
                            (4)
                          </span>
                        </div>
                        <div className="clinic-details">
                          <p className="doc-location">
                            <i className="fas fa-map-marker-alt"></i> Louisiana,
                            USA
                          </p>
                          
                        </div>
                        
                      </div>
                    </div>
                    <div className="doc-info-right">
                      <div className="clini-infos">
                        <ul>
                          
                          <li>
                            <i className="far fa-comment"></i> 4 Feedback
                          </li>
                          <li>
                            <i className="fas fa-map-marker-alt"></i> Newyork,
                            USA
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt"></i> $150 -
                            $250{" "}
                            <i
                              className="fas fa-info-circle"
                              data-bs-toggle="tooltip"
                              title="Lorem Ipsum"
                            ></i>
                          </li>
                        </ul>
                      </div>
                      <div className="clinic-booking">
                        
                        <Link className="apt-btn" to="/mentee/booking1">
                          Book Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="doctor-widget">
                    <div className="doc-info-left">
                      <div className="doctor-img">
                        <Link to="/mentee/mentor-profile">
                          <img src={IMG06} className="img-fluid" alt="User" />
                        </Link>
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name">
                          <Link to="/mentee/mentor-profile">
                            Katharine Berthold
                          </Link>
                        </h4>
                        <p className="doc-speciality">
                        Computer Programming
                        </p>
                        <div className="rating">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star"></i>
                          <span className="d-inline-block average-rating ms-1">
                            (52)
                          </span>
                        </div>
                        <div className="clinic-details">
                          <p className="doc-location">
                            <i className="fas fa-map-marker-alt"></i> Texas, USA
                          </p>
                          
                        </div>
                        
                      </div>
                    </div>
                    <div className="doc-info-right">
                      <div className="clini-infos">
                        <ul>
                          <li>
                            <i className="far fa-comment"></i> 52 Feedback
                          </li>
                          <li>
                            <i className="fas fa-map-marker-alt"></i> Texas, USA
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt"></i> $100 -
                            $500{" "}
                            <i
                              className="fas fa-info-circle"
                              data-bs-toggle="tooltip"
                              title="Lorem Ipsum"
                            ></i>
                          </li>
                        </ul>
                      </div>
                      <div className="clinic-booking">
                        
                        <Link className="apt-btn" to="/mentee/booking1">
                          Book Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  );
};

export default SearchList;

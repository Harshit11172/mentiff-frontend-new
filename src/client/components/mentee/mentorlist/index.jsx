import React, { useEffect } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";

import { IMG01, IMG02, IMG03, IMG05, IMG06, IMG11, IMG12, IMG13 } from "./img";
import Map from "../mentorgrid/map";

import Header from "../../header";

const data = [
  {
    id: 1,
    doc_name: "Ruby Perrin",
    speciality: "Digital Marketer",
    address: "Florida, USA",
    next_available: "Available on Fri, 22 Mar",
    amount: "$300 - $1000",
    lat: -33.847927,
    lng: 150.6517938,
    icons: "default",
    profile_link: "/mentee/mentor-profile",
    total_review: "17",
    image: IMG01,
  },
  {
    id: 2,
    doc_name: "Darren Elder",
    speciality: "Digital Marketer",
    address: "Newyork, USA",
    next_available: "Available on Fri, 23 Mar",
    amount: "$50 - $300",
    lat: -37.9722342,
    lng: 144.7729561,
    icons: "default",
    profile_link: "/mentee/mentor-profile",
    total_review: "35",
    image: IMG02,
  },
  {
    id: 3,
    doc_name: "Deborah Angel",
    speciality: "UNIX, Calculus, Trigonometry",
    address: "Georgia, USA",
    next_available: "Available on Fri, 24 Mar",
    amount: "$100 - $400",
    lat: -31.9546904,
    lng: 112.8350292,
    icons: "default",
    profile_link: "/mentee/mentor-profile",
    total_review: "27",
    image: IMG03,
  },
  {
    id: 4,
    doc_name: "Sofia Brient",
    speciality: "Computer Programming",
    address: "Louisiana, USA",
    next_available: "Available on Fri, 25 Mar",
    amount: "$150 - $250",
    lat: -32.9546904,
    lng: 115.8350292,
    icons: "default",
    profile_link: "/mentee/mentor-profile",
    total_review: "4",
    image: IMG05,
  },
  {
    id: 5,
    doc_name: "Marvin Campbell",
    speciality: "ASP.NET,Computer Gaming",
    address: "Michigan, USA",
    next_available: "Available on Fri, 25 Mar",
    amount: "$50 - $700",
    lat: -34.9546904,
    lng: 125.8650292,
    icons: "default",
    profile_link: "/mentee/mentor-profile",
    total_review: "66",
    image: IMG03,
  },
  {
    id: 6,
    doc_name: "Katharine Berthold",
    speciality: "Digital Marketer",
    address: "Texas, USA",
    next_available: "Available on Fri, 25 Mar",
    amount: "$100 - $500",
    lat: -35.9546904,
    lng: 153.8350292,
    icons: "default",
    profile_link: "/mentee/mentor-profile",
    total_review: "52",
    image: IMG02,
  },
  {
    id: 7,
    doc_name: "Linda Tobin",
    speciality: "UNIX, Calculus, Trigonometry",
    address: "Kansas, USA",
    next_available: "Available on Fri, 25 Mar",
    amount: "$100 - $1000",
    lat: -36.9548904,
    lng: 105.8350292,
    icons: "default",
    profile_link: "/mentee/mentor-profile",
    total_review: "43",
    image: IMG01,
  },
];

const MentorList = (props) => {
  useEffect(() => {
    document.body.classList.add("map-page");

    return () => document.body.classList.remove("map-page");
  }, []);

  const options = [
    { value: "Select", label: "Select" },
    { value: "Rating", label: "Rating" },
    { value: "Popular", label: "Popular" },
    { value: "Lastest", label: "Lastest" },
    { value: "Free", label: "Free" },
  ];

  return (
    <>
      <Header {...props} />
      <div className="content top-space">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-7 col-lg-12 order-md-last order-sm-last order-last map-left">
              <div className="row align-items-center mb-4">
                <div className="col-md-6 col">
                  <h4>2245 Mentors found</h4>
                </div>
                <div className="col-md-6 col-auto">
                  <div className="view-icons">
                    <Link
                      to="/mentee/map-grid"
                      className="grid-view active"
                    >
                      <i className="fas fa-th-large"></i>
                    </Link>
                    <Link to="/mentee/map-list" className="list-view">
                      <i className="fas fa-bars"></i>
                    </Link>
                  </div>
                  <div className="sort-by d-sm-block d-none">
                    <span className="sortby-fliter">
                      <Select options={options} />
                    </span>
                  </div>
                </div>
              </div>
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
              <div className="load-more text-center">
                <Link to="#0" className="btn btn-primary btn-sm">
                  Load More
                </Link>
              </div>
            </div>
            <div className="col-xl-5 col-lg-12 map-right grid-list-map">
              <div id="map" className="map-listing">
                <div style={{ height: "100vh", width: "100%" }}>
                  <Map
                    places={data}
                    center={{ lat: -24.9923319, lng: 135.2252427 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorList;

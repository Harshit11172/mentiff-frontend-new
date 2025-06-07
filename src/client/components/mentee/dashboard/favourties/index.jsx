import React from "react";
import { Link } from "react-router-dom";
import DashboardSidebar from "../sidebar/sidebar.jsx";
import StickyBox from "react-sticky-box";
import {
  IMG01,
  IMG02,
  IMG03,
  IMG04,
  IMG05,
  IMG06,
  IMG07,
  IMG08,
  IMG09,
} from "./img";

import Footer from "../../../footer";
import Header from "../../../header.jsx";

const Favourites = (props) => {
  return (
    <div>
      <Header {...props} />
      <div className="breadcrumb-bar-two">
        <div className="container-fluid">
          <div className="row align-items-center  inner-banner">
            <div className="col-md-12 col-12 text-start">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Favourites
                  </li>
                </ol>
              </nav>
                <h2 className="breadcrumb-title">Favourites</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <DashboardSidebar />
              </StickyBox>
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="row row-grid">
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/mentee/mentor-profile">
                        <img className="img-fluid" alt="User" src={IMG01} />
                      </Link>
                      <Link to="#0" className="fav-btn">
                        <i className="far fa-bookmark"></i>
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/mentee/mentor-profile">
                          Ruby Perrin
                        </Link>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">
                      Digital Marketer
                      </p>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <span className="d-inline-block average-rating ms-1">
                          (17)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Florida, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $300 - $1000{" "}
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            title="Lorem Ipsum"
                          ></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/mentee/mentor-profile"
                            className="btn view-btn"
                          >
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link to="/mentee/booking1" className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/mentee/mentor-profile">
                        <img className="img-fluid" alt="User" src={IMG02} />
                      </Link>
                      <Link to="#0" className="fav-btn">
                        <i className="far fa-bookmark"></i>
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/mentee/mentor-profile">
                          Darren Elder
                        </Link>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">
                      UNIX, Calculus, Trigonometry
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
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Newyork, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22
                          Mar
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
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/mentee/mentor-profile"
                            className="btn view-btn"
                          >
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link to="/mentee/booking1" className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/mentee/mentor-profile">
                        <img className="img-fluid" alt="User" src={IMG03} />
                      </Link>
                      <Link to="#0" className="fav-btn">
                        <i className="far fa-bookmark"></i>
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/mentee/mentor-profile">
                          Deborah Angel
                        </Link>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">
                      ASP.NET,Computer Gaming
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
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Georgia, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $100 - $400{" "}
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            title="Lorem Ipsum"
                          ></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/mentee/mentor-profile"
                            className="btn view-btn"
                          >
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link to="/mentee/booking1" className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/mentee/mentor-profile">
                        <img className="img-fluid" alt="User" src={IMG04} />
                      </Link>
                      <Link to="#0" className="fav-btn">
                        <i className="far fa-bookmark"></i>
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/mentee/mentor-profile">
                          Sofia Brient
                        </Link>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">
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
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Louisiana,
                          USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $150 - $250{" "}
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            title="Lorem Ipsum"
                          ></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/mentee/mentor-profile"
                            className="btn view-btn"
                          >
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link to="/mentee/booking1" className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/mentee/mentor-profile">
                        <img className="img-fluid" alt="User" src={IMG05} />
                      </Link>
                      <Link to="#0" className="fav-btn">
                        <i className="far fa-bookmark"></i>
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/mentee/mentor-profile">
                          Marvin Campbell
                        </Link>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">
                      Computer Programming
                      </p>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star"></i>
                        <span className="d-inline-block average-rating ms-1">
                          (66)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Michigan,
                          USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $50 - $700{" "}
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            title="Lorem Ipsum"
                          ></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/mentee/mentor-profile"
                            className="btn view-btn"
                          >
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link to="/mentee/booking1" className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/mentee/mentor-profile">
                        <img className="img-fluid" alt="User" src={IMG06} />
                      </Link>
                      <Link to="#0" className="fav-btn">
                        <i className="far fa-bookmark"></i>
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/mentee/mentor-profile">
                          Katharine Berthold
                        </Link>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">
                      UNIX, Calculus, Trigonometry
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
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Texas, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $100 - $500{" "}
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            title="Lorem Ipsum"
                          ></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/mentee/mentor-profile"
                            className="btn view-btn"
                          >
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link to="/mentee/booking1" className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/mentee/mentor-profile">
                        <img className="img-fluid" alt="User" src={IMG07} />
                      </Link>
                      <Link to="#0" className="fav-btn">
                        <i className="far fa-bookmark"></i>
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/mentee/mentor-profile">
                          Linda Tobin
                        </Link>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">
                      Digital Marketer
                      </p>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star"></i>
                        <span className="d-inline-block average-rating ms-1">
                          (43)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Kansas, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $100 - $1000{" "}
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            title="Lorem Ipsum"
                          ></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/mentee/mentor-profile"
                            className="btn view-btn"
                          >
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link to="/mentee/booking1" className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/mentee/mentor-profile">
                        <img className="img-fluid" alt="User" src={IMG08} />
                      </Link>
                      <Link to="#0" className="fav-btn">
                        <i className="far fa-bookmark"></i>
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/mentee/mentor-profile">
                          Paul Richard
                        </Link>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">
                      Computer Programming
                      </p>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star"></i>
                        <span className="d-inline-block average-rating ms-1">
                          (49)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt"></i> California,
                          USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $100 - $400{" "}
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            title="Lorem Ipsum"
                          ></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/mentee/mentor-profile"
                            className="btn view-btn"
                          >
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link to="/mentee/booking1" className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/mentee/mentor-profile">
                        <img className="img-fluid" alt="User" src={IMG09} />
                      </Link>
                      <Link to="#0" className="fav-btn">
                        <i className="far fa-bookmark"></i>
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/mentee/mentor-profile">John Gibbs</Link>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">
                      ASP.NET,Computer Gaming
                      </p>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star"></i>
                        <span className="d-inline-block average-rating ms-1">
                          (112)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Oklahoma,
                          USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $500 - $2500{" "}
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            title="Lorem Ipsum"
                          ></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/mentee/mentor-profile"
                            className="btn view-btn"
                          >
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link to="/mentee/booking1" className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/mentee/mentor-profile">
                        <img className="img-fluid" alt="User" src={IMG01} />
                      </Link>
                      <Link to="#0" className="fav-btn">
                        <i className="far fa-bookmark"></i>
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/mentee/mentor-profile">
                          Olga Barlow
                        </Link>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">
                      Digital Marketer
                      </p>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star"></i>
                        <span className="d-inline-block average-rating ms-1">
                          (65)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Montana, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $75 - $250{" "}
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            title="Lorem Ipsum"
                          ></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/mentee/mentor-profile"
                            className="btn view-btn"
                          >
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link to="/mentee/booking1" className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/mentee/mentor-profile">
                        <img className="img-fluid" alt="User" src={IMG02} />
                      </Link>
                      <Link to="#0" className="fav-btn">
                        <i className="far fa-bookmark"></i>
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/mentee/mentor-profile">
                          Julia Washington
                        </Link>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">
                      UNIX, Calculus, Trigonometry
                      </p>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star"></i>
                        <span className="d-inline-block average-rating ms-1">
                          (5)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Oklahoma,
                          USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $275 - $450{" "}
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            title="Lorem Ipsum"
                          ></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/mentee/mentor-profile"
                            className="btn view-btn"
                          >
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link to="/mentee/booking1" className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/mentee/mentor-profile">
                        <img className="img-fluid" alt="User" src={IMG03} />
                      </Link>
                      <Link to="#0" className="fav-btn">
                        <i className="far fa-bookmark"></i>
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/mentee/mentor-profile">
                          Shaun Aponte
                        </Link>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">
                      Computer Programming
                      </p>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star"></i>
                        <span className="d-inline-block average-rating ms-1">
                          (5)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Indiana, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $150 - $350{" "}
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            title="Lorem Ipsum"
                          ></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/mentee/mentor-profile"
                            className="btn view-btn"
                          >
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link to="/mentee/booking1" className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} />
    </div>
  );
};

export default Favourites;

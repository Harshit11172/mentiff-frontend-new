import React from "react";
import DoctorSidebar from "../sidebar";
import Footer from "../../footer";
import StickyBox from "react-sticky-box";
import Header from "../../header";
import { user, user_1, user_10, user_11, user_2, user_3, user_4, user_5, user_6, user_7, user_8, user_9 } from "../../../../admin/components/imagepath";
import { Link } from "react-router-dom";
import HomeFiveHeader from "../../home/home-five/header";



const MenteeList = (props) => {
  return (
    <div>
      {/* <Header {...props} /> */}

      <HomeFiveHeader />



      <div>
        {/* Breadcrumb */}
        {/* <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-8 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/index">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Mentee List
                    </li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Mentee List</h2>
              </div>
              <div className="col-md-4 col-12">
                <form className="search-form custom-search-form">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Search Mentees..."
                      className="form-control"
                    />
                    <button type="submit" className="btn btn-primary">
                      <i className="fa fa-search" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div> */}
        {/* /Breadcrumb */}

        
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={50} offsetBottom={20}>
                <div className="appointments">
                  <DoctorSidebar />
                </div>
              </StickyBox>
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="row row-grid">
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile user-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <Link
                              to="/mentor/mentee-profile"
                              className="booking-user-img"
                            >
                              <img
                                src={user}
                                alt="User Image"
                              />
                            </Link>
                            <div className="profile-det-info">
                              <h3>
                                <Link to="/mentor/mentee-profile">Richard Wilson</Link>
                              </h3>
                              <div className="mentee-details">
                                <h5>
                                  <b>Mentee ID :</b> 16
                                </h5>
                                <h5 className="mb-0">
                                  <i className="fas fa-map-marker-alt" />{" "}
                                  Alabama, USA
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mentee-info">
                          <ul>
                            <li>
                              Phone <span>+1 952 001 8563</span>
                            </li>
                            <li>
                              Age <span>38 Years, Male</span>
                            </li>
                            <li>
                              Blood Group <span>AB+</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile user-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <Link
                              to="/mentor/mentee-profile"
                              className="booking-user-img"
                            >
                              <img
                                src={user_1}
                                alt="User Image"
                              />
                            </Link>
                            <div className="profile-det-info">
                              <h3>
                                <Link to="/mentor/mentee-profile">Charlene Reed</Link>
                              </h3>
                              <div className="mentee-details">
                                <h5>
                                  <b>Mentee ID :</b> 01
                                </h5>
                                <h5 className="mb-0">
                                  <i className="fas fa-map-marker-alt" /> North
                                  Carolina, USA
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mentee-info">
                          <ul>
                            <li>
                              Phone <span>+1 828 632 9170</span>
                            </li>
                            <li>
                              Age <span>29 Years, Female</span>
                            </li>
                            <li>
                              Blood Group <span>O+</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile user-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <Link
                              to="profile-mentee"
                              className="booking-user-img"
                            >
                              <img
                                src={user_2}
                                alt="User Image"
                              />
                            </Link>
                            <div className="profile-det-info">
                              <h3>Travis Trimble </h3>
                              <div className="mentee-details">
                                <h5>
                                  <b>Mentee ID :</b> 02
                                </h5>
                                <h5 className="mb-0">
                                  <i className="fas fa-map-marker-alt" /> Maine,
                                  USA
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mentee-info">
                          <ul>
                            <li>
                              Phone <span>+1 207 729 9974</span>
                            </li>
                            <li>
                              Age <span>23 Years, Male</span>
                            </li>
                            <li>
                              Blood Group <span>B+</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile user-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <Link to="#" className="booking-user-img">
                              <img
                                src={user_3}
                                alt="User Image"
                              />
                            </Link>
                            <div className="profile-det-info">
                              <h3>Carl Kelly</h3>
                              <div className="mentee-details">
                                <h5>
                                  <b>Mentee ID :</b> 03
                                </h5>
                                <h5 className="mb-0">
                                  <i className="fas fa-map-marker-alt" />{" "}
                                  Indiana, USA
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mentee-info">
                          <ul>
                            <li>
                              Phone <span>+1 260 724 7769</span>
                            </li>
                            <li>
                              Age <span>32 Years, Male</span>
                            </li>
                            <li>
                              Blood Group <span>A+</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile user-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <Link to="#" className="booking-user-img">
                              <img
                                src={user_4}
                                alt="User Image"
                              />
                            </Link>
                            <div className="profile-det-info">
                              <h3>Michelle Fairfax</h3>
                              <div className="mentee-details">
                                <h5>
                                  <b>Mentee ID :</b> 04
                                </h5>
                                <h5 className="mb-0">
                                  <i className="fas fa-map-marker-alt" />{" "}
                                  Indiana, USA
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mentee-info">
                          <ul>
                            <li>
                              Phone <span>+1 504 368 6874</span>
                            </li>
                            <li>
                              Age <span>25 Years, Female</span>
                            </li>
                            <li>
                              Blood Group <span>B+</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile user-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <Link to="#" className="booking-user-img">
                              <img
                                src={user_5}
                                alt="User Image"
                              />
                            </Link>
                            <div className="profile-det-info">
                              <h3>Gina Moore</h3>
                              <div className="mentee-details">
                                <h5>
                                  <b>Mentee ID :</b> 05
                                </h5>
                                <h5 className="mb-0">
                                  <i className="fas fa-map-marker-alt" />{" "}
                                  Florida, USA
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mentee-info">
                          <ul>
                            <li>
                              Phone <span>+1 954 820 7887</span>
                            </li>
                            <li>
                              Age <span>25 Years, Female</span>
                            </li>
                            <li>
                              Blood Group <span>AB-</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile user-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <Link to="#" className="booking-user-img">
                              <img
                                src={user_6}
                                alt="User Image"
                              />
                            </Link>
                            <div className="profile-det-info">
                              <h3>Elsie Gilley</h3>
                              <div className="mentee-details">
                                <h5>
                                  <b>Mentee ID :</b> 06
                                </h5>
                                <h5 className="mb-0">
                                  <i className="fas fa-map-marker-alt" />{" "}
                                  Kentucky, USA
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mentee-info">
                          <ul>
                            <li>
                              Phone <span>+1 315 384 4562</span>
                            </li>
                            <li>
                              Age <span>14 Years, Female</span>
                            </li>
                            <li>
                              Blood Group <span>O-</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile user-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <Link to="#" className="booking-user-img">
                              <img
                                src={user_7}
                                alt="User Image"
                              />
                            </Link>
                            <div className="profile-det-info">
                              <h3>Joan Gardner</h3>
                              <div className="mentee-details">
                                <h5>
                                  <b>Mentee ID :</b> 07
                                </h5>
                                <h5 className="mb-0">
                                  <i className="fas fa-map-marker-alt" />{" "}
                                  California, USA
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mentee-info">
                          <ul>
                            <li>
                              Phone <span>+1 707 2202 603</span>
                            </li>
                            <li>
                              Age <span>25 Years, Female</span>
                            </li>
                            <li>
                              Blood Group <span>A-</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile user-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <Link to="#" className="booking-user-img">
                              <img
                                src={user_8}
                                alt="User Image"
                              />
                            </Link>
                            <div className="profile-det-info">
                              <h3>Daniel Griffing</h3>
                              <div className="mentee-details">
                                <h5>
                                  <b>Mentee ID :</b> 07
                                </h5>
                                <h5 className="mb-0">
                                  <i className="fas fa-map-marker-alt" /> New
                                  Jersey, USA
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mentee-info">
                          <ul>
                            <li>
                              Phone <span>+1 973 773 9497</span>
                            </li>
                            <li>
                              Age <span>28 Years, Male</span>
                            </li>
                            <li>
                              Blood Group <span>O+</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile user-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <Link to="#" className="booking-user-img">
                              <img
                                src={user_9}
                                alt="User Image"
                              />
                            </Link>
                            <div className="profile-det-info">
                              <h3>Walter Roberson</h3>
                              <div className="mentee-details">
                                <h5>
                                  <b>Mentee ID :</b> 09
                                </h5>
                                <h5 className="mb-0">
                                  <i className="fas fa-map-marker-alt" />{" "}
                                  Florida, USA
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mentee-info">
                          <ul>
                            <li>
                              Phone <span>+1 850 358 4445</span>
                            </li>
                            <li>
                              Age <span>28 Years, Male</span>
                            </li>
                            <li>
                              Blood Group <span>A+</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile user-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <Link to="#" className="booking-user-img">
                              <img
                                src={user_10}
                                alt="User Image"
                              />
                            </Link>
                            <div className="profile-det-info">
                              <h3>Robert Rhodes</h3>
                              <div className="mentee-details">
                                <h5>
                                  <b>Mentee ID :</b> 10
                                </h5>
                                <h5 className="mb-0">
                                  <i className="fas fa-map-marker-alt" />{" "}
                                  California, USA
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mentee-info">
                          <ul>
                            <li>
                              Phone <span>+1 858 259 5285</span>
                            </li>
                            <li>
                              Age <span>19 Years, Male</span>
                            </li>
                            <li>
                              Blood Group <span>B+</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card widget-profile user-widget-profile">
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <Link to="#" className="booking-user-img">
                              <img
                                src={user_11}
                                alt="User Image"
                              />
                            </Link>
                            <div className="profile-det-info">
                              <h3>Harry Williams</h3>
                              <div className="mentee-details">
                                <h5>
                                  <b>Mentee ID :</b> 11
                                </h5>
                                <h5 className="mb-0">
                                  <i className="fas fa-map-marker-alt" />{" "}
                                  Colorado, USA
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mentee-info">
                          <ul>
                            <li>
                              Phone <span>+1 303 607 7075</span>
                            </li>
                            <li>
                              Age <span>9 Years, Male</span>
                            </li>
                            <li>
                              Blood Group <span>A-</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-pagination mt-4">
                  <nav>
                    <ul className="pagination justify-content-center">
                      <li className="page-item disabled">
                        <Link className="page-link" to="#" tabIndex={-1}>
                          <i className="fas fa-angle-double-left" />
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link className="page-link" to="#">
                          2 <span className="sr-only">(current)</span>
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          <i className="fas fa-angle-double-right" />
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
      {/* <Footer {...props} /> */}
    </div>
  );
};

export default MenteeList;

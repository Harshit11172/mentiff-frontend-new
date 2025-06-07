/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DashboardSidebar } from "./sidebar/sidebar.jsx";
import StickyBox from "react-sticky-box";
import HomeFiveHeader from "../../home/home-five/header";

import { user_1, user_2, user_3, user_4, user_5, user_6, user_7 } from "../../../../admin/components/imagepath";

import Footer from "../../footer";
// import Header from "../../header.jsx";

const Dashboard = (props) => {
  const [count, setCount] = useState(1, 2, 3, 4);

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     key: 1,
  //   };
  //   this.handleSelect = this.handleSelect.bind(this);
  // }

  return (
    <>
      {/* <Header {...props} /> */}
      
      <HomeFiveHeader/>

      {/* <!-- Breadcrumb --> */}
      {/* <div className="breadcrumb-bar-two">
        <div className="container-fluid">
          <div className="row align-items-start inner-banner">
            <div className="col-md-12 col-12 text-start">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Dashboard
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Dashboard</h2>
            </div>
          </div>
        </div>
      </div> */}

      {/* <!-- /Breadcrumb -->     */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <DashboardSidebar />
              </StickyBox>
            </div>
            
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div>
              <div className="row">
                <div className="col-md-12 col-lg-4 dash-board-list blue">
                  <div className="dash-widget">
                    <div className="circle-bar">
                      <div className="icon-col">
                        <i className="fas fa-users" />
                      </div>
                    </div>
                    <div className="dash-widget-info">
                      <h3>23</h3>
                      <h6>Members</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 dash-board-list yellow">
                  <div className="dash-widget">
                    <div className="circle-bar">
                      <div className="icon-col">
                        <i className="fas fa-calendar-check" />
                      </div>
                    </div>
                    <div className="dash-widget-info">
                      <h3>33</h3>
                      <h6>dd</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 dash-board-list pink">
                  <div className="dash-widget">
                    <div className="circle-bar">
                      <div className="icon-col">
                        <i className="fas fa-wallet" />
                      </div>
                    </div>
                    <div className="dash-widget-info">
                      <h3>$14</h3>
                      <h6>Total Earned</h6>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h4 className="mb-4">Mentor Lists</h4>
                  <div className="card card-table">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover table-center mb-0">
                          <thead>
                            <tr>
                              <th>BASIC INFO</th>
                              <th>CREATED DATE</th>
                              <th className="text-center">TAGS</th>
                              <th className="text-center">ACTION</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    href="/mentee/mentor-profile"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={user_2}
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link href="/mentee/mentor-profile">
                                    Tyrone Roberts
                                    <span>tyroneroberts@adobe.com</span>
                                  </Link>
                                </h2>
                              </td>
                              <td>08 April 2020</td>
                              <td className="text-center">
                                <span className="pending">PENDING</span>
                              </td>
                              <td className="text-center">
                                <Link
                                  href="/mentee/mentor-profile"
                                  className="btn btn-sm bg-info-light"
                                >
                                  <i className="far fa-eye" /> View
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    href="/mentee/mentor-profile"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={user_1}
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link href="/mentee/mentor-profile">
                                    Julie Pennington{" "}
                                    <span>julie@adobe.com</span>
                                  </Link>
                                </h2>
                              </td>
                              <td>08 April 2020</td>
                              <td className="text-center">
                                <span className="pending">PENDING</span>
                              </td>
                              <td className="text-center">
                                <Link
                                  href="/mentee/mentor-profile"
                                  className="btn btn-sm bg-info-light"
                                >
                                  <i className="far fa-eye" /> View
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    href="/mentee/mentor-profile"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={user_3}
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link href="/mentee/mentor-profile">
                                    Allen Davis{" "}
                                    <span>allendavis@adobe.com</span>
                                  </Link>
                                </h2>
                              </td>
                              <td>08 April 2020</td>
                              <td className="text-center">
                                <span className="pending">PENDING</span>
                              </td>
                              <td className="text-center">
                                <Link
                                  href="/mentee/mentor-profile"
                                  className="btn btn-sm bg-info-light"
                                >
                                  <i className="far fa-eye" /> View
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    href="/mentee/mentor-profile"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={user_4}
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link href="/mentee/mentor-profile">
                                    Patricia Manzi{" "}
                                    <span>patriciamanzi@adobe.com</span>
                                  </Link>
                                </h2>
                              </td>
                              <td>08 April 2020</td>
                              <td className="text-center">
                                <span className="accept">ACCEPTED</span>
                              </td>
                              <td className="text-center">
                                <Link
                                  href="/mentee/mentor-profile"
                                  className="btn btn-sm bg-info-light"
                                >
                                  <i className="far fa-eye" /> View
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    href="/mentee/mentor-profile"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={user_5}
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link href="/mentee/mentor-profile">
                                    Olive Lawrence{" "}
                                    <span>olivelawrence@adobe.com</span>
                                  </Link>
                                </h2>
                              </td>
                              <td>08 April 2020</td>
                              <td className="text-center">
                                <span className="accept">ACCEPTED</span>
                              </td>
                              <td className="text-center">
                                <Link
                                  href="/mentee/mentor-profile"
                                  className="btn btn-sm bg-info-light"
                                >
                                  <i className="far fa-eye" /> View
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    href="/mentee/mentor-profile"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={user_6}
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link href="/mentee/mentor-profile">
                                    Frances Foster{" "}
                                    <span>frances@adobe.com</span>
                                  </Link>
                                </h2>
                              </td>
                              <td>08 April 2020</td>
                              <td className="text-center">
                                <span className="accept">ACCEPTED</span>
                              </td>
                              <td className="text-center">
                                <Link
                                  href="/mentee/mentor-profile"
                                  className="btn btn-sm bg-info-light"
                                >
                                  <i className="far fa-eye" /> View
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    href="/mentee/mentor-profile"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={user_7}
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link href="/mentee/mentor-profile">
                                    Deloris Briscoe{" "}
                                    <span>delorisbriscoe@adobe.com</span>
                                  </Link>
                                </h2>
                              </td>
                              <td>08 April 2020</td>
                              <td className="text-center">
                                <span className="reject">REJECTED</span>
                              </td>
                              <td className="text-center">
                                <Link
                                  href="/mentee/mentor-profile"
                                  className="btn btn-sm bg-info-light"
                                >
                                  <i className="far fa-eye" /> View
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      {/* <Footer {...props} /> */}
    </>
  );
};

export default Dashboard;

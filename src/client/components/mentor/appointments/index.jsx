import React from "react";
import StickyBox from "react-sticky-box";
import DoctorSidebar from "../sidebar";
import Header from "../../header";
import { user_1, user_2, user_3, user_4, user_5, user_6, user_7 } from "../../../../admin/components/imagepath";
import { Link } from "react-router-dom/cjs/react-router-dom";
import HomeFiveHeader from "../../home/home-five/header";


const Appointments = (props) => {
  return (
       <>
         {/* <Header {...props} /> */}

         <HomeFiveHeader />

        {/* Breadcrumb */}
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
                    My Booking
                  </li>
                </ol>
              </nav>
                <h2 className="breadcrumb-title">My Booking</h2>
            </div>
          </div>
        </div>
      </div> */}
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              {/* Sidebar */}
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={50} offsetBottom={20}>
                <div className="appointments">
                  <DoctorSidebar />
                </div>
              </StickyBox>
              </div>
              {/* /Sidebar */}
              {/* Booking summary */}
              <div className="col-md-7 col-lg-8 col-xl-9">
                <h3 className="pb-3">Booking Summary</h3>
                {/* Mentee List Tab */}
                <div className="tab-pane show active" id="mentee-list">
                  <div className="card card-table">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover table-center mb-0">
                          <thead>
                            <tr>
                              <th>MENTEE LISTS</th>
                              <th>SCHEDULED DATE</th>
                              <th className="text-center">SCHEDULED TIMINGS</th>
                              <th className="text-center">ACTION</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link to="/mentee/mentor-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src={user_2} alt="User Image" /></Link>
                                  <Link to="/mentee/mentor-profile">Tyrone Roberts<span>tyroneroberts@adobe.com</span></Link>				
                                </h2>
                              </td>
                              <td>08 April 2020</td>
                              <td className="text-center"><span className="pending">9:00 AM - 10:00 AM</span></td>
                              <td className="text-center"><Link to="/mentee/mentor-profile" className="btn btn-sm bg-info-light"><i className="far fa-eye" /> View</Link></td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link to="/mentee/mentor-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src={user_1} alt="User Image" /></Link>
                                  <Link to="/mentee/mentor-profile">Julie Pennington <span>julie@adobe.com</span></Link>				
                                </h2>
                              </td>
                              <td>08 April 2020</td>
                              <td className="text-center"><span className="pending">9:00 AM - 10:00 AM</span></td>
                              <td className="text-center"><Link to="/mentee/mentor-profile" className="btn btn-sm bg-info-light"><i className="far fa-eye" /> View</Link></td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link to="/mentee/mentor-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src={user_3} alt="User Image" /></Link>
                                  <Link to="/mentee/mentor-profile">Allen Davis <span>allendavis@adobe.com</span></Link>				
                                </h2>
                              </td>
                              <td>07 April 2020</td>
                              <td className="text-center"><span className="pending">9:00 AM - 10:00 AM</span></td>
                              <td className="text-center"><Link to="/mentee/mentor-profile" className="btn btn-sm bg-info-light"><i className="far fa-eye" /> View</Link></td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link to="/mentee/mentor-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src={user_4} alt="User Image" /></Link>
                                  <Link to="/mentee/mentor-profile">Patricia Manzi <span>patriciamanzi@adobe.com</span></Link>				
                                </h2>
                              </td>
                              <td>07 April 2020</td>
                              <td className="text-center"><span className="pending">9:00 AM - 10:00 AM</span></td>
                              <td className="text-center"><Link to="/mentee/mentor-profile" className="btn btn-sm bg-info-light"><i className="far fa-eye" /> View</Link></td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link to="/mentee/mentor-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src={user_5} alt="User Image" /></Link>
                                  <Link to="/mentee/mentor-profile">Olive Lawrence <span>olivelawrence@adobe.com</span></Link>				
                                </h2>
                              </td>
                              <td>06 April 2020</td>
                              <td className="text-center"><span className="pending">9:00 AM - 10:00 AM</span></td>
                              <td className="text-center"><Link to="/mentee/mentor-profile" className="btn btn-sm bg-info-light"><i className="far fa-eye" /> View</Link></td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link to="/mentee/mentor-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src={user_6} alt="User Image" /></Link>
                                  <Link to="/mentee/mentor-profile">Frances Foster <span>frances@adobe.com</span></Link>				
                                </h2>
                              </td>
                              <td>06 April 2020</td>
                              <td className="text-center"><span className="pending">9:00 AM - 10:00 AM</span></td>
                              <td className="text-center"><Link to="/mentee/mentor-profile" className="btn btn-sm bg-info-light"><i className="far fa-eye" /> View</Link></td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link to="/mentee/mentor-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src={user_7} alt="User Image" /></Link>
                                  <Link to="/mentee/mentor-profile">Deloris Briscoe <span>delorisbriscoe@adobe.com</span></Link>				
                                </h2>
                              </td>
                              <td>05 April 2020</td>
                              <td className="text-center"><span className="pending">9:00 AM - 10:00 AM</span></td>
                              <td className="text-center"><Link to="/mentee/mentor-profile" className="btn btn-sm bg-info-light"><i className="far fa-eye" /> View</Link></td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link to="/mentee/mentor-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src={user_2} alt="User Image" /></Link>
                                  <Link to="/mentee/mentor-profile">Tyrone Roberts<span>tyroneroberts@adobe.com</span></Link>				
                                </h2>
                              </td>
                              <td>08 April 2020</td>
                              <td className="text-center"><span className="pending">9:00 AM - 10:00 AM</span></td>
                              <td className="text-center"><Link to="/mentee/mentor-profile" className="btn btn-sm bg-info-light"><i className="far fa-eye" /> View</Link></td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link to="/mentee/mentor-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src={user_1} alt="User Image" /></Link>
                                  <Link to="/mentee/mentor-profile">Julie Pennington <span>julie@adobe.com</span></Link>				
                                </h2>
                              </td>
                              <td>08 April 2020</td>
                              <td className="text-center"><span className="pending">9:00 AM - 10:00 AM</span></td>
                              <td className="text-center"><Link to="/mentee/mentor-profile" className="btn btn-sm bg-info-light"><i className="far fa-eye" /> View</Link></td>
                            </tr>
                          </tbody>
                        </table>		
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Mentee List Tab */}
              </div>
              {/* /Booking summary */}
            </div>
          </div>
        </div>		
        {/* /Page Content */}
      </>
  );
};

export default Appointments;

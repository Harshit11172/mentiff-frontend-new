// /* eslint-disable react/prop-types */
// import React, { useState } from "react";
// import DoctorSidebar from "../sidebar/index";
// import Footer from "../../footer";
// import StickyBox from "react-sticky-box";
// import Header from "../../header";
// import { useDropzone } from "react-dropzone";
// import { useCallback } from "react";
// import { user } from "../../../../admin/components/imagepath";
// import { DatePicker } from "antd";
// import { Link } from "react-router-dom/cjs/react-router-dom";
// import HomeFiveHeader from "../../home/home-five/header";


// const ProfileSetting = (props) => {
//   const [dropzone, setDropzone] = useState({ files: [] });

//   const MyDropzone = ({ onDrop }) => {
//     const { getRootProps, getInputProps, isDragActive } = useDropzone({
//       onDrop,
//     });

//     return (
//       <div
//         {...getRootProps()}
//         className={`dropzone ${isDragActive ? "active" : ""}`}
//       >
//         <input {...getInputProps()} />
//         <p>Drag & drop files here, or click to select files</p>
//       </div>
//     );
//   };

//   const handleChange = useCallback(
//     (files) => {
//       setDropzone({
//         ...dropzone,
//         files: files,
//       });
//     },
//     [dropzone]
//   );
//   // const [gender, setGender] = useState([
//   //   { id: 1, text: "Select" },
//   //   { id: 2, text: "Male" },
//   //   { id: 3, text: "Female" },
//   // ]);

//   return (
//     <div>
//       {/* <Header {...props} /> */}
//       <HomeFiveHeader/>

//       {/* <div className="breadcrumb-bar-two">
//         <div className="container-fluid">
//           <div className="row align-items-start inner-banner">
//             <div className="col-md-12 col-12 text-start">
//               <nav aria-label="breadcrumb" className="page-breadcrumb">
//                 <ol className="breadcrumb">
//                   <li className="breadcrumb-item">
//                     <Link to="/index">Home</Link>
//                   </li>
//                   <li className="breadcrumb-item" aria-current="page">
//                   Profile Settings
//                   </li>
//                 </ol>
//               </nav>
//               <h2 className="breadcrumb-title">Profile Settings</h2>
//             </div>
//           </div>
//         </div>
//       </div> */}

//       <div className="content">
//         <div className="container-fluid">
//           <div className="row">
//             {/* Profile Sidebar */}
//             <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
//             <StickyBox offsetTop={50} offsetBottom={20}>
//                 <div className="appointments">
//                   <DoctorSidebar />
//                 </div>
//               </StickyBox>
//             </div>
//             {/* /Profile Sidebar */}
//             <div className="col-md-7 col-lg-8 col-xl-9">
//               <div className="card">
//                 <div className="card-body">
//                   {/* Profile Settings Form */}
//                   <form>
//                     <div className="row form-row">
//                       <div className="col-12 col-md-12">
//                         <div className="form-group">
//                           <div className="change-avatar">
//                             <div className="profile-img">
//                               <img src={user} alt="User Image" />
//                             </div>
//                             <div className="upload-img">
//                               <div className="change-photo-btn">
//                                 <span><i className="fa fa-upload" /> Upload Photo</span>
//                                 <input type="file" className="upload" />
//                               </div>
//                               <small className="form-text text-muted">Allowed JPG, GIF or PNG. Max size of 2MB</small>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6">
//                         <div className="form-group">
//                           <label>First Name</label>
//                           <input type="text" className="form-control" defaultValue="Jonathan" />
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6">
//                         <div className="form-group">
//                           <label>Last Name</label>
//                           <input type="text" className="form-control" defaultValue="Doe" />
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6">
//                         <div className="form-group">
//                           <label>Date of Birth</label>
//                           <div className="cal-icon">
//                           <DatePicker
//                                     className="form-control datetimepicker"
//                                     suffixIcon={null}
//                                     placeholder="24/11/2024"
//                                   />
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6">
//                         <div className="form-group">
//                           <label>Blood Group</label>
//                           <select className="form-control select">
//                             <option>A-</option>
//                             <option>A+</option>
//                             <option>B-</option>
//                             <option>B+</option>
//                             <option>AB-</option>
//                             <option>AB+</option>
//                             <option>O-</option>
//                             <option>O+</option>
//                           </select>
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6">
//                         <div className="form-group">
//                           <label>Email ID</label>
//                           <input type="email" className="form-control" defaultValue="jonathandoe@example.com" />
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6">
//                         <div className="form-group">
//                           <label>Mobile</label>
//                           <input type="text" defaultValue="+1 202-555-0125" className="form-control" />
//                         </div>
//                       </div>
//                       <div className="col-12">
//                         <div className="form-group">
//                           <label>Address</label>
//                           <input type="text" className="form-control" defaultValue="806 Twin Willow Lane" />
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6">
//                         <div className="form-group">
//                           <label>City</label>
//                           <input type="text" className="form-control" defaultValue="Old Forge" />
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6">
//                         <div className="form-group">
//                           <label>State</label>
//                           <input type="text" className="form-control" defaultValue="Newyork" />
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6">
//                         <div className="form-group">
//                           <label>Zip Code</label>
//                           <input type="text" className="form-control" defaultValue={13420} />
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6">
//                         <div className="form-group">
//                           <label>Country</label>
//                           <input type="text" className="form-control" defaultValue="United States" />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="submit-section">
//                       <button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
//                     </div>
//                   </form>
//                   {/* /Profile Settings Form */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <Footer {...props} /> */}
//     </div>
//   );
// };

// export default ProfileSetting;







import React, { useEffect, useState } from "react";
// import IMG01 from "../../../../assets/images/patient.jpg";
import { Link } from "react-router-dom";


/* eslint-disable react/prop-types */
import DoctorSidebar from "../sidebar/index";
import StickyBox from "react-sticky-box";

import Footer from "../../footer";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import { user } from "../../../../admin/components/imagepath";
import { DatePicker } from "antd";
// import { Link } from "react-router-dom/cjs/react-router-dom";
import HomeFiveHeader from "../../home/home-five/header";


const Profile = (props) => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    bloodGroup: '',
    email: '',
    mobile: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    profile_picture: '' // Added this line
  });

  const [image, setImage] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('userData');
    if (data) {
      setUserData(JSON.parse(data));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Update the image state
        setUserData(prevData => ({
          ...prevData,
          profile_picture: reader.result // Optionally update userData
        }));
      };
      reader.readAsDataURL(file);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Profile updated:', result);

      // Optionally update local storage if needed
      localStorage.setItem('userData', JSON.stringify(userData));

    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div>
      <HomeFiveHeader />
      <div className="content">
        <div className="container-fluid">
          <div className="row">

            {/* Profile Sidebar */}
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={50} offsetBottom={20}>
                <div className="appointments">
                  <DoctorSidebar />
                </div>
              </StickyBox>
            </div>

            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="row form-row">



                      <div className="col-12 col-md-12">
                        <div className="form-group">

                          <div className="change-avatar">
                            <div className="profile-img">
                              <img src={userData.profile_picture} alt="User" />
                            </div>
                            <div className="upload-img">
                              <div className="change-photo-btn">
                                <span>
                                  <i className="fa fa-upload"></i> Upload Photo
                                </span>
                                <input
                                  type="file"
                                  className="upload"
                                  onChange={handleImageChange}
                                  accept="image/*"
                                />
                              </div>
                              <small className="form-text text-muted">
                                Allowed JPG, GIF or PNG. Max size of 2MB
                              </small>
                            </div>
                          </div>

                        </div>
                      </div>
                      {/* <hr className="my-4" /> */}
                      <h4 style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: '#009bff',
                        borderBottom: '2px solid #007bff',
                        paddingBottom: '5px',
                        marginBottom: '20px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}>General </h4>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={userData.first_name}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={userData.last_name}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Username</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={userData.username}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>College Email ID</label>
                          <input
                            type="email"
                            className="form-control"
                            defaultValue={userData.email}
                            readOnly
                            style={{ color: 'grey' }}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Mobile</label>
                          <input
                            type="text"
                            defaultValue=""
                            className="form-control"
                          />
                        </div>
                      </div>

                      {userData.user_type === "mentor" && (
                        <>


                          {/* <hr className="my-4" /> */}
                          <h4 style={{
                            fontSize: '1rem',
                            fontWeight: 600,
                            color: '#009bff',
                            borderBottom: '2px solid #007bff',
                            paddingBottom: '5px',
                            marginBottom: '20px',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                          }}>Session Fees</h4>


                          <div className="col-12 col-md-6">
                            <div className="form-group">
                              <label>Currency</label>
                              <select className="form-control" defaultValue={userData.currency}>
                                <option value="INR">INR</option>
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="form-group">
                              <label>Session Fee</label>
                              <input
                                type="number"
                                className="form-control"
                                defaultValue={userData.session_fee}
                              />
                            </div>
                          </div>

                          {/* <hr className="my-4" /> */}
                          <h4 style={{
                            fontSize: '1rem',
                            fontWeight: 600,
                            color: '#009bff',
                            borderBottom: '2px solid #007bff',
                            paddingBottom: '5px',
                            marginBottom: '20px',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                          }}>
                            Academic Information
                          </h4>
                          {/* <h4>Academic Information</h4> */}



                          <div className="col-12 col-md-6">
                            <div className="form-group">
                              <label>Country</label>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue={userData.country}
                              />
                            </div>
                          </div>


                          <div className="col-12 col-md-6">
                            <div className="form-group">
                              <label>University</label>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue={userData.university}
                              />
                            </div>
                          </div>

                          <div className="col-12 col-md-6">
                            <div className="form-group">
                              <label>College</label>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue={userData.college}
                              />
                            </div>
                          </div>

                          <div className="col-12 col-md-6">
                            <div className="form-group">
                              <label>Degree</label>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue={userData.degree}
                              />
                            </div>
                          </div>

                          <div className="col-12 col-md-6">
                            <div className="form-group">
                              <label>Major</label>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue={userData.major}
                              />
                            </div>
                          </div>


                          <div className="col-12 col-md-6">
                            <div className="form-group">
                              <label>Year of Admission</label>
                              <input
                                type="number"
                                className="form-control"
                                defaultValue={userData.year_of_admission}
                              />
                            </div>
                          </div>


                          {/* <hr className="my-4" /> */}
                          <h4 style={{
                            fontSize: '1rem',
                            fontWeight: 600,
                            color: '#009bff',
                            borderBottom: '2px solid #007bff',
                            paddingBottom: '5px',
                            marginBottom: '20px',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                          }}>Entrance Exam Information</h4>

                          <div className="col-12 col-md-6">
                            <div className="form-group">
                              <label>Entrance Exam</label>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue={userData.entrance_exam_given}
                              />
                            </div>
                          </div>

                          <div className="col-12 col-md-6">
                            <div className="form-group">
                              <label>Rank</label>
                              <input
                                type="number"
                                className="form-control"
                                defaultValue={userData.rank}
                              />
                            </div>
                          </div>

                          <div className="col-12 col-md-6">
                            <div className="form-group">
                              <label>Score</label>
                              <input
                                type="number"
                                step="0.01"
                                className="form-control"
                                defaultValue={userData.score}
                              />
                            </div>
                          </div>


                          {/* <hr className="my-4" /> */}
                          <h4 style={{
                            fontSize: '1rem',
                            fontWeight: 600,
                            color: '#009bff',
                            borderBottom: '2px solid #007bff',
                            paddingBottom: '5px',
                            marginBottom: '20px',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                          }}>About Me</h4>

                          <div className="col-12 col-md-6">
                            <div className="form-group">
                              <label>About Me</label>
                              <textarea
                                className="form-control"
                                defaultValue={userData.about}
                              ></textarea>
                            </div>
                          </div>



                        </>
                      )}








                    </div>
                    <div className="submit-section">
                      <button
                        type="submit"
                        className="btn btn-primary submit-btn"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;


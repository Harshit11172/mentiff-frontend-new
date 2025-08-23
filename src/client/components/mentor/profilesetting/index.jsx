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







// import React, { useEffect, useState } from "react";
// // import IMG01 from "../../../../assets/images/patient.jpg";
// import { Link } from "react-router-dom";


// /* eslint-disable react/prop-types */
// import DoctorSidebar from "../sidebar/index";
// import StickyBox from "react-sticky-box";

// import Footer from "../../footer";
// import { useDropzone } from "react-dropzone";
// import { useCallback } from "react";
// import { user } from "../../../../admin/components/imagepath";
// import { DatePicker } from "antd";
// // import { Link } from "react-router-dom/cjs/react-router-dom";
// import HomeFiveHeader from "../../home/home-five/header";


// const Profile = (props) => {
//   const [userData, setUserData] = useState({
//     firstName: '',
//     lastName: '',
//     dob: '',
//     bloodGroup: '',
//     email: '',
//     mobile: '',
//     address: '',
//     city: '',
//     state: '',
//     zipCode: '',
//     country: '',
//     profile_picture: '' // Added this line
//   });

//   const [image, setImage] = useState('');

//   useEffect(() => {
//     const data = localStorage.getItem('userData');
//     if (data) {
//       setUserData(JSON.parse(data));
//     }
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result); // Update the image state
//         setUserData(prevData => ({
//           ...prevData,
//           profile_picture: reader.result // Optionally update userData
//         }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('YOUR_API_ENDPOINT', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const result = await response.json();
//       console.log('Profile updated:', result);

//       // Optionally update local storage if needed
//       localStorage.setItem('userData', JSON.stringify(userData));

//     } catch (error) {
//       console.error('Error updating profile:', error);
//     }
//   };

//   return (
//     <div>
//       <HomeFiveHeader />
//       <div className="content">
//         <div className="container-fluid">
//           <div className="row">

//             {/* Profile Sidebar */}
//             <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
//               <StickyBox offsetTop={50} offsetBottom={20}>
//                 <div className="appointments">
//                   <DoctorSidebar />
//                 </div>
//               </StickyBox>
//             </div>

//             <div className="col-md-7 col-lg-8 col-xl-9">
//               <div className="card">
//                 <div className="card-body">
//                   <form>
//                     <div className="row form-row">



//                       <div className="col-12 col-md-12">
//                         <div className="form-group">

//                           <div className="change-avatar">
//                             <div className="profile-img">
//                               <img src={userData.profile_picture} alt="User" />
//                             </div>
//                             <div className="upload-img">
//                               <div className="change-photo-btn">
//                                 <span>
//                                   <i className="fa fa-upload"></i> Upload Photo
//                                 </span>
//                                 <input
//                                   type="file"
//                                   className="upload"
//                                   onChange={handleImageChange}
//                                   accept="image/*"
//                                 />
//                               </div>
//                               <small className="form-text text-muted">
//                                 Allowed JPG, GIF or PNG. Max size of 2MB
//                               </small>
//                             </div>
//                           </div>

//                         </div>
//                       </div>
//                       {/* <hr className="my-4" /> */}
//                       <h4 style={{
//                         fontSize: '1rem',
//                         fontWeight: 600,
//                         color: '#009bff',
//                         borderBottom: '2px solid #007bff',
//                         paddingBottom: '5px',
//                         marginBottom: '20px',
//                         textTransform: 'uppercase',
//                         letterSpacing: '1px'
//                       }}>General </h4>
//                       <div className="col-12 col-md-6">
//                         <div className="form-group">
//                           <label>First Name</label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             defaultValue={userData.first_name}
//                           />
//                         </div>
//                       </div>

//                       <div className="col-12 col-md-6">
//                         <div className="form-group">
//                           <label>Last Name</label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             defaultValue={userData.last_name}
//                           />
//                         </div>
//                       </div>

//                       <div className="col-12 col-md-6">
//                         <div className="form-group">
//                           <label>Username</label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             defaultValue={userData.username}
//                           />
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6">
//                         <div className="form-group">
//                           <label>College Email ID</label>
//                           <input
//                             type="email"
//                             className="form-control"
//                             defaultValue={userData.email}
//                             readOnly
//                             style={{ color: 'grey' }}
//                           />
//                         </div>
//                       </div>

//                       <div className="col-12 col-md-6">
//                         <div className="form-group">
//                           <label>Mobile</label>
//                           <input
//                             type="text"
//                             defaultValue=""
//                             className="form-control"
//                           />
//                         </div>
//                       </div>

//                       {userData.user_type === "mentor" && (
//                         <>

//                           {/* <hr className="my-4" /> */}
//                           <h4 style={{
//                             fontSize: '1rem',
//                             fontWeight: 600,
//                             color: '#009bff',
//                             borderBottom: '2px solid #007bff',
//                             paddingBottom: '5px',
//                             marginBottom: '20px',
//                             textTransform: 'uppercase',
//                             letterSpacing: '1px'
//                           }}>About Me</h4>

//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>About Me</label>
//                               <textarea
//                                 className="form-control"
//                                 defaultValue={userData.about}
//                               ></textarea>
//                             </div>
//                           </div>

//                           {/* <hr className="my-4" /> */}
                          
                          
//                           {/* <h4 style={{
//                             fontSize: '1rem',
//                             fontWeight: 600,
//                             color: '#009bff',
//                             borderBottom: '2px solid #007bff',
//                             paddingBottom: '5px',
//                             marginBottom: '20px',
//                             textTransform: 'uppercase',
//                             letterSpacing: '1px'
//                           }}>Session Fees</h4>


//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>Currency</label>
//                               <select className="form-control" defaultValue={userData.currency}>
//                                 <option value="INR">INR</option>
//                                 <option value="USD">USD</option>
//                                 <option value="EUR">EUR</option>
//                               </select>
//                             </div>
//                           </div>
//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>Session Fee</label>
//                               <input
//                                 type="number"
//                                 className="form-control"
//                                 defaultValue={userData.session_fee}
//                               />
//                             </div>
//                           </div> */}

//                           {/* <hr className="my-4" /> */}
//                           <h4 style={{
//                             fontSize: '1rem',
//                             fontWeight: 600,
//                             color: '#009bff',
//                             borderBottom: '2px solid #007bff',
//                             paddingBottom: '5px',
//                             marginBottom: '20px',
//                             textTransform: 'uppercase',
//                             letterSpacing: '1px'
//                           }}>
//                             Academic Information
//                           </h4>
//                           {/* <h4>Academic Information</h4> */}



//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>Country</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 defaultValue={userData.country}
//                               />
//                             </div>
//                           </div>


//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>University</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 defaultValue={userData.university}
//                               />
//                             </div>
//                           </div>

//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>College</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 defaultValue={userData.college}
//                               />
//                             </div>
//                           </div>

//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>Degree</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 defaultValue={userData.degree}
//                               />
//                             </div>
//                           </div>

//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>Major</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 defaultValue={userData.major}
//                               />
//                             </div>
//                           </div>


//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>Year of Admission</label>
//                               <input
//                                 type="number"
//                                 className="form-control"
//                                 defaultValue={userData.year_of_admission}
//                               />
//                             </div>
//                           </div>


//                           {/* <hr className="my-4" /> */}
                         
//                          <h4 style={{
//                             fontSize: '1rem',
//                             fontWeight: 600,
//                             color: '#009bff',
//                             borderBottom: '2px solid #007bff',
//                             paddingBottom: '5px',
//                             marginBottom: '20px',
//                             textTransform: 'uppercase',
//                             letterSpacing: '1px'
//                           }}>Entrance Exam Information</h4>

//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>Entrance Exam</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 defaultValue={userData.entrance_exam_given}
//                               />
//                             </div>
//                           </div>

//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>Rank</label>
//                               <input
//                                 type="number"
//                                 className="form-control"
//                                 defaultValue={userData.rank}
//                               />
//                             </div>
//                           </div>

//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>Score</label>
//                               <input
//                                 type="number"
//                                 step="0.01"
//                                 className="form-control"
//                                 defaultValue={userData.score}
//                               />
//                             </div>
//                           </div>






//                         </>
//                       )}








//                     </div>
//                     <div className="submit-section">
//                       <button
//                         type="submit"
//                         className="btn btn-primary submit-btn"
//                       >
//                         Save Changes
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;




















// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import DoctorSidebar from "../sidebar/index";
// import StickyBox from "react-sticky-box";
// import Footer from "../../footer";
// import { useDropzone } from "react-dropzone";
// import { useCallback } from "react";
// import { user } from "../../../../admin/components/imagepath";
// import { DatePicker } from "antd";
// import HomeFiveHeader from "../../home/home-five/header";

// const Profile = (props) => {
//   const [userData, setUserData] = useState({
//     firstName: '',
//     lastName: '',
//     dob: '',
//     bloodGroup: '',
//     email: '',
//     mobile: '',
//     address: '',
//     city: '',
//     state: '',
//     zipCode: '',
//     country: '',
//     profile_picture: '',
//     first_name: '',
//     last_name: '',
//     username: '',
//     about: '',
//     currency: 'INR',
//     session_fee: '',
//     university: '',
//     college: '',
//     degree: '',
//     major: '',
//     year_of_admission: '',
//     entrance_exam_given: '',
//     rank: '',
//     score: '',
//     user_type: ''
//   });

//   const [mentorData, setMentorData] = useState({ id: '' });
//   const [image, setImage] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const data = localStorage.getItem('userData');
//     const mentor = localStorage.getItem('mentorData');
    
//     if (data) {
//       setUserData(JSON.parse(data));
//     }
    
//     if (mentor) {
//       setMentorData(JSON.parse(mentor));
//     }
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result);
//         setUserData(prevData => ({
//           ...prevData,
//           profile_picture: reader.result
//         }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch(
//         `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/update/mentor/${userData.mentor_id}/`,
//         {
//           method: 'PUT', // or 'PATCH' depending on your API
//           headers: {
//             'Content-Type': 'application/json',
//             // Add authorization header if needed
//             // 'Authorization': `Bearer ${token}`,
//           },
//           body: JSON.stringify(userData),
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const result = await response.json();
//       console.log('Profile updated successfully:', result);

//       // Update local storage with the updated data
//       localStorage.setItem('userData', JSON.stringify(userData));

//       // Show success message (you can use a toast library or state for this)
//       alert('Profile updated successfully!');

//     } catch (error) {
//       console.error('Error updating profile:', error);
//       alert('Failed to update profile. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <HomeFiveHeader />
//       <div className="content">
//         <div className="container-fluid">
//           <div className="row">

//             {/* Profile Sidebar */}
//             <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
//               <StickyBox offsetTop={50} offsetBottom={20}>
//                 <div className="appointments">
//                   <DoctorSidebar />
//                 </div>
//               </StickyBox>
//             </div>

//             <div className="col-md-7 col-lg-8 col-xl-9">
//               <div className="card">
//                 <div className="card-body">
//                   <form onSubmit={handleSubmit}>
//                     <div className="row form-row">

//                       <div className="col-12 col-md-12">
//                         <div className="form-group">
//                           <div className="change-avatar">
//                             <div className="profile-img">
//                               <img src={userData.profile_picture || image} alt="User" />
//                             </div>
//                             <div className="upload-img">
//                               <div className="change-photo-btn">
//                                 <span>
//                                   <i className="fa fa-upload"></i> Upload Photo
//                                 </span>
//                                 <input
//                                   type="file"
//                                   className="upload"
//                                   onChange={handleImageChange}
//                                   accept="image/*"
//                                 />
//                               </div>
//                               <small className="form-text text-muted">
//                                 Allowed JPG, GIF or PNG. Max size of 2MB
//                               </small>
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       <h4 style={{
//                         fontSize: '1rem',
//                         fontWeight: 600,
//                         color: '#009bff',
//                         borderBottom: '2px solid #007bff',
//                         paddingBottom: '5px',
//                         marginBottom: '20px',
//                         textTransform: 'uppercase',
//                         letterSpacing: '1px'
//                       }}>General</h4>

//                       <div className="col-12 col-md-6">
//                         <div className="form-group">
//                           <label>First Name</label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="first_name"
//                             value={userData.first_name}
//                             onChange={handleChange}
//                           />
//                         </div>
//                       </div>

//                       <div className="col-12 col-md-6">
//                         <div className="form-group">
//                           <label>Last Name</label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="last_name"
//                             value={userData.last_name}
//                             onChange={handleChange}
//                           />
//                         </div>
//                       </div>

//                       <div className="col-12 col-md-6">
//                         <div className="form-group">
//                           <label>Username</label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="username"
//                             value={userData.username}
//                             onChange={handleChange}
//                           />
//                         </div>
//                       </div>

//                       <div className="col-12 col-md-6">
//                         <div className="form-group">
//                           <label>College Email ID</label>
//                           <input
//                             type="email"
//                             className="form-control"
//                             name="email"
//                             value={userData.email}
//                             readOnly
//                             style={{ color: 'grey' }}
//                           />
//                         </div>
//                       </div>

//                       <div className="col-12 col-md-6">
//                         <div className="form-group">
//                           <label>Mobile</label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="mobile"
//                             value={userData.mobile}
//                             onChange={handleChange}
//                           />
//                         </div>
//                       </div>

//                       {userData.user_type === "mentor" && (
//                         <>
//                           <h4 style={{
//                             fontSize: '1rem',
//                             fontWeight: 600,
//                             color: '#009bff',
//                             borderBottom: '2px solid #007bff',
//                             paddingBottom: '5px',
//                             marginBottom: '20px',
//                             textTransform: 'uppercase',
//                             letterSpacing: '1px'
//                           }}>About Me</h4>

//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>About Me</label>
//                               <textarea
//                                 className="form-control"
//                                 name="about"
//                                 value={userData.about}
//                                 onChange={handleChange}
//                               ></textarea>
//                             </div>
//                           </div>

//                           <h4 style={{
//                             fontSize: '1rem',
//                             fontWeight: 600,
//                             color: '#009bff',
//                             borderBottom: '2px solid #007bff',
//                             paddingBottom: '5px',
//                             marginBottom: '20px',
//                             textTransform: 'uppercase',
//                             letterSpacing: '1px'
//                           }}>Academic Information</h4>

//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>Country</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 name="country"
//                                 value={userData.country}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                           </div>

//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>University</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 name="university"
//                                 value={userData.university}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                           </div>

//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>College</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 name="college"
//                                 value={userData.college}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                           </div>

//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>Degree</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 name="degree"
//                                 value={userData.degree}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                           </div>

//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>Major</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 name="major"
//                                 value={userData.major}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                           </div>

//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>Year of Admission</label>
//                               <input
//                                 type="number"
//                                 className="form-control"
//                                 name="year_of_admission"
//                                 value={userData.year_of_admission}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                           </div>

//                           <h4 style={{
//                             fontSize: '1rem',
//                             fontWeight: 600,
//                             color: '#009bff',
//                             borderBottom: '2px solid #007bff',
//                             paddingBottom: '5px',
//                             marginBottom: '20px',
//                             textTransform: 'uppercase',
//                             letterSpacing: '1px'
//                           }}>Entrance Exam Information</h4>

//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>Entrance Exam</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 name="entrance_exam_given"
//                                 value={userData.entrance_exam_given}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                           </div>

//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>Rank</label>
//                               <input
//                                 type="number"
//                                 className="form-control"
//                                 name="rank"
//                                 value={userData.rank}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                           </div>

//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>Score</label>
//                               <input
//                                 type="number"
//                                 step="0.01"
//                                 className="form-control"
//                                 name="score"
//                                 value={userData.score}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                           </div>
//                         </>
//                       )}
//                     </div>

//                     <div className="submit-section">
//                       <button
//                         type="submit"
//                         className="btn btn-primary submit-btn"
//                         disabled={loading}
//                       >
//                         {loading ? 'Saving...' : 'Save Changes'}
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;














// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import DoctorSidebar from "../sidebar/index";
// import StickyBox from "react-sticky-box";
// import Footer from "../../footer";
// import { useDropzone } from "react-dropzone";
// import { useCallback } from "react";
// import { user } from "../../../../admin/components/imagepath";
// import { DatePicker } from "antd";
// import HomeFiveHeader from "../../home/home-five/header";

// const Profile = (props) => {
//   const [userData, setUserData] = useState({
//     firstName: '',
//     lastName: '',
//     dob: '',
//     bloodGroup: '',
//     email: '',
//     mobile: '',
//     address: '',
//     city: '',
//     state: '',
//     zipCode: '',
//     country: '',
//     profile_picture: '',
//     first_name: '',
//     last_name: '',
//     username: '',
//     about: '',
//     currency: 'INR',
//     session_fee: '',
//     university: '',
//     college: '',
//     degree: '',
//     major: '',
//     year_of_admission: '',
//     entrance_exam_given: '',
//     rank: '',
//     score: '',
//     user_type: '',
//     user: '' // Add user field
//   });

//   const [mentorData, setMentorData] = useState({ id: '' });
//   const [image, setImage] = useState('');
//   const [profileImageFile, setProfileImageFile] = useState(null); // Store actual file
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const data = localStorage.getItem('userData');
//     const mentor = localStorage.getItem('mentorData');
    
//     if (data) {
//       const parsedData = JSON.parse(data);
//       setUserData({
//         ...parsedData,
//         user: parsedData.id || parsedData.user_id || '' // Set user field from stored data
//       });
//     }
    
//     if (mentor) {
//       setMentorData(JSON.parse(mentor));
//     }
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setProfileImageFile(file); // Store the actual file
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result); // For preview only
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // Create FormData for file upload
//       const formData = new FormData();
      
//       // Add all text fields to formData
//       Object.keys(userData).forEach(key => {
//         if (key !== 'profile_picture' && userData[key] !== null && userData[key] !== '') {
//           formData.append(key, userData[key]);
//         }
//       });
      
//       // Add the profile image file if selected
//       if (profileImageFile) {
//         formData.append('profile_picture', profileImageFile);
//       }

//       const response = await fetch(
//         `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/update/mentor/${userData.mentor_id}/`,
//         {
//           method: 'PUT', // or 'PATCH' depending on your API
//           headers: {
//             // Don't set Content-Type header when using FormData
//             // 'Content-Type': 'multipart/form-data', // Browser will set this automatically
//             // Add authorization header if needed
//             // 'Authorization': `Bearer ${token}`,
//           },
//           body: formData, // Use FormData instead of JSON
//         }
//       );

//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error('Error response:', errorData);
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const result = await response.json();
//       console.log('Profile updated successfully:', result);

//       // Update local storage with the updated data
//       localStorage.setItem('userData', JSON.stringify({
//         ...userData,
//         profile_picture: result.profile_picture || userData.profile_picture
//       }));

//       // Show success message
//       alert('Profile updated successfully!');

//     } catch (error) {
//       console.error('Error updating profile:', error);
//       alert('Failed to update profile. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <HomeFiveHeader />
//       <div className="content">
//         <div className="container-fluid">
//           <div className="row">

//             {/* Profile Sidebar */}
//             <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
//               <StickyBox offsetTop={50} offsetBottom={20}>
//                 <div className="appointments">
//                   <DoctorSidebar />
//                 </div>
//               </StickyBox>
//             </div>

//             <div className="col-md-7 col-lg-8 col-xl-9">
//               <div className="card">
//                 <div className="card-body">
//                   <form onSubmit={handleSubmit}>
//                     <div className="row form-row">

//                       <div className="col-12 col-md-12">
//                         <div className="form-group">
//                           <div className="change-avatar">
//                             <div className="profile-img">
//                               <img src={userData.profile_picture || image} alt="User" />
//                             </div>
//                             <div className="upload-img">
//                               <div className="change-photo-btn">
//                                 <span>
//                                   <i className="fa fa-upload"></i> Upload Photo
//                                 </span>
//                                 <input
//                                   type="file"
//                                   className="upload"
//                                   onChange={handleImageChange}
//                                   accept="image/*"
//                                 />
//                               </div>
//                               <small className="form-text text-muted">
//                                 Allowed JPG, GIF or PNG. Max size of 2MB
//                               </small>
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       <h4 style={{
//                         fontSize: '1rem',
//                         fontWeight: 600,
//                         color: '#009bff',
//                         borderBottom: '2px solid #007bff',
//                         paddingBottom: '5px',
//                         marginBottom: '20px',
//                         textTransform: 'uppercase',
//                         letterSpacing: '1px'
//                       }}>General</h4>

//                       <div className="col-12 col-md-6">
//                         <div className="form-group">
//                           <label>First Name</label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="first_name"
//                             value={userData.first_name}
//                             onChange={handleChange}
//                           />
//                         </div>
//                       </div>

//                       <div className="col-12 col-md-6">
//                         <div className="form-group">
//                           <label>Last Name</label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="last_name"
//                             value={userData.last_name}
//                             onChange={handleChange}
//                           />
//                         </div>
//                       </div>

//                       <div className="col-12 col-md-6">
//                         <div className="form-group">
//                           <label>Username</label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="username"
//                             value={userData.username}
//                             onChange={handleChange}
//                           />
//                         </div>
//                       </div>

//                       <div className="col-12 col-md-6">
//                         <div className="form-group">
//                           <label>College Email ID</label>
//                           <input
//                             type="email"
//                             className="form-control"
//                             name="email"
//                             value={userData.email}
//                             readOnly
//                             style={{ color: 'grey' }}
//                           />
//                         </div>
//                       </div>

//                       <div className="col-12 col-md-6">
//                         <div className="form-group">
//                           <label>Mobile</label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             name="mobile"
//                             value={userData.mobile}
//                             onChange={handleChange}
//                           />
//                         </div>
//                       </div>

//                       {userData.user_type === "mentor" && (
//                         <>
//                           <h4 style={{
//                             fontSize: '1rem',
//                             fontWeight: 600,
//                             color: '#009bff',
//                             borderBottom: '2px solid #007bff',
//                             paddingBottom: '5px',
//                             marginBottom: '20px',
//                             textTransform: 'uppercase',
//                             letterSpacing: '1px'
//                           }}>About Me</h4>

//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>About Me</label>
//                               <textarea
//                                 className="form-control"
//                                 name="about"
//                                 value={userData.about}
//                                 onChange={handleChange}
//                               ></textarea>
//                             </div>
//                           </div>

//                           <h4 style={{
//                             fontSize: '1rem',
//                             fontWeight: 600,
//                             color: '#009bff',
//                             borderBottom: '2px solid #007bff',
//                             paddingBottom: '5px',
//                             marginBottom: '20px',
//                             textTransform: 'uppercase',
//                             letterSpacing: '1px'
//                           }}>Academic Information</h4>

//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>Country</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 name="country"
//                                 value={userData.country}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                           </div>

//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>University</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 name="university"
//                                 value={userData.university}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                           </div>

//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>College</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 name="college"
//                                 value={userData.college}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                           </div>

//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>Degree</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 name="degree"
//                                 value={userData.degree}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                           </div>

//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>Major</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 name="major"
//                                 value={userData.major}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                           </div>

//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>Year of Admission</label>
//                               <input
//                                 type="number"
//                                 className="form-control"
//                                 name="year_of_admission"
//                                 value={userData.year_of_admission}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                           </div>

//                           <h4 style={{
//                             fontSize: '1rem',
//                             fontWeight: 600,
//                             color: '#009bff',
//                             borderBottom: '2px solid #007bff',
//                             paddingBottom: '5px',
//                             marginBottom: '20px',
//                             textTransform: 'uppercase',
//                             letterSpacing: '1px'
//                           }}>Entrance Exam Information</h4>

//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>Entrance Exam</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 name="entrance_exam_given"
//                                 value={userData.entrance_exam_given}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                           </div>

//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>Rank</label>
//                               <input
//                                 type="number"
//                                 className="form-control"
//                                 name="rank"
//                                 value={userData.rank}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                           </div>

//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>Score</label>
//                               <input
//                                 type="number"
//                                 step="0.01"
//                                 className="form-control"
//                                 name="score"
//                                 value={userData.score}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                           </div>
//                         </>
//                       )}
//                     </div>

//                     <div className="submit-section">
//                       <button
//                         type="submit"
//                         className="btn btn-primary submit-btn"
//                         disabled={loading}
//                       >
//                         {loading ? 'Saving...' : 'Save Changes'}
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;



























import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DoctorSidebar from "../sidebar/index";
import StickyBox from "react-sticky-box";
import Footer from "../../footer";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import { user } from "../../../../admin/components/imagepath";
import { DatePicker } from "antd";
import HomeFiveHeader from "../../home/home-five/header";

const Profile = (props) => {
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    dob: '',
    bloodGroup: '',
    email: '',
    mobile: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    profile_picture: '',
    username: '',
    about: '',
    currency: 'INR',
    session_fee: '',
    university: '',
    college: '',
    degree: '',
    major: '',
    year_of_admission: '',
    entrance_exam_given: '',
    rank: '',
    score: '',
    user_type: '',
    user: '' // Add user field
  });

  const [mentorData, setMentorData] = useState({ id: '' });
  const [previewImage, setPreviewImage] = useState(''); // For image preview
  const [profileImageFile, setProfileImageFile] = useState(null); // Store actual file
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({}); // Add error state
  const [originalData, setOriginalData] = useState({}); // Store original data for comparison

  useEffect(() => {
    const data = localStorage.getItem('userData');
    const mentor = localStorage.getItem('mentorData');
    
    if (data) {
      const parsedData = JSON.parse(data);
      console.log('Parsed userData:', parsedData); // Debug log
      
      const processedData = {
        ...parsedData,
        user: parsedData.id || parsedData.user_id || parsedData.user || '' // Try multiple possible fields
      };
      
      setUserData(processedData);
      setOriginalData(processedData); // Store original data
      setPreviewImage(processedData.profile_picture || ''); // Initialize preview with existing image
    }
    
    if (mentor) {
      const parsedMentor = JSON.parse(mentor);
      console.log('Parsed mentorData:', parsedMentor); // Debug log
      setMentorData(parsedMentor);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name] || (errors.user && errors.user[name])) {
      setErrors(prevErrors => {
        const newErrors = { ...prevErrors };
        if (newErrors[name]) delete newErrors[name];
        if (newErrors.user && newErrors.user[name]) {
          delete newErrors.user[name];
          if (Object.keys(newErrors.user).length === 0) delete newErrors.user;
        }
        return newErrors;
      });
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImageFile(file); // Store the actual file
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result); // Set preview image for immediate display
      };
      reader.readAsDataURL(file);
    }
  };

  // Helper function to check if a field has changed
  const hasFieldChanged = (fieldName, newValue, originalValue) => {
    if (newValue === '' || newValue === null || newValue === undefined) return false;
    return newValue !== originalValue;
  };

  // Helper function to convert string to appropriate type
  const convertValue = (value, type = 'string') => {
    if (value === '' || value === null || value === undefined) return undefined;
    
    switch (type) {
      case 'number':
        const num = Number(value);
        return isNaN(num) ? undefined : num;
      case 'integer':
        const int = parseInt(value);
        return isNaN(int) ? undefined : int;
      default:
        return value;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({}); // Clear previous errors

    try {
      console.log('UserData:', userData); // Debug log
      
      // Prepare only changed fields
      const updateData = {};
      const userUpdateData = {};
      let newProfilePictureUrl = userData.profile_picture; // Keep track of new profile picture URL

      // Check mentor fields that have changed
      const mentorFieldMappings = [
        { frontend: 'mobile', backend: 'phone_number', type: 'string' },
        { frontend: 'country', backend: 'country', type: 'string' },
        { frontend: 'university', backend: 'university', type: 'string' },
        { frontend: 'degree', backend: 'degree', type: 'string' },
        { frontend: 'major', backend: 'major', type: 'string' },
        { frontend: 'year_of_admission', backend: 'year_of_admission', type: 'integer' },
        { frontend: 'entrance_exam_given', backend: 'entrance_exam_given', type: 'string' },
        { frontend: 'rank', backend: 'rank', type: 'integer' },
        { frontend: 'score', backend: 'score', type: 'number' },
        { frontend: 'about', backend: 'about', type: 'string' }
      ];

      mentorFieldMappings.forEach(({ frontend, backend, type }) => {
        if (hasFieldChanged(frontend, userData[frontend], originalData[frontend])) {
          const convertedValue = convertValue(userData[frontend], type);
          if (convertedValue !== undefined) {
            updateData[backend] = convertedValue;
          }
        }
      });

      // Check user fields that have changed (but exclude email and username to avoid conflicts)
      const userFieldMappings = [
        { frontend: 'first_name', backend: 'first_name', type: 'string' },
        { frontend: 'last_name', backend: 'last_name', type: 'string' }
        // Removed username and email to avoid conflicts
      ];

      userFieldMappings.forEach(({ frontend, backend, type }) => {
        if (hasFieldChanged(frontend, userData[frontend], originalData[frontend])) {
          const convertedValue = convertValue(userData[frontend], type);
          if (convertedValue !== undefined) {
            userUpdateData[backend] = convertedValue;
          }
        }
      });

      // Add user data to update payload if there are changes
      if (Object.keys(userUpdateData).length > 0) {
        updateData.user = userUpdateData;
      }

      console.log('Update data being sent:', updateData);

      // If no changes detected, just show message
      if (Object.keys(updateData).length === 0 && !profileImageFile) {
        alert('No changes detected to update.');
        setLoading(false);
        return;
      }

      // Handle profile picture separately if uploaded
      if (profileImageFile) {
        const imageFormData = new FormData();
        imageFormData.append('profile_picture', profileImageFile);

        const imageResponse = await fetch(
          `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/update/mentor/${userData.mentor_id}/`,
          {
            method: 'PATCH',
            body: imageFormData,
          }
        );

        if (!imageResponse.ok) {
          const imageErrorData = await imageResponse.json();
          console.error('Image update error:', imageErrorData);
          setErrors(imageErrorData);
          setLoading(false);
          return;
        }

        // Get the updated profile picture URL from response
        const imageResult = await imageResponse.json();
        console.log('Image upload response:', imageResult);
        
        // Update the profile picture URL - adjust this based on your API response structure
        if (imageResult.profile_picture) {
          newProfilePictureUrl = imageResult.profile_picture;
        } else if (imageResult.data && imageResult.data.profile_picture) {
          newProfilePictureUrl = imageResult.data.profile_picture;
        }
      }

      // Update other fields if there are changes
      if (Object.keys(updateData).length > 0) {
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/update/mentor/${userData.mentor_id}/`,
          {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              // Add authorization header if needed
              // 'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(updateData),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error response:', errorData);
          setErrors(errorData);
          setLoading(false);
          return;
        }

        const result = await response.json();
        console.log('Profile updated successfully:', result);
      }

      // Update local storage and state with new data including profile picture
      const updatedUserData = { 
        ...userData, 
        profile_picture: newProfilePictureUrl 
      };
      
      // Update localStorage
      localStorage.setItem('userData', JSON.stringify(updatedUserData));
      
      // Update component state
      setUserData(updatedUserData);
      setOriginalData(updatedUserData);
      setPreviewImage(newProfilePictureUrl);

      // Clear the profile image file after successful upload
      if (profileImageFile) {
        setProfileImageFile(null);
      }

      // Show success message
      alert('Profile updated successfully!');

      // Reload the page to refresh navbar and sidebar profile pictures
      window.location.reload();

    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    } finally {
      setLoading(false);
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
                  <form onSubmit={handleSubmit}>
                    <div className="row form-row">

                      <div className="col-12 col-md-12">
                        <div className="form-group">
                          <div className="change-avatar">
                            <div className="profile-img">
                              <img 
                                src={previewImage || userData.profile_picture || '/default-avatar.png'} 
                                alt="User" 
                                style={{ 
                                  width: '100px', 
                                  height: '100px', 
                                  objectFit: 'cover',
                                  borderRadius: '50%'
                                }}
                              />
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
                              {profileImageFile && (
                                <small className="form-text text-success">
                                  New image selected: {profileImageFile.name}
                                </small>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      <h4 style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: '#009bff',
                        borderBottom: '2px solid #007bff',
                        paddingBottom: '5px',
                        marginBottom: '20px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}>General</h4>

                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            type="text"
                            className={`form-control ${errors.user?.first_name ? 'is-invalid' : ''}`}
                            name="first_name"
                            value={userData.first_name}
                            onChange={handleChange}
                          />
                          {errors.user?.first_name && (
                            <div className="invalid-feedback">
                              {errors.user.first_name.join(', ')}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            type="text"
                            className={`form-control ${errors.user?.last_name ? 'is-invalid' : ''}`}
                            name="last_name"
                            value={userData.last_name}
                            onChange={handleChange}
                          />
                          {errors.user?.last_name && (
                            <div className="invalid-feedback">
                              {errors.user.last_name.join(', ')}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Username</label>
                          <input
                            type="text"
                            className={`form-control ${errors.user?.username ? 'is-invalid' : ''}`}
                            name="username"
                            value={userData.username}
                            onChange={handleChange}
                            readOnly
                            style={{ color: 'grey', backgroundColor: '#f8f9fa' }}
                          />
                          {errors.user?.username && (
                            <div className="invalid-feedback">
                              {errors.user.username.join(', ')}
                            </div>
                          )}
                          <small className="form-text text-muted">
                            Username cannot be changed
                          </small>
                        </div>
                      </div>

                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>College Email ID</label>
                          <input
                            type="email"
                            className={`form-control ${errors.user?.email ? 'is-invalid' : ''}`}
                            name="email"
                            value={userData.email}
                            readOnly
                            style={{ color: 'grey', backgroundColor: '#f8f9fa' }}
                          />
                          {errors.user?.email && (
                            <div className="invalid-feedback">
                              {errors.user.email.join(', ')}
                            </div>
                          )}
                          <small className="form-text text-muted">
                            Email cannot be changed
                          </small>
                        </div>
                      </div>

                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Mobile</label>
                          <input
                            type="text"
                            className={`form-control ${errors.phone_number ? 'is-invalid' : ''}`}
                            name="mobile"
                            value={userData.mobile}
                            onChange={handleChange}
                          />
                          {errors.phone_number && (
                            <div className="invalid-feedback">
                              {errors.phone_number.join(', ')}
                            </div>
                          )}
                        </div>
                      </div>

                      {userData.user_type === "mentor" && (
                        <>
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
                                className={`form-control ${errors.about ? 'is-invalid' : ''}`}
                                name="about"
                                value={userData.about}
                                onChange={handleChange}
                              ></textarea>
                              {errors.about && (
                                <div className="invalid-feedback">
                                  {errors.about.join(', ')}
                                </div>
                              )}
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="submit-section">
                      <button
                        type="submit"
                        className="btn btn-primary submit-btn"
                        disabled={loading}
                      >
                        {loading ? 'Saving...' : 'Save Changes'}
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
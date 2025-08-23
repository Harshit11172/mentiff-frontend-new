// import React, { useEffect, useState } from "react";
// import DashboardSidebar from "../sidebar/sidebar.jsx";
// import IMG01 from "../../../../assets/images/patient.jpg";
// import StickyBox from "react-sticky-box";
// import { Link } from "react-router-dom";
// import Footer from "../../../footer.jsx";
// import Header from "../../../header.jsx";
// import HomeFiveHeader from "../../../home/home-five/header";
// import HomeFiveFooter from "../../../home/home-five/footer";


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


//       {/* <Header {...props} /> */}


//       {/* <div className="breadcrumb-bar-two">
//         <div className="container-fluid">
//           <div className="row align-items-start inner-banner">
//             <div className="col-md-12 col-12 text-start">
//               <nav aria-label="breadcrumb" className="page-breadcrumb">
//                 <ol className="breadcrumb">
//                   <li className="breadcrumb-item">
//                     <Link to="/index">Home</Link>
//                   </li>
//                   <li className="breadcrumb-item active" aria-current="page">
//                     Profile Settings
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
//               <StickyBox offsetTop={20} offsetBottom={20}>
//                 <div className="appointments">
//                 <DashboardSidebar />
//                 </div>
//               </StickyBox>
//             </div>

//             {/* Profile Sidebar */}
//             {/* <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
//               <StickyBox offsetTop={50} offsetBottom={20}>
//                 <div className="appointments">
//                   <DoctorSidebar />
//                 </div>
//               </StickyBox>
//             </div> */}


//             <div className="col-md-7 col-lg-8 col-xl-9">
//               <div className="card">
//                 <div className="card-body">
//                   <form>
//                     <div className="row form-row">
//                       <div className="col-12 col-md-12">
//                         <div className="form-group">


//                           {/* <div className="change-avatar">
//                             <div className="profile-img">
//                               <img src={userData.profile_picture} alt="User" />
//                             </div>
//                             <div className="upload-img">
//                               <div className="change-photo-btn">
//                                 <span>
//                                   <i className="fa fa-upload"></i> Upload Photo
//                                 </span>
//                                 <input type="file" className="upload" />
//                               </div>
//                               <small className="form-text text-muted">
//                                 Allowed JPG, GIF or PNG. Max size of 2MB
//                               </small>
//                             </div>
//                           </div> */}

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
//                           <label>Mobile</label>
//                           <input
//                             type="text"
//                             defaultValue=""
//                             className="form-control"
//                           />
//                         </div>
//                       </div>


//                       <div className="col-12 col-md-6">
//                         <div className="form-group">
//                           <label>Email ID</label>
//                           <input
//                             type="email"
//                             className="form-control"
//                             defaultValue={userData.email}
//                             readOnly
//                             style={{ color: 'grey' }}
//                           />
//                         </div>
//                       </div>

//                       {userData.user_type === "mentor" && (
//                         <>
//                           <div className="col-12 col-md-6">
//                             <div className="form-group">
//                               <label>Email ID</label>
//                               <input
//                                 type="email"
//                                 className="form-control"
//                                 defaultValue={userData.university}
//                                 readOnly
//                                 style={{ color: 'grey' }}
//                               />
//                             </div>
//                           </div>

//                           <div className="col-12 col-md-6">
//                         <div className="form-group">
//                           <label>Mobile</label>
//                           <input
//                             type="text"
//                             defaultValue=""
//                             className="form-control"
//                           />
//                         </div>
//                       </div>

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
//        {/* <HomeFiveFooter /> */}
//     </div>
//   );
// };

// export default Profile;























import React, { useEffect, useState } from "react";
import DashboardSidebar from "../sidebar/sidebar.jsx";
import IMG01 from "../../../../assets/images/patient.jpg";
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";
import Footer from "../../../footer.jsx";
import Header from "../../../header.jsx";
import HomeFiveHeader from "../../../home/home-five/header";
import HomeFiveFooter from "../../../home/home-five/footer";

const Profile = (props) => {
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    username: '',


    email: '',
    mobile: '',


    profile_picture: '',
    mentee_id: '',
    user_type: '',

  });

  const [previewImage, setPreviewImage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('userData');
    if (data) {
      const parsedData = JSON.parse(data);
      setUserData(parsedData);
      setPreviewImage(parsedData.profile_picture || '');
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
      // Validate file size (2MB max)
      if (file.size > 2 * 1024 * 1024) {
        setMessage('File size should not exceed 2MB');
        return;
      }

      // Validate file type
      if (!file.type.match(/^image\/(jpeg|jpg|gif|png)$/)) {
        setMessage('Only JPG, GIF, or PNG files are allowed');
        return;
      }

      // Store the actual file for upload
      setSelectedFile(file);

      // Create preview URL for immediate display
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setMessage(''); // Clear any previous error messages
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      // Create FormData object for file upload
      const formData = new FormData();

      // Add all form fields to FormData
      Object.keys(userData).forEach(key => {
        if (key !== 'profile_picture' && userData[key] !== null && userData[key] !== undefined) {
          formData.append(key, userData[key]);
        }
      });

      // Add the file if a new one was selected
      if (selectedFile) {
        formData.append('profile_picture', selectedFile);
      }

      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/update/mentee/${userData.mentee_id}/`,
        {
          method: 'PUT', // or 'PATCH' depending on your API
          body: formData, // Don't set Content-Type header when using FormData
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error('API Error:', errorData);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Profile updated:', result);

      // Update userData with the response data (in case backend returns updated data)
      const updatedUserData = { ...userData, ...result };

      // Update local storage with the new data
      localStorage.setItem('userData', JSON.stringify(updatedUserData));

      setMessage('Profile updated successfully!');

      // Reload the page to show changes
      setTimeout(() => {
        window.location.reload();
      }, 1500);

    } catch (error) {
      console.error('Error updating profile:', error);
      setMessage('Failed to update profile. Please try again.');
    } finally {
      setIsLoading(false);
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
              <StickyBox offsetTop={20} offsetBottom={20}>
                <div className="appointments">
                  <DashboardSidebar />
                </div>
              </StickyBox>
            </div>

            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-body">
                  {/* Display success/error messages */}
                  {message && (
                    <div className={`alert ${message.includes('success') ? 'alert-success' : 'alert-danger'}`}>
                      {message}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="row form-row">
                      <div className="col-12 col-md-12">
                        <div className="form-group">
                          <div className="change-avatar">
                            <div className="profile-img">
                              <img
                                src={previewImage || userData.profile_picture || IMG01}
                                alt="User"
                                style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%' }}
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
                                  accept="image/jpeg,image/jpg,image/gif,image/png"
                                />
                              </div>
                              <small className="form-text text-muted">
                                Allowed JPG, GIF or PNG. Max size of 2MB
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="first_name"
                            value={userData.first_name || ''}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="last_name"
                            value={userData.last_name || ''}
                            onChange={handleChange}
                          />
                        </div>
                      </div>


                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Mobile</label>
                          <input
                            type="text"
                            className="form-control"
                            name="mobile"
                            value={userData.mobile || ''}
                            onChange={handleChange}
                          />

                        </div>
                      </div>



                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Username</label>
                          <input
                            type="text"
                            className="form-control"
                            name="username"
                            value={userData.username || ''}
                            readOnly
                            style={{ color: 'grey', backgroundColor: '#f8f9fa' }}
                          />

                          <small className="form-text text-muted">
                            Username cannot be changed
                          </small>
                        </div>
                      </div>



                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Email ID</label>
                          <input
                            type="email"
                            className="form-control"
                            value={userData.email || ''}
                            readOnly
                            style={{ color: 'grey', backgroundColor: '#f8f9fa' }}
                          />

                          <small className="form-text text-muted">
                            Email cannot be changed
                          </small>
                        </div>
                      </div>

                      {userData.user_type === "mentor" && (
                        <>
                          <div className="col-12 col-md-6">
                            <div className="form-group">
                              <label>University</label>
                              <input
                                type="text"
                                className="form-control"
                                name="university"
                                value={userData.university || ''}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="submit-section">
                      <button
                        type="submit"
                        className="btn btn-primary submit-btn"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Saving...
                          </>
                        ) : (
                          'Save Changes'
                        )}
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
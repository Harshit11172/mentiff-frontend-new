// import React, { useEffect, useState, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";
// import loginBanner from "../../assets/images/login-banner.png";
// import Header from "../header";
// import Footer from "../footer";
// import universitiesData from "./universities.json";
// import countriesData from "./countries.json";
// import degreeData from "./degree.json"
// import Select from 'react-select';

// const Register = (props) => {
//   const location = useLocation();
//   const query = new URLSearchParams(location.search); // Access query parameters from URL
//   const userRole = query.get("user"); // Get the 'user' parameter from the URL
//   const token = query.get("token"); // Get the token from the URL
//   // Set 'role' to userRole if it's null or undefined
//   const role = location.state?.role || userRole; // If role is null, use the userRole from the query string
//   // const isVerified = !!token; // If token exists, consider the user verified
//   const [isVerified, setIsVerified] = useState(false);
//   const [verifiedStatus, setVerifiedStatus] = useState(false);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const [loading, setLoading] = useState(false);
//   console.log("Mentor/Mentee role is? ");
//   console.log(role);
//   const [userDetails, setUserDetails] = useState(null); // To store the fetched user details
//   const [selectedUniversity, setSelectedUniversity] = useState('');
//   const [selectedCountry, setSelectedCountry] = useState('');
//   const [selectedDegree, setSelectedDegree] = useState(null);
//   const [errorMessages, setErrorMessages] = useState([]); // Store error messages here
//   const [successMessages, setSuccessMessages] = useState([]);
//   // const query = new URLSearchParams(location.search); // Access query parameters from URL
//   // const isVerified = query.get("verified") === "true"; // Check if the user is verified

//   // const isVerified = !!token; // If token exists, consider the user verified

//   // const countryOptions = countriesData.map((country) => ({
//   //   value: country.label,
//   //   label: country.label,
//   // }));

//     // Filter countries that have at least one university with non-empty domain
//   const countriesWithUniversities = countriesData.filter((country) => {
//     return universitiesData.some((university) => 
//       university.country === country.label && university.domain !== ""
//     );
//   });

//   const countryOptions = countriesWithUniversities.map((country) => ({
//     value: country.label,
//     label: country.label,
//   }));

//   const degreeOptions = degreeData.map((degree) => ({
//     value: degree.value,
//     label: degree.label,
//   }));

//   // Filter universities based on the selected country
//   // const filteredUnivOptions = selectedCountry
//   //   ? universitiesData.filter((university) => university.country === selectedCountry.label)
//   //   : [];

//   // With this updated code:
//   // const filteredUnivOptions = selectedCountry
//   //   ? universitiesData.filter((university) =>
//   //     university.country === selectedCountry.label && university.display === true
//   //   )
//   //   : universitiesData.filter((university) => university.display === true);

//   const filteredUnivOptions = selectedCountry
//   ? universitiesData.filter(
//       (university) =>
//         university.country === selectedCountry.label &&
//         university.domain !== ""
//     )
//   : universitiesData.filter((university) => university.domain !== "");




//   const universityOptions = filteredUnivOptions.map((university) => ({
//     value: university.name,
//     label: `${university.name} - ${university.city}, ${university.state}`,
//   }));

//   useEffect(() => {
//     document.body.classList.add("account-page");
//     console.log(universitiesData)

//     // if (isVerified && token) {
//     //   fetchUserDetails(token);
//     // }

//     // if (token) {
//     //   console.log("Token found, calling fetchUserDetails")
//     //   fetchUserDetails(token);
//     // }


//     if (token) {
//       fetchUserDetails(token, role);
//     }





//     else {
//       setVerifiedStatus("notIntitated");
//       console.log("verifiedStatus is ")
//       console.log(verifiedStatus)

//       setVerifiedStatus("notInitiated");
//       console.log("setVerifiedStatus is")
//       console.log(setVerifiedStatus)
//     }


//     return () => document.body.classList.remove("account-page");
//   }, []);

//   // const fetchUserDetails = async (token) => {
//   const fetchUserDetails = async (token, role) => {

//     try {
//       // URL for the API endpoint
//       const url = `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/verify-email/${token}/`;
//       console.log(url)

//       // Prepare the payload with verification_status

//       const requestBody = {
//         verification_status: role === "mentor" ? "pending" : "verified",
//         // verification_status: "pending",  // Pass verification status (e.g., 'pending', 'verified', 'rejected')
//       };


//       // Make the POST request with the appropriate method and headers
//       const response = await fetch(url, {
//         method: 'POST', // Change to POST request
//         headers: {
//           'Content-Type': 'application/json', // Tell the server the body is JSON
//         },
//         body: JSON.stringify(requestBody), // Send the verification status in the request body
//       });



//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Token verification failed");
//       }

//       setUserDetails(data); // Assuming the response contains user details under 'user'
//       console.log("Fetched user details:", data);

//       // Set isVerified based on the userDetails response
//       setVerifiedStatus(data.verification_status); // Assuming verification_status is part of the response data
//       setIsVerified(data.is_verified); // Assuming is_verified is part of the response data
//       console.log("User is_verified is: ")
//       console.log(data.is_verified)
//       console.log("verification_status is: ")
//       console.log(data.verification_status)

//     } catch (error) {
//       setErrorMessages({ general: ["Token verification failed. Please try again later."] });
//       console.error("Error fetching user details:", error);
//     }
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Reset the previous messages before submitting the form again
//     setShowSuccessMessage(false); // Hide the success message
//     setErrorMessages({}); // Clear any previous error messages

//     // Set loading state to true when form is submitted
//     setLoading(true);


//     // Filter out only the form input elements (ignoring buttons and other non-form controls)
//     const formElements = Array.from(e.target.elements).filter((element) => element.name);
//     // Log each form element's name and value
//     formElements.forEach((element) => {
//       console.log(element.name, element.value); // Log name and value of each element
//     });

//     // Initialize formData as an empty object
//     console.log('here')
//     // Simulate an async action (like an API call)
//     let formData = {};

//     console.log(userDetails)

//     // Conditionally add data to formData from userDetails or from the form (e.target.elements)
//     if (userDetails) {
//       // If userDetails exists, populate formData from it
//       console.log('userDetails found for form')
//       formData.first_name = userDetails.first_name || '';
//       formData.last_name = userDetails.last_name || '';
//       formData.username = userDetails.username || '';
//       formData.password = userDetails.password || ''; // This might be undefined, so fallback to empty string
//     } else {
//       // If userDetails does not exist, use the form values
//       console.log('userDetails not found for form')
//       formData.first_name = e.target.elements["first-name"].value;
//       formData.last_name = e.target.elements["last-name"].value;
//       formData.username = e.target.elements["username"].value;
//       formData.password = e.target.elements["password"].value;
//     }

//     if (!userDetails) {// Check if passwords match (optional but recommended)
//       if (formData.password !== e.target.elements["password-confirm"].value) {
//         alert('Passwords do not match');
//         return;
//       }
//     }

//     console.log("verification status in handle submit: ")
//     console.log(verifiedStatus)

//     if (role == "mentor" && verifiedStatus == "pending") {
//       console.log(" ##### Role found is: Mentor")
//       formData.country = selectedCountry ? selectedCountry.value : '';
//       formData.university = selectedUniversity ? selectedUniversity.value : '';
//       formData.college = selectedUniversity ? selectedUniversity.value : '';
//       formData.degree = selectedDegree ? selectedDegree.value : '';
//       formData.year_of_admission = e.target.elements["year-of-admission"].value;
//     }

//     // ##############


//     // else if (role === "mentee" && verifiedStatus === "pending") {
//     //   // Mentee flow: only set verification_status to verified
//     //   formData.verification_status = 'verified';
//     // }


//     // ##############


//     if (userDetails) {
//       console.log('userdeatils found: setting user email to form')
//       formData.email = userDetails.email;
//       console.log(formData.email)
//     }
//     else {
//       if (role === "mentor") {
//         formData.email = e.target.elements["university-email"].value;
//       }
//       if (role === "mentee") {
//         formData.email = e.target.elements["email"].value;
//       }
//     }

//     console.log('sdsdcs')

//     console.log("Form Data:", formData);


//     if (userDetails) {
//       try {
//         console.log("User Details found: Calling api to create mentor instance and verification_status=verified")
//         // URL for the API endpoint
//         const apiUrl = `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/verify-email/${token}/`;
//         console.log('calling verify email api with post request to enter extra mentor details')
//         console.log(apiUrl)

//         formData.verification_status = 'verified';
//         console.log(formData)

//         const response = await fetch(apiUrl, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         });

//         const data = await response.json();

//         if (!response.ok) {
//           throw new Error(data.message || "Token verification failed");
//         }



//         // NEW API CALL to create a group if not available and add mentor to it 
//         const apiUrlCreateGroup = `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/group/add-mentor/`;
//         console.log("Creating a new group if group not available and adding the mentor to it...");
//         console.log("UserDetails found: ")
//         console.log(userDetails)
//         let body = {}
//         body.mentor_id = userDetails.id
//         body.country = formData.country
//         body.college = formData.college
//         console.log('body to send in add mentor or create group is: ')
//         console.log(body)
//         const responseAddMentor = await fetch(apiUrlCreateGroup, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(body), // Customize as needed
//         });

//         const addMentorData = await responseAddMentor.json();

//         if (!responseAddMentor.ok) {
//           throw new Error(addMentorData.message || "Mentor add failed");
//         }

//         const groupId = addMentorData.group_id;
//         console.log("Mentor added successfully with ID");

//         // Redirect to another page upon successful response IMPORTANT

//         // window.location.href = '/login'; // Replace '/new-page' with the desired URL or path

//         setShowSuccessMessage(true); // Show success message

//         setSuccessMessages({ general: ["Registered successfully! Please login to continue.."] });


//         setLoading(false); // Stop the loader after successful response
//       }
//       catch (error) {
//         console.error("There was a problem with the fetch operation:", error);

//         setErrorMessages({
//           general: ["There was an issue with the server. Please try again later."]
//         });
//         setLoading(false); // Stop the loader after error
//       }
//     }

//     else {
//       try {
//         console.log("User Details not found: Calling api to create only user instance")
//         const apiUrl =
//           role === "mentee"
//             ? `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/signup/mentee/`
//             : `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/signup/mentor/`;

//         const response = await fetch(apiUrl, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         });

//         const responseText = await response.text();
//         const result = JSON.parse(responseText); // Parse the response text to JSON

//         console.log("Response Status:", response.status); // Log the status code
//         console.log("Response Text:", responseText); // Log the response text

//         // If the response status is 400, handle errors (username, email)
//         if (!response.ok) {
//           if (response.status === 400) {
//             let errors = {}; // Create an object to store the errors

//             // Handle specific field errors
//             if (result.username) {
//               errors.username = result.username;
//             }
//             if (result.email) {
//               errors.email = result.email;
//             }

//             // Handle other errors
//             if (result.non_field_errors) {
//               errors.non_field = result.non_field_errors;
//             }

//             // Set the errorMessages state with all errors
//             setErrorMessages(errors);
//             setLoading(false); // Stop the loader on error
//             return;
//           }

//           // If the error is not a field validation error, show a general error message
//           setErrorMessages({
//             general: ["Something went wrong, please try again later."]
//           });
//           setLoading(false); // Stop the loader on general error

//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         setShowSuccessMessage(true); // Show success message
//         setSuccessMessages({ general: ["Please verify, a link has been sent to your email ID."] });

//         setLoading(false); // Stop the loader after successful response
//       } catch (error) {
//         console.error("There was a problem with the fetch operation:", error);

//         setErrorMessages({
//           general: ["There was an issue with the server. Please try again later."]
//         });
//         setLoading(false); // Stop the loader after error
//       }
//     }
//   };

//   const handleUniversityChange = (selectedOption) => {
//     console.log("Selected univ is : ")
//     console.log(selectedOption)
//     setSelectedUniversity(selectedOption);
//   };

//   const handleCountryChange = (selectedOption) => {
//     // If selectedOption is null (i.e., the user clears the selection), we set selectedCountry to an empty string
//     console.log("Selected country is : ")
//     console.log(selectedOption)
//     setSelectedCountry(selectedOption);
//     setSelectedUniversity(null);
//   };

//   const handleDegreeChange = (selectedOption) => {
//     console.log("Selected degree is : ")
//     console.log(selectedOption)
//     setSelectedDegree(selectedOption);
//     // setSelectedMajor(null); // Reset Major when Degree is changed
//   };


//   return (
//     <>
//       <div className="bg-pattern-style bg-pattern-style-register">
//         <div className="content">
//           <div className="account-content">
//             <div className="account-box">
//               <div className="login-right">


//                 {/* <div className="login-header">
//                   <h3>
//                     <span>MENTIFF</span> REGISTERATION
//                   </h3>
//                   <p className="text-muted">Become a {role}</p>
//                 </div>




//                 <div className="login-header">
//                   <h3>
//                     <span>Welcome Back, </span> {userDetails?.first_name ? `${userDetails.first_name}` : 'REGISTER'}
//                   </h3>
//                   <p className="text-muted">
//                     {userDetails?.first_name ? 'One step away to become a mentor @Mentiff!' : 'Become a mentor'}
//                   </p>
//                 </div> */}


//                 {userDetails ? (
//                   <div className="login-header">
//                     <h3>
//                       <span>Welcome Back, </span> {userDetails?.first_name ? userDetails.first_name : 'REGISTER'}
//                     </h3>
//                     <p className="text-muted">
//                       {
//                         verifiedStatus === "verified"
//                           ? <div className="alert alert-success mt-3">
//                             Successfully verified! Please login to continue..

//                           </div>
//                           : userDetails?.first_name
//                             ? "One step away to become a mentor @Mentiff!"
//                             : "Become a mentor"
//                       }
//                     </p>
//                   </div>
//                 ) : (
//                   <div className="login-header">
//                     <h3>
//                       <span>MENTIFF</span> REGISTERATION
//                     </h3>
//                     <p className="text-muted">Become a {role}</p>
//                   </div>
//                 )}




//                 <form onSubmit={handleSubmit}>
//                   {/* If showSuccessMessage is false, render the form */}
//                   {!showSuccessMessage ? (
//                     <>
//                       {role === "mentee" && verifiedStatus === "notInitiated" && (
//                         <>
//                           <div className="row">
//                             <div className="col-lg-6">
//                               <div className="form-group">
//                                 <label className="form-control-label">First Name</label>
//                                 <input
//                                   id="first-name"
//                                   type="text"
//                                   className="form-control"
//                                   name="first_name"
//                                   required
//                                 />
//                               </div>
//                             </div>
//                             <div className="col-lg-6">
//                               <div className="form-group">
//                                 <label className="form-control-label">Last Name</label>
//                                 <input
//                                   id="last-name"
//                                   type="text"
//                                   className="form-control"
//                                   name="last_name"
//                                   required
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                           <div className="form-group">
//                             <label className="form-control-label">Username</label>
//                             <input
//                               id="username"
//                               name="username"
//                               type="text"
//                               className="form-control"
//                               required
//                             />
//                           </div>

//                           <div className="form-group">
//                             <label className="form-control-label">Email Address</label>
//                             <input
//                               id="email"
//                               type="email"
//                               className="form-control"
//                               required
//                             />
//                           </div>

//                           <div className="row">

//                             <div className="col-lg-6">
//                               <div className="form-group">
//                                 <label className="form-control-label">Password</label>
//                                 <input
//                                   id="password"
//                                   type="password"
//                                   className="form-control"
//                                   required
//                                   name="password"
//                                 />
//                               </div>
//                             </div>

//                             <div className="col-lg-6">
//                               <div className="form-group">
//                                 <label className="form-control-label">Confirm Password</label>
//                                 <input
//                                   id="password-confirm"
//                                   type="password"
//                                   className="form-control"
//                                   required
//                                   name="password_confirm"
//                                 />
//                               </div>
//                             </div>

//                           </div>
//                         </>
//                       )}

//                       {role === "mentor" && (
//                         <>
//                           {verifiedStatus == "notInitiated" && (
//                             <>
//                               <div className="row">

//                                 <div className="col-lg-6">
//                                   <div className="form-group">
//                                     <label className="form-control-label">First Name</label>
//                                     <input
//                                       id="first-name"
//                                       type="text"
//                                       className="form-control"
//                                       name="first_name"
//                                       // value={userDetails ? userDetails.first_name : ''}  // If userDetails exists, set the value, otherwise set empty string
//                                       required
//                                     // disabled={!!userDetails}  // Disabled if userDetails exist
//                                     />
//                                   </div>
//                                 </div>

//                                 <div className="col-lg-6">
//                                   <div className="form-group">
//                                     <label className="form-control-label">Last Name</label>
//                                     <input
//                                       id="last-name"
//                                       type="text"
//                                       className="form-control"
//                                       name="last_name"
//                                       // value={userDetails ? userDetails.last_name : ''} // Set value based on userDetails
//                                       required
//                                     // readOnly={!!userDetails} // Make it read-only if userDetails is available
//                                     />
//                                   </div>
//                                 </div>

//                               </div>

//                               <div className="row">
//                                 <div className="col-lg-6">
//                                   <div className="form-group">
//                                     <label className="form-control-label">Username</label>
//                                     <input
//                                       id="username"
//                                       type="text"
//                                       className="form-control"
//                                       name="username"
//                                       // value={userDetails ? userDetails.username : ''} // Set value based on userDetails
//                                       required
//                                     // readOnly={!!userDetails} // Make it read-only if userDetails is available
//                                     />
//                                   </div>
//                                 </div>






//                                 <div className="col-lg-6">
//                                   <div className="form-group">
//                                     <label className="form-control-label">College Email</label>
//                                     <input
//                                       id="university-email"
//                                       type="email"
//                                       className="form-control"
//                                       name="email"
//                                       // value={userDetails ? userDetails.email : ''} // Set value based on userDetails
//                                       required
//                                     // readOnly={!!userDetails} // Make it read-only if userDetails is available
//                                     />
//                                   </div>
//                                 </div>




//                               </div>
//                             </>
//                           )}

//                           <div className="row">

//                             {/* {isVerified && ( */}
//                             {verifiedStatus == "pending" && (
//                               <>
//                                 <div className="col-lg-6">
//                                   <div className="form-group">
//                                     <label className="form-control-label">Country</label>
//                                     <Select
//                                       id="country"
//                                       name="country"
//                                       options={countryOptions}
//                                       value={selectedCountry}
//                                       onChange={handleCountryChange}
//                                       placeholder="Select Country"
//                                       isClearable
//                                       isSearchable
//                                       required
//                                       styles={{
//                                         control: (provided) => ({
//                                           ...provided,
//                                           border: '1px solid #ced4da',
//                                           boxShadow: 'none',
//                                           '&:hover': {
//                                             border: '1px solid #80bdff',
//                                           },
//                                         }),
//                                         menu: (provided) => ({
//                                           ...provided,
//                                           zIndex: 9999, // To ensure dropdown is above other elements
//                                         }),
//                                       }}
//                                     />
//                                   </div>
//                                 </div>

//                                 <div className="col-lg-6">
//                                   <div className="form-group">
//                                     <label className="form-control-label">University/College</label>
//                                     <Select
//                                       id="university"
//                                       name="university"
//                                       options={universityOptions}
//                                       value={selectedUniversity}
//                                       onChange={handleUniversityChange}
//                                       placeholder="Select a university"
//                                       isClearable
//                                       isSearchable
//                                       required
//                                       styles={{
//                                         control: (provided) => ({
//                                           ...provided,
//                                           border: '1px solid #ced4da',
//                                           boxShadow: 'none',
//                                           '&:hover': {
//                                             border: '1px solid #80bdff',
//                                           },
//                                         }),
//                                         menu: (provided) => ({
//                                           ...provided,
//                                           zIndex: 9999, // To ensure dropdown is above other elements
//                                         }),
//                                       }}
//                                     />
//                                   </div>
//                                 </div>

//                                 <div className="col-lg-6">
//                                   <div className="form-group">
//                                     <label className="form-control-label">Degree</label>
//                                     <Select
//                                       id="degree"
//                                       name="degree"
//                                       options={degreeOptions}
//                                       value={selectedDegree}
//                                       onChange={handleDegreeChange}
//                                       placeholder="Select Degree"
//                                       isClearable
//                                       isSearchable
//                                       required
//                                       styles={{
//                                         control: (provided) => ({
//                                           ...provided,
//                                           border: '1px solid #ced4da',
//                                           boxShadow: 'none',
//                                           '&:hover': {
//                                             border: '1px solid #80bdff',
//                                           },
//                                         }),
//                                         menu: (provided) => ({
//                                           ...provided,
//                                           zIndex: 9999, // To ensure dropdown is above other elements
//                                         }),
//                                       }}
//                                     />
//                                   </div>
//                                 </div>

//                                 <div className="col-lg-6">
//                                   <div className="form-group">
//                                     <label className="form-control-label">Year of Admission</label>
//                                     <input
//                                       id="year-of-admission"
//                                       type="number"
//                                       className="form-control"
//                                       required
//                                       name="year_of_admission"
//                                     />
//                                   </div>
//                                 </div>
//                               </>
//                             )}

//                             {verifiedStatus != "pending" && (
//                               <>
//                                 <div className="col-lg-6">
//                                   <div className="form-group">
//                                     <label className="form-control-label">Password</label>
//                                     <input
//                                       id="password"
//                                       type="password"
//                                       className="form-control"
//                                       required
//                                       name="password"
//                                     />
//                                   </div>
//                                 </div>
//                                 <div className="col-lg-6">
//                                   <div className="form-group">
//                                     <label className="form-control-label">Confirm Password</label>
//                                     <input
//                                       id="password-confirm"
//                                       type="password"
//                                       className="form-control"
//                                       required
//                                       name="password_confirm"
//                                     />
//                                   </div>
//                                 </div>
//                               </>
//                             )}
//                           </div>
//                         </>
//                       )}

//                       {/* <div className="form-group">
//                         <div className="form-check form-check-xs custom-checkbox">
//                           <input
//                             type="checkbox"
//                             className="form-check-input"
//                             name="agreeCheckboxUser"
//                             id="agree_checkbox_user"
//                             required
//                           />
//                           <label className="form-check-label" htmlFor="agree_checkbox_user">
//                             I agree to Mentiff
//                           </label>{" "}
//                           <Link tabIndex={-1} to="javascript:void(0);">
//                             Privacy Policy
//                           </Link>{" "}
//                           &amp;{" "}
//                           <Link tabIndex={-1} to="javascript:void(0);">
//                             Terms.
//                           </Link>
//                         </div>
//                       </div>

//                       <button
//                         className="btn btn-primary login-btn"
//                         type="submit"
//                         disabled={loading} // Disable the button while loading
//                       >
//                         Create Account
//                       </button> */}


//                       {verifiedStatus !== "verified" && (
//                         <>
//                           <div className="form-group">
//                             <div className="form-check form-check-xs custom-checkbox">
//                               <input
//                                 type="checkbox"
//                                 className="form-check-input"
//                                 name="agreeCheckboxUser"
//                                 id="agree_checkbox_user"
//                                 required
//                               />
//                               <label className="form-check-label" htmlFor="agree_checkbox_user">
//                                 I agree to Mentiff
//                               </label>{" "}
//                               <Link tabIndex={-1} to="javascript:void(0);">
//                                 Privacy Policy
//                               </Link>{" "}
//                               &amp;{" "}
//                               <Link tabIndex={-1} to="javascript:void(0);">
//                                 Terms.
//                               </Link>
//                             </div>
//                           </div>

//                           <button
//                             className="btn btn-primary login-btn"
//                             type="submit"
//                             disabled={loading} // Disable the button while loading
//                           >
//                             Create Account
//                           </button>
//                         </>
//                       )}



//                       {loading && (
//                         <div
//                           style={{
//                             display: "flex",
//                             justifyContent: "center",
//                             alignItems: "center",
//                             marginTop: "10px",
//                           }}
//                         >
//                           <div
//                             style={{
//                               border: "4px solid #f3f3f3",
//                               borderTop: "4px solid #3498db",
//                               borderRadius: "50%",
//                               width: "20px",
//                               height: "20px",
//                               animation: "spin 1s linear infinite",
//                             }}
//                           ></div>
//                         </div>
//                       )}
//                     </>
//                   ) : (
//                     // If showSuccessMessage is true, show success message only
//                     <div className="alert alert-success mt-3">
//                       {successMessages.general && <> {successMessages.general}</>}

//                     </div>
//                   )}

//                   {/* {showSuccessMessage && (
//                     <div className="alert alert-success mt-3">
//                       Please verify, a link has been sent to your email ID.
//                     </div>
//                   )} */}

//                   {/* Error popup or alert */}
//                   {Object.keys(errorMessages).length > 0 && (
//                     <div className="alert alert-danger mt-3">
//                       <ul>
//                         {/* General errors */}
//                         {errorMessages.general && errorMessages.general.map((msg, index) => (
//                           <li key={index}>{msg}</li>
//                         ))}

//                         {/* Specific field errors */}
//                         {Object.keys(errorMessages).filter(field => field !== "general").map((field, index) => (
//                           <li key={index}>
//                             <strong>{field.charAt(0).toUpperCase() + field.slice(1)}:</strong>
//                             {errorMessages[field].map((msg, i) => (
//                               <div key={i}>{msg}</div>
//                             ))}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                   <div className="account-footer text-center mt-3">
//                     Already have an account?{" "}
//                     <Link className="forgot-link mb-0" to="/login">
//                       Login
//                     </Link>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register;




// import React, { useEffect, useState, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";
// import loginBanner from "../../assets/images/login-banner.png";
// import Header from "../header";
// import Footer from "../footer";
// import universitiesData from "./universities.json";
// import countriesData from "./countries.json";
// import degreeData from "./degree.json"
// import Select from 'react-select';

// const Register = (props) => {
//   const location = useLocation();
//   const query = new URLSearchParams(location.search);
//   const userRole = query.get("user");
//   const token = query.get("token");
//   const role = location.state?.role || userRole;
//   const [isVerified, setIsVerified] = useState(false);
//   const [verifiedStatus, setVerifiedStatus] = useState(false);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const [loading, setLoading] = useState(false);
//   console.log("Mentor/Mentee role is? ");
//   console.log(role);
//   const [userDetails, setUserDetails] = useState(null);
//   const [selectedUniversity, setSelectedUniversity] = useState('');
//   const [selectedCountry, setSelectedCountry] = useState('');
//   const [selectedDegree, setSelectedDegree] = useState(null);
//   const [errorMessages, setErrorMessages] = useState([]);
//   const [successMessages, setSuccessMessages] = useState([]);
//   const [collegeEmail, setCollegeEmail] = useState(''); // Track email input
//   const [detectedCollege, setDetectedCollege] = useState(''); // Store detected college name

//   // Filter countries that have at least one university with non-empty domain
//   const countriesWithUniversities = countriesData.filter((country) => {
//     return universitiesData.some((university) => 
//       university.country === country.label && university.domain !== ""
//     );
//   });

//   const countryOptions = countriesWithUniversities.map((country) => ({
//     value: country.label,
//     label: country.label,
//   }));

//   const degreeOptions = degreeData.map((degree) => ({
//     value: degree.value,
//     label: degree.label,
//   }));

//   const filteredUnivOptions = selectedCountry
//     ? universitiesData.filter(
//         (university) =>
//           university.country === selectedCountry.label &&
//           university.domain !== ""
//       )
//     : universitiesData.filter((university) => university.domain !== "");

//   const universityOptions = filteredUnivOptions.map((university) => ({
//     value: university.name,
//     label: `${university.name} - ${university.city}, ${university.state}`,
//   }));

//   // Function to detect college from email domain
//   const detectCollegeFromEmail = (email) => {
//     if (!email.includes('@')) {
//       return '';
//     }

//     const emailDomain = email.split('@')[1];
//     if (!emailDomain) {
//       return '';
//     }

//     // Find matching university by domain
//     const matchedUniversity = universitiesData.find((university) => {
//       if (!university.domain) return false;

//       // Check if email domain matches university domain
//       // This handles cases like:
//       // - email: user@iitd.ac.in, domain: iitd.ac.in (exact match)
//       // - email: user@student.iitd.ac.in, domain: iitd.ac.in (subdomain match)
//       return emailDomain === university.domain || emailDomain.endsWith(`.${university.domain}`);
//     });

//     if (matchedUniversity) {
//       // Return short_name if available, otherwise return name
//       return matchedUniversity.short_name || matchedUniversity.name;
//     }

//     return '';
//   };

//   // Handle email input change
//   const handleEmailChange = (e) => {
//     const email = e.target.value;
//     setCollegeEmail(email);

//     const detectedName = detectCollegeFromEmail(email);
//     setDetectedCollege(detectedName);
//   };

//   useEffect(() => {
//     document.body.classList.add("account-page");
//     console.log(universitiesData)

//     if (token) {
//       fetchUserDetails(token, role);
//     } else {
//       setVerifiedStatus("notIntitated");
//       console.log("verifiedStatus is ")
//       console.log(verifiedStatus)
//       setVerifiedStatus("notInitiated");
//       console.log("setVerifiedStatus is")
//       console.log(setVerifiedStatus)
//     }

//     return () => document.body.classList.remove("account-page");
//   }, []);

//   const fetchUserDetails = async (token, role) => {
//     try {
//       const url = `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/verify-email/${token}/`;
//       console.log(url)

//       const requestBody = {
//         verification_status: role === "mentor" ? "pending" : "verified",
//       };

//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(requestBody),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Token verification failed");
//       }

//       setUserDetails(data);
//       console.log("Fetched user details:", data);

//       setVerifiedStatus(data.verification_status);
//       setIsVerified(data.is_verified);
//       console.log("User is_verified is: ")
//       console.log(data.is_verified)
//       console.log("verification_status is: ")
//       console.log(data.verification_status)

//     } catch (error) {
//       setErrorMessages({ general: ["Token verification failed. Please try again later."] });
//       console.error("Error fetching user details:", error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setShowSuccessMessage(false);
//     setErrorMessages({});
//     setLoading(true);

//     const formElements = Array.from(e.target.elements).filter((element) => element.name);
//     formElements.forEach((element) => {
//       console.log(element.name, element.value);
//     });

//     console.log('here')
//     let formData = {};

//     console.log(userDetails)

//     if (userDetails) {
//       console.log('userDetails found for form')
//       formData.first_name = userDetails.first_name || '';
//       formData.last_name = userDetails.last_name || '';
//       formData.username = userDetails.username || '';
//       formData.password = userDetails.password || '';
//     } else {
//       console.log('userDetails not found for form')
//       formData.first_name = e.target.elements["first-name"].value;
//       formData.last_name = e.target.elements["last-name"].value;
//       formData.username = e.target.elements["username"].value;
//       formData.password = e.target.elements["password"].value;
//     }

//     if (!userDetails) {
//       if (formData.password !== e.target.elements["password-confirm"].value) {
//         alert('Passwords do not match');
//         return;
//       }
//     }

//     console.log("verification status in handle submit: ")
//     console.log(verifiedStatus)

//     if (role == "mentor" && verifiedStatus == "pending") {
//       console.log(" ##### Role found is: Mentor")
//       formData.country = selectedCountry ? selectedCountry.value : '';
//       formData.university = selectedUniversity ? selectedUniversity.value : '';
//       formData.college = selectedUniversity ? selectedUniversity.value : '';
//       formData.degree = selectedDegree ? selectedDegree.value : '';
//       formData.year_of_admission = e.target.elements["year-of-admission"].value;
//     }

//     if (userDetails) {
//       console.log('userdeatils found: setting user email to form')
//       formData.email = userDetails.email;
//       console.log(formData.email)
//     } else {
//       if (role === "mentor") {
//         formData.email = e.target.elements["university-email"].value;
//       }
//       if (role === "mentee") {
//         formData.email = e.target.elements["email"].value;
//       }
//     }

//     console.log('sdsdcs')
//     console.log("Form Data:", formData);

//     if (userDetails) {
//       try {
//         console.log("User Details found: Calling api to create mentor instance and verification_status=verified")
//         const apiUrl = `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/verify-email/${token}/`;
//         console.log('calling verify email api with post request to enter extra mentor details')
//         console.log(apiUrl)

//         formData.verification_status = 'verified';
//         console.log(formData)

//         const response = await fetch(apiUrl, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         });

//         const data = await response.json();

//         if (!response.ok) {
//           throw new Error(data.message || "Token verification failed");
//         }

//         const apiUrlCreateGroup = `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/group/add-mentor/`;
//         console.log("Creating a new group if group not available and adding the mentor to it...");
//         console.log("UserDetails found: ")
//         console.log(userDetails)
//         let body = {}
//         body.mentor_id = userDetails.id
//         body.country = formData.country
//         body.college = formData.college
//         console.log('body to send in add mentor or create group is: ')
//         console.log(body)
//         const responseAddMentor = await fetch(apiUrlCreateGroup, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(body),
//         });

//         const addMentorData = await responseAddMentor.json();

//         if (!responseAddMentor.ok) {
//           throw new Error(addMentorData.message || "Mentor add failed");
//         }

//         const groupId = addMentorData.group_id;
//         console.log("Mentor added successfully with ID");

//         setShowSuccessMessage(true);
//         setSuccessMessages({ general: ["Registered successfully! Please login to continue.."] });
//         setLoading(false);
//       } catch (error) {
//         console.error("There was a problem with the fetch operation:", error);
//         setErrorMessages({
//           general: ["There was an issue with the server. Please try again later."]
//         });
//         setLoading(false);
//       }
//     } else {
//       try {
//         console.log("User Details not found: Calling api to create only user instance")
//         const apiUrl =
//           role === "mentee"
//             ? `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/signup/mentee/`
//             : `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/signup/mentor/`;

//         const response = await fetch(apiUrl, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         });

//         const responseText = await response.text();
//         const result = JSON.parse(responseText);

//         console.log("Response Status:", response.status);
//         console.log("Response Text:", responseText);

//         if (!response.ok) {
//           if (response.status === 400) {
//             let errors = {};

//             if (result.username) {
//               errors.username = result.username;
//             }
//             if (result.email) {
//               errors.email = result.email;
//             }

//             if (result.non_field_errors) {
//               errors.non_field = result.non_field_errors;
//             }

//             setErrorMessages(errors);
//             setLoading(false);
//             return;
//           }

//           setErrorMessages({
//             general: ["Something went wrong, please try again later."]
//           });
//           setLoading(false);

//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         setShowSuccessMessage(true);
//         setSuccessMessages({ general: ["Please verify, a link has been sent to your email ID."] });
//         setLoading(false);
//       } catch (error) {
//         console.error("There was a problem with the fetch operation:", error);
//         setErrorMessages({
//           general: ["There was an issue with the server. Please try again later."]
//         });
//         setLoading(false);
//       }
//     }
//   };

//   const handleUniversityChange = (selectedOption) => {
//     console.log("Selected univ is : ")
//     console.log(selectedOption)
//     setSelectedUniversity(selectedOption);
//   };

//   const handleCountryChange = (selectedOption) => {
//     console.log("Selected country is : ")
//     console.log(selectedOption)
//     setSelectedCountry(selectedOption);
//     setSelectedUniversity(null);
//   };

//   const handleDegreeChange = (selectedOption) => {
//     console.log("Selected degree is : ")
//     console.log(selectedOption)
//     setSelectedDegree(selectedOption);
//   };

//   return (
//     <>
//       <style jsx>{`
//         .college-detection {
//           margin-top: 5px;
//           font-size: 14px;
//           font-weight: 500;
//         }

//         .college-detected {
//           color: #28a745;
//           display: flex;
//           align-items: center;
//         }

//         .college-not-detected {
//           color: #dc3545;
//         }

//         .college-detection-icon {
//           margin-right: 5px;
//           font-size: 16px;
//         }

//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(-10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .college-detection {
//           animation: fadeIn 0.3s ease-in;
//         }
//       `}</style>

//       <div className="bg-pattern-style bg-pattern-style-register">
//         <div className="content">
//           <div className="account-content">
//             <div className="account-box">
//               <div className="login-right">
//                 {userDetails ? (
//                   <div className="login-header">
//                     <h3>
//                       <span>Welcome Back, </span> {userDetails?.first_name ? userDetails.first_name : 'REGISTER'}
//                     </h3>
//                     <p className="text-muted">
//                       {
//                         verifiedStatus === "verified"
//                           ? <div className="alert alert-success mt-3">
//                             Successfully verified! Please login to continue..
//                           </div>
//                           : userDetails?.first_name
//                             ? "One step away to become a mentor @Mentiff!"
//                             : "Become a mentor"
//                       }
//                     </p>
//                   </div>
//                 ) : (
//                   <div className="login-header">
//                     <h3>
//                       <span>MENTIFF</span> REGISTERATION
//                     </h3>
//                     <p className="text-muted">Become a {role}</p>
//                   </div>
//                 )}

//                 <form onSubmit={handleSubmit}>
//                   {!showSuccessMessage ? (
//                     <>
//                       {role === "mentee" && verifiedStatus === "notInitiated" && (
//                         <>
//                           <div className="row">
//                             <div className="col-lg-6">
//                               <div className="form-group">
//                                 <label className="form-control-label">First Name</label>
//                                 <input
//                                   id="first-name"
//                                   type="text"
//                                   className="form-control"
//                                   name="first_name"
//                                   required
//                                 />
//                               </div>
//                             </div>
//                             <div className="col-lg-6">
//                               <div className="form-group">
//                                 <label className="form-control-label">Last Name</label>
//                                 <input
//                                   id="last-name"
//                                   type="text"
//                                   className="form-control"
//                                   name="last_name"
//                                   required
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                           <div className="form-group">
//                             <label className="form-control-label">Username</label>
//                             <input
//                               id="username"
//                               name="username"
//                               type="text"
//                               className="form-control"
//                               required
//                             />
//                           </div>

//                           <div className="form-group">
//                             <label className="form-control-label">Email Address</label>
//                             <input
//                               id="email"
//                               type="email"
//                               className="form-control"
//                               required
//                             />
//                           </div>

//                           <div className="row">
//                             <div className="col-lg-6">
//                               <div className="form-group">
//                                 <label className="form-control-label">Password</label>
//                                 <input
//                                   id="password"
//                                   type="password"
//                                   className="form-control"
//                                   required
//                                   name="password"
//                                 />
//                               </div>
//                             </div>

//                             <div className="col-lg-6">
//                               <div className="form-group">
//                                 <label className="form-control-label">Confirm Password</label>
//                                 <input
//                                   id="password-confirm"
//                                   type="password"
//                                   className="form-control"
//                                   required
//                                   name="password_confirm"
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         </>
//                       )}

//                       {role === "mentor" && (
//                         <>
//                           {verifiedStatus == "notInitiated" && (
//                             <>
//                               <div className="row">
//                                 <div className="col-lg-6">
//                                   <div className="form-group">
//                                     <label className="form-control-label">First Name</label>
//                                     <input
//                                       id="first-name"
//                                       type="text"
//                                       className="form-control"
//                                       name="first_name"
//                                       required
//                                     />
//                                   </div>
//                                 </div>

//                                 <div className="col-lg-6">
//                                   <div className="form-group">
//                                     <label className="form-control-label">Last Name</label>
//                                     <input
//                                       id="last-name"
//                                       type="text"
//                                       className="form-control"
//                                       name="last_name"
//                                       required
//                                     />
//                                   </div>
//                                 </div>
//                               </div>

//                               <div className="row">
//                                 <div className="col-lg-6">
//                                   <div className="form-group">
//                                     <label className="form-control-label">Username</label>
//                                     <input
//                                       id="username"
//                                       type="text"
//                                       className="form-control"
//                                       name="username"
//                                       required
//                                     />
//                                   </div>
//                                 </div>

//                                 <div className="col-lg-6">
//                                   <div className="form-group">
//                                     <label className="form-control-label">College Email</label>
//                                     <input
//                                       id="university-email"
//                                       type="email"
//                                       className="form-control"
//                                       name="email"
//                                       value={collegeEmail}
//                                       onChange={handleEmailChange}
//                                       required
//                                     />
//                                     {/* College detection display */}
//                                     {collegeEmail && (
//                                       <div className="college-detection">
//                                         {detectedCollege ? (
//                                           <div className="college-detected">
//                                             <span className="college-detection-icon">✓</span>
//                                             College detected: <strong>{detectedCollege}</strong>
//                                           </div>
//                                         ) : (
//                                           <div className="college-not-detected">
//                                             <span className="college-detection-icon">✗</span>
//                                             College not found. Please verify your email domain.
//                                           </div>
//                                         )}
//                                       </div>
//                                     )}
//                                   </div>
//                                 </div>
//                               </div>
//                             </>
//                           )}

//                           <div className="row">
//                             {verifiedStatus == "pending" && (
//                               <>
//                                 <div className="col-lg-6">
//                                   <div className="form-group">
//                                     <label className="form-control-label">Country</label>
//                                     <Select
//                                       id="country"
//                                       name="country"
//                                       options={countryOptions}
//                                       value={selectedCountry}
//                                       onChange={handleCountryChange}
//                                       placeholder="Select Country"
//                                       isClearable
//                                       isSearchable
//                                       required
//                                       styles={{
//                                         control: (provided) => ({
//                                           ...provided,
//                                           border: '1px solid #ced4da',
//                                           boxShadow: 'none',
//                                           '&:hover': {
//                                             border: '1px solid #80bdff',
//                                           },
//                                         }),
//                                         menu: (provided) => ({
//                                           ...provided,
//                                           zIndex: 9999,
//                                         }),
//                                       }}
//                                     />
//                                   </div>
//                                 </div>

//                                 <div className="col-lg-6">
//                                   <div className="form-group">
//                                     <label className="form-control-label">University/College</label>
//                                     <Select
//                                       id="university"
//                                       name="university"
//                                       options={universityOptions}
//                                       value={selectedUniversity}
//                                       onChange={handleUniversityChange}
//                                       placeholder="Select a university"
//                                       isClearable
//                                       isSearchable
//                                       required
//                                       styles={{
//                                         control: (provided) => ({
//                                           ...provided,
//                                           border: '1px solid #ced4da',
//                                           boxShadow: 'none',
//                                           '&:hover': {
//                                             border: '1px solid #80bdff',
//                                           },
//                                         }),
//                                         menu: (provided) => ({
//                                           ...provided,
//                                           zIndex: 9999,
//                                         }),
//                                       }}
//                                     />
//                                   </div>
//                                 </div>

//                                 <div className="col-lg-6">
//                                   <div className="form-group">
//                                     <label className="form-control-label">Degree</label>
//                                     <Select
//                                       id="degree"
//                                       name="degree"
//                                       options={degreeOptions}
//                                       value={selectedDegree}
//                                       onChange={handleDegreeChange}
//                                       placeholder="Select Degree"
//                                       isClearable
//                                       isSearchable
//                                       required
//                                       styles={{
//                                         control: (provided) => ({
//                                           ...provided,
//                                           border: '1px solid #ced4da',
//                                           boxShadow: 'none',
//                                           '&:hover': {
//                                             border: '1px solid #80bdff',
//                                           },
//                                         }),
//                                         menu: (provided) => ({
//                                           ...provided,
//                                           zIndex: 9999,
//                                         }),
//                                       }}
//                                     />
//                                   </div>
//                                 </div>

//                                 <div className="col-lg-6">
//                                   <div className="form-group">
//                                     <label className="form-control-label">Year of Admission</label>
//                                     <input
//                                       id="year-of-admission"
//                                       type="number"
//                                       className="form-control"
//                                       required
//                                       name="year_of_admission"
//                                     />
//                                   </div>
//                                 </div>
//                               </>
//                             )}

//                             {verifiedStatus != "pending" && (
//                               <>
//                                 <div className="col-lg-6">
//                                   <div className="form-group">
//                                     <label className="form-control-label">Password</label>
//                                     <input
//                                       id="password"
//                                       type="password"
//                                       className="form-control"
//                                       required
//                                       name="password"
//                                     />
//                                   </div>
//                                 </div>
//                                 <div className="col-lg-6">
//                                   <div className="form-group">
//                                     <label className="form-control-label">Confirm Password</label>
//                                     <input
//                                       id="password-confirm"
//                                       type="password"
//                                       className="form-control"
//                                       required
//                                       name="password_confirm"
//                                     />
//                                   </div>
//                                 </div>
//                               </>
//                             )}
//                           </div>
//                         </>
//                       )}

//                       {verifiedStatus !== "verified" && (
//                         <>
//                           <div className="form-group">
//                             <div className="form-check form-check-xs custom-checkbox">
//                               <input
//                                 type="checkbox"
//                                 className="form-check-input"
//                                 name="agreeCheckboxUser"
//                                 id="agree_checkbox_user"
//                                 required
//                               />
//                               <label className="form-check-label" htmlFor="agree_checkbox_user">
//                                 I agree to Mentiff
//                               </label>{" "}
//                               <Link tabIndex={-1} to="javascript:void(0);">
//                                 Privacy Policy
//                               </Link>{" "}
//                               &amp;{" "}
//                               <Link tabIndex={-1} to="javascript:void(0);">
//                                 Terms.
//                               </Link>
//                             </div>
//                           </div>

//                           <button
//                             className="btn btn-primary login-btn"
//                             type="submit"
//                             disabled={loading}
//                           >
//                             Create Account
//                           </button>
//                         </>
//                       )}

//                       {loading && (
//                         <div
//                           style={{
//                             display: "flex",
//                             justifyContent: "center",
//                             alignItems: "center",
//                             marginTop: "10px",
//                           }}
//                         >
//                           <div
//                             style={{
//                               border: "4px solid #f3f3f3",
//                               borderTop: "4px solid #3498db",
//                               borderRadius: "50%",
//                               width: "20px",
//                               height: "20px",
//                               animation: "spin 1s linear infinite",
//                             }}
//                           ></div>
//                         </div>
//                       )}
//                     </>
//                   ) : (
//                     <div className="alert alert-success mt-3">
//                       {successMessages.general && <> {successMessages.general}</>}
//                     </div>
//                   )}

//                   {Object.keys(errorMessages).length > 0 && (
//                     <div className="alert alert-danger mt-3">
//                       <ul>
//                         {errorMessages.general && errorMessages.general.map((msg, index) => (
//                           <li key={index}>{msg}</li>
//                         ))}

//                         {Object.keys(errorMessages).filter(field => field !== "general").map((field, index) => (
//                           <li key={index}>
//                             <strong>{field.charAt(0).toUpperCase() + field.slice(1)}:</strong>
//                             {errorMessages[field].map((msg, i) => (
//                               <div key={i}>{msg}</div>
//                             ))}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                   <div className="account-footer text-center mt-3">
//                     Already have an account?{" "}
//                     <Link className="forgot-link mb-0" to="/login">
//                       Login
//                     </Link>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register;











// import React, { useEffect, useState, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";
// import loginBanner from "../../assets/images/login-banner.png";
// import Header from "../header";
// import Footer from "../footer";
// import universitiesData from "./universities.json";
// import countriesData from "./countries.json";
// import degreeData from "./degree.json"
// import Select from 'react-select';

// const Register = (props) => {
//   const location = useLocation();
//   const query = new URLSearchParams(location.search);
//   const userRole = query.get("user");
//   const token = query.get("token");
//   const role = location.state?.role || userRole;
//   const [isVerified, setIsVerified] = useState(false);
//   const [verifiedStatus, setVerifiedStatus] = useState(false);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const [loading, setLoading] = useState(false);
//   console.log("Mentor/Mentee role is? ");
//   console.log(role);
//   const [userDetails, setUserDetails] = useState(null);
//   const [selectedUniversity, setSelectedUniversity] = useState('');
//   const [selectedCountry, setSelectedCountry] = useState('');
//   const [selectedDegree, setSelectedDegree] = useState(null);
//   const [errorMessages, setErrorMessages] = useState([]);
//   const [successMessages, setSuccessMessages] = useState([]);
//   const [collegeEmail, setCollegeEmail] = useState(''); // Track email input
//   const [detectedCollege, setDetectedCollege] = useState(''); // Store detected college name
//   const [isCollegeDetected, setIsCollegeDetected] = useState(false); // Track if college is detected

//   // Filter countries that have at least one university with non-empty domain
//   const countriesWithUniversities = countriesData.filter((country) => {
//     return universitiesData.some((university) => 
//       university.country === country.label && university.domain !== ""
//     );
//   });

//   const countryOptions = countriesWithUniversities.map((country) => ({
//     value: country.label,
//     label: country.label,
//   }));

//   const degreeOptions = degreeData.map((degree) => ({
//     value: degree.value,
//     label: degree.label,
//   }));

//   const filteredUnivOptions = selectedCountry
//     ? universitiesData.filter(
//         (university) =>
//           university.country === selectedCountry.label &&
//           university.domain !== ""
//       )
//     : universitiesData.filter((university) => university.domain !== "");

//   const universityOptions = filteredUnivOptions.map((university) => ({
//     value: university.name,
//     label: `${university.name} - ${university.city}, ${university.state}`,
//   }));

//   // Function to detect college from email domain
//   const detectCollegeFromEmail = (email) => {
//     if (!email.includes('@')) {
//       return '';
//     }

//     const emailDomain = email.split('@')[1];
//     if (!emailDomain) {
//       return '';
//     }

//     // Find matching university by domain
//     const matchedUniversity = universitiesData.find((university) => {
//       if (!university.domain) return false;

//       // Check if email domain matches university domain
//       // This handles cases like:
//       // - email: user@iitd.ac.in, domain: iitd.ac.in (exact match)
//       // - email: user@student.iitd.ac.in, domain: iitd.ac.in (subdomain match)
//       return emailDomain === university.domain || emailDomain.endsWith(`.${university.domain}`);
//     });

//     if (matchedUniversity) {
//       // Return college name with country
//       const collegeName = matchedUniversity.short_name || matchedUniversity.name;
//       const country = matchedUniversity.country || 'Unknown Country';
//       return `${collegeName}, ${country}`;
//     }

//     return '';
//   };

//   // Handle email input change
//   const handleEmailChange = (e) => {
//     const email = e.target.value;
//     setCollegeEmail(email);

//     const detectedName = detectCollegeFromEmail(email);
//     setDetectedCollege(detectedName);
//     setIsCollegeDetected(!!detectedName); // Set to true if college is detected, false otherwise
//   };

//   useEffect(() => {
//     document.body.classList.add("account-page");
//     console.log(universitiesData)

//     if (token) {
//       fetchUserDetails(token, role);
//     } else {
//       setVerifiedStatus("notIntitated");
//       console.log("verifiedStatus is ")
//       console.log(verifiedStatus)
//       setVerifiedStatus("notInitiated");
//       console.log("setVerifiedStatus is")
//       console.log(setVerifiedStatus)
//     }

//     return () => document.body.classList.remove("account-page");
//   }, []);

//   const fetchUserDetails = async (token, role) => {
//     try {
//       const url = `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/verify-email/${token}/`;
//       console.log(url)

//       const requestBody = {
//         verification_status: role === "mentor" ? "pending" : "verified",
//       };

//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(requestBody),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Token verification failed");
//       }

//       setUserDetails(data);
//       console.log("Fetched user details:", data);

//       setVerifiedStatus(data.verification_status);
//       setIsVerified(data.is_verified);
//       console.log("User is_verified is: ")
//       console.log(data.is_verified)
//       console.log("verification_status is: ")
//       console.log(data.verification_status)

//     } catch (error) {
//       setErrorMessages({ general: ["Token verification failed. Please try again later."] });
//       console.error("Error fetching user details:", error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validation for mentor registration when college is not detected
//     if (role === "mentor" && verifiedStatus === "notInitiated" && collegeEmail && !isCollegeDetected) {
//       setErrorMessages({
//         general: ["College not detected from your email domain. Please contact mentiff5@gmail.com to add your college to our database."]
//       });
//       return;
//     }

//     setShowSuccessMessage(false);
//     setErrorMessages({});
//     setLoading(true);

//     const formElements = Array.from(e.target.elements).filter((element) => element.name);
//     formElements.forEach((element) => {
//       console.log(element.name, element.value);
//     });

//     console.log('here')
//     let formData = {};

//     console.log(userDetails)

//     if (userDetails) {
//       console.log('userDetails found for form')
//       formData.first_name = userDetails.first_name || '';
//       formData.last_name = userDetails.last_name || '';
//       formData.username = userDetails.username || '';
//       formData.password = userDetails.password || '';
//     } else {
//       console.log('userDetails not found for form')
//       formData.first_name = e.target.elements["first-name"].value;
//       formData.last_name = e.target.elements["last-name"].value;
//       formData.username = e.target.elements["username"].value;
//       formData.password = e.target.elements["password"].value;
//     }

//     if (!userDetails) {
//       if (formData.password !== e.target.elements["password-confirm"].value) {
//         alert('Passwords do not match');
//         return;
//       }
//     }

//     console.log("verification status in handle submit: ")
//     console.log(verifiedStatus)

//     if (role == "mentor" && verifiedStatus == "pending") {
//       console.log(" ##### Role found is: Mentor")
//       formData.country = selectedCountry ? selectedCountry.value : '';
//       formData.university = selectedUniversity ? selectedUniversity.value : '';
//       formData.college = selectedUniversity ? selectedUniversity.value : '';
//       formData.degree = selectedDegree ? selectedDegree.value : '';
//       formData.year_of_admission = e.target.elements["year-of-admission"].value;
//     }

//     if (userDetails) {
//       console.log('userdeatils found: setting user email to form')
//       formData.email = userDetails.email;
//       console.log(formData.email)
//     } else {
//       if (role === "mentor") {
//         formData.email = e.target.elements["university-email"].value;
//       }
//       if (role === "mentee") {
//         formData.email = e.target.elements["email"].value;
//       }
//     }

//     console.log('sdsdcs')
//     console.log("Form Data:", formData);

//     if (userDetails) {
//       try {
//         console.log("User Details found: Calling api to create mentor instance and verification_status=verified")
//         const apiUrl = `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/verify-email/${token}/`;
//         console.log('calling verify email api with post request to enter extra mentor details')
//         console.log(apiUrl)

//         formData.verification_status = 'verified';
//         console.log(formData)

//         const response = await fetch(apiUrl, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         });

//         const data = await response.json();

//         if (!response.ok) {
//           throw new Error(data.message || "Token verification failed");
//         }

//         const apiUrlCreateGroup = `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/group/add-mentor/`;
//         console.log("Creating a new group if group not available and adding the mentor to it...");
//         console.log("UserDetails found: ")
//         console.log(userDetails)
//         let body = {}
//         body.mentor_id = userDetails.id
//         body.country = formData.country
//         body.college = formData.college
//         console.log('body to send in add mentor or create group is: ')
//         console.log(body)
//         const responseAddMentor = await fetch(apiUrlCreateGroup, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(body),
//         });

//         const addMentorData = await responseAddMentor.json();

//         if (!responseAddMentor.ok) {
//           throw new Error(addMentorData.message || "Mentor add failed");
//         }

//         const groupId = addMentorData.group_id;
//         console.log("Mentor added successfully with ID");

//         setShowSuccessMessage(true);
//         setSuccessMessages({ general: ["Registered successfully! Please login to continue.."] });
//         setLoading(false);
//       } catch (error) {
//         console.error("There was a problem with the fetch operation:", error);
//         setErrorMessages({
//           general: ["There was an issue with the server. Please try again later."]
//         });
//         setLoading(false);
//       }
//     } else {
//       try {
//         console.log("User Details not found: Calling api to create only user instance")
//         const apiUrl =
//           role === "mentee"
//             ? `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/signup/mentee/`
//             : `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/signup/mentor/`;

//         const response = await fetch(apiUrl, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         });

//         const responseText = await response.text();
//         const result = JSON.parse(responseText);

//         console.log("Response Status:", response.status);
//         console.log("Response Text:", responseText);

//         if (!response.ok) {
//           if (response.status === 400) {
//             let errors = {};

//             if (result.username) {
//               errors.username = result.username;
//             }
//             if (result.email) {
//               errors.email = result.email;
//             }

//             if (result.non_field_errors) {
//               errors.non_field = result.non_field_errors;
//             }

//             setErrorMessages(errors);
//             setLoading(false);
//             return;
//           }

//           setErrorMessages({
//             general: ["Something went wrong, please try again later."]
//           });
//           setLoading(false);

//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         setShowSuccessMessage(true);
//         setSuccessMessages({ general: ["Please verify, a link has been sent to your email ID."] });
//         setLoading(false);
//       } catch (error) {
//         console.error("There was a problem with the fetch operation:", error);
//         setErrorMessages({
//           general: ["There was an issue with the server. Please try again later."]
//         });
//         setLoading(false);
//       }
//     }
//   };

//   const handleUniversityChange = (selectedOption) => {
//     console.log("Selected univ is : ")
//     console.log(selectedOption)
//     setSelectedUniversity(selectedOption);
//   };

//   const handleCountryChange = (selectedOption) => {
//     console.log("Selected country is : ")
//     console.log(selectedOption)
//     setSelectedCountry(selectedOption);
//     setSelectedUniversity(null);
//   };

//   const handleDegreeChange = (selectedOption) => {
//     console.log("Selected degree is : ")
//     console.log(selectedOption)
//     setSelectedDegree(selectedOption);
//   };

//   // Check if form submission should be disabled for mentors
//   const isSubmitDisabled = () => {
//     if (role === "mentor" && verifiedStatus === "notInitiated" && collegeEmail && !isCollegeDetected) {
//       return true;
//     }
//     return loading;
//   };

//   return (
//     <>
//       <style jsx>{`
//         .college-detection {
//           margin-top: 5px;
//           font-size: 14px;
//           font-weight: 500;
//         }

//         .college-detected {
//           color: #28a745;
//           display: flex;
//           align-items: center;
//         }

//         .college-not-detected {
//           color: #dc3545;
//         }

//         .college-detection-icon {
//           margin-right: 5px;
//           font-size: 16px;
//         }

//         .contact-message {
//           margin-top: 8px;
//           padding: 8px 12px;
//           background-color: #fff3cd;
//           border: 1px solid #ffeaa7;
//           border-radius: 4px;
//           font-size: 13px;
//           color: #856404;
//         }

//         .contact-email {
//           color: #0066cc;
//           font-weight: 600;
//           text-decoration: none;
//         }

//         .contact-email:hover {
//           text-decoration: underline;
//         }

//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(-10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .college-detection {
//           animation: fadeIn 0.3s ease-in;
//         }

//         .btn:disabled {
//           opacity: 0.6;
//           cursor: not-allowed;
//         }
//       `}</style>

//       <div className="bg-pattern-style bg-pattern-style-register">
//         <div className="content">
//           <div className="account-content">
//             <div className="account-box">
//               <div className="login-right">
//                 {userDetails ? (
//                   <div className="login-header">
//                     <h3>
//                       <span>Welcome Back, </span> {userDetails?.first_name ? userDetails.first_name : 'REGISTER'}
//                     </h3>
//                     <p className="text-muted">
//                       {
//                         verifiedStatus === "verified"
//                           ? <div className="alert alert-success mt-3">
//                             Successfully verified! Please login to continue..
//                           </div>
//                           : userDetails?.first_name
//                             ? "One step away to become a mentor @Mentiff!"
//                             : "Become a mentor"
//                       }
//                     </p>
//                   </div>
//                 ) : (
//                   <div className="login-header">
//                     <h3>
//                       <span>MENTIFF</span> REGISTERATION
//                     </h3>
//                     <p className="text-muted">Become a {role}</p>
//                   </div>
//                 )}

//                 <form onSubmit={handleSubmit}>
//                   {!showSuccessMessage ? (
//                     <>
//                       {role === "mentee" && verifiedStatus === "notInitiated" && (
//                         <>
//                           <div className="row">
//                             <div className="col-lg-6">
//                               <div className="form-group">
//                                 <label className="form-control-label">First Name</label>
//                                 <input
//                                   id="first-name"
//                                   type="text"
//                                   className="form-control"
//                                   name="first_name"
//                                   required
//                                 />
//                               </div>
//                             </div>
//                             <div className="col-lg-6">
//                               <div className="form-group">
//                                 <label className="form-control-label">Last Name</label>
//                                 <input
//                                   id="last-name"
//                                   type="text"
//                                   className="form-control"
//                                   name="last_name"
//                                   required
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                           <div className="form-group">
//                             <label className="form-control-label">Username</label>
//                             <input
//                               id="username"
//                               name="username"
//                               type="text"
//                               className="form-control"
//                               required
//                             />
//                           </div>

//                           <div className="form-group">
//                             <label className="form-control-label">Email Address</label>
//                             <input
//                               id="email"
//                               type="email"
//                               className="form-control"
//                               required
//                             />
//                           </div>

//                           <div className="row">
//                             <div className="col-lg-6">
//                               <div className="form-group">
//                                 <label className="form-control-label">Password</label>
//                                 <input
//                                   id="password"
//                                   type="password"
//                                   className="form-control"
//                                   required
//                                   name="password"
//                                 />
//                               </div>
//                             </div>

//                             <div className="col-lg-6">
//                               <div className="form-group">
//                                 <label className="form-control-label">Confirm Password</label>
//                                 <input
//                                   id="password-confirm"
//                                   type="password"
//                                   className="form-control"
//                                   required
//                                   name="password_confirm"
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         </>
//                       )}

//                       {role === "mentor" && (
//                         <>
//                           {verifiedStatus == "notInitiated" && (
//                             <>
//                               <div className="row">
//                                 <div className="col-lg-6">
//                                   <div className="form-group">
//                                     <label className="form-control-label">First Name</label>
//                                     <input
//                                       id="first-name"
//                                       type="text"
//                                       className="form-control"
//                                       name="first_name"
//                                       required
//                                     />
//                                   </div>
//                                 </div>

//                                 <div className="col-lg-6">
//                                   <div className="form-group">
//                                     <label className="form-control-label">Last Name</label>
//                                     <input
//                                       id="last-name"
//                                       type="text"
//                                       className="form-control"
//                                       name="last_name"
//                                       required
//                                     />
//                                   </div>
//                                 </div>
//                               </div>

//                               <div className="row">
//                                 <div className="col-lg-6">
//                                   <div className="form-group">
//                                     <label className="form-control-label">Username</label>
//                                     <input
//                                       id="username"
//                                       type="text"
//                                       className="form-control"
//                                       name="username"
//                                       required
//                                     />
//                                   </div>
//                                 </div>

//                                 <div className="col-lg-6">
//                                   <div className="form-group">
//                                     <label className="form-control-label">College Email</label>
//                                     <input
//                                       id="university-email"
//                                       type="email"
//                                       className="form-control"
//                                       name="email"
//                                       value={collegeEmail}
//                                       onChange={handleEmailChange}
//                                       required
//                                     />
//                                     {/* College detection display */}
//                                     {collegeEmail && (
//                                       <div className="college-detection">
//                                         {detectedCollege ? (
//                                           <div className="college-detected">
//                                             <span className="college-detection-icon">✓</span>
//                                             <strong>{detectedCollege}</strong>
//                                           </div>
//                                         ) : (
//                                           <>
//                                             <div className="college-not-detected">
//                                               <span className="college-detection-icon">✗</span>
//                                               College not found. Please verify your email domain.
//                                             </div>
//                                             <div className="contact-message">
//                                               <strong>Need to add your college?</strong> Drop us an email at{' '}
//                                               <a 
//                                                 href="mailto:mentiff5@gmail.com?subject=Add My College - College Name&body=Hi,%0A%0AI would like to add my college to Mentiff's database.%0A%0ACollege Name: [Your College Name]%0ACollege Email Domain: [e.g., xyz.edu]%0ALocation: [City, State/Country]%0A%0AThank you!"
//                                                 className="contact-email"
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                               >
//                                                 mentiff5@gmail.com
//                                               </a>
//                                               {' '}and we'll add it to our database.
//                                             </div>
//                                           </>
//                                         )}
//                                       </div>
//                                     )}
//                                   </div>
//                                 </div>
//                               </div>
//                             </>
//                           )}

//                           <div className="row">
//                             {verifiedStatus == "pending" && (
//                               <>
//                                 <div className="col-lg-6">
//                                   <div className="form-group">
//                                     <label className="form-control-label">Country</label>
//                                     <Select
//                                       id="country"
//                                       name="country"
//                                       options={countryOptions}
//                                       value={selectedCountry}
//                                       onChange={handleCountryChange}
//                                       placeholder="Select Country"
//                                       isClearable
//                                       isSearchable
//                                       required
//                                       styles={{
//                                         control: (provided) => ({
//                                           ...provided,
//                                           border: '1px solid #ced4da',
//                                           boxShadow: 'none',
//                                           '&:hover': {
//                                             border: '1px solid #80bdff',
//                                           },
//                                         }),
//                                         menu: (provided) => ({
//                                           ...provided,
//                                           zIndex: 9999,
//                                         }),
//                                       }}
//                                     />
//                                   </div>
//                                 </div>

//                                 <div className="col-lg-6">
//                                   <div className="form-group">
//                                     <label className="form-control-label">University/College</label>
//                                     <Select
//                                       id="university"
//                                       name="university"
//                                       options={universityOptions}
//                                       value={selectedUniversity}
//                                       onChange={handleUniversityChange}
//                                       placeholder="Select a university"
//                                       isClearable
//                                       isSearchable
//                                       required
//                                       styles={{
//                                         control: (provided) => ({
//                                           ...provided,
//                                           border: '1px solid #ced4da',
//                                           boxShadow: 'none',
//                                           '&:hover': {
//                                             border: '1px solid #80bdff',
//                                           },
//                                         }),
//                                         menu: (provided) => ({
//                                           ...provided,
//                                           zIndex: 9999,
//                                         }),
//                                       }}
//                                     />
//                                   </div>
//                                 </div>

//                                 <div className="col-lg-6">
//                                   <div className="form-group">
//                                     <label className="form-control-label">Degree</label>
//                                     <Select
//                                       id="degree"
//                                       name="degree"
//                                       options={degreeOptions}
//                                       value={selectedDegree}
//                                       onChange={handleDegreeChange}
//                                       placeholder="Select Degree"
//                                       isClearable
//                                       isSearchable
//                                       required
//                                       styles={{
//                                         control: (provided) => ({
//                                           ...provided,
//                                           border: '1px solid #ced4da',
//                                           boxShadow: 'none',
//                                           '&:hover': {
//                                             border: '1px solid #80bdff',
//                                           },
//                                         }),
//                                         menu: (provided) => ({
//                                           ...provided,
//                                           zIndex: 9999,
//                                         }),
//                                       }}
//                                     />
//                                   </div>
//                                 </div>

//                                 <div className="col-lg-6">
//                                   <div className="form-group">
//                                     <label className="form-control-label">Year of Admission</label>
//                                     <input
//                                       id="year-of-admission"
//                                       type="number"
//                                       className="form-control"
//                                       required
//                                       name="year_of_admission"
//                                     />
//                                   </div>
//                                 </div>
//                               </>
//                             )}

//                             {verifiedStatus != "pending" && (
//                               <>
//                                 <div className="col-lg-6">
//                                   <div className="form-group">
//                                     <label className="form-control-label">Password</label>
//                                     <input
//                                       id="password"
//                                       type="password"
//                                       className="form-control"
//                                       required
//                                       name="password"
//                                     />
//                                   </div>
//                                 </div>
//                                 <div className="col-lg-6">
//                                   <div className="form-group">
//                                     <label className="form-control-label">Confirm Password</label>
//                                     <input
//                                       id="password-confirm"
//                                       type="password"
//                                       className="form-control"
//                                       required
//                                       name="password_confirm"
//                                     />
//                                   </div>
//                                 </div>
//                               </>
//                             )}
//                           </div>
//                         </>
//                       )}

//                       {verifiedStatus !== "verified" && (
//                         <>
//                           <div className="form-group">
//                             <div className="form-check form-check-xs custom-checkbox">
//                               <input
//                                 type="checkbox"
//                                 className="form-check-input"
//                                 name="agreeCheckboxUser"
//                                 id="agree_checkbox_user"
//                                 required
//                               />
//                               <label className="form-check-label" htmlFor="agree_checkbox_user">
//                                 I agree to Mentiff
//                               </label>{" "}
//                               <Link tabIndex={-1} to="javascript:void(0);">
//                                 Privacy Policy
//                               </Link>{" "}
//                               &amp;{" "}
//                               <Link tabIndex={-1} to="javascript:void(0);">
//                                 Terms.
//                               </Link>
//                             </div>
//                           </div>

//                           <button
//                             className="btn btn-primary login-btn"
//                             type="submit"
//                             disabled={isSubmitDisabled()}
//                             title={
//                               role === "mentor" && verifiedStatus === "notInitiated" && collegeEmail && !isCollegeDetected
//                                 ? "Please use a valid college email or contact us to add your college"
//                                 : ""
//                             }
//                           >
//                             Create Account
//                           </button>
//                         </>
//                       )}

//                       {loading && (
//                         <div
//                           style={{
//                             display: "flex",
//                             justifyContent: "center",
//                             alignItems: "center",
//                             marginTop: "10px",
//                           }}
//                         >
//                           <div
//                             style={{
//                               border: "4px solid #f3f3f3",
//                               borderTop: "4px solid #3498db",
//                               borderRadius: "50%",
//                               width: "20px",
//                               height: "20px",
//                               animation: "spin 1s linear infinite",
//                             }}
//                           ></div>
//                         </div>
//                       )}
//                     </>
//                   ) : (
//                     <div className="alert alert-success mt-3">
//                       {successMessages.general && <> {successMessages.general}</>}
//                     </div>
//                   )}

//                   {Object.keys(errorMessages).length > 0 && (
//                     <div className="alert alert-danger mt-3">
//                       <ul>
//                         {errorMessages.general && errorMessages.general.map((msg, index) => (
//                           <li key={index}>{msg}</li>
//                         ))}

//                         {Object.keys(errorMessages).filter(field => field !== "general").map((field, index) => (
//                           <li key={index}>
//                             <strong>{field.charAt(0).toUpperCase() + field.slice(1)}:</strong>
//                             {errorMessages[field].map((msg, i) => (
//                               <div key={i}>{msg}</div>
//                             ))}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                   <div className="account-footer text-center mt-3">
//                     Already have an account?{" "}
//                     <Link className="forgot-link mb-0" to="/login">
//                       Login
//                     </Link>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register;











































import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import loginBanner from "../../assets/images/login-banner.png";
import Header from "../header";
import Footer from "../footer";
import universitiesData from "./universities.json";
import countriesData from "./countries.json";
import degreeData from "./degree.json"
import Select from 'react-select';

const Register = (props) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const userRole = query.get("user");
  const token = query.get("token");
  const role = location.state?.role || userRole;
  const [isVerified, setIsVerified] = useState(false);
  const [verifiedStatus, setVerifiedStatus] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log("Mentor/Mentee role is? ");
  console.log(role);
  const [userDetails, setUserDetails] = useState(null);
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedDegree, setSelectedDegree] = useState(null);
  const [errorMessages, setErrorMessages] = useState([]);
  const [successMessages, setSuccessMessages] = useState([]);
  const [collegeEmail, setCollegeEmail] = useState(''); // Track email input
  const [detectedCollege, setDetectedCollege] = useState(''); // Store detected college name
  const [isCollegeDetected, setIsCollegeDetected] = useState(false); // Track if college is detected
  const [isCountryLocked, setIsCountryLocked] = useState(false); // Track if country is locked
  const [isUniversityLocked, setIsUniversityLocked] = useState(false); // Track if university is locked
  const [matchedUniversityData, setMatchedUniversityData] = useState(null); // Store matched university data

  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  

  // const [calendarConnected, setCalendarConnected] = useState(false);



  // Filter countries that have at least one university with non-empty domain
  const countriesWithUniversities = countriesData.filter((country) => {
    return universitiesData.some((university) =>
      university.country === country.label && university.domain !== ""
    );
  });

  const countryOptions = countriesWithUniversities.map((country) => ({
    value: country.label,
    label: country.label,
  }));

  const degreeOptions = degreeData.map((degree) => ({
    value: degree.value,
    label: degree.label,
  }));

  const filteredUnivOptions = selectedCountry
    ? universitiesData.filter(
      (university) =>
        university.country === selectedCountry.label &&
        university.domain !== ""
    )
    : universitiesData.filter((university) => university.domain !== "");

  const universityOptions = filteredUnivOptions.map((university) => ({
    value: university.name,
    label: `${university.name} - ${university.city}, ${university.state}`,
  }));

  // Function to detect college from email domain
  const detectCollegeFromEmail = (email) => {
    if (!email.includes('@')) {
      return { displayName: '', universityData: null };
    }

    const emailDomain = email.split('@')[1];
    if (!emailDomain) {
      return { displayName: '', universityData: null };
    }

    // Find matching university by domain
    const matchedUniversity = universitiesData.find((university) => {
      if (!university.domain) return false;

      // Check if email domain matches university domain
      // This handles cases like:
      // - email: user@iitd.ac.in, domain: iitd.ac.in (exact match)
      // - email: user@student.iitd.ac.in, domain: iitd.ac.in (subdomain match)
      return emailDomain === university.domain || emailDomain.endsWith(`.${university.domain}`);
    });

    if (matchedUniversity) {
      // Return college name with country and university data
      const collegeName = matchedUniversity.short_name || matchedUniversity.name;
      const country = matchedUniversity.country || 'Unknown Country';
      return {
        displayName: `${collegeName}, ${country}`,
        universityData: matchedUniversity
      };
    }

    return { displayName: '', universityData: null };
  };

  const findUniversityData = (collegeName) => {
    return universitiesData.find((university) =>
      university.name === collegeName
    );
  };





  // Handle email input change
  const handleEmailChange = (e) => {
    const email = e.target.value;
    setCollegeEmail(email);

    const detectionResult = detectCollegeFromEmail(email);
    setDetectedCollege(detectionResult.displayName);
    setMatchedUniversityData(detectionResult.universityData);
    setIsCollegeDetected(!!detectionResult.displayName); // Set to true if college is detected, false otherwise
  };

  useEffect(() => {
    document.body.classList.add("account-page");
    console.log(universitiesData)

    if (token) {
      fetchUserDetails(token, role);
    } else {
      setVerifiedStatus("notIntitated");
      console.log("verifiedStatus is ")
      console.log(verifiedStatus)
      setVerifiedStatus("notInitiated");
      console.log("setVerifiedStatus is")
      console.log(setVerifiedStatus)
    }

    return () => document.body.classList.remove("account-page");
  }, []);

  const fetchUserDetails = async (token, role) => {
    try {
      const url = `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/verify-email/${token}/`;
      console.log(url)

      const requestBody = {
        verification_status: role === "mentor" ? "pending" : "verified",
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Token verification failed");
      }

      setUserDetails(data);
      console.log("Fetched user details:", data);

      setVerifiedStatus(data.verification_status);
      setIsVerified(data.is_verified);
      console.log("User is_verified is: ")
      console.log(data.is_verified)
      console.log("verification_status is: ")
      console.log(data.verification_status)

      // Auto-select country and university based on user's email
      if (data.email && data.verification_status === "pending") {
        console.log("Starting auto-selection for email:", data.email);

        setTimeout(() => {
          const detectionResult = detectCollegeFromEmail(data.email);
          console.log("Detection result:", detectionResult);

          if (detectionResult.universityData) {
            console.log("University data found:", detectionResult.universityData);

            // Filter countries that have at least one university with non-empty domain
            const availableCountries = countriesData.filter((country) => {
              return universitiesData.some((university) =>
                university.country === country.label && university.domain !== ""
              );
            });

            const availableCountryOptions = availableCountries.map((country) => ({
              value: country.label,
              label: country.label,
            }));

            console.log("Available country options:", availableCountryOptions);
            console.log("Looking for country:", detectionResult.universityData.country);

            // Try multiple matching strategies
            let countryOption = availableCountryOptions.find(country =>
              country.value === detectionResult.universityData.country
            );

            if (!countryOption) {
              // Try case-insensitive match
              countryOption = availableCountryOptions.find(country =>
                country.value.toLowerCase() === detectionResult.universityData.country.toLowerCase()
              );
              console.log("Case-insensitive match found:", countryOption);
            }

            // If still not found, try partial matching
            if (!countryOption) {
              countryOption = availableCountryOptions.find(country =>
                country.value.includes(detectionResult.universityData.country) ||
                detectionResult.universityData.country.includes(country.value)
              );
              console.log("Partial match found:", countryOption);
            }

            console.log("Final country option:", countryOption);

            if (countryOption) {
              setSelectedCountry(countryOption);
              setIsCountryLocked(true);
              console.log("Country set and locked:", countryOption);
            } else {
              console.error("❌ No matching country found!");
              console.log("University country:", detectionResult.universityData.country);
              console.log("Available countries:", availableCountryOptions.map(c => c.value));

              // ⚠️ TEMPORARY FIX: If country not found, add it temporarily for testing
              const tempCountryOption = {
                value: detectionResult.universityData.country,
                label: detectionResult.universityData.country
              };
              setSelectedCountry(tempCountryOption);
              setIsCountryLocked(true);
              console.log("🔧 Temporarily added missing country:", tempCountryOption);
            }

            // Auto-select university
            const filteredUniversities = universitiesData.filter(
              (university) =>
                (university.country === detectionResult.universityData.country ||
                  university.country.toLowerCase() === detectionResult.universityData.country.toLowerCase()) &&
                university.domain !== ""
            );

            const availableUniversityOptions = filteredUniversities.map((university) => ({
              value: university.name,
              label: `${university.name} - ${university.city}, ${university.state}`,
            }));

            const universityOption = availableUniversityOptions.find(uni =>
              uni.value === detectionResult.universityData.name
            );

            console.log("University options:", availableUniversityOptions);
            console.log("Selected university:", universityOption);

            if (universityOption) {
              setSelectedUniversity(universityOption);
              setIsUniversityLocked(true);
              setMatchedUniversityData(detectionResult.universityData);
              console.log("University set and locked:", universityOption);
            }
          } else {
            console.log("No university data detected from email");
          }
        }, 200);
      }

    } catch (error) {
      setErrorMessages({ general: ["Token verification failed. Please try again later."] });
      console.error("Error fetching user details:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation for mentor registration when college is not detected
    if (role === "mentor" && verifiedStatus === "notInitiated" && collegeEmail && !isCollegeDetected) {
      setErrorMessages({
        general: ["College not detected from your email domain. Please contact mentiff5@gmail.com to add your college to our database."]
      });
      setLoading(false);
      return;
    }

    setShowSuccessMessage(false);
    setErrorMessages({});
    setLoading(true);

    const formElements = Array.from(e.target.elements).filter((element) => element.name);
    formElements.forEach((element) => {
      console.log(element.name, element.value);
    });

    console.log('here')
    let formData = {};

    console.log(userDetails)

    if (userDetails) {
      console.log('userDetails found for form')
      formData.first_name = userDetails.first_name || '';
      formData.last_name = userDetails.last_name || '';
      formData.username = userDetails.username || '';
      formData.password = userDetails.password || '';
    } else {
      console.log('userDetails not found for form')
      formData.first_name = e.target.elements["first-name"].value;
      formData.last_name = e.target.elements["last-name"].value;
      formData.username = e.target.elements["username"].value;
      formData.password = e.target.elements["password"].value;
    }

    if (!userDetails) {
      if (formData.password !== e.target.elements["password-confirm"].value) {
        alert('Passwords do not match');
        return;
      }
    }

    console.log("verification status in handle submit: ")
    console.log(verifiedStatus)

    if (role == "mentor" && verifiedStatus == "pending") {
      console.log(" ##### Role found is: Mentor")
      formData.country = selectedCountry ? selectedCountry.value : '';
      formData.university = selectedUniversity ? selectedUniversity.value : '';
      formData.college = selectedUniversity ? selectedUniversity.value : '';
      formData.degree = selectedDegree ? selectedDegree.value : '';
      formData.year_of_admission = e.target.elements["year-of-admission"].value;
    }

    if (userDetails) {
      console.log('userdeatils found: setting user email to form')
      formData.email = userDetails.email;
      console.log(formData.email)
    } else {
      if (role === "mentor") {
        formData.email = e.target.elements["university-email"].value;
      }
      if (role === "mentee") {
        formData.email = e.target.elements["email"].value;
      }
    }

    console.log('sdsdcs')
    console.log("Form Data:", formData);

    if (userDetails) {
      try {
        console.log("User Details found: Calling api to create mentor instance and verification_status=verified")
        const apiUrl = `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/verify-email/${token}/`;
        console.log('calling verify email api with post request to enter extra mentor details')
        console.log(apiUrl)

        // formData.verification_status = 'verified';
        // console.log(formData)


        // Find complete university data for the first API call
        const universityData = matchedUniversityData || findUniversityData(formData.college);

        // Combine formData with university data for verify-email endpoint
        const verifyEmailData = {
          ...formData,
          verification_status: 'verified',
          // Add all university fields if university data is found
          ...(universityData && {
            university_name: universityData.name,
            university_city: universityData.city,
            university_state: universityData.state,
            university_country: universityData.country,
            university_domain: universityData.domain,
            university_url: universityData.url,
            university_short_name: universityData.short_name,
            university_category: universityData.category
          })
        };

        console.log('Data to send to verify-email:', verifyEmailData);

        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(verifyEmailData),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Token verification failed");
        }

        const apiUrlCreateGroup = `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/group/add-mentor/`;
        console.log("Creating a new group if group not available and adding the mentor to it...");
        console.log("UserDetails found: ")
        console.log(userDetails)
        

        let body = {
          mentor_id: userDetails.id,
          country: formData.country,
          college: formData.college,
          // Add all university fields if university data is found
          ...(universityData && {
            university_name: universityData.name,
            university_city: universityData.city,
            university_state: universityData.state,
            university_country: universityData.country,
            university_domain: universityData.domain,
            university_url: universityData.url,
            university_short_name: universityData.short_name,
            university_category: universityData.category
          })
        };



        console.log('body to send in add mentor or create group is: ')
        console.log(body)
        const responseAddMentor = await fetch(apiUrlCreateGroup, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });

        const addMentorData = await responseAddMentor.json();

        if (!responseAddMentor.ok) {
          throw new Error(addMentorData.message || "Mentor add failed");
        }

        const groupId = addMentorData.group_id;
        console.log("Mentor added successfully with ID");

        setShowSuccessMessage(true);
        setSuccessMessages({ general: ["Registered successfully! Please login to continue.."] });
        setLoading(false);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        setErrorMessages({
          general: ["There was an issue with the server. Please try again later."]
        });
        setLoading(false);
      }
    } else {
      try {
        console.log("User Details not found: Calling api to create only user instance")
        const apiUrl =
          role === "mentee"
            ? `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/signup/mentee/`
            : `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/signup/mentor/`;

        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const responseText = await response.text();
        const result = JSON.parse(responseText);

        console.log("Response Status:", response.status);
        console.log("Response Text:", responseText);

        if (!response.ok) {
          if (response.status === 400) {
            let errors = {};

            if (result.username) {
              errors.username = result.username;
            }
            if (result.email) {
              errors.email = result.email;
            }

            if (result.non_field_errors) {
              errors.non_field = result.non_field_errors;
            }

            setErrorMessages(errors);
            setLoading(false);
            return;
          }

          setErrorMessages({
            general: ["Something went wrong, please try again later."]
          });
          setLoading(false);

          throw new Error(`HTTP error! status: ${response.status}`);
        }

        setShowSuccessMessage(true);
        setSuccessMessages({ general: ["Please verify, a link has been sent to your email ID."] });
        setLoading(false);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        setErrorMessages({
          general: ["There was an issue with the server. Please try again later."]
        });
        setLoading(false);
      }
    }
  };

  const handleUniversityChange = (selectedOption) => {
    console.log("Selected univ is : ")
    console.log(selectedOption)
    setSelectedUniversity(selectedOption);
  };

  const handleCountryChange = (selectedOption) => {
    if (!isCountryLocked) {
      console.log("Selected country is : ")
      console.log(selectedOption)
      setSelectedCountry(selectedOption);
      setSelectedUniversity(null);
    }
  };

  const handleDegreeChange = (selectedOption) => {
    console.log("Selected degree is : ")
    console.log(selectedOption)
    setSelectedDegree(selectedOption);
  };

  // Check if form submission should be disabled for mentors
  const isSubmitDisabled = () => {
    if (role === "mentor" && verifiedStatus === "notInitiated" && collegeEmail && !isCollegeDetected) {
      return true;
    }
    return loading;
  };

  const Modal = ({ title, open, onClose, children }) => {
    if (!open) return null;
    const stop = (e) => e.stopPropagation();
    return (
      <div className="modal-backdrop-mentiff" onClick={onClose} role="dialog" aria-modal="true" aria-label={title}>
        <div className="modal-card-mentiff" onClick={stop}>
          <div className="modal-header-mentiff">
            <h5 className="modal-title-mentiff">{title}</h5>
            <button className="modal-close-btn" aria-label="Close" onClick={onClose}>×</button>
          </div>
          <div className="modal-body-mentiff">{children}</div>
          <div className="modal-footer-mentiff">
            <button className="btn btn-secondary" type="button" onClick={onClose}>Close</button>
            <button className="btn btn-primary" type="button" onClick={onClose}>I Agree</button>
          </div>
        </div>
      </div>
    );
  };


  return (
    <>
      <style>{`
        .college-detection {
          margin-top: 5px;
          font-size: 14px;
          font-weight: 500;
        }
        
        .college-detected {
          color: #28a745;
          display: flex;
          align-items: center;
        }
        
        .college-not-detected {
          color: #dc3545;
        }
        
        .college-detection-icon {
          margin-right: 5px;
          font-size: 16px;
        }
        
        .contact-message {
          margin-top: 8px;
          padding: 8px 12px;
          background-color: #fff3cd;
          border: 1px solid #ffeaa7;
          border-radius: 4px;
          font-size: 13px;
          color: #856404;
        }
        
        .contact-email {
          color: #0066cc;
          font-weight: 600;
          text-decoration: none;
        }
        
        .contact-email:hover {
          text-decoration: underline;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .college-detection {
          animation: fadeIn 0.3s ease-in;
        }

        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .locked-dropdown {
          pointer-events: none;
          opacity: 0.7;
        }

        .locked-info {
          font-size: 12px;
          color: #6c757d;
          margin-top: 3px;
          font-style: italic;
        }


        /* Modal */
.modal-backdrop-mentiff {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.45);
  display: flex; align-items: center; justify-content: center;
  z-index: 1050;
}
.modal-card-mentiff {
  background: #fff; border-radius: 12px;
  width: min(860px, 92vw); max-height: 80vh;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  display: flex; flex-direction: column; overflow: hidden;
}
.modal-header-mentiff {
  padding: 14px 18px; border-bottom: 1px solid #eee;
  display: flex; align-items: center; justify-content: space-between;
}
.modal-title-mentiff { margin: 0; font-size: 18px; font-weight: 600; }
.modal-body-mentiff { padding: 16px 18px; overflow: auto; }
.modal-footer-mentiff {
  padding: 12px 18px; border-top: 1px solid #eee;
  display: flex; gap: 8px; justify-content: flex-end;
}
.modal-close-btn {
  border: none; background: transparent; font-size: 22px; line-height: 1;
  cursor: pointer; padding: 0 6px;
}
.link-button {
  background: none; border: none; padding: 0; margin: 0 4px;
  color: #0d6efd; text-decoration: underline; cursor: pointer;
  font: inherit;
}
.link-button:hover { text-decoration: none; }

      `}</style>

      {/* <div className="bg-pattern-style bg-pattern-style-register"> */}
      <div >
        {/* <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 px-4 sm:px-6 lg:px-8"> */}

        <div className="content">
          <div className="account-content">
            <div className="account-box">
              <div className="login-right">
                {userDetails ? (
                  <div className="login-header">
                    <h3>
                      <span>Welcome Back, </span> {userDetails?.first_name ? userDetails.first_name : 'REGISTER'}
                    </h3>
                    <p className="text-muted">
                      {
                        verifiedStatus === "verified"
                          ? <div className="alert alert-success mt-3">
                            Successfully verified! Please login to continue..
                          </div>
                          : userDetails?.first_name
                            ? "One step away to become a mentor @Mentiff!"
                            : "Become a mentor"
                      }
                    </p>
                  </div>
                ) : (
                  <div className="login-header">
                    <h3>
                      <span>MENTIFF</span> REGISTERATION
                    </h3>
                    <p className="text-muted">Become a {role}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  {!showSuccessMessage ? (
                    <>
                      {role === "mentee" && verifiedStatus === "notInitiated" && (
                        <>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label className="form-control-label">First Name</label>
                                <input
                                  id="first-name"
                                  type="text"
                                  className="form-control"
                                  name="first_name"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label className="form-control-label">Last Name</label>
                                <input
                                  id="last-name"
                                  type="text"
                                  className="form-control"
                                  name="last_name"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="form-control-label">Username</label>
                            <input
                              id="username"
                              name="username"
                              type="text"
                              className="form-control"
                              required
                            />
                            <small className="form-text text-muted">
                              Username cannot be changed later.
                            </small>
                          </div>

                          <div className="form-group">
                            <label className="form-control-label">Email Address</label>
                            <input
                              id="email"
                              type="email"
                              className="form-control"
                              required
                            />
                            <small className="form-text text-muted">
                              Email cannot be changed later.
                            </small>
                          </div>

                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label className="form-control-label">Password</label>
                                <input
                                  id="password"
                                  type="password"
                                  className="form-control"
                                  required
                                  name="password"
                                />
                              </div>
                            </div>

                            <div className="col-lg-6">
                              <div className="form-group">
                                <label className="form-control-label">Confirm Password</label>
                                <input
                                  id="password-confirm"
                                  type="password"
                                  className="form-control"
                                  required
                                  name="password_confirm"
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {role === "mentor" && (
                        <>
                          {verifiedStatus == "notInitiated" && (
                            <>
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label className="form-control-label">First Name</label>
                                    <input
                                      id="first-name"
                                      type="text"
                                      className="form-control"
                                      name="first_name"
                                      required
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label className="form-control-label">Last Name</label>
                                    <input
                                      id="last-name"
                                      type="text"
                                      className="form-control"
                                      name="last_name"
                                      required
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label className="form-control-label">Username</label>
                                    <input
                                      id="username"
                                      type="text"
                                      className="form-control"
                                      name="username"
                                      required
                                    />
                                    <small className="form-text text-muted">
                                      Username cannot be changed later.
                                    </small>
                                  </div>
                                </div>

                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label className="form-control-label">College Email</label>
                                    <input
                                      id="university-email"
                                      type="email"
                                      className="form-control"
                                      name="email"
                                      value={collegeEmail}
                                      onChange={handleEmailChange}
                                      required
                                    />
                                    <small className="form-text text-muted">
                                      Email cannot be changed later.
                                    </small>
                                    {/* College detection display */}
                                    {collegeEmail && (
                                      <div className="college-detection">
                                        {detectedCollege ? (
                                          <div className="college-detected">
                                            <span className="college-detection-icon">✓</span>
                                            <strong>{detectedCollege}</strong>
                                          </div>
                                        ) : (
                                          <>
                                            <div className="college-not-detected">
                                              <span className="college-detection-icon">✗</span>
                                              College not found. Please verify your email domain.
                                            </div>
                                            <div className="contact-message">
                                              <strong>Need to add your college?</strong> Drop us an email at{' '}
                                              <a
                                                href="mailto:mentiff5@gmail.com?subject=Add My College - College Name&body=Hi,%0A%0AI would like to add my college to Mentiff's database.%0A%0ACollege Name: [Your College Name]%0ACollege Email Domain: [e.g., xyz.edu]%0ALocation: [City, State/Country]%0A%0AThank you!"
                                                className="contact-email"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                              >
                                                mentiff5@gmail.com
                                              </a>
                                              {' '}and we'll add it to our database.
                                            </div>
                                          </>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </>
                          )}

                          <div className="row">
                            {verifiedStatus == "pending" && (
                              <>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label className="form-control-label">Country</label>
                                    <Select
                                      id="country"
                                      name="country"
                                      options={countryOptions}
                                      value={selectedCountry}
                                      onChange={handleCountryChange}
                                      placeholder="Select Country"
                                      isClearable={!isCountryLocked}
                                      isSearchable={!isCountryLocked}
                                      isDisabled={isCountryLocked}
                                      required
                                      styles={{
                                        control: (provided) => ({
                                          ...provided,
                                          border: '1px solid #ced4da',
                                          boxShadow: 'none',
                                          backgroundColor: isCountryLocked ? '#f8f9fa' : provided.backgroundColor,
                                          '&:hover': {
                                            border: isCountryLocked ? '1px solid #ced4da' : '1px solid #80bdff',
                                          },
                                        }),
                                        menu: (provided) => ({
                                          ...provided,
                                          zIndex: 9999,
                                        }),
                                      }}
                                    />
                                    {isCountryLocked && (
                                      <div className="locked-info">
                                        Auto-selected based on your email domain
                                      </div>
                                    )}
                                  </div>
                                </div>

                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label className="form-control-label">University/College</label>
                                    <Select
                                      id="university"
                                      name="university"
                                      options={universityOptions}
                                      value={selectedUniversity}
                                      onChange={handleUniversityChange}
                                      placeholder="Select a university"
                                      isClearable={!isUniversityLocked}
                                      isSearchable={!isUniversityLocked}
                                      isDisabled={isUniversityLocked}
                                      required
                                      styles={{
                                        control: (provided) => ({
                                          ...provided,
                                          border: '1px solid #ced4da',
                                          boxShadow: 'none',
                                          backgroundColor: isUniversityLocked ? '#f8f9fa' : provided.backgroundColor,
                                          '&:hover': {
                                            border: isUniversityLocked ? '1px solid #ced4da' : '1px solid #80bdff',
                                          },
                                        }),
                                        menu: (provided) => ({
                                          ...provided,
                                          zIndex: 9999,
                                        }),
                                      }}
                                    />
                                    {isUniversityLocked && (
                                      <div className="locked-info">
                                        Auto-selected based on your email domain
                                      </div>
                                    )}
                                  </div>
                                </div>

                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label className="form-control-label">Degree</label>
                                    <Select
                                      id="degree"
                                      name="degree"
                                      options={degreeOptions}
                                      value={selectedDegree}
                                      onChange={handleDegreeChange}
                                      placeholder="Select Degree"
                                      isClearable
                                      isSearchable
                                      required
                                      styles={{
                                        control: (provided) => ({
                                          ...provided,
                                          border: '1px solid #ced4da',
                                          boxShadow: 'none',
                                          '&:hover': {
                                            border: '1px solid #80bdff',
                                          },
                                        }),
                                        menu: (provided) => ({
                                          ...provided,
                                          zIndex: 9999,
                                        }),
                                      }}
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label className="form-control-label">Year of Admission</label>
                                    <input
                                      id="year-of-admission"
                                      type="number"
                                      className="form-control"
                                      required
                                      name="year_of_admission"
                                    />
                                  </div>
                                </div>
                              </>
                            )}

                            {verifiedStatus != "pending" && (
                              <>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label className="form-control-label">Password</label>
                                    <input
                                      id="password"
                                      type="password"
                                      className="form-control"
                                      required
                                      name="password"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label className="form-control-label">Confirm Password</label>
                                    <input
                                      id="password-confirm"
                                      type="password"
                                      className="form-control"
                                      required
                                      name="password_confirm"
                                    />
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </>
                      )}

                      {verifiedStatus !== "verified" && (
                        <>
                          {/* <div className="form-group">
                            <div className="form-check form-check-xs custom-checkbox">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name="agreeCheckboxUser"
                                id="agree_checkbox_user"
                                required
                              />
                              <label className="form-check-label" htmlFor="agree_checkbox_user">
                                I agree to Mentiff
                              </label>{" "}
                              <Link tabIndex={-1} to="javascript:void(0);">
                                Privacy Policy
                              </Link>{" "}
                              &amp;{" "}
                              <Link tabIndex={-1} to="javascript:void(0);">
                                Terms.
                              </Link>
                            </div>
                          </div> */}


                          <div className="form-group">
                            <div className="form-check form-check-xs custom-checkbox">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name="agreeCheckboxUser"
                                id="agree_checkbox_user"
                                required
                              />
                              <label className="form-check-label" htmlFor="agree_checkbox_user">
                                I agree to Mentiff
                              </label>{" "}
                              <button type="button" className="link-button" onClick={() => setShowPrivacy(true)}>
                                Privacy Policy
                              </button>
                              &amp;
                              <button type="button" className="link-button" onClick={() => setShowTerms(true)}>
                                Terms &amp; Conditions
                              </button>
                              .
                            </div>
                          </div>
                          <Modal title="Privacy Policy" open={showPrivacy} onClose={() => setShowPrivacy(false)}>
                            <h6>1. Introduction</h6>
                            <p>
                              This Privacy Policy explains how Mentiff collects, uses, and protects your personal
                              information when you use our services and website.
                            </p>

                            <h6>2. Information We Collect</h6>
                            <ul>
                              <li>Account details (name, username, email)</li>
                              <li>Mentor/mentee profile data (university, degree, year)</li>
                              <li>Usage data (log data, device info, approximate location)</li>
                            </ul>

                            <h6>3. How We Use Information</h6>
                            <ul>
                              <li>Create and manage your account</li>
                              <li>Enable mentor–mentee discovery, booking, and chat</li>
                              <li>Improve, secure, and analyze our services</li>
                              <li>Communicate updates and service notifications</li>
                            </ul>

                            <h6>4. Sharing & Disclosure</h6>
                            <p>
                              We do not sell your data. We may share limited information with service providers,
                              comply with legal requests, and facilitate core features (e.g., scheduling/video).
                            </p>

                            <h6>5. Data Security & Retention</h6>
                            <p>
                              We use reasonable safeguards to protect data and retain it only as long as needed
                              for the purposes described or as required by law.
                            </p>

                            <h6>6. Your Rights</h6>
                            <p>
                              You may access, update, or delete certain data via your account, or contact us at
                              <a href="mailto:mentiff5@gmail.com"> mentiff5@gmail.com</a>.
                            </p>

                            <h6>7. Children</h6>
                            <p>Mentiff is not directed to children under 13.</p>

                            <h6>8. Changes</h6>
                            <p>We may update this policy; continued use means you accept the updated terms.</p>
                          </Modal>

                          <Modal title="Terms & Conditions" open={showTerms} onClose={() => setShowTerms(false)}>
                            <h6>1. Acceptance of Terms</h6>
                            <p>
                              By creating an account or using Mentiff, you agree to these Terms & Conditions.
                            </p>

                            <h6>2. Accounts & Eligibility</h6>
                            <ul>
                              <li>Provide accurate information and keep credentials secure</li>
                              <li>You are responsible for activity on your account</li>
                            </ul>

                            <h6>3. Use of Service</h6>
                            <ul>
                              <li>Follow applicable laws and be respectful in interactions</li>
                              <li>No spamming, harassment, or misuse of platform features</li>
                            </ul>

                            <h6>4. Mentor–Mentee Interactions</h6>
                            <p>
                              Mentiff facilitates connections; mentors are independent. We are not liable for
                              outcomes of sessions. Report issues to <a href="mailto:mentiff5@gmail.com">mentiff5@gmail.com</a>.
                            </p>

                            <h6>5. Payments & Bookings (if applicable)</h6>
                            <p>
                              Booking, pricing, and refund terms will be displayed where relevant and may be
                              updated from time to time.
                            </p>

                            <h6>6. IP & Content</h6>
                            <p>
                              You retain rights to your content. You grant Mentiff a license to host and display
                              it for service operation. Do not upload content you don’t have rights to.
                            </p>

                            <h6>7. Disclaimers & Liability</h6>
                            <p>
                              Services are provided “as is”. To the extent permitted by law, Mentiff’s liability
                              is limited.
                            </p>

                            <h6>8. Termination</h6>
                            <p>We may suspend or terminate accounts for policy violations or misuse.</p>

                            <h6>9. Governing Law</h6>
                            <p>These terms are governed by applicable laws of India.</p>
                          </Modal>



                          <button
                            className="btn btn-primary login-btn"
                            type="submit"
                            disabled={isSubmitDisabled()}
                            title={
                              role === "mentor" && verifiedStatus === "notInitiated" && collegeEmail && !isCollegeDetected
                                ? "Please use a valid college email or contact us to add your college"
                                : ""
                            }
                          >
                            Create Account
                          </button>
                        </>
                      )}

                      {loading && (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "10px",
                          }}
                        >
                          <div
                            style={{
                              border: "4px solid #f3f3f3",
                              borderTop: "4px solid #3498db",
                              borderRadius: "50%",
                              width: "20px",
                              height: "20px",
                              animation: "spin 1s linear infinite",
                            }}
                          ></div>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="alert alert-success mt-3">
                      {successMessages.general && <> {successMessages.general}</>}
                    </div>
                  )}

                  {Object.keys(errorMessages).length > 0 && (
                    <div className="alert alert-danger mt-3">
                      <ul>
                        {errorMessages.general && errorMessages.general.map((msg, index) => (
                          <li key={index}>{msg}</li>
                        ))}

                        {Object.keys(errorMessages).filter(field => field !== "general").map((field, index) => (
                          <li key={index}>
                            <strong>{field.charAt(0).toUpperCase() + field.slice(1)}:</strong>
                            {errorMessages[field].map((msg, i) => (
                              <div key={i}>{msg}</div>
                            ))}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="account-footer text-center mt-3">
                    Already have an account?{" "}
                    <Link className="forgot-link mb-0" to="/login">
                      Login
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;



















































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
  const query = new URLSearchParams(location.search); // Access query parameters from URL
  const userRole = query.get("user"); // Get the 'user' parameter from the URL
  const token = query.get("token"); // Get the token from the URL
  // Set 'role' to userRole if it's null or undefined
  const role = location.state?.role || userRole; // If role is null, use the userRole from the query string
  // const isVerified = !!token; // If token exists, consider the user verified
  const [isVerified, setIsVerified] = useState(false);
  const [verifiedStatus, setVerifiedStatus] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log("Mentor/Mentee role is? ");
  console.log(role);
  const [userDetails, setUserDetails] = useState(null); // To store the fetched user details
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedDegree, setSelectedDegree] = useState(null);
  const [errorMessages, setErrorMessages] = useState([]); // Store error messages here
  const [successMessages, setSuccessMessages] = useState([]);
  // const query = new URLSearchParams(location.search); // Access query parameters from URL
  // const isVerified = query.get("verified") === "true"; // Check if the user is verified

  // const isVerified = !!token; // If token exists, consider the user verified

  const countryOptions = countriesData.map((country) => ({
    value: country.label,
    label: country.label,
  }));

  const degreeOptions = degreeData.map((degree) => ({
    value: degree.value,
    label: degree.label,
  }));

  // Filter universities based on the selected country
  const filteredUnivOptions = selectedCountry
    ? universitiesData.filter((university) => university.country === selectedCountry.label)
    : [];

  const universityOptions = filteredUnivOptions.map((university) => ({
    value: university.name,
    label: `${university.name} - ${university.city}, ${university.state}`,
  }));

  useEffect(() => {
    document.body.classList.add("account-page");
    console.log(universitiesData)

    // if (isVerified && token) {
    //   fetchUserDetails(token);
    // }

    // if (token) {
    //   console.log("Token found, calling fetchUserDetails")
    //   fetchUserDetails(token);
    // }


    if (token) {
      fetchUserDetails(token, role);
    }





    else {
      setVerifiedStatus("notIntitated");
      console.log("verifiedStatus is ")
      console.log(verifiedStatus)

      setVerifiedStatus("notInitiated");
      console.log("setVerifiedStatus is")
      console.log(setVerifiedStatus)
    }


    return () => document.body.classList.remove("account-page");
  }, []);

  // const fetchUserDetails = async (token) => {
  const fetchUserDetails = async (token, role) => {

    try {
      // URL for the API endpoint
      const url = `http://127.0.0.1:8000/api/users/verify-email/${token}/`;
      console.log(url)

      // Prepare the payload with verification_status

      const requestBody = {
        verification_status: role === "mentor" ? "pending" : "verified",
        // verification_status: "pending",  // Pass verification status (e.g., 'pending', 'verified', 'rejected')
      };


      // Make the POST request with the appropriate method and headers
      const response = await fetch(url, {
        method: 'POST', // Change to POST request
        headers: {
          'Content-Type': 'application/json', // Tell the server the body is JSON
        },
        body: JSON.stringify(requestBody), // Send the verification status in the request body
      });


      // const response = await fetch(`http://127.0.0.1:8000/api/users/verify-email/${token}/`, {
      //   method: 'GET'
      // });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Token verification failed");
      }

      setUserDetails(data); // Assuming the response contains user details under 'user'
      console.log("Fetched user details:", data);

      // Set isVerified based on the userDetails response
      setVerifiedStatus(data.verification_status); // Assuming verification_status is part of the response data
      setIsVerified(data.is_verified); // Assuming is_verified is part of the response data
      console.log("User is_verified is: ")
      console.log(data.is_verified)
      console.log("verification_status is: ")
      console.log(data.verification_status)

    } catch (error) {
      setErrorMessages({ general: ["Token verification failed. Please try again later."] });
      console.error("Error fetching user details:", error);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset the previous messages before submitting the form again
    setShowSuccessMessage(false); // Hide the success message
    setErrorMessages({}); // Clear any previous error messages

    // Set loading state to true when form is submitted
    setLoading(true);


    // Filter out only the form input elements (ignoring buttons and other non-form controls)
    const formElements = Array.from(e.target.elements).filter((element) => element.name);
    // Log each form element's name and value
    formElements.forEach((element) => {
      console.log(element.name, element.value); // Log name and value of each element
    });

    // Initialize formData as an empty object
    console.log('here')
    // Simulate an async action (like an API call)
    let formData = {};

    console.log(userDetails)

    // Conditionally add data to formData from userDetails or from the form (e.target.elements)
    if (userDetails) {
      // If userDetails exists, populate formData from it
      console.log('userDetails found for form')
      formData.first_name = userDetails.first_name || '';
      formData.last_name = userDetails.last_name || '';
      formData.username = userDetails.username || '';
      formData.password = userDetails.password || ''; // This might be undefined, so fallback to empty string
    } else {
      // If userDetails does not exist, use the form values
      console.log('userDetails not found for form')
      formData.first_name = e.target.elements["first-name"].value;
      formData.last_name = e.target.elements["last-name"].value;
      formData.username = e.target.elements["username"].value;
      formData.password = e.target.elements["password"].value;
    }

    if (!userDetails) {// Check if passwords match (optional but recommended)
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

    // ##############


    // else if (role === "mentee" && verifiedStatus === "pending") {
    //   // Mentee flow: only set verification_status to verified
    //   formData.verification_status = 'verified';
    // }


    // ##############


    if (userDetails) {
      console.log('userdeatils found: setting user email to form')
      formData.email = userDetails.email;
      console.log(formData.email)
    }
    else {
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
        // URL for the API endpoint
        const apiUrl = `http://127.0.0.1:8000/api/users/verify-email/${token}/`;
        console.log('calling verify email api with post request to enter extra mentor details')
        console.log(apiUrl)

        formData.verification_status = 'verified';
        console.log(formData)

        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Token verification failed");
        }



        // NEW API CALL to create a group if not available and add mentor to it 
        const apiUrlCreateGroup = `http://127.0.0.1:8000/api/group/add-mentor/`;
        console.log("Creating a new group if group not available and adding the mentor to it...");
        console.log("UserDetails found: ")
        console.log(userDetails)
        let body = {}
        body.mentor_id = userDetails.id
        body.country = formData.country
        body.college = formData.college
        console.log('body to send in add mentor or create group is: ')
        console.log(body)
        const responseAddMentor = await fetch(apiUrlCreateGroup, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body), // Customize as needed
        });

        const addMentorData = await responseAddMentor.json();

        if (!responseAddMentor.ok) {
          throw new Error(addMentorData.message || "Mentor add failed");
        }

        const groupId = addMentorData.group_id;
        console.log("Mentor added successfully with ID");

        // Redirect to another page upon successful response IMPORTANT

        // window.location.href = '/login'; // Replace '/new-page' with the desired URL or path

        setShowSuccessMessage(true); // Show success message

        setSuccessMessages({ general: ["Registered successfully! Please login to continue.."] });


        setLoading(false); // Stop the loader after successful response
      }
      catch (error) {
        console.error("There was a problem with the fetch operation:", error);

        setErrorMessages({
          general: ["There was an issue with the server. Please try again later."]
        });
        setLoading(false); // Stop the loader after error
      }
    }

    else {
      try {
        console.log("User Details not found: Calling api to create only user instance")
        const apiUrl =
          role === "mentee"
            ? "http://127.0.0.1:8000/api/users/signup/mentee/"
            : "http://127.0.0.1:8000/api/users/signup/mentor/";

        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const responseText = await response.text();
        const result = JSON.parse(responseText); // Parse the response text to JSON

        console.log("Response Status:", response.status); // Log the status code
        console.log("Response Text:", responseText); // Log the response text

        // If the response status is 400, handle errors (username, email)
        if (!response.ok) {
          if (response.status === 400) {
            let errors = {}; // Create an object to store the errors

            // Handle specific field errors
            if (result.username) {
              errors.username = result.username;
            }
            if (result.email) {
              errors.email = result.email;
            }

            // Handle other errors
            if (result.non_field_errors) {
              errors.non_field = result.non_field_errors;
            }

            // Set the errorMessages state with all errors
            setErrorMessages(errors);
            setLoading(false); // Stop the loader on error
            return;
          }

          // If the error is not a field validation error, show a general error message
          setErrorMessages({
            general: ["Something went wrong, please try again later."]
          });
          setLoading(false); // Stop the loader on general error

          throw new Error(`HTTP error! status: ${response.status}`);
        }

        setShowSuccessMessage(true); // Show success message
        setSuccessMessages({ general: ["Please verify, a link has been sent to your email ID."] });

        setLoading(false); // Stop the loader after successful response
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);

        setErrorMessages({
          general: ["There was an issue with the server. Please try again later."]
        });
        setLoading(false); // Stop the loader after error
      }
    }
  };

  const handleUniversityChange = (selectedOption) => {
    console.log("Selected univ is : ")
    console.log(selectedOption)
    setSelectedUniversity(selectedOption);
  };

  const handleCountryChange = (selectedOption) => {
    // If selectedOption is null (i.e., the user clears the selection), we set selectedCountry to an empty string
    console.log("Selected country is : ")
    console.log(selectedOption)
    setSelectedCountry(selectedOption);
    setSelectedUniversity(null);
  };

  const handleDegreeChange = (selectedOption) => {
    console.log("Selected degree is : ")
    console.log(selectedOption)
    setSelectedDegree(selectedOption);
    // setSelectedMajor(null); // Reset Major when Degree is changed
  };


  return (
    <>
      <div className="bg-pattern-style bg-pattern-style-register">
        <div className="content">
          <div className="account-content">
            <div className="account-box">
              <div className="login-right">


                {/* <div className="login-header">
                  <h3>
                    <span>MENTIFF</span> REGISTERATION
                  </h3>
                  <p className="text-muted">Become a {role}</p>
                </div>




                <div className="login-header">
                  <h3>
                    <span>Welcome Back, </span> {userDetails?.first_name ? `${userDetails.first_name}` : 'REGISTER'}
                  </h3>
                  <p className="text-muted">
                    {userDetails?.first_name ? 'One step away to become a mentor @Mentiff!' : 'Become a mentor'}
                  </p>
                </div> */}


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
                  {/* If showSuccessMessage is false, render the form */}
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
                          </div>

                          <div className="form-group">
                            <label className="form-control-label">Email Address</label>
                            <input
                              id="email"
                              type="email"
                              className="form-control"
                              required
                            />
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
                                      // value={userDetails ? userDetails.first_name : ''}  // If userDetails exists, set the value, otherwise set empty string
                                      required
                                    // disabled={!!userDetails}  // Disabled if userDetails exist
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
                                      // value={userDetails ? userDetails.last_name : ''} // Set value based on userDetails
                                      required
                                    // readOnly={!!userDetails} // Make it read-only if userDetails is available
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
                                      // value={userDetails ? userDetails.username : ''} // Set value based on userDetails
                                      required
                                    // readOnly={!!userDetails} // Make it read-only if userDetails is available
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label className="form-control-label">University/College Email</label>
                                    <input
                                      id="university-email"
                                      type="email"
                                      className="form-control"
                                      name="email"
                                      // value={userDetails ? userDetails.email : ''} // Set value based on userDetails
                                      required
                                    // readOnly={!!userDetails} // Make it read-only if userDetails is available
                                    />
                                  </div>
                                </div>
                              </div>
                            </>
                          )}

                          <div className="row">

                            {/* {isVerified && ( */}
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
                                          zIndex: 9999, // To ensure dropdown is above other elements
                                        }),
                                      }}
                                    />
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
                                          zIndex: 9999, // To ensure dropdown is above other elements
                                        }),
                                      }}
                                    />
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
                                          zIndex: 9999, // To ensure dropdown is above other elements
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
                      </div>

                      <button
                        className="btn btn-primary login-btn"
                        type="submit"
                        disabled={loading} // Disable the button while loading
                      >
                        Create Account
                      </button> */}


                      {verifiedStatus !== "verified" && (
                        <>
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
                              <Link tabIndex={-1} to="javascript:void(0);">
                                Privacy Policy
                              </Link>{" "}
                              &amp;{" "}
                              <Link tabIndex={-1} to="javascript:void(0);">
                                Terms.
                              </Link>
                            </div>
                          </div>

                          <button
                            className="btn btn-primary login-btn"
                            type="submit"
                            disabled={loading} // Disable the button while loading
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
                    // If showSuccessMessage is true, show success message only
                    <div className="alert alert-success mt-3">
                      {successMessages.general && <> {successMessages.general}</>}

                    </div>
                  )}

                  {/* {showSuccessMessage && (
                    <div className="alert alert-success mt-3">
                      Please verify, a link has been sent to your email ID.
                    </div>
                  )} */}

                  {/* Error popup or alert */}
                  {Object.keys(errorMessages).length > 0 && (
                    <div className="alert alert-danger mt-3">
                      <ul>
                        {/* General errors */}
                        {errorMessages.general && errorMessages.general.map((msg, index) => (
                          <li key={index}>{msg}</li>
                        ))}

                        {/* Specific field errors */}
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

// import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Header from "../header";
// import Footer from "../footer";

// const LoginContainer = (props) => {
//   const history = useHistory();
//   const [showPassword, setShowPassword] = useState(false);
//   const inputRef = React.createRef();
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [error, setError] = useState("");
//   const [otpRequested, setOtpRequested] = useState(false);
//   const [otpSubmitted, setOtpSubmitted] = useState(false); // Whether OTP has been submitted
//   const [role, setRole] = useState(null); // Track selected role
//   const [loading, setLoading] = useState(false);
  

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//     inputRef.current.type = showPassword ? "password" : "text";
//   };

//   useEffect(() => {
//     const token = localStorage.getItem("authToken");

//     if (token) {
//       console.log("User is already logged in: Token found");
//       const redirectPath = localStorage.getItem("redirectAfterLogin");
//       console.log("Redirecting the user to ", redirectPath);
//       history.push(redirectPath); // Adjust the redirect path as necessary
//     }

//     document.body.classList.add("account-page");
//     return () => document.body.classList.remove("account-page");
//   }, [history]);

//   const handleRequestOTP = async (e) => {
//     e.preventDefault();
//     setError("");

//     // Set loading state to true when form is submitted
//     setLoading(true);

//     try {
//       await axios.post(`${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/request-otp/`, {
//         email,
//       });
//       setOtpRequested(true);
//     } catch (error) {
//       console.error("OTP request failed", error);
//       setError("Failed to send OTP or account not found.");
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError(""); // Clear previous errors

//     try {
//       const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/login/`, {
//         email,
//         otp,
//       });

//       const { token, user } = response.data;
//       console.log(user)

//       // If no token or user, handle it gracefully
//       // if (!token || !user) {
//       //   setError("Login failed. Please try again.");
//       //   return;
//       // }

//       // Store the token and user data in localStorage
//       localStorage.setItem("authToken", token);
//       localStorage.setItem("userData", JSON.stringify(user));

//       console.log("Token:", token);
//       console.log("User Data:", user);

//       // Redirect to the appropriate page after login
//       const redirectPath = localStorage.getItem("redirectAfterLogin");
//       localStorage.removeItem("redirectAfterLogin");

//       if (redirectPath && user.user_type != "mentor") {
//         history.push(redirectPath);
//       } else {
//         if (user.user_type == "mentor") {
//           history.push("/mentor/mentor-dashboard");
//         } else {
//           history.push("/");
//         }
//       }

//     } catch (error) {
//       console.error("Login failed", error);
//       console.log(error.response.data.error)
//       // Check if the error message is related to user verification
//       // if (error.response.data.error == 'Your account is not verified. Please check your email to verify your account.') {
//       //   setError("Your account is not verified. Please check your email to verify your account.");
//       // } else {
//       //   setError("Invalid email or OTP");
//       // }
//       setError(error.response.data.error)
//     }
//   };


//   const handleRoleSelect = (selectedRole) => {
//     setRole(selectedRole); // Set the selected role
//     history.push("/register", { role: selectedRole });
//   };


//   return (
//     <>
//       <div>


//         {/* <div className="content"> */}
//         {/* <div> */}
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100vw",
//             height: "100vh",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             backgroundColor: "#fdfdfdff", // light gray background, optional
//           }}
//         >
//           <div className="account-content">
//             <div className="account-box">
//               <div className="login-right">
//                 <div className="login-header">
//                   <h3>
//                     Login <span>Mentiff</span>
//                   </h3>
//                   <p className="text-muted">Access to our dashboard</p>
//                 </div>
//                 {error && <div className="alert alert-danger">{error}</div>}

//                 <form onSubmit={otpRequested ? handleLogin : handleRequestOTP}>
//                   <div className="form-group">
//                     <label className="form-control-label">Email Address</label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       required
//                     />
//                   </div>

//                   {otpRequested && (
//                     <>
//                       <div className="form-group">
//                         <label className="form-control-label">OTP</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           value={otp}
//                           onChange={(e) => setOtp(e.target.value)}
//                           required
//                         />
//                       </div>
                      
//                       <div className="text-end">
//                         {/* <Link className="forgot-link" to="/forgot-password">
//                           Resend OTP? 
//                         </Link> */}
                        
//                         <Link className="forgot-link" to="/forgot-password">
//                           Forgot Password?
//                         </Link>
                      
//                       </div>
//                     </>
//                   )}

//                   {!otpRequested ? (
//                     <button type="submit" className="btn btn-primary login-btn">
//                       Request OTP
//                     </button>
//                   ) : (
//                     <button type="submit" className="btn btn-primary login-btn">
//                       Login
//                     </button>
//                   )}

//                   {loading && (
//                     <div
//                       style={{
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         marginTop: "10px",
//                       }}
//                     >
//                       <div
//                         style={{
//                           border: "4px solid #f3f3f3",
//                           borderTop: "4px solid #3498db",
//                           borderRadius: "50%",
//                           width: "20px",
//                           height: "20px",
//                           animation: "spin 1s linear infinite",
//                         }}
//                       ></div>
//                     </div>
//                   )}

//                   <div className="text-center dont-have">
//                     Don’t have an account?{" "}
//                     {/* <Link to="/register">Register</Link> */}
//                   </div>

//                   {/* New Buttons for Mentor and Mentee */}
//                   {/* <div className="text-center mt-3">
//                     <Link to="/register" className="btn btn-secondary mx-2">
//                       Join as Mentor
//                     </Link>
//                     <Link to="/register" className="btn btn-secondary mx-2">
//                       Join as Mentee
//                     </Link>
//                   </div> */}

//                   <div
//                     className="text-center mt-3"
//                     style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}
//                   >
//                     <button
//                       className="btn btn-secondary"
//                       onClick={() => handleRoleSelect("mentee")}
//                     >
//                       Join as Mentee
//                     </button>

//                     <button
//                       className="btn btn-secondary"
//                       onClick={() => handleRoleSelect("mentor")}
//                     >
//                       Join as Mentor
//                     </button>


//                   </div>

//                   {
//                   /* /New Buttons */}
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LoginContainer;



















import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google"; // ✅ added

const LoginContainer = (props) => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = React.createRef();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [otpRequested, setOtpRequested] = useState(false);
  const [otpSubmitted, setOtpSubmitted] = useState(false); 
  const [role, setRole] = useState(null); 
  const [loading, setLoading] = useState(false);
  const clientId = "967688971465-dolsps6mln2mr1kueavd8nkuon2r39kf.apps.googleusercontent.com"
  console.log("MY URL HIT LOCATION IS ::::")
  console.log(window.location.origin)


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    inputRef.current.type = showPassword ? "password" : "text";
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      console.log("User is already logged in: Token found");
      const redirectPath = localStorage.getItem("redirectAfterLogin");
      console.log("Redirecting the user to ", redirectPath);
      history.push(redirectPath); 
    }

    document.body.classList.add("account-page");
    return () => document.body.classList.remove("account-page");
  }, [history]);

  const handleRequestOTP = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await axios.post(`${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/request-otp/`, {
        email,
      });
      setOtpRequested(true);
    } catch (error) {
      console.error("OTP request failed", error);
      setError("Failed to send OTP or account not found.");
    } finally {
      setLoading(false); 
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); 

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/login/`, {
        email,
        otp,
      });

      const { token, user } = response.data;
      console.log(user)

      localStorage.setItem("authToken", token);
      localStorage.setItem("userData", JSON.stringify(user));

      console.log("Token:", token);
      console.log("User Data:", user);

      const redirectPath = localStorage.getItem("redirectAfterLogin");
      localStorage.removeItem("redirectAfterLogin");

      if (redirectPath && user.user_type !== "mentor") {
        history.push(redirectPath);
      } else {
        if (user.user_type === "mentor") {
          history.push("/mentor/mentor-dashboard");
        } else {
          history.push("/");
        }
      }

    } catch (error) {
      console.error("Login failed", error);
      console.log(error.response?.data?.error)
      setError(error.response?.data?.error || "Login failed");
    }
  };

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole); 
    history.push("/register", { role: selectedRole });
  };

const handleGoogleSuccess = async (credentialResponse) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/auth/google/`,
      { credential: credentialResponse.credential }
    );
// {
//   "user": {
//     "id": 2,
//     "profile_picture": "http://www.api.mentiff.com/media/https%3A/lh3.googleusercontent.com/a/ACg8ocKcp_w_ovLM7xXZnkKxwAUS2Q2qjRkEGuDxUnqND-vL4l6Czw%3Ds96-c",
//     "mentee_id": 9,
//     "mentor_id": null,
//     "first_name": "Harshit",
//     "last_name": "Pathak",
//     "email": "harshit.pathak2301@gmail.com",
//     "username": "ankitkh9",
//     "user_type": "mentee"
//   },
//   "token": [
//     "d439fbca678cb3e0f968fd2698c44bfcacda167f"
//   ]
// }
    // success → response contains token + user
    const { tokens, user } = res.data;

    localStorage.setItem("authToken", token[0]); // adjust if backend sends differently
    localStorage.setItem("userData", JSON.stringify(user));

    setError(null); // clear any old errors

    if (user.user_type === "mentor") {
      history.push("/mentor/mentor-dashboard");
    } else {
      history.push("/");
    }
  } catch (err) {
    console.error("Google login failed", err);

    // Handle backend error dynamically
    if (err.response && err.response.data) {
      setError(err.response.data.detail || "Google login failed");
    } else {
      setError("Google login failed. Try again.");
    }
  }
};


  return (
    <GoogleOAuthProvider clientId="967688971465-dolsps6mln2mr1kueavd8nkuon2r39kf.apps.googleusercontent.com">
      <div>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fdfdfdff",
          }}
        >
          <div className="account-content">
            <div className="account-box">
              <div className="login-right">
                <div className="login-header">
                  <h3>
                    Login <span>Mentiff</span>
                  </h3>
                  <p className="text-muted">Access to our dashboard</p>
                </div>
                {error && <div className="alert alert-danger">{error}</div>}

                <form onSubmit={otpRequested ? handleLogin : handleRequestOTP}>
                  <div className="form-group">
                    <label className="form-control-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  {otpRequested && (
                    <>
                      <div className="form-group">
                        <label className="form-control-label">OTP</label>
                        <input
                          type="text"
                          className="form-control"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="text-end">
                        <Link className="forgot-link" to="/forgot-password">
                          Forgot Password?
                        </Link>
                      </div>
                    </>
                  )}

                  {!otpRequested ? (
                    <button type="submit" className="btn btn-primary login-btn">
                      Request OTP
                    </button>
                  ) : (
                    <button type="submit" className="btn btn-primary login-btn">
                      Login
                    </button>
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

                  <div className="text-center dont-have">
                    Don’t have an account?{" "}
                  </div>

                  <div
                    className="text-center mt-3"
                    style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}
                  >
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleRoleSelect("mentee")}
                    >
                      Join as Mentee
                    </button>

                    <button
                      className="btn btn-secondary"
                      onClick={() => handleRoleSelect("mentor")}
                    >
                      Join as Mentor
                    </button>
                  </div>
                </form>

                {/* ✅ Google Login Button */}
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                  <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={() => setError("Google login failed")}
                  />
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginContainer;

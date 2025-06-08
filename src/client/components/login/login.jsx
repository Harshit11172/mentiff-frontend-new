import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

const LoginContainer = (props) => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = React.createRef();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [otpRequested, setOtpRequested] = useState(false);
  const [otpSubmitted, setOtpSubmitted] = useState(false); // Whether OTP has been submitted
  const [role, setRole] = useState(null); // Track selected role
  const [loading, setLoading] = useState(false);

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
      history.push(redirectPath); // Adjust the redirect path as necessary
    }

    document.body.classList.add("account-page");
    return () => document.body.classList.remove("account-page");
  }, [history]);

  const handleRequestOTP = async (e) => {
    e.preventDefault();
    setError("");

    // Set loading state to true when form is submitted
    setLoading(true);

    try {
      await axios.post(`${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/request-otp/`,  {
        email,
      });
      setOtpRequested(true);
    } catch (error) {
      console.error("OTP request failed", error);
      setError("Failed to send OTP");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/login/`,{
        email,
        otp,
      });

      const { token, user } = response.data;
      console.log(user)

      // If no token or user, handle it gracefully
      // if (!token || !user) {
      //   setError("Login failed. Please try again.");
      //   return;
      // }

      // Store the token and user data in localStorage
      localStorage.setItem("authToken", token);
      localStorage.setItem("userData", JSON.stringify(user));

      console.log("Token:", token);
      console.log("User Data:", user);

      // Redirect to the appropriate page after login
      const redirectPath = localStorage.getItem("redirectAfterLogin");
      localStorage.removeItem("redirectAfterLogin");

      if (redirectPath && user.user_type!="mentor") {
        history.push(redirectPath);
      } else {
        if (user.user_type == "mentor") {
          history.push("/mentor/mentor-dashboard");
        } else {
          history.push("/index-5");
        }
      }

    } catch (error) {
      console.error("Login failed", error);
      console.log(error.response.data.error)
      // Check if the error message is related to user verification
      // if (error.response.data.error == 'Your account is not verified. Please check your email to verify your account.') {
      //   setError("Your account is not verified. Please check your email to verify your account.");
      // } else {
      //   setError("Invalid email or OTP");
      // }
      setError(error.response.data.error)
    }
  };


  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole); // Set the selected role
    history.push("/register", { role: selectedRole });
  };


  return (
    <>
      <div className="bg-pattern-style">

        <div className="content">
          <div className="account-content">
            <div className="account-box">
              <div className="login-right">
                <div className="login-header">
                  <h3>
                    Login <span>Mentoring</span>
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
                        {/* <Link className="forgot-link" to="/forgot-password">
                          Resend OTP? 
                        </Link> */}
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
                    {/* <Link to="/register">Register</Link> */}
                  </div>

                  {/* New Buttons for Mentor and Mentee */}
                  {/* <div className="text-center mt-3">
                    <Link to="/register" className="btn btn-secondary mx-2">
                      Join as Mentor
                    </Link>
                    <Link to="/register" className="btn btn-secondary mx-2">
                      Join as Mentee
                    </Link>
                  </div> */}
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-secondary mx-2"
                      onClick={() => handleRoleSelect("mentor")}
                    >
                      Join as Mentor
                    </button>
                    <button
                      className="btn btn-secondary mx-2"
                      onClick={() => handleRoleSelect("mentee")}
                    >
                      Join as Mentee
                    </button>
                  </div>
                  {/* /New Buttons */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginContainer;

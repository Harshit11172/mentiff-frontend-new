import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

const Register = (props) => {
  useEffect(() => {
    document.body.classList.add("account-page");

    return () => document.body.classList.remove("account-page");
  }, []);

  return (
    <>
      {/* Page Content */}
      <div className="bg-pattern-style bg-pattern-style-register">
        <div className="content">
          {/* Register Content */}
          <div className="account-content">
            <div className="account-box">
              <div className="login-right">
                <div className="login-header">
                  <h3>
                    <span>Mentoring</span> Registration
                  </h3>
                  <p className="text-muted">Please select your role</p>
                </div>

                {/* Role Selection */}
                <div className="role-selection">
                  <Link to="/mentor-registration" className="btn btn-primary mx-2">
                    Mentor
                  </Link>
                  <Link to="/mentee-registration" className="btn btn-primary mx-2">
                    Mentee
                  </Link>
                </div>
                {/* /Role Selection */}
              </div>
            </div>
          </div>
          {/* /Register Content */}
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};

export default Register;

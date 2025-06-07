import React, { useEffect } from "react";
// import { useHistory } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";

const MenteeRegister = (props) => {
  // const history = useHistory();
  useEffect(() => {
    document.getElementsByTagName("body")[0].className = "account-pages";

    return () => (document.getElementsByTagName("body")[0].className = "");
  });

  return (
    <>
      <Header {...props} />
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 offset-md-4">
              {/* Account Content */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Mentee Register{" "}
                        <Link href="/mentor/mentor-register">Not a Mentee?</Link>
                      </h3>
                    </div>
                    {/* Register Form */}
                    <form action="/mentee/dashboard">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" />
                        <label className="focus-label">Name</label>
                      </div>
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" />
                        <label className="focus-label">Mobile Number</label>
                      </div>
                      <div className="form-group form-focus">
                        <input
                          type="password"
                          className="form-control floating"
                        />
                        <label className="focus-label">Create Password</label>
                      </div>
                      <div className="text-end">
                        <Link className="forgot-link" href="/login">
                          Already have an account?
                        </Link>
                      </div>
                      <button
                        className="btn btn-primary btn-block btn-lg login-btn"
                        type="submit"
                      >
                        Signup
                      </button>
                      <div className="login-or">
                        <span className="or-line" />
                        <span className="span-or">or</span>
                      </div>
                      <div className="row form-row social-login">
                        <div className="col-6">
                          <Link
                            href="#"
                            className="btn btn-facebook btn-block w-100"
                          >
                            <i className="fab fa-facebook-f me-1" /> Login
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link
                            href="#"
                            className="btn btn-google btn-block w-100"
                          >
                            <i className="fab fa-google me-1" /> Login
                          </Link>
                        </div>
                      </div>
                    </form>
                    {/* /Register Form */}
                  </div>
                </div>
              </div>
              {/* /Account Content */}
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} />
    </>
  );
};

export default MenteeRegister;

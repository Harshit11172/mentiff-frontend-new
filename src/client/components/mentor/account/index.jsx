import React, { useState, useEffect } from "react";
// import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";
// import { Tab, Tabs, Modal } from "react-bootstrap";
import HomeFiveHeader from "../../home/home-five/header";

import {
  patient,
  patient1,
  patient2,
  patient3,
  patient4,
  patient5,
} from "./image.jsx";
import Header from "../../header";
import Footer from "../../footer";
import DoctorSidebar from "../../mentor/sidebar/index.jsx";
import { Modal } from "react-bootstrap";

const Accounts = (props) => {
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState(false);

  const [mentorEarning, setMentorEarning] = useState({
    total_earnings: 0.00,
    amount_requested: 0.00,
    balance: 0.00,
    updated_at: null,
  });


  // Store fetched account details here
  const [accountDetails, setAccountDetails] = useState({
    bank_name: "",
    ifsc_code: "",
    bank_account_number: "",
    account_holder_name: "",
  });

  // Form state for editing
  const [formData, setFormData] = useState({
    bank_name: "",
    ifsc_code: "",
    bank_account_number: "",
    account_holder_name: "",
  });

  const authToken = localStorage.getItem("authToken"); // get auth token

  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        const response = await fetch( `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/account-details/`,{
          method: "GET",
          headers: {
            Authorization: `Token ${authToken}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) throw new Error("Failed to fetch account details");

        const data = await response.json();
        setAccountDetails(data);
        setFormData({
          bank_name: data.bank_name || "",
          ifsc_code: data.ifsc_code || "",
          bank_account_number: data.bank_account_number || "",
          account_holder_name: data.account_holder_name || "",
        });
      } catch (error) {
        console.error(error);
      }
    };

    const fetchMentorEarnings = async () => {
      try {
        const response = await fetch( `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/mentor-earning/`,{
          method: "GET",
          headers: {
            Authorization: `Token ${authToken}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) throw new Error("Failed to fetch mentor earnings");

        const data = await response.json();
        setMentorEarning(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (authToken) {
      fetchAccountDetails();
      fetchMentorEarnings();
    }
  }, [authToken]);


  // Open modal and set form data to current account details
  const handleShow = () => {
    setFormData(accountDetails);
    setShow(true);
  };
  const handleClose = () => setShow(false);

  const displayShow = () => setDisplay(true);
  const displayClose = () => setDisplay(false);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Submit updated account details
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/account-details/`, {
      method: "POST",
      headers: {
        Authorization: `Token ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to save account details");
        return res.json();
      })
      .then((data) => {
        setAccountDetails(data);
        alert("Account details saved successfully!");
        setShow(false);
      })
      .catch((err) => alert(err.message));
  };

  console.log(accountDetails)


  return (
    <div>
      {/* <Header {...props} /> */}

      <HomeFiveHeader />
      <>
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                {/* Profile Sidebar */}
                <DoctorSidebar />
                {/* /Profile Sidebar */}
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="row">
                  <div className="col-lg-5 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <div className="row">
                          <div className="col-sm-6">
                            <h3 className="card-title">Account</h3>
                          </div>
                          <div className="col-sm-6">
                            <div className="text-end">
                              <Link
                                title="Edit Profile"
                                className="btn btn-primary btn-sm"
                                to="#account_modal"
                                // data-bs-toggle="modal"
                                onClick={handleShow}
                              >
                                <i className="fas fa-pencil"></i> Edit Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">

                        <div className="profile-view-bottom">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="info-list">
                                <div className="title">Bank Name</div>
                                <div className="text" id="bank_name">

                                  {accountDetails.bank_name || "-"}
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="info-list">
                                <div className="title">Branch IFSC</div>
                                <div className="text" id="ifsc_code">
                                  {accountDetails.ifsc_code || "-"}

                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="info-list">
                                <div className="title">Account Number</div>
                                <div className="text" id="bank_account_number">
                                  {accountDetails.bank_account_number || "-"}
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="info-list">
                                <div className="title">Holder's Name</div>
                                <div className="text" id="account_holder_name">
                                  {accountDetails.account_holder_name || "-"}
                                </div>
                              </div>
                            </div>






                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 d-flex">
                    <div className="card flex-fill">
                      <div className="card-body">
                        <div className="row">

                          {mentorEarning && (
                            <>
                              {/* <div className="col-lg-6">
                                <div className="account-card bg-success-light">
                                  <span>₹{parseFloat(mentorEarning.total_earnings).toFixed(2)}</span> Total Earnings
                                </div>
                              </div>

                              <div className="col-lg-6">
                                <div className="account-card bg-warning-light">
                                  <span>₹{parseFloat(mentorEarning.amount_requested).toFixed(2)}</span> Requested
                                </div>
                              </div>

                              <div className="col-lg-6">
                                <div className="account-card bg-purple-light">
                                  <span>₹{parseFloat(mentorEarning.balance).toFixed(2)}</span> Wallet
                                </div>
                              </div> */}

                              <div className="col-lg-6">
                                <div className="account-card bg-success-light">
                                  <span>₹{parseFloat(mentorEarning.total_earnings).toFixed(2)}</span> Total Earnings
                                </div>
                              </div>

                               <div className="col-lg-6">
                                <div className="account-card bg-primary-light">
                                  <span>₹{parseFloat(mentorEarning.balance).toFixed(2)}</span> Wallet
                                </div>
                              </div>


                              <div className="col-lg-6">
                                <div className="account-card bg-info-light">
                                  <span>₹{parseFloat(mentorEarning.amount_requested).toFixed(2)}</span> Requested
                                </div>
                              </div>

                             

                              {/* <div className="col-lg-6">
                                <div className="account-card bg-purple-light">
                                  <span>₹{parseFloat(mentorEarning.balance).toFixed(2)}</span> Wallet
                                </div>
                              </div> */}



                            </>
                          )}
  

                          <div className="col-md-12 text-center">
                            <Link
                              to="#payment_request_modal"
                              className="btn btn-primary request_btn"
                              // data-bs-toggle="modal"
                              onClick={displayShow}
                            >
                              Payment Request
                            </Link>

                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card">
                      <div className="card-body pt-0">
                        {/* Tab Menu */}
                        <nav className="user-tabs mb-4">
                          <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                            <li className="nav-item">
                              <Link
                                className="nav-link active"
                                to="#pat_accounts"
                                data-bs-toggle="tab"
                              >
                                Accounts
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                className="nav-link"
                                to="#pat_refundrequest"
                                data-bs-toggle="tab"
                              >
                                Patients Refund Request
                              </Link>
                            </li>
                          </ul>
                        </nav>
                        {/* /Tab Menu */}
                        {/* Tab Content */}
                        <div className="tab-content pt-0">
                          {/* Accounts Tab */}
                          <div
                            id="pat_accounts"
                            className="tab-pane fade show active"
                          >
                            <div className="card card-table mb-0">
                              <div className="card-body">
                                <div className="table-responsive">
                                  <table className="table table-hover table-center mb-0">
                                    <thead>
                                      <tr>
                                        <th>Date</th>
                                        <th>Mentee Name</th>
                                        <th className="text-center">Amount</th>
                                        <th>Status</th>
                                        <th />
                                      </tr>
                                    </thead>


                                    <tbody>
                                      <tr>
                                        <td>
                                          11 Nov 2024{" "}
                                          <span className="d-block text-info">
                                            10.00 AM
                                          </span>
                                        </td>

                                        <td>
                                          <h2 className="table-avatar">
                                            <Link
                                              to="/mentor/mentee-profile"
                                              className="avatar avatar-sm me-2"
                                            >
                                              <img
                                                className="avatar-img rounded-circle"
                                                src={patient}
                                                alt="User Image"
                                              />
                                            </Link>
                                            <Link to="/mentor/mentee-profile">
                                              Richard Wilson{" "}
                                              <span>#PT0016</span>
                                            </Link>
                                          </h2>
                                        </td>


                                        <td className="text-center">$150</td>
                                        <td>
                                          <span className="badge rounded-pill bg-success-light">
                                            Paid
                                          </span>
                                        </td>


                                        <td className="text-end">
                                          <div className="table-action">
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-info-light"
                                              style={{ marginRight: "5px" }}
                                            >
                                              <i className="far fa-eye" /> View
                                            </Link>
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-success-light"
                                              style={{ marginRight: "5px" }}
                                            >
                                              <i className="fas fa-check" />{" "}
                                              Accept
                                            </Link>
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-danger-light"
                                            >
                                              <i className="fas fa-times" />{" "}
                                              Cancel
                                            </Link>
                                          </div>
                                        </td>
                                      </tr>



                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* /Accounts Tab */}

                          {/* Refund Request Tab */}
                          <div className="tab-pane fade" id="pat_refundrequest">
                            <div className="card card-table mb-0">
                              <div className="card-body">
                                <div className="table-responsive">
                                  <table className="table table-hover table-center mb-0">
                                    <thead>
                                      <tr>
                                        <th>Date</th>
                                        <th>Mentee Name</th>
                                        <th className="text-center">Amount</th>
                                        <th>Status</th>
                                        <th />
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          11 Nov 2024{" "}
                                          <span className="d-block text-info">
                                            10.00 AM
                                          </span>
                                        </td>
                                        <td>
                                          <h2 className="table-avatar">
                                            <Link
                                              to="/mentor/mentee-profile"
                                              className="avatar avatar-sm me-2"
                                            >
                                              <img
                                                className="avatar-img rounded-circle"
                                                src={patient}
                                                alt="User Image"
                                              />
                                            </Link>
                                            <Link to="/mentor/mentee-profile">
                                              Richard Wilson{" "}
                                              <span>#PT0016</span>
                                            </Link>
                                          </h2>
                                        </td>
                                        <td className="text-center">$150</td>
                                        <td>
                                          <span className="badge rounded-pill bg-success-light">
                                            Paid
                                          </span>
                                        </td>
                                        <td className="text-end">
                                          <div className="table-action">
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-info-light"
                                              style={{ marginRight: "5px" }}
                                            >
                                              <i className="far fa-eye" /> View
                                            </Link>
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-success-light"
                                              style={{ marginRight: "5px" }}
                                            >
                                              <i className="fas fa-check" />{" "}
                                              Accept
                                            </Link>
                                            <Link
                                              to="#"
                                              className="btn btn-sm bg-danger-light"
                                            >
                                              <i className="fas fa-times" />{" "}
                                              Cancel
                                            </Link>
                                          </div>
                                        </td>
                                      </tr>



                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* /Refund Request Tab */}

                        </div>
                        {/* Tab Content */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </>

      {/* <Footer {...props} /> */}

      {/* Account Details Modal*/}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        style={{ zIndex: 99999, marginTop: "55px" }}
      >
        <Modal.Header closeButton>
          <h5 className="modal-title">Account Details</h5>
        </Modal.Header>


        <Modal.Body>
          <form id="accounts_form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="control-label">Bank Name</label>
              <input
                type="text"
                name="bank_name"
                className="form-control bank_name"
                value={formData.bank_name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="control-label">Branch Name</label>
              <input
                type="text"
                name="ifsc_code"
                className="form-control branch_name"
                value={formData.ifsc_code}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="control-label">Account Number</label>
              <input
                type="text"
                name="bank_account_number"
                className="form-control account_no"
                value={formData.bank_account_number}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="control-label">Holder's Name</label>
              <input
                type="text"
                name="account_holder_name"
                className="form-control acc_name"
                value={formData.account_holder_name}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </Modal.Body>

        <Modal.Footer></Modal.Footer>
      </Modal>

      {/* /Account Details Modal*/}




      <Modal show={display} onHide={displayClose} centered>

        <Modal.Header closeButton>
          <h5 className="modal-title">Payment Request</h5>
        </Modal.Header>

        <Modal.Body>
          <form id="payment_request_form" method="post">
            <input
              type="hidden"
              name="payment_type"
              id="payment_type"
              defaultValue={1}
            />
            <div className="mb-3">
              <label>Request Amount</label>
              <input
                type="text"
                name="request_amount"
                id="request_amount"
                className="form-control"
                maxLength={6}
              // oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
              />
              <span className="help-block" />
            </div>
            <div className="mb-3">
              <label>Description (Optional)</label>
              <textarea
                className="form-control"
                name="description"
                id="description"
                defaultValue={""}
              />
              <span className="help-block" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button type="submit" id="request_btn" className="btn btn-primary">
            Request
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Accounts;

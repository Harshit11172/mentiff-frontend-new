import React, { useState } from "react";
import SidebarNav from "../sidebar";
import {
  avatar04,
  avatar06,
  avatar08,
  avatar10,
  avatar11,
  invoice_1,
  invoice_2,
  invoice_3,
  invoice_4,
  invoice_5,
} from "../imagepath";
import { Link } from "react-router-dom";
import { DatePicker, Table } from "antd";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const InvoiceOverdue = () => {
  const [checkBoxesVisible1, setCheckBoxesVisible1] = useState(false);
  const [checkBoxesVisible2, setCheckBoxesVisible2] = useState(false);
  const [checkBoxesVisible3, setCheckBoxesVisible3] = useState(false);
  const [checkBoxesVisible4, setCheckBoxesVisible4] = useState(false);

  const handleSelectBoxClick1 = () => {
    setCheckBoxesVisible1(!checkBoxesVisible1);
  };
  const handleSelectBoxClick2 = () => {
    setCheckBoxesVisible2(!checkBoxesVisible2);
  };
  const handleSelectBoxClick3 = () => {
    setCheckBoxesVisible3(!checkBoxesVisible3);
  };
  const handleSelectBoxClick4 = () => {
    setCheckBoxesVisible4(!checkBoxesVisible4);
  };
  const data = [
    {
      id: 1,
      menteeId: "IN093439#@09",
      category: "PHP Developer",
      createdOn: "16 Mar 2024",
      menteeTo: "Barbara Moore",
      amount: "$1,54,220",
      image: avatar04,
      dueDate: "23 Mar 2024	",
      status: "Overdue",
    },
    {
      id: 2,
      menteeId: "IN093439#@10",
      category: "Ui Designer",
      createdOn: "14 Mar 2024",
      menteeTo: "Jennifer Floyd",
      amount: "$5,200",
      image: avatar11,
      dueDate: "20 Mar 2024",
      status: "Overdue",
    },
    {
      id: 3,
      menteeId: "IN093439#@11",
      category: "Digital Marketer",
      createdOn: "7 Mar 2024",
      menteeTo: "Joseph Collins",
      amount: "$8,265",
      image: avatar10,
      dueDate: "30 Mar 2024",
      status: "Overdue",
    },
    {
      id: 4,
      menteeId: "IN093439#@12",
      category: "Project Manager",
      createdOn: "24 Mar 2024",
      menteeTo: "Karlene Chaidez",
      amount: "$8,265",
      image: avatar06,
      dueDate: "18 Mar 2024",
      status: "Overdue",
    },
    {
      id: 5,
      menteeId: "IN093439#@13",
      category: "Web Developer	",
      createdOn: "17 Mar 2024",
      menteeTo: "Russell Copeland",
      amount: "$3,470",
      image: avatar08,
      dueDate: "10 Mar 2024",
      status: "Overdue",
    },
  ];
  const columns = [
    {
      title: "Mentee ID",
      dataIndex: "menteeId",
      render: (text) => (
        <>
          <label className="custom_check">
            <input type="checkbox" name="invoice" />
            <span className="checkmark" />
          </label>
          <Link to="view-invoice" className="invoice-link">
            {text}
          </Link>
        </>
      ),
      sorter: (a, b) => a.menteeId.length - b.menteeId.length,
    },
    {
      title: "Created On",
      dataIndex: "createdOn",
      sorter: (a, b) => a.createdOn.length - b.createdOn.length,
    },
    {
      title: "Mentee to",
      dataIndex: "menteeTo",
      render: (text, record) => (
        <>
          <h2 className="table-avatar">
            <Link to="profile">
              <img
                className="avatar avatar-sm me-2 avatar-img rounded-circle"
                src={record.image}
                alt="User Image"
              />{" "}
              {text}
            </Link>
          </h2>
        </>
      ),
      sorter: (a, b) => a.menteeTo.length - b.menteeTo.length,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      sorter: (a, b) => a.amount.length - b.amount.length,
    },
    {
      title: "Paid On",
      dataIndex: "dueDate",
      sorter: (a, b) => a.dueDate.length - b.dueDate.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => {
        let className = "";
        switch (status) {
          case "Cancelled":
            className = "badge bg-primary-light";
            break;
          case "Overdue":
            className = "badge bg-danger-light";
            break;
          case "Paid":
            className = "badge bg-success-light";
            break;
            default:
              className = "badge bg-primary-light"
        }

        return <span className={className}>{status}</span>;
      },
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Action",
      render: () => (
        <div>
          <Link
            to="edit-invoice"
            className="btn btn-sm btn-white text-success me-2"
          >
            <i className="far fa-edit me-1" /> Edit
          </Link>
          <Link
            className="btn btn-sm btn-white text-danger"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#delete_paid"
          >
            <i className="far fa-trash-alt me-1" />
            Delete
          </Link>
        </div>
      ),
      sorter: (a, b) => a.length - b.length,
    },
  ];
  return (
    <>
      <SidebarNav />
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Invoices</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="invoices">Invoice</Link>
                  </li>
                  <li className="breadcrumb-item active">Invoices Paid</li>
                </ul>
              </div>
              <div className="col-auto">
                <Link to="invoices" className="invoices-links active">
                  <FeatherIcon icon="list" />
                </Link>
                <Link to="invoice-grid" className="invoices-links">
                  <FeatherIcon icon="grid" />
                </Link>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          {/* Report Filter */}
          <div className="card report-card">
            <div className="card-body pb-0">
              <div className="row">
                <div className="col-md-12">
                  <ul className="app-listing">
                    <li>
                      <div className="multipleSelection">
                        <div
                          className="selectBox"
                          onClick={handleSelectBoxClick1}
                        >
                          <p className="mb-0">
                            <FeatherIcon icon="user-plus" className="me-1 select-icon"/>
                            {" "}
                            Select User
                          </p>
                          <span className="down-icon">
                            <FeatherIcon icon="chevron-down" />
                          </span>
                        </div>
                        <div
                          id="checkBoxes"
                          style={{
                            display: checkBoxesVisible1 ? "block" : "none",
                          }}
                        >
                          <form action="#">
                            <p className="checkbox-title">Customer Search</p>
                            <div className="form-custom">
                              <input
                                type="text"
                                className="form-control bg-grey"
                                placeholder="Enter Customer Name"
                              />
                            </div>
                            <div className="selectBox-cont">
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Brian Johnson
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Russell Copeland
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Greg Lynch
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> John Blair
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Barbara Moore
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Hendry Evan
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Richard Miles
                              </label>
                            </div>
                            <button
                              type="submit"
                              className="btn w-100 btn-primary"
                            >
                              Apply
                            </button>
                            <button type="reset" className="btn w-100 btn-grey">
                              Reset
                            </button>
                          </form>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="multipleSelection">
                        <div
                          className="selectBox"
                          onClick={handleSelectBoxClick2}
                        >
                          <p className="mb-0">
                            <FeatherIcon icon="calendar" className=" me-1 select-icon" />{" "}
                            Select Date
                          </p>
                          <span className="down-icon">
                            <FeatherIcon icon="chevron-down" />
                          </span>
                        </div>
                        <div
                          id="checkBoxes"
                          style={{
                            display: checkBoxesVisible2 ? "block" : "none",
                          }}
                        >
                          <form action="#">
                            <p className="checkbox-title">Date Filter</p>
                            <div className="selectBox-cont selectBox-cont-one h-auto">
                              <div className="date-picker">
                                <div className="form-custom cal-icon">
                                  {/* <input
                                    className="form-control datetimepicker"
                                    type="text"
                                    placeholder="Form"
                                  /> */}
                                  <DatePicker
                                    className="form-control datetimepicker"
                                    suffixIcon={null}
                                    placeholder="24/11/2024"
                                  />
                                </div>
                              </div>
                              <div className="date-picker pe-0">
                                <div className="form-custom cal-icon">
                                  {/* <input
                                    className="form-control datetimepicker"
                                    type="text"
                                    placeholder="To"
                                  /> */}
                                  <DatePicker
                                    className="form-control datetimepicker"
                                    suffixIcon={null}
                                    placeholder="24/11/2024"
                                  />
                                </div>
                              </div>
                              <div className="date-list">
                                <ul>
                                  <li>
                                    <Link to="#" className="btn date-btn">
                                      Today
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#" className="btn date-btn">
                                      Yesterday
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#" className="btn date-btn">
                                      Last 7 days
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#" className="btn date-btn">
                                      This month
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#" className="btn date-btn">
                                      Last month
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="multipleSelection">
                        <div
                          className="selectBox"
                          onClick={handleSelectBoxClick3}
                        >
                          <p className="mb-0">
                            <FeatherIcon icon="book-open" className=" me-1 select-icon" />{" "}
                            Select Status
                          </p>
                          <span className="down-icon">
                            <FeatherIcon icon="chevron-down" />
                          </span>
                        </div>
                        <div
                          id="checkBoxes"
                          style={{
                            display: checkBoxesVisible3 ? "block" : "none",
                          }}
                        >
                          <form action="#">
                            <p className="checkbox-title">By Status</p>
                            <div className="selectBox-cont">
                              <label className="custom_check w-100">
                                <input
                                  type="checkbox"
                                  name="name"
                                  defaultChecked
                                />
                                <span className="checkmark" /> All Invoices
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="name" />
                                <span className="checkmark" /> Paid
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="name" />
                                <span className="checkmark" /> Overdue
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="name" />
                                <span className="checkmark" /> Draft
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="name" />
                                <span className="checkmark" /> Recurring
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="name" />
                                <span className="checkmark" /> Cancelled
                              </label>
                            </div>
                            <button
                              type="submit"
                              className="btn w-100 btn-primary"
                            >
                              Apply
                            </button>
                            <button type="reset" className="btn w-100 btn-grey">
                              Reset
                            </button>
                          </form>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="multipleSelection">
                        <div
                          className="selectBox"
                          onClick={handleSelectBoxClick4}
                        >
                          <p className="mb-0">
                            <FeatherIcon icon="bookmark" className=" me-1 select-icon" />{" "}
                            By Category
                          </p>
                          <span className="down-icon">
                            <FeatherIcon icon="chevron-down" />
                          </span>
                        </div>
                        <div
                          id="checkBoxes"
                          style={{
                            display: checkBoxesVisible4 ? "block" : "none",
                          }}
                        >
                          <form action="#">
                            <p className="checkbox-title">Category</p>
                            <div className="form-custom">
                              <input
                                type="text"
                                className="form-control bg-grey"
                                placeholder="Enter Category Name"
                              />
                            </div>
                            <div className="selectBox-cont">
                              <label className="custom_check w-100">
                                <input type="checkbox" name="category" />
                                <span className="checkmark" /> PHP Developer
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="category" />
                                <span className="checkmark" /> Ui Designer
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="category" />
                                <span className="checkmark" /> Digital Marketer
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="category" />
                                <span className="checkmark" /> Project Manager
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="category" />
                                <span className="checkmark" /> Administator
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="category" />
                                <span className="checkmark" /> Web Developer
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="category" />
                                <span className="checkmark" /> IT Security
                              </label>
                            </div>
                            <button
                              type="submit"
                              className="btn w-100 btn-primary"
                            >
                              Apply
                            </button>
                            <button type="reset" className="btn w-100 btn-grey">
                              Reset
                            </button>
                          </form>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="report-btn">
                        <Link to="#" className="btn">
                          <img src={invoice_5} alt="" className="me-2" />{" "}
                          Generate report
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* /Report Filter */}
          <div className="card invoices-tabs-card">
            <div className="card-body card-body pt-0 pb-0">
              <div className="invoices-main-tabs">
                <div className="row align-items-center">
                  <div className="col-lg-8 col-md-8">
                    <div className="invoices-tabs">
                      <ul>
                        <li>
                          <Link to="/admin/invoice-list">
                            All Invoice
                          </Link>
                        </li>
                        <li>
                          <Link to="/admin/invoices-paid" >Paid</Link>
                        </li>
                        <li>
                          <Link to="/admin/invoices-overdue" className="active">Overdue</Link>
                        </li>
                        <li>
                          <Link to="/admin/invoices-draft">Draft</Link>
                        </li>
                        <li>
                          <Link to="/admin/invoices-recurring">Recurring</Link>
                        </li>
                        <li>
                          <Link to="/admin/invoices-cancelled">Cancelled</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="invoices-settings-btn">
                      <Link
                        to="/admin/invoices-settings"
                        className="invoices-settings-icon"
                      >
                        <FeatherIcon icon="settings" />
                      </Link>
                      <Link to="add-invoice" className="btn">
                        <FeatherIcon icon="plus-circle" className=" me-1" /> New Invoice
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card inovices-card">
                <div className="card-body">
                  <div className="inovices-widget-header">
                    <span className="inovices-widget-icon">
                      <img src={invoice_1} alt="" />
                    </span>
                    <div className="inovices-dash-count">
                      <div className="inovices-amount">$8,78,797</div>
                    </div>
                  </div>
                  <p className="inovices-all">
                    All Invoices <span>50</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card inovices-card">
                <div className="card-body">
                  <div className="inovices-widget-header">
                    <span className="inovices-widget-icon">
                      <img src={invoice_2} alt="" />
                    </span>
                    <div className="inovices-dash-count">
                      <div className="inovices-amount">$4,5884</div>
                    </div>
                  </div>
                  <p className="inovices-all">
                    Paid Invoices <span>60</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card inovices-card">
                <div className="card-body">
                  <div className="inovices-widget-header">
                    <span className="inovices-widget-icon">
                      <img src={invoice_3} alt="" />
                    </span>
                    <div className="inovices-dash-count">
                      <div className="inovices-amount">$2,05,545</div>
                    </div>
                  </div>
                  <p className="inovices-all">
                    Unpaid Invoices <span>70</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card inovices-card">
                <div className="card-body">
                  <div className="inovices-widget-header">
                    <span className="inovices-widget-icon">
                      <img src={invoice_4} alt="" />
                    </span>
                    <div className="inovices-dash-count">
                      <div className="inovices-amount">$8,8,797</div>
                    </div>
                  </div>
                  <p className="inovices-all">
                    Cancelled Invoices <span>80</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card card-table">
                <div className="card-body">
                  <div className="table-responsive">
                    <Table
                      className="table table-stripped table-hover datatable"
                      pagination={{
                        total: data.length,
                        showTotal: (total, range) =>
                          `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                        showSizeChanger: true,
                        onShowSizeChange: onShowSizeChange,
                        itemRender: itemRender,
                      }}
                      style={{ overflowX: "auto" }}
                      columns={columns}
                      dataSource={data}
                      rowKey={(record) => record.id}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal custom-modal fade" id="delete_paid" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Invoice Paid</h3>
                <p>Are you sure want to delete?</p>
              </div>
              <div className="modal-btn delete-action">
                <div className="row">
                  <div className="col-6">
                    <Link
                      to="#"
                      className="btn btn-primary paid-continue-btn w-100"
                    >
                      Delete
                    </Link>
                  </div>
                  <div className="col-6">
                    <Link
                      to="#"
                      data-bs-dismiss="modal"
                      className="btn btn-primary paid-cancel-btn w-100"
                    >
                      Cancel
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceOverdue;

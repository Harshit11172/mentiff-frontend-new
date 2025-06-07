import React from "react";
import { Table } from "antd";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import SidebarNav from "../sidebar";
import {
  avatar09,
  avatar10,
  avatar11,
  avatar12,
  avatar13,
  doctor_thumb_01,
  doctor_thumb_02,
  doctor_thumb_03,
  doctor_thumb_04,
  doctor_thumb_05,
  doctor_thumb_06,
  doctor_thumb_07,
  doctor_thumb_08,
  doctor_thumb_09,
  doctor_thumb_10,
  patient1,
  patient10,
  patient2,
  patient3,
  patient4,
  patient5,
  patient6,
  patient7,
  patient8,
  patient9,
} from "../imagepath";
import { Link } from "react-router-dom";

const Appointments = () => {
  const data = [
    {
      id: 1,
      MentorName: "Jose Anderson",
      Speciality: "Maths",
      MenteeName: "Travis Trimble",
      Earned: "$5000.00 ",
      Date: "	5 Nov 2019",
      time: "11.00 AM - 11.35 AM",
      Amount: "$300.00",
      image: avatar13,
      images1: patient2,
      Status: "checkbox",
    },
    {
      id: 2,
      MentorName: "Jessica Fogarty",
      Speciality: "Business Maths",
      MenteeName: "Carl Kelly",
      Earned: "$3300.00 ",
      Date: "11 Nov 2019",
      time: "12.00 PM - 12.15 PM",
      Amount: "$150.00",
      image: avatar12,
      images1: patient3,
      Status: "checkbox",
    },
    {
      id: 3,
      MentorName: "Marvin Campbell",
      Speciality: "Algebra",
      MenteeName: "Walter Roberson",
      Earned: "$4100.00",
      Date: "21 Nov 2019",
      time: "12.10 PM - 12.25 PM",
      Amount: "$300.00",
      image: avatar11,
      images1: patient9,
      Status: "checkbox",
    },
    {
      id: 4,
      MentorName: "Sofia Brient",
      Speciality: "Flow chart",
      MenteeName: "Elsie Gilley",
      Earned: "$4000.00 ",
      Date: "16 Nov 2019",
      time: "1.00 PM - 1.15 PM",
      Amount: "$250.00",
      image: avatar10,
      images1: patient6,
      Status: "checkbox",
    },
    {
      id: 5,
      MentorName: "James Amen",
      Speciality: "Integrated Sum",
      MenteeName: "Joan Gardner",
      Earned: "$2000.00 ",
      Date: "18 Nov 2019",
      time: "1.10 PM - 1.25 PM",
      Amount: "$260.00",
      image: avatar09,
      images1: patient7,
      Status: "checkbox",
    },
  ];
  const columns = [
    {
      title: "Mentor Name",
      dataIndex: "MentorName",
      render: (text, record) => (
        <>
          <Link className="avatar mx-2" to="/admin/profile">
            <img className="rounded-circle" src={record.image} />
          </Link>
          <Link to="/admin/profile" className="text-decoration-none">
            {text}
          </Link>
        </>
      ),
      sorter: (a, b) => a.MentorName.length - b.MentorName.length,
    },
    {
      title: "Course",
      dataIndex: "Speciality",
      sorter: (a, b) => a.Speciality.length - b.Speciality.length,
    },

    {
      title: "Mentee Name",
      dataIndex: "MenteeName",
      render: (text, record) => (
        <>
          <Link className="avatar mx-2" to="/admin/profile">
            <img className="rounded-circle" src={record.images1} />
          </Link>
          <Link to="/admin/profile">{text}</Link>
        </>
      ),
      sorter: (a, b) => a.MenteeName.length - b.MenteeName.length,
    },

    {
      title: "Booking Time",
      render: (record) => (
        <>
          <span className="user-name">{record.Date}</span>
          <br />
          <span className="d-block">{record.time}</span>
        </>
      ),
      sorter: (a, b) => a.Date.length - b.time.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text, record) => {
        return (
          <div className="status-toggle">
            <input
              id={`rating${record?.id}`}
              className="check"
              type="checkbox"
              defaultChecked="false"
            />
            <label
              htmlFor={`rating${record?.id}`}
              className="checktoggle checkbox-bg"
            >
              checkbox
            </label>
          </div>
        );
      },
      sorter: (a, b) => a.Status.length - b.Status.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      sorter: (a, b) => a.Amount.length - b.Amount.length,
    },
  ];
  return (
    <>
      <SidebarNav />
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Bookings</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Bookings</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <Table
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
    </>
  );
};

export default Appointments;

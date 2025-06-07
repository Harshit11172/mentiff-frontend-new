import React from "react";
import { Table } from "antd";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import SidebarNav from "../sidebar";
import {
  avatar06,
  avatar07,
  avatar08,
  avatar09,
  avatar10,
  avatar11,
  avatar12,
  avatar13,
  doctor_thumb_02,
  doctor_thumb_03,
  doctor_thumb_04,
  doctor_thumb_05,
  doctor_thumb_06,
  doctor_thumb_07,
  doctor_thumb_08,
  doctor_thumb_09,
  doctor_thumb_10,
} from "../imagepath";
import { Link } from "react-router-dom";

const Mentor = () => {
  const data = [
    {
      id: 1,
      MentorName: "Darren Elder",
      Course: "Maths",
      Earned: "$5000.00 ",
      Date: "11 Jun 2024",
      time: "4.50 AM",
      image: avatar13,
      AccountStatus: "checkbox",
    },
    {
      id: 2,
      MentorName: "Deborah Angel",
      Course: "Business Maths ",
      Earned: "$3300.00 ",
      Date: "4 Jan 2018",
      time: "9.40 AM",
      image: avatar12,
      AccountStatus: "checkbox",
    },
    {
      id: 3,
      MentorName: "John Gibbs",
      Course: "Algebra",
      Earned: "$4100.00",
      Date: "21 Apr 2018",
      time: "02.59 PM",
      image: avatar11,
      AccountStatus: "checkbox",
    },
    {
      id: 4,
      MentorName: "Katharine Berthold",
      Course: "Maths",
      Earned: "$4000.00 ",
      Date: "23 Mar 2024",
      time: "02.50 PM",
      image: avatar10,
      AccountStatus: "checkbox",
    },
    {
      id: 5,
      MentorName: "Linda Tobin",
      Course: "Flow chart",
      Earned: "$2000.00 ",
      Date: "14 Dec 2018",
      time: "01.59 AM",
      image: avatar09,
      AccountStatus: "checkbox",
    },
    {
      id: 6,
      MentorName: "Marvin Campbell",
      Course: "Math Grade II",
      Earned: "$3700.00 ",
      Date: "24 Jan 2024",
      time: "02.59 AM",
      image: avatar08,
      AccountStatus: "checkbox",
    },
    {
      id: 7,
      MentorName: "Olga Barlow",
      Course: "Integrated Sum",
      Earned: "$3500.00 ",
      Date: "15 Feb 2018",
      time: "03.59 AM",
      image: avatar07,
      AccountStatus: "checkbox",
    },
    {
      id: 8,
      MentorName: "Paul Richard",
      Course: "Basic Calculation",
      Earned: "$3000.00 ",
      Date: "11 Jan 2024",
      time: "02.59 AM",
      image: avatar06,
      AccountStatus: "checkbox",
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
          <Link to="/admin/profile">{text}</Link>
        </>
      ),
      sorter: (a, b) => a.MentorName.length - b.MentorName.length,
    },
    {
      title: "Course",
      dataIndex: "Course",
      sorter: (a, b) => a.Course.length - b.Course.length,
    },
    {
      title: "Member Since",
      render: (record) => (
        <>
          <span className="user-name">{record.Date}</span>
          <br />
          <span>{record.time}</span>
        </>
      ),
      sorter: (a, b) => a.length - b.length,
    },
    {
      title: "Earned",
      dataIndex: "Earned",
      sorter: (a, b) => a.Earned.length - b.Earned.length,
    },
    {
      title: "Account Status",
      dataIndex: "AccountStatus",
      render: (text, record) => {
        return (
          <div className="status-toggle">
            <input
              id={`rating${record?.id}`}
              className="check"
              type="checkbox"
              //  checked={false}
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
      sorter: (a, b) => a.AccountStatus.length - b.AccountStatus.length,
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
                <h3 className="page-title">List of Mentor</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Users</li>
                  <li className="breadcrumb-item active">Mentor</li>
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
                      //  onChange={this.handleTableChange}
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

export default Mentor;

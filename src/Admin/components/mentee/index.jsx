import React from "react";
import { Table } from "antd";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import SidebarNav from "../sidebar";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import {
  user,
  user_1,
  user_2,
  user_3,
  user_4,
  user_5,
  user_6,
  user_7,
  user_8,
  user_9,
} from "../imagepath";
import { Link } from "react-router-dom";

const Mentee = () => {
  const data = [
    {
      id: 1,
      MenteeName: "Allen Davis",
      CourseName: "Integrated Sum",
      Earned: "$3500.00",
      image: user_3,
      date: "5 Jul 2024",
      time: "12.59 AM",
      status: true,
    },
    {
      id: 2,
      MenteeName: "John Gibbs",
      CourseName: "Flow chart",
      Earned: "$4100.00",
      Phone: "2077299974",
      image: user_8,
      date: "21 Apr 2018",
      time: "02.59 PM",
    },
    {
      id: 3,
      MenteeName: "Jonathan Doe",
      CourseName: "Flow chart",
      Earned: "$3100.00",
      Phone: "2607247769",
      image: user,
      date: "14 Jan 2024",
      time: "02.59 PM",
    },
    {
      id: 4,
      MenteeName: "Julie Pennington",
      CourseName: "Business Maths",
      Earned: "$5000.00",
      Phone: "5043686874",
      image: user_1,
      date: "11 Jun 2024",
      time: "02.59 PM",
    },
    {
      id: 5,
      MenteeName: "Katharine Berthold",
      CourseName: "Basic Calculation",
      Earned: "$4000.00",
      Phone: "9548207887",
      image: user_5,
      date: "23 Mar 2024",
      time: "02.50 PM",
    },
    {
      id: 6,
      MenteeName: "Linda Tobin",
      CourseName: "Basic Calculation",
      Earned: "$2000.00",
      Phone: "3153844562",
      image: user_6,
      date: "14 Dec 2018",
      time: "01.59 AM",
    },
    {
      id: 7,
      MenteeName: "Olga Barlow",
      CourseName: "Maths",
      Earned: "$3500.00",
      Phone: "7072202603",
      image: user_9,
      date: "15 Feb 2018",
      time: "03.59 AM",
    },
    {
      id: 8,
      MenteeName: "Patricia Manzi",
      CourseName: "Flow chart",
      Earned: "$3700.00",
      Phone: "9737739497",
      image: user_4,
      date: "24 Jan 2024",
      time: "02.59 AM",
    },
    {
      id: 9,
      MenteeName: "Paul Richard",
      CourseName: "Flow chart",
      Earned: "$3000.00",
      Phone: "8503584445",
      image: user_7,
      date: "11 Jan 2024",
      time: "02.59 AM",
    },
    {
      id: 10,
      MenteeName: "Tyrone Roberts",
      CourseName: "Algebra",
      Earned: "$3300.00",
      Phone: "8582595285",
      image: user_2,
      date: "4 Jan 2018",
      time: "9.40 AM",
    },
  ];
  const columns = [
    {
      title: "Mentee Name",
      dataIndex: "MenteeName",
      render: (text, record) => (
        <>
          <Link className="avatar mx-2" to="/admin/profile">
            <img className="rounded-circle" src={record.image} />
          </Link>
          <Link to="/admin/profile">{text}</Link>
        </>
      ),
      sorter: (a, b) => a.MenteeName.length - b.MenteeName.length,
    },
    {
      title: "Course",
      dataIndex: "CourseName",
      render: (text) => <>{text}</>,
      sorter: (a, b) => a.Age.length - b.Age.length,
    },
    {
      title: "Member Since",
      dataIndex: "date",
      render: (text, record) => (
        <>
          <span>
            {text} <br />
            <small>{record.time}</small>
          </span>
        </>
      ),
      sorter: (a, b) => a.MenteeName.length - b.MenteeName.length,
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
                <h3 className="page-title">List of Mentee</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Users</li>
                  <li className="breadcrumb-item active">Mentee</li>
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

export default Mentee;

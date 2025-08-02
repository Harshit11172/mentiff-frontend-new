/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Header from "../../header";
import HomeFiveHeader from "../../home/home-five/header";
import Footer from "../../footer";
import Content from "./content";
import Pagecontent from "./pagecontent";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RazorpayPayment from "../../RazorpayPayment";



const MentorProfile = (props) => {
  const [show, setShow] = useState(false);
  const [videocall, setvideocall] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [state, setState] = useState(false);
  const [photoIndex, setphotoIndex] = useState(false);

  // const location = useLocation();
  // const mentorData = location.state?.mentorData; // Safely access the mentor data

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  const { id } = useParams();  // Get mentor ID from URL
  const [mentorData, setMentorData] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log('id in url is')
  console.log(id)

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (date) {
      const day = date.toLocaleString('en-US', { weekday: 'long' });
      setSelectedDay(day);
      setSelectedTimeSlot(""); // Reset time slot when day changes
    } else {
      setSelectedDay(""); // Clear selected day if no date is selected
    }
  };

  const handleBookSession = () => {
    if (selectedDay && selectedTimeSlot) {
      console.log(`Booking session on ${selectedDay} at ${selectedTimeSlot}`);
      // Implement booking logic here
    } else {
      alert('Please select a day and a time slot to book.');
    }
  };

  // Calculate the min and max date for the date picker
  const today = new Date();
  const minDate = today; // Current date
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 7); // Next 7 days

  useEffect(() => {
    const fetchMentor = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/mentors/${id}/`);
        setMentorData(res.data);
        console.log(res.data)
      } catch (error) {
        console.error("Failed to load mentor data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMentor();
  }, [id]);

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
    gap: '10px',
    marginTop: '1rem',
  };

  const timeSlotStyle = {
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const timeSlotHoverStyle = {
    backgroundColor: '#f0f0f0',
  };

  const timeSlotSelectedStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    borderColor: '#007bff',
  };

  // Handle the case where mentorData is not provided
  if (!mentorData) {
    return <div>No mentor data available.</div>;
  }

  console.log(mentorData)
  

  return (
    <div>
      {/* <Header {...props} /> */}

      <HomeFiveHeader/>

      {/* <div className="breadcrumb-bar-two">
        <div className="container-fluid">
          <div className="row align-items-start inner-banner">
            <div className="col-md-12 col-12 text-start">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Mentor Profile
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Mentor Profile</h2>
            </div>
          </div>
        </div>
      </div> */}

      <div className="content">
        <div className="container">
          {/* Mentor Widget */}
          <div
  className="card col-12 col-md-10 mx-auto my-4"
  style={{
    border: 'none',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.05)',
    padding: '0',
  }}
>
  <div className="card-body p-4">
    <div className="mentor-widget" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {/* Left Info */}
      <div
        className="user-info-left"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '20px',
          flex: '1 1 300px',
        }}
      >
        {/* Profile Picture */}
        <div className="mentor-img" style={{ display: 'flex', justifyContent: 'center', width: '100px', height: '100px' }}>
          {mentorData.profile_picture ? (
            <img
              src={mentorData.user.profile_picture}
              alt="Profile"
              className="rounded-circle"
              style={{
                width: '100px',
                height: '100px',
                objectFit: 'cover',
                border: '1px solidrgb(237, 244, 255)',
              }}
            />
          ) : (
            <div
              className="pro-avatar"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                backgroundColor: '#f0f0f0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#555',
              }}
            >
              H P
            </div>
          )}
        </div>

        {/* Name & Info */}
        <div className="user-info-cont" style={{ flex: 1 }}>
          <h4
            className="usr-name"
            style={{ margin: '0 0 5px 0', fontWeight: '600' }}
          >
            {mentorData.user.first_name} {mentorData.user.last_name}
          </h4>
          <p
            className="mentor-type"
            style={{
              margin: 0,
              color: '#6c757d',
              fontSize: '0.95rem',
              fontWeight: '500',
            }}
          >
            {mentorData.university}
          </p>

          <p
            className="mentor-type social-title"
            style={{
              marginTop: '5px',
              color: '#495057',
              fontSize: '0.9rem',
            }}
          >
            {mentorData.degree} {mentorData.major}
          </p>
        </div>
      </div>

      {/* Right Info */}
      <div
        className="user-info-right text-center"
        style={{
          marginTop: '20px',
          flex: '1 1 200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
        <div className="hireme-btn">
          <span
            className="hire-rate"
            style={{
              display: 'inline-block',
              fontSize: '1rem',
              fontWeight: '600',
              backgroundColor: '#e9f5ff',
              color: '#0d6efd',
              padding: '10px 15px',
              borderRadius: '8px',
              border: '1px solid #cfe2ff',
            }}
          >
            {mentorData.currency} {mentorData.session_fee} / {mentorData.session_time}
          </span>
        </div>
      </div>
    </div>
  </div>
</div>


          
          {/* /Mentor Widget */}

          {/* Mentor Details Tab */}
         <div
  className="card col-12 col-md-10 mx-auto my-4"
  style={{
    border: 'none',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.05)',
    padding: '0',
  }}
>
  <div
    className="card-body"
    style={{
      padding: '2rem',
      paddingBottom: '0',
    }}
  >
    {/* Tab Content */}
    <div className="tab-content pt-0">
      {/* Biography Content */}
      {mentorData.about && (
        <div
          role="tabpanel"
          id="biography"
          className="tab-pane fade show active"
        >
          <div className="row">
            <div className="col-md-12">
              {/* About Details */}
              <div
                className="widget about-widget mb-0"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  border: '1px solid #dee2e6',
                }}
              >
                <h4
                  className="widget-title"
                  style={{
                    fontWeight: '600',
                    marginBottom: '1rem',
                    textAlign: 'center',
                  }}
                >
                  🙋 About Me
                </h4>
                <hr style={{ marginBottom: '1rem' }} />
                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    color: '#333',
                    textAlign: 'justify',
                  }}
                >
                  {mentorData.about}
                </p>
              </div>
              {/* /About Details */}
            </div>
          </div>
        </div>
      )}
      {/* /biography Content */}
    </div>
  </div>
</div>

          {/* Availability Section */}
      {/* <div className="card col-10 me-auto ms-auto p-0">
        <div className="card-body">
          <h4 className="widget-title">Select Date and Time</h4>
          <hr />
          
          <div>
            <label style={{marginRight: '10px' }}>Select a date : </label>
            <DatePicker 
              selected={selectedDate} 
              onChange={handleDateChange} 
              dateFormat="yyyy/MM/dd"
              minDate={minDate} // Restrict to current date
              maxDate={maxDate} // Restrict to next 7 days
            />
          </div>

          {selectedDay && (
            <div style={{ marginTop: '1rem', fontWeight: 'bold' }}>
              Selected Day: {selectedDay}
            </div>
          )}
          
          <div style={{ marginTop: '1rem' }}>
            <label>Select a time slot:</label> 
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
              gap: '10px',
              marginTop: '1rem',
            }}>
              {selectedDay && mentorData.availability[selectedDay]?.map((hour, index) => (
                
                <div
                  key={index}
                  onClick={() => setSelectedTimeSlot(hour)}
                  style={{
                    padding: '15px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    backgroundColor: selectedTimeSlot === hour ? '#007bff' : 'white',
                    color: selectedTimeSlot === hour ? 'white' : 'black',
                    transition: 'background-color 0.3s',
                  }}
                >
                  {hour}
                </div>
              ))}
              {selectedDay && mentorData.availability[selectedDay]?.length === 0 && (
                <p>No available time slots for {selectedDay}.</p>
              )}
            </div>
          </div>
          
          <button className="btn btn-primary mt-3" onClick={RazorpayPayment}>Pay Now</button>
        </div>
      </div> */}


    <div
  className="card col-12 col-md-10 mx-auto my-4"
  style={{
    border: 'none',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.05)',
  }}
>
  <div className="card-body p-4">
    <h4
      className="text-center"
      style={{
        fontWeight: '600',
        marginBottom: '1rem',
      }}
    >
      📅 Select Date & Time
    </h4>
    <hr />

    {/* Date Picker */}
    <div style={{ marginBottom: '1.5rem' }}>
      <label
        style={{
          display: 'block',
          marginBottom: '0.5rem',
          fontWeight: '500',
        }}
      >
        Select a Date:
      </label>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy/MM/dd"
        minDate={minDate}
        maxDate={maxDate}
        placeholderText="Click to select a date"
        className="form-control"
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '1rem',
          borderRadius: '6px',
          border: '1px solid #ced4da',
        }}
      />
    </div>

    {/* Selected Day Display */}
    {selectedDay && (
      <div style={{ marginBottom: '1.5rem' }}>
        <span
          style={{
            backgroundColor: '#0d6efd',
            color: 'white',
            padding: '8px 12px',
            borderRadius: '20px',
            fontSize: '0.95rem',
            fontWeight: '500',
          }}
        >
          {selectedDay}
        </span>
      </div>
    )}

    {/* Time Slots */}
    <div style={{ marginBottom: '1.5rem' }}>
      <label
        style={{
          display: 'block',
          marginBottom: '0.5rem',
          fontWeight: '500',
        }}
      >
        Select a Time Slot:
      </label>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '10px',
        }}
      >
        {selectedDay &&
          mentorData.availability[selectedDay]?.map((hour, index) => (
            <div
              key={index}
              onClick={() => setSelectedTimeSlot(hour)}
              style={{
                padding: '12px',
                border: '1px solid #dee2e6',
                borderRadius: '8px',
                textAlign: 'center',
                cursor: 'pointer',
                backgroundColor: selectedTimeSlot === hour ? '#0d6efd' : '#f8f9fa',
                color: selectedTimeSlot === hour ? 'white' : 'black',
                fontWeight: selectedTimeSlot === hour ? '600' : 'normal',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (selectedTimeSlot !== hour) {
                  e.currentTarget.style.backgroundColor = '#e9ecef';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedTimeSlot !== hour) {
                  e.currentTarget.style.backgroundColor = '#f8f9fa';
                }
              }}
            >
              {hour}
            </div>
          ))}
        {selectedDay && mentorData.availability[selectedDay]?.length === 0 && (
          <p style={{ color: '#6c757d', fontStyle: 'italic' }}>
            No available time slots for {selectedDay}.
          </p>
        )}
      </div>
    </div>

    {/* Pay Button */}
    <div style={{ textAlign: 'center' }}>
      <button
        onClick={RazorpayPayment}
        style={{
          padding: '10px 24px',
          backgroundColor: '#198754',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontWeight: '600',
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#157347')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#198754')}
      >
        💳 Pay Now
      </button>
    </div>
  </div>
</div>



      {/* /Availability Section */}












          {/* /Mentor Details Tab */}
        </div>
      </div>
      {/* <Footer {...props} /> */}
    </div>
  );
};

export default MentorProfile;

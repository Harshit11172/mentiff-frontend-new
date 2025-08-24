import React, { useEffect, useState } from "react";
import DoctorSidebar from "../sidebar";
import { Link } from "react-router-dom";
import Footer from "../../footer";
import StickyBox from "react-sticky-box";
import HomeFiveHeader from "../../home/home-five/header";
import Header from "../../header";

const ScheduleTiming = (props) => {
  const [scheduleData, setScheduleData] = useState([]);
  const [activeDay, setActiveDay] = useState(0); // Monday = 0
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingSlots, setEditingSlots] = useState([]);
  const [newSlots, setNewSlots] = useState([]);

  const [selectedDuration, setSelectedDuration] = useState('30'); // default 30 mins
  const [selectedCurrency, setSelectedCurrency] = useState('INR'); // default currency
  const [fees, setFees] = useState('200'); // default fee amount

  const [sessionOptions, setSessionOptions] = useState([]);
  const [selectedSessionOptionId, setSelectedSessionOptionId] = useState(null);



  const daysOfWeek = [
    { id: 0, name: 'Monday', display: 'Monday' },
    { id: 1, name: 'Tuesday', display: 'Tuesday' },
    { id: 2, name: 'Wednesday', display: 'Wednesday' },
    { id: 3, name: 'Thursday', display: 'Thursday' },
    { id: 4, name: 'Friday', display: 'Friday' },
    { id: 5, name: 'Saturday', display: 'Saturday' },
    { id: 6, name: 'Sunday', display: 'Sunday' }
  ];

  const getMentorIdFromLocalStorage = () => {
    try {
      const user = JSON.parse(localStorage.getItem('userData'));
      return user?.mentor_id || null;
    } catch {
      return null;
    }
  };

  const saveSessionOption = async () => {
    const optionToSave = sessionOptions.find(opt => opt.id === selectedSessionOptionId);

    if (!optionToSave) {
      alert('Please select a session option.');
      return;
    }



    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/users/session-options/mentor/${mentorId}/${selectedSessionOptionId}/`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(optionToSave),
        }
      );

      if (response.ok) {
        alert('Session option updated successfully!');
        // Optionally re-fetch sessionOptions here to sync state
      } else {
        alert('Failed to update session option.');
      }
    } catch (error) {
      console.error('Error saving session option:', error);
      alert('Error saving session option.');
    }
  };







  // Generate time options for dropdowns
  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        const displayTime = new Date(`2000-01-01T${timeString}`).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });
        times.push({ value: timeString, display: displayTime });
      }
    }
    return times;
  };

  const timeOptions = generateTimeOptions();

  // Get auth token from localStorage
  const getAuthToken = () => {
    return localStorage.getItem('authToken');
  };

  // Get auth headers
  const getAuthHeaders = () => {
    const token = getAuthToken();
    return {
      'Content-Type': 'application/json',
      'Authorization': token ? `Token ${token}` : ''
    };
  };

  // Fetch schedule data from API
  const fetchScheduleData = async () => {
    try {
      setLoading(true);
      const token = getAuthToken();

      if (!token) {
        console.error('No auth token found');
        alert('Please login to access schedule data');
        setLoading(false);
        return;
      }

      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/mentor/availability/`, {
        method: 'GET',
        headers: getAuthHeaders()
      });

      if (response.ok) {
        const data = await response.json();
        setScheduleData(data);
      } else if (response.status === 401) {
        console.error('Unauthorized - invalid token');
        alert('Session expired. Please login again.');
      } else {
        console.error('Failed to fetch schedule data', response.status);
        alert('Failed to load schedule data. Please try again.');
      }
    } catch (error) {
      console.error('Error fetching schedule data:', error);
      alert('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const mentorId = getMentorIdFromLocalStorage(); // Retrieve here
    console.log('mentorId found is ')
    console.log(mentorId)
    if (!mentorId) {
      console.error('Mentor ID not found in localStorage');
      return;
    }

    const fetchSessionOptions = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/users/session-options/mentor/${mentorId}`);
        console.log(`http://127.0.0.1:8000/api/users/session-options/mentor/${mentorId}`)
        if (response.ok) {
          const data = await response.json();
          setSessionOptions(data);
          if (data.length > 0) setSelectedSessionOptionId(data[0].id);
        } else {
          console.error('Failed to fetch session options');
        }
      } catch (err) {
        console.error('Error fetching session options:', err);
      }
    };

    fetchSessionOptions();
  }, []);




  // Save schedule data to API
  const saveScheduleData = async (availabilities) => {
    try {
      setSaving(true);
      const token = getAuthToken();

      if (!token) {
        console.error('No auth token found');
        alert('Please login to save schedule data');
        setSaving(false);
        return false;
      }

      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/mentor/availability/`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify({ availabilities }),
      });

      if (response.ok) {
        const responseData = await response.json();
        // Update local state immediately instead of refetching
        setScheduleData(Array.isArray(responseData) ? responseData : responseData.availabilities || availabilities);
        alert('Schedule updated successfully!');

        // Close any open modals
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
          const modalInstance = window.bootstrap?.Modal?.getInstance(modal);
          if (modalInstance) {
            modalInstance.hide();
          }
        });

        return true;
      } else if (response.status === 401) {
        console.error('Unauthorized - invalid token');
        alert('Session expired. Please login again.');
        return false;
      } else {
        console.error('Failed to save schedule data', response.status);
        alert('Failed to save schedule. Please try again.');
        return false;
      }
    } catch (error) {
      console.error('Error saving schedule data:', error);
      alert('Network error. Please check your connection and try again.');
      return false;
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    fetchScheduleData();
  }, []);

  // Get slots for a specific day
  const getSlotsForDay = (dayOfWeek) => {
    return scheduleData.filter(slot => slot.day_of_week === dayOfWeek);
  };

  // Format time for display (HH:MM:SS to HH:MM AM/PM)
  const formatTimeForDisplay = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const date = new Date(`2000-01-01T${hours}:${minutes}:00`);
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  // Convert time format from HH:MM:SS to HH:MM
  const convertTimeFormat = (timeString) => {
    return timeString.substring(0, 5);
  };

  // Validate time slot
  const validateTimeSlot = (startTime, endTime) => {
    const start = new Date(`2000-01-01T${startTime}:00`);
    const end = new Date(`2000-01-01T${endTime}:00`);
    return start < end;
  };

  // Check for overlapping time slots
  const hasOverlappingSlots = (slots) => {
    const sortedSlots = slots.sort((a, b) => a.start_time.localeCompare(b.start_time));

    for (let i = 0; i < sortedSlots.length - 1; i++) {
      const currentEnd = new Date(`2000-01-01T${sortedSlots[i].end_time}:00`);
      const nextStart = new Date(`2000-01-01T${sortedSlots[i + 1].start_time}:00`);

      if (currentEnd > nextStart) {
        return true;
      }
    }
    return false;
  };

  // Delete a time slot
  const deleteSlot = async (slotId) => {
    if (window.confirm('Are you sure you want to delete this time slot?')) {
      const updatedSlots = scheduleData.filter(slot => slot.id !== slotId);
      const availabilities = updatedSlots.map(slot => ({
        id: slot.id,
        day_of_week: slot.day_of_week,
        start_time: convertTimeFormat(slot.start_time),
        end_time: convertTimeFormat(slot.end_time)
      }));

      const success = await saveScheduleData(availabilities);
      if (!success) {
        // If save failed, revert the local state by refetching
        await fetchScheduleData();
      }
    }
  };

  // Add slot to editing list
  const addEditingSlot = () => {
    setEditingSlots([...editingSlots, {
      day_of_week: activeDay,
      start_time: '09:00',
      end_time: '17:00',
      isNew: true // Flag to identify new slots
    }]);
  };

  // Remove slot from editing list
  const removeEditingSlot = (index) => {
    const updated = editingSlots.filter((_, i) => i !== index);
    setEditingSlots(updated);
  };

  // Initialize editing slots when modal opens
  const initializeEditingSlots = (dayOfWeek) => {
    const daySlots = getSlotsForDay(dayOfWeek);
    setEditingSlots(daySlots.map(slot => ({
      id: slot.id,
      day_of_week: slot.day_of_week,
      start_time: convertTimeFormat(slot.start_time),
      end_time: convertTimeFormat(slot.end_time),
      isNew: false
    })));
  };

  // Initialize new slots when add modal opens
  const initializeNewSlots = (dayOfWeek) => {
    setNewSlots([{
      day_of_week: dayOfWeek,
      start_time: '09:00',
      end_time: '17:00'
    }]);
  };

  // Add new slot to temporary list
  const addNewSlot = () => {
    setNewSlots([...newSlots, {
      day_of_week: activeDay,
      start_time: '09:00',
      end_time: '17:00'
    }]);
  };

  // Remove slot from temporary list
  const removeNewSlot = (index) => {
    const updated = newSlots.filter((_, i) => i !== index);
    setNewSlots(updated);
  };

  // Update new slot
  const updateNewSlot = (index, field, value) => {
    const updated = [...newSlots];
    updated[index][field] = value;
    setNewSlots(updated);
  };

  // Update editing slot
  const updateEditingSlot = (index, field, value) => {
    const updated = [...editingSlots];
    updated[index][field] = value;
    setEditingSlots(updated);
  };

  // Save new slots
  const saveNewSlots = async () => {
    // Validate all new slots
    for (let slot of newSlots) {
      if (!validateTimeSlot(slot.start_time, slot.end_time)) {
        alert('End time must be after start time for all slots.');
        return;
      }
    }

    // Check for overlapping slots within new slots
    if (hasOverlappingSlots(newSlots)) {
      alert('Time slots cannot overlap.');
      return;
    }

    // Get existing slots for the same day
    const daySlots = getSlotsForDay(newSlots[0].day_of_week);
    const existingSlotsForDay = daySlots.map(slot => ({
      start_time: convertTimeFormat(slot.start_time),
      end_time: convertTimeFormat(slot.end_time)
    }));

    // Check for overlaps with existing slots
    const allSlotsForDay = [...existingSlotsForDay, ...newSlots];
    if (hasOverlappingSlots(allSlotsForDay)) {
      alert('New time slots overlap with existing slots.');
      return;
    }

    // Prepare all slots for saving
    const existingSlots = scheduleData
      .filter(slot => slot.day_of_week !== newSlots[0].day_of_week)
      .map(slot => ({
        id: slot.id,
        day_of_week: slot.day_of_week,
        start_time: convertTimeFormat(slot.start_time),
        end_time: convertTimeFormat(slot.end_time)
      }));

    const existingSlotsForSameDay = scheduleData
      .filter(slot => slot.day_of_week === newSlots[0].day_of_week)
      .map(slot => ({
        id: slot.id,
        day_of_week: slot.day_of_week,
        start_time: convertTimeFormat(slot.start_time),
        end_time: convertTimeFormat(slot.end_time)
      }));

    // Format new slots without IDs (backend will assign them)
    const formattedNewSlots = newSlots.map(slot => ({
      day_of_week: slot.day_of_week,
      start_time: slot.start_time,
      end_time: slot.end_time
    }));

    const allSlots = [...existingSlots, ...existingSlotsForSameDay, ...formattedNewSlots];

    const success = await saveScheduleData(allSlots);
    if (success) {
      setNewSlots([]);
    }
  };

  // Save edited slots
  const saveEditedSlots = async () => {
    // Validate all editing slots
    for (let slot of editingSlots) {
      if (!validateTimeSlot(slot.start_time, slot.end_time)) {
        alert('End time must be after start time for all slots.');
        return;
      }
    }

    // Check for overlapping slots within editing slots
    if (hasOverlappingSlots(editingSlots)) {
      alert('Time slots cannot overlap.');
      return;
    }

    // Get slots for other days (unchanged)
    const currentDayId = editingSlots.length > 0 ? editingSlots[0].day_of_week : activeDay;
    const otherDaysSlots = scheduleData
      .filter(slot => slot.day_of_week !== currentDayId)
      .map(slot => ({
        id: slot.id,
        day_of_week: slot.day_of_week,
        start_time: convertTimeFormat(slot.start_time),
        end_time: convertTimeFormat(slot.end_time)
      }));

    // Separate existing slots from new slots in editing
    const existingEditedSlots = editingSlots
      .filter(slot => slot.id && !slot.isNew)
      .map(slot => ({
        id: slot.id,
        day_of_week: slot.day_of_week,
        start_time: slot.start_time,
        end_time: slot.end_time
      }));

    // New slots from editing (those marked as isNew or without ID)
    const newSlotsFromEditing = editingSlots
      .filter(slot => slot.isNew || !slot.id)
      .map(slot => ({
        day_of_week: slot.day_of_week,
        start_time: slot.start_time,
        end_time: slot.end_time
      }));

    const allSlots = [...otherDaysSlots, ...existingEditedSlots, ...newSlotsFromEditing];

    const success = await saveScheduleData(allSlots);
    if (success) {
      setEditingSlots([]);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading schedule...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <HomeFiveHeader />

      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={50} offsetBottom={20}>
                <div className="appointments">
                  <DoctorSidebar />
                </div>
              </StickyBox>
            </div>

            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Set Availability</h4>
                      <div className="profile-box">
                        <div className="row">

                          {/* <div className="col-lg-4">
                            <div className="form-group">

                              <label>Timing Slot Duration</label>
                              <select className="form-select form-control">
                                <option value="30">30 mins</option>
                                <option value="15">15 mins</option>
                               
                              </select>
                            </div>
                            <div className="form-group">

                              <label>Fee</label>
                              <select className="form-select form-control">
                                <option value="30">200 INR</option>
                                <option value="15">300 INR</option>
                            
                              </select>
                            </div>

                          </div> */}

                          {/* <div className="row mb-3">
                            <div className="col-md-4">
                              <label>Time Duration</label>
                              <select
                                className="form-select"
                                value={selectedDuration}
                                onChange={(e) => setSelectedDuration(e.target.value)}
                              >
                                <option value="15">15 mins</option>
                                <option value="30">30 mins</option>
                              </select>
                            </div>
                            <div className="col-md-4">
                              <label>Currency</label>
                              <select
                                className="form-select"
                                value={selectedCurrency}
                                onChange={(e) => setSelectedCurrency(e.target.value)}
                              >
                                <option value="INR">INR</option>
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                               
                              </select>
                            </div>
                            <div className="col-md-4">
                              <label>Fees</label>
                              <input
                                type="number"
                                className="form-control"
                                value={fees}
                                onChange={(e) => setFees(e.target.value)}
                                min="0"
                              />
                            </div>
                          </div> */}

                          {/* <div className="row mb-3">
                            <div className="col-md-4">
                              <label>Time Duration</label>
                              <select
                                className="form-select"
                                value={selectedSessionOptionId} 
                                onChange={(e) => setSelectedSessionOptionId(Number(e.target.value))}
                              >
                                {sessionOptions.map(opt => (
                                  <option key={opt.id} value={opt.id}>
                                    {opt.duration_minutes} mins
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-md-4">
                              <label>Currency</label>
                              <select
                                className="form-select"
                                value={
                                  sessionOptions.find(opt => opt.id === selectedSessionOptionId)?.currency || ''
                                }
                                onChange={(e) => {
                                 
                                  const updatedOptions = sessionOptions.map(opt =>
                                    opt.id === selectedSessionOptionId
                                      ? { ...opt, currency: e.target.value }
                                      : opt
                                  );
                                  setSessionOptions(updatedOptions);
                                }}
                              >
                             
                                {[...new Set(sessionOptions.map(opt => opt.currency))].map(curr => (
                                  <option key={curr} value={curr}>{curr}</option>
                                ))}
                              </select>
                            </div>
                            <div className="col-md-4">
                              <label>Fees</label>
                              <input
                                type="number"
                                className="form-control"
                                value={
                                  sessionOptions.find(opt => opt.id === selectedSessionOptionId)?.fee || ''
                                }
                                onChange={(e) => {
                                  
                                  const updatedOptions = sessionOptions.map(opt =>
                                    opt.id === selectedSessionOptionId
                                      ? { ...opt, fee: e.target.value }
                                      : opt
                                  );
                                  setSessionOptions(updatedOptions);
                                }}
                                min="0"
                              />
                            </div>
                          </div> */}

                          <div className="row mb-3 align-items-end">
                            <div className="col-md-4">
                              <label>Time Duration</label>
                              <select
                                className="form-select"
                                value={selectedSessionOptionId}
                                onChange={(e) => setSelectedSessionOptionId(Number(e.target.value))}
                              >
                                {sessionOptions.map(opt => (
                                  <option key={opt.id} value={opt.id}>
                                    {opt.duration_minutes} mins
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div className="col-md-4">
                              <label>Currency</label>
                              <input
                                type="text"
                                className="form-control"
                                value={sessionOptions.find(opt => opt.id === selectedSessionOptionId)?.currency || ''}
                                readOnly
                                style={{ backgroundColor: '#f5f5f5', color: '#6c757d', cursor: 'not-allowed' }}
                              />
                            </div>

                            <div className="col-md-4">
                              <label>Fees</label>
                              <input
                                type="number"
                                className="form-control"
                                value={sessionOptions.find(opt => opt.id === selectedSessionOptionId)?.fee || ''}
                                readOnly
                                style={{ backgroundColor: '#f5f5f5', color: '#6c757d', cursor: 'not-allowed' }}
                                min="0"
                              />
                            </div>
                          </div>  
                          <p>New mentors cannot update fees!</p>




                          {/* <div className="mb-3">

                            {sessionOptions.map((opt) => (
                              <div
                                key={opt.id}
                                className="d-flex align-items-center mb-2"
                                style={{ gap: '1rem' }}
                              >
                                <input
                                  type="text"
                                  className="form-control"
                                  value={`${opt.duration_minutes} mins`}
                                  readOnly
                                  style={{ backgroundColor: '#f5f5f5', color: '#6c757d', cursor: 'not-allowed', width: '120px' }}
                                />
                                <input
                                  type="text"
                                  className="form-control"
                                  value={opt.currency}
                                  readOnly
                                  style={{ backgroundColor: '#f5f5f5', color: '#6c757d', cursor: 'not-allowed', width: '80px' }}
                                />
                                <input
                                  type="text"
                                  className="form-control"
                                  value={opt.fee}
                                  readOnly
                                  style={{ backgroundColor: '#f5f5f5', color: '#6c757d', cursor: 'not-allowed', width: '100px' }}
                                />
                              </div>

                            ))}
                            <p>New mentors can not edit the fees and time duration!</p>
                          </div> */}


                        </div>
                        {/* <h4 className="card-title">Available Timings</h4> */}
                        <div className="row">
                          <div className="col-md-12">

                            <div className="card schedule-widget mb-0">

                              <div className="schedule-header">

                                <div className="schedule-nav">
                                  <ul className="nav nav-tabs nav-justified">
                                    {daysOfWeek.map((day) => (
                                      <li key={day.id} className="nav-item">
                                        <button
                                          className={`nav-link ${activeDay === day.id ? 'active' : ''}`}
                                          onClick={() => setActiveDay(day.id)}
                                          type="button"
                                        >
                                          {day.display}
                                        </button>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>

                              <div className="tab-content schedule-cont">
                                {daysOfWeek.map((day) => (
                                  <div
                                    key={day.id}
                                    className={`tab-pane fade ${activeDay === day.id ? 'show active' : ''}`}
                                  >
                                    <h4 className="card-title d-flex justify-content-between">
                                      <span>Time Slots</span>
                                      {getSlotsForDay(day.id).length > 0 ? (
                                        <div>
                                          <button
                                            className="btn btn-link edit-link p-0 me-2"
                                            data-bs-toggle="modal"
                                            data-bs-target="#edit_time_slot"
                                            onClick={() => initializeEditingSlots(day.id)}
                                          >
                                            <i className="fa fa-edit me-1"></i>
                                            Edit
                                          </button>
                                          <button
                                            className="btn btn-link edit-link p-0"
                                            data-bs-toggle="modal"
                                            data-bs-target="#add_time_slot"
                                            onClick={() => initializeNewSlots(day.id)}
                                          >
                                            <i className="fa fa-plus-circle"></i> Add More
                                          </button>
                                        </div>
                                      ) : (
                                        <button
                                          className="btn btn-link edit-link p-0"
                                          data-bs-toggle="modal"
                                          data-bs-target="#add_time_slot"
                                          onClick={() => initializeNewSlots(day.id)}
                                        >
                                          <i className="fa fa-plus-circle"></i> Add Slot
                                        </button>
                                      )}
                                    </h4>

                                    {getSlotsForDay(day.id).length > 0 ? (
                                      <div className="doc-times">
                                        {getSlotsForDay(day.id).map((slot) => (
                                          <div key={slot.id} className="doc-slot-list">
                                            {formatTimeForDisplay(slot.start_time)} - {formatTimeForDisplay(slot.end_time)}
                                            <button
                                              type="button"
                                              className="delete_schedule btn p-0"
                                              onClick={() => deleteSlot(slot.id)}
                                            >
                                              <i className="fa fa-times"></i>
                                            </button>
                                          </div>
                                        ))}
                                      </div>
                                    ) : (
                                      <p className="text-muted mb-0">Not Available</p>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </div>

        {/* Add Time Slot Modal */}
        <div className="modal fade custom-modal" id="add_time_slot">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Time Slots</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setNewSlots([])}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={(e) => { e.preventDefault(); saveNewSlots(); }}>
                  <div className="hours-info">
                    {newSlots.map((slot, index) => (
                      <div key={index} className="row form-row hours-cont mb-3">
                        <div className="col-12 col-md-10">
                          <div className="row form-row">
                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>Start Time</label>
                                <select
                                  className="form-select form-control"
                                  value={slot.start_time}
                                  onChange={(e) => updateNewSlot(index, 'start_time', e.target.value)}
                                  required
                                >
                                  {timeOptions.map((time) => (
                                    <option key={time.value} value={time.value}>
                                      {time.display}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>End Time</label>
                                <select
                                  className="form-select form-control"
                                  value={slot.end_time}
                                  onChange={(e) => updateNewSlot(index, 'end_time', e.target.value)}
                                  required
                                >
                                  {timeOptions.map((time) => (
                                    <option key={time.value} value={time.value}>
                                      {time.display}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-2">
                          <label className="d-md-block d-sm-none d-none">&nbsp;</label>
                          <button
                            type="button"
                            className="btn btn-danger trash"
                            onClick={() => removeNewSlot(index)}
                            disabled={newSlots.length === 1}
                          >
                            <i className="far fa-trash-alt"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="add-more mb-3">
                    <button
                      type="button"
                      className="btn btn-link add-hours p-0"
                      onClick={addNewSlot}
                    >
                      <i className="fa fa-plus-circle"></i> Add More
                    </button>
                  </div>

                  <div className="submit-section text-center">
                    <button
                      type="submit"
                      className="btn btn-primary submit-btn"
                      disabled={saving}
                    >
                      {saving ? 'Adding...' : 'Add Time Slots'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Time Slot Modal */}
        <div className="modal fade custom-modal" id="edit_time_slot">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Time Slots</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setEditingSlots([])}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={(e) => { e.preventDefault(); saveEditedSlots(); }}>
                  <div className="hours-info">
                    {editingSlots.map((slot, index) => (
                      <div key={slot.id || `new-${index}`} className="row form-row hours-cont mb-3">
                        <div className="col-12 col-md-10">
                          <div className="row form-row">
                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>Start Time</label>
                                <select
                                  className="form-select form-control"
                                  value={slot.start_time}
                                  onChange={(e) => updateEditingSlot(index, 'start_time', e.target.value)}
                                  required
                                >
                                  {timeOptions.map((time) => (
                                    <option key={time.value} value={time.value}>
                                      {time.display}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>End Time</label>
                                <select
                                  className="form-select form-control"
                                  value={slot.end_time}
                                  onChange={(e) => updateEditingSlot(index, 'end_time', e.target.value)}
                                  required
                                >
                                  {timeOptions.map((time) => (
                                    <option key={time.value} value={time.value}>
                                      {time.display}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-2">
                          <label className="d-md-block d-sm-none d-none">&nbsp;</label>
                          <button
                            type="button"
                            className="btn btn-danger trash"
                            onClick={() => removeEditingSlot(index)}
                          >
                            <i className="far fa-trash-alt"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="add-more mb-3">
                    <button
                      type="button"
                      className="btn btn-link add-hours p-0"
                      onClick={addEditingSlot}
                    >
                      <i className="fa fa-plus-circle"></i> Add More
                    </button>
                  </div>

                  <div className="submit-section text-center">
                    <button
                      type="submit"
                      className="btn btn-primary submit-btn"
                      disabled={saving}
                    >
                      {saving ? 'Updating...' : 'Update Schedule'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleTiming;



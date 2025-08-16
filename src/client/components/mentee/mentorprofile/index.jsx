  import HomeFiveHeader from "../../home/home-five/header";
  import HomeFiveFooter from "../../home/home-five/footer";

  import React, { useEffect, useState } from "react";
  import { useParams } from "react-router-dom";
  import axios from "axios";
  import DatePicker from "react-datepicker";
  import "react-datepicker/dist/react-datepicker.css";



  const MentorProfile = () => {
    const { id } = useParams();
    const [mentorData, setMentorData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedDay, setSelectedDay] = useState("");
    const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
    const [duration, setDuration] = useState(30);
    const [availableSlots, setAvailableSlots] = useState([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [posts, setPosts] = useState([]);
    const [commentText, setCommentText] = useState({});
    const [openComments, setOpenComments] = useState({});
    const today = new Date();
    const minDate = today;
    const maxDate = new Date(today);
    maxDate.setDate(today.getDate() + 7);
    const [sessionOptions, setSessionOptions] = useState([]);
    const [selectedOptionId, setSelectedOptionId] = useState(null);
    const selectedOption = sessionOptions.find(opt => opt.id === selectedOptionId);


    // Fetch mentor info
    useEffect(() => {
      const fetchMentor = async () => {
        try {
          const res = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/mentors/${id}/`
          );
          setMentorData(res.data);
        } catch (error) {
          setMentorData(null);
        } finally {
          setLoading(false);
        }
      };
      fetchMentor();
    }, [id]);


    useEffect(() => {
      if (!mentorData) return;
      const fetchSessionOptions = async () => {
        try {
          const res = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/session-options/mentor/${mentorData.id}`
          );
          setSessionOptions(Array.isArray(res.data) ? res.data : []);
          if (res.data.length > 0) {
            setSelectedOptionId(res.data[0].id); // default to first option
          }
        } catch (err) {
          setSessionOptions([]);
        }
      };
      fetchSessionOptions();
    }, [mentorData]);


    // Fetch posts
    useEffect(() => {
      if (!mentorData) return;
      const fetchPosts = async () => {
        try {
          const res = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/posts/?mentor_id=${id}`
          );
          setPosts(Array.isArray(res.data) ? res.data : []);
        } catch (err) {
          setPosts([]);
        }
      };
      fetchPosts();
    }, [mentorData, id]);

    // On resize, update isMobile
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

   

useEffect(() => {
  if (!selectedDate || !mentorData || !selectedOptionId) {
    setAvailableSlots([]);
    return;
  }

  const selectedOption = sessionOptions.find(opt => opt.id === selectedOptionId);
  const duration_minutes = selectedOption ? selectedOption.duration_minutes : 30; // fallback

  // ✅ Use LOCAL date formatting instead of UTC
  const dateStr = selectedDate instanceof Date && !isNaN(selectedDate)
    ? (() => {
        const year = selectedDate.getFullYear();
        const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
        const day = String(selectedDate.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
      })()
    : "";

  if (!dateStr) {
    setAvailableSlots([]);
    return;
  }

  const fetchSlots = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/mentors/${mentorData.id}/available-slots/`,
        {
          params: {
            date: dateStr,
            duration: duration_minutes,
          },
        }
      );

      // ✅ API returns array directly, so use res.data
      // setAvailableSlots(Array.isArray(res.data) ? res.data : []);
      setAvailableSlots(
  Array.isArray(res.data)
    ? res.data
    : Array.isArray(res.data.slots)
      ? res.data.slots
      : []
);
      
    } catch (err) {
      console.error("Error fetching slots:", err);
      setAvailableSlots([]);
    }
  };

  fetchSlots();
}, [selectedDate, selectedOptionId, mentorData, sessionOptions]);




    const handleDateChange = (date) => {
      setSelectedDate(date);
      if (date) {
        const day = date.toLocaleString("en-US", { weekday: "long" });
        setSelectedDay(day);
        setSelectedTimeSlot("");
      } else {
        setSelectedDay("");
      }
      setAvailableSlots([]);
    };




    const handleClearSelection = () => {
      setSelectedDate(null);
      setSelectedDay("");
      setSelectedTimeSlot("");
      setAvailableSlots([]);
    };

    const handlePayNow = () => {
      if (!selectedDate || !selectedTimeSlot) {
        alert("Please select a date and time slot.");
        return;
      }
      alert(
        `Paying for session on ${selectedDate.toLocaleDateString()} at ${selectedTimeSlot} for ${duration} min`
      );
      // Your booking API logic can go here
    };

    // Social posts logic
    const toggleComments = (postId) => {
      setOpenComments((prev) => ({
        ...prev,
        [postId]: prev[postId]
          ? { ...prev[postId], open: !prev[postId].open }
          : { open: true, visibleCount: 2 },
      }));
    };

    const loadMoreComments = (postId) => {
      setOpenComments((prev) => ({
        ...prev,
        [postId]: {
          ...prev[postId],
          visibleCount: (prev[postId]?.visibleCount || 2) + 2,
        },
      }));
    };

    const getRelativeTime = (isoDateString) => {
      const now = new Date();
      const past = new Date(isoDateString);
      const diffMs = now - past;
      const seconds = Math.floor(diffMs / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const weeks = Math.floor(days / 7);
      const months = Math.floor(days / 30);
      if (months >= 1) return `${months}m`;
      if (weeks >= 1) return `${weeks}w`;
      if (days >= 1) return `${days}d`;
      if (hours >= 1) return `${hours}h`;
      if (minutes >= 1) return `${minutes}m`;
      return "Just now";
    };

    const handleLikeToggle = async (postId) => {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/posts/${postId}/like/`
        );
        const updatedPosts = posts.map((post) =>
          post.id === postId
            ? {
              ...post,
              likes_count: res.data.likes_count,
              liked_by_user: res.data.liked_by_user,
            }
            : post
        );
        setPosts(updatedPosts);
      } catch (err) {
        console.error('Error toggling like:', err);
      }
    };

    const handleCommentSubmit = async (postId) => {
      const comment = commentText[postId];
      if (!comment) return;

      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/comments/`,
          {
            post: postId,
            text: comment,
          },
          {
            headers: {
              Authorization: `Token ${localStorage.getItem("authToken")}`,
            },
          }
        );

        const updatedPosts = posts.map((post) =>
          post.id === postId
            ? {
              ...post,
              comments: [res.data, ...(post.comments || [])],
            }
            : post
        );
        setPosts(updatedPosts);
        setCommentText({ ...commentText, [postId]: "" });
        setOpenComments((prev) => ({
          ...prev,
          [postId]: {
            open: true,
            visibleCount: Math.max(3, prev[postId]?.visibleCount || 2),
          },
        }));
      } catch (err) {
        console.error('Error submitting comment:', err);
      }
    };

    if (loading) return <div>Loading...</div>;
    if (!mentorData) return <div>No mentor data available.</div>;

    const bookingCard = (
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #dee2e6",
          borderRadius: "10px",
          padding: "1.5rem",
          boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
          zIndex: 100,
          position: "sticky",
          top: "70px",
        }}
      >
        <h4 style={{ fontWeight: "600", marginBottom: "1rem", fontSize: "1.1rem" }}>
          📅 Book a Session
        </h4>

        {selectedOption && (
          <p style={{
            color: "#198754",
            fontWeight: "500",
            fontSize: "1rem",
            marginBottom: "1rem"
          }}>
            {selectedOption.fee} {selectedOption.currency}
          </p>
        )}

        <div style={{ marginTop: "1rem" }}>
          <label style={{ fontWeight: "500", display: "block", marginBottom: "0.5rem" }}>Duration:</label>
          <select
            value={selectedOptionId || ""}
            onChange={e => {
              setSelectedOptionId(Number(e.target.value));
              setSelectedTimeSlot("");  // Reset selected time slot on duration change
            }}
            style={{
              padding: "6px",
              borderRadius: "6px",
              border: "1px solid #dee2e6",
              width: "100%",
              marginBottom: "12px",
            }}
          >
            {sessionOptions.map(option => (
              <option key={option.id} value={option.id}>
                {option.duration_minutes} min ({option.fee} {option.currency})
              </option>
            ))}
          </select>

        </div>


        <label style={{ fontWeight: "500", display: "block", marginBottom: "0.5rem" }}>
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
        />
        {selectedDate && (
          <div style={{ marginTop: "1rem" }}>
            <span
              style={{
                backgroundColor: "#0d6efd",
                color: "white",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "0.9rem",
                fontWeight: "500",
              }}
            >
              {/* {selectedDate.toLocaleDateString()}  */}
              {selectedDay}
            </span>
          </div>
        )}


        {/* <div style={{ marginTop: "1rem" }}>
          <label style={{ fontWeight: "500", display: "block", marginBottom: "0.5rem" }}>
            Time Slot:
          </label>
          <select
            value={selectedTimeSlot || ""}
            onChange={e => setSelectedTimeSlot(e.target.value)}
            style={{
              padding: "6px",
              borderRadius: "6px",
              border: "1px solid #dee2e6",
              width: "100%",
              marginBottom: "12px",
            }}
            disabled={!selectedDate || availableSlots.length === 0}
          >
            {!selectedDate ? (
              <option value="">Select Date first</option>
            ) : availableSlots.length === 0 ? (
              <option value="">No slot available</option>
            ) : (
              <>
                <option value="">Select a time slot</option>
                {availableSlots.map((slot, i) => (
                  <option key={i} value={slot}>
                    {slot}
                  </option>
                ))}
              </>
            )}
          </select>
        </div> */}


  <div style={{ marginTop: "1rem" }}>
    <label style={{ fontWeight: "500", display: "block", marginBottom: "0.5rem" }}>
      Time Slot:
    </label>
    <select
      value={selectedTimeSlot || ""}
      onChange={e => setSelectedTimeSlot(e.target.value)}
      style={{
        padding: "6px",
        borderRadius: "6px",
        border: "1px solid #dee2e6",
        width: "100%",
        marginBottom: "12px",
      }}
      disabled={!selectedDate || availableSlots.length === 0}
    >
      {!selectedDate ? (
        <option value="">Select Date first</option>
      ) : availableSlots.length === 0 ? (
        <option value="">No slot available</option>
      ) : (
        <>
          <option value="">Select a time slot</option>
          {availableSlots.map((slot, i) => {
            const isBooked = slot.includes("(Booked)");
            return (
              <option 
                key={i} 
                value={isBooked ? "" : slot} 
                disabled={isBooked}
                style={isBooked ? { color: "red", fontStyle: "italic" } : {}}
              >
                {slot}
              </option>
            );
          })}
        </>
      )}
    </select>
  </div>




        {selectedDate && (
          <div className="text-center mt-3">
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={handleClearSelection}
            >
              ❌ Clear All
            </button>
          </div>
        )}

        <button
          onClick={handlePayNow}
          style={{
            marginTop: "1.5rem",
            width: "100%",
            padding: "12px",
            backgroundColor: "#198754",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontWeight: "600",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          💳 Pay Now
        </button>
      </div>
    );

    return (
      <>
        <HomeFiveHeader />
        <div style={{ maxWidth: "1100px", margin: "2rem auto", padding: "0 1rem" }}>
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "2rem" }}>
            <div style={{ flex: 2 }}>
              {/* Profile Section */}
              <div
                style={{
                  background: "white",
                  border: "1px solid #dee2e6",
                  borderRadius: "10px",
                  padding: isMobile ? "1rem" : "2rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "1rem",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  position: "sticky",
                  top: "70px",
                  zIndex: 100,
                  backgroundColor: "white",
                }}
              >
                <img
                  src={mentorData.user.profile_picture}
                  alt="Profile"
                  style={{
                    width: isMobile ? "50px" : "90px",
                    height: isMobile ? "50px" : "90px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h2
                    style={{
                      fontSize: isMobile ? "1rem" : "1.3rem",
                      fontWeight: "600",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {mentorData.user.first_name} {mentorData.user.last_name}
                  </h2>
                  <p
                    style={{
                      fontSize: isMobile ? "0.8rem" : "0.95rem",
                      color: "#666",
                      margin: 0,
                    }}
                  >
                    {mentorData.university}
                  </p>
                  <p
                    style={{
                      fontSize: isMobile ? "0.8rem" : "0.95rem",
                      color: "#444",
                      margin: 0,
                    }}
                  >
                    {mentorData.degree} {mentorData.major}
                  </p>
                </div>
              </div>

              {/* Booking for mobile */}
              {isMobile && <div style={{ marginTop: "1.5rem" }}>{bookingCard}</div>}

              {/* About Me */}
              <div
                style={{
                  marginTop: "2rem",
                  background: "white",
                  border: "1px solid #dee2e6",
                  borderRadius: "10px",
                  padding: "2rem",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.03)",
                }}
              >
                <h3 style={{ fontWeight: "600", fontSize: "1.25rem", marginBottom: "1rem" }}>🙋 About Me</h3>
                <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#333", whiteSpace: "pre-wrap" }}>
                  {mentorData.about || "No bio available."}
                </p>
              </div>

              {/* Posts Section */}
              <div
                style={{
                  marginTop: "2rem",
                  background: "#ffffff",
                  border: "1px solid #dee2e6",
                  borderRadius: "10px",
                  padding: "2rem",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
              >
                <h3 style={{ fontWeight: "600", fontSize: "1.25rem", marginBottom: "1.5rem" }}>
                  📝 Posts by {mentorData.user.first_name}
                </h3>
                {posts.length === 0 && <p style={{ color: "#777" }}>No posts yet.</p>}
                {posts.map((post) => (
                  <div key={post.id} style={{ marginBottom: "2rem", borderBottom: "1px solid #eee", paddingBottom: "1rem" }}>
                    <p style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>{post.content}</p>
                    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                      <button
                        onClick={() => handleLikeToggle(post.id)}
                        style={{
                          padding: "5px 12px",
                          backgroundColor: post.liked_by_user ? "#0d6efd" : "#f0f0f0",
                          color: post.liked_by_user ? "#fff" : "#000",
                          border: "none",
                          borderRadius: "20px",
                          cursor: "pointer",
                          fontSize: "0.85rem",
                          fontWeight: "500",
                        }}
                      >
                        👍 {post.likes_count} Like
                      </button>
                      <button
                        onClick={() => toggleComments(post.id)}
                        style={{
                          fontSize: "0.85rem",
                          backgroundColor: "#f0f2f5",
                          border: "1px solid #d0d7de",
                          color: "#0a66c2",
                          cursor: "pointer",
                          borderRadius: "20px",
                          padding: "6px 12px",
                          transition: "all 0.2s ease-in-out",
                          fontWeight: 500,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#e7f3ff";
                          e.currentTarget.style.borderColor = "#b6d4fe";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#f0f2f5";
                          e.currentTarget.style.borderColor = "#d0d7de";
                        }}
                      >
                        {openComments[post.id]?.open ? "Hide Comments" : `${post.comments?.length || 0} Comments`}
                      </button>
                    </div>
                    {/* Comments */}
                    {openComments[post.id]?.open && (
                      <>
                        <div style={{ marginTop: "1rem" }}>
                          {Array.isArray(post.comments) && [...post.comments]
                            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                            .slice(0, openComments[post.id]?.visibleCount || 2)
                            .map((comment) => {
                              const relativeTime = getRelativeTime(comment.created_at);
                              return (
                                <div
                                  key={comment.id}
                                  style={{
                                    display: "flex",
                                    gap: "10px",
                                    backgroundColor: "#fff",
                                    padding: "12px",
                                    borderRadius: "12px",
                                    marginBottom: "12px",
                                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
                                    fontSize: "0.95rem",
                                    border: "1px solid #e4e6eb",
                                  }}
                                >
                                  <img
                                    src={comment.author_image}
                                    alt={comment.author_name}
                                    style={{
                                      width: "36px",
                                      height: "36px",
                                      borderRadius: "50%",
                                      objectFit: "cover",
                                      flexShrink: 0,
                                    }}
                                  />
                                  <div style={{ flex: 1 }}>
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginBottom: "4px",
                                      }}
                                    >
                                      <span style={{ fontWeight: "600", color: "#050505" }}>
                                        {comment.author_username}
                                      </span>
                                      <span
                                        style={{
                                          fontSize: "0.8rem",
                                          color: "#65676b",
                                          whiteSpace: "nowrap",
                                        }}
                                      >
                                        {relativeTime}
                                      </span>
                                    </div>
                                    <div style={{ color: "#4b4f56" }}>{comment.text}</div>
                                  </div>
                                </div>
                              );
                            })}
                          {(post.comments?.length || 0) > (openComments[post.id]?.visibleCount || 2) && (
                            <button
                              onClick={() => loadMoreComments(post.id)}
                              style={{
                                marginTop: "0.5rem",
                                backgroundColor: "#e7f3ff",
                                border: "1px solid #b6d4fe",
                                color: "#0a66c2",
                                padding: "6px 12px",
                                borderRadius: "20px",
                                fontSize: "0.85rem",
                                fontWeight: 500,
                                cursor: "pointer",
                              }}
                            >
                              Load more comments
                            </button>
                          )}
                        </div>
                      </>
                    )}
                    {/* Add Comment */}
                    <div style={{ marginTop: "0.5rem", display: "flex", gap: "0.5rem" }}>
                      <input
                        type="text"
                        placeholder="Write a comment..."
                        value={commentText[post.id] || ""}
                        onChange={(e) =>
                          setCommentText({ ...commentText, [post.id]: e.target.value })
                        }
                        style={{
                          flex: 1,
                          padding: "8px 12px",
                          borderRadius: "6px",
                          border: "1px solid #ccc",
                        }}
                      />
                      <button
                        onClick={() => handleCommentSubmit(post.id)}
                        style={{
                          backgroundColor: "#198754",
                          color: "white",
                          padding: "8px 14px",
                          borderRadius: "6px",
                          border: "none",
                          fontSize: "0.9rem",
                          fontWeight: "600",
                          cursor: "pointer",
                        }}
                      >
                        Send
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* RIGHT COLUMN */}
            {!isMobile && <div style={{ flex: 1 }}>{bookingCard}</div>}
          </div>
        </div>
        <HomeFiveFooter />
      </>
    );
  };

  export default MentorProfile;










  
  //   const handleDateChange = (date) => {
  //   setSelectedDate(date);
      
  //   if (date) {
  //     // Format date as YYYY-MM-DD (local)
  //     const year = date.getFullYear();
  //     const month = String(date.getMonth() + 1).padStart(2, "0");
  //     const dayNum = String(date.getDate()).padStart(2, "0");
  //     const dateStr = `${year}-${month}-${dayNum}`;

  //     const day = date.toLocaleString("en-US", { weekday: "long" });
  //     setSelectedDay(day);
  //     setSelectedTimeSlot("");

  //     // Fetch slots with new API URL
  //     if (selectedOption) {
  //       fetch(
  //         `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/mentors/${mentorData.id}/available-slots/?date=${dateStr}&duration=${selectedOption.duration_minutes}`
  //       )
  //         .then((res) => res.json())
  //         .then((data) => setAvailableSlots(data.slots))
  //         .catch((err) => console.error("Error fetching slots:", err));
  //     }
  //   } else {
  //     setSelectedDay("");
  //   }

  //   setAvailableSlots([]);
  // };


//   const handleDateChange = (date) => {
//   setSelectedDate(date);

//   if (date) {
//     const day = date.toLocaleString("en-US", { weekday: "long" });
//     setSelectedDay(day);
//     setSelectedTimeSlot(""); // Reset selected time slot when date changes
//   } else {
//     setSelectedDay("");
//     setSelectedTimeSlot(""); // Clear time slot when no date selected
//   }

//   // Note: Available slots will be fetched automatically by the useEffect hook
//   // when selectedDate changes, so no manual API call needed here
// };







 // Fetch available slots via API when date or duration changes
    // useEffect(() => {
    //   if (!selectedDate || !mentorData) {
    //     setAvailableSlots([]);
    //     return;
    //   }
    //   const dateStr = selectedDate.toISOString().split('T')[0];
    //   const fetchSlots = async () => {
    //     try {
    //       const res = await axios.get(
    //         `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/mentors/${mentorData.id}/available-slots/?date=${dateStr}&duration=${duration}`
    //         // `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/mentors/${mentorData.id}/available-slots/?date=${dateStr}&duration=${duration}`
    //       );
    //       // Ensure the response data is always an array
    //       setAvailableSlots(Array.isArray(res.data.slots) ? res.data.slots : []);
    //     } catch (err) {
    //       console.error('Error fetching slots:', err);
    //       setAvailableSlots([]);
    //     }
    //   };
    //   fetchSlots();
    // }, [selectedDate, duration, mentorData]);


// useEffect(() => {
//   if (!selectedDate || !mentorData || !selectedOptionId) {
//     setAvailableSlots([]);
//     return;
//   }

//   const selectedOption = sessionOptions.find(opt => opt.id === selectedOptionId);
//   const duration_minutes = selectedOption ? selectedOption.duration_minutes : 30; // fallback

//   // ✅ Use LOCAL date formatting instead of UTC
//   const dateStr = selectedDate instanceof Date && !isNaN(selectedDate)
//     ? (() => {
//         const year = selectedDate.getFullYear();
//         const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
//         const day = String(selectedDate.getDate()).padStart(2, "0");
//         return `${year}-${month}-${day}`;
//       })()
//     : "";

//   if (!dateStr) {
//     setAvailableSlots([]);
//     return;
//   }

//   const fetchSlots = async () => {
//     try {
//       const res = await axios.get(
//         `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/mentors/${mentorData.id}/available-slots/`,
//         {
//           params: {
//             date: dateStr,
//             duration: duration_minutes,
//           },
//         }
//       );

//       setAvailableSlots(
//         Array.isArray(res.data.available_slots) ? res.data.available_slots : []
//       );
//     } catch (err) {
//       console.error("Error fetching slots:", err);
//       setAvailableSlots([]);
//     }
//   };

//   fetchSlots();
// }, [selectedDate, selectedOptionId, mentorData, sessionOptions]);
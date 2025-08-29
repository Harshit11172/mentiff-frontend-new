
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
  const [reviews, setReviews] = useState([]);
  const [commentText, setCommentText] = useState({});
  const [openComments, setOpenComments] = useState({});
  const [activeTab, setActiveTab] = useState("about");
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // New state variables
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(0);
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Post creation state variables
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [newPostContent, setNewPostContent] = useState("");
  const [isSubmittingPost, setIsSubmittingPost] = useState(false);

  // About section editing state variables

  const [isEditingAbout, setIsEditingAbout] = useState(false);

  const [aboutText, setAboutText] = useState("");

  const [isSubmittingAbout, setIsSubmittingAbout] = useState(false);

  const today = new Date();
  const minDate = today;
  const maxDate = new Date(today);
  maxDate.setDate(today.getDate() + 7);
  const [sessionOptions, setSessionOptions] = useState([]);
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const selectedOption = sessionOptions.find(opt => opt.id === selectedOptionId);

  const handlePaymentInitiate = async () => {
    if (!selectedDate || !selectedTimeSlot || !selectedOption || !mentorData) {
      alert("Please select a date, time slot, and session duration before booking.");
      return;
    }
    if (!currentUser) {
      alert("⚠️ Please login to book a session!");
      window.location.href = "/login";
      return;
    }
    if (currentUser?.mentor_id === mentorData?.id) {
      alert("❌ You cannot book a session with yourself.");
      return;
    }
    if (currentUser?.user_type === "mentor") {
      alert("❌ A mentor cannot book a session, login as a mentee first!");
      return;
    }
    alert(`Booking a session on ${selectedDate.toLocaleDateString()} at ${selectedTimeSlot} for ${selectedOption.duration_minutes} min. Payment is being initiated...`);
    try {
      const authToken = localStorage.getItem("authToken");

      const res = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/payment/initiate/`,
        {
          mentee_id: currentUser.mentee_id,
          mentor_id: mentorData.id,
          // session_option_id: selectedOption.id,
          date: selectedDate.toISOString().split("T"),
          time_slot: selectedTimeSlot,
          currency: selectedOption.currency,
          total_amount: selectedOption.fee,
          callback_url: `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/payment/callback/`

        },
        {
          headers: {
            Authorization: `Token ${authToken}`,
          },
        }
      );
      // Optionally handle redirect or show a confirmation
      alert("Payment initiated successfully! Please complete your payment as directed.");
      // eg: window.location.href = res.data.payment_url;
      if (res.data.success && res.data.payment_url) {
        window.location.href = res.data.payment_url;
      } else {
        alert("Failed to initiate payment. Please try again.");
      }
    } catch (err) {
      console.error("Payment initiation error:", err);
      alert("Failed to initiate payment. Please try again.");
    }
  };



  // Tab configuration
  const tabs = [
    { id: "about", label: "About", icon: "👤" },
    { id: "posts", label: "Posts", icon: "📝", count: posts.length },
    { id: "reviews", label: "Reviews", icon: "⭐", count: reviews.length }
    // { id: "experience", label: "Experience", icon: "💼" },
    // { id: "education", label: "Education", icon: "🎓" }
  ];


  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setCurrentUser(parsedUser);
        console.log("current user is:::")
        console.log(currentUser)
      } catch (error) {
        console.error("Error parsing userData from localStorage:", error);
      }
    }
  }, []);


  // Initialize about text when mentor data loads

  useEffect(() => {

    if (mentorData) {

      setAboutText(mentorData.about || "");

    }

  }, [mentorData]);


  // All your existing useEffect hooks remain the same...
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
          setSelectedOptionId(res.data[0].id);
        }
      } catch (err) {
        setSessionOptions([]);
      }
    };
    fetchSessionOptions();
  }, [mentorData]);

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

  // Fetch reviews (you'll need to implement this API)
  useEffect(() => {
    if (!mentorData) return;
    const fetchReviews = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/feedbacks/?mentor_id=${id}`
        );
        setReviews(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        // Mock data for demonstration
        setReviews([
          {
            id: 1,
            student_name: "Aman",
            rating: 5,
            comment: "Excellent mentor! Very helpful and knowledgeable.",
            created_at: "2024-01-15T10:30:00Z"
          },
          {
            id: 2,
            student_name: "Prachi Tiwari",
            rating: 4,
            comment: "Great session, learned a lot about career guidance.",
            created_at: "2024-01-10T14:20:00Z"
          }
        ]);
      }
    };
    fetchReviews();
  }, [mentorData, id]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // New post creation handler
  const handleCreatePost = async () => {
    if (!newPostContent.trim()) {
      alert("Please write something to post.");
      return;
    }

    setIsSubmittingPost(true);
    try {
      const authToken = localStorage.getItem("authToken");
      if (!authToken) {
        alert("Please log in to create a post.");
        return;
      }

      const res = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/posts/`,
        {
          content: newPostContent,
          mentor: mentorData.id
        },
        {
          headers: {
            Authorization: `Token ${authToken}`,
          },
        }
      );

      const newPost = {
        id: res.data.id,
        mentor: currentUser.id,  // or however you link the logged-in user to mentor
        mentor_name: currentUser.username,   // or currentUser.first_name + last_name
        mentor_image: currentUser.profile_picture,
        content: newPostContent,
        created_at: new Date().toISOString(),
        likes_count: 0,
        liked_by_user: false,
        comments: []
      };

      // // Create the new post object with expected structure
      // const newPost = {
      //   id: res.data.id || Date.now(),
      //   content: newPostContent,
      //   created_at: new Date().toISOString(),
      //   likes_count: 0,
      //   liked_by_user: false,
      //   comments: [],
      //   author: {
      //     id: currentUser.id,
      //     username: currentUser.username,
      //     first_name: currentUser.first_name,
      //     last_name: currentUser.last_name,
      //     profile_picture: currentUser.profile_picture
      //   }
      // };

      // Add the new post to the beginning of the posts array
      setPosts([newPost, ...posts]);
      setNewPostContent("");
      setIsCreatingPost(false);

    } catch (err) {
      console.error('Error creating post:', err);
      alert("Failed to create post. Please try again.");
    } finally {
      setIsSubmittingPost(false);
    }
  };

  const handleCancelPost = () => {
    setNewPostContent("");
    setIsCreatingPost(false);
  };



  useEffect(() => {
    if (!selectedDate || !mentorData || !selectedOptionId) {
      setAvailableSlots([]);
      return;
    }

    const selectedOption = sessionOptions.find(opt => opt.id === selectedOptionId);
    const duration_minutes = selectedOption ? selectedOption.duration_minutes : 30;

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

  // All your existing handler functions remain the same...
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
  };

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


  // New review submission handler
  const handleReviewSubmit = async () => {
    if (!reviewText.trim() || reviewRating === 0) {
      alert("Please provide both a rating and a comment for your review.");
      return;
    }

    setIsSubmittingReview(true);
    try {
      const authToken = localStorage.getItem("authToken");
      if (!authToken) {
        alert("Please log in to submit a review.");
        return;
      }

      const res = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/feedbacks/`,
        {
          mentor: mentorData.id,
          rating: reviewRating,
          comments: reviewText,
        },
        {
          headers: {
            Authorization: `Token ${authToken}`,
          },
        }
      );

      // Add the new review to the reviews list
      const newReview = {
        id: res.data.id || Date.now(),
        mentee_name: currentUser?.username || "Anonymous",
        rating: reviewRating,
        comments: reviewText,
        created_at: new Date().toISOString()
      };

      setReviews([newReview, ...reviews]);
      setReviewText("");
      setReviewRating(0);
      alert("Review submitted successfully!");

    } catch (err) {
      console.error('Error submitting review:', err);
      alert("Failed to submit review. Please try again.");
    } finally {
      setIsSubmittingReview(false);
    }
  };

  // const renderStars = (rating) => {
  //   return Array.from({ length: 5 }, (_, i) => (
  //     <span key={i} style={{ color: i < rating ? "#ffc107" : "#e4e5e9" }}>
  //       ★
  //     </span>
  //   ));
  // };

  const renderInteractiveStars = (rating, onRatingChange) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        onClick={() => onRatingChange(i + 1)}
        style={{
          color: i < rating ? "#ffc107" : "#e4e5e9",
          cursor: "pointer",
          fontSize: "1.5rem",
          marginRight: "4px",
          transition: "color 0.2s ease"
        }}
        onMouseEnter={(e) => e.target.style.color = i < rating ? "#ffc107" : "#ffca2c"}
        onMouseLeave={(e) => e.target.style.color = i < rating ? "#ffc107" : "#e4e5e9"}
      >
        ★
      </span>
    ));
  };


  // Check if current user is the mentor
  const isCurrentUserMentor = currentUser && mentorData && currentUser.id === mentorData.user.id;

  console.log("MENTOR DATA IS ")
  console.log(mentorData)

  console.log("CURRENT USER DATA IS ")
  console.log(currentUser)
  const isLoggedIn = !!localStorage.getItem("authToken");



  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} style={{ color: i < rating ? "#ffc107" : "#e4e5e9" }}>
        ★
      </span>
    ));
  };


  // About section handlers

  const handleEditAbout = () => {
    console.log("handle edit set as true")
    setIsEditingAbout(true);

    setAboutText(mentorData.about || "");

  };



  const handleCancelAboutEdit = () => {

    console.log("Cancelling edit"); // in cancel


    setIsEditingAbout(false);

    setAboutText(mentorData.about || "");

  };



  const handleSaveAbout = async () => {

    setIsSubmittingAbout(true);

    try {

      const authToken = localStorage.getItem("authToken");

      if (!authToken) {

        alert("Please log in to update your profile.");

        return;

      }

      const res = await axios.patch(

        `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/update/mentor/${mentorData.id}/`,

        {

          about: aboutText

        },

        {

          headers: {

            Authorization: `Token ${authToken}`,

          },

        }

      );



      // Update the mentor data with the new about text

      setMentorData(prev => ({

        ...prev,

        about: aboutText

      }));



      setIsEditingAbout(false);

      alert("About section updated successfully!");



    } catch (err) {

      console.error('Error updating about section:', err);

      alert("Failed to update about section. Please try again.");

    } finally {

      setIsSubmittingAbout(false);

    }

  };



  const renderTabContent = () => {
    switch (activeTab) {

      // case "about":
      //   return (
      //     <div style={{ padding: "1rem" }}>
      //       <div style={{
      //         display: "flex",
      //         justifyContent: "space-between",
      //         alignItems: "center",
      //         marginBottom: "1.5rem"
      //       }}>
      //         <h3 style={{
      //           fontWeight: "600",
      //           fontSize: "1.3rem",
      //           margin: 0,
      //           color: "#2c3e50"
      //         }}>
      //           About {mentorData.user.first_name}
      //         </h3>

      //         {/* Edit/Write About button - Only show if current user is the mentor */}

      //         {/* {isCurrentUserMentor && !isEditingAbout && (
      //     <button
      //       onClick={handleEditAbout}
      //       style={{
      //         display: "flex",
      //         alignItems: "center",
      //         gap: "6px",
      //         padding: "8px 16px",
      //         backgroundColor: "#0066cc",
      //         color: "white",
      //         border: "none",
      //         borderRadius: "6px",
      //         fontSize: "0.9rem",
      //         fontWeight: "500",
      //         cursor: "pointer",
      //         transition: "all 0.2s ease"
      //       }}
      //       onMouseEnter={(e) => e.target.style.backgroundColor = "#0056b3"}
      //       onMouseLeave={(e) => e.target.style.backgroundColor = "#0066cc"}
      //     >
      //       ✏️ {mentorData.about ? "Edit About" : "Write About"}
      //     </button>
      //   )} */}

      //       </div>

      //       {isEditingAbout ? (
      //         // Edit mode
      //         <div style={{
      //           background: "#f8f9fa",
      //           border: "1px solid #dee2e6",
      //           borderRadius: "12px",
      //           padding: "1.5rem"
      //         }}>
      //           <div style={{ marginBottom: "1rem" }}>
      //             <label style={{
      //               fontWeight: "500",
      //               fontSize: "0.95rem",
      //               color: "#495057",
      //               display: "block",
      //               marginBottom: "0.5rem"
      //             }}>
      //               Tell others about yourself:
      //             </label>
      //             <textarea
      //               value={aboutText}
      //               onChange={(e) => setAboutText(e.target.value)}
      //               placeholder="Share your background, expertise, interests, and what makes you a great mentor..."
      //               style={{
      //                 width: "100%",
      //                 minHeight: "150px",
      //                 padding: "16px",
      //                 borderRadius: "8px",
      //                 border: "1px solid #dee2e6",
      //                 fontSize: "1rem",
      //                 lineHeight: "1.6",
      //                 outline: "none",
      //                 resize: "vertical",
      //                 fontFamily: "inherit",
      //                 backgroundColor: "#fff",
      //                 boxSizing: "border-box"
      //               }}
      //               maxLength={1000}
      //             />
      //             <div style={{
      //               fontSize: "0.85rem",
      //               color: "#6c757d",
      //               marginTop: "0.5rem",
      //               textAlign: "right"
      //             }}>
      //               {aboutText.length}/1000 characters
      //             </div>
      //           </div>

      //           <div style={{
      //             display: "flex",
      //             justifyContent: "flex-end",
      //             gap: "12px"
      //           }}>
      //             <button
      //               onClick={(e) => {
      //                 e.preventDefault();
      //                 e.stopPropagation();
      //                 handleCancelAboutEdit();
      //               }}
      //               disabled={isSubmittingAbout}
      //               style={{
      //                 padding: "10px 20px",
      //                 borderRadius: "6px",
      //                 border: "1px solid #dee2e6",
      //                 backgroundColor: "#fff",
      //                 color: "#6c757d",
      //                 fontSize: "0.95rem",
      //                 fontWeight: "500",
      //                 cursor: isSubmittingAbout ? "not-allowed" : "pointer",
      //                 transition: "all 0.2s ease",
      //                 opacity: isSubmittingAbout ? 0.6 : 1
      //               }}
      //               onMouseEnter={(e) => {
      //                 if (!isSubmittingAbout) {
      //                   e.target.style.backgroundColor = "#f8f9fa";
      //                   e.target.style.borderColor = "#adb5bd";
      //                 }
      //               }}
      //               onMouseLeave={(e) => {
      //                 if (!isSubmittingAbout) {
      //                   e.target.style.backgroundColor = "#fff";
      //                   e.target.style.borderColor = "#dee2e6";
      //                 }
      //               }}
      //             >
      //               Cancel
      //             </button>
      //             <button
      //               onClick={(e) => {
      //                 e.preventDefault();
      //                 e.stopPropagation();
      //                 handleSaveAbout();
      //               }}
      //               disabled={isSubmittingAbout}
      //               style={{
      //                 padding: "10px 20px",
      //                 borderRadius: "6px",
      //                 border: "none",
      //                 backgroundColor: isSubmittingAbout ? "#6c757d" : "#198754",
      //                 color: "white",
      //                 fontSize: "0.95rem",
      //                 fontWeight: "500",
      //                 cursor: isSubmittingAbout ? "not-allowed" : "pointer",
      //                 transition: "all 0.2s ease",
      //                 display: "flex",
      //                 alignItems: "center",
      //                 gap: "8px",
      //                 opacity: isSubmittingAbout ? 0.8 : 1
      //               }}
      //               onMouseEnter={(e) => {
      //                 if (!isSubmittingAbout) {
      //                   e.target.style.backgroundColor = "#157347";
      //                 }
      //               }}
      //               onMouseLeave={(e) => {
      //                 if (!isSubmittingAbout) {
      //                   e.target.style.backgroundColor = "#198754";
      //                 }
      //               }}
      //             >
      //               {isSubmittingAbout ? (
      //                 <>
      //                   <div style={{
      //                     width: "16px",
      //                     height: "16px",
      //                     border: "2px solid #fff",
      //                     borderTop: "2px solid transparent",
      //                     borderRadius: "50%",
      //                     animation: "spin 1s linear infinite"
      //                   }}></div>
      //                   Saving...
      //                 </>
      //               ) : (
      //                 <>
      //                   💾 Save Changes
      //                 </>
      //               )}
      //             </button>
      //           </div>
      //         </div>
      //       ) : (
      //         // Display mode
      //         <div style={{
      //           fontSize: "1rem",
      //           lineHeight: "1.7",
      //           color: "#555",
      //           whiteSpace: "pre-wrap"
      //         }}>
      //           {mentorData.about ? (
      //             <div style={{
      //               background: "#fff",
      //               padding: "1.5rem",
      //               borderRadius: "8px",
      //               border: "1px solid #f0f0f0"
      //             }}>
      //               {mentorData.about}
      //             </div>
      //           ) : (
      //             <div style={{
      //               padding: "2rem",
      //               textAlign: "center",
      //               color: "#888",
      //               backgroundColor: "#f8f9fa",
      //               borderRadius: "8px",
      //               border: "2px dashed #dee2e6"
      //             }}>
      //               <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>📝</p>
      //               <p>No bio available yet.</p>
      //               {isCurrentUserMentor && (
      //                 <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "0.5rem" }}>
      //                   Click "Write About" to add your bio!
      //                 </p>
      //               )}
      //             </div>
      //           )}
      //         </div>
      //       )}
      //     </div>
      //   );


      case "about":
        return (
          <div style={{ padding: "1rem" }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1.5rem"
            }}>
              <h3 style={{
                fontWeight: "600",
                fontSize: "1.3rem",
                margin: 0,
                color: "#2c3e50"
              }}>
                About {mentorData.user.first_name}
              </h3>

              {/* Edit/Write About button - Uncommented and fixed */}
              {isCurrentUserMentor && !isEditingAbout && (
                <button
                  onClick={handleEditAbout}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 16px",
                    backgroundColor: "#0066cc",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = "#0056b3"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = "#0066cc"}
                >
                  ✏️ {mentorData.about ? "Edit About" : "Write About"}
                </button>
              )}
            </div>

            {isEditingAbout ? (
              // Edit mode
              <div style={{
                background: "#f8f9fa",
                border: "1px solid #dee2e6",
                borderRadius: "12px",
                padding: "1.5rem"
              }}>
                <div style={{ marginBottom: "1rem" }}>
                  <label style={{
                    fontWeight: "500",
                    fontSize: "0.95rem",
                    color: "#495057",
                    display: "block",
                    marginBottom: "0.5rem"
                  }}>
                    Tell others about yourself:
                  </label>
                  <textarea
                    value={aboutText}
                    onChange={(e) => setAboutText(e.target.value)}
                    placeholder="Share your background, expertise, interests, and what makes you a great mentor..."
                    style={{
                      width: "100%",
                      minHeight: "150px",
                      padding: "16px",
                      borderRadius: "8px",
                      border: "1px solid #dee2e6",
                      fontSize: "1rem",
                      lineHeight: "1.6",
                      outline: "none",
                      resize: "vertical",
                      fontFamily: "inherit",
                      backgroundColor: "#fff",
                      boxSizing: "border-box"
                    }}
                    maxLength={1000}
                  />
                  <div style={{
                    fontSize: "0.85rem",
                    color: "#6c757d",
                    marginTop: "0.5rem",
                    textAlign: "right"
                  }}>
                    {aboutText.length}/1000 characters
                  </div>
                </div>

                <div style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "12px"
                }}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleCancelAboutEdit();
                    }}
                    disabled={isSubmittingAbout}
                    style={{
                      padding: "10px 20px",
                      borderRadius: "6px",
                      border: "1px solid #dee2e6",
                      backgroundColor: "#fff",
                      color: "#6c757d",
                      fontSize: "0.95rem",
                      fontWeight: "500",
                      cursor: isSubmittingAbout ? "not-allowed" : "pointer",
                      transition: "all 0.2s ease",
                      opacity: isSubmittingAbout ? 0.6 : 1
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmittingAbout) {
                        e.target.style.backgroundColor = "#f8f9fa";
                        e.target.style.borderColor = "#adb5bd";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmittingAbout) {
                        e.target.style.backgroundColor = "#fff";
                        e.target.style.borderColor = "#dee2e6";
                      }
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleSaveAbout();
                    }}
                    disabled={isSubmittingAbout}
                    style={{
                      padding: "10px 20px",
                      borderRadius: "6px",
                      border: "none",
                      backgroundColor: isSubmittingAbout ? "#6c757d" : "#198754",
                      color: "white",
                      fontSize: "0.95rem",
                      fontWeight: "500",
                      cursor: isSubmittingAbout ? "not-allowed" : "pointer",
                      transition: "all 0.2s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      opacity: isSubmittingAbout ? 0.8 : 1
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmittingAbout) {
                        e.target.style.backgroundColor = "#157347";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmittingAbout) {
                        e.target.style.backgroundColor = "#198754";
                      }
                    }}
                  >
                    {isSubmittingAbout ? (
                      <>
                        <div style={{
                          width: "16px",
                          height: "16px",
                          border: "2px solid #fff",
                          borderTop: "2px solid transparent",
                          borderRadius: "50%",
                          animation: "spin 1s linear infinite"
                        }}></div>
                        Saving...
                      </>
                    ) : (
                      <>
                        💾 Save Changes
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              // Display mode
              <div style={{
                fontSize: "1rem",
                lineHeight: "1.7",
                color: "#555",
                whiteSpace: "pre-wrap"
              }}>
                {mentorData.about ? (
                  <div style={{
                    background: "#fff",
                    padding: "1.5rem",
                    borderRadius: "8px",
                    border: "1px solid #f0f0f0"
                  }}>
                    {mentorData.about}
                  </div>
                ) : (
                  <div style={{
                    padding: "2rem",
                    textAlign: "center",
                    color: "#888",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "8px",
                    border: "2px dashed #dee2e6"
                  }}>
                    <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>📝</p>
                    <p>No bio available yet.</p>
                    {isCurrentUserMentor && (
                      <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "0.5rem" }}>
                        Click "Write About" to add your bio!
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        );

      case "posts":
        return (
          <div style={{ padding: "1rem" }}>
            <h3 style={{
              fontWeight: "600",
              fontSize: "1.3rem",
              marginBottom: "1.5rem",
              color: "#2c3e50"
            }}>
              Posts by {mentorData.user.first_name}
            </h3>


            {/* Post Creation Section - Only show if current user is the mentor */}
            {isCurrentUserMentor && (
              <div style={{
                background: "#fff",
                border: "1px solid #dee2e6",
                borderRadius: "12px",
                padding: "1.5rem",
                marginBottom: "2rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                transition: "all 0.3s ease"
              }}>
                {!isCreatingPost ? (
                  // Post prompt - LinkedIn style
                  <div
                    onClick={() => setIsCreatingPost(true)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      cursor: "pointer",
                      padding: "12px 0"
                    }}
                  >
                    <img
                      src={currentUser?.profile_picture || mentorData.profile_picture}
                      alt="Profile"
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "2px solid #f0f0f0"
                      }}
                    />
                    <div
                      style={{
                        flex: 1,
                        padding: "14px 20px",
                        backgroundColor: "#f8f9fa",
                        borderRadius: "25px",
                        border: "1px solid #dee2e6",
                        color: "#666",
                        fontSize: "1rem",
                        fontWeight: "400",
                        transition: "all 0.2s ease",
                        cursor: "text"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#f0f2f5";
                        e.target.style.borderColor = "#0066cc";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#f8f9fa";
                        e.target.style.borderColor = "#dee2e6";
                      }}
                    >
                      Share your knowledge and insights...
                    </div>
                  </div>
                ) : (
                  // Post creation form
                  <div>
                    <div style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      marginBottom: "16px"
                    }}>
                      <img
                        src={currentUser?.profile_picture || mentorData.profile_picture}
                        alt="Profile"
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: "2px solid #f0f0f0",
                          flexShrink: 0
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <h4 style={{
                          margin: 0,
                          fontSize: "1rem",
                          fontWeight: "600",
                          color: "#333",
                          marginBottom: "4px"
                        }}>
                          {currentUser?.first_name} {currentUser?.last_name}
                        </h4>
                        <p style={{
                          margin: 0,
                          fontSize: "0.85rem",
                          color: "#666"
                        }}>
                          Share to your network
                        </p>
                      </div>
                    </div>

                    <textarea
                      value={newPostContent}
                      onChange={(e) => setNewPostContent(e.target.value)}
                      placeholder="What insights would you like to share with your mentees?"
                      style={{
                        width: "100%",
                        minHeight: "120px",
                        padding: "16px",
                        border: "none",
                        borderRadius: "8px",
                        backgroundColor: "#fafbfc",
                        fontSize: "1rem",
                        lineHeight: "1.5",
                        outline: "none",
                        resize: "vertical",
                        fontFamily: "inherit",
                        color: "#333"
                      }}
                      autoFocus
                    />

                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "16px",
                      paddingTop: "16px",
                      borderTop: "1px solid #eee"
                    }}>
                      <div style={{
                        fontSize: "0.85rem",
                        color: "#666",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px"
                      }}>
                        <span>✨</span>
                        <span>Share your expertise and inspire others</span>
                      </div>

                      <div style={{ display: "flex", gap: "12px" }}>
                        <button
                          onClick={handleCancelPost}
                          disabled={isSubmittingPost}
                          style={{
                            padding: "10px 24px",
                            borderRadius: "24px",
                            border: "1px solid #dee2e6",
                            backgroundColor: "#fff",
                            color: "#666",
                            fontSize: "0.95rem",
                            fontWeight: "600",
                            cursor: isSubmittingPost ? "not-allowed" : "pointer",
                            transition: "all 0.2s ease"
                          }}
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleCreatePost}
                          disabled={isSubmittingPost || !newPostContent.trim()}
                          style={{
                            padding: "10px 24px",
                            borderRadius: "24px",
                            border: "none",
                            backgroundColor: (!newPostContent.trim() || isSubmittingPost) ? "#ccc" : "#0066cc",
                            color: "white",
                            fontSize: "0.95rem",
                            fontWeight: "600",
                            cursor: (!newPostContent.trim() || isSubmittingPost) ? "not-allowed" : "pointer",
                            transition: "all 0.2s ease",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px"
                          }}
                        >
                          {isSubmittingPost ? (
                            <>
                              <div style={{
                                width: "16px",
                                height: "16px",
                                border: "2px solid #fff",
                                borderTop: "2px solid transparent",
                                borderRadius: "50%",
                                animation: "spin 1s linear infinite"
                              }}></div>
                              Posting...
                            </>
                          ) : (
                            <>
                              📝 Post
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}


            {posts.length === 0 ? (
              <div style={{
                padding: "2rem 1rem",
                textAlign: "center",
                color: "#888",
                backgroundColor: "#f8f9fa",
                borderRadius: "12px",
                border: "2px dashed #dee2e6"
              }}>
                <p style={{ fontSize: "2rem", marginBottom: "1rem" }}>📝</p>
                <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>No posts yet</p>
                <p style={{ fontSize: "0.9rem" }}>Check back later for updates!</p>
              </div>
            ) : (
              posts.map((post) => (
                <div key={post.id} style={{
                  marginBottom: "2rem",
                  borderBottom: "1px solid #eee",
                  paddingBottom: "1.5rem",
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "1rem 0.75rem",
                  border: "1px solid #f0f0f0",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.02)"
                }}>
                  <p style={{
                    fontSize: "0.90rem",
                    marginBottom: "1rem",
                    lineHeight: "1.6",
                    color: "#333",
                    wordWrap: "break-word",
                    overflowWrap: "break-word"
                  }}>
                    {post.content}
                  </p>
                  <div style={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                    flexWrap: "wrap"
                  }}>
                    <button
                      onClick={() => handleLikeToggle(post.id)}
                      style={{
                        padding: "6px 12px",
                        backgroundColor: post.liked_by_user ? "#0d6efd" : "#f8f9fa",
                        color: post.liked_by_user ? "#fff" : "#555",
                        border: post.liked_by_user ? "none" : "1px solid #dee2e6",
                        borderRadius: "20px",
                        cursor: "pointer",
                        fontSize: "0.85rem",
                        fontWeight: "500",
                        transition: "all 0.2s ease",
                        minWidth: "fit-content",
                        whiteSpace: "nowrap"
                      }}
                    >
                      👍 {post.likes_count}
                    </button>
                    <button
                      onClick={() => toggleComments(post.id)}
                      style={{
                        fontSize: "0.85rem",
                        backgroundColor: "#f8f9fa",
                        border: "1px solid #dee2e6",
                        color: "#555",
                        cursor: "pointer",
                        borderRadius: "20px",
                        padding: "6px 12px",
                        fontWeight: "500",
                        transition: "all 0.2s ease",
                        minWidth: "fit-content",
                        whiteSpace: "nowrap"
                      }}
                    >
                      💬 {post.comments?.length || 0} Comments
                    </button>
                  </div>

                  {/* Comments section */}
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
                                  gap: "8px",
                                  backgroundColor: "#f8f9fa",
                                  padding: "10px",
                                  borderRadius: "12px",
                                  marginBottom: "12px",
                                  fontSize: "0.95rem",
                                  border: "1px solid #f0f0f0",
                                }}
                              >
                                <img
                                  src={comment.author_image}
                                  alt={comment.author_name}
                                  style={{
                                    width: "32px",
                                    height: "32px",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    flexShrink: 0,
                                  }}
                                />
                                <div style={{
                                  flex: 1,
                                  minWidth: 0,
                                  wordWrap: "break-word",
                                  overflowWrap: "break-word"
                                }}>
                                  <div style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    marginBottom: "4px",
                                    gap: "8px"
                                  }}>
                                    <span style={{
                                      fontWeight: "600",
                                      color: "#333",
                                      wordBreak: "break-word",
                                      flex: 1,
                                      minWidth: 0
                                    }}>
                                      {comment.author_username}
                                    </span>
                                    <span style={{
                                      fontSize: "0.75rem",
                                      color: "#888",
                                      whiteSpace: "nowrap",
                                      flexShrink: 0
                                    }}>
                                      {relativeTime}
                                    </span>
                                  </div>
                                  <div style={{
                                    color: "#555",
                                    wordWrap: "break-word",
                                    overflowWrap: "break-word",
                                    lineHeight: "1.4"
                                  }}>
                                    {comment.text}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        {(post.comments?.length || 0) > (openComments[post.id]?.visibleCount || 2) && (
                          <button
                            onClick={() => loadMoreComments(post.id)}
                            style={{
                              marginTop: "0.5rem",
                              backgroundColor: "#f8f9fa",
                              border: "1px solid #dee2e6",
                              color: "#555",
                              padding: "6px 12px",
                              borderRadius: "20px",
                              fontSize: "0.85rem",
                              fontWeight: "500",
                              cursor: "pointer",
                              width: "100%",
                              maxWidth: "200px"
                            }}
                          >
                            Load more comments
                          </button>
                        )}
                      </div>
                    </>
                  )}

                  {/* Add Comment */}
                  <div style={{
                    marginTop: "1rem",
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "flex-end"
                  }}>
                    <input
                      type="text"
                      placeholder="Write a comment..."
                      value={commentText[post.id] || ""}
                      onChange={(e) =>
                        setCommentText({ ...commentText, [post.id]: e.target.value })
                      }
                      style={{
                        flex: 1,
                        minWidth: 0,
                        padding: "10px 12px",
                        borderRadius: "20px",
                        border: "1px solid #dee2e6",
                        fontSize: "0.9rem",
                        outline: "none",
                        boxSizing: "border-box"
                      }}
                    />
                    <button
                      onClick={() => handleCommentSubmit(post.id)}
                      style={{
                        backgroundColor: "#198754",
                        color: "white",
                        padding: "10px 14px",
                        borderRadius: "20px",
                        border: "none",
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                        minWidth: "60px"
                      }}
                    >
                      Send
                    </button>
                  </div>

                </div>
              ))
            )}
          </div>
        );

      case "reviews":
        return (
          <div style={{ padding: "1rem" }}>
            <h3 style={{
              fontWeight: "600",
              fontSize: "1.3rem",
              marginBottom: "1.5rem",
              color: "#2c3e50"
            }}>
              Student Reviews
            </h3>

            {/* Post Review Section - Only show if user is logged in and is not the mentor */}
            {isLoggedIn && !isCurrentUserMentor && currentUser?.user_type !== "mentor" && (

              <div style={{
                background: "#f8f9fa",
                border: "1px solid #dee2e6",
                borderRadius: "12px",
                padding: "1.5rem",
                marginBottom: "2rem",
                boxShadow: "0 2px 4px rgba(0,0,0,0.02)"
              }}>
                <h4 style={{
                  fontWeight: "600",
                  fontSize: "1.1rem",
                  marginBottom: "1rem",
                  color: "#2c3e50"
                }}>
                  📝 Write a Review
                </h4>

                <div style={{ marginBottom: "1rem" }}>
                  <label style={{
                    fontWeight: "500",
                    fontSize: "0.95rem",
                    color: "#495057",
                    display: "block",
                    marginBottom: "0.5rem"
                  }}>
                    Rating:
                  </label>
                  <div style={{ marginBottom: "1rem" }}>
                    {renderInteractiveStars(reviewRating, setReviewRating)}
                  </div>
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <label style={{
                    fontWeight: "500",
                    fontSize: "0.95rem",
                    color: "#495057",
                    display: "block",
                    marginBottom: "0.5rem"
                  }}>
                    Your Review:
                  </label>
                  <textarea
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Share your experience with this mentor..."
                    style={{
                      width: "100%",
                      minHeight: "100px",
                      padding: "12px",
                      borderRadius: "8px",
                      border: "1px solid #dee2e6",
                      fontSize: "0.95rem",
                      lineHeight: "1.5",
                      outline: "none",
                      resize: "vertical",
                      fontFamily: "inherit"
                    }}
                  />
                </div>

                <button
                  onClick={handleReviewSubmit}
                  disabled={isSubmittingReview || !reviewText.trim() || reviewRating === 0}
                  style={{
                    backgroundColor: isSubmittingReview ? "#6c757d" : "#198754",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    padding: "12px 24px",
                    fontSize: "0.95rem",
                    fontWeight: "600",
                    cursor: isSubmittingReview ? "not-allowed" : "pointer",
                    transition: "all 0.2s ease"
                  }}
                >
                  {isSubmittingReview ? "Submitting..." : "Submit Review"}
                </button>
              </div>
            )}

            {/* Login prompt for non-logged in users */}
            {!isLoggedIn && (
              <div style={{
                background: "#fff3cd",
                border: "1px solid #ffeaa7",
                borderRadius: "12px",
                padding: "1.5rem",
                marginBottom: "2rem",
                textAlign: "center"
              }}>
                <p style={{
                  color: "#856404",
                  margin: 0,
                  fontSize: "0.95rem"
                }}>
                  🔐 Please log in to write a review for this mentor.
                </p>
              </div>
            )}

            {/* Note for mentor viewing their own profile */}
            {isCurrentUserMentor && (
              <div style={{
                background: "#d1ecf1",
                border: "1px solid #bee5eb",
                borderRadius: "12px",
                padding: "1.5rem",
                marginBottom: "2rem",
                textAlign: "center"
              }}>
                <p style={{
                  color: "#0c5460",
                  margin: 0,
                  fontSize: "0.95rem"
                }}>
                  ℹ️ You cannot review your own profile.
                </p>
              </div>
            )}


            {/* Note for mentor viewing as a mentor profile */}

            {currentUser?.user_type === "mentor" && !isCurrentUserMentor && (
              <div style={{
                background: "#d1ecf1",
                border: "1px solid #bee5eb",
                borderRadius: "12px",
                padding: "1.5rem",
                marginBottom: "2rem",
                textAlign: "center"
              }}>
                <p style={{
                  color: "#0c5460",
                  margin: 0,
                  fontSize: "0.95rem"
                }}>
                  ℹ️ You cannot review profile being a mentor.
                </p>
              </div>
            )}

            {/* Existing Reviews */}
            {reviews.length === 0 ? (
              <div style={{
                padding: "3rem 2rem",
                textAlign: "center",
                color: "#888",
                backgroundColor: "#f8f9fa",
                borderRadius: "12px",
                border: "2px dashed #dee2e6"
              }}>
                <p style={{ fontSize: "2rem", marginBottom: "1rem" }}>⭐</p>
                <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>No reviews yet</p>
                <p style={{ fontSize: "0.9rem" }}>Be the first to book and leave a review!</p>
              </div>
            ) : (
              reviews.map((review) => (
                <div key={review.id} style={{
                  background: "#fff",
                  border: "1px solid #f0f0f0",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  marginBottom: "1.5rem",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.02)"
                }}>
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1rem"
                  }}>
                    <div>
                      <h4 style={{
                        fontWeight: "600",
                        fontSize: "1rem",
                        margin: 0,
                        color: "#333"
                      }}>
                        {review.mentee_name}
                      </h4>
                      <div style={{ fontSize: "1.1rem", marginTop: "4px" }}>
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    <span style={{
                      fontSize: "0.85rem",
                      color: "#888"
                    }}>
                      {getRelativeTime(review.created_at)}
                    </span>
                  </div>
                  <p style={{
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    color: "#555",
                    margin: 0
                  }}>
                    {review.comments}
                  </p>
                </div>
              ))
            )}
          </div>
        );

      case "experience":
        return (
          <div style={{ padding: "1rem" }}>
            <h3 style={{
              fontWeight: "600",
              fontSize: "1.3rem",
              marginBottom: "1.5rem",
              color: "#2c3e50"
            }}>
              Professional Experience
            </h3>
            <div style={{
              padding: "3rem 2rem",
              textAlign: "center",
              color: "#888",
              backgroundColor: "#f8f9fa",
              borderRadius: "12px",
              border: "2px dashed #dee2e6"
            }}>
              <p style={{ fontSize: "2rem", marginBottom: "1rem" }}>💼</p>
              <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>Experience details coming soon</p>
              <p style={{ fontSize: "0.9rem" }}>This section will be updated with professional experience.</p>
            </div>
          </div>
        );

      case "education":
        return (
          <div style={{ padding: "1rem" }}>
            <h3 style={{
              fontWeight: "600",
              fontSize: "1.3rem",
              marginBottom: "1.5rem",
              color: "#2c3e50"
            }}>
              Education Background
            </h3>
            <div style={{
              background: "#fff",
              border: "1px solid #f0f0f0",
              borderRadius: "12px",
              padding: "1.5rem",
              boxShadow: "0 2px 4px rgba(0,0,0,0.02)"
            }}>
              <div style={{ marginBottom: "1rem" }}>
                <h4 style={{
                  fontWeight: "600",
                  fontSize: "1.1rem",
                  color: "#333",
                  marginBottom: "0.5rem"
                }}>
                  🎓 {mentorData.degree} in {mentorData.major}
                </h4>
                <p style={{
                  fontSize: "1rem",
                  color: "#555",
                  margin: 0
                }}>
                  📍 {mentorData.university}
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
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
        marginBottom: "1rem"
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
            {selectedDay}
          </span>
        </div>
      )}


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



      {/* <button
        onClick={() => {
          if (!currentUser) {
            alert("⚠️ Please login to book a session!");
            window.location.href = "/login";
            return;
          }

          if (currentUser?.mentor_id === mentorData?.id) {
            alert("❌ You cannot book a session with yourself.");
            return;
          }

          handlePayNow();
        }}
        style={{
          marginTop: "1.5rem",
          width: "100%",
          padding: "12px",
          backgroundColor:
            currentUser?.mentor_id === mentorData?.id ? "#ccc" : "#198754",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontWeight: "600",
          fontSize: "1rem",
          cursor:
            !currentUser || currentUser?.mentor_id === mentorData?.id
              ? "not-allowed"
              : "pointer",
        }}
      >
        💳 Pay Now
      </button> */}

      <button
        onClick={handlePaymentInitiate}
        style={{
          marginTop: "1.5rem",
          width: "100%",
          padding: "12px",
          backgroundColor:
            currentUser?.mentor_id === mentorData?.id ? "#ccc" : "#198754",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontWeight: "600",
          fontSize: "1rem",
          cursor:
            !currentUser || currentUser?.mentor_id === mentorData?.id
              ? "not-allowed"
              : "pointer",
        }}
      >
        💳 Pay Now
      </button>




    </div>
  );


  return (
    <>
      <HomeFiveHeader />
      <div style={{ maxWidth: "1200px", margin: "2rem auto", padding: "0 1rem" }}>
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "2rem" }}>

          <div style={{ flex: 2 }}>

            {/* Profile Header */}
            <div
              style={{
                background: "white",
                border: "1px solid #dee2e6",
                borderRadius: "12px",
                padding: isMobile ? "1.5rem" : "2rem",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "1.5rem",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                marginBottom: "1rem",
              }}
            >
              <img
                src={mentorData.profile_picture}
                alt="Profile"
                style={{
                  width: isMobile ? "60px" : "100px",
                  height: isMobile ? "60px" : "100px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid #f8f9fa",
                }}
              />
              <div style={{ flex: 1 }}>
                <h1
                  style={{
                    fontSize: isMobile ? "1.3rem" : "1.8rem",
                    fontWeight: "700",
                    marginBottom: "0.5rem",
                    color: "#2c3e50",
                    letterSpacing: "-0.5px"
                  }}
                >
                  {mentorData.user.first_name} {mentorData.user.last_name}
                </h1>
                <p
                  style={{
                    fontSize: isMobile ? "0.9rem" : "1rem",
                    color: "#6c757d",
                    margin: "0 0 0.25rem 0",
                    fontWeight: "500"
                  }}
                >
                  📍 {mentorData.university}
                </p>
                <p
                  style={{
                    fontSize: isMobile ? "0.85rem" : "0.95rem",
                    color: "#495057",
                    margin: 0,
                  }}
                >
                  🎓 {mentorData.degree} • {mentorData.major}
                </p>
              </div>
            </div>

            {/* Mobile Booking Card */}
            {/* {isMobile && <div style={{ marginBottom: "2rem" }}>{bookingCard}</div>} */}

            {/* Booking for mobile */}
            {isMobile && <div style={{ marginTop: "1.5rem" }}>{bookingCard}</div>}

            {/* {isMobile && <div style={{ marginTop: "1.5rem" }}>{bookingCardMobile}</div>} */}

            {/* Tabs Navigation */}
            <div
              style={{
                display: "flex",
                background: "white",
                // backgroundColor: "#bdceffff",
                backgroundColor: "white",
                borderBottom: "1px solid #dee2e6",
                border: "1px solid #dee2e6",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                overflow: "hidden",
                position: "sticky",
                top: "70px",
                marginBottom: "1rem",
              }}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: isMobile ? "12px 16px" : "16px 24px",
                    border: "none",
                    backgroundColor: activeTab === tab.id ? "#fff" : "transparent",
                    color: activeTab === tab.id ? "#2c3e50" : "#6c757d",
                    fontWeight: activeTab === tab.id ? "600" : "500",
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    borderBottom: activeTab === tab.id ? "3px solid #198754" : "3px solid transparent",
                    transition: "all 0.3s ease",
                    whiteSpace: "nowrap",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px"
                  }}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                  {tab.count !== undefined && tab.count > 0 && (
                    <span
                      style={{
                        backgroundColor: activeTab === tab.id ? "#198754" : "#6c757d",
                        color: "white",
                        borderRadius: "10px",
                        padding: "2px 6px",
                        fontSize: "0.75rem",
                        fontWeight: "600",
                        minWidth: "18px",
                        textAlign: "center",
                      }}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}

            </div>

            {/* Tabs Content  */}
            <div
              style={{
                background: "white",
                border: "1px solid #dee2e6",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                overflow: "hidden",
              }}
            >

              {/* Tab Content */}
              <div style={{ minHeight: "300px" }}>
                {/* <div > */}
                {renderTabContent()}
              </div>

            </div>

            {/* Tab Content */}
            {/* <div style={{ minHeight: "400px" }}>
              {renderTabContent()}
            </div> */}

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












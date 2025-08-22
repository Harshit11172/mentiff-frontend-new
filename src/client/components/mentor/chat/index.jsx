



import React, { useEffect, useState, useRef } from "react";

import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import HomeFiveHeader from "../../home/home-five/header";
import HomeFiveFooter from "../../home/home-five/footer";


// const getRandomColor = (seed) => {
//   // Generate pseudo-random consistent color for each seed (shortName)
//   let hash = 0;
//   for (let i = 0; i < seed.length; i++) {
//     hash = seed.charCodeAt(i) + ((hash << 5) - hash);
//   }
//   const c = (hash & 0x00ffffff).toString(16).toUpperCase();
//   return "#" + "00000".substring(0, 6 - c.length) + c;
// };

// const DummyLogo = ({ shortName, size = 50 }) => {
//   const bgColor = getRandomColor(shortName || "X");

//   return (
//     <div
//       style={{
//         width: size,
//         height: size,
//         borderRadius: "50%",
//         backgroundColor: bgColor,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         color: "white",
//         fontWeight: "bold",
//         fontSize: size / 2.5,
//         textTransform: "uppercase",
//       }}  
//     >
//       {groupData.group_name?.slice(0, 3) || "?"}
//     </div>
//   );
// };


const UniversityChatGroup = () => {
  const [groupData, setGroupData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showChatWindow, setShowChatWindow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [typingUsers, setTypingUsers] = useState([]);
  const typingTimeoutRef = useRef({});


  const [usernameToRole, setUsernameToRole] = useState({});

  const history = useHistory();
  const groupId = localStorage.getItem("groupId");
  const wsUrl = `${process.env.REACT_APP_API_BASE_URL_BACKEND_CHAT}/ws/chat/group/${groupId}/`;

  const userData = useRef(null);
  const chatSocket = useRef(null);
  const chatScrollRef = useRef(null);


  const [darkMode, setDarkMode] = useState(false); // NEW

  const lightTheme = {
    pageBg: "#f9fafb",
    chatBg: "#f5f6fa",
    bubbleSelf: "#d1f5d3",
    bubbleOther: "#ffffff",
    textColor: "#000",
    dateColor: "#888",
    typingColor: "#555",
  };

  const darkTheme = {
    pageBg: "#18191a",
    chatBg: "#242526",
    bubbleSelf: "#3a3b3c",
    bubbleOther: "#4a4b4d",
    textColor: "#e4e6eb",
    dateColor: "#b0b3b8",
    typingColor: "#b0b3b8",
  };

  const theme = darkMode ? darkTheme : lightTheme;

  const getUserData = () => {
    const userDataString = localStorage.getItem("userData");
    try {
      return userDataString ? JSON.parse(userDataString) : null;
    } catch (error) {
      console.error("Error parsing user data:", error);
      return null;
    }
  };

  const parseTimestamp = (ts) => {
    if (!ts) return null;

    try {
      // Normalize Z -> +00:00 for Safari/iOS support
      const iso = ts.endsWith('Z') ? ts.replace('Z', '+00:00') : ts;

      const parsed = new Date(iso);
      return isNaN(parsed.getTime()) ? null : parsed;
    } catch (e) {
      return null;
    }
  };

  const getDateLabel = (date) => {
    const today = new Date();
    const messageDate = new Date(date);
    const diffInDays = Math.floor(
      (today.setHours(0, 0, 0, 0) - messageDate.setHours(0, 0, 0, 0)) / (1000 * 60 * 60 * 24)
    );

    if (diffInDays === 0) return "Today";
    if (diffInDays === 1) return "Yesterday";
    return messageDate.toLocaleDateString(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };


  useEffect(() => {
    userData.current = getUserData();

    fetch(`${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/group/messages/${groupId}/`)
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error(err));

    const fetchData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/universities/groups/${groupId}`,
          { headers: { Authorization: `Token ${token}` } }
        );
        setGroupData(response.data);
      } catch (err) {
        setError("Failed to load group data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();




    chatSocket.current = new WebSocket(wsUrl);
    document.body.classList.add("chat-page");


    chatSocket.current.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === "typing") {
        if (data.sender !== userData.current?.username) {
          setTypingUsers((prev) => {
            if (!prev.includes(data.sender)) return [...prev, data.sender];
            return prev;
          });

          // Remove the user after timeout
          clearTimeout(typingTimeoutRef.current[data.sender]);
          typingTimeoutRef.current[data.sender] = setTimeout(() => {
            setTypingUsers((prev) => prev.filter((u) => u !== data.sender));
          }, 2000);
        }
        return;
      }

      // Handle normal messages
      if (data.sender !== userData.current?.username) {
        setMessages((prev) => [...prev, data]);
      }
    };


    return () => {
      chatSocket.current.close();
      document.body.classList.remove("chat-page");
    };
  }, [groupId, wsUrl]);


  useEffect(() => {
    if (groupData?.members) {
      const map = {};
      groupData.members.forEach((member) => {
        map[member.user.username] = member.user_type;
      });
      setUsernameToRole(map);
    }
  }, [groupData]);





  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages]);


  useEffect(() => {
    if (isMobile && showChatWindow) {
      setTimeout(() => {
        if (chatScrollRef.current) {
          chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
        }
      }, 100);
    }
  }, [showChatWindow]);

  useEffect(() => {
    const scrollToBottom = () => {
      if (chatScrollRef.current) {
        chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
      }
    };

    // Slight delay ensures DOM and height updates are completed
    const timeout = setTimeout(scrollToBottom, 100);

    return () => clearTimeout(timeout);
  }, [messages, showChatWindow, isMobile]);


  const sendTypingEvent = () => {
    if (!chatSocket.current || chatSocket.current.readyState !== WebSocket.OPEN) return;

    chatSocket.current.send(JSON.stringify({
      type: "typing",
      sender: userData.current?.username,
    }));
  };


  // Corrected helper function - shows full group_name if it exists
  // const generateLogoText = (groupData) => {
  //   if (groupData?.group_name) {
  //     // If group_name exists, show the full name (like "NITB")
  //     return groupData.group_name.toUpperCase();
  //   } else if (groupData?.college) {
  //     // Fallback to college name - take first letter of each word, max 4 letters
  //     return groupData.college
  //       .split(' ')
  //       .map(word => word[0])
  //       .join('')
  //       .slice(0, 4)
  //       .toUpperCase();
  //   }
  //   return "NA";
  // };


  const generateLogoText = (groupData) => {
  if (groupData?.group_name) {
    const name = groupData.group_name.trim();

    if (name.length <= 10) {
      // Short group name, show full
      return name.toUpperCase();
    }

    // Long group name, take initials (first letter of each word, max 4 chars)
    return name
      .split(" ")
      .map(word => word[0])
      .join("")
      .slice(0, 4)
      .toUpperCase();
  } else if (groupData?.college) {
    // Fallback to college initials
    return groupData.college
      .split(" ")
      .map(word => word[0])
      .join("")
      .slice(0, 4)
      .toUpperCase();
  }

  return "NA";
};




  // Generate a consistent color from a string
  // const stringToColor = (str) => {
  //   let hash = 0;
  //   for (let i = 0; i < str.length; i++) {
  //     hash = str.charCodeAt(i) + ((hash << 5) - hash);
  //   }
  //   const c = (hash & 0x00ffffff).toString(16).toUpperCase();
  //   return "#" + "000000".substring(0, 6 - c.length) + c;
  // };



  const stringToColor = (str = "") => {
    // let hash = 0;
    // for (let i = 0; i < str.length; i++) {
    //   hash = str.charCodeAt(i) + ((hash << 5) - hash);
    // }
    // const color = (hash & 0xffffff).toString(16).padStart(6, "0");
    // return `#${color}`;
    return "#f6fafeff";
  };






  const sendMessage = () => {
    if (inputValue.trim() === "") return;

    const newMessage = {
      message: inputValue,
      sender: userData.current.username,
      timestamp: new Date().toISOString(),
      profile_picture: userData.current.profile_picture,
    };
    console.log(" DPPPPPPPPPP ISSSSSS")
    console.log(userData.current.profile_picture)

    setMessages((prev) => [...prev, newMessage]);
    chatSocket.current.send(JSON.stringify(newMessage));
    setInputValue("");
  };

  const groupedMessages = messages.reduce((acc, msg) => {
    const parsedDate = parseTimestamp(msg.timestamp);
    const dateLabel = parsedDate ? getDateLabel(parsedDate) : "Unknown";
    if (!acc[dateLabel]) acc[dateLabel] = [];
    acc[dateLabel].push(msg);
    return acc;
  }, {});

  const shortName =
    groupData?.group_name ||
    groupData?.college
      ?.split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 4);

  return (

    <div style={{ height: "100vh", overflow: "hidden" }}>
      {/* <div> */}

      <HomeFiveHeader />


      <div
        className="content mentor-chat"
        style={{ background: "#f9fafb", minHeight: "100vh", padding: 10 }}
      >



        <div className="container-fluid px-2">
          {/* <div className="settings-back mb-3">
            <button onClick={() => history.goBack()} className="btn">
              <i className="fas fa-long-arrow-alt-left" /> <span>Back</span>
            </button>
          </div> */}

          <div className="row" style={{ margin: 0 }}>
            {/* Left Panel */}
            {/* LEFT PANEL */}
            {(!showChatWindow || !isMobile) && (


              <div
                className="col-md-4"
                style={{
                  padding: 0,
                  borderRight: "1px solid #e5e7eb",
                  background: theme.pageBg,
                  display: "flex",
                  flexDirection: "column",
                  // height: isMobile ? "100vh" : "100%", // full height on mobile
                  height: "100vh", // ✅ always full viewport height
                  maxHeight: "85vh", // ✅ prevent overflow
                }}
              >
                {/* Search Bar */}
                <div
                  style={{
                    padding: "0.75rem",
                    background: theme.chatBg,
                    position: "sticky",
                    top: 0,
                    zIndex: 5,
                    borderBottom: `1px solid ${theme.dateColor}30`,
                  }}
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search mentors..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                    style={{
                      padding: "0.6rem 1rem",
                      borderRadius: "999px",
                      border: "1px solid #d1d5db",
                      fontSize: "0.9rem",
                    }}
                  />
                </div>

                {/* Title */}
                <div style={{ padding: "0.75rem 1rem", fontWeight: 600, fontSize: "0.95rem", color: theme.textColor }}>
                  Mentors Available
                </div>

                {/* Mentor List (scrollable area) */}
                <div
                  style={{
                    flex: 1,
                    overflowY: "auto",
                    padding: "0.5rem 0.75rem",
                  }}
                >
                  {loading ? (
                    <div style={{ padding: "1rem", color: theme.dateColor }}>Loading...</div>
                  ) : error ? (
                    <div style={{ padding: "1rem", color: "red" }}>{error}</div>
                  ) : (
                    groupData?.members
                      ?.filter(
                        (m) =>
                          m.user_type === "mentor" &&
                          `${m.first_name} ${m.last_name}`.toLowerCase().includes(searchTerm)
                      )
                      .map((member) => (
                        <Link
                          to={`/mentee/mentor-profile/${member.mentor_id}`}
                          key={member.mentor_id}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "0.6rem 0.8rem",
                            marginBottom: "0.5rem",
                            borderRadius: "12px",
                            background: theme.chatBg,
                            color: theme.textColor,
                            textDecoration: "none",
                            transition: "background 0.2s ease",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = darkMode ? "#3a3b3c" : "#f3f4f6")}
                          onMouseLeave={(e) => (e.currentTarget.style.background = theme.chatBg)}
                        >
                          {/* Avatar */}
                          <div style={{ position: "relative", marginRight: "0.75rem" }}>
                            <img
                              src={member.profile_picture}
                              alt=""
                              style={{
                                width: 44,
                                height: 44,
                                borderRadius: "50%",
                                objectFit: "cover",
                                border: `2px solid ${theme.pageBg}`,
                              }}
                            />
                            <span
                              style={{
                                position: "absolute",
                                bottom: -2,
                                right: -2,
                                backgroundColor: "#198754",
                                color: "#fff",
                                fontSize: "10px",
                                padding: "2px 6px",
                                borderRadius: "10px",
                                whiteSpace: "nowrap",
                                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
                              }}
                            >
                              M
                            </span>
                          </div>

                          {/* Name & Degree */}
                          <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 500 }}>{member.first_name} {member.last_name}</div>
                            <div style={{ fontSize: "0.8rem", color: theme.dateColor }}>
                              {member.degree} {member.major}
                            </div>
                          </div>

                          {/* Book Button */}
                          <div
                            style={{
                              padding: "0.25rem 0.6rem",
                              background: "#4a81f8ff",
                              color: "#fff",
                              fontSize: "0.75rem",
                              borderRadius: "8px",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Call
                          </div>
                        </Link>
                      ))
                  )}
                </div>

                {/* Mobile Button (fixed at bottom) */}
                {isMobile && (
                  <div
                    style={{
                      position: "sticky",
                      bottom: 0,
                      background: theme.pageBg,
                      padding: "0.75rem",
                      borderTop: `1px solid ${theme.dateColor}30`,
                    }}
                  >
                    <button
                      onClick={() => setShowChatWindow(true)}
                      className="btn btn-primary w-100"
                      style={{ borderRadius: "8px" }}
                    >
                      Open Chat
                    </button>
                  </div>
                )}
              </div>



            )}


            {/* Right Panel */}
            {(showChatWindow || !isMobile) && (


              <div className="col-md-8" style={{ padding: 0 }}>


                <div
                  className="chat-header d-flex align-items-center justify-content-start p-2"
                  style={{ background: theme.bubbleOther, borderBottom: "1px solid #ddd" }}
                >
                  {isMobile && (
                    <button className="btn btn-link" onClick={() => setShowChatWindow(false)}>
                      <i className="fas fa-arrow-left" />
                    </button>
                  )}
                  
                  <div className="d-flex align-items-center">
                    <div
                      className="avatar-img rounded-circle me-2 d-flex align-items-center justify-content-center"
                      style={{
                        width: 50,
                        height: 50,
                        backgroundColor: stringToColor(generateLogoText(groupData)),
                        color: "black",
                        // fontWeight: "bold",
                        fontSize: "12px",
                      }}
                    >
                      {generateLogoText(groupData)}
                    </div>

                    <h5 style={{ color: theme.textColor }}>
                      {groupData?.college || "Loading..."}
                    </h5>
                  </div>




                </div>


                <div
                  style={{
                    minHeight: "60vh",
                    maxHeight: "70vh",
                    overflowY: "auto",
                    padding: 10,
                    background: "#f5f6fa",
                  }}
                  ref={chatScrollRef}
                >



                  {Object.entries(groupedMessages).map(([dateLabel, msgs]) => (
                    <div key={dateLabel}>
                      <div style={{ textAlign: "center", margin: "10px 0", fontSize: 12, color: "#888" }}>
                        {dateLabel}
                      </div>
                      {msgs.map((msg, idx) => {
                        const isCurrentUser = msg.sender === userData.current?.username;
                        // const isMentor = usernameToRole[msg.sender] === "mentor";
                        // check if this user is the mentor of THIS group
                        const isMentorOfThisGroup = groupData?.members?.some(
                          (m) => m.user.username === msg.sender && m.user_type === "mentor"
                        );
                        return (
                          <li
                            key={idx}
                            style={{
                              display: "flex",
                              flexDirection: isCurrentUser ? "row-reverse" : "row",
                              alignItems: "flex-start",
                              marginBottom: 16,
                            }}
                          >



                            <div
                              style={{
                                position: "relative",
                                width: 36,
                                height: 36,
                                margin: "0 8px",
                              }}
                            >
                              <img
                                src={msg.profile_picture}
                                alt=""
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: "50%",
                                  display: "block",
                                }}
                              />
                              {isMentorOfThisGroup && (
                                <span
                                  style={{
                                    position: "absolute",
                                    bottom: -4,
                                    right: -4,
                                    backgroundColor: "#198754",
                                    color: "#fff",
                                    fontSize: "10px",
                                    padding: "2px 5px",
                                    borderRadius: "8px",
                                    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.15)",
                                    zIndex: 1,
                                  }}
                                >
                                  M
                                </span>
                              )}
                            </div>



                            <div
                              style={{
                                background: isCurrentUser ? "#d1f5d3" : "#ffffff",
                                borderRadius: "16px",
                                padding: "10px 14px",
                                maxWidth: "75%",
                                boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                              }}
                            >
                              <p style={{ margin: 0, fontSize: 14 }}>
                                {!isCurrentUser && (
                                  <>
                                    <strong>{msg.sender}</strong>:{" "}
                                  </>
                                )}
                                {msg.message}
                              </p>

                              <div
                                style={{
                                  fontSize: 10,
                                  color: "#999",
                                  marginTop: 4,
                                  textAlign: isCurrentUser ? "right" : "left",
                                }}
                              >
                                {parseTimestamp(msg.timestamp)?.toLocaleTimeString([], {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                }) || "Invalid time"}
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </div>
                  ))}



                  {typingUsers.length > 0 && (
                    <div style={{ fontStyle: "italic", fontSize: 13, color: "#555", marginTop: 8 }}>
                      {typingUsers.join(", ")} {typingUsers.length > 1 ? "are" : "is"} typing...
                    </div>
                  )}


                </div>



                <div
                  style={{
                    padding: 10,
                    background: "#fff",
                    borderTop: "1px solid #ddd",
                    position: "sticky",
                    bottom: 0,
                    zIndex: 10,
                  }}
                >
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type something..."
                      value={inputValue}
                      // onChange={(e) => setInputValue(e.target.value)}
                      onChange={(e) => {
                        setInputValue(e.target.value);
                        sendTypingEvent();  // Call this to emit "typing" event
                      }}

                      onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                      style={{ padding: 10, fontSize: 14 }}
                    />
                    <button className="btn btn-primary" onClick={sendMessage}>
                      Send
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <HomeFiveFooter />
    </div>
  );
};

export default UniversityChatGroup;

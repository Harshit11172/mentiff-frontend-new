



import React, { useEffect, useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import HomeFiveHeader from "../../home/home-five/header";
import HomeFiveFooter from "../../home/home-five/footer";

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



  const sendMessage = () => {
    if (inputValue.trim() === "") return;

    const newMessage = {
      message: inputValue,
      sender: userData.current.username,
      timestamp: new Date().toISOString(),
      profile_picture: userData.current.profile_picture,
    };

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
            {!showChatWindow || !isMobile ? (
              <div className="col-md-4" style={{ padding: 10 }}>
                <form
                  className="chat-search d-flex align-items-center mb-2"
                  style={{ padding: 10 }}
                >
                  {/* <div className="avatar avatar-online me-3">
                    <img
                      src={groupData?.logo || "default-avatar.png"}
                      className="avatar-img rounded-circle"
                      alt="Logo"
                      style={{ width: 50, height: 50 }}
                    />
                  </div> */}
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    placeholder="Search mentors..."
                    style={{ padding: 10 }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                  />
                </form>

                <div style={{ padding: "5px" }}>
                  {loading ? "Loading..." : error || <h5>Mentors Available</h5>}
                </div>

                <div
                  style={{
                    maxHeight: "60vh",
                    overflowY: "auto",
                    padding: 10,
                    background: "#fff",
                    borderRadius: 8,
                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  }}
                >
                  {groupData?.members
                    ?.filter(
                      (m) =>
                        m.user_type === "mentor" &&
                        `${m.first_name} ${m.last_name}`.toLowerCase().includes(searchTerm)
                    )
                    .map((member) => (
                      <Link
                        to={`/mentee/mentor-profile/${member.mentor_id}`}
                        key={member.mentor_id}
                        className="d-flex align-items-center mb-3"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {/* <img
                          src={member.profile_picture}
                          alt=""
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            marginRight: 10,
                          }}
                        /> */}


                        <div
                          style={{
                            position: "relative",
                            width: 40,
                            height: 40,
                            marginRight: 10,
                          }}
                        >
                          <img
                            src={member.profile_picture}
                            alt=""
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "50%",
                              display: "block",
                            }}
                          />
                          <span
                            style={{
                              position: "absolute",
                              bottom: -3,
                              right: -3,
                              backgroundColor: "#198754",
                              color: "#fff",
                              fontSize: "10px",
                              padding: "2px 6px",
                              borderRadius: "12px",
                              whiteSpace: "nowrap",
                              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            M
                          </span>
                        </div>



                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                          <div>
                            <div style={{ fontWeight: "500" }}>{member.first_name} {member.last_name}</div>
                            <div style={{ fontSize: 12, color: "#555" }}>{member.degree} {member.major}</div>
                          </div>
                          <div>
                            <div className="badge badge-success" style={{ whiteSpace: "nowrap" }}>Book a Call</div>
                          </div>
                        </div>

                      </Link>
                    ))}
                </div>

                {isMobile && (
                  <button
                    onClick={() => setShowChatWindow(true)}
                    className="btn btn-primary mt-3 w-100"
                  >
                    Open Chat
                  </button>
                )}
              </div>
            ) : null}

            {/* Right Panel */}
            {(showChatWindow || !isMobile) && (
              <div className="col-md-8" style={{ padding: 0 }}>
                <div
                  className="chat-header d-flex align-items-center justify-content-between p-2"
                  style={{ background: "#fff", borderBottom: "1px solid #ddd" }}
                >
                  {isMobile && (
                    <button className="btn btn-link" onClick={() => setShowChatWindow(false)}>
                      <i className="fas fa-arrow-left" />
                    </button>
                  )}
                  <div className="d-flex align-items-center">
                    <img
                      src={groupData?.logo || "default-avatar.png"}
                      className="avatar-img rounded-circle me-2"
                      alt=""
                      style={{ width: 50, height: 50 }}
                    />
                    <h5><div>{groupData?.college || "Loading..."}</div></h5>
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
                  {/* <ul className="list-unstyled">
                    {messages.map((msg, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: "flex",
                          flexDirection:
                            msg.sender === userData.current?.username ? "row-reverse" : "row",
                          alignItems: "flex-start",
                          marginBottom: 12,
                        }}
                      >
                        <img
                          src={msg.profile_picture}
                          alt=""
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: "50%",
                            margin: "0 8px",
                          }}
                        />
                        <div
                          style={{
                            background:
                              msg.sender === userData.current?.username
                                ? "#d1f5d3"
                                : "#ffffff",
                            borderRadius: "16px",
                            padding: "10px 14px",
                            maxWidth: "75%",
                            boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                          }}
                        >
                          <p style={{ margin: 0, fontSize: 14 }}>
                            {msg.sender !== userData.current?.username && (
                              <strong>{msg.sender}: </strong>
                            )}
                            {msg.message}
                          </p>
                          <div
                            style={{
                              fontSize: 10,
                              color: "#999",
                              marginTop: 4,
                              textAlign:
                                msg.sender === userData.current?.username ? "right" : "left",
                            }}
                          >
                            {parseTimestamp(msg.timestamp)?.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            }) || "Invalid time"}

                          </div>
                        </div>
                      </li>
                    ))}
                  </ul> */}

                  {Object.entries(groupedMessages).map(([dateLabel, msgs]) => (
                    <div key={dateLabel}>
                      <div style={{ textAlign: "center", margin: "10px 0", fontSize: 12, color: "#888" }}>
                        {dateLabel}
                      </div>
                      {msgs.map((msg, idx) => {
                        const isCurrentUser = msg.sender === userData.current?.username;
                        const isMentor = usernameToRole[msg.sender] === "mentor";

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


                            {/* Avatar + Overlapping Mentor badge */}
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
                              {isMentor && (
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


                            {/* Message bubble */}
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

// import React, { useEffect, useState, useRef } from "react";
// import { Link, useHistory } from "react-router-dom";
// import Header from "../../header";
// import { user, user_1, user_2, user_3, user_4, user_5, user_6, user_7, user_8, user_9, img01, img02, img03, img04 } from "../../../../admin/components/imagepath";
// import axios from 'axios';
// import { Phone, PhoneOff } from "feather-icons-react/build/IconComponents";
// import HomeFiveFooter from "../../home/home-five/footer";
// import HomeFiveHeader from "../../home/home-five/header";

// const UniversityChatGroup = (props) => {
//   const [groupData, setGroupData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const history = useHistory();
//   const groupId = localStorage.getItem("groupId");
//   const [messages, setMessages] = useState([]); // State for chat messages
//   const wsUrl = `${process.env.REACT_APP_API_BASE_URL_BACKEND_CHAT}/ws/chat/group/${groupId}/`;

//   const [inputValue, setInputValue] = useState(""); // Make sure this is defined
//   const userData = useRef(null); // Store user data in ref
//   const chatSocket = useRef(null); // Create a ref for WebSocket

//   const chatScrollRef = useRef(null); // <-- Scroll container ref



//   // Helper function to get user data
//   const getUserData = () => {
//     const userDataString = localStorage.getItem("userData");
//     console.log("User data who is logged in: ")
//     console.log(userDataString)
//     if (userDataString) {
//       try {
//         return JSON.parse(userDataString);
//       } catch (error) {
//         console.error("Error parsing user data:", error);
//       }
//     }
//     return null;
//   };

//   // Auto-scroll to bottom function
//   const scrollToBottom = () => {
//     if (chatScrollRef.current) {
//       chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
//     }
//   };





//   useEffect(() => {
//     userData.current = getUserData();
//     console.log(userData.current)

//     const groupId = localStorage.getItem("groupId"); // Retrieve groupId from localStorage
//     console.log("Fetching group chats");


//     fetch(`${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/group/messages/${groupId}/`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log("Retrieved group messages:", data); // Log the retrieved data
//         setMessages(data);
//       })
//       .catch(error => {
//         console.error('Error fetching messages:', error); // Log any errors
//       });



//     const fetchData = async () => {
//       const groupId = props.groupId; // Ensure you have groupId passed in props
//       try {
//         const groupId = localStorage.getItem("groupId"); // Retrieve groupId from localStorage
//         console.log("group id in local before removing?")
//         console.log(groupId)
//         const token = localStorage.getItem("authToken"); // Retrieve the token
//         console.log("In group chat page, Token found in chat=")
//         console.log(token)
//         console.log("group id found in chat=")
//         console.log(groupId)

//         const response = await axios.get(
//           `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/universities/groups/${groupId}`,
//           {
//             headers: {
//               Authorization: `Token ${token}`, // Include the token in the headers
//             },
//           }
//         );

//         console.log(`${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/universities/groups/${groupId}`);

//         setGroupData(response.data);

//         console.log('API Response Groups:', response.data);

//       } catch (err) {
//         console.error("Error fetching group data:", err);
//         setError("Failed to load group data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();

//     chatSocket.current = new WebSocket(wsUrl); // Assign WebSocket to ref

//     document.body.classList.add("chat-page");

//     chatSocket.current.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       const currentusername = userData.current.username

//       console.log(data, currentusername)

//       // Only add messages from others
//       if (data.sender !== currentusername) {
//         setMessages((prevMessages) => [...prevMessages, data]);
//       }
//     };


//     return () => {
//       chatSocket.current.close();
//       document.body.classList.remove("chat-page");
//     };
//   }, [groupId, wsUrl]);



//   // Scroll to bottom when messages update
//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);





//   const sendMessage = () => {

//     if (inputValue.trim() === "") return;

//     console.log("Im in sendMessage")
//     console.log(userData.current)

//     const newMessage = {
//       message: inputValue,
//       sender: userData.current.username, // Use an appropriate identifier for the current user
//       timestamp: new Date().toLocaleTimeString(),
//       profile_picture: userData.current.profile_picture
//     };

//     console.log(newMessage)
//     setMessages((prevMessages) => [...prevMessages, newMessage]);

//     // Send the message through WebSocket
//     chatSocket.current.send(JSON.stringify(newMessage));

//     setInputValue("");
//   };


//   return (
//     <div style={{ width: '100%', height: '100%', padding: 0, margin: 0 }}>
//       {/* <Header {...props} /> */}

//       <HomeFiveHeader />

//       <div className="content mentor-chat" style={{ width: '100%', height: '100%', padding: 0, margin: 0 }}>
//         <div className="container-fluid" style={{ width: '100%', height: '100%', padding: '10px, 10px, 10px, 10px', margin: '5px' }}>

//           <div className="settings-back mb-3">
//             {/* <Link to="/index-5">
//               <i className="fas fa-long-arrow-alt-left" /> <span>Back</span>
//             </Link> */}
//             <button onClick={() => history.goBack()} className="btn">
//               <i className="fas fa-long-arrow-alt-left" /> <span>Back</span>
//             </button>
//           </div>

//           <div className="row" style={{ width: '100%', height: '100%', padding: 0, margin: 0 }}>
//             <div className="col-sm-12 mb-4">


//               <div className="chat-window">

//                 {/* /Chat Left */}

//                 <div className="chat-cont-left">
//                   <form className="chat-search d-flex align-items-center">
//                     <div className="avatar avatar-online me-3">
//                       {groupData ? (
//                         <img src={groupData.logo} alt="User Image" className="avatar-img rounded-circle" />
//                       ) : (
//                         <img src="default-avatar.png" alt="Default Avatar" className="avatar-img rounded-circle" />
//                       )}
//                     </div>
//                     <div className="input-group">
//                       <div className="input-group-prepend">
//                         <i className="fas fa-search" />
//                       </div>
//                       <input type="text" className="form-control rounded-pill" placeholder="Search" />
//                     </div>
//                   </form>
//                   <div className="chat-header">
//                     {loading ? (
//                       <span>Loading...</span>
//                     ) : error ? (
//                       <span>{error}</span>
//                     ) : (
//                       // groupData && <span><h5>Mentors from {groupData.group_name}</h5></span>
//                       groupData && <span><h5>Mentors Available</h5></span>
//                     )}
//                   </div>

//                   <div className="chat-users-list">
//                     <div className="chat-scroll">
//                       {groupData && groupData.members
//                         .filter(member => member.user_type === "mentor")
//                         .map((member) => (
//                           <Link to="#" className="media d-flex" key={member.user.id}>
//                             <div className="media-img-wrap flex-shrink-0">
//                               <div className="avatar avatar-away">
//                                 <img src={member.profile_picture} alt="User Image" className="avatar-img rounded-circle" />
//                               </div>
//                             </div>
//                             <div className="media-body flex-grow-1">
//                               <div>
//                                 <div className="user-name">{member.first_name} {member.last_name}</div>
//                                 {/* <div className="user-last-chat">Book 1:1 Session</div> */}
//                                 <div className="user-last-chat">{member.degree} {member.major}</div>
//                               </div>
//                               <div>
//                                 {/* <div className="last-chat-time block">2 min</div> */}
//                                 <div className="last-chat-time block"></div>
//                                 {/* <div className="badge badge-success badge-pill fill-blue rounded-pill">15</div> */}
//                                 {/* <div className="badge badge-success">BOOK SESSION</div> */}

//                                 <div className="badge badge-success">
//                                   {/* <Link
//                                     to={{
//                                       pathname: "/mentee/mentor-profile",
//                                       state: { mentorData: member } // Pass the mentor data here
//                                     }}
//                                     className="badge badge-success"
//                                   >
//                                     BOOK SESSION
//                                   </Link> */}
//                                   <Link
//                                     to={`/mentee/mentor-profile/${member.user.id}`}
//                                     className="badge badge-success"
//                                   >
//                                     BOOK SESSION
//                                   </Link>
//                                 </div>



//                               </div>

//                             </div>
//                           </Link>
//                         ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* /Chat Left */}


//                 {/* Chat Right */}

//                 <div className="chat-cont-right">
//                   <div className="chat-header">
//                     <Link id="back_user_list" to="#" className="back-user-list">
//                       <i className="material-icons">chevron_left</i>
//                     </Link>
//                     <div className="media d-flex">
//                       <div className="media-img-wrap flex-shrink-0">
//                         <div className="avatar avatar-online me-3">
//                           {groupData ? (
//                             <img src={groupData.logo} alt="User Image" className="avatar-img rounded-circle" />
//                           ) : (
//                             <img src="default-avatar.png" alt="Default Avatar" className="avatar-img rounded-circle" />
//                           )}
//                         </div>
//                       </div>
//                       <div className="media-body flex-grow-1">
//                         <div className="user-name">{groupData ? groupData.college : "Loading..."}</div>
//                       </div>
//                     </div>

//                     {/* <div className="chat-options">
//                       <Link to="#" data-bs-toggle="modal" data-bs-target="#voice_call">
//                         <i className="material-icons">local_phone</i>
//                       </Link>
//                       <Link to="#" data-bs-toggle="modal" data-bs-target="#video_call">
//                         <i className="material-icons">videocam</i>
//                       </Link>
//                       <Link to="#">
//                         <i className="material-icons">more_vert</i>
//                       </Link>
//                     </div> */}

//                   </div>

//                   <div className="chat-body">


//                     {/* <div className="chat-scroll"> */}
//                     <div className="chat-scroll" ref={chatScrollRef}>

//                       <ul className="list-unstyled">

//                         {messages.map((msg, index) => (
//                           <li key={index} className={`media ${msg.sender == userData.current.username ? 'sent' : 'received'}`}>

//                             <div className="media-body">
//                               <div className="avatar flex-shrink-0">
//                                 <img src={msg.profile_picture} alt="User Image" className="avatar-img rounded-circle" />
//                               </div>
//                               <div className="msg-box">
//                                 <div>
//                                   <p><strong> {msg.sender == userData.current.username ? '' : msg.sender} </strong>{msg.message}</p>
//                                   <ul className="chat-msg-info">
//                                     <li>
//                                       <div className="chat-time">
//                                         <span>{msg.timestamp}</span>
//                                       </div>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                             </div>
//                           </li>
//                         ))}

//                       </ul>
//                     </div>



//                   </div>

//                   <div className="chat-footer">
//                     <div className="input-group">
//                       <div className="btn-file btn">
//                         <i className="fa fa-paperclip" />
//                         <input type="file" />
//                       </div>
//                       <input
//                         type="text"
//                         className="input-msg-send form-control"
//                         placeholder="Type something"
//                         value={inputValue}
//                         onChange={(e) => setInputValue(e.target.value)}
//                         onKeyPress={(e) => {
//                           if (e.key === 'Enter') {
//                             sendMessage();
//                           }
//                         }}
//                       />
//                       <button type="button" className="btn msg-send-btn" onClick={sendMessage}>
//                         Send
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* /Chat Right */}

//               </div>


//             </div>
//           </div>
//           {/* /Row */}
//         </div>
//       </div>


//       {/* modal for video*/}

//       {/* <div className="modal fade call-modal" id="video_call">
//         <div className="modal-dialog modal-dialog-centered" role="document">
//           <div className="modal-content">
//             <div className="modal-body">
//               <div className="call-box incoming-box">
//                 <div className="call-wrapper">
//                   <div className="call-inner">
//                     <div className="call-user">
//                       <img alt="User" src={img01} className="call-avatar" />
//                       <h4>Darren Elder</h4>
//                       <span>Connecting...</span>
//                     </div>
//                     <div className="call-items">
//                       <Link
//                         to="/pages/video-call"
//                         className="btn call-item call-end"
//                         data-bs-dismiss="modal"
//                         aria-label="Close"
//                       >
//                         <PhoneOff />
//                       </Link>
//                       <Link
//                         to="/pages/video-call"
//                         className="btn call-item call-start"
//                         data-bs-dismiss="modal"
//                       >
//                         <Phone />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> */}


//       {/* modal for call*/}

//       {/* <div className="modal fade call-modal" id="voice_call">
//         <div className="modal-dialog modal-dialog-centered" role="document">
//           <div className="modal-content">
//             <div className="modal-body">
//               <div className="call-box incoming-box">
//                 <div className="call-wrapper">
//                   <div className="call-inner">
//                     <div className="call-user">
//                       <img alt="User" src={img01} className="call-avatar" />
//                       <h4>Darren Elder</h4>
//                       <span>Connecting...</span>
//                     </div>
//                     <div className="call-items">
//                       <Link
//                         to="/pages/voice-call"
//                         className="btn call-item call-end"
//                         data-bs-dismiss="modal"
//                         aria-label="Close"
//                       >
//                         <PhoneOff />
//                       </Link>
//                       <Link
//                         to="/pages/voice-call"
//                         className="btn call-item call-start"
//                         data-bs-dismiss="modal"
//                       >
//                         <Phone />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> */}


//     </div>
//   );
// };

// export default UniversityChatGroup;








// import React, { useEffect, useState, useRef } from "react";
// import { Link, useHistory } from "react-router-dom";
// import axios from "axios";
// import HomeFiveHeader from "../../home/home-five/header";
// import HomeFiveFooter from "../../home/home-five/footer";

// const UniversityChatGroup = (props) => {
//   const [groupData, setGroupData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const [showChatWindow, setShowChatWindow] = useState(false);

//   const history = useHistory();
//   const groupId = localStorage.getItem("groupId");
//   const wsUrl = `${process.env.REACT_APP_API_BASE_URL_BACKEND_CHAT}/ws/chat/group/${groupId}/`;

//   const userData = useRef(null);
//   const chatSocket = useRef(null);
//   const chatScrollRef = useRef(null);

//   const getUserData = () => {
//     const userDataString = localStorage.getItem("userData");
//     if (userDataString) {
//       try {
//         return JSON.parse(userDataString);
//       } catch (error) {
//         console.error("Error parsing user data:", error);
//       }
//     }
//     return null;
//   };

//   const scrollToBottom = () => {
//     if (chatScrollRef.current) {
//       chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
//     }
//   };

//   useEffect(() => {
//     userData.current = getUserData();

//     fetch(`${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/group/messages/${groupId}/`)
//       .then((res) => res.json())
//       .then((data) => setMessages(data))
//       .catch((err) => console.error(err));

//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("authToken");
//         const response = await axios.get(
//           `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/universities/groups/${groupId}`,
//           { headers: { Authorization: `Token ${token}` } }
//         );
//         setGroupData(response.data);
//       } catch (err) {
//         setError("Failed to load group data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();

//     chatSocket.current = new WebSocket(wsUrl);
//     document.body.classList.add("chat-page");

//     chatSocket.current.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       if (data.sender !== userData.current?.username) {
//         setMessages((prev) => [...prev, data]);
//       }
//     };

//     return () => {
//       chatSocket.current.close();
//       document.body.classList.remove("chat-page");
//     };
//   }, [groupId, wsUrl]);

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const sendMessage = () => {
//     if (inputValue.trim() === "") return;

//     const newMessage = {
//       message: inputValue,
//       sender: userData.current.username,
//       timestamp: new Date().toLocaleTimeString(),
//       profile_picture: userData.current.profile_picture,
//     };

//     setMessages((prev) => [...prev, newMessage]);
//     chatSocket.current.send(JSON.stringify(newMessage));
//     setInputValue("");
//   };

//   const isMobile = window.innerWidth < 768;

//   return (
//     <div>
//       <HomeFiveHeader />

//       <div className="content mentor-chat" style={{ padding: 10 }}>
//         <div className="container-fluid px-2">
//           <div className="settings-back mb-3">
//             <button onClick={() => history.goBack()} className="btn">
//               <i className="fas fa-long-arrow-alt-left" /> <span>Back</span>
//             </button>
//           </div>

//           <div className="row" style={{ margin: 0 }}>
//             {/* Left Panel */}
//             {!showChatWindow || !isMobile ? (
//               <div className="col-md-4" style={{ padding: 0, display: isMobile ? "block" : "block" }}>
//                 <form className="chat-search d-flex align-items-center mb-2" style={{ padding: 10 }}>
//                   <div className="avatar avatar-online me-3">
//                     <img
//                       src={groupData?.logo || "default-avatar.png"}
//                       className="avatar-img rounded-circle"
//                       alt="Logo"
//                       style={{ width: 50, height: 50 }}
//                     />
//                   </div>
//                   <div className="input-group">
//                     <div className="input-group-prepend">
//                       <i className="fas fa-search" />
//                     </div>
//                     <input
//                       type="text"
//                       className="form-control rounded-pill"
//                       placeholder="Search"
//                       style={{ padding: 8, marginLeft: 5 }}
//                     />
//                   </div>
//                 </form>

//                 <div style={{ padding: "0 10px" }}>
//                   {loading ? "Loading..." : error || <h5>Mentors Available</h5>}
//                 </div>

//                 <div style={{ height: "70vh", overflowY: "auto", padding: 10 }}>
//                   {groupData?.members
//                     ?.filter((m) => m.user_type === "mentor")
//                     .map((member) => (
//                       <Link
//                         to={`/mentee/mentor-profile/${member.user.id}`}
//                         key={member.user.id}
//                         className="d-flex align-items-center mb-3"
//                         style={{ textDecoration: "none", color: "inherit" }}
//                       >
//                         <img
//                           src={member.profile_picture}
//                           alt=""
//                           style={{ width: 40, height: 40, borderRadius: "50%", marginRight: 10 }}
//                         />
//                         <div style={{ flexGrow: 1 }}>
//                           <div>{member.first_name} {member.last_name}</div>
//                           <div style={{ fontSize: 12, color: "#555" }}>{member.degree} {member.major}</div>
//                           <div className="badge badge-success mt-1">BOOK SESSION</div>
//                         </div>
//                       </Link>
//                     ))}
//                 </div>

//                 {isMobile && (
//                   <button onClick={() => setShowChatWindow(true)} className="btn btn-primary mt-3 w-100">
//                     Open Chat
//                   </button>
//                 )}
//               </div>
//             ) : null}

//             {/* Right Panel */}
//             {(showChatWindow || !isMobile) && (
//               <div className="col-md-8" style={{ padding: 0 }}>
//                 <div className="chat-header d-flex align-items-center justify-content-between p-2">
//                   {isMobile && (
//                     <button className="btn btn-link" onClick={() => setShowChatWindow(false)}>
//                       <i className="fas fa-arrow-left" /> Back
//                     </button>
//                   )}
//                   <div className="d-flex align-items-center">
//                     <img
//                       src={groupData?.logo || "default-avatar.png"}
//                       className="avatar-img rounded-circle me-2"
//                       alt=""
//                       style={{ width: 50, height: 50 }}
//                     />
//                     <div>{groupData?.college || "Loading..."}</div>
//                   </div>
//                 </div>

//                 <div style={{ maxHeight: "70vh", overflowY: "auto", padding: 10 }} ref={chatScrollRef}>
//                   <ul className="list-unstyled">
//                     {messages.map((msg, idx) => (
//                       <li
//                         key={idx}
//                         style={{
//                           display: "flex",
//                           flexDirection: msg.sender === userData.current?.username ? "row-reverse" : "row",
//                           alignItems: "flex-start",
//                           marginBottom: 10,
//                         }}
//                       >
//                         <img
//                           src={msg.profile_picture}
//                           alt=""
//                           style={{ width: 40, height: 40, borderRadius: "50%", margin: "0 10px" }}
//                         />
//                         <div style={{ background: "#f1f1f1", borderRadius: 8, padding: 10, maxWidth: "70%" }}>
//                           <p style={{ margin: 0 }}>
//                             {msg.sender !== userData.current?.username && <strong>{msg.sender}: </strong>}
//                             {msg.message}
//                           </p>
//                           <div style={{ fontSize: 10, color: "#888", marginTop: 5 }}>{msg.timestamp}</div>
//                         </div>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div style={{ position: "sticky", bottom: 0, padding: 10, background: "#fff", zIndex: 10 }}>
//                   <div className="input-group">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Type something..."
//                       value={inputValue}
//                       onChange={(e) => setInputValue(e.target.value)}
//                       onKeyPress={(e) => e.key === "Enter" && sendMessage()}
//                       style={{ padding: 10, fontSize: 14 }}
//                     />
//                     <button className="btn btn-primary" onClick={sendMessage}>
//                       Send
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <HomeFiveFooter />
//     </div>
//   );
// };

// export default UniversityChatGroup;






















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

    // chatSocket.current.onmessage = (event) => {
    //   const data = JSON.parse(event.data);
    //   if (data.sender !== userData.current?.username) {
    //     setMessages((prev) => [...prev, data]);
    //   }
    // };

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

  return (
    // <div style={{ height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
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
              <div className="col-md-4" style={{ padding: 0 }}>
                <form
                  className="chat-search d-flex align-items-center mb-2"
                  style={{ padding: 10 }}
                >
                  <div className="avatar avatar-online me-3">
                    <img
                      src={groupData?.logo || "default-avatar.png"}
                      className="avatar-img rounded-circle"
                      alt="Logo"
                      style={{ width: 50, height: 50 }}
                    />
                  </div>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    placeholder="Search mentors"
                    style={{ padding: 8 }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                  />
                </form>

                <div style={{ padding: "0 10px" }}>
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
                        to={`/mentee/mentor-profile/${member.user.id}`}
                        key={member.user.id}
                        className="d-flex align-items-center mb-3"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <img
                          src={member.profile_picture}
                          alt=""
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            marginRight: 10,
                          }}
                        />
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                          <div>
                            <div style={{ fontWeight: "500" }}>{member.first_name} {member.last_name}</div>
                            <div style={{ fontSize: 12, color: "#555" }}>{member.degree} {member.major}</div>
                          </div>
                          <div>
                            <div className="badge badge-success" style={{ whiteSpace: "nowrap" }}>BOOK SESSION</div>
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
                      <i className="fas fa-arrow-left" /> Back
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
                  <ul className="list-unstyled">
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
                            {msg.timestamp && new Date(msg.timestamp).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

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

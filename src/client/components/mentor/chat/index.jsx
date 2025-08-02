import React, { useEffect, useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../../header";
import { user, user_1, user_2, user_3, user_4, user_5, user_6, user_7, user_8, user_9, img01, img02, img03, img04 } from "../../../../admin/components/imagepath";
import axios from 'axios';
import { Phone, PhoneOff } from "feather-icons-react/build/IconComponents";
import HomeFiveFooter from "../../home/home-five/footer";
import HomeFiveHeader from "../../home/home-five/header";

const UniversityChatGroup = (props) => {
  const [groupData, setGroupData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory();
  const groupId = localStorage.getItem("groupId");
  const [messages, setMessages] = useState([]); // State for chat messages
  const wsUrl = `${process.env.REACT_APP_API_BASE_URL_BACKEND_CHAT}/ws/chat/group/${groupId}/`;

  const [inputValue, setInputValue] = useState(""); // Make sure this is defined
  const userData = useRef(null); // Store user data in ref
  const chatSocket = useRef(null); // Create a ref for WebSocket

  const chatScrollRef = useRef(null); // <-- Scroll container ref



  // Helper function to get user data
  const getUserData = () => {
    const userDataString = localStorage.getItem("userData");
    console.log("User data who is logged in: ")
    console.log(userDataString)
    if (userDataString) {
      try {
        return JSON.parse(userDataString);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
    return null;
  };

  // Auto-scroll to bottom function
  const scrollToBottom = () => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  };





  useEffect(() => {
    userData.current = getUserData();
    console.log(userData.current)

    const groupId = localStorage.getItem("groupId"); // Retrieve groupId from localStorage
    console.log("Fetching group chats");


    fetch(`${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/group/messages/${groupId}/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log("Retrieved group messages:", data); // Log the retrieved data
        setMessages(data);
      })
      .catch(error => {
        console.error('Error fetching messages:', error); // Log any errors
      });



    const fetchData = async () => {
      const groupId = props.groupId; // Ensure you have groupId passed in props
      try {
        const groupId = localStorage.getItem("groupId"); // Retrieve groupId from localStorage
        console.log("group id in local before removing?")
        console.log(groupId)
        const token = localStorage.getItem("authToken"); // Retrieve the token
        console.log("In group chat page, Token found in chat=")
        console.log(token)
        console.log("group id found in chat=")
        console.log(groupId)

        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/universities/groups/${groupId}`,
          {
            headers: {
              Authorization: `Token ${token}`, // Include the token in the headers
            },
          }
        );

        console.log(`${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/universities/groups/${groupId}`);

        setGroupData(response.data);

        console.log('API Response Groups:', response.data);

      } catch (err) {
        console.error("Error fetching group data:", err);
        setError("Failed to load group data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    chatSocket.current = new WebSocket(wsUrl); // Assign WebSocket to ref

    document.body.classList.add("chat-page");

    chatSocket.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const currentusername = userData.current.username

      console.log(data, currentusername)

      // Only add messages from others
      if (data.sender !== currentusername) {
        setMessages((prevMessages) => [...prevMessages, data]);
      }
    };


    return () => {
      chatSocket.current.close();
      document.body.classList.remove("chat-page");
    };
  }, [groupId, wsUrl]);



  // Scroll to bottom when messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages]);





  const sendMessage = () => {

    if (inputValue.trim() === "") return;

    console.log("Im in sendMessage")
    console.log(userData.current)

    const newMessage = {
      message: inputValue,
      sender: userData.current.username, // Use an appropriate identifier for the current user
      timestamp: new Date().toLocaleTimeString(),
      profile_picture: userData.current.profile_picture
    };

    console.log(newMessage)
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Send the message through WebSocket
    chatSocket.current.send(JSON.stringify(newMessage));

    setInputValue("");
  };


  return (
    <div style={{ width: '100%', height: '100%', padding: 0, margin: 0 }}>
      {/* <Header {...props} /> */}

      <HomeFiveHeader />

      <div className="content mentor-chat" style={{ width: '100%', height: '100%', padding: 0, margin: 0 }}>
        <div className="container-fluid" style={{ width: '100%', height: '100%', padding: '10px, 10px, 10px, 10px', margin: '5px' }}>

          <div className="settings-back mb-3">
            {/* <Link to="/index-5">
              <i className="fas fa-long-arrow-alt-left" /> <span>Back</span>
            </Link> */}
            <button onClick={() => history.goBack()} className="btn">
              <i className="fas fa-long-arrow-alt-left" /> <span>Back</span>
            </button>
          </div>

          <div className="row" style={{ width: '100%', height: '100%', padding: 0, margin: 0 }}>
            <div className="col-sm-12 mb-4">


              <div className="chat-window">

                {/* /Chat Left */}

                <div className="chat-cont-left">
                  <form className="chat-search d-flex align-items-center">
                    <div className="avatar avatar-online me-3">
                      {groupData ? (
                        <img src={groupData.logo} alt="User Image" className="avatar-img rounded-circle" />
                      ) : (
                        <img src="default-avatar.png" alt="Default Avatar" className="avatar-img rounded-circle" />
                      )}
                    </div>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <i className="fas fa-search" />
                      </div>
                      <input type="text" className="form-control rounded-pill" placeholder="Search" />
                    </div>
                  </form>
                  <div className="chat-header">
                    {loading ? (
                      <span>Loading...</span>
                    ) : error ? (
                      <span>{error}</span>
                    ) : (
                      // groupData && <span><h5>Mentors from {groupData.group_name}</h5></span>
                      groupData && <span><h5>Mentors Available</h5></span>
                    )}
                  </div>

                  <div className="chat-users-list">
                    <div className="chat-scroll">
                      {groupData && groupData.members
                        .filter(member => member.user_type === "mentor")
                        .map((member) => (
                          <Link to="#" className="media d-flex" key={member.user.id}>
                            <div className="media-img-wrap flex-shrink-0">
                              <div className="avatar avatar-away">
                                <img src={member.profile_picture} alt="User Image" className="avatar-img rounded-circle" />
                              </div>
                            </div>
                            <div className="media-body flex-grow-1">
                              <div>
                                <div className="user-name">{member.first_name} {member.last_name}</div>
                                {/* <div className="user-last-chat">Book 1:1 Session</div> */}
                                <div className="user-last-chat">{member.degree} {member.major}</div>
                              </div>
                              <div>
                                {/* <div className="last-chat-time block">2 min</div> */}
                                <div className="last-chat-time block"></div>
                                {/* <div className="badge badge-success badge-pill fill-blue rounded-pill">15</div> */}
                                {/* <div className="badge badge-success">BOOK SESSION</div> */}

                                <div className="badge badge-success">
                                  {/* <Link
                                    to={{
                                      pathname: "/mentee/mentor-profile",
                                      state: { mentorData: member } // Pass the mentor data here
                                    }}
                                    className="badge badge-success"
                                  >
                                    BOOK SESSION
                                  </Link> */}
                                  <Link
                                    to={`/mentee/mentor-profile/${member.user.id}`}
                                    className="badge badge-success"
                                  >
                                    BOOK SESSION
                                  </Link>
                                </div>



                              </div>

                            </div>
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>

                {/* /Chat Left */}


                {/* Chat Right */}

                <div className="chat-cont-right">
                  <div className="chat-header">
                    <Link id="back_user_list" to="#" className="back-user-list">
                      <i className="material-icons">chevron_left</i>
                    </Link>
                    <div className="media d-flex">
                      <div className="media-img-wrap flex-shrink-0">
                        <div className="avatar avatar-online me-3">
                          {groupData ? (
                            <img src={groupData.logo} alt="User Image" className="avatar-img rounded-circle" />
                          ) : (
                            <img src="default-avatar.png" alt="Default Avatar" className="avatar-img rounded-circle" />
                          )}
                        </div>
                      </div>
                      <div className="media-body flex-grow-1">
                        <div className="user-name">{groupData ? groupData.college : "Loading..."}</div>
                      </div>
                    </div>

                    {/* <div className="chat-options">
                      <Link to="#" data-bs-toggle="modal" data-bs-target="#voice_call">
                        <i className="material-icons">local_phone</i>
                      </Link>
                      <Link to="#" data-bs-toggle="modal" data-bs-target="#video_call">
                        <i className="material-icons">videocam</i>
                      </Link>
                      <Link to="#">
                        <i className="material-icons">more_vert</i>
                      </Link>
                    </div> */}

                  </div>

                  <div className="chat-body">


                    {/* <div className="chat-scroll"> */}
                    <div className="chat-scroll" ref={chatScrollRef}>

                      <ul className="list-unstyled">

                        {messages.map((msg, index) => (
                          <li key={index} className={`media ${msg.sender == userData.current.username ? 'sent' : 'received'}`}>

                            <div className="media-body">
                              <div className="avatar flex-shrink-0">
                                <img src={msg.profile_picture} alt="User Image" className="avatar-img rounded-circle" />
                              </div>
                              <div className="msg-box">
                                <div>
                                  <p><strong> {msg.sender == userData.current.username ? '' : msg.sender} </strong>{msg.message}</p>
                                  <ul className="chat-msg-info">
                                    <li>
                                      <div className="chat-time">
                                        <span>{msg.timestamp}</span>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}

                      </ul>
                    </div>



                  </div>

                  <div className="chat-footer">
                    <div className="input-group">
                      <div className="btn-file btn">
                        <i className="fa fa-paperclip" />
                        <input type="file" />
                      </div>
                      <input
                        type="text"
                        className="input-msg-send form-control"
                        placeholder="Type something"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            sendMessage();
                          }
                        }}
                      />
                      <button type="button" className="btn msg-send-btn" onClick={sendMessage}>
                        Send
                      </button>
                    </div>
                  </div>
                </div>

                {/* /Chat Right */}

              </div>


            </div>
          </div>
          {/* /Row */}
        </div>
      </div>


      {/* modal for video*/}

      {/* <div className="modal fade call-modal" id="video_call">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="call-box incoming-box">
                <div className="call-wrapper">
                  <div className="call-inner">
                    <div className="call-user">
                      <img alt="User" src={img01} className="call-avatar" />
                      <h4>Darren Elder</h4>
                      <span>Connecting...</span>
                    </div>
                    <div className="call-items">
                      <Link
                        to="/pages/video-call"
                        className="btn call-item call-end"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <PhoneOff />
                      </Link>
                      <Link
                        to="/pages/video-call"
                        className="btn call-item call-start"
                        data-bs-dismiss="modal"
                      >
                        <Phone />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}


      {/* modal for call*/}

      {/* <div className="modal fade call-modal" id="voice_call">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="call-box incoming-box">
                <div className="call-wrapper">
                  <div className="call-inner">
                    <div className="call-user">
                      <img alt="User" src={img01} className="call-avatar" />
                      <h4>Darren Elder</h4>
                      <span>Connecting...</span>
                    </div>
                    <div className="call-items">
                      <Link
                        to="/pages/voice-call"
                        className="btn call-item call-end"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <PhoneOff />
                      </Link>
                      <Link
                        to="/pages/voice-call"
                        className="btn call-item call-start"
                        data-bs-dismiss="modal"
                      >
                        <Phone />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}


    </div>
  );
};

export default UniversityChatGroup;







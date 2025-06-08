import React, { useEffect, useRef, useState } from "react";
import { IMG01, IMG02 } from "./img";
// import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../header";
import { PhoneOff } from "feather-icons-react/build/IconComponents";


const VideoCall = ({ callDuration = 0, onEndCall }) => {
  const [callDetails, setCallDetails] = useState(null);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const [localStream, setLocalStream] = useState(null);
  const socketRef = useRef(null);
  const peerConnectionRef = useRef(null);
  const pendingCandidates = useRef([]);
  const remoteDescriptionSetRef = useRef(false); // Flag to track if remote description is set
  



  const query = new URLSearchParams(location.search);
  const callId = query.get("call_id");

  useEffect(() => {
    document.body.classList.add("call-page");

    const startLocalVideo = async () => {
      try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
          setLocalStream(stream); // Corrected this line
          if (localVideoRef.current) {
              localVideoRef.current.srcObject = stream;
          }
          setUpPeerConnection(stream);
      } catch (error) {
          console.error("Error accessing media devices.", error);
      }
  };

  startLocalVideo();

    // // Timer for call duration
    // const timer = setInterval(() => {
    //   setDuration(prev => prev + 1);
    // }, 1000);



    fetchCallDetails(callId);
    setupWebSocket(callId);




    return () => {
      document.body.classList.remove("call-page");
      if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
      }
      if (peerConnectionRef.current) {
        peerConnectionRef.current.close();
      }
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []);

  const handleEndCall = () => {
    if (onEndCall) {
      onEndCall();
    }
  };

  const toggleVideo = () => {
    setIsVideoEnabled(prev => !prev);
    if (localVideoStream) {
      localVideoStream.getVideoTracks().forEach(track => {
        track.enabled = !track.enabled;
      });
    }
  };

  const toggleAudio = () => {
    setIsAudioMuted(prev => !prev);
    if (localVideoStream) {
      localVideoStream.getAudioTracks().forEach(track => {
        track.enabled = !track.enabled;
      });
    }
  };


  const fetchCallDetails = async (callId) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/voice_video/call/${callId}/`
    );
    
    if (response.ok) {
      const data = await response.json();
      setCallDetails(data);
      startLocalVideo();
    } else {
      console.error('Error fetching call details:', response.statusText);
    }
  };

  const setupWebSocket = (callId) => {
const socket = new WebSocket(`${process.env.REACT_APP_API_BASE_URL_BACKEND_CHAT}/ws/call/${callId}/`);
    socket.onopen = () => {
      console.log("WebSocket connection established.");
    };

    socket.onmessage = async (event) => {
      const data = JSON.parse(event.data);
      handleWebSocketMessage(data);
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed.");
    };

    socketRef.current = socket;
  };

  const handleWebSocketMessage = async (data) => {
    switch (data.type) {
      case 'offer':
        await handleOffer(data.data);
        break;
      case 'answer':
        await handleAnswer(data.data);
        break;
      case 'ice_candidate':
        await handleIceCandidate(data.data);
        break;
      default:
        console.error('Unknown message type:', data.type);
    }
  };

  const startLocalVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setLocalStream(stream);
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
      setUpPeerConnection(stream);
    } catch (error) {
      console.error('Error accessing media devices.', error);
    }
  };

  const setUpPeerConnection = (stream) => {
    const pc = new RTCPeerConnection();
    peerConnectionRef.current = pc;

    setupPeerConnectionEvents(pc); // Call the setup function

    stream.getTracks().forEach(track => pc.addTrack(track, stream));
    createOffer(pc);
  };

  const setupPeerConnectionEvents = (pc) => {
    pc.onicecandidate = (event) => {
      if (event.candidate) {
        socketRef.current.send(JSON.stringify({
          type: 'ice_candidate',
          data: { candidate: event.candidate }
        }));
      }
    };

    pc.ontrack = (event) => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = event.streams[0];
      }
    };
  };

  const createOffer = async (pc) => {
    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);

    socketRef.current.send(JSON.stringify({
      type: 'offer',
      data: { offer }
    }));
  };

  const handleOffer = async (data) => {
    if (!peerConnectionRef.current) {
        peerConnectionRef.current = new RTCPeerConnection();
        setupPeerConnectionEvents(peerConnectionRef.current);
    }

    // Only set remote description if signaling state is appropriate
    if (peerConnectionRef.current.signalingState == 'stable' || peerConnectionRef.current.signalingState === 'have-remote-offer') {
        await peerConnectionRef.current.setRemoteDescription(new RTCSessionDescription(data.offer));
        remoteDescriptionSetRef.current = true;

        // Process any pending ICE candidates
        while (pendingCandidates.current.length > 0) {
            const candidate = pendingCandidates.current.shift();
            await peerConnectionRef.current.addIceCandidate(candidate);
        }

        const answer = await peerConnectionRef.current.createAnswer();
        await peerConnectionRef.current.setLocalDescription(answer);
        socketRef.current.send(JSON.stringify({
            type: 'answer',
            data: { answer },
        }));
    } else {
        console.warn('Invalid state to set remote offer:', peerConnectionRef.current.signalingState);
    }
};

  
  const handleAnswer = async (data) => {
    if (peerConnectionRef.current) {
      if (peerConnectionRef.current.signalingState === 'have-local-offer') {
        await peerConnectionRef.current.setRemoteDescription(new RTCSessionDescription(data.answer));
      } else {
        console.warn('Invalid state to set remote answer:', peerConnectionRef.current.signalingState);
      }
    }
  };
  
  const handleIceCandidate = async (data) => {
    const candidate = new RTCIceCandidate(data.candidate);

    if (remoteDescriptionSetRef.current) {
        try {
            await peerConnectionRef.current.addIceCandidate(candidate);
            console.log("Added ICE candidate:", candidate);
        } catch (error) {
            console.error("Error adding ICE candidate:", error);
        }
    } else {
        console.warn("Remote description not set yet. Storing candidate for later.");
        pendingCandidates.current.push(candidate); // Buffer the candidate
    }
};







  return (
    <>
      {/* <Header {...props} /> */}
      <>
        {/* Page Content */}
        <div className="content top-space">
          <div className="container">
            {/* Call Wrapper */}
            <div className="call-wrapper">
              <div className="call-main-row">
                <div className="call-main-wrapper">
                  <div className="call-view">
                    <div className="call-window">
                      {/* Call Header */}
                      <div className="fixed-header">
                        <div className="navbar">
                          <div className="user-details">
                            <div className="float-start user-img">
                              <Link
                                className="avatar avatar-sm me-2"
                                to="doctor/mentee-profile"
                                title="Charlene Reed"
                              >
                                <img
                                  src={IMG02}
                                  alt="User Image"
                                  className="rounded-circle"
                                />
                                <span className="status online" />
                              </Link>
                            </div>
                            <div className="user-info float-start">
                              <Link to="doctor/mentee-profile">
                                <span>Charlene Reed</span>
                              </Link>
                              <span className="last-seen">Online</span>
                            </div>
                          </div>
                          <ul className="nav float-end custom-menu">
                            <li className="nav-item dropdown dropdown-action">
                              <Link
                                to="#"
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa fa-cog" />
                              </Link>
                              <div className="dropdown-menu dropdown-menu-end">
                                <Link to="#" className="dropdown-item">
                                  Settings
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* /Call Header */}
                      {/* Call Contents */}
                      <div className="call-contents">
                        <div className="call-content-wrap">
                          <div className="user-video">
                            <img src={IMG01} alt="User Image" />
                          </div>
                          <div className="my-video">
                            <ul>
                              <li>
                                <img
                                  src={IMG02}
                                  className="img-fluid"
                                  alt="User Image"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* Call Contents */}
                      {/* Call Footer */}
                      <div className="call-footer">
                        <div className="call-icons">
                          <span className="call-duration">00:59</span>
                          <ul className="call-items">
                            <li className="call-item">
                              <Link
                                to="#"
                                title="Enable Video"
                                data-placement="top"
                                data-bs-toggle="tooltip"
                              >
                                <i className="fas fa-video camera" />
                              </Link>
                            </li>
                            <li className="call-item">
                              <Link
                                to="#"
                                title="Mute Audio"
                                data-placement="top"
                                data-bs-toggle="tooltip"
                              >
                                <i className="fa fa-microphone microphone" />
                              </Link>
                            </li>
                            <li className="call-item">
                              <Link
                                to="#"
                                title="Add User"
                                data-placement="top"
                                data-bs-toggle="tooltip"
                              >
                                <i className="fa fa-user-plus" />
                              </Link>
                            </li>
                            <li className="call-item">
                              <Link
                                to="#"
                                title="Full Screen"
                                data-placement="top"
                                data-bs-toggle="tooltip"
                              >
                                <i className="fas fa-arrows-alt-v full-screen" />
                              </Link>
                            </li>
                          </ul>
                          <div className="end-call">
                            <Link to="#">
                              <PhoneOff />
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* /Call Footer */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Call Wrapper */}
          </div>
        </div>
        {/* /Page Content */}
      </>
    </>
  );
};

export default VideoCall;

























// import React, { useEffect, useRef, useState } from "react";
// import { IMG01, IMG02 } from "./img";
// // import { Tooltip, OverlayTrigger } from "react-bootstrap";
// import { Link, useLocation } from "react-router-dom";
// import Header from "../../header";
// import { PhoneOff } from "feather-icons-react/build/IconComponents";
// // import { createClient, createMicrophoneAndCameraTracks } from 'agora-rtc-sdk-ng';
// import AgoraRTC from "agora-rtc-sdk-ng";
// import { AgoraRTCProvider } from "agora-rtc-react";


// const VideoCall = (props) => {
//   console.log("Inside VideoCall")
//   console.log(AgoraRTC.createClient);
//   const location = useLocation();
//   const client = useRef(null);
//   const localAudioTrack = useRef(null);
//   const localVideoTrack = useRef(null);
//   const [isVideoEnabled, setIsVideoEnabled] = useState(true);

//   const APP_ID = '6a81bc5dbfe54f92b98fa1cfc600b682'; // Replace with your Agora App ID
//   // const CHANNEL_NAME = "your_channel_name"; // Replace with your channel name
//   // const TOKEN = "your_token"; // Replace with your token

//   // Extract channel name and token from query parameters
//   const query = new URLSearchParams(location.search);
//   const CHANNEL_NAME = query.get("channel");
//   console.log("Channel name is: ", CHANNEL_NAME)
//   const TOKEN = query.get("token");
//   console.log("Token is: ", TOKEN)
//   console.log("APP ID: ", APP_ID)


//   // useEffect(() => {
//   //   document.body.classList.add("call-page");

//   //   return () => document.body.classList.remove("call-page");
//   // }, []);


//   useEffect(() => {
//     document.body.classList.add("call-page");

//     // Initialize Agora client
//     client.current = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

//     const initCall = async () => {
//       try {
//         await client.current.join(APP_ID, CHANNEL_NAME, TOKEN, null);
//         [localAudioTrack.current, localVideoTrack.current] = await AgoraRTC.createMicrophoneAndCameraTracks();
    
//         const tracksToPublish = [localAudioTrack.current];
//         if (isVideoEnabled) {
//           tracksToPublish.push(localVideoTrack.current);
//         }
//         await client.current.publish(tracksToPublish);
    
//         client.current.on("user-published", async (user, mediaType) => {
//           await client.current.subscribe(user, mediaType);
//           if (mediaType === "video") {
//             const remoteVideoTrack = user.videoTrack;
//             const playerContainer = document.createElement("div");
//             playerContainer.id = user.uid.toString();
//             document.getElementById("remote-video").append(playerContainer);
//             remoteVideoTrack.play(playerContainer);
//           }
//         });
//       } catch (error) {
//         console.error("Error initializing call:", error);
//       }
//     };
    

//     initCall();

//     return () => {
//       if (localAudioTrack.current) {
//         localAudioTrack.current.close();
//       }
//       if (localVideoTrack.current) {
//         localVideoTrack.current.close();
//       }
//       client.current.leave();
//       document.body.classList.remove("call-page");
//     };
//   }, [isVideoEnabled]);

//   const toggleVideo = async () => {
//     if (isVideoEnabled) {
//       localVideoTrack.current.close();
//       setIsVideoEnabled(false);
//     } else {
//       const [audioTrack, videoTrack] = await AgoraRTC.createMicrophoneAndCameraTracks();
//       localVideoTrack.current = videoTrack;
//       localVideoTrack.current.setEnabled(true);
//       await client.current.publish(localVideoTrack.current);
//       setIsVideoEnabled(true);
//     }
//   };
  


//   return (
//     <>
//       <Header {...props} />
//       <>
//         {/* Page Content */}
//         <div className="content top-space">
//           <div className="container">
//             {/* Call Wrapper */}
//             <div className="call-wrapper">
//               <div className="call-main-row">
//                 <div className="call-main-wrapper">
//                   <div className="call-view">
//                     <div className="call-window">
//                       {/* Call Header */}
//                       <div className="fixed-header">
//                         <div className="navbar">
//                           <div className="user-details">
//                             <div className="float-start user-img">
//                               <Link
//                                 className="avatar avatar-sm me-2"
//                                 to="doctor/mentee-profile"
//                                 title="Charlene Reed"
//                               >
//                                 <img
//                                   src={IMG02}
//                                   alt="User Image"
//                                   className="rounded-circle"
//                                 />
//                                 <span className="status online" />
//                               </Link>
//                             </div>
//                             <div className="user-info float-start">
//                               <Link to="doctor/mentee-profile">
//                                 <span>Charlene Reed</span>
//                               </Link>
//                               <span className="last-seen">Online</span>
//                             </div>
//                           </div>
//                           <ul className="nav float-end custom-menu">
//                             <li className="nav-item dropdown dropdown-action">
//                               <Link
//                                 to="#"
//                                 className="nav-link dropdown-toggle"
//                                 data-bs-toggle="dropdown"
//                                 aria-expanded="false"
//                               >
//                                 <i className="fa fa-cog" />
//                               </Link>
//                               <div className="dropdown-menu dropdown-menu-end">
//                                 <Link to="#" className="dropdown-item">
//                                   Settings
//                                 </Link>
//                               </div>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                       {/* /Call Header */}
//                       {/* Call Contents */}
//                       <div className="call-contents">
//                         <div className="call-content-wrap">
//                           <div className="user-video">
//                             <img src={IMG01} alt="User Image" />
//                           </div>
//                           <div className="my-video">
//                             <ul>
//                               <li>
//                                 <img
//                                   src={IMG02}
//                                   className="img-fluid"
//                                   alt="User Image"
//                                 />
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                       {/* Call Contents */}
//                       {/* Call Footer */}
//                       <div className="call-footer">
//                         <div className="call-icons">
//                           <span className="call-duration">00:59</span>
//                           <ul className="call-items">
//                             <li className="call-item">
//                               <Link
//                                 to="#"
//                                 title="Enable Video"
//                                 data-placement="top"
//                                 data-bs-toggle="tooltip"
//                               >
//                                 <i className="fas fa-video camera" />
//                               </Link>
//                             </li>
//                             <li className="call-item">
//                               <Link
//                                 to="#"
//                                 title="Mute Audio"
//                                 data-placement="top"
//                                 data-bs-toggle="tooltip"
//                               >
//                                 <i className="fa fa-microphone microphone" />
//                               </Link>
//                             </li>
//                             <li className="call-item">
//                               <Link
//                                 to="#"
//                                 title="Add User"
//                                 data-placement="top"
//                                 data-bs-toggle="tooltip"
//                               >
//                                 <i className="fa fa-user-plus" />
//                               </Link>
//                             </li>
//                             <li className="call-item">
//                               <Link
//                                 to="#"
//                                 title="Full Screen"
//                                 data-placement="top"
//                                 data-bs-toggle="tooltip"
//                               >
//                                 <i className="fas fa-arrows-alt-v full-screen" />
//                               </Link>
//                             </li>
//                           </ul>
//                           <div className="end-call">
//                             <Link to="#">
//                               <PhoneOff />
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                       {/* /Call Footer */}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* /Call Wrapper */}
//           </div>
//         </div>
//         {/* /Page Content */}
//       </>
//     </>
//   );
// };

// export default VideoCall;

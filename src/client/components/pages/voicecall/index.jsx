import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../../header";

const VoiceCall = (props) => {
  const [socket, setSocket] = useState(null);
  const [user, setUser] = useState({ name: "harshit", status: "Online" });
  const [participants, setParticipants] = useState([]);
  const [callDuration, setCallDuration] = useState(0);
  const localStreamRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const remoteAudioRef = useRef(null);
  const peerConnection = useRef(new RTCPeerConnection({
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
  }));
  const timerRef = useRef(null);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const call_id = query.get("call_id");

  useEffect(() => {
    if (!call_id) {
      console.error("Call ID is missing from the URL");
      return;
    }

    const newSocket = new WebSocket(`ws://127.0.0.1:8000/ws/call/${call_id}/`);
    newSocket.onopen = () => {
      console.log("WebSocket connection established");
      startTimer();
    };

    newSocket.onmessage = async (event) => {
      const data = JSON.parse(event.data);
      switch (data.type) {
        case "offer":
          await peerConnection.current.setRemoteDescription(new RTCSessionDescription(data.offer));
          const answer = await peerConnection.current.createAnswer();
          await peerConnection.current.setLocalDescription(answer);
          newSocket.send(JSON.stringify({ type: "answer", answer }));
          break;

        case "answer":
          await peerConnection.current.setRemoteDescription(new RTCSessionDescription(data.answer));
          break;

        case "ice_candidate":
          await peerConnection.current.addIceCandidate(new RTCIceCandidate(data.candidate));
          break;

        case "participant_joined":
          setParticipants((prev) => [...prev, data.username]);
          break;

        case "participant_left":
          setParticipants((prev) => prev.filter(name => name !== data.username));
          break;

        default:
          break;
      }
    };

    peerConnection.current.onicecandidate = (event) => {
      if (event.candidate) {
        newSocket.send(JSON.stringify({ type: "ice_candidate", candidate: event.candidate }));
      }
    };

    peerConnection.current.ontrack = (event) => {
      if (event.track.kind === "video") {
        remoteVideoRef.current.srcObject = event.streams[0];
      } else if (event.track.kind === "audio") {
        remoteAudioRef.current.srcObject = event.streams[0];
      }
    };

    const getUserMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
        localStreamRef.current.srcObject = stream;
        stream.getTracks().forEach(track => peerConnection.current.addTrack(track, stream));
      } catch (error) {
        console.error("Error accessing media devices.", error);
      }
    };

    getUserMedia();

    return () => {
      newSocket.close();
      peerConnection.current.close();
      stopTimer();
    };
  }, [call_id]);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCallDuration((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    setCallDuration(0);
  };

  return (
    <>
      <Header {...props} />
      <div className="content top-space">
        <div className="container">
          <div className="call-wrapper">
            <div className="call-main-row">
              <div className="call-main-wrapper">
                <div className="call-view">
                  <div className="call-window">
                    <div className="fixed-header">
                      <div className="navbar">
                        <div className="user-details me-auto">
                          <div className="float-start user-img">
                            <Link className="avatar avatar-sm me-2" to="/mentor/mentee-profile" title={user.name}>
                              <img src="" alt="User Image" className="rounded-circle" />
                              <span className="status online" />
                            </Link>
                          </div>
                          <div className="user-info float-start">
                            <Link to="/mentor/mentee-profile">
                              <span>{user.name}</span>
                            </Link>
                            <span className="last-seen">{user.status}</span>
                          </div>
                        </div>
                        <ul className="nav float-end custom-menu">
                          <li className="nav-item dropdown dropdown-action">
                            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="fa fa-cog" />
                            </Link>
                            <div className="dropdown-menu dropdown-menu-end">
                              <Link to="#" className="dropdown-item">Settings</Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="call-contents">
                      <div className="call-content-wrap">
                        <div className="voice-call-avatar">
                          <video ref={remoteVideoRef} autoPlay className="call-avatar remote-video" />
                          <span className="username">Caller Name</span>
                          <span className="call-timing-count">{callDuration}s</span>
                        </div>
                        <div className="local-video-container">
                          <video ref={localStreamRef} autoPlay muted className="call-avatar local-video" />
                        </div>
                        <div className="call-users">
                          <ul>
                            {participants.map((participant, index) => (
                              <li key={index}>
                                <span>{participant}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="call-footer">
                      <div className="call-icons">
                        <ul className="call-items">
                          <li className="call-item">
                            <Link to="#" title="Enable Video" data-placement="top" data-bs-toggle="tooltip">
                              <i className="fas fa-video camera" />
                            </Link>
                          </li>
                          <li className="call-item">
                            <Link to="#" title="Mute" data-placement="top" data-bs-toggle="tooltip">
                              <i className="fa fa-microphone microphone" />
                            </Link>
                          </li>
                          <li className="call-item">
                            <Link to="#" title="Add User" data-placement="top" data-bs-toggle="tooltip">
                              <i className="fa fa-user-plus" />
                            </Link>
                          </li>
                        </ul>
                        <div className="end-call">
                          <Link to="#">
                            <i className="material-icons">call_end</i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <audio ref={remoteAudioRef} autoPlay style={{ display: "none" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VoiceCall;


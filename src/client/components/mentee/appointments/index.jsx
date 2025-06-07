import React, { useEffect, useState } from "react";
import StickyBox from "react-sticky-box";
import Header from "../../header";
import HomeFiveHeader from "../../home/home-five/header";
import { user_2 } from "../../../../admin/components/imagepath"; // Update with correct imports if needed
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";
import DashboardSidebar from "../dashboard/sidebar/sidebar";
import axios from 'axios';

const ViewAllGroups = (props) => {
  const [groups, setGroups] = useState([]); // State to hold groups data
  const [loading, setLoading] = useState(true); // Loading state
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const history = useHistory();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {

    const token = localStorage.getItem('authToken'); // Check local storage for auth token
    
    if (token) {
      setIsAuthenticated(true); // Update state if token exists
    }
    else {
      console.log("Token not found. User is logged out intially")
    }

    const fetchGroups = async () => {
      try {
        const response = await axios.get('http://www.mentiff.com/api_backend/api/universities/groups/'); // Your API endpoint
        setGroups(response.data); // Set the groups data
        console.log("Fetched groups data:", response.data);
      } catch (error) {
        console.error("Error fetching groups:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchGroups();
  }, []);

  // Filter groups based on the search query
  const filteredGroups = groups.filter(group => 
    group.group_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    group.college.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleJoinClick = (group) => {

    const isLoggedIn = isAuthenticated
    console.log("User has clicked join button: ")

    
    if (!isLoggedIn) {
      // Store the intended route in localStorage
      localStorage.setItem('redirectAfterLogin', `/mentor/chat-mentor/`);
      console.log("User not logged in, redirecting to login page.");
      console.log("clicked in join with id: ")
      console.log(`${group.id}`)
      localStorage.setItem('groupId', `${group.id}`);

      // Redirect to the login page
      history.push('/login/');
    }
    else {
      console.log("User already logged in, redirecting to chat mentor page.");
      console.log("clicked in join with id: ")
      console.log(`${group.id}`)
      localStorage.setItem('groupId', `${group.id}`);
      // Redirect to the chat mentor page
      history.push('/mentor/chat-mentor/');
    }
  };


  return (
    <>
      {/* <Header {...props} /> */}
      <HomeFiveHeader/>
      {/* Breadcrumb */}
      {/* <div className="breadcrumb-bar-two">
        <div className="container-fluid">
          <div className="row align-items-start inner-banner">
            <div className="col-md-12 col-12 text-start">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    University Groups
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title"> </h2>
            </div>
          </div>
        </div>
      </div> */}
      {/* /Breadcrumb */}



      {/* Page Content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            {/* Sidebar */}
            {/* <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <DashboardSidebar />
              </StickyBox>
            </div> */}
            {/* /Sidebar */}

            {/* University Groups */}
            {/* <div className="col-md-7 col-lg-8 col-xl-9"> */}
            <div className="col-12 ">
              <h3 className="pb-3">University Groups</h3>

              {/* Search Bar */}
              <div className="mb-3">
                <input 
                  type="text" 
                  placeholder="Search by group name or college..." 
                  className="form-control" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)} 
                />
              </div>

              {/* Mentee List Tab */}
              <div className="tab-pane show active" id="mentee-list">
                <div className="card card-table">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover table-center mb-0" style={{ width: '100%' }}>
                        <thead>
                          <tr>
                            <th>UNIVERSITY</th>
                            <th className="text-center">ACTION</th>
                          </tr>
                        </thead>
                        <tbody>
                          {loading ? (
                            <tr>
                              <td colSpan="2" className="text-center">Loading...</td>
                            </tr>
                          ) : filteredGroups.length > 0 ? (
                            filteredGroups.map((group) => (
                              <tr key={group.id}>
                                <td>
                                  <h2 className="table-avatar">
                                    
                                    <Link to="mentee-bookings" className="avatar avatar-sm me-2">
                                      <img className="avatar-img rounded-circle" src={user_2} alt="User Image" />
                                    </Link>
                                    
                                    <Link to="mentee-bookings">
                                      {group.college}<span>{group.group_name}</span>
                                    </Link>
                              
                                  </h2>
                                </td>
                                <td className="text-center">
                                  <button 
                                    className="btn btn-sm bg-info-light"
                                    onClick={() => handleJoinClick(group)}
                                  >
                                    <i className="far fa-eye" /> Join/View
                                  </button>
                                </td>
                              
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="2" className="text-center">No groups found.</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Mentee List Tab */}
            </div>
            {/* /University Groups */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};

export default ViewAllGroups;

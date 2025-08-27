// import React, { useEffect, useState } from "react";
// import StickyBox from "react-sticky-box";
// import Header from "../../header";
// import HomeFiveHeader from "../../home/home-five/header";
// import { user_2 } from "../../../../admin/components/imagepath"; // Update with correct imports if needed
// import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";
// import DashboardSidebar from "../dashboard/sidebar/sidebar";
// import axios from 'axios';

// const ViewAllGroups = (props) => {
//   const [groups, setGroups] = useState([]); // State to hold groups data
//   const [loading, setLoading] = useState(true); // Loading state
//   const [searchQuery, setSearchQuery] = useState(""); // State for search input
//   const history = useHistory();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   useEffect(() => {

//     const token = localStorage.getItem('authToken'); // Check local storage for auth token

//     if (token) {
//       setIsAuthenticated(true); // Update state if token exists
//     }
//     else {
//       console.log("Token not found. User is logged out intially")
//       console.log("API base URL:", process.env.REACT_APP_API_BASE_URL_BACKEND);

//     }

//     const fetchGroups = async () => {
//       try {
// const response = await axios.get(
//   `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/universities/groups/`
// );        setGroups(response.data); // Set the groups data
//         console.log("Fetched groups data:", response.data);
//       } catch (error) {
//         console.error("Error fetching groups:", error);
//       } finally {
//         setLoading(false); // Set loading to false after data is fetched
//       }
//     };

//     fetchGroups();
//   }, []);

//   // Filter groups based on the search query
//   const filteredGroups = groups.filter(group => 
//     group.group_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     group.college.toLowerCase().includes(searchQuery.toLowerCase())
//   );





//   const handleJoinClick = (group) => {

//     const isLoggedIn = isAuthenticated
//     console.log("User has clicked join button: ")


//     if (!isLoggedIn) {
//       // Store the intended route in localStorage
//       localStorage.setItem('redirectAfterLogin', `/mentor/chat-mentor/`);
//       console.log("User not logged in, redirecting to login page.");
//       console.log("clicked in join with id: ")
//       console.log(`${group.id}`)
//       localStorage.setItem('groupId', `${group.id}`);

//       // Redirect to the login page
//       history.push('/login/');
//     }
//     else {
//       console.log("User already logged in, redirecting to chat mentor page.");
//       console.log("clicked in join with id: ")
//       console.log(`${group.id}`)
//       localStorage.setItem('groupId', `${group.id}`);
//       // Redirect to the chat mentor page
//       history.push('/mentor/chat-mentor/');
//     }
//   };


//   return (
//     <>
//       {/* <Header {...props} /> */}
//       <HomeFiveHeader/>
//       {/* Breadcrumb */}


//       {/* Page Content */}
//       <div className="content">
//         <div className="container-fluid">
//           <div className="row">
//             {/* Sidebar */}
//             {/* <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
//               <StickyBox offsetTop={20} offsetBottom={20}>
//                 <DashboardSidebar />
//               </StickyBox>
//             </div> */}
//             {/* /Sidebar */}

//             {/* University Groups */}
//             {/* <div className="col-md-7 col-lg-8 col-xl-9"> */}
//             <div className="col-12 ">
//               <h3 className="pb-3">University Groups</h3>

//               {/* Search Bar */}
//               <div className="mb-3">
//                 <input 
//                   type="text" 
//                   placeholder="Search by group name or college..." 
//                   className="form-control" 
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)} 
//                 />
//               </div>

//               {/* Mentee List Tab */}
//               <div className="tab-pane show active" id="mentee-list">
//                 <div className="card card-table">
//                   <div className="card-body">
//                     <div className="table-responsive">
//                       <table className="table table-hover table-center mb-0" style={{ width: '100%' }}>
//                         <thead>
//                           <tr>
//                             <th>UNIVERSITY</th>
//                             <th className="text-center">ACTION</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {loading ? (
//                             <tr>
//                               <td colSpan="2" className="text-center">Loading...</td>
//                             </tr>
//                           ) : filteredGroups.length > 0 ? (
//                             filteredGroups.map((group) => (
//                               <tr key={group.id}>
//                                 <td>
//                                   <h2 className="table-avatar">

//                                     <Link to="mentee-bookings" className="avatar avatar-sm me-2">
//                                       <img className="avatar-img rounded-circle" src={user_2} alt="User Image" />
//                                     </Link>

//                                     <Link to="mentee-bookings">
//                                       {group.college}<span>{group.group_name}</span>
//                                     </Link>

//                                   </h2>
//                                 </td>
//                                 <td className="text-center">
//                                   <button 
//                                     className="btn btn-sm bg-info-light"
//                                     onClick={() => handleJoinClick(group)}
//                                   >
//                                     <i className="far fa-eye" /> Join/View
//                                   </button>
//                                 </td>

//                               </tr>
//                             ))
//                           ) : (
//                             <tr>
//                               <td colSpan="2" className="text-center">No groups found.</td>
//                             </tr>
//                           )}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* /Mentee List Tab */}
//             </div>
//             {/* /University Groups */}
//           </div>
//         </div>
//       </div>
//       {/* /Page Content */}
//     </>
//   );
// };

// export default ViewAllGroups;

































// import React, { useEffect, useState } from "react";
// import StickyBox from "react-sticky-box";
// import Header from "../../header";
// import HomeFiveHeader from "../../home/home-five/header";
// import { user_2 } from "../../../../admin/components/imagepath"; // Update with correct imports if needed
// import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";
// import DashboardSidebar from "../dashboard/sidebar/sidebar";
// import axios from 'axios';

// // University Logo Component
// const UniversityLogo = ({ groupData, size = 50, className = "" }) => {
//   // Generate a consistent color from a string
//   const stringToColor = (str = "") => {
//     let hash = 0;
//     for (let i = 0; i < str.length; i++) {
//       hash = str.charCodeAt(i) + ((hash << 5) - hash);
//     }
//     // Generate a vibrant color
//     const hue = Math.abs(hash) % 360;
//     return `hsl(${hue}, 65%, 55%)`;
//   };

//   // Generate logo text from group data
//   const generateLogoText = (groupData) => {
//     if (groupData?.group_name) {
//       const name = groupData.group_name.trim();

//       if (name.length <= 4) {
//         // Short group name, show full
//         return name.toUpperCase();
//       }

//       // Long group name, take initials (first letter of each word, max 4 chars)
//       return name
//         .split(" ")
//         .map(word => word[0])
//         .join("")
//         .slice(0, 4)
//         .toUpperCase();
//     } else if (groupData?.college) {
//       // Fallback to college initials
//       return groupData.college
//         .split(" ")
//         .map(word => word[0])
//         .join("")
//         .slice(0, 4)
//         .toUpperCase();
//     }

//     return "UNI";
//   };

//   const logoText = generateLogoText(groupData);
//   const backgroundColor = stringToColor(logoText);

//   return (
//     <div
//       className={`d-flex align-items-center justify-content-center ${className}`}
//       style={{
//         width: size,
//         height: size,
//         borderRadius: "50%",
//         backgroundColor: backgroundColor,
//         color: "white",
//         fontWeight: "bold",
//         fontSize: Math.max(size / 4, 12), // Responsive font size
//         textShadow: "0 1px 2px rgba(0,0,0,0.3)",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
//         border: "2px solid rgba(255,255,255,0.2)",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Background pattern for extra visual appeal */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: `linear-gradient(135deg, ${backgroundColor} 0%, ${backgroundColor}dd 100%)`,
//           borderRadius: "50%",
//         }}
//       />

//       {/* Logo text */}
//       <span style={{ position: "relative", zIndex: 1 }}>
//         {logoText}
//       </span>
//     </div>
//   );
// };

// const ViewAllGroups = (props) => {
//   const [groups, setGroups] = useState([]); // State to hold groups data
//   const [loading, setLoading] = useState(true); // Loading state
//   const [searchQuery, setSearchQuery] = useState(""); // State for search input
//   const history = useHistory();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('authToken'); // Check local storage for auth token

//     if (token) {
//       setIsAuthenticated(true); // Update state if token exists
//     } else {
//       console.log("Token not found. User is logged out initially")
//       console.log("API base URL:", process.env.REACT_APP_API_BASE_URL_BACKEND);
//     }

//     const fetchGroups = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/universities/groups/`
//         );
//         setGroups(response.data); // Set the groups data
//         console.log("Fetched groups data:", response.data);
//       } catch (error) {
//         console.error("Error fetching groups:", error);
//       } finally {
//         setLoading(false); // Set loading to false after data is fetched
//       }
//     };

//     fetchGroups();
//   }, []);

//   // Filter groups based on the search query
//   const filteredGroups = groups.filter(group => 
//     group.group_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     group.college.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleJoinClick = (group) => {
//     const isLoggedIn = isAuthenticated
//     console.log("User has clicked join button: ")

//     if (!isLoggedIn) {
//       // Store the intended route in localStorage
//       localStorage.setItem('redirectAfterLogin', `/mentor/chat-mentor/`);
//       console.log("User not logged in, redirecting to login page.");
//       console.log("clicked in join with id: ")
//       console.log(`${group.id}`)
//       localStorage.setItem('groupId', `${group.id}`);

//       // Redirect to the login page
//       history.push('/login/');
//     } else {
//       console.log("User already logged in, redirecting to chat mentor page.");
//       console.log("clicked in join with id: ")
//       console.log(`${group.id}`)
//       localStorage.setItem('groupId', `${group.id}`);
//       // Redirect to the chat mentor page
//       history.push('/mentor/chat-mentor/');
//     }
//   };

//   return (
//     <>
//       {/* <Header {...props} /> */}
//       <HomeFiveHeader/>
//       {/* Breadcrumb */}

//       {/* Page Content */}
//       <div className="content">
//         <div className="container-fluid">
//           <div className="row">
//             {/* Sidebar */}
//             {/* <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
//               <StickyBox offsetTop={20} offsetBottom={20}>
//                 <DashboardSidebar />
//               </StickyBox>
//             </div> */}
//             {/* /Sidebar */}

//             {/* University Groups */}
//             {/* <div className="col-md-7 col-lg-8 col-xl-9"> */}
//             <div className="col-12">
//               <h3 className="pb-3">University Groups</h3>

//               {/* Search Bar */}
//               <div className="mb-3">
//                 <input 
//                   type="text" 
//                   placeholder="Search by group name or college..." 
//                   className="form-control" 
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)} 
//                 />
//               </div>

//               {/* Groups Cards View */}
//               <div className="row">
//                 {loading ? (
//                   <div className="col-12 text-center">
//                     <div className="spinner-border text-primary" role="status">
//                       <span className="sr-only">Loading...</span>
//                     </div>
//                     <p className="mt-2">Loading university groups...</p>
//                   </div>
//                 ) : filteredGroups.length > 0 ? (
//                   filteredGroups.map((group) => (
//                     <div key={group.id} className="col-md-6 col-lg-4 mb-4">
//                       <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '12px', overflow: 'hidden' }}>
//                         <div className="card-body d-flex flex-column">
//                           {/* University Logo and Info */}
//                           <div className="d-flex align-items-center mb-3">
//                             <UniversityLogo 
//                               groupData={group} 
//                               size={50} 
//                               className="me-3" 
//                             />
//                             <div className="flex-grow-1">
//                               <h5 className="card-title mb-1" style={{ fontSize: '1.1rem', fontWeight: '600' }}>
//                                 {group.college}
//                               </h5>
//                               <p className="card-text text-muted mb-0" style={{ fontSize: '0.9rem' }}>
//                                 {group.group_name}
//                               </p>
//                             </div>
//                           </div>

//                           {/* Group Stats */}
//                           <div className="row mb-3">
//                             <div className="col-6">
//                               <div className="text-center p-2" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
//                                 <div style={{ fontSize: '1.2rem', fontWeight: '600', color: '#495057' }}>
//                                   {group.member_count || 0}
//                                 </div>
//                                 <div style={{ fontSize: '0.8rem', color: '#6c757d' }}>
//                                   Members
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="col-6">
//                               <div className="text-center p-2" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
//                                 <div style={{ fontSize: '1.2rem', fontWeight: '600', color: '#495057' }}>
//                                   {group.mentor_count || 0}
//                                 </div>
//                                 <div style={{ fontSize: '0.8rem', color: '#6c757d' }}>
//                                   Mentors
//                                 </div>
//                               </div>
//                             </div>
//                           </div>

//                           {/* Action Button */}
//                           <div className="mt-auto">
//                             <button 
//                               className="btn btn-primary w-100"
//                               onClick={() => handleJoinClick(group)}
//                               style={{ 
//                                 borderRadius: '8px', 
//                                 fontWeight: '500',
//                                 padding: '10px'
//                               }}
//                             >
//                               <i className="far fa-comments me-2" />
//                               {isAuthenticated ? 'Join Group' : 'Login to Join'}
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <div className="col-12 text-center">
//                     <div style={{ padding: '3rem' }}>
//                       <i className="fas fa-search" style={{ fontSize: '3rem', color: '#dee2e6', marginBottom: '1rem' }}></i>
//                       <h4 style={{ color: '#6c757d' }}>No groups found</h4>
//                       <p style={{ color: '#adb5bd' }}>Try adjusting your search criteria</p>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Alternative Table View (commented out, but keeping for reference) */}
//               {/* 
//               <div className="tab-pane show active" id="mentee-list">
//                 <div className="card card-table">
//                   <div className="card-body">
//                     <div className="table-responsive">
//                       <table className="table table-hover table-center mb-0" style={{ width: '100%' }}>
//                         <thead>
//                           <tr>
//                             <th>UNIVERSITY</th>
//                             <th className="text-center">ACTION</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {loading ? (
//                             <tr>
//                               <td colSpan="2" className="text-center">Loading...</td>
//                             </tr>
//                           ) : filteredGroups.length > 0 ? (
//                             filteredGroups.map((group) => (
//                               <tr key={group.id}>
//                                 <td>
//                                   <h2 className="table-avatar">
//                                     <div className="avatar avatar-sm me-2">
//                                       <UniversityLogo 
//                                         groupData={group} 
//                                         size={40} 
//                                         className="avatar-img" 
//                                       />
//                                     </div>
//                                     <Link to="mentee-bookings">
//                                       {group.college}<span>{group.group_name}</span>
//                                     </Link>
//                                   </h2>
//                                 </td>
//                                 <td className="text-center">
//                                   <button 
//                                     className="btn btn-sm bg-info-light"
//                                     onClick={() => handleJoinClick(group)}
//                                   >
//                                     <i className="far fa-eye" /> Join/View
//                                   </button>
//                                 </td>
//                               </tr>
//                             ))
//                           ) : (
//                             <tr>
//                               <td colSpan="2" className="text-center">No groups found.</td>
//                             </tr>
//                           )}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               */}

//             </div>
//             {/* /University Groups */}
//           </div>
//         </div>
//       </div>
//       {/* /Page Content */}
//     </>
//   );
// };

// export default ViewAllGroups;



















import React, { useEffect, useState } from "react";
import StickyBox from "react-sticky-box";
import Header from "../../header";
import HomeFiveHeader from "../../home/home-five/header";
import { user_2 } from "../../../../admin/components/imagepath"; // Update with correct imports if needed
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";
import DashboardSidebar from "../dashboard/sidebar/sidebar";
import axios from 'axios';

// University Logo Component
const UniversityLogo = ({ groupData, size = 40, className = "" }) => {
  // Generate a consistent color from a string
  const stringToColor = (str = "") => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    // Generate a vibrant color
    const hue = Math.abs(hash) % 360;
    return `hsl(${hue}, 65%, 55%)`;
  };

  // Generate logo text from group data
  const generateLogoText = (groupData) => {
    if (groupData?.group_name) {
      const name = groupData.group_name.trim();

      if (name.length <= 4) {
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

    return "UNI";
  };

  const logoText = generateLogoText(groupData);
  const backgroundColor = stringToColor(logoText);

  return (
    <div
      className={`avatar-img rounded-circle d-flex align-items-center justify-content-center ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: backgroundColor,
        color: "white",
        fontWeight: "bold",
        fontSize: Math.max(size / 3, 10), // Responsive font size
        textShadow: "0 1px 2px rgba(0,0,0,0.3)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        border: "2px solid rgba(255,255,255,0.2)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background pattern for extra visual appeal */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, ${backgroundColor} 0%, ${backgroundColor}dd 100%)`,
          borderRadius: "50%",
        }}
      />

      {/* Logo text */}
      <span style={{ position: "relative", zIndex: 1 }}>
        {logoText}
      </span>
    </div>
  );
};

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
      console.log("API base URL:", process.env.REACT_APP_API_BASE_URL_BACKEND);
    }

    const fetchGroups = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/universities/groups/`
        );
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
      <HomeFiveHeader />
      {/* Breadcrumb */}

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
                                    <span
                                      className="avatar avatar-sm me-2 cursor-pointer"
                                      onClick={() => handleJoinClick(group)}
                                    >
                                      <UniversityLogo
                                        groupData={group}
                                        size={40}
                                      />
                                    </span>

                                    <span
                                      className="cursor-pointer"
                                      onClick={() => handleJoinClick(group)}
                                    >
                                      <strong>{group.college}</strong>
                                      <span>{group.group_name}</span>
                                    </span>
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
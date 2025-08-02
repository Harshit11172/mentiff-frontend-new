// import React, { useEffect, useState } from "react";
// import axios from "axios"; // assuming you use axios

// // import Select from "react-select";
// // import SearchFilter from "./searchFilter";
// import SearchList from "./searchList";
// import StickyBox from "react-sticky-box";
// import Header from "../../header";
// import Footer from "../../footer";
// import { Link } from "react-router-dom";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// // import HomeFiveHeader from "./header";
// // import HomeFiveFooter from "./footer";
// import HomeFiveFooter from "../../home/home-five/footer";
// import HomeFiveHeader from "../../home/home-five/header";




// const SearchMentor = (props) => {

//   const [selectedDate, setSelectedDate] = useState(null);

//   const [mentors, setMentors] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);


//   const [filters, setFilters] = useState({
//     country: "",
//     college: "",
//     // gender: "",
//     course: [],
//     date: null,
//   });



//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };


//   const handleSearch = async (customFilters = filters) => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/mentors/`, {
//         params: {
//           country: customFilters.country,
//           college: customFilters.college,
//           // gender: customFilters.gender,
//           course: customFilters.course.join(","),
//           date: customFilters.date
//             ? customFilters.date.toISOString().split("T")[0]
//             : "",
//         },
//       });
//       setMentors(response.data);
//     } catch (err) {
//       setError("Failed to load mentors.");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     handleSearch(); // Load initial mentors
//   }, []);

//   return (
//     <div>
//       {/* <Header {...props} /> */}

//       <HomeFiveHeader />


//       {/* Breadcrumb */}
//       {/* <div className="breadcrumb-bar-two">
//         <div className="container-fluid">
//           <div className="row align-items-start inner-banner">
//             <div className="col-md-12 col-12 text-start">
//               <nav aria-label="breadcrumb" className="page-breadcrumb">
//                 <ol className="breadcrumb">
//                   <li className="breadcrumb-item">
//                     <Link to="/index">Home</Link>
//                   </li>
//                   <li className="breadcrumb-item" aria-current="page">
//                     Search
//                   </li>
//                 </ol>
//               </nav>
//               <h2 className="breadcrumb-title">2245 matches found for : Mentors In INDIA</h2>
//             </div>
//           </div>
//         </div>
//       </div> */}
//       {/* /Breadcrumb */}


//       <div className="content">
//         <div className="container-fluid">
//           <div className="row">

//             <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
//               <StickyBox offsetTop={20} offsetBottom={20}>
//                 {/* Search Filter */}
//                 <div className="card search-filter">
//                   <div className="card-header">
//                     <h4 className="card-title mb-0">FILTERS</h4>
//                   </div>
//                   <div className="card-body">


//                     <div className="filter-widget">
//                       <h4>Country</h4>
//                       <select
//                         className="form-control"
//                         value={filters.country}
//                         onChange={(e) => {
//                           const value = e.target.value;
//                           const newFilters = { ...filters, country: value };
//                           setFilters(newFilters);
//                           handleSearch(newFilters); // auto trigger search
//                         }}
//                       >
//                         <option value="">Select</option>
//                         <option value="India">India</option>
//                         <option value="USA">USA</option>
//                         <option value="UK">UK</option>
//                         <option value="Germany">Germany</option>
//                         <option value="Canada">Canada</option>
//                       </select>
//                     </div>




//                     <div className="filter-widget">
//                       <h4>College</h4>
//                       <select
//                         className="form-control"
//                         value={filters.college}
//                         onChange={(e) =>
//                           setFilters((prev) => ({ ...prev, college: e.target.value }))
//                         }
//                       >
//                         <option value="">Select</option>
//                         <option value="Harvard University">Harvard University</option>
//                         <option value="Stanford University">Stanford University</option>
//                         <option value="MIT">MIT</option>
//                         <option value="University of Oxford">University of Oxford</option>
//                         <option value="University of Cambridge">University of Cambridge</option>
//                       </select>
//                     </div>








//                     {/* <div className="filter-widget">
//                       <h4>Availablity</h4>
//                       <div className="cal-icon"> */}

//                         {/* <input
//                           type="text"
//                           className="form-control datetimepicker"
//                           placeholder="Select Date"
//                         /> */}

//                         {/* <DatePicker
//                           className="form-control datetimepicker"
//                           selected={selectedDate}
//                           onChange={handleDateChange}
//                           placeholderText="Select Date"
//                         />
//                       </div>
//                     </div>
//                      */}
//                     {/* <div className="filter-widget">

//                       <h4>Gender</h4>
//                       <div>
//                         <label className="custom_check">
//                           <input
//                             type="checkbox"
//                             name="gender_type"
//                             defaultChecked=""
//                           />
//                           <span className="checkmark" /> Male
//                         </label>
//                       </div>

//                       <div>
//                         <label className="custom_check">
//                           <input type="checkbox" name="gender_type" />
//                           <span className="checkmark" /> Female
//                         </label>
//                       </div>
//                     </div> */}

//                     <div className="filter-widget">
//                       <h4>Course</h4>
//                       <div>
//                         <label className="custom_check">
//                           <input
//                             type="checkbox"
//                             name="select_specialist"
//                             defaultChecked=""
//                           />
//                           <span className="checkmark" /> Bachelors
//                         </label>
//                       </div>
//                       <div>
//                         <label className="custom_check">
//                           <input
//                             type="checkbox"
//                             name="select_specialist"
//                             defaultChecked=""
//                           />
//                           <span className="checkmark" /> Masters
//                         </label>
//                       </div>
//                       <div>
//                         <label className="custom_check">
//                           <input type="checkbox" name="select_specialist" />
//                           <span className="checkmark" /> Phd
//                         </label>
//                       </div>

//                       {/*                       
//                       <div>
//                         <label className="custom_check">
//                           <input type="checkbox" name="select_specialist" />
//                           <span className="checkmark" /> ASP.NET,Computer Gaming
//                         </label>
//                       </div>
//                       <div>
//                         <label className="custom_check">
//                           <input type="checkbox" name="select_specialist" />
//                           <span className="checkmark" /> HTML,CSS
//                         </label>
//                       </div>
//                       <div>
//                         <label className="custom_check">
//                           <input type="checkbox" name="select_specialist" />
//                           <span className="checkmark" /> VB,VB.NET
//                         </label>
//                       </div> */}


//                     </div>


//                     <div className="btn-search">
//                       <button type="button" className="btn w-100">
//                         Search
//                       </button>
//                     </div>

//                   </div>
//                 </div>
//                 {/* /Search Filter */}
//               </StickyBox>
//             </div>

//             {/* Mentor Results Section */}
//             {/* <div className="col-md-12 col-lg-8 col-xl-9">
//               <SearchList />
//               <div className="load-more text-center">
//                 <Link to="#" className="btn btn-primary btn-sm">
//                   Load More
//                 </Link>
//               </div>
//             </div> */}

//             <div className="col-md-12 col-lg-8 col-xl-9">
//               {loading ? (
//                 <p>Loading mentors...</p>
//               ) : error ? (
//                 <p className="text-danger">{error}</p>
//               ) : mentors.length === 0 ? (
//                 <p>No mentors found.</p>
//               ) : (
//                 <>
//                   <SearchList mentors={mentors} />
//                   <div className="load-more text-center">
//                     <Link to="#" className="btn btn-primary btn-sm">
//                       Load More
//                     </Link>
//                   </div>
//                 </>
//               )}
//             </div>


//           </div>
//         </div>
//       </div >
//       {/* <Footer {...props} /> */}
//       < HomeFiveFooter />

//     </div >
//   );
// };

// export default SearchMentor;







import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchList from "./searchList";
import StickyBox from "react-sticky-box";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import HomeFiveFooter from "../../home/home-five/footer";
import HomeFiveHeader from "../../home/home-five/header";

import countriesData from "../../register/countries.json";
import collegesData from "../../register/universities.json";


const SearchMentor = () => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({
    country: "",
    college: "",
    gender: "",
    course: [],
    degree: [],
    date: null,
  });

  const [countries, setCountries] = useState([]);
  const [allColleges, setAllColleges] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);

  // ✅ Load JSON data into state once
  useEffect(() => {
    setCountries(countriesData);
    setAllColleges(collegesData);
  }, []);


  const handleSearch = async (customFilters = filters) => {
    try {
      setLoading(true);
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/mentors/`, {
        params: {
          country: customFilters.country,
          college: customFilters.college,
          gender: customFilters.gender,
          degree: customFilters.degree.join(","),
          course: customFilters.course.join(","),
          date: customFilters.date
            ? customFilters.date.toISOString().split("T")[0]
            : "",
        },
      });
      setMentors(response.data);
    } catch (err) {
      setError("Failed to load mentors.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch(); // Load initial mentors
  }, []);

  // Update college list on country change
  useEffect(() => {
    if (filters.country) {
      const matched = allColleges.filter(
        (college) => college.country === filters.country
      );
      setFilteredColleges(matched);
    } else {
      setFilteredColleges([]);
    }
  }, [filters.country, allColleges]);


  const toggleDegree = (degree) => {
    const updated = filters.degree.includes(degree)
      ? filters.degree.filter((d) => d !== degree)
      : [...filters.degree, degree];
    const newFilters = { ...filters, degree: updated };
    setFilters(newFilters);
    handleSearch(newFilters);
  };



  return (
    <div>
      <HomeFiveHeader />

      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <div className="card search-filter">
                  <div className="card-header">
                    <h4 className="card-title mb-0">FILTERS</h4>
                  </div>
                  <div className="card-body">
                    <div className="filter-widget">
                      <h4>Country</h4>
                      <select
                        className="form-control"
                        value={filters.country}
                        onChange={(e) => {
                          const newFilters = { ...filters, country: e.target.value };
                          setFilters(newFilters);
                          handleSearch(newFilters);
                        }}
                      >
                        <option value="">Select</option>
                        {countries.map((c) => (
                          <option key={c.value} value={c.label}>
                            {c.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="filter-widget">
                      <h4>College</h4>
                      <select
                        className="form-control"
                        value={filters.college}
                        onChange={(e) => {
                          const newFilters = {
                            ...filters,
                            college: e.target.value,
                          };
                          setFilters(newFilters);
                          handleSearch(newFilters);
                        }}
                        disabled={!filteredColleges.length}
                      >
                        <option value="">Select</option>
                        {filteredColleges.map((college, idx) => (
                          <option key={idx} value={college.name}>
                            {college.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="filter-widget">
                      <h4>Degree</h4>
                      <div>
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            checked={filters.degree.includes("PhD")}
                            onChange={() => toggleDegree("PhD")}
                          />
                          <span className="checkmark" /> PhD
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            checked={filters.degree.includes("Masters")}
                            onChange={() => toggleDegree("Masters")}
                          />
                          <span className="checkmark" /> Masters
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            checked={filters.degree.includes("Bachelors")}
                            onChange={() => toggleDegree("Bachelors")}
                          />
                          <span className="checkmark" /> Bachelors
                        </label>
                      </div>
                    </div>

                    {/* <div className="filter-widget">
                      <h4>Availability</h4>
                      <div className="cal-icon">
                        <DatePicker
                          className="form-control datetimepicker"
                          selected={filters.date}
                          onChange={(date) => {
                            const newFilters = { ...filters, date };
                            setFilters(newFilters);
                            handleSearch(newFilters);
                          }}
                          placeholderText="Select Date"
                        />
                      </div>
                    </div> */}
                  </div>
                </div>
              </StickyBox>
            </div>

            <div className="col-md-12 col-lg-8 col-xl-9">
              {loading ? (
                <p>Loading mentors...</p>
              ) : error ? (
                <p>{error}</p>
              ) : (
                <SearchList mentors={mentors} />
              )}
              <div className="load-more text-center">

                {/* <button className="btn btn-primary btn-sm" onClick={() => handleSearch()}>
                  Load More
                </button> */}


              </div>
            </div>
          </div>
        </div>
      </div>

      <HomeFiveFooter />
    </div>
  );
};

export default SearchMentor;

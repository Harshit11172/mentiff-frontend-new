
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import SearchList from "./searchList";
// import StickyBox from "react-sticky-box";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import HomeFiveFooter from "../../home/home-five/footer";
// import HomeFiveHeader from "../../home/home-five/header";

// import countriesData from "../../register/countries.json";
// import collegesData from "../../register/universities.json";


// const SearchMentor = () => {
//   const [mentors, setMentors] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [filters, setFilters] = useState({
//     country: "",
//     college: "",
//     // gender: "",
//     course: [],
//     degree: [],
//     date: null,
//   });

//   const [countries, setCountries] = useState([]);
//   const [allColleges, setAllColleges] = useState([]);
//   const [filteredColleges, setFilteredColleges] = useState([]);

//   // ✅ Load JSON data into state once
//   useEffect(() => {
//     setCountries(countriesData);
//     setAllColleges(collegesData);
//   }, []);


//   const handleSearch = async (customFilters = filters) => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/mentors/`, {
//         params: {
//           country: customFilters.country,
//           college: customFilters.college,
//           // gender: customFilters.gender,
//           degree: customFilters.degree.join(","),
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

//   // Update college list on country change
//   useEffect(() => {
//     if (filters.country) {
//       const matched = allColleges.filter(
//         (college) => college.country === filters.country
//       );
//       setFilteredColleges(matched);
//     } else {
//       setFilteredColleges([]);
//     }
//   }, [filters.country, allColleges]);


//   const toggleDegree = (degree) => {
//     const updated = filters.degree.includes(degree)
//       ? filters.degree.filter((d) => d !== degree)
//       : [...filters.degree, degree];
//     const newFilters = { ...filters, degree: updated };
//     setFilters(newFilters);
//     handleSearch(newFilters);
//   };



//   return (
//     <div>
//       <HomeFiveHeader />

//       <div className="content">
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
//               <StickyBox offsetTop={20} offsetBottom={20}>
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
//                           const newFilters = { ...filters, country: e.target.value };
//                           setFilters(newFilters);
//                           handleSearch(newFilters);
//                         }}
//                       >
//                         <option value="">Select</option>
//                         {countries.map((c) => (
//                           <option key={c.value} value={c.label}>
//                             {c.label}
//                           </option>
//                         ))}
//                       </select>
//                     </div>

//                     <div className="filter-widget">
//                       <h4>College</h4>
//                       <select
//                         className="form-control"
//                         value={filters.college}
//                         onChange={(e) => {
//                           const newFilters = {
//                             ...filters,
//                             college: e.target.value,
//                           };
//                           setFilters(newFilters);
//                           handleSearch(newFilters);
//                         }}
//                         disabled={!filteredColleges.length}
//                       >
//                         <option value="">Select</option>
//                         {filteredColleges.map((college, idx) => (
//                           <option key={idx} value={college.name}>
//                             {college.name}
//                           </option>
//                         ))}
//                       </select>
//                     </div>

//                     <div className="filter-widget">
//                       <h4>Degree</h4>
//                       <div>
//                         <label className="custom_check">
//                           <input
//                             type="checkbox"
//                             checked={filters.degree.includes("PhD")}
//                             onChange={() => toggleDegree("PhD")}
//                           />
//                           <span className="checkmark" /> PhD
//                         </label>
//                       </div>
//                       <div>
//                         <label className="custom_check">
//                           <input
//                             type="checkbox"
//                             checked={filters.degree.includes("Masters")}
//                             onChange={() => toggleDegree("Masters")}
//                           />
//                           <span className="checkmark" /> Masters
//                         </label>
//                       </div>
//                       <div>
//                         <label className="custom_check">
//                           <input
//                             type="checkbox"
//                             checked={filters.degree.includes("Bachelors")}
//                             onChange={() => toggleDegree("Bachelors")}
//                           />
//                           <span className="checkmark" /> Bachelors
//                         </label>
//                       </div>
//                     </div>

//                     {/* <div className="filter-widget">
//                       <h4>Availability</h4>
//                       <div className="cal-icon">
//                         <DatePicker
//                           className="form-control datetimepicker"
//                           selected={filters.date}
//                           onChange={(date) => {
//                             const newFilters = { ...filters, date };
//                             setFilters(newFilters);
//                             handleSearch(newFilters);
//                           }}
//                           placeholderText="Select Date"
//                         />
//                       </div>
//                     </div> */}
//                   </div>
//                 </div>
//               </StickyBox>
//             </div>

//             <div className="col-md-12 col-lg-8 col-xl-9">
//               {loading ? (
//                 <p>Loading mentors...</p>
//               ) : error ? (
//                 <p>{error}</p>
//               ) : (
//                 <SearchList mentors={mentors} />
//               )}
//               <div className="load-more text-center">

//                 {/* <button className="btn btn-primary btn-sm" onClick={() => handleSearch()}>
//                   Load More
//                 </button> */}


//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <HomeFiveFooter />
//     </div>
//   );
// };

// export default SearchMentor;



/* eslint-disable no-unused-vars */
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

// ✅ Define default filters outside the component to reuse
const defaultFilters = {
  country: "",
  college: "",
  course: [],
  degree: [],
  date: null,
};

const SearchMentor = () => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState(defaultFilters);

  const [countries, setCountries] = useState([]);
  const [allColleges, setAllColleges] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);

  useEffect(() => {
    setCountries(countriesData);
    setAllColleges(collegesData);
  }, []);

  const handleSearch = async (customFilters = filters) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/mentors/`,
        {
          params: {
            country: customFilters.country,
            college: customFilters.college,
            degree: customFilters.degree.join(","),
            course: customFilters.course.join(","),
            date: customFilters.date
              ? customFilters.date.toISOString().split("T")[0]
              : "",
          },
        }
      );
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

  useEffect(() => {
    if (filters.country) {
      const matched = allColleges.filter(
        (college) => college.country === filters.country && college.domain !== ""
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

  // ✅ Clear all filters
  const handleClearAll = () => {
    setFilters(defaultFilters);
    setFilteredColleges([]);
    handleSearch(defaultFilters);
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
                    {/* Country Filter */}
                    <div className="filter-widget">
                      <h4>Country</h4>
                      <select
                        className="form-control"
                        value={filters.country}
                        onChange={(e) => {
                          const newFilters = {
                            ...filters,
                            country: e.target.value,
                            college: "", // reset college when country changes
                          };
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

                    {/* College Filter */}
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

                    {/* Degree Filter */}
                    <div className="filter-widget">
                      <h4>Degree</h4>
                      {["PhD", "Masters", "Bachelors"].map((deg) => (
                        <div key={deg}>
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              checked={filters.degree.includes(deg)}
                              onChange={() => toggleDegree(deg)}
                            />
                            <span className="checkmark" /> {deg}
                          </label>
                        </div>
                      ))}
                    </div>

                    {/* Clear All Button */}
                    <div className="text-center mt-3">
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={handleClearAll}
                      >
                        Clear All
                      </button>
                    </div>
                  </div>
                </div>
              </StickyBox>
            </div>

            {/* Mentor List */}
            <div className="col-md-12 col-lg-8 col-xl-9">
              {loading ? (
                <p>Loading mentors...</p>
              ) : error ? (
                <p>{error}</p>
              ) : (
                <SearchList mentors={mentors} />
              )}
            </div>
          </div>
        </div>
      </div>

      <HomeFiveFooter />
    </div>
  );
};

export default SearchMentor;

import React, { useEffect, useState } from "react";

import HomeFiveHeader from "./header";

import Header from "../../header";

import HomeFiveFooter from "./footer";
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CountUp from 'react-countup';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import FAQs from "./faqs";

const HomeFive = ({ isLoggedIn, user }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  console.log("API base URL:", process.env.REACT_APP_API_BASE_URL_BACKEND);

  const history = useHistory();

  const handleClick = (group) => {

    console.log("inside handleclick")

    console.log(`/mentor/chat-mentor/${group.id}`);

    isLoggedIn = isAuthenticated

    console.log(isLoggedIn)

    if (isLoggedIn == false) {
      console.log("In check false condition when clicked")
      localStorage.setItem('redirectAfterLogin', `/mentor/chat-mentor/`);
      console.log(`${group.id}`)
      localStorage.setItem('groupId', `${group.id}`);

      localStorage.setItem('prevPage', window.location.pathname);

      // Redirect to the login page
      history.push('/login/');
    }
    else {
      console.log("User clicked on the groups button but is logged in")
      localStorage.setItem('redirectAfterLogin', `/mentor/chat-mentor/`);
      localStorage.setItem('groupId', `${group.id}`);
      console.log("groupId set in localStorage")
      console.log(`${group.id}`)
      // Redirect to the chat mentor page
      history.push('/mentor/chat-mentor/');
    }
  };

  const [groups, setGroups] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('What We Offer');
  const icons = [
    "assets/img/icon/course-cat-01.svg",
    "assets/img/icon/course-cat-02.svg",
    "assets/img/icon/course-cat-03.svg",
    "assets/img/icon/course-cat-04.svg",
    "assets/img/icon/course-cat-05.svg"
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    const token = localStorage.getItem('authToken'); // Check local storage for auth token
    const userDataString = localStorage.getItem('userData');
    console.log("User data in index-5?", userDataString);

    if (token) {
      setIsAuthenticated(true); // Update state if token exists
      isLoggedIn = isAuthenticated
      console.log("isAuthenticated set in isLoggedIn as: ")
      console.log(isLoggedIn)
    }
    else {
      console.log("Token not found. User is logged out intially")

      isLoggedIn = isAuthenticated
      console.log("isAuthenticated set in isLoggedIn as: ")
      console.log(isLoggedIn)
    }



    const fetchData = async () => {
      try {
        const endpoints = [
          `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/universities/groups/`,
          `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/mentors/`,
        ];
        const responses = await axios.all(endpoints.map(endpoint => axios.get(endpoint)));
        console.log("API base URL:", process.env.REACT_APP_API_BASE_URL_BACKEND);

        setGroups(responses[0].data); // First API response
        setMentors(responses[1].data); // Second API response

        console.log('API Response Groups:', responses[0].data);
        console.log('API Response Mentors:', responses[1].data);

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [loading]);

  const trendCourseTabSlider = {
    loop: true,
    margin: 24,
    dots: true,
    nav: false,
    smartSpeed: 1000,
    dotsSpeed: 500,
    dragEndSpeed: 1000,
    responsive: {
      0: {
        items: 1,

      },
      500: {
        items: 1,

      },
      768: {
        items: 2,

      },
      1000: {
        items: 3,

      },
      1300: {
        items: 3,

      }
    }
  };
  const instructorSlider = {
    loop: true,
    margin: 24,
    dots: true,
    nav: true,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    smartSpeed: 1000,
    dotsSpeed: 500,
    dragEndSpeed: 1000,
    responsive: {
      0: {
        items: 1,

      },
      500: {
        items: 1,

      },
      768: {
        items: 2,

      },
      1000: {
        items: 3,

      },
      1300: {
        items: 4,

      }
    }
  };
  const studentprofile = {
    margin: 24,
    dots: false,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1170: {
        items: 3
      }
    }
  };


  return (
    <div className="main-wrapper main-wrapper-five">
      <>
        <HomeFiveHeader />



        {/* <Header {...props} /> */}
        {/* <Header isLoggedIn={isLoggedIn} user={user} /> */}

        {/* <Header /> */}

        {/* Home Banner */}
        <section className="home-slide home-slide-five six-slide-search d-flex align-items-center">
          {/* 
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
          src="/bgvideo/3125427-uhd_3840_2160_25fps.mp4"
          type="video/mp4"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)',
            zIndex: 0
          }}
        /> */}
          <div className="container">
            {/* <div className="container" style={{ backgroundColor: 'rgba(123, 232, 255, 0.8)', padding: '20px', borderRadius: '8px' }}> */}
            <div className="row align-items-center">

              <div className="col-lg-5 d-flex align-items-center">
                <div className="home-slide-face aos" data-aos="fade-up">
                  <div className="home-slide-text ">
                    <h4>
                      { }
                      <span /> Taking College Admission?
                    </h4>
                    {/* <h1>Figure out your ifs and buts with Mentiff</h1> */}
                    <h1>Know more about your dream college</h1>

                    <p>Connect one to one with seniors of your dream college</p>
                  </div>
                  
                  {/* <div className="banner-five-btns">
                    <Link to="/login">Login</Link>
                    <Link to="">
                      <span>
                        <i className="fas fa-play" />
                      </span>{" "}
                      Why Mentiff?
                    </Link>
                  </div> */}
                  
                  {/* Search */}
                  <div className="search-box">
                    <form action="/mentee/search-mentor">
                      <div className="form-group search-info location-search">
                        <input
                          type="text"
                          className="form-control text-truncate"
                          placeholder="Type university name..."
                        />
                        <Link
                          to="/mentee/search-mentor"
                          className="btn bg-search search-btn align-items-center d-flex justify-content-center"
                        >
                          <ImageWithBasePath
                            src="assets/img/icon/search-white-icon.svg"
                            alt=""
                          />
                        </Link>
                      </div>
                    </form>
                  </div>
                  {/* /Search */}
                  <div className="pop-search">
                    <p>
                      <span>Search Mentors by Colleges:</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 d-flex align-items-end">
                <div className="girl-slide-img aos " data-aos="fade-up">
                  <ImageWithBasePath
                    src="assets/img/object-6.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              
              <div className="col-lg-2">
                <div className="banner-six-counter">
                  <div className="counter-box">
                    <h5>
                      <CountUp className="counterUp" end={200} duration={2} />+
                    </h5>
                    <h4>Listed Colleges</h4>
                  </div>
                  <div className="counter-box">
                    <h5>
                      <CountUp className="counterUp" end={17} duration={2} />k+
                    </h5>
                    <h4>Mentors</h4>
                  </div>
                  <div className="counter-box">
                    <h5>
                      <CountUp className="counterUp" end={15} duration={2} />k+
                    </h5>
                    <h4>Users Registered</h4>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </section>

        <section className="most-popular most-popular-five">
          <div className="container">
            <div
              className="section-header section-head-left aos "
              data-aos="fade-up"
            >
              <div className="section-head-five">
                <h4>
                  <span />
                  Categories
                </h4>
                <h2>Enter Student Community Chat Groups</h2>
              </div>
              <div className="view-all ">
                <Link to="/mentee/mentee-bookings">View All Groups</Link>
              </div>
            </div>
            <div className="popular-categories aos" data-aos="fade-up" >
              <div className="row" >
                {groups.length > 0 ? (
                  groups.slice(0, 8).map((group, index) => (
                    <div className="col-lg-3 col-md-6" key={group.id}>
                      <button
                        onClick={() => handleClick(group)} // Call the handleClick function
                        className="sub-categories-five" // Keep the same styles
                        style={{ backgroundColor: '' }} // If you want to maintain styles, you can keep this
                      >
                        <div className="categories-five-img">
                          <span>
                            <ImageWithBasePath
                              src={icons[index % icons.length]} // Change icon based on index
                              alt=""
                            />
                          </span>
                          <span className="cat-rat">Members: {group.member_count}</span>
                        </div>
                        <div className="categories-text" style={{ textAlign: 'left' }}> {/* Align text to the left */}
                          <h4 style={{ margin: 0 }}>{group.group_name}</h4> {/* Remove margin for better alignment */}
                          <h5 style={{ margin: 0 }}>
                            <span>{group.college}</span>
                          </h5>
                        </div>
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="col-12">
                    <p>No groups available at the moment.</p>
                  </div>
                )}

              </div>
            </div>
          </div>
        </section>

        <section className="featured-instructor featured-instructor-three featured-instructor-three">
          <div className="container">
            <div
              className="section-header section-head-left aos d-block"
              data-aos="fade-up"
            >
              <div className="section-head-five section-head-five-two">
                <div>
                  <h4>
                    <span />
                    Meet Our
                  </h4>
                  <h2>Newly joined Mentors</h2>
                </div>

                <div className="sec-para owl-custom-nav">
                  <p>
                    Book 1:1 Session Now! <br />
                    The only platform that onboard verified and authenticated mentors.
                  </p>
                  {/* <div className="view-all ">
                    <Link to="/mentee/mentee-bookings">View All Mentors</Link>
                  </div> */}

                  <div className="owl-navigation">

                    <div className="owl-nav mynav1 nav-control" />
                  </div>

                </div>

              </div>

            </div>


            <div className="featured-instructor-head aos" data-aos="fade-up"   >
              <div className="row">
                <div className="col-md-12">
                  <div className="instructor-slider-two" >
                    <OwlCarousel {...instructorSlider}>
                      {mentors.map((mentor) => (
                        <div className="large-team" key={mentor.id}>
                          <div className="student-img">
                            <Link to={`/mentee/mentor-profile/${mentor.user.id}`}>
                              <img
                                src={mentor.profile_picture}
                                alt={`${mentor.user.first_name} ${mentor.user.last_name}`}
                              />
                            </Link>
                          </div>
                          <div className="team-content">
                            <h4>
                              <Link to={`/mentee/mentor-profile/${mentor.user.id}`}>
                                {mentor.user.first_name} {mentor.user.last_name}
                              </Link>
                              <i className="fas fa-check-double" />
                            </h4>
                            <span className="star-rate">
                              {/* Display rating as stars */}
                              {[...Array(5)].map((_, index) => (
                                <i
                                  key={index}
                                  className={`fas fa-star ${index < Math.round(mentor.rating) ? 'filled' : ''}`}
                                />
                              ))}
                              {mentor.rating.toFixed(1)} {/* Display the rating */}
                            </span>
                            <div className="view-student-three">
                              <ul className="view-student-three-list justify-content-between">
                                <li style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                  {/* <img
                                    src="assets/img/icon/location-02.svg"
                                    className="me-2"
                                    alt=""
                                  /> */}
                                  {/* Display location or university if available */}
                                  {mentor.university || ' '}
                                </li>

                                <li style={{ backgroundColor: '#f0f0f0', padding: '8px', borderRadius: '5px' }}>
                                  <div className="view-all ">
                                    <Link to="/mentee/search-mentor">Book a Call</Link>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </OwlCarousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-four-sec faq-five-sec" style={{ backgroundColor: '' }}>
          <div className="container">
            <div className="faq-sec-five">
              <div className="section-header section-head-left aos" data-aos="fade-up">
                <div className="section-head-five">
                  <h4><span />Have many questions?</h4>
                  <h2>Frequently asked questions</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2">
                  <ul className="nav nav-pills pills-five" id="pills-tab-two" role="tablist">
                    {Object.keys(FAQs).map((category) => (
                      <li className="nav-item" role="presentation" key={category}>
                        <button
                          className={`nav-link ${activeTab === category ? 'active' : ''}`}
                          id={`pills-${category.toLowerCase().replace(/\s+/g, '-')}-tab`}
                          data-bs-toggle="pill"
                          data-bs-target={`#pills-${category.toLowerCase().replace(/\s+/g, '-')}`}
                          type="button"
                          role="tab"
                          aria-controls={`pills-${category.toLowerCase().replace(/\s+/g, '-')}`}
                          aria-selected={activeTab === category}
                          onClick={() => setActiveTab(category)} // Set the active tab on click
                        >
                          {category}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-lg-10">
                  <div className="tab-content" id="pills-tabContent-two">
                    {Object.keys(FAQs).map((category) => (
                      <div
                        className={`tab-pane fade ${activeTab === category ? 'active show' : ''}`}
                        id={`pills-${category.toLowerCase().replace(/\s+/g, '-')}`}
                        role="tabpanel"
                        aria-labelledby={`pills-${category.toLowerCase().replace(/\s+/g, '-')}-tab`}
                        key={category}
                      >
                        <div className="row">
                          <div className="col-md-12">
                            <div className="faq-card">
                              <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                {Object.keys(FAQs[category]).map((key) => (
                                  <div className="faq-tab" key={FAQs[category][key].id}>
                                    <div className="panel panel-default">
                                      <div className="panel-heading" role="tab" id={`heading-${key}`}>
                                        <p className="panel-title">
                                          <Link
                                            className="collapsed"
                                            data-bs-toggle="collapse"
                                            data-bs-parent="#accordion"
                                            to={`#collapse-${key}`}
                                            aria-expanded="false"
                                            aria-controls={`collapse-${key}`}
                                          >
                                            {FAQs[category][key].question}
                                          </Link>
                                        </p>
                                      </div>
                                      <div
                                        id={`collapse-${key}`}
                                        className="panel-collapse collapse"
                                        role="tabpanel"
                                        aria-labelledby={`heading-${key}`}
                                        data-bs-parent="#accordion"
                                      >
                                        <p>
                                          {FAQs[category][key].answer}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Faq */}
      </>
      {/* <HomeFiveFooter /> */}
    </div>
  );
};

export default HomeFive;

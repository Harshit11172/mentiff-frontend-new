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
          `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/universities/groups/top/`,
          `${process.env.REACT_APP_API_BASE_URL_BACKEND}/api/users/mentors/top/`,
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

        {/* <section className="home-slide home-slide-five six-slide-search d-flex align-items-center">
          <div className="container">
            <div className="row align-items-center">

              <div className="col-lg-5 d-flex align-items-center">
                <div className="home-slide-face aos" data-aos="fade-up">
                  
                  <div className="home-slide-text ">
                    <h4>
                      { }
                      <span /> Taking College Admission?
                    </h4>
                  

                    <h1 style={{ fontSize: '30px' }}>
                    Know more about your dream college 🎓 
                  </h1>
                      
                  
                    <p>Connect one to one with seniors of your dream college!</p>
                  </div>
                   */}
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
        {/* <div className="search-box">
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
                  </div> */}
        {/* /Search */}

        {/* <div className="pop-search">
                    <p>
                      <span>Search Mentors by University</span>
                    </p>
                  </div> */}

        {/* </div>
              </div> */}

        {/* <div className="col-lg-5 d-flex align-items-end">
                <div className="girl-slide-img aos " data-aos="fade-up">
                  <ImageWithBasePath
                    src="assets/img/object-6.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div> */}

        {/* <div className="col-lg-2">
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
                    <h4>Users</h4>
                  </div>
                </div>
              </div> */}

        {/* </div>
          </div>
        </section> */}

        <section className="home-slide home-slide-five six-slide-search d-flex align-items-center">
          <div className="container">
            <div className="row align-items-center">

              {/* Left Text Column */}
              <div className="col-lg-6 d-flex align-items-center">
                <div className="home-slide-face aos" data-aos="fade-up">
                  <div className="home-slide-text">
                    <h4 className="text-primary fw-bold">
                      🎓 Confused About College Choices?
                    </h4>

                    <h1 className="mt-2" style={{ fontSize: '32px', fontWeight: '600' }}>
                      Talk Directly to Students Who've Been There.
                    </h1>

                    <p className="mt-3" style={{ fontSize: '18px', color: '#555' }}>
                      Get real insights from seniors of your dream college. 
                      
                      Understand placements, campus life, and what truly matters — straight from someone who knows.
                    </p>

                    <div className="mt-4">
                      <Link to="/mentee/search-mentor" className="btn btn-primary me-3">
                        Find a Mentor
                      </Link>
                      {/* <Link to="/why-mentiff" className="btn btn-outline-secondary">
                        Why Mentiff?
                      </Link> */}
                      <a href="#faq" className="btn btn-outline-secondary">
                        Why Mentiff?
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image Column */}
              <div className="col-lg-6 d-flex justify-content-center">
                <div className="girl-slide-img aos" data-aos="fade-up">
                  <ImageWithBasePath
                    src="assets/img/object-6.png"
                    className="img-fluid"
                    alt="Mentor Illustration"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* 
  <section className="most-popular most-popular-five">
    <div className="container">
      <div
        className="section-header section-head-left aos "
        data-aos="fade-up"
      >
        <div className="section-head-five">
          <h4>
            <span />
            Chat Groups
          </h4>
          <h2>Enter Student Community Chat Groups</h2>
        </div>
        <div className="view-all ">
          <Link to="/univ/universities">View All Groups</Link>
        </div>
      </div>
      <div className="popular-categories aos" data-aos="fade-up" >
        <div className="row" >
          {groups.length > 0 ? (
            groups.slice(0, 8).map((group, index) => (
              <div className="col-lg-3 col-md-6" key={group.id}>
                <button
                  onClick={() => handleClick(group)} 
                  className="sub-categories-five" 
                  style={{ backgroundColor: '' }} 
                >
                  <div className="categories-five-img">
                    <span>
                      <ImageWithBasePath
                        src={icons[index % icons.length]} 
                        alt=""
                      />
                    </span>
                    <span className="cat-rat">Members: {group.member_count}</span>
                  </div>
                  <div className="categories-text" style={{ textAlign: 'left' }}> 
                    <h4 style={{ margin: 0 }}>{group.group_name}</h4> 
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
  </section> */}




        <section className="most-popular most-popular-five">
          <div className="container">
            {/* Section Header */}
            <div className="section-header section-head-left aos" data-aos="fade-up">
              <div className="section-head-five row align-items-center w-100">
                <div className="col-md-8 col-sm-12">
                  <h4>
                    <span />
                    Chat Groups
                  </h4>
                  <h2>Top Student Community Chat Groups</h2>
                </div>
                <div className="col-md-4 col-sm-12 text-md-end text-start mt-3 mt-md-0">
                  <div className="view-all">
                    <Link to="/univ/universities">View All</Link>
                    {/* /mentee/mentee-bookings was replaced by /univ/universities */}
                  </div>
                </div>
              </div>
            </div>


            {/* Group Cards Grid */}
            <div className="popular-categories aos" data-aos="fade-up">
              <div className="row g-4"> {/* g-4 adds spacing between columns and rows */}
                {groups.length > 0 ? (
                  groups.slice(0, 8).map((group, index) => (
                    <div className="col-lg-3 col-md-6" key={group.id}>
                      <div
                        onClick={() => handleClick(group)}
                        className="sub-categories-five p-3 h-100 d-flex flex-column justify-content-between"
                        style={{ borderRadius: '8px', cursor: 'pointer' }}
                      >
                        {/* Top Image/Badge Area */}
                        <div className="categories-five-img mb-2">
                          <span>
                            <ImageWithBasePath
                              src={icons[index % icons.length]}
                              alt=""
                              style={{ width: '40px', height: '40px' }}
                            />
                          </span>
                          {/* <span className="cat-rat"> Members: {group.member_count} </span> */}

                          {/* <span className="cat-rat"> {group.member_count} </span> */}
                        </div>

                        {/* Text Content */}
                        <div className="categories-text text-start">
                          {/* Group Name */}
                          <h4
                            className="mb-1"
                            title={group.group_name}
                            style={{
                              fontSize: '1.05rem',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            {group.group_name}
                          </h4>

                          {/* College Name */}
                          <h5
                            title={group.college}
                            style={{
                              margin: 0,
                              fontSize: '0.9rem',
                              color: '#777',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            {group.college}
                          </h5>
                        </div>
                      </div>
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








        <section className="mentors-modern-section py-5 bg-white">
          <div className="container">
            {/* Header */}

            {/* <div className="section-header section-head-left aos mb-4" data-aos="fade-up">
      <div className="section-head-five d-flex justify-content-between align-items-center flex-wrap w-100">
        <div>
          <h4><span />Mentors</h4>
          <h2>Newly Joined Mentors</h2>
        </div>
        <p>
          Book 1:1 Session Now! <br />
          The only platform that onboard verified and authenticated mentors.
        </p>
        <div className="view-all">
          <Link to="/mentee/search-mentor">View All Mentors</Link>
        </div>
      </div>  
    </div> */}

            <div className="section-header section-head-left aos" data-aos="fade-up">
              <div className="section-head-five row align-items-center w-100">
                <div className="col-md-8 col-sm-12">
                  <h4>
                    <span />
                    Mentors
                  </h4>
                  <h2>Top Authenticated Mentors</h2>
                </div>

                <div className="col-md-4 col-sm-12 text-md-end text-start mt-3 mt-md-0">
                  <div className="view-all">
                    <Link to="/mentee/search-mentor">View All</Link>
                  </div>
                </div>
              </div>
            </div>


            {/* Mentor Grid */}
            <div className="row gy-4" data-aos="fade-up">
              {mentors.length > 0 ? (
                mentors.slice(0, 4).map((mentor) => (
                  <div className="col-lg-3 col-md-6" key={mentor.id}>
                    <div
                      className="card mentor-card border-0 shadow-sm h-100 p-3 rounded-4"
                      style={{
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
                      }}
                    >
                      {/* Avatar */}
                      <div className="text-center mb-3">
                        <img
                          src={mentor.profile_picture}
                          alt={`${mentor.user.first_name} ${mentor.user.last_name}`}
                          className="rounded-circle"
                          style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                        />
                      </div>

                      {/* Name & Rating */}
                      <div className="text-center">
                        <h4
                          className="mb-1"
                          title={`${mentor.user.first_name} ${mentor.user.last_name}`}
                          style={{
                            fontSize: '1.05rem',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {mentor.user.first_name} {mentor.user.last_name}
                        </h4>



                        {/* <h5
                  className="fw-semibold mb-1 text-truncate"
                  title={`${mentor.user.first_name} ${mentor.user.last_name}`}
                >
                  {mentor.user.first_name} {mentor.user.last_name}
                </h5> */}
                        {/* <div className="text-warning mb-2">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fas fa-star ${i < Math.round(mentor.rating) ? '' : 'text-muted'}`}
                    ></i>
                  ))}
                  <small className="text-muted ms-1">({mentor.rating.toFixed(1)})</small>
                </div> */}
                      </div>

                      {/* University with tooltip/ellipsis */}
                      <div
                        className="text-center mb-3"
                        title={mentor.university}
                      >


                        <p
                          className="text-muted m-0"
                          style={{
                            margin: 0,
                            fontSize: '0.9rem',
                            color: '#777',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {mentor.university || ' '}
                        </p>
                      </div>

                      <div
                        className="text-center mb-3"
                        title={mentor.degree}
                      >
                        <p
                          className="text-muted m-0"
                          style={{
                            margin: 0,
                            fontSize: '0.9rem',
                            color: '#777',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {mentor.degree || ' '} {mentor.major || ' '}
                        </p>
                      </div>

                      {/* Book a Call */}
                      <div className="text-center mt-auto">
                        {/* <Link
                          to="/mentee/search-mentor"
                          className="btn btn-sm btn-outline-primary rounded-pill px-3"
                        >
                          Book a Call
                        </Link> */}
                        <Link
                          to={`/mentee/mentor-profile/${mentor.id}`}
                          className="btn btn-sm btn-outline-primary rounded-pill px-3"
                        >
                          Call
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12">
                  <p>No mentors available at the moment.</p>
                </div>
              )}
            </div>
          </div>
        </section>



        {/* <section className="featured-instructor featured-instructor-three featured-instructor-three">
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
                     
                      {[...Array(5)].map((_, index) => (
                        <i
                          key={index}
                          className={`fas fa-star ${index < Math.round(mentor.rating) ? 'filled' : ''}`}
                        />
                      ))}
                      {mentor.rating.toFixed(1)}
                    </span>
                    <div className="view-student-three">
                      <ul className="view-student-three-list justify-content-between">
                        <li style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          <img
                            src="assets/img/icon/location-02.svg"
                            className="me-2"
                            alt=""
                          />
                          
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
</section> */}







        <section id="faq" className="faq-four-sec faq-five-sec" style={{ backgroundColor: '' }}>
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
      <HomeFiveFooter />
    </div>
  );
};

export default HomeFive;

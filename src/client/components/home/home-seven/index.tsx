import React, { useEffect, useState } from "react";
import HomeSevenHeader from "./header";
import HomeSevenFooter from "./footer";
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath";
import AOS from "aos";
import "aos/dist/aos.css";
import { Slider } from "antd";
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Select from "react-select";

const HomeSeven = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const [selectedState, setSelectedState] = useState(null);
  const stateOptions = [
    { value: 1, label: "Location" },
    { value: 2, label: "Japan" },
    { value: 3, label: "France" },
  ];
  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
  };
  const popularmentor= {
    loop:true,
			autoplay:true,
			margin:24,
			dots:false,
			nav:false,
			smartSpeed: 1000,
			dotsSpeed: 500,
			dragEndSpeed: 1000,
      responsive:{
				0:{
					items:1,
					
				},
				500:{
					items:2,
					
				},
				768:{
					items:3,
					
				},
				1000:{
					items:4,
					
				},
				1300:{
					items:4,
					
				}
			}
  };
  return (
    <div>
      <>
        <HomeSevenHeader />
        {/* Home Banner */}
        <section className="section section-search-eight">
          <div className="container">
            <div className="banner-wrapper-eight m-auto text-center">
              <div className="banner-header aos" data-aos="fade-up">
                <h1>
                  Search Teacher in <span>Mentoring</span> Appointment
                </h1>
                <p>
                  Discover the best Mentors &amp; institutions the city nearest
                  to you.
                </p>
              </div>
              {/* Search */}
              <div className="search-box-eight aos" data-aos="fade-up">
                <form action="/mentee/search-mentor">
                  <div className="form-search">
                    <div className="form-inner">
                      <div className="form-group search-location-eight">
                        <i className="material-icons">my_location</i>
                        
                         <Select
                               className="form-control select custom-select"
                                value={selectedState}
                                onChange={handleStateChange}
                                options={stateOptions}
                                placeholder="Select"
                              />
                      </div>
                      <div className="form-group search-info-eight">
                        <i className="material-icons">location_city</i>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search School, Online educational centers, etc"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn search-btn-eight mt-0"
                      >
                        Search <i className="fas fa-long-arrow-alt-right" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* /Search */}
            </div>
          </div>
        </section>
        {/* /Home Banner */}
        {/* Work Flow */}
        <section className="section how-it-works-section">
          <div className="container">
            <div
              className="section-header-eight text-center aos"
              data-aos="fade-up"
            >
              <span>Mentoring Flow</span>
              <h2>How does it works ?</h2>
              <p className="sub-title">
                Are you looking to join online institutions? Now it's very
                simple, Sign up with mentoring
              </p>
              <div className="sec-dots">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="row justify-content-center feature-list">
              <div className="col-12 col-md-4 col-lg-3 aos" data-aos="fade-up">
                <div className="feature-grid text-center top-box">
                  <div className="feature-header-eight">
                    <div className="feature-icon-eight">
                      <span className="circle bg-green">
                        <i className="fas fa-sign-in-alt" />
                      </span>
                    </div>
                    <div className="feature-cont">
                      <div className="feature-text-eight">Sign up</div>
                    </div>
                  </div>
                  <p>
                    Are you looking to join online Learning? Now it's very
                    simple, Now Sign up
                  </p>
                  <span className="text-green">01</span>
                </div>
              </div>
              <div
                className="col-12 col-md-4 col-lg-3 offset-lg-1 aos"
                data-aos="fade-up"
              >
                <div className="feature-grid text-center">
                  <div className="feature-header-eight">
                    <div className="feature-icon-eight">
                      <span className="circle bg-blue">
                        <i className="material-icons">accessibility</i>
                      </span>
                    </div>
                    <div className="feature-cont">
                      <div className="feature-text-eight">Collaborate</div>
                    </div>
                  </div>
                  <p>
                    Collaborate on your own timing, by scheduling with mentor
                    booking
                  </p>
                  <span className="text-blue">02</span>
                </div>
              </div>
              <div
                className="col-12 col-md-4 col-lg-3 offset-lg-1 aos"
                data-aos="fade-up"
              >
                <div className="feature-grid text-center top-box">
                  <div className="feature-header-eight">
                    <div className="feature-icon-eight">
                      <span className="circle bg-yellow">
                        <i className="material-icons">event_seat</i>
                      </span>
                    </div>
                    <div className="feature-cont">
                      <div className="feature-text-eight">
                        Improve &amp; Get Back
                      </div>
                    </div>
                  </div>
                  <p>
                    you can gather different skill set, and you can become
                    mentor too
                  </p>
                  <span className="text-yellow">03</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Work Flow */}
        {/* Popular Mendors */}
        <section className="section popular-mendors">
          <div className="mendor-title">
            <div className="section-header-eight text-center">
              <div className="container aos" data-aos="fade-up">
                <span>Mentoring Goals</span>
                <h2 className="text-white">Popular Mentors</h2>
                <p className="sub-title text-white">
                  {" "}
                  Choose your most popular leaning mentors, it will help you to
                  achieve your professional goals..
                </p>
                <div className="sec-dots">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
          <div className="mendor-list">
            <div className="container aos" data-aos="fade-up">
              <div className="mendor-slider slick">
              <OwlCarousel {...popularmentor}>
                  {/* Mentor Item */}
                  <div className="mendor-box">
                    <div className="mendor-img">
                      <Link to="/mentee/mentor-profile">
                        <ImageWithBasePath
                          className="img-fluid"
                          alt=""
                          src="assets/img/mendor/mendor-01.jpg"
                        />
                      </Link>
                      <div className="mendor-country">
                        <i className="fas fa-map-marker-alt" /> Paris, France
                      </div>
                    </div>
                    <div className="mendor-content">
                      <h3 className="title">
                        <Link to="/mentee/mentor-profile">Donna Yancey</Link>
                      </h3>
                      <div className="mendor-course">Digital Marketer</div>
                      <div className="mendor-price-list">
                        <div className="mendor-price">
                          $100 <span>/ hr</span>
                        </div>
                        <div className="mendor-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Mentor Item */}
                  {/* Mentor Item */}
                  <div className="mendor-box">
                    <div className="mendor-img">
                      <Link to="/mentee/mentor-profile">
                        <ImageWithBasePath
                          className="img-fluid"
                          alt=""
                          src="assets/img/mendor/mendor-05.jpg"
                        />
                      </Link>
                      <div className="mendor-country">
                        <i className="fas fa-map-marker-alt" /> U.S.A
                      </div>
                    </div>
                    <div className="mendor-content">
                      <h3 className="title">
                        <Link to="/mentee/mentor-profile">James Amen</Link>
                      </h3>
                      <div className="mendor-course">
                        UNIX, Calculus, Trigonometry
                      </div>
                      <div className="mendor-price-list">
                        <div className="mendor-price">
                          $500 <span>/ hr</span>
                        </div>
                        <div className="mendor-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Mentor Item */}
                  {/* Mentor Item */}
                  <div className="mendor-box">
                    <div className="mendor-img">
                      <Link to="/mentee/mentor-profile">
                        <ImageWithBasePath
                          className="img-fluid"
                          alt=""
                          src="assets/img/mendor/mendor-06.jpg"
                        />
                      </Link>
                      <div className="mendor-country">
                        <i className="fas fa-map-marker-alt" /> Paris, France
                      </div>
                    </div>
                    <div className="mendor-content">
                      <h3 className="title">
                        <Link to="/mentee/mentor-profile">Marvin Downey</Link>
                      </h3>
                      <div className="mendor-course">
                        ASP.NET,Computer Gaming
                      </div>
                      <div className="mendor-price-list">
                        <div className="mendor-price">
                          $400 <span>/ hr</span>
                        </div>
                        <div className="mendor-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Mentor Item */}
                  {/* Mentor Item */}
                  <div className="mendor-box">
                    <div className="mendor-img">
                      <Link to="/mentee/mentor-profile">
                        <ImageWithBasePath
                          className="img-fluid"
                          alt=""
                          src="assets/img/mendor/mendor-07.jpg"
                        />
                      </Link>
                      <div className="mendor-country">
                        <i className="fas fa-map-marker-alt" /> U.S.A
                      </div>
                    </div>
                    <div className="mendor-content">
                      <h3 className="title">
                        <Link to="/mentee/mentor-profile">Betty Hairston</Link>
                      </h3>
                      <div className="mendor-course">Computer Programming</div>
                      <div className="mendor-price-list">
                        <div className="mendor-price">
                          $300 <span>/ hr</span>
                        </div>
                        <div className="mendor-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Mentor Item */}
                  {/* Mentor Item */}
                  <div className="mendor-box">
                    <div className="mendor-img">
                      <Link to="/mentee/mentor-profile">
                        <ImageWithBasePath
                          className="img-fluid"
                          alt=""
                          src="assets/img/mendor/mendor-06.jpg"
                        />
                      </Link>
                      <div className="mendor-country">
                        <i className="fas fa-map-marker-alt" /> Paris, France
                      </div>
                    </div>
                    <div className="mendor-content">
                      <h3 className="title">
                        <Link to="/mentee/mentor-profile">Jose Anderson</Link>
                      </h3>
                      <div className="mendor-course">Digital Marketer</div>
                      <div className="mendor-price-list">
                        <div className="mendor-price">
                          $400 <span>/ hr</span>
                        </div>
                        <div className="mendor-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Mentor Item */}
                  </OwlCarousel>
              </div>
              <div
                className="view-all text-center aos aos-init aos-animate"
                data-aos="fade-up"
              >
                <Link to="/mentee/mentor-profile" className="btn btn-primary btn-view">
                  View All
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* /Popular Mendors */}
        {/* Path section start */}
        <section className="section path-section-eight">
          <div
            className="section-header-eight text-center aos"
            data-aos="fade-up"
          >
            <div className="container">
              <span>Choose the</span>
              <h2>Different All Learning Paths</h2>
              <p className="sub-title">
                Are you looking to join online institutions? Now it's very
                simple, Sign up with mentoring
              </p>
              <div className="sec-dots">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
          <div className="course-sec">
            <div className="container">
              <div className="row justify-content-center">
                {/* Course Item */}
                <div
                  className="col-12 col-md-4 col-lg-3 aos"
                  data-aos="fade-up"
                >
                  <div className="course-item">
                    <Link to="/mentee/search-mentor" className="course-img">
                      <div className="image-col-merge">
                        <ImageWithBasePath
                          src="assets/img/course/course-01.jpg"
                          alt="learn"
                        />
                        <div className="course-text">
                          <h5>Digital Marketer</h5>
                          <div className="d-flex justify-content-between">
                            <p>400 Mentors</p>
                            <p>10 Courses</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                {/* /Course Item */}
                {/* Course Item */}
                <div
                  className="col-12 col-md-4 col-lg-3 aos"
                  data-aos="fade-up"
                >
                  <div className="course-item">
                    <Link to="/mentee/search-mentor" className="course-img">
                      <div className="image-col-merge">
                        <ImageWithBasePath
                          src="assets/img/course/course-02.jpg"
                          alt="learn"
                        />
                        <div className="course-text">
                          <h5>Ui designer</h5>
                          <div className="d-flex justify-content-between">
                            <p>300 Mentors</p>
                            <p>12 Courses</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                {/* /Course Item */}
                {/* Course Item */}
                <div
                  className="col-12 col-md-4 col-lg-3 aos"
                  data-aos="fade-up"
                >
                  <div className="course-item">
                    <Link to="/mentee/search-mentor" className="course-img">
                      <div className="image-col-merge">
                        <ImageWithBasePath
                          src="assets/img/course/course-03.jpg"
                          alt="learn"
                        />
                        <div className="course-text">
                          <h5>IT Security</h5>
                          <div className="d-flex justify-content-between">
                            <p>200 Mentors</p>
                            <p>20 Courses</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                {/* /Course Item */}
                {/* Course Item */}
                <div
                  className="col-12 col-md-4 col-lg-3 aos"
                  data-aos="fade-up"
                >
                  <div className="course-item">
                    <Link to="/mentee/search-mentor" className="course-img">
                      <div className="image-col-merge">
                        <ImageWithBasePath
                          src="assets/img/course/course-04.jpg"
                          alt="learn"
                        />
                        <div className="course-text">
                          <h5>Front-End Developer</h5>
                          <div className="d-flex justify-content-between">
                            <p>100 Mentors</p>
                            <p>11 Courses</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                {/* /Course Item */}
                {/* Course Item */}
                <div
                  className="col-12 col-md-4 col-lg-3 aos"
                  data-aos="fade-up"
                >
                  <div className="course-item">
                    <Link to="/mentee/search-mentor" className="course-img">
                      <div className="image-col-merge">
                        <ImageWithBasePath
                          src="assets/img/course/course-05.jpg"
                          alt="learn"
                        />
                        <div className="course-text">
                          <h5>Web Developer</h5>
                          <div className="d-flex justify-content-between">
                            <p>500 Mentors</p>
                            <p>30 Courses</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                {/* /Course Item */}
                {/* Course Item */}
                <div
                  className="col-12 col-md-4 col-lg-3 aos"
                  data-aos="fade-up"
                >
                  <div className="course-item">
                    <Link to="/mentee/search-mentor" className="course-img">
                      <div className="image-col-merge">
                        <ImageWithBasePath
                          src="assets/img/course/course-06.jpg"
                          alt="learn"
                        />
                        <div className="course-text">
                          <h5>Administrator</h5>
                          <div className="d-flex justify-content-between">
                            <p>200 Mentors</p>
                            <p>10 Courses</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                {/* /Course Item */}
                {/* Course Item */}
                <div
                  className="col-12 col-md-4 col-lg-3 aos"
                  data-aos="fade-up"
                >
                  <div className="course-item">
                    <Link to="/mentee/search-mentor" className="course-img">
                      <div className="image-col-merge">
                        <ImageWithBasePath
                          src="assets/img/course/course-07.jpg"
                          alt="learn"
                        />
                        <div className="course-text">
                          <h5>Project Manager</h5>
                          <div className="d-flex justify-content-between">
                            <p>600 Mentors</p>
                            <p>40 Courses</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                {/* /Course Item */}
                {/* Course Item */}
                <div
                  className="col-12 col-md-4 col-lg-3 aos"
                  data-aos="fade-up"
                >
                  <div className="course-item">
                    <Link to="/mentee/search-mentor" className="course-img">
                      <div className="image-col-merge">
                        <ImageWithBasePath
                          src="assets/img/course/course-08.jpg"
                          alt="learn"
                        />
                        <div className="course-text">
                          <h5>PHP Developer</h5>
                          <div className="d-flex justify-content-between">
                            <p>400 Mentors</p>
                            <p>10 Courses</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                {/* /Course Item */}
              </div>
              <div className="view-all text-center aos" data-aos="fade-up">
                <Link to="/mentee/search-mentor" className="btn btn-primary btn-view">
                  View All
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Path section end */}
        {/* Profile Section */}
        <section className="section profile-section">
          <div
            className="section-header-eight text-center aos"
            data-aos="fade-up"
          >
            <div className="container">
              <span>MOST VIEWED</span>
              <h2>Featured Profile of this week</h2>
              <p className="sub-title">
                Are you looking to join online institutions? Now it's very
                simple, Sign up with mentoring
              </p>
              <div className="sec-dots">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              {/* Profile Item */}
              <div className="col-12 col-xl-3 col-lg-6 aos" data-aos="fade-up">
                <div className="profile-list">
                  <div className="profile-detail">
                    <div className="profile-img-eight">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/mendor/mendor-01.jpg"
                      />
                    </div>
                    <div className="profile-content">
                      <h4>Donna Yancey</h4>
                      <p>UNIX, Trigonometry</p>
                    </div>
                  </div>
                  <div className="profile-rating">
                    <div className="mendor-rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="price-box">
                      $500 <span>/ hr</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Profile Item */}
              {/* Profile Item */}
              <div className="col-12 col-xl-3 col-lg-6 aos" data-aos="fade-up">
                <div className="profile-list">
                  <div className="profile-detail">
                    <div className="profile-img-eight">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/mendor/mendor-04.jpg"
                      />
                    </div>
                    <div className="profile-content">
                      <h4>Betty Hairston</h4>
                      <p>Computer Programming</p>
                    </div>
                  </div>
                  <div className="profile-rating">
                    <div className="mendor-rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="price-box">
                      $200 <span>/ hr</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Profile Item */}
              {/* Profile Item */}
              <div className="col-12 col-xl-3 col-lg-6 aos" data-aos="fade-up">
                <div className="profile-list">
                  <div className="profile-detail">
                    <div className="profile-img-eight">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/mendor/mendor-03.jpg"
                      />
                    </div>
                    <div className="profile-content">
                      <h4>Jose Anderson</h4>
                      <p>ASP,Computer Gaming</p>
                    </div>
                  </div>
                  <div className="profile-rating">
                    <div className="mendor-rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="price-box">
                      $300 <span>/ hr</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Profile Item */}
              {/* Profile Item */}
              <div className="col-12 col-xl-3 col-lg-6 aos" data-aos="fade-up">
                <div className="profile-list">
                  <div className="profile-detail">
                    <div className="profile-img-eight">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/mendor/mendor-02.jpg"
                      />
                    </div>
                    <div className="profile-content">
                      <h4>James Amen</h4>
                      <p>Digital Marketer</p>
                    </div>
                  </div>
                  <div className="profile-rating">
                    <div className="mendor-rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="price-box">
                      $400 <span>/ hr</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Profile Item */}
            </div>
          </div>
        </section>
        {/* /Profile Section */}
        {/* Student Testimonial */}
        <section className="student-testimonial">
          <div className="success-story">
            <div className="container">
              <div
                className="section-header-eight text-center aos"
                data-aos="fade-up"
              >
                <span>Testimonials</span>
                <h2>Our Students Success Stories</h2>
                <p className="sub-title">
                  Are you looking to join online institutions? Now it's very
                  simple, Sign up with mentoring
                </p>
                <div className="sec-dots">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="student-online-testi">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="video-img video-img-big" data-aos="fade-up">
                      <div className="testi-img">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/city/student-testimonial-01.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="play-icon">
                        <Link
                          to="https://www.youtube.com/watch?v=u-Hob5pjJSA"
                          data-fancybox=""
                        >
                          <i className="fas fa-play" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="testi-review" data-aos="fade-up">
                      <span className="quatation-icon">
                        <ImageWithBasePath
                          src="assets/img/icon/quatation-icon.svg"
                          alt=""
                        />
                      </span>
                      <div className="testi-content">
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Sed vitae neque metus.
                          Vivamus consectetur ultricies commodo. Pellentesque at
                          nisl sit amet.
                        </p>
                      </div>
                      <div className="testi-rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                      </div>
                      <h5>
                        <Link to="#">Devon Nick</Link>
                      </h5>
                      <span>USA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="multiple-students">
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="video-img" data-aos="fade-up">
                    <div className="testi-img">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/city/student-testimonial-02.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="play-icon">
                      <Link
                        to="https://www.youtube.com/watch?v=u-Hob5pjJSA"
                        data-fancybox=""
                      >
                        <i className="fas fa-play" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="video-img">
                    <div className="testi-img" data-aos="fade-up">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/city/student-testimonial-03.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="play-icon">
                      <Link
                        to="https://www.youtube.com/watch?v=u-Hob5pjJSA"
                        data-fancybox=""
                      >
                        <i className="fas fa-play" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="video-img">
                    <div className="testi-img" data-aos="fade-up">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/city/student-testimonial-04.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="play-icon">
                      <Link
                        to="https://www.youtube.com/watch?v=u-Hob5pjJSA"
                        data-fancybox=""
                      >
                        <i className="fas fa-play" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="video-img" data-aos="fade-up">
                    <div className="testi-img">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/city/student-testimonial-05.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="play-icon">
                      <Link
                        to="https://www.youtube.com/watch?v=u-Hob5pjJSA"
                        data-fancybox=""
                      >
                        <i className="fas fa-play" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Student Testimonial */}
        {/* Statistics Section */}
        <section className="section statistics-section-eight">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-4 col-md-6 aos" data-aos="fade-up">
                <div className="statistics-list-eight">
                  <div className="statistics-icon-eight client">
                    <i className="fas fa-street-view" />
                  </div>
                  <div className="statistics-content-eight">
                    <span>500+</span>
                    <h3>Happy Clients</h3>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4 col-md-6 aos" data-aos="fade-up">
                <div className="statistics-list-eight">
                  <div className="statistics-icon-eight appointment">
                    <i className="fas fa-history" />
                  </div>
                  <div className="statistics-content-eight">
                    <span>120+</span>
                    <h3>Online Appointments</h3>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4 col-md-6 aos" data-aos="fade-up">
                <div className="statistics-list-eight">
                  <div className="statistics-icon-eight job">
                    <i className="fas fa-user-check" />
                  </div>
                  <div className="statistics-content-eight">
                    <span>100%</span>
                    <h3>Job Satisfaction</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Statistics Section */}
        {/* Blog Section */}
        <section className="section section-blogs-eight">
          <div className="container">
            {/* Section Header */}
            <div
              className="section-header-eight text-center aos"
              data-aos="fade-up"
            >
              <span>LATEST</span>
              <h2>Blogs &amp; News</h2>
              <p className="sub-title">
                Are you looking to join online institutions? Now it's very
                simple, Sign up with mentoring
              </p>
              <div className="sec-dots">
                <span />
                <span />
                <span />
              </div>
            </div>
            {/* /Section Header */}
            <div className="row blog-grid-row justify-content-center">
              <div
                className="col-md-6 col-lg-4 col-sm-12 aos"
                data-aos="fade-up"
              >
                {/* Blog Post */}
                <div className="blog-card">
                  <div className="blog-card-image">
                    <Link to="/blog/blog-details">
                      <ImageWithBasePath
                        className="img-fluid"
                        src="assets/img/blog/blog-01.jpg"
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="blog-card-content">
                    <div className="blog-month">
                      04 <span>Dec</span>
                    </div>
                    <ul className="meta-item-eight">
                      <li>
                        <div className="post-author-eight">
                          <Link to="/blog/blog-details">
                            <span>Tyrone Roberts</span>
                          </Link>
                        </div>
                      </li>
                    </ul>
                    <h3 className="blog-title-eight">
                      <Link to="/blog/blog-details">
                        What is Lorem Ipsum? Lorem Ipsum is simply
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur em adipiscing
                      elit, sed do eiusmod tempor.
                    </p>
                    <Link to="/blog/blog-details" className="read">
                      Read more
                    </Link>
                  </div>
                </div>
                {/* /Blog Post */}
              </div>
              <div
                className="col-md-6 col-lg-4 col-sm-12 aos"
                data-aos="fade-up"
              >
                {/* Blog Post */}
                <div className="blog-card">
                  <div className="blog-card-image">
                    <Link to="/blog/blog-details">
                      <ImageWithBasePath
                        className="img-fluid"
                        src="assets/img/blog/blog-16.jpg"
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="blog-card-content">
                    <div className="blog-month">
                      05 <span>Jan</span>
                    </div>
                    <ul className="meta-item-eight">
                      <li>
                        <div className="post-author-eight">
                          <Link to="/blog/blog-details">
                            <span>Brittany Garcia</span>
                          </Link>
                        </div>
                      </li>
                    </ul>
                    <h3 className="blog-title-eight">
                      <Link to="/blog/blog-details">
                        Contrary to popular belief, Lorem Ipsum is
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur em adipiscing
                      elit, sed do eiusmod tempor.
                    </p>
                    <Link to="/blog/blog-details" className="read">
                      Read more
                    </Link>
                  </div>
                </div>
                {/* /Blog Post */}
              </div>
              <div
                className="col-md-6 col-lg-4 col-sm-12 aos"
                data-aos="fade-up"
              >
                {/* Blog Post */}
                <div className="blog-card">
                  <div className="blog-card-image">
                    <Link to="/blog/blog-details">
                      <ImageWithBasePath
                        className="img-fluid"
                        src="assets/img/blog/blog-17.jpg"
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="blog-card-content">
                    <div className="blog-month">
                      06 <span>May</span>
                    </div>
                    <ul className="meta-item-eight">
                      <li>
                        <div className="post-author-eight">
                          <Link to="/blog/blog-details">
                            <span>Allen Davis</span>
                          </Link>
                        </div>
                      </li>
                    </ul>
                    <h3 className="blog-title-eight">
                      <Link to="/blog/blog-details">
                        The standard chunk of Lorem Ipsum used
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur em adipiscing
                      elit, sed do eiusmod tempor.
                    </p>
                    <Link to="/blog/blog-details" className="read">
                      Read more
                    </Link>
                  </div>
                </div>
                {/* /Blog Post */}
              </div>
            </div>
            <div className="view-all text-center aos" data-aos="fade-up">
              <Link to="/blog/blog-list" className="btn btn-primary btn-view">
                View All
              </Link>
            </div>
          </div>
        </section>
        {/* /Blog Section */}
        {/* /Faq */}
        <section className="faq-eight-sec">
          <div className="container">
            {/* Section Header */}
            <div
              className="section-header-eight text-center aos"
              data-aos="fade-up"
            >
              <span>MOST VIEWED</span>
              <h2>Frequently Asked Questions</h2>
              <p className="sub-title">
                Are you looking to join online institutions? Now it's very
                simple, Sign up with mentoring
              </p>
              <div className="sec-dots">
                <span />
                <span />
                <span />
              </div>
            </div>
            {/* /Section Header */}
            <div className="row">
              <div className="col-lg-6">
                <div className="faq-box-eight">
                  <div className="faq-head">
                    <p>
                      <span>?</span>Is the regular license the same thing as an
                      editorial license?
                    </p>
                  </div>
                  <div className="faq-body">
                    <p>
                      Do you want to move on next step? Choose your most popular
                      leaning mentors, it will help you to achieve your
                      professional goals.
                    </p>
                  </div>
                </div>
                <div className="faq-box-eight">
                  <div className="faq-head">
                    <p>
                      <span>?</span>Is the regular license the same thing as an
                      editorial license?
                    </p>
                  </div>
                  <div className="faq-body">
                    <p>
                      Do you want to move on next step? Choose your most popular
                      leaning mentors, it will help you to achieve your
                      professional goals.
                    </p>
                  </div>
                </div>
                <div className="faq-box-eight border-0">
                  <div className="faq-head">
                    <p>
                      <span>?</span>Is the regular license the same thing as an
                      editorial license?
                    </p>
                  </div>
                  <div className="faq-body">
                    <p>
                      Do you want to move on next step? Choose your most popular
                      leaning mentors, it will help you to achieve your
                      professional goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-box-eight">
                  <div className="faq-head">
                    <p>
                      <span>?</span>Is the regular license the same thing as an
                      editorial license?
                    </p>
                  </div>
                  <div className="faq-body">
                    <p>
                      Do you want to move on next step? Choose your most popular
                      leaning mentors, it will help you to achieve your
                      professional goals.
                    </p>
                  </div>
                </div>
                <div className="faq-box-eight">
                  <div className="faq-head">
                    <p>
                      <span>?</span>Is the regular license the same thing as an
                      editorial license?
                    </p>
                  </div>
                  <div className="faq-body">
                    <p>
                      Do you want to move on next step? Choose your most popular
                      leaning mentors, it will help you to achieve your
                      professional goals.
                    </p>
                  </div>
                </div>
                <div className="faq-box-eight border-0">
                  <div className="faq-head">
                    <p>
                      <span>?</span>Is the regular license the same thing as an
                      editorial license?
                    </p>
                  </div>
                  <div className="faq-body">
                    <p>
                      Do you want to move on next step? Choose your most popular
                      leaning mentors, it will help you to achieve your
                      professional goals.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="view-all text-center aos aos-init aos-animate"
                data-aos="fade-up"
              >
                <Link to="#" className="btn btn-primary btn-view">
                  View All
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* /Faq */}
      </>
      <HomeSevenFooter />
    </div>
  );
};

export default HomeSeven;

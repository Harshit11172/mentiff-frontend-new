import React, { useEffect } from "react";
import HomeOneHeader from "./header";
import HomeOnefooter from "./footer";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CountUp from 'react-countup';
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeOne = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const mentoringCourseSlider = {
    dots: true,
    autoplay: false,
    nav: false,
    slidesToShow: 4,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const customerSlider = {
    dots: true,
    autoplay: false,
    nav: true,
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <HomeOneHeader />
      {/* Home Banner */}
      <section className="section section-search">
        <div className="container">
          <div
            className="banner-wrapper m-auto text-center aos"
            data-aos="fade-up"
          >
            <div className="banner-header banner-header-one">
              <h1>
                Search Teacher in <span>Mentoring Appointment</span>
              </h1>
              <p>
                Discover the best Mentors &amp; institutions the city nearest to
                you.
              </p>
            </div>
            {/* Search */}
            <div className="search-box">
              <form>
                <div className="form-group search-location">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Location"
                  />
                </div>
                <div className="form-group search-info">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search School, Online educational centers, etc"
                  />
                </div>
                <button type="submit" className="btn btn-primary search-btn">
                  <i>
                    <ImageWithBasePath src="assets/img/search-submit.png" alt="" />
                  </i>{" "}
                  <span>Search</span>
                </button>
              </form>
            </div>
            {/* /Search */}
          </div>
        </div>
      </section>
      {/* /Home Banner */}
      <section className="section how-it-works"> 
        <div className="container">
          <div className="section-header text-center aos" data-aos="fade-up">
            <span>Mentoring Flow</span>
            <h2>How does it works ?</h2>
            <p className="sub-title">
              Are you looking to join online institutions? Now it's very simple,
              Sign up with mentoring
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="feature-box text-center aos" data-aos="fade-up">
                <div className="feature-header">
                  <div className="feature-icon">
                    <span className="circle" />
                    <i>
                      <ImageWithBasePath src="assets/img/icon-1.png" alt="" />
                    </i>
                  </div>
                  <div className="feature-cont">
                    <div className="feature-text">Sign up</div>
                  </div>
                </div>
                <p className="mb-0">
                  Are you looking to join online Learning? Now it's very simple,
                  Now Sign up
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div
                className="feature-box feature-box-two text-center aos"
                data-aos="fade-up"
              >
                <div className="feature-header">
                  <div className="feature-icon">
                    <span className="circle" />
                    <i>
                      <ImageWithBasePath src="assets/img/icon-2.png" alt="" />
                    </i>
                  </div>
                  <div className="feature-cont">
                    <div className="feature-text">Collaborate</div>
                  </div>
                </div>
                <p className="mb-0">
                  Collaborate on your own timing, by scheduling with mentor
                  booking
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div
                className="feature-box feature-box-three text-center aos"
                data-aos="fade-up"
              >
                <div className="feature-header">
                  <div className="feature-icon">
                    <span className="circle" />
                    <i>
                      <ImageWithBasePath src="assets/img/icon-3.png" alt="" />
                    </i>
                  </div>
                  <div className="feature-cont">
                    <div className="feature-text">Improve &amp; Get Back</div>
                  </div>
                </div>
                <p className="mb-0">
                  you can gather different skill set, and you can become mentor
                  too
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section popular-courses">
        <div className="container">
          <div className="section-header text-center aos" data-aos="fade-up">
            <span>Mentoring Goals</span>
            <h2>Popular Mentors</h2>
            <p className="sub-title">
              Do you want to move on next step? Choose your most popular leaning
              mentors, it will help you to achieve your professional goals.
            </p>
          </div>
          <div className="mentoring-course owl-theme">
          <Slider {...mentoringCourseSlider}>
            <div className="course-box aos" data-aos="fade-up">
              <div className="product">
                <div className="product-img">
                  <Link to="/mentee/mentor-profile">
                    <ImageWithBasePath
                      className="img-fluid"
                      alt=""
                      src="assets/img/user/user1.jpg"
                      width={600}
                      height={300}
                    />
                  </Link>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <Link to="/mentee/mentor-profile">Donna Yancey</Link>
                  </h3>
                  <div className="author-info">
                    <div className="author-name">Digital Marketer</div>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <span className="d-inline-block average-rating">4.4</span>
                  </div>
                  <div className="author-country">
                    <p className="mb-0">
                      <i className="feather icon-map-pin" /> Paris, France
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="course-box aos" data-aos="fade-up">
              <div className="product">
                <div className="product-img">
                  <Link to="/mentee/mentor-profile">
                    <ImageWithBasePath
                      className="img-fluid"
                      alt=""
                      src="assets/img/user/user2.jpg"
                      width={600}
                      height={300}
                    />
                  </Link>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <Link to="/mentee/mentor-profile">James Amen</Link>
                  </h3>
                  <div className="author-info">
                    <div className="author-name">
                      UNIX, Calculus, Trigonometry
                    </div>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <span className="d-inline-block average-rating">5.0</span>
                  </div>
                  <div className="author-country">
                    <p className="mb-0">
                      <i className="feather icon-map-pin" /> Paris, France
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="course-box aos" data-aos="fade-up">
              <div className="product">
                <div className="product-img">
                  <Link to="/mentee/mentor-profile">
                    <ImageWithBasePath
                      className="img-fluid"
                      alt=""
                      src="assets/img/user/user3.jpg"
                      width={600}
                      height={300}
                    />
                  </Link>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <Link to="/mentee/mentor-profile">Marvin Downey</Link>
                  </h3>
                  <div className="author-info">
                    <div className="author-name">ASP.NET,Computer Gaming</div>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <span className="d-inline-block average-rating">5.0</span>
                  </div>
                  <div className="author-country">
                    <p className="mb-0">
                      <i className="feather icon-map-pin" /> Newyork, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="course-box aos" data-aos="fade-up">
              <div className="product">
                <div className="product-img">
                  <Link to="/mentee/mentor-profile">
                    <ImageWithBasePath
                      className="img-fluid"
                      alt=""
                      src="assets/img/user/user4.jpg"
                      width={600}
                      height={300}
                    />
                  </Link>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <Link to="/mentee/mentor-profile">Betty Hairston</Link>
                  </h3>
                  <div className="author-info">
                    <div className="author-name">Computer Programming</div>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <span className="d-inline-block average-rating">4.4</span>
                  </div>
                  <div className="author-country">
                    <p className="mb-0">
                      <i className="feather icon-map-pin" /> Paris, France
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="course-box aos" data-aos="fade-up">
              <div className="product">
                <div className="product-img">
                  <Link to="/mentee/mentor-profile">
                    <ImageWithBasePath
                      className="img-fluid"
                      alt=""
                      src="assets/img/user/user.jpg"
                      width={600}
                      height={300}
                    />
                  </Link>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <Link to="/mentee/mentor-profile">Jose Anderson</Link>
                  </h3>
                  <div className="author-info">
                    <div className="author-name">Digital Marketer</div>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <span className="d-inline-block average-rating">4.4</span>
                  </div>
                  <div className="author-country">
                    <p className="mb-0">
                      <i className="feather icon-map-pin" /> Paris, France
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="course-box aos" data-aos="fade-up">
              <div className="product">
                <div className="product-img">
                  <Link to="/mentee/mentor-profile">
                    <ImageWithBasePath
                      className="img-fluid"
                      alt=""
                      src="assets/img/user/user6.jpg"
                      width={600}
                      height={300}
                    />
                  </Link>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <Link to="/mentee/mentor-profile">Aaron Pietrzak</Link>
                  </h3>
                  <div className="author-info">
                    <div className="author-name">
                      UNIX,Calculus,Trigonometry
                    </div>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <span className="d-inline-block average-rating">4.4</span>
                  </div>
                  <div className="author-country">
                    <p className="mb-0">
                      <i className="feather icon-map-pin" /> Paris, France
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="course-box aos" data-aos="fade-up">
              <div className="product">
                <div className="product-img">
                  <Link to="/mentee/mentor-profile">
                    <ImageWithBasePath
                      className="img-fluid"
                      alt=""
                      src="assets/img/user/user7.jpg"
                      width={600}
                      height={300}
                    />
                  </Link>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <Link to="/mentee/mentor-profile">Brian Martinez</Link>
                  </h3>
                  <div className="author-info">
                    <div className="author-name">ASP.NET,Computer Gaming</div>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <span className="d-inline-block average-rating">4.4</span>
                  </div>
                  <div className="author-country">
                    <p className="mb-0">
                      <i className="feather icon-map-pin" /> Paris, France
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="course-box aos" data-aos="fade-up">
              <div className="product">
                <div className="product-img">
                  <Link to="/mentee/mentor-profile">
                    <ImageWithBasePath
                      className="img-fluid"
                      alt=""
                      src="assets/img/user/user15.jpg"
                      width={600}
                      height={300}
                    />
                  </Link>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <Link to="/mentee/mentor-profile">Misty Lundy</Link>
                  </h3>
                  <div className="author-info">
                    <div className="author-name">Computer Programming</div>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <span className="d-inline-block average-rating">4.4</span>
                  </div>
                  <div className="author-country">
                    <p className="mb-0">
                      <i className="feather icon-map-pin" /> Paris, France
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="course-box aos" data-aos="fade-up">
              <div className="product">
                <div className="product-img">
                  <Link to="/mentee/mentor-profile">
                    <ImageWithBasePath
                      className="img-fluid"
                      alt=""
                      src="assets/img/user/user9.jpg"
                      width={600}
                      height={300}
                    />
                  </Link>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <Link to="/mentee/mentor-profile">Vern Campbell</Link>
                  </h3>
                  <div className="author-info">
                    <div className="author-name">Digital Marketer</div>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <span className="d-inline-block average-rating">4.4</span>
                  </div>
                  <div className="author-country">
                    <p className="mb-0">
                      <i className="feather icon-map-pin" /> Paris, France
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="course-box aos" data-aos="fade-up">
              <div className="product">
                <div className="product-img">
                  <Link to="/mentee/mentor-profile">
                    <ImageWithBasePath
                      className="img-fluid"
                      alt=""
                      src="assets/img/user/user13.jpg"
                      width={600}
                      height={300}
                    />
                  </Link>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <Link to="/mentee/mentor-profile">Jessica Fogarty</Link>
                  </h3>
                  <div className="author-info">
                    <div className="author-name">
                      UNIX,Calculus,Trigonometry
                    </div>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <span className="d-inline-block average-rating">4.4</span>
                  </div>
                  <div className="author-country">
                    <p className="mb-0">
                      <i className="feather icon-map-pin" /> Paris, France
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="course-box aos" data-aos="fade-up">
              <div className="product">
                <div className="product-img">
                  <Link to="/mentee/mentor-profile">
                    <ImageWithBasePath
                      className="img-fluid"
                      alt=""
                      src="assets/img/user/user11.jpg"
                      width={600}
                      height={300}
                    />
                  </Link>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <Link to="/mentee/mentor-profile">Evelyn Stafford</Link>
                  </h3>
                  <div className="author-info">
                    <div className="author-name">ASP.NET,Computer Gaming</div>
                  </div>
                  <div className="rating">
                    <i className="fa fa-star filled" />
                    <i className="fa fa-star filled" />
                    <i className="fa fa-star filled" />
                    <i className="fa fa-star filled" />
                    <i className="fas fa-star filled" />
                    <span className="d-inline-block average-rating">4.4</span>
                  </div>
                  <div className="author-country">
                    <p className="mb-0">
                      <i className="feather icon-map-pin" /> Paris, France
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="course-box aos" data-aos="fade-up">
              <div className="product">
                <div className="product-img">
                  <Link to="/mentee/mentor-profile">
                    <ImageWithBasePath
                      className="img-fluid"
                      alt=""
                      src="assets/img/user/user12.jpg"
                      width={600}
                      height={300}
                    />
                  </Link>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <Link to="/mentee/mentor-profile">Christopher Carroll</Link>
                  </h3>
                  <div className="author-info">
                    <div className="author-name">Computer Programming</div>
                  </div>
                  <div className="rating">
                    <i className="fa fa-star filled" />
                    <i className="fa fa-star filled" />
                    <i className="fa fa-star filled" />
                    <i className="fa fa-star filled" />
                    <i className="fas fa-star filled" />
                    <span className="d-inline-block average-rating">4.4</span>
                  </div>
                  <div className="author-country">
                    <p className="mb-0">
                      <i className="feather icon-map-pin" /> Paris, France
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </Slider>
          </div>
        </div>
      </section>
      {/* Path section start */}
      <section className="section path-section">
        <div className="section-header text-center aos" data-aos="fade-up">
          <div className="container">
            <span>Choose the</span>
            <h2>Different All Learning Paths</h2>
            <p className="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
        </div>
        <div className="learning-path-col">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-4 col-lg-3">
                <div className="large-col aos" data-aos="fade-up">
                  <Link to="/mentee/search-mentor" className="large-col-image">
                    <div className="image-col-merge">
                      <ImageWithBasePath src="assets/img/path-img1.jpg" alt="" />
                      <div className="text-col">
                        <h5>Digital Marketer</h5>
                        <span>40 Mentors</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className="large-col aos" data-aos="fade-up">
                  <Link to="/mentee/search-mentor" className="large-col-image">
                    <div className="image-col-merge">
                      <ImageWithBasePath src="assets/img/path-img2.jpg" alt="" />
                      <div className="text-col">
                        <h5>Ui designer</h5>
                        <span>30 Mentors</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className="large-col aos" data-aos="fade-up">
                  <Link to="/mentee/search-mentor" className="large-col-image">
                    <div className="image-col-merge">
                      <ImageWithBasePath src="assets/img/path-img3.jpg" alt="" />
                      <div className="text-col">
                        <h5>IT Security</h5>
                        <span>35 Mentors</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className="large-col aos" data-aos="fade-up">
                  <Link to="/mentee/search-mentor" className="large-col-image">
                    <div className="image-col-merge">
                      <ImageWithBasePath src="assets/img/path-img4.jpg" alt="" />
                      <div className="text-col">
                        <h5>Front-End Developer</h5>
                        <span>40 Mentors</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className="large-col aos" data-aos="fade-up">
                  <Link to="/mentee/search-mentor" className="large-col-image">
                    <div className="image-col-merge">
                      <ImageWithBasePath src="assets/img/path-img5.jpg" alt="" />
                      <div className="text-col">
                        <h5>Web Developer</h5>
                        <span>45 Mentors</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className="large-col aos" data-aos="fade-up">
                  <Link to="/mentee/search-mentor" className="large-col-image">
                    <div className="image-col-merge">
                      <ImageWithBasePath src="assets/img/path-img6.jpg" alt="" />
                      <div className="text-col">
                        <h5>Administrator</h5>
                        <span>30 Mentors</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className="large-col aos" data-aos="fade-up">
                  <Link to="/mentee/search-mentor" className="large-col-image">
                    <div className="image-col-merge">
                      <ImageWithBasePath src="assets/img/path-img7.jpg" alt="" />
                      <div className="text-col">
                        <h5>Project Manager</h5>
                        <span>40 Mentors</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className="large-col aos" data-aos="fade-up">
                  <Link to="/mentee/search-mentor" className="large-col-image">
                    <div className="image-col-merge">
                      <ImageWithBasePath src="assets/img/path-img8.jpg" alt="" />
                      <div className="text-col">
                        <h5>PHP Developer</h5>
                        <span>50 Mentors</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="view-all text-center aos" data-aos="fade-up">
              <Link to="/mentee/search-mentor" className="btn btn-primary view-all">
                View All
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Path section end */}
      {/* Review Section */}
      <section className="customer-review-sec">
        <div className="container">
          {/* Section Header */}
          <div className="section-header text-center aos" data-aos="fade-up">
            <span>OUR RECENT</span>
            <h2>Review Of The Users</h2>
            <p className="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          {/* /Section Header */}
          <div className="row">
            <div className="col-md-12">
              <div className="customer-slider">
              <Slider {...customerSlider}>
                <div className="review-card" data-aos="fade-up">
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nunc tristique neque
                    tempor nisl feugiat lectus in. Placerat pharetra eleifend
                    integer integer at. Nunc nunc eu arcu amet faucibus.
                  </p>
                  <div className="customer">
                    <ImageWithBasePath src="assets/img/user/user30.jpg" alt="" />
                    <div className="cus-name">
                      <Link to="/mentor/review">Brittany Garcia</Link>
                      <span>Digital Marketer</span>
                    </div>
                  </div>
                </div>
                <div className="review-card" data-aos="fade-up">
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nunc tristique neque
                    tempor nisl feugiat lectus in. Placerat pharetra eleifend
                    integer integer at. Nunc nunc eu arcu amet faucibus.
                  </p>
                  <div className="customer">
                    <ImageWithBasePath src="assets/img/user/user31.jpg" alt="" />
                    <div className="cus-name">
                      <Link to="/mentor/review">William Lawrence</Link>
                      <span>Computer Gaming</span>
                    </div>
                  </div>
                </div>
                <div className="review-card" data-aos="fade-up">
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nunc tristique neque
                    tempor nisl feugiat lectus in. Placerat pharetra eleifend
                    integer integer at. Nunc nunc eu arcu amet faucibus.
                  </p>
                  <div className="customer">
                    <ImageWithBasePath src="assets/img/user/user32.jpg" alt="" />
                    <div className="cus-name">
                      <Link to="/mentor/review">Brittany Garcia</Link>
                      <span>Programmer</span>
                    </div>
                  </div>
                </div>
                <div className="review-card" data-aos="fade-up">
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nunc tristique neque
                    tempor nisl feugiat lectus in. Placerat pharetra eleifend
                    integer integer at. Nunc nunc eu arcu amet faucibus.
                  </p>
                  <div className="customer">
                    <ImageWithBasePath src="assets/img/user/user29.png" alt="" />
                    <div className="cus-name">
                      <Link to="/mentor/review">Harris Johnson</Link>
                      <span>Digital Marketer</span>
                    </div>
                  </div>
                </div>
                <div className="review-card" data-aos="fade-up">
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nunc tristique neque
                    tempor nisl feugiat lectus in. Placerat pharetra eleifend
                    integer integer at. Nunc nunc eu arcu amet faucibus.
                  </p>
                  <div className="customer">
                    <ImageWithBasePath src="assets/img/user/user30.jpg" alt="" />
                    <div className="cus-name">
                      <Link to="/mentor/review">Brittany Garcia</Link>
                      <span>Digital Marketer</span>
                    </div>
                  </div>
                </div>
                <div className="review-card" data-aos="fade-up">
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nunc tristique neque
                    tempor nisl feugiat lectus in. Placerat pharetra eleifend
                    integer integer at. Nunc nunc eu arcu amet faucibus.
                  </p>
                  <div className="customer">
                    <ImageWithBasePath src="assets/img/user/user31.jpg" alt="" />
                    <div className="cus-name">
                      <Link to="/mentor/review">William Lawrence</Link>
                      <span>Computer Gaming</span>
                    </div>
                  </div>
                </div>
                <div className="review-card" data-aos="fade-up">
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nunc tristique neque
                    tempor nisl feugiat lectus in. Placerat pharetra eleifend
                    integer integer at. Nunc nunc eu arcu amet faucibus.
                  </p>
                  <div className="customer">
                    <ImageWithBasePath src="assets/img/user/user32.jpg" alt="" />
                    <div className="cus-name">
                      <Link to="/mentor/review">Brittany Garcia</Link>
                      <span>Programmer</span>
                    </div>
                  </div>
                </div>
                <div className="review-card" data-aos="fade-up">
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nunc tristique neque
                    tempor nisl feugiat lectus in. Placerat pharetra eleifend
                    integer integer at. Nunc nunc eu arcu amet faucibus.
                  </p>
                  <div className="customer">
                    <ImageWithBasePath src="assets/img/user/user29.png" alt="" />
                    <div className="cus-name">
                      <Link to="/mentor/review">Harris Johnson</Link>
                      <span>Digital Marketer</span>
                    </div>
                  </div>
                </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section */}
      <section className="section section-blogs">
        <div className="container">
          {/* Section Header */}
          <div className="section-header text-center aos" data-aos="fade-up">
            <span>IMPORTANT</span>
            <h2> Blogs &amp; News</h2>
            <p className="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          {/* /Section Header */}
          <div className="row blog-grid-row justify-content-center">
            <div className="col-md-6 col-lg-4 col-sm-12">
              {/* Blog Post */}
              <div className="blog grid-blog aos" data-aos="fade-up">
                <div className="blog-image">
                  <Link to="/blog/blog-details">
                    <ImageWithBasePath
                      className="img-fluid"
                      src="assets/img/blog/blog-01.jpg"
                      alt="Post Image"
                    />
                  </Link>
                </div>
                <div className="blog-content">
                  <ul className="entry-meta meta-item">
                    <li>
                      <div className="post-author">
                        <Link to="/blog/blog-details">
                          <span>Tyrone Roberts</span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <i className="far fa-clock" /> 4 Dec 2024
                    </li>
                  </ul>
                  <h3 className="blog-title">
                    <Link to="/blog/blog-details">
                      What is Lorem Ipsum? Lorem Ipsum is simply
                    </Link>
                  </h3>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor.
                  </p>
                </div>
              </div>
              {/* /Blog Post */}
            </div>
            <div className="col-md-6 col-lg-4 col-sm-12">
              {/* Blog Post */}
              <div className="blog grid-blog aos" data-aos="fade-up">
                <div className="blog-image">
                  <Link to="/blog/blog-details">
                    <ImageWithBasePath
                      className="img-fluid"
                      src="assets/img/blog/blog-02.jpg"
                      alt="Post Image"
                    />
                  </Link>
                </div>
                <div className="blog-content">
                  <ul className="entry-meta meta-item">
                    <li>
                      <div className="post-author">
                        <Link to="/blog/blog-details">
                          <span>Brittany Garcia</span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <i className="far fa-clock" /> 3 Dec 2024
                    </li>
                  </ul>
                  <h3 className="blog-title">
                    <Link to="/blog/blog-details">
                      Contrary to popular belief, Lorem Ipsum is
                    </Link>
                  </h3>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor.
                  </p>
                </div>
              </div>
              {/* /Blog Post */}
            </div>
            <div className="col-md-6 col-lg-4 col-sm-12">
              {/* Blog Post */}
              <div className="blog grid-blog aos" data-aos="fade-up">
                <div className="blog-image">
                  <Link to="/blog/blog-details">
                    <ImageWithBasePath
                      className="img-fluid"
                      src="assets/img/blog/blog-04.jpg"
                      alt="Post Image"
                    />
                  </Link>
                </div>
                <div className="blog-content">
                  <ul className="entry-meta meta-item">
                    <li>
                      <div className="post-author">
                        <Link to="/blog/blog-details">
                          <span>William Lawrence</span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <i className="far fa-clock" /> 2 Dec 2024
                    </li>
                  </ul>
                  <h3 className="blog-title">
                    <Link to="/blog/blog-details">
                      The standard Lorem Ipsum passage, used
                    </Link>
                  </h3>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor.
                  </p>
                </div>
              </div>
              {/* /Blog Post */}
            </div>
          </div>
          <div className="view-all text-center aos" data-aos="fade-up">
            <Link to="/blog/blog-list" className="btn btn-primary view-all">
              View All Blogs
            </Link>
          </div>
        </div>
      </section>
      {/* /Blog Section */}
      {/* Mentors Near You */}
      <section className="mentors-near-you">
        <div className="container">
          {/* Section Header */}
          <div className="section-header text-center aos" data-aos="fade-up">
            <span>POPULAR LOCATIONS</span>
            <h2>Find The Mentors Near You</h2>
            <p className="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
          {/* /Section Header */}
          <div className="row justify-content-center">
            <div className="col-xl-3 col-md-5">
              <div className="mentor-card" data-aos="fade-up">
                <div className="mentor-card-img">
                  <Link to="#">
                    <ImageWithBasePath
                      src="assets/img/city/city-01.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="find-location">
                  <h5>
                    <Link to="#">Paris, France</Link>
                  </h5>
                  <div className="mentor-course">
                    <div className="total-mentor">
                      <ImageWithBasePath src="assets/img/icon/user-circle-icon.svg" alt="" />
                      <span>14 Mentors</span>
                    </div>
                    <div className="total-mentor">
                      <ImageWithBasePath src="assets/img/icon/book-content-icon.svg	" alt="" />
                      <span>24 Courses</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-md-7">
              <div className="mentor-card" data-aos="fade-up">
                <div className="mentor-card-img">
                  <Link to="#">
                    <ImageWithBasePath
                      src="assets/img/city/city-03.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="find-location">
                  <h5>
                    <Link to="#">London, England</Link>
                  </h5>
                  <div className="mentor-course">
                    <div className="total-mentor">
                      <ImageWithBasePath src="assets/img/icon/user-circle-icon.svg" alt="" />
                      <span>17 Mentors</span>
                    </div>
                    <div className="total-mentor">
                      <ImageWithBasePath src="assets/img/icon/book-content-icon.svg	" alt="" />
                      <span>20 Courses</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="mentor-card" data-aos="fade-up">
                <div className="mentor-card-img">
                  <Link to="#">
                    <ImageWithBasePath
                      src="assets/img/city/city-02.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="find-location">
                  <h5>
                    <Link to="#">Mumbai, India</Link>
                  </h5>
                  <div className="mentor-course">
                    <div className="total-mentor">
                      <ImageWithBasePath src="assets/img/icon/user-circle-icon.svg" alt="" />
                      <span>18 Mentors</span>
                    </div>
                    <div className="total-mentor">
                      <ImageWithBasePath src="assets/img/icon/book-content-icon.svg	" alt="" />
                      <span>22 Courses</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-md-6">
              <div className="mentor-card" data-aos="fade-up">
                <div className="mentor-card-img">
                  <Link to="#">
                    <ImageWithBasePath
                      src="assets/img/city/city-04.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="find-location">
                  <h5>
                    <Link to="#">Italy, Vienna</Link>
                  </h5>
                  <div className="mentor-course">
                    <div className="total-mentor">
                      <ImageWithBasePath src="assets/img/icon/user-circle-icon.svg" alt="" />
                      <span>12 Mentors</span>
                    </div>
                    <div className="total-mentor">
                      <ImageWithBasePath src="assets/img/icon/book-content-icon.svg	" alt="" />
                      <span>19 Courses</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="mentor-card" data-aos="fade-up">
                <div className="mentor-card-img">
                  <Link to="#">
                    <ImageWithBasePath
                      src="assets/img/city/city-05.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="find-location">
                  <h5>
                    <Link to="#">Elpo, Mexico</Link>
                  </h5>
                  <div className="mentor-course">
                    <div className="total-mentor">
                      <ImageWithBasePath src="assets/img/icon/user-circle-icon.svg" alt="" />
                      <span>22 Mentors</span>
                    </div>
                    <div className="total-mentor">
                      <ImageWithBasePath src="assets/img/icon/book-content-icon.svg	" alt="" />
                      <span>18 Courses</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="mentor-card" data-aos="fade-up">
                <div className="mentor-card-img">
                  <Link to="#">
                    <ImageWithBasePath
                      src="assets/img/city/city-06.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="find-location">
                  <h5>
                    <Link to="#">Buenos Aires, Atgentina</Link>
                  </h5>
                  <div className="mentor-course">
                    <div className="total-mentor">
                      <ImageWithBasePath src="assets/img/icon/user-circle-icon.svg" alt="" />
                      <span>16 Mentors</span>
                    </div>
                    <div className="total-mentor">
                      <ImageWithBasePath src="assets/img/icon/book-content-icon.svg	" alt="" />
                      <span>21 Courses</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Mentors Near You */}
      {/* Faq */}
      <section className="faq-sec">
        <div className="container">
          {/* Section Header */}
          <div className="section-header text-center aos" data-aos="fade-up">
            <span>QUESTIONS</span>
            <h2>Frequently Asked Questions</h2>
            <p className="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
          {/* /Section Header */}
          <div className="row">
            <div className="col-md-12">
              <div className="faq-card" data-aos="fade-up">
                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="faq-tab">
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingOne">
                        <p className="panel-title">
                          <Link
                            className="collapsed"
                            data-bs-toggle="collapse"
                            data-bs-parent="#accordion"
                            to="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            Is the regular license the same thing as an
                            editorial license?
                          </Link>
                        </p>
                      </div>
                      <div
                        id="collapseOne"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordion"
                      >
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="faq-tab">
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingTwo">
                        <p className="panel-title">
                          <Link
                            className="collapsed"
                            data-bs-toggle="collapse"
                            data-bs-parent="#accordion"
                            to="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Is the regular license the same thing as an
                            editorial license?
                          </Link>
                        </p>
                      </div>
                      <div
                        id="collapseTwo"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordion"
                      >
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="faq-tab">
                    <div className="panel panel-default">
                      <div
                        className="panel-heading"
                        role="tab"
                        id="headingThree"
                      >
                        <p className="panel-title">
                          <Link
                            className="collapsed"
                            data-bs-toggle="collapse"
                            data-bs-parent="#accordion"
                            to="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Is the regular license the same thing as an
                            editorial license?
                          </Link>
                        </p>
                      </div>
                      <div
                        id="collapseThree"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordion"
                      >
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="faq-tab">
                    <div className="panel panel-default">
                      <div
                        className="panel-heading"
                        role="tab"
                        id="headingFour"
                      >
                        <p className="panel-title">
                          <Link
                            className="collapsed"
                            data-bs-toggle="collapse"
                            data-bs-parent="#accordion"
                            to="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            Is the regular license the same thing as an
                            editorial license?
                          </Link>
                        </p>
                      </div>
                      <div
                        id="collapseFour"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordion"
                      >
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Faq */}
      {/* Statistics Section */}
      <section className="section statistics-section">
        <div className="container">
          {/* Section Header */}
          <div className="section-header text-center aos" data-aos="fade-up">
            <span>Our Achievements</span>
            <h2>Have 10 Years Of Experiences</h2>
            <p className="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
          {/* /Section Header */}
          <div className="row">
            <div className="col-12 col-lg-3 col-sm-6">
              <div
                className="statistics-list text-center aos"
                data-aos="fade-up"
              >
                <div className="statistics-icon">
                  <ImageWithBasePath src="assets/img/icon/counter-icon-1.svg" alt="" />
                </div>
                <h5>
                <CountUp className="counterUp" end={1500} duration={2.75} />+
                </h5>
                <h3>Qualified Mentors</h3>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-sm-6">
              <div
                className="statistics-list text-center aos"
                data-aos="fade-up"
              >
                <div className="statistics-icon">
                  <ImageWithBasePath src="assets/img/icon/counter-icon-2.svg" alt="" />
                </div>
                <h5>
                <CountUp className="counterUp" end={600} duration={2.75} />+
                </h5>
                <h3>Happy Clients</h3>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-sm-6">
              <div
                className="statistics-list text-center aos"
                data-aos="fade-up"
              >
                <div className="statistics-icon">
                  <ImageWithBasePath src="assets/img/icon/counter-icon-3.svg" alt="" />
                </div>
                <h5>
                <CountUp className="counterUp" end={124} duration={2.75} />+
                </h5>
                <h3>Appointments</h3>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-sm-6">
              <div
                className="statistics-list text-center aos"
                data-aos="fade-up"
              >
                <div className="statistics-icon">
                  <ImageWithBasePath src="assets/img/icon/counter-icon-4.svg" alt="" />
                </div>
                <h5>
                <CountUp className="counterUp" end={100} duration={2.75} />%
                </h5>
                <h3>Job Satisfaction</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Statistics Section */}
      <HomeOnefooter />
    </>
  );
};

export default HomeOne;

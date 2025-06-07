import React, { useEffect } from "react";
import HomeTwoHeader from "./header";
import HomeTwoFooter from "./footer";
import Slider from "react-slick";
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const HomeTwo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const trendCourseTabSlider1 = {
    loop:true,
    margin:24,
    dots:true,
    // nav:false,
    smartSpeed: 1000,
    dotsSpeed: 500,
    dragEndSpeed: 1000,
    // navText : ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
      0:{
        items:1,
        
      },
      500:{
        items:1,
        
      },
      768:{
        items:2,
        
      },
      1000:{
        items:3,
        
      },
      1300:{
        items:3,
        
      }
    }
  };
  const trendCourseTabSlider2 = {
    loop:true,
    margin:24,
    dots:true,
    nav:false,
    smartSpeed: 1000,
    dotsSpeed: 500,
    dragEndSpeed: 1000,
    responsive:{
      0:{
        items:1,
        
      },
      500:{
        items:1,
        
      },
      768:{
        items:2,
        
      },
      1000:{
        items:3,
        
      },
      1300:{
        items:3,
        
      }
    }
  };
  const trendCourseTabSlider3 = {
    dots: false,
    autoplay: false,
    slidesToShow: 3,
    margin: 20,
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
  const trendCourseTabSlider4 = {
    dots: false,
    autoplay: false,
    slidesToShow: 3,
    margin: 20,
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
  const trendCourseTabSlider5 = {
    dots: false,
    autoplay: false,
    slidesToShow: 3,
    margin: 20,
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
  const trendCourseTabSlider6 = {
    dots: false,
    autoplay: false,
    slidesToShow: 3,
    margin: 20,
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
  const trendCourseTabSlider7 = {
    dots: false,
    autoplay: false,
    slidesToShow: 3,
    margin: 20,
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
  const instructorSlider = {
    loop:true,
    margin:24,
    dots:true,
    nav:true,
    smartSpeed: 1000,
    dotsSpeed: 500,
    dragEndSpeed: 1000,
    responsive:{
      0:{
        items:1,
        
      },
      500:{
        items:1,
        
      },
      768:{
        items:2,
        
      },
      1000:{
        items:3,
        
      },
      1300:{
        items:4,
        
      }
    }
  };
  const jobAreaSlider = {
    loop:true,
    margin:24,
    dots:true,
    nav:true,
    smartSpeed: 1000,
    dotsSpeed: 500,
    dragEndSpeed: 1000,
    responsive:{
      0:{
        items:1,
        
      },
      500:{
        items:1,
        
      },
      768:{
        items:2,
        
      },
      1000:{
        items:3,
        
      },
      1300:{
        items:4,
        
      }
    }
  };
  const userReviewSlider = {
  	loop:true,
			margin:24,
			dots:true,
			// nav:false,
			smartSpeed: 1000,
			dotsSpeed: 500,
			dragEndSpeed: 1000,
			responsive:{
				0:{
					items:1,
					
				},
				500:{
					items:1,
					
				},
				768:{
					items:1,
					
				},
				1000:{
					items:1,
					
				},
				1300:{
					items:1,
					
				}
			}
  };

  return (
    <div className="main-wrapper main-wrapper-two">
      <HomeTwoHeader />
      {/* Home Banner */}
      <section className="home-slide d-flex align-items-center">
        <div className="banner-two-bg-img">
          <ImageWithBasePath
            src="assets/img/bg/banner-two-bg-01.png"
            className="img-fluid banner-two-bg"
            alt=""
          />
          <ImageWithBasePath
            src="assets/img/bg/banner-two-bg-02.png"
            className="img-fluid banner-two-bgtwo"
            alt=""
          />
          <ImageWithBasePath
            src="assets/img/bg/banner-two-bg-03.png"
            className="img-fluid banner-two-bgthree"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row ">
            <div className="col-lg-7 d-flex align-items-center">
              <div className="home-slide-face aos" data-aos="fade-up">
                <div className="home-slide-text ">
                  <h1>Find the Perfect Mentors Near Your Location</h1>
                  <p>Own your future learning new skills online</p>
                </div>
                {/* Search */}
                <div className="search-box search-index-two">
                  <form action="/mentee/search-mentor">
                    <div className="form-group search-info location-search location-search-four">
                      <input
                        type="text"
                        className="form-control text-truncate key"
                        placeholder=" Keyword / Course Name"
                      />
                      <input
                        type="text"
                        className="form-control text-truncate city"
                        placeholder=" City or Postalcode"
                      />
                      <Link
                        to="/mentee/search-mentor"
                        className="btn bg-search search-btn align-items-center d-flex justify-content-center"
                      >
                        Find Mentors
                      </Link>
                    </div>
                  </form>
                </div>
                {/* /Search */}
                <div className="poular-search">
                  <p>
                    <span>Popular Search :</span> Designer, Developer, Web, iOS,
                    PHP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Home Banner */}
      {/* Most popular Categories */}
      <section className="most-popular">
        <div className="container">
          <div className="course-two-bg">
            <ImageWithBasePath
              src="assets/img/bg/home-two-bg-05.png"
              className="img-fluid course-bg"
              alt=""
            />
          </div>
          <div
            className="section-header section-head-one text-center aos "
            data-aos="fade-up"
          >
            <h2>Browse Courses By Categories</h2>
            <div className="title-bar">
              <ImageWithBasePath
                src="assets/img/icon/index-title-bar.svg"
                className="img-fluid"
                alt=""
              />
            </div>
            <p className="sub-title">144 Courses live - 20 added today.</p>
          </div>
          <div
            className="popular-categories popular-cat-one aos"
            data-aos="fade-up"
          >
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <Link to="/mentee/search-mentor" data-aos="fade-up">
                  <div className="sub-categories d-flex align-items-center">
                    <div className="categories-img">
                      <ImageWithBasePath src="assets/img/categories/rec-01.jpg" alt="" />
                    </div>
                    <div className="categories-text ">
                      <h4>Design</h4>
                      <p>
                        Over <span>550</span> Courses
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <Link to="/mentee/search-mentor" data-aos="fade-up">
                  <div className="sub-categories d-flex align-items-center">
                    <div className="categories-img">
                      <ImageWithBasePath src="assets/img/categories/rec-02.jpg" alt="" />
                    </div>
                    <div className="categories-text ">
                      <h4>Photography</h4>
                      <p>
                        Over <span>750</span> Courses
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <Link to="/mentee/search-mentor" data-aos="fade-up">
                  <div className="sub-categories d-flex align-items-center">
                    <div className="categories-img">
                      <ImageWithBasePath src="assets/img/categories/rec-03.jpg" alt="" />
                    </div>
                    <div className="categories-text ">
                      <h4>Finance</h4>
                      <p>
                        Over <span>700</span> Courses
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <Link to="/mentee/search-mentor" data-aos="fade-up">
                  <div className="sub-categories d-flex align-items-center">
                    <div className="categories-img">
                      <ImageWithBasePath src="assets/img/categories/rec-04.jpg" alt="" />
                    </div>
                    <div className="categories-text ">
                      <h4>Research</h4>
                      <p>
                        Over <span>600</span> Courses
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <Link to="/mentee/search-mentor" data-aos="fade-up">
                  <div className="sub-categories d-flex align-items-center">
                    <div className="categories-img">
                      <ImageWithBasePath src="assets/img/categories/rec-05.jpg" alt="" />
                    </div>
                    <div className="categories-text ">
                      <h4>Digital Service</h4>
                      <p>
                        Over <span>500</span> Courses
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <Link to="/mentee/search-mentor" data-aos="fade-up">
                  <div className="sub-categories d-flex align-items-center">
                    <div className="categories-img">
                      <ImageWithBasePath src="assets/img/categories/rec-06.jpg" alt="" />
                    </div>
                    <div className="categories-text ">
                      <h4>IT Security</h4>
                      <p>
                        Over <span>200</span> Courses
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <Link to="/mentee/search-mentor" data-aos="fade-up">
                  <div className="sub-categories d-flex align-items-center">
                    <div className="categories-img">
                      <ImageWithBasePath src="assets/img/categories/rec-07.jpg" alt="" />
                    </div>
                    <div className="categories-text ">
                      <h4>Marketing</h4>
                      <p>
                        Over <span>230</span> Courses
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <Link to="/mentee/search-mentor" data-aos="fade-up">
                  <div className="sub-categories d-flex align-items-center">
                    <div className="categories-img">
                      <ImageWithBasePath src="assets/img/categories/rec-01.jpg" alt="" />
                    </div>
                    <div className="categories-text ">
                      <h4>Maths &amp; Logic</h4>
                      <p>
                        Over <span>460</span> Courses
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="explore-more text-center">
              <Link to="/mentee/search-mentor" className="all-browse">
                Browse All Categories <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* /Most popular Categories */}
      {/* Most trending course */}
      <section className="section trending-courses">
        <div className="container">
          <div className="course-two-bg">
            <ImageWithBasePath
              src="assets/img/bg/home-two-bg-04.png"
              className="img-fluid trend-course-bgone"
              alt=""
            />
            <ImageWithBasePath
              src="assets/img/bg/home-two-bg-06.png"
              className="img-fluid trend-course-bgtwo"
              alt=""
            />
          </div>
          <div
            className="section-header section-head-one text-center aos "
            data-aos="fade-up"
          >
            <h2>Most Trending Courses</h2>
            <div className="title-bar">
              <ImageWithBasePath src="assets/img/icon/index-title-bar.svg" alt="" />
            </div>
            <p className="sub-title">
              They are highly qualified and trained in their areas
            </p>
          </div>
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="trend-course-tab-slider most-trend-two">
                <OwlCarousel {...trendCourseTabSlider1}>
                  <div className="course-box" data-aos="fade-up">
                    <div className="product">
                      <div className="product-img trend-course">
                        <Link to="#">
                          <ImageWithBasePath
                            className="img-fluid"
                            alt=""
                            src="assets/img/course/trending-course-04.jpg"
                            width={600}
                            height={300}
                          />
                        </Link>
                      </div>
                      <div className="product-content">
                        <div className="rating rate-star">
                          <span className="average-rating rate-point ">
                            <i className="fas fa-star" />
                            5.0 (2566)
                          </span>
                          <span>
                            <ImageWithBasePath src="assets/img/icon/user-06.svg" alt="" />
                            800 Students
                          </span>
                        </div>
                        <h3 className="title">
                          <Link to="#">
                            Learn Python – Interactive Free Tutorials
                          </Link>
                        </h3>
                        <p>
                          Do you want to move on next step? Choose your most
                          popular{" "}
                        </p>
                        <div className="rating rating-star rating-two align-items-center">
                          <div className="rating-img">
                            <ImageWithBasePath src="assets/img/user/profile-01.jpg" alt="" />
                          </div>
                          <h5>
                            <Link to="/mentee/mentor-profile">Brittany Garcia</Link>
                          </h5>
                          <div className="course-btn">
                            <span>$600</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="course-box" data-aos="fade-up">
                    <div className="product">
                      <div className="product-img trend-course">
                        <Link to="#">
                          <ImageWithBasePath
                            className="img-fluid"
                            alt=""
                            src="assets/img/course/trending-course-01.jpg"
                            width={600}
                            height={300}
                          />
                        </Link>
                      </div>
                      <div className="product-content">
                        <div className="rating rate-star">
                          <span className="average-rating rate-point ">
                            <i className="fas fa-star" />
                            4.4 (2500)
                          </span>
                          <span>
                            <ImageWithBasePath src="assets/img/icon/user-06.svg" alt="" />
                            700 Students
                          </span>
                        </div>
                        <h3 className="title">
                          <Link to="#">
                            Maths &amp; logics – Interactive Free Tutorials
                          </Link>
                        </h3>
                        <p>
                          Do you want to move on next step? Choose your most
                          popular{" "}
                        </p>
                        <div className="rating rating-star rating-two align-items-center">
                          <div className="rating-img">
                            <ImageWithBasePath src="assets/img/user/profile-02.jpg" alt="" />
                          </div>
                          <h5>
                            <Link to="/mentee/mentor-profile">Allen Davis</Link>
                          </h5>
                          <div className="course-btn">
                            <span>$750</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="course-box" data-aos="fade-up">
                    <div className="product">
                      <div className="product-img trend-course">
                        <Link to="#">
                          <ImageWithBasePath
                            className="img-fluid"
                            alt=""
                            src="assets/img/course/trending-course-03.jpg"
                            width={600}
                            height={300}
                          />
                        </Link>
                      </div>
                      <div className="product-content">
                        <div className="rating rate-star">
                          <span className="average-rating rate-point ">
                            <i className="fas fa-star" />
                            4.8 (2550)
                          </span>
                          <span>
                            <ImageWithBasePath src="assets/img/icon/user-06.svg" alt="" />
                            850 Students
                          </span>
                        </div>
                        <h3 className="title">
                          <Link to="#">
                            Research – Interactive Free Tutorials
                          </Link>
                        </h3>
                        <p>
                          Do you want to move on next step? Choose your most
                          popular{" "}
                        </p>
                        <div className="rating rating-star rating-two align-items-center">
                          <div className="rating-img">
                            <ImageWithBasePath src="assets/img/user/profile-03.jpg" alt="" />
                          </div>
                          <h5>
                            <Link to="/mentee/mentor-profile">Tyrone Roberts</Link>
                          </h5>
                          <div className="course-btn">
                            <span>$450</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="course-box" data-aos="fade-up">
                    <div className="product">
                      <div className="product-img trend-course">
                        <Link to="#">
                          <ImageWithBasePath
                            className="img-fluid"
                            alt=""
                            src="assets/img/course/trending-course-01.jpg"
                            width={600}
                            height={300}
                          />
                        </Link>
                      </div>
                      <div className="product-content">
                        <div className="rating rate-star">
                          <span className="average-rating rate-point ">
                            <i className="fas fa-star" />
                            4.6 (2466)
                          </span>
                          <span>
                            <ImageWithBasePath src="assets/img/icon/user-06.svg" alt="" />
                            750 Students
                          </span>
                        </div>
                        <h3 className="title">
                          <Link to="#">
                            Learn Python – Interactive Free Tutorials
                          </Link>
                        </h3>
                        <p>
                          Do you want to move on next step? Choose your most
                          popular{" "}
                        </p>
                        <div className="rating rating-star rating-two align-items-center">
                          <div className="rating-img">
                            <ImageWithBasePath src="assets/img/user/profile-01.jpg" alt="" />
                          </div>
                          <h5>
                            <Link to="/mentee/mentor-profile">Brittany Garcia</Link>
                          </h5>
                          <div className="course-btn">
                            <span>$600</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Most trending course */}
      {/* join us mentor */}
      <section className="join-mentor">
        <div className="container">
          <div className="course-two-bg">
            <ImageWithBasePath
              src="assets/img/bg/home-two-bg-07.png"
              className="img-fluid join-mentor-bgone"
              alt=""
            />
            <ImageWithBasePath
              src="assets/img/bg/home-two-bg-08.png"
              className="img-fluid join-mentor-bgtwo"
              alt=""
            />
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="join-mentor-img aos " data-aos="fade-up">
                <ImageWithBasePath src="assets/img/join.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="head-join-us aos " data-aos="fade-up">
                <div className="join-mentor-details">
                  <h2>Build in-demand tech skills in half the time</h2>
                  <p>
                    Do you want to move on next step? Choose your most popular
                    leaning mentors, it will help you to achieve your
                    professional goals.
                  </p>
                </div>
                <div className="reg-log-btn">
                  <Link to="/register" className="reg-btn">
                    Register Now
                  </Link>
                  <Link to="/login" className="log-btn">
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /join us mentor */}
      {/* Selection Cources */}
      <section className="section trending-courses selection-cource">
        <div className="container">
          <div
            className="section-header section-head-one aos "
            data-aos="fade-up"
          >
            <h2>A Broad Selection Of Courses</h2>
            <div className="title-bar">
              <ImageWithBasePath src="assets/img/icon/index-title-bar.svg" alt="" />
            </div>
            <p className="sub-title">
              We collect reviews from our users so you can get an honest opinion
              of what an experience with our website are really like!
            </p>
          </div>
          <div className="broad-course-tab" data-aos="fade-up">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  All
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                  tabIndex={-1}
                >
                  Web development
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-seo-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-seo"
                  type="button"
                  role="tab"
                  aria-controls="pills-seo"
                  aria-selected="false"
                >
                  SEO
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-sales-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-sales"
                  type="button"
                  role="tab"
                  aria-controls="pills-sales"
                  aria-selected="false"
                  tabIndex={-1}
                >
                  Sales
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-java-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-java"
                  type="button"
                  role="tab"
                  aria-controls="pills-java"
                  aria-selected="false"
                >
                  Javascript
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-it-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-it"
                  type="button"
                  role="tab"
                  aria-controls="pills-it"
                  aria-selected="false"
                  tabIndex={-1}
                >
                  IT Secuity
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade active show"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="row align-items-center">
                <div className="col-md-12">
                  <div
                    className="trend-course-tab-slider most-trend-two"
                    data-aos="fade-up"
                  >
                    <OwlCarousel {...trendCourseTabSlider2}>
                      <div className="course-box">
                        <div className="product">
                          <div className="product-img trend-course">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/course/trending-course-04.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="rating-img">
                                <ImageWithBasePath
                                  src="assets/img/user/profile-01.jpg"
                                  alt=""
                                />
                              </div>
                              <h5>
                                <Link to="/mentee/mentor-profile">Brittany Garcia</Link>
                              </h5>
                              <div className="course-btn">
                                <span>$600</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Learn Python – Interactive Free Tutorials
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rate-star">
                              <span className="average-rating rate-point ">
                                <i className="fas fa-star" />
                                5.0 (2566)
                              </span>
                              <span>
                                <i className="fas fa-user" />
                                800 Students
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="course-box">
                        <div className="product">
                          <div className="product-img trend-course">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/course/trending-course-01.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="rating-img">
                                <ImageWithBasePath
                                  src="assets/img/user/profile-02.jpg"
                                  alt=""
                                />
                              </div>
                              <h5>
                                <Link to="/mentee/mentor-profile">Allen Davis</Link>
                              </h5>
                              <div className="course-btn">
                                <span>$750</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Maths &amp; logics – Interactive Free Tutorials
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rate-star">
                              <span className="average-rating rate-point ">
                                <i className="fas fa-star" />
                                5.0 (2566)
                              </span>
                              <span>
                                <i className="fas fa-user" />
                                800 Students
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="course-box">
                        <div className="product">
                          <div className="product-img trend-course">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/course/trending-course-03.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="rating-img">
                                <ImageWithBasePath
                                  src="assets/img/user/profile-03.jpg"
                                  alt=""
                                />
                              </div>
                              <h5>
                                <Link to="/mentee/mentor-profile">Tyrone Roberts</Link>
                              </h5>
                              <div className="course-btn">
                                <span>$450</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Research – Interactive Free Tutorials
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rate-star">
                              <span className="average-rating rate-point ">
                                <i className="fas fa-star" />
                                5.0 (2566)
                              </span>
                              <span>
                                <i className="fas fa-user" />
                                800 Students
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="course-box">
                        <div className="product">
                          <div className="product-img trend-course">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/course/trending-course-01.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="rating-img">
                                <ImageWithBasePath
                                  src="assets/img/user/profile-01.jpg"
                                  alt=""
                                />
                              </div>
                              <h5>
                                <Link to="/mentee/mentor-profile">Brittany Garcia</Link>
                              </h5>
                              <div className="course-btn">
                                <span>$600</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Learn Python – Interactive Free Tutorials
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rate-star">
                              <span className="average-rating rate-point ">
                                <i className="fas fa-star" />
                                5.0 (2566)
                              </span>
                              <span>
                                <i className="fas fa-user" />
                                800 Students
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="row align-items-center">
                <div className="col-md-12">
                  <div className="trend-course-tab-slider most-trend-two">
                    <OwlCarousel {...trendCourseTabSlider3}>
                      <div className="course-box">
                        <div className="product">
                          <div className="product-img trend-course">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/course/trending-course-04.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="rating-img">
                                <ImageWithBasePath
                                  src="assets/img/user/profile-01.jpg"
                                  alt=""
                                />
                              </div>
                              <h5>
                                <Link to="/mentee/mentor-profile">Brittany Garcia</Link>
                              </h5>
                              <div className="course-btn">
                                <span>$600</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Learn Python – Interactive Free Tutorials
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rate-star">
                              <span className="average-rating rate-point ">
                                <i className="fas fa-star" />
                                5.0 (2566)
                              </span>
                              <span>
                                <i className="fas fa-user" />
                                800 Students
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="course-box">
                        <div className="product">
                          <div className="product-img trend-course">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/course/trending-course-01.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="rating-img">
                                <ImageWithBasePath
                                  src="assets/img/user/profile-02.jpg"
                                  alt=""
                                />
                              </div>
                              <h5>
                                <Link to="/mentee/mentor-profile">Allen Davis</Link>
                              </h5>
                              <div className="course-btn">
                                <span>$750</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Maths &amp; logics – Interactive Free Tutorials
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rate-star">
                              <span className="average-rating rate-point ">
                                <i className="fas fa-star" />
                                5.0 (2566)
                              </span>
                              <span>
                                <i className="fas fa-user" />
                                800 Students
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="course-box">
                        <div className="product">
                          <div className="product-img trend-course">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/course/trending-course-03.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="rating-img">
                                <ImageWithBasePath
                                  src="assets/img/user/profile-03.jpg"
                                  alt=""
                                />
                              </div>
                              <h5>
                                <Link to="/mentee/mentor-profile">Tyrone Roberts</Link>
                              </h5>
                              <div className="course-btn">
                                <span>$450</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Research – Interactive Free Tutorials
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rate-star">
                              <span className="average-rating rate-point ">
                                <i className="fas fa-star" />
                                5.0 (2566)
                              </span>
                              <span>
                                <i className="fas fa-user" />
                                800 Students
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="course-box">
                        <div className="product">
                          <div className="product-img trend-course">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/course/trending-course-01.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="rating-img">
                                <ImageWithBasePath
                                  src="assets/img/user/profile-01.jpg"
                                  alt=""
                                />
                              </div>
                              <h5>
                                <Link to="/mentee/mentor-profile">Brittany Garcia</Link>
                              </h5>
                              <div className="course-btn">
                                <span>$600</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Learn Python – Interactive Free Tutorials
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rate-star">
                              <span className="average-rating rate-point ">
                                <i className="fas fa-star" />
                                5.0 (2566)
                              </span>
                              <span>
                                <i className="fas fa-user" />
                                800 Students
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-seo"
              role="tabpanel"
              aria-labelledby="pills-seo-tab"
            >
              <div className="row align-items-center">
                <div className="col-md-12">
                  <div className="trend-course-tab-slider most-trend-two">
                    <OwlCarousel {...trendCourseTabSlider4}>
                      <div className="course-box">
                        <div className="product">
                          <div className="product-img trend-course">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/course/trending-course-04.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="rating-img">
                                <ImageWithBasePath
                                  src="assets/img/user/profile-01.jpg"
                                  alt=""
                                />
                              </div>
                              <h5>
                                <Link to="/mentee/mentor-profile">Brittany Garcia</Link>
                              </h5>
                              <div className="course-btn">
                                <span>$600</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Learn Python – Interactive Free Tutorials
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rate-star">
                              <span className="average-rating rate-point ">
                                <i className="fas fa-star" />
                                5.0 (2566)
                              </span>
                              <span>
                                <i className="fas fa-user" />
                                800 Students
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="course-box">
                        <div className="product">
                          <div className="product-img trend-course">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/course/trending-course-01.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="rating-img">
                                <ImageWithBasePath
                                  src="assets/img/user/profile-02.jpg"
                                  alt=""
                                />
                              </div>
                              <h5>
                                <Link to="/mentee/mentor-profile">Allen Davis</Link>
                              </h5>
                              <div className="course-btn">
                                <span>$750</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Maths &amp; logics – Interactive Free Tutorials
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rate-star">
                              <span className="average-rating rate-point ">
                                <i className="fas fa-star" />
                                5.0 (2566)
                              </span>
                              <span>
                                <i className="fas fa-user" />
                                800 Students
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="course-box">
                        <div className="product">
                          <div className="product-img trend-course">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/course/trending-course-03.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="rating-img">
                                <ImageWithBasePath
                                  src="assets/img/user/profile-03.jpg"
                                  alt=""
                                />
                              </div>
                              <h5>
                                <Link to="/mentee/mentor-profile">Tyrone Roberts</Link>
                              </h5>
                              <div className="course-btn">
                                <span>$450</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Research – Interactive Free Tutorials
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rate-star">
                              <span className="average-rating rate-point ">
                                <i className="fas fa-star" />
                                5.0 (2566)
                              </span>
                              <span>
                                <i className="fas fa-user" />
                                800 Students
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="course-box">
                        <div className="product">
                          <div className="product-img trend-course">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/course/trending-course-01.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="rating-img">
                                <ImageWithBasePath
                                  src="assets/img/user/profile-01.jpg"
                                  alt=""
                                />
                              </div>
                              <h5>
                                <Link to="#">Brittany Garcia</Link>
                              </h5>
                              <div className="course-btn">
                                <span>$600</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Learn Python – Interactive Free Tutorials
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rate-star">
                              <span className="average-rating rate-point ">
                                <i className="fas fa-star" />
                                5.0 (2566)
                              </span>
                              <span>
                                <i className="fas fa-user" />
                                800 Students
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-sales"
              role="tabpanel"
              aria-labelledby="pills-sales-tab"
            >
              <div className="row align-items-center">
                <div className="col-md-12">
                  <div className="trend-course-tab-slider most-trend-two">
                    <OwlCarousel {...trendCourseTabSlider5}>
                      <div className="course-box">
                        <div className="product">
                          <div className="product-img trend-course">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/course/trending-course-04.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="rating-img">
                                <ImageWithBasePath
                                  src="assets/img/user/profile-01.jpg"
                                  alt=""
                                />
                              </div>
                              <h5>
                                <Link to="/mentee/mentor-profile">Brittany Garcia</Link>
                              </h5>
                              <div className="course-btn">
                                <span>$600</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Learn Python – Interactive Free Tutorials
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rate-star">
                              <span className="average-rating rate-point ">
                                <i className="fas fa-star" />
                                5.0 (2566)
                              </span>
                              <span>
                                <i className="fas fa-user" />
                                800 Students
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="course-box">
                        <div className="product">
                          <div className="product-img trend-course">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/course/trending-course-01.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="rating-img">
                                <ImageWithBasePath
                                  src="assets/img/user/profile-02.jpg"
                                  alt=""
                                />
                              </div>
                              <h5>
                                <Link to="/mentee/mentor-profile">Allen Davis</Link>
                              </h5>
                              <div className="course-btn">
                                <span>$750</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Maths &amp; logics – Interactive Free Tutorials
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rate-star">
                              <span className="average-rating rate-point ">
                                <i className="fas fa-star" />
                                5.0 (2566)
                              </span>
                              <span>
                                <i className="fas fa-user" />
                                800 Students
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="course-box">
                        <div className="product">
                          <div className="product-img trend-course">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/course/trending-course-03.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="rating-img">
                                <ImageWithBasePath
                                  src="assets/img/user/profile-03.jpg"
                                  alt=""
                                />
                              </div>
                              <h5>
                                <Link to="/mentee/mentor-profile">Tyrone Roberts</Link>
                              </h5>
                              <div className="course-btn">
                                <span>$450</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Research – Interactive Free Tutorials
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rate-star">
                              <span className="average-rating rate-point ">
                                <i className="fas fa-star" />
                                5.0 (2566)
                              </span>
                              <span>
                                <i className="fas fa-user" />
                                800 Students
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="course-box">
                        <div className="product">
                          <div className="product-img trend-course">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/course/trending-course-01.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="rating-img">
                                <ImageWithBasePath
                                  src="assets/img/user/profile-01.jpg"
                                  alt=""
                                />
                              </div>
                              <h5>
                                <Link to="/mentee/mentor-profile">Brittany Garcia</Link>
                              </h5>
                              <div className="course-btn">
                                <span>$600</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Learn Python – Interactive Free Tutorials
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rate-star">
                              <span className="average-rating rate-point ">
                                <i className="fas fa-star" />
                                5.0 (2566)
                              </span>
                              <span>
                                <i className="fas fa-user" />
                                800 Students
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-java"
              role="tabpanel"
              aria-labelledby="pills-java-tab"
            >
              <div className="row align-items-center">
                <div className="col-md-12">
                  <div className="trend-course-tab-slider most-trend-two">
                    <OwlCarousel {...trendCourseTabSlider6}>
                      <div className="course-box">
                        <div className="product">
                          <div className="product-img trend-course">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/course/trending-course-04.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="rating-img">
                                <ImageWithBasePath
                                  src="assets/img/user/profile-01.jpg"
                                  alt=""
                                />
                              </div>
                              <h5>
                                <Link to="#">Brittany Garcia</Link>
                              </h5>
                              <div className="course-btn">
                                <span>$600</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Learn Python – Interactive Free Tutorials
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rate-star">
                              <span className="average-rating rate-point ">
                                <i className="fas fa-star" />
                                5.0 (2566)
                              </span>
                              <span>
                                <i className="fas fa-user" />
                                800 Students
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="course-box">
                        <div className="product">
                          <div className="product-img trend-course">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/course/trending-course-01.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="rating-img">
                                <ImageWithBasePath
                                  src="assets/img/user/profile-02.jpg"
                                  alt=""
                                />
                              </div>
                              <h5>
                                <Link to="#">Allen Davis</Link>
                              </h5>
                              <div className="course-btn">
                                <span>$750</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Maths &amp; logics – Interactive Free Tutorials
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rate-star">
                              <span className="average-rating rate-point ">
                                <i className="fas fa-star" />
                                5.0 (2566)
                              </span>
                              <span>
                                <i className="fas fa-user" />
                                800 Students
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="course-box">
                        <div className="product">
                          <div className="product-img trend-course">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/course/trending-course-03.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="rating-img">
                                <ImageWithBasePath
                                  src="assets/img/user/profile-03.jpg"
                                  alt=""
                                />
                              </div>
                              <h5>
                                <Link to="/mentee/mentor-profile">Tyrone Roberts</Link>
                              </h5>
                              <div className="course-btn">
                                <span>$450</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Research – Interactive Free Tutorials
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rate-star">
                              <span className="average-rating rate-point ">
                                <i className="fas fa-star" />
                                5.0 (2566)
                              </span>
                              <span>
                                <i className="fas fa-user" />
                                800 Students
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="course-box">
                        <div className="product">
                          <div className="product-img trend-course">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/course/trending-course-01.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="rating-img">
                                <ImageWithBasePath
                                  src="assets/img/user/profile-01.jpg"
                                  alt=""
                                />
                              </div>
                              <h5>
                                <Link to="/mentee/mentor-profile">Brittany Garcia</Link>
                              </h5>
                              <div className="course-btn">
                                <span>$600</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Learn Python – Interactive Free Tutorials
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rate-star">
                              <span className="average-rating rate-point ">
                                <i className="fas fa-star" />
                                5.0 (2566)
                              </span>
                              <span>
                                <i className="fas fa-user" />
                                800 Students
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-it"
              role="tabpanel"
              aria-labelledby="pills-it-tab"
            >
              <div className="row align-items-center">
                <div className="col-md-12">
                  <div className="trend-course-tab-slider most-trend-two">
                    <OwlCarousel {...trendCourseTabSlider7}>
                      <div className="course-box">
                        <div className="product">
                          <div className="product-img trend-course">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/course/trending-course-04.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="rating-img">
                                <ImageWithBasePath
                                  src="assets/img/user/profile-01.jpg"
                                  alt=""
                                />
                              </div>
                              <h5>
                                <Link to="/mentee/mentor-profile">Brittany Garcia</Link>
                              </h5>
                              <div className="course-btn">
                                <span>$600</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Learn Python – Interactive Free Tutorials
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rate-star">
                              <span className="average-rating rate-point ">
                                <i className="fas fa-star" />
                                5.0 (2566)
                              </span>
                              <span>
                                <i className="fas fa-user" />
                                800 Students
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="course-box">
                        <div className="product">
                          <div className="product-img trend-course">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/course/trending-course-01.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="rating-img">
                                <ImageWithBasePath
                                  src="assets/img/user/profile-02.jpg"
                                  alt=""
                                />
                              </div>
                              <h5>
                                <Link to="/mentee/mentor-profile">Allen Davis</Link>
                              </h5>
                              <div className="course-btn">
                                <span>$750</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Maths &amp; logics – Interactive Free Tutorials
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rate-star">
                              <span className="average-rating rate-point ">
                                <i className="fas fa-star" />
                                5.0 (2566)
                              </span>
                              <span>
                                <i className="fas fa-user" />
                                800 Students
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="course-box">
                        <div className="product">
                          <div className="product-img trend-course">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/course/trending-course-03.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="rating-img">
                                <ImageWithBasePath
                                  src="assets/img/user/profile-03.jpg"
                                  alt=""
                                />
                              </div>
                              <h5>
                                <Link to="/mentee/mentor-profile">Tyrone Roberts</Link>
                              </h5>
                              <div className="course-btn">
                                <span>$450</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Research – Interactive Free Tutorials
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rate-star">
                              <span className="average-rating rate-point ">
                                <i className="fas fa-star" />
                                5.0 (2566)
                              </span>
                              <span>
                                <i className="fas fa-user" />
                                800 Students
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="course-box">
                        <div className="product">
                          <div className="product-img trend-course">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/course/trending-course-01.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="rating-img">
                                <ImageWithBasePath
                                  src="assets/img/user/profile-01.jpg"
                                  alt=""
                                />
                              </div>
                              <h5>
                                <Link to="/mentee/mentor-profile">Brittany Garcia</Link>
                              </h5>
                              <div className="course-btn">
                                <span>$600</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Learn Python – Interactive Free Tutorials
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rate-star">
                              <span className="average-rating rate-point ">
                                <i className="fas fa-star" />
                                5.0 (2566)
                              </span>
                              <span>
                                <i className="fas fa-user" />
                                800 Students
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Selection Cources */}
      {/* Featured Instructor */}
      <section className="featured-instructor feature-instructor-one">
        <div className="container">
          <div className="course-two-bg">
            <ImageWithBasePath
              src="assets/img/bg/home-two-bg-09.png"
              className="img-fluid feature-bgone"
              alt=""
            />
            <ImageWithBasePath
              src="assets/img/bg/home-two-bg-10.png"
              className="img-fluid feature-bgtwo"
              alt=""
            />
          </div>
          <div
            className="section-header section-head-one text-center aos "
            data-aos="fade-up"
          >
            <h2>Meet Our Professional Mentor</h2>
            <div className="title-bar">
              <ImageWithBasePath src="assets/img/icon/index-title-bar.svg" alt="" />
            </div>
            <p className="sub-title">
              They are highly qualified and trained in their areas
            </p>
          </div>
          <div className="featured-instructor-head aos " data-aos="fade-up">
            <div className="row">
              <div className="col-md-12">
                <div className="instructor-slider">
                  <OwlCarousel {...instructorSlider}>
                    <div className="large-team" data-aos="fade-up">
                      <div className="student-img">
                        <Link to="/mentee/mentor-profile">
                          <ImageWithBasePath src="assets/img/user/user16.png" alt="" />
                        </Link>
                      </div>
                      <div className="ins-content">
                        <div className="team-name">
                          <h4>
                            <Link to="/mentee/mentor-profile">David Lee</Link>
                          </h4>
                          <span className="designation">Web Developer</span>
                        </div>
                        <div className="rating rate-star">
                          <span className="average-rating rate-point ">
                            <i className="fas fa-star" />
                            5.0 (2566)
                          </span>
                          <span>
                            <ImageWithBasePath src="assets/img/icon/user-icon.svg" alt="" />
                            800 Students
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="large-team" data-aos="fade-up">
                      <div className="student-img">
                        <Link to="/mentee/mentor-profile">
                          <ImageWithBasePath src="assets/img/user/user17.png" alt="" />
                        </Link>
                      </div>
                      <div className="ins-content">
                        <div className="team-name">
                          <h4>
                            <Link to="/mentee/mentor-profile">Charlotte</Link>
                          </h4>
                          <span className="designation">Designer</span>
                        </div>
                        <div className="rating rate-star">
                          <span className="average-rating rate-point ">
                            <i className="fas fa-star" />
                            4.8 (2550)
                          </span>
                          <span>
                            <ImageWithBasePath src="assets/img/icon/user-icon.svg" alt="" />
                            700 Students
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="large-team" data-aos="fade-up">
                      <div className="student-img">
                        <Link to="/mentee/mentor-profile">
                          <ImageWithBasePath src="assets/img/user/user18.png" alt="" />
                        </Link>
                      </div>
                      <div className="ins-content">
                        <div className="team-name">
                          <h4>
                            <Link to="/mentee/mentor-profile">Ethan Williams</Link>
                          </h4>
                          <span className="designation">Marketing</span>
                        </div>
                        <div className="rating rate-star">
                          <span className="average-rating rate-point ">
                            <i className="fas fa-star" />
                            4.5 (2500)
                          </span>
                          <span>
                            <ImageWithBasePath src="assets/img/icon/user-icon.svg" alt="" />
                            850 Students
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="large-team">
                      <div className="student-img">
                        <Link to="/mentee/mentor-profile">
                          <ImageWithBasePath src="assets/img/user/user19.png" alt="" />
                        </Link>
                      </div>
                      <div className="ins-content">
                        <div className="team-name">
                          <h4>
                            <Link to="/mentee/mentor-profile">John Hudson </Link>
                          </h4>
                          <span className="designation">Web Developer</span>
                        </div>
                        <div className="rating rate-star">
                          <span className="average-rating rate-point ">
                            <i className="fas fa-star" />
                            5.0 (2666)
                          </span>
                          <span>
                            <ImageWithBasePath src="assets/img/icon/user-icon.svg" alt="" />
                            600 Students
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="large-team">
                      <div className="student-img">
                        <Link to="/mentee/mentor-profile">
                          <ImageWithBasePath src="assets/img/user/user18.png" alt="" />
                        </Link>
                      </div>
                      <div className="ins-content">
                        <div className="team-name">
                          <h4>
                            <Link to="/mentee/mentor-profile">David Lee</Link>
                          </h4>
                          <span className="designation">Designer</span>
                        </div>
                        <div className="rating rate-star">
                          <span className="average-rating rate-point ">
                            <i className="fas fa-star" />
                            5.0 (2566)
                          </span>
                          <span>
                            <ImageWithBasePath src="assets/img/icon/user-icon.svg" alt="" />
                            800 Students
                          </span>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Featured Instructor */}
      {/* Job Location */}
      <section className="job-location-sec location-sec-two">
        <div className="container">
          <div className="course-two-bg">
            <ImageWithBasePath
              src="assets/img/bg/home-two-bg-11.png"
              className="img-fluid feature-bgthree"
              alt=""
            />
            <ImageWithBasePath
              src="assets/img/bg/home-two-bg-12.png"
              className="img-fluid feature-bgfour"
              alt=""
            />
          </div>
          <div
            className="section-header section-head-one text-center aos "
            data-aos="fade-up"
          >
            <h2>Popular Job Location</h2>
            <div className="title-bar">
              <ImageWithBasePath src="assets/img/icon/index-title-bar.svg" alt="" />
            </div>
            <p className="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="job-area-slider">
                <OwlCarousel {...jobAreaSlider}>
                  <div className="job-area-card" data-aos="fade-up">
                    <div className="job-img">
                      <Link to="#">
                        <ImageWithBasePath src="assets/img/city/city-07.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="job-place">
                      <h5>Paris, France</h5>
                      <span>
                        <ImageWithBasePath src="assets/img/icon/user-circle-03.svg" alt="" />
                        14 Mentors
                      </span>
                    </div>
                  </div>
                  <div className="job-area-card" data-aos="fade-up">
                    <div className="job-img">
                      <Link to="#">
                        <ImageWithBasePath src="assets/img/city/city-08.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="job-place">
                      <h5>Elpo, Mexico</h5>
                      <span>
                        <ImageWithBasePath src="assets/img/icon/user-circle-03.svg" alt="" />
                        18 Mentors
                      </span>
                    </div>
                  </div>
                  <div className="job-area-card" data-aos="fade-up">
                    <div className="job-img">
                      <Link to="#">
                        <ImageWithBasePath src="assets/img/city/city-09.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="job-place">
                      <h5>Buenos Aires, Argentina</h5>
                      <span>
                        <ImageWithBasePath src="assets/img/icon/user-circle-03.svg" alt="" />
                        22 Mentors
                      </span>
                    </div>
                  </div>
                  <div className="job-area-card" data-aos="fade-up">
                    <div className="job-img">
                      <Link to="#">
                        <ImageWithBasePath src="assets/img/city/city-10.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="job-place">
                      <h5>London, England</h5>
                      <span>
                        <ImageWithBasePath src="assets/img/icon/user-circle-03.svg" alt="" />
                        20 Mentors
                      </span>
                    </div>
                  </div>
                  <div className="job-area-card" data-aos="fade-up">
                    <div className="job-img">
                      <Link to="#">
                        <ImageWithBasePath src="assets/img/city/city-08.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="job-place">
                      <h5>Elpo, Mexico</h5>
                      <span>
                        <ImageWithBasePath src="assets/img/icon/user-circle-03.svg" alt="" />
                        18 Mentors
                      </span>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /JOb Location */}
      {/* Faq */}
      <section className="faq-sec faq-sec-two">
        <div className="container">
          <div className="course-two-bg">
            <ImageWithBasePath
              src="assets/img/bg/home-two-bg-09.png"
              className="img-fluid feature-bgone"
              alt=""
            />
            <ImageWithBasePath
              src="assets/img/bg/home-two-bg-10.png"
              className="img-fluid feature-bgtwo"
              alt=""
            />
          </div>
          {/* Section Header */}
          <div
            className="section-header section-head-one text-center aos "
            data-aos="fade-up"
          >
            <h2>Frequently Asked Questions</h2>
            <div className="title-bar">
              <ImageWithBasePath src="assets/img/icon/index-title-bar.svg" alt="" />
            </div>
            <p className="sub-title">
              They are highly aWe collect reviews from our users so you can get
              an{" "}
            </p>
          </div>
          {/* /Section Header */}
          <div className="row">
            <div className="col-md-12">
              <div className="faq-card">
                <div className="two-faq">
                  <Link
                    className="collapsed"
                    data-bs-toggle="collapse"
                    to="#multiCollapseExample1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    <span> How can I book?</span>
                    <div
                      className="collapse multi-collapse"
                      id="multiCollapseExample1"
                    >
                      <div className="collapse-para">
                        Lorem ipsum dolor sit amet consectetur. In nibh enim
                        pretium vitae velit. Laoreet nibh et ultricies gravida
                        sit elit enim metus donec. Eleifend vitae arcu enim est.
                        Massa nibh viverra pulvinar cras nisl congue viverra.
                        Cras est eu morbi non consectetur. Enim viverra interdum
                        lorem turpis vel at. Nunc dignissim turpis lacinia
                        varius purus congue massa. Ac faucibus felis sed amet.
                        Cursus ut aliquam sit convallis. Luctus purus curabitur
                        vivamus
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="two-faq">
                  <Link
                    className="collapsed"
                    data-bs-toggle="collapse"
                    to="#multiCollapseExample2"
                    role="button"
                    aria-expanded="true"
                    aria-controls="multiCollapseExample2"
                  >
                    <span> Quisque dignissim vulputate purus in sodales?</span>
                    <div
                      className="collapse multi-collapse"
                      id="multiCollapseExample2"
                    >
                      <div className="collapse-para">
                        Lorem ipsum dolor sit amet consectetur. In nibh enim
                        pretium vitae velit. Laoreet nibh et ultricies gravida
                        sit elit enim metus donec. Eleifend vitae arcu enim est.
                        Massa nibh viverra pulvinar cras nisl congue viverra.
                        Cras est eu morbi non consectetur. Enim viverra interdum
                        lorem turpis vel at. Nunc dignissim turpis lacinia
                        varius purus congue massa. Ac faucibus felis sed amet.
                        Cursus ut aliquam sit convallis. Luctus purus curabitur
                        vivamus
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="two-faq">
                  <Link
                    className="collapsed"
                    data-bs-toggle="collapse"
                    to="#multiCollapseExample3"
                    role="button"
                    aria-expanded="true"
                    aria-controls="multiCollapseExample3"
                  >
                    <span>
                      {" "}
                      Nullam non vehicula neque. Vivamus sed consectetur nunc.
                      Proin eu tristique justo, id eleifend urna?{" "}
                    </span>
                    <div
                      className="collapse multi-collapse"
                      id="multiCollapseExample3"
                    >
                      <div className="collapse-para">
                        Lorem ipsum dolor sit amet consectetur. In nibh enim
                        pretium vitae velit. Laoreet nibh et ultricies gravida
                        sit elit enim metus donec. Eleifend vitae arcu enim est.
                        Massa nibh viverra pulvinar cras nisl congue viverra.
                        Cras est eu morbi non consectetur. Enim viverra interdum
                        lorem turpis vel at. Nunc dignissim turpis lacinia
                        varius purus congue massa. Ac faucibus felis sed amet.
                        Cursus ut aliquam sit convallis. Luctus purus curabitur
                        vivamus
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="two-faq">
                  <Link
                    className="collapsed"
                    data-bs-toggle="collapse"
                    to="#multiCollapseExample4"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample4"
                  >
                    <span>
                      {" "}
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting?
                    </span>
                    <div
                      className="collapse multi-collapse"
                      id="multiCollapseExample4"
                    >
                      <div className="collapse-para">
                        Lorem ipsum dolor sit amet consectetur. In nibh enim
                        pretium vitae velit. Laoreet nibh et ultricies gravida
                        sit elit enim metus donec. Eleifend vitae arcu enim est.
                        Massa nibh viverra pulvinar cras nisl congue viverra.
                        Cras est eu morbi non consectetur. Enim viverra interdum
                        lorem turpis vel at. Nunc dignissim turpis lacinia
                        varius purus congue massa. Ac faucibus felis sed amet.
                        Cursus ut aliquam sit convallis. Luctus purus curabitur
                        vivamus
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="two-faq">
                  <Link
                    className="collapsed mb-0"
                    data-bs-toggle="collapse"
                    to="#multiCollapseExample5"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample5"
                  >
                    <span> Sit amet pulvinar metus est ut nisl? </span>
                    <div
                      className="collapse multi-collapse"
                      id="multiCollapseExample5"
                    >
                      <div className="collapse-para">
                        Lorem ipsum dolor sit amet consectetur. In nibh enim
                        pretium vitae velit. Laoreet nibh et ultricies gravida
                        sit elit enim metus donec. Eleifend vitae arcu enim est.
                        Massa nibh viverra pulvinar cras nisl congue viverra.
                        Cras est eu morbi non consectetur. Enim viverra interdum
                        lorem turpis vel at. Nunc dignissim turpis lacinia
                        varius purus congue massa. Ac faucibus felis sed amet.
                        Cursus ut aliquam sit convallis. Luctus purus curabitur
                        vivamus
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Faq */}
      {/* Student say about */}
      <section className="student-say-about testimonial-section testi-mon-one">
        <div className="container">
          <div
            className="section-header section-head-one text-center aos "
            data-aos="fade-up"
          >
            <h2>Reviews From Our Users</h2>
            <div className="title-bar">
              <ImageWithBasePath src="assets/img/icon/index-title-bar.svg" alt="" />
            </div>
            <p className="sub-title">
              They are highly aWe collect reviews from our users so you can get
              an honest opinion of what an experience with our website are
              really like! and trained in their areas
            </p>
          </div>
          <div className="col-lg-12 col-md-12 text-center d-flex justify-content-center">
            {/* <div id="myCarousel" class="carousel slide student-slide-testimoni aos " data-aos="fade-up" data-bs-interval="5000" data-bs-ride="carousel"> */}
            <div className="carousel-inner user-review-slide">
              <OwlCarousel {...userReviewSlider}>
                <div className="carousel-item testi-item say-us active">
                  <div className="student-group" data-aos="fade-up">
                    <div className="reviewer-detail">
                      <div className="student-about-img">
                        <ImageWithBasePath src="assets/img/user/user20.png" alt="" />
                      </div>
                      <div className="reviewer-name">
                        <h3>
                          <Link to="/mentor/review">Hannah Schmitt</Link>
                        </h3>
                        <span>Lead Designer</span>
                      </div>
                    </div>
                    <p className="say-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cursus nibh mauris, nec turpis orci lectus maecenas.
                      Suspendisse sed magna eget nibh in turpis. Consequat duis
                      diam lacus arcu. Faucibus venenatis felis id augue sit
                      cursus pellentesque enim Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Cursus nibh mauris, nec
                      turpis orci lectus maecenas. Suspendisse sed magna eget
                      nibh in turpis. Consequat duis diam lacus arcu. Faucibus
                      venenatis felis id augue sit cursus pellentesque enim{" "}
                    </p>
                    <div className="rating">
                      <i className="fa fa-star filled" />
                      <i className="fa fa-star filled" />
                      <i className="fa fa-star filled" />
                      <i className="fa fa-star filled" />
                      <i className="fa fa-star filled" />
                    </div>
                  </div>
                </div>
                <div className="carousel-item testi-item say-us active">
                  <div className="student-group" data-aos="fade-up">
                    <div className="reviewer-detail">
                      <div className="student-about-img">
                        <ImageWithBasePath src="assets/img/user/user21.png" alt="" />
                      </div>
                      <div className="reviewer-name">
                        <h3>
                          <Link to="/mentor/review">Anderson Saviour</Link>
                        </h3>
                        <span>IT Manager</span>
                      </div>
                    </div>
                    <p className="say-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cursus nibh mauris, nec turpis orci lectus maecenas.
                      Suspendisse sed magna eget nibh in turpis. Consequat duis
                      diam lacus arcu. Faucibus venenatis felis id augue sit
                      cursus pellentesque enim Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Cursus nibh mauris, nec
                      turpis orci lectus maecenas. Suspendisse sed magna eget
                      nibh in turpis. Consequat duis diam lacus arcu. Faucibus
                      venenatis felis id augue sit cursus pellentesque enim{" "}
                    </p>
                    <div className="rating">
                      <i className="fa fa-star filled" />
                      <i className="fa fa-star filled" />
                      <i className="fa fa-star filled" />
                      <i className="fa fa-star filled" />
                      <i className="fa fa-star filled" />
                    </div>
                  </div>
                </div>
                <div className="carousel-item testi-item say-us active">
                  <div className="student-group" data-aos="fade-up">
                    <div className="reviewer-detail">
                      <div className="student-about-img">
                        <ImageWithBasePath src="assets/img/user/user20.png" alt="" />
                      </div>
                      <div className="reviewer-name">
                        <h3>
                          <Link to="/mentor/review">Hannah Schmitt</Link>
                        </h3>
                        <span>Lead designer</span>
                      </div>
                    </div>
                    <p className="say-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cursus nibh mauris, nec turpis orci lectus maecenas.
                      Suspendisse sed magna eget nibh in turpis. Consequat duis
                      diam lacus arcu. Faucibus venenatis felis id augue sit
                      cursus pellentesque enim Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Cursus nibh mauris, nec
                      turpis orci lectus maecenas. Suspendisse sed magna eget
                      nibh in turpis. Consequat duis diam lacus arcu. Faucibus
                      venenatis felis id augue sit cursus pellentesque enim{" "}
                    </p>
                    <div className="rating">
                      <i className="fa fa-star filled" />
                      <i className="fa fa-star filled" />
                      <i className="fa fa-star filled" />
                      <i className="fa fa-star filled" />
                      <i className="fa fa-star filled" />
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      {/* /Student say about */}
      {/* Our Blog */}
      <section className="section our-blog trending-courses-three popular-course-three">
        <div className="container">
          <div className="blog-head">
            {/* Section Header */}
            <div
              className="section-header section-head-one aos "
              data-aos="fade-up"
            >
              <h2>From Our Blogs</h2>
              <div className="title-bar">
                <ImageWithBasePath src="assets/img/icon/index-title-bar.svg" alt="" />
              </div>
              <p className="sub-title">
                We collect reviews from our users so you can get an honest
                opinion of what an experience with our website are really like!
              </p>
            </div>
            {/* /Section Header */}
            <div className="explore-more text-center">
              <Link to="/blog/blog-list" className="all-browse">
                Browse All Blogs <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-two" data-aos="fade-up">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="/blog/blog-details">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/blog/blog-21.jpg"
                      />
                    </Link>
                  </div>
                  <div className="feature-texts">
                    <span>Marketing</span>
                  </div>
                  <div className="product-content">
                    <ul className="date">
                      <li>
                        <span>
                          <i className="fas fa-envelope" />
                        </span>
                        40 Comments
                      </li>
                      <li>
                        <span>
                          <i className="fas fa-clock" />
                        </span>
                        21 Jan, 2023
                      </li>
                    </ul>
                    <h3 className="title">
                      <Link to="/blog/blog-details">
                        Interview Question: Why Dont You Have a Degree?
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-two" data-aos="fade-up">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="/blog/blog-details">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/blog/blog-22.jpg"
                      />
                    </Link>
                  </div>
                  <div className="feature-texts">
                    <span>Marketing</span>
                  </div>
                  <div className="product-content">
                    <ul className="date">
                      <li>
                        <span>
                          <i className="fas fa-envelope" />
                        </span>
                        30 Comments
                      </li>
                      <li>
                        <span>
                          <i className="fas fa-clock" />
                        </span>
                        20 Jan, 2023
                      </li>
                    </ul>
                    <h3 className="title">
                      <Link to="/blog/blog-details">
                        How to Make a Perfect CV That Attracts the Attention
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-two" data-aos="fade-up">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="/blog/blog-details">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/blog/blog-23.jpg"
                      />
                    </Link>
                  </div>
                  <div className="feature-texts">
                    <span>Marketing</span>
                  </div>
                  <div className="product-content">
                    <ul className="date">
                      <li>
                        <span>
                          <i className="fas fa-envelope" />
                        </span>
                        50 Comments
                      </li>
                      <li>
                        <span>
                          <i className="fas fa-clock" />
                        </span>
                        22 Jan, 2023
                      </li>
                    </ul>
                    <h3 className="title">
                      <Link to="/blog/blog-details">
                        39 Strengths and Weaknesses To Discuss in a Courses
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Blog */}
      {/* New Course subscribe */}
      <section className="new-course great-option">
        <div className="container">
          <div className="course-two-bg">
            <ImageWithBasePath
              src="assets/img/bg/home-two-bg-07.png"
              className="img-fluid subscribe-bg"
              alt=""
            />
          </div>
          <div className="head-join-us">
            <div className="row">
              <div className="col-xl-8" data-aos="fade-up">
                <h2>Find Your Next Great Opportunity!</h2>
              </div>
              <div className="col-xl-4">
                <div className="reg-log-btn" data-aos="fade-up">
                  <Link to="/register" className="reg-btn">
                    Register Now
                  </Link>
                  <Link to="/login" className="log-btn">
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /New Course */}
      <HomeTwoFooter />
    </div>
  );
};

export default HomeTwo;

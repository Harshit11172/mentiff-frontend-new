import React, { useEffect } from "react";
import HomeFourfooter from "./footer";
import HomeFourHeader from "./header";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CountUp from 'react-countup';

const HomeFour = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const popularcatslider = {
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
					items:4,
					
				}
			}
  };
  const trendCourseTabSlider1 = {
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
  const instructorSlider = {
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
        items:4,
        
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
  const trustedSlider= {
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
					items:5,
					
				}
			}
  };
  
  return (
    <div className="main-wrapper main-wrapper-four">
      <HomeFourHeader />
      {/* Home Banner */}
      <section className=" home-slide home-slide-three d-flex align-items-center home-four">
        <div className="container">
          <div className="row ">
            <div className="col-lg-7 d-flex align-items-center">
              <div className="section-banner-three aos " data-aos="fade-up">
                <div className="hometwo-slide-text ">
                  <h1>Find the Perfect Mentors Near Your Location</h1>
                  <p>Own your future learning new skills online</p>
                </div>
                {/* Search */}
                <div className="search-box">
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
                <div className="banner-counter">
                  <ul>
                    <li>
                      <h5>
                        <CountUp className="counterUp" end={256} duration={5}/>+
                      </h5>
                      Courses Added
                    </li>
                    <li>
                      <h5>
                        <CountUp className="counterUp" end={17} duration={5}/>K
                      </h5>
                      Mentors
                    </li>
                    <li>
                      <h5>
                        <CountUp className="counterUp" end={15} duration={5}/>K
                      </h5>
                      Users Registered
                    </li>
                    <li>
                      <h5>
                      <CountUp className="counterUp" end={60} duration={5}/>K
                        
                      </h5>
                      Reviews From Users
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="object-slide-img aos " data-aos="fade-up">
                <ImageWithBasePath
                  src="assets/img/object-4.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Home Banner */}
      {/* Course Categories */}
      <section className="most-popular course-categories-three pb-0">
        <div className="container">
          <div className="section-header h-three aos " data-aos="fade-up">
            <h2>Course Categories</h2>
            <div className="heading-bar">
              <span />
              <span />
            </div>
            <p className="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              aenean accumsan bibendum{" "}
            </p>
          </div>
          <div className="popular-categories aos pt-3" data-aos="fade-up">
            <div className="row">
              <div className="col-md-12">
                <div className="popular-cat-slider">
                <OwlCarousel {...popularcatslider}>
                  <Link to="#">
                    <div className="sub-categories bg-design align-items-center">
                      <div className="categories-img d-flex justify-content-center align-items-center">
                        <ImageWithBasePath
                          src="assets/img/course/course-cat-01.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="categories-text">
                        <div className="cat-bottom-content">
                          <p className="course-count">100 Mentors</p>
                          <h4>Design Courses</h4>
                        </div>
                        <div className="next-arrow">
                          <span>
                            <i className="fas fa-arrow-right" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to="#">
                    <div className="sub-categories bg-design align-items-center">
                      <div className="categories-img d-flex justify-content-center align-items-center">
                        <ImageWithBasePath
                          src="assets/img/course/course-cat-02.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="categories-text">
                        <div className="cat-bottom-content">
                          <p className="course-count">89 Mentors</p>
                          <h4>Development</h4>
                        </div>
                        <div className="next-arrow">
                          <span>
                            <i className="fas fa-arrow-right" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to="#">
                    <div className="sub-categories bg-design align-items-center">
                      <div className="categories-img d-flex justify-content-center align-items-center">
                        <ImageWithBasePath
                          src="assets/img/course/course-cat-03.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="categories-text">
                        <div className="cat-bottom-content">
                          <p className="course-count">64 Mentors</p>
                          <h4>Marketing Strategy</h4>
                        </div>
                        <div className="next-arrow">
                          <span>
                            <i className="fas fa-arrow-right" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to="#">
                    <div className="sub-categories bg-design align-items-center">
                      <div className="categories-img d-flex justify-content-center align-items-center">
                        <ImageWithBasePath
                          src="assets/img/course/course-cat-04.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="categories-text">
                        <div className="cat-bottom-content">
                          <p className="course-count">55 Mentors</p>
                          <h4>Python Development</h4>
                        </div>
                        <div className="next-arrow">
                          <span>
                            <i className="fas fa-arrow-right" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to="#">
                    <div className="sub-categories bg-design align-items-center">
                      <div className="categories-img d-flex justify-content-center align-items-center">
                        <ImageWithBasePath
                          src="assets/img/course/course-cat-02.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="categories-text">
                        <div className="cat-bottom-content">
                          <p className="course-count">89 Mentors</p>
                          <h4>Development</h4>
                        </div>
                        <div className="next-arrow">
                          <span>
                            <i className="fas fa-arrow-right" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to="#">
                    <div className="sub-categories bg-design align-items-center">
                      <div className="categories-img d-flex justify-content-center align-items-center">
                        <ImageWithBasePath
                          src="assets/img/course/course-cat-03.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="categories-text">
                        <div className="cat-bottom-content">
                          <p className="course-count">64 Mentors</p>
                          <h4>Marketing Strategy</h4>
                        </div>
                        <div className="next-arrow">
                          <span>
                            <i className="fas fa-arrow-right" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Course Categories */}
      {/* Most popular course */}
      <section className="section trending-courses trending-courses-three">
        <div className="container">
          <div className="h-three tab-panel">
            <div className="section-header h-three aos " data-aos="fade-up">
              <h2>Our Trending Courses</h2>
              <div className="heading-bar">
                <span />
                <span />
              </div>
              <p className="sub-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                aenean accumsan bibendum{" "}
              </p>
            </div>
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
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade active show"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="trend-course-tab-slider">
                  <OwlCarousel {...trendCourseTabSlider1}>
                    <div className="course-box">
                      <div className="product">
                        <div className="product-img">
                          <Link to="#">
                            <ImageWithBasePath
                              className="img-fluid"
                              alt=""
                              src="assets/img/course/trending-course-01.jpg"
                              width={600}
                              height={300}
                            />
                          </Link>
                          <span className="text-bottom">$600</span>
                        </div>
                        <div className="feature-texts bgs-blue">
                          <span>Featured</span>
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icon/feature-badge.svg"
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="product-content">
                          <div className="course-info ">
                            <div className="rating rating-star">
                              <span className="average-rating rate-point ">
                                marketing
                              </span>
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
                          <ul>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/user-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Students<span>800</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/star-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Ratings<span>5.0</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/star-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Lessons<span>20</span>
                                </h5>
                              </div>
                            </li>
                          </ul>
                          <div className="rating rating-star rating-two align-items-center">
                            <div className="rating-img">
                              <ImageWithBasePath src="assets/img/user/user10.jpg" alt="" />
                            </div>
                            <h5>James Collins</h5>
                            <div className="course-btn">
                              <Link to="#">View Details</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="course-box">
                      <div className="product">
                        <div className="product-img">
                          <Link to="#">
                            <ImageWithBasePath
                              className="img-fluid"
                              alt=""
                              src="assets/img/course/trending-course-02.jpg"
                              width={600}
                              height={300}
                            />
                          </Link>
                          <span className="text-bottom">$500</span>
                        </div>
                        <div className="feature-texts bgs-blue">
                          <span>Featured</span>
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icon/feature-badge.svg"
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="product-content">
                          <div className="course-info ">
                            <div className="rating rating-star">
                              <span className="average-rating rate-point ">
                                Digital Marketer
                              </span>
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
                          <ul>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/user-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Students<span>700</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/star-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Ratings<span>4.5</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/star-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Lessons<span>25</span>
                                </h5>
                              </div>
                            </li>
                          </ul>
                          <div className="rating rating-star rating-two align-items-center">
                            <div className="rating-img">
                              <ImageWithBasePath src="assets/img/user/user11.jpg" alt="" />
                            </div>
                            <h5>Allen Davis</h5>
                            <div className="course-btn">
                              <Link to="#">View Details</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="course-box">
                      <div className="product">
                        <div className="product-img">
                          <Link to="#">
                            <ImageWithBasePath
                              className="img-fluid"
                              alt=""
                              src="assets/img/course/trending-course-03.jpg"
                              width={600}
                              height={300}
                            />
                          </Link>
                          <span className="text-bottom">$400</span>
                        </div>
                        <div className="feature-texts bgs-blue">
                          <span>Featured</span>
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icon/feature-badge.svg"
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="product-content">
                          <div className="course-info ">
                            <div className="rating rating-star">
                              <span className="average-rating rate-point ">
                                IT Security
                              </span>
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
                          <ul>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/user-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Students<span>850</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/star-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Ratings<span>4.7</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/star-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Lessons<span>15</span>
                                </h5>
                              </div>
                            </li>
                          </ul>
                          <div className="rating rating-star rating-two align-items-center">
                            <div className="rating-img">
                              <ImageWithBasePath src="assets/img/user/user12.jpg" alt="" />
                            </div>
                            <h5>Tyrone Roberts</h5>
                            <div className="course-btn">
                              <Link to="#">View Details</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="course-box">
                      <div className="product">
                        <div className="product-img">
                          <Link to="#">
                            <ImageWithBasePath
                              className="img-fluid"
                              alt=""
                              src="assets/img/course/trending-course-04.jpg"
                              width={600}
                              height={300}
                            />
                          </Link>
                          <span className="text-bottom">$600</span>
                        </div>
                        <div className="feature-texts bgs-blue">
                          <span>Featured</span>
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icon/feature-badge.svg"
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="product-content">
                          <div className="course-info ">
                            <div className="rating rating-star">
                              <span className="average-rating rate-point ">
                                IT Security
                              </span>
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
                          <ul>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/user-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Students<span>600</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/star-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Ratings<span>4.6</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/star-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Lessons<span>18</span>
                                </h5>
                              </div>
                            </li>
                          </ul>
                          <div className="rating rating-star rating-two align-items-center">
                            <div className="rating-img">
                              <ImageWithBasePath src="assets/img/user/user12.jpg" alt="" />
                            </div>
                            <h5>Tyrone Roberts</h5>
                            <div className="course-btn">
                              <Link to="#">View Details</Link>
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
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="trend-course-tab-slider ">
                  <OwlCarousel {...trendCourseTabSlider1}>
                    <div className="course-box">
                      <div className="product">
                        <div className="product-img">
                          <Link to="#">
                            <ImageWithBasePath
                              className="img-fluid"
                              alt=""
                              src="assets/img/course/trending-course-01.jpg"
                              width={600}
                              height={300}
                            />
                          </Link>
                          <span className="text-bottom">$600</span>
                        </div>
                        <div className="feature-texts bgs-blue">
                          <span>Featured</span>
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icon/feature-badge.svg"
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="product-content">
                          <div className="course-info ">
                            <div className="rating rating-star">
                              <span className="average-rating rate-point ">
                                marketing
                              </span>
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
                          <ul>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/user-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Students<span>800</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/star-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Ratings<span>5.0</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/star-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Lessons<span>20</span>
                                </h5>
                              </div>
                            </li>
                          </ul>
                          <div className="rating rating-star rating-two align-items-center">
                            <div className="rating-img">
                              <ImageWithBasePath src="assets/img/user/user10.jpg" alt="" />
                            </div>
                            <h5>James Collins</h5>
                            <div className="course-btn">
                              <Link to="#">View Details</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="course-box">
                      <div className="product">
                        <div className="product-img">
                          <Link to="#">
                            <ImageWithBasePath
                              className="img-fluid"
                              alt=""
                              src="assets/img/course/trending-course-02.jpg"
                              width={600}
                              height={300}
                            />
                          </Link>
                          <span className="text-bottom">$600</span>
                        </div>
                        <div className="feature-texts bgs-blue">
                          <span>Featured</span>
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icon/feature-badge.svg"
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="product-content">
                          <div className="course-info ">
                            <div className="rating rating-star">
                              <span className="average-rating rate-point ">
                                Digital Marketer
                              </span>
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
                          <ul>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/user-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Students<span>650</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/star-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Ratings<span>4.6</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/star-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Lessons<span>18</span>
                                </h5>
                              </div>
                            </li>
                          </ul>
                          <div className="rating rating-star rating-two align-items-center">
                            <div className="rating-img">
                              <ImageWithBasePath src="assets/img/user/user11.jpg" alt="" />
                            </div>
                            <h5>Allen Davis</h5>
                            <div className="course-btn">
                              <Link to="#">View Details</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="course-box">
                      <div className="product">
                        <div className="product-img">
                          <Link to="#">
                            <ImageWithBasePath
                              className="img-fluid"
                              alt=""
                              src="assets/img/course/trending-course-03.jpg"
                              width={600}
                              height={300}
                            />
                          </Link>
                          <span className="text-bottom">$600</span>
                        </div>
                        <div className="feature-texts bgs-blue">
                          <span>Featured</span>
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icon/feature-badge.svg"
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="product-content">
                          <div className="course-info ">
                            <div className="rating rating-star">
                              <span className="average-rating rate-point ">
                                IT Security
                              </span>
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
                          <ul>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/user-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Students<span>750</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/star-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Ratings<span>4.9</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/star-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Lessons<span>25</span>
                                </h5>
                              </div>
                            </li>
                          </ul>
                          <div className="rating rating-star rating-two align-items-center">
                            <div className="rating-img">
                              <ImageWithBasePath src="assets/img/user/user12.jpg" alt="" />
                            </div>
                            <h5>Tyrone Roberts</h5>
                            <div className="course-btn">
                              <Link to="#">View Details</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="course-box">
                      <div className="product">
                        <div className="product-img">
                          <Link to="#">
                            <ImageWithBasePath
                              className="img-fluid"
                              alt=""
                              src="assets/img/course/trending-course-04.jpg"
                              width={600}
                              height={300}
                            />
                          </Link>
                          <span className="text-bottom">$600</span>
                        </div>
                        <div className="feature-texts bgs-blue">
                          <span>Featured</span>
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icon/feature-badge.svg"
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="product-content">
                          <div className="course-info ">
                            <div className="rating rating-star">
                              <span className="average-rating rate-point ">
                                IT Security
                              </span>
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
                          <ul>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/user-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Students<span>740</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/star-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Ratings<span>4.4</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/star-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Lessons<span>22</span>
                                </h5>
                              </div>
                            </li>
                          </ul>
                          <div className="rating rating-star rating-two align-items-center">
                            <div className="rating-img">
                              <ImageWithBasePath src="assets/img/user/user12.jpg" alt="" />
                            </div>
                            <h5>Tyrone Roberts</h5>
                            <div className="course-btn">
                              <Link to="#">View Details</Link>
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
            <div
              className="tab-pane fade"
              id="pills-seo"
              role="tabpanel"
              aria-labelledby="pills-seo-tab"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="trend-course-tab-slider ">
                  <OwlCarousel {...trendCourseTabSlider1}>
                    <div className="course-box">
                      <div className="product">
                        <div className="product-img">
                          <Link to="#">
                            <ImageWithBasePath
                              className="img-fluid"
                              alt=""
                              src="assets/img/course/trending-course-01.jpg"
                              width={600}
                              height={300}
                            />
                          </Link>
                          <span className="text-bottom">$600</span>
                        </div>
                        <div className="feature-texts bgs-blue">
                          <span>Featured</span>
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icon/feature-badge.svg"
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="product-content">
                          <div className="course-info ">
                            <div className="rating rating-star">
                              <span className="average-rating rate-point ">
                                marketing
                              </span>
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
                          <ul>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/user-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Students<span>800</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/star-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Ratings<span>5.0</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/star-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Lessons<span>20</span>
                                </h5>
                              </div>
                            </li>
                          </ul>
                          <div className="rating rating-star rating-two align-items-center">
                            <div className="rating-img">
                              <ImageWithBasePath src="assets/img/user/user10.jpg" alt="" />
                            </div>
                            <h5>James Collins</h5>
                            <div className="course-btn">
                              <Link to="#">View Details</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="course-box">
                      <div className="product">
                        <div className="product-img">
                          <Link to="#">
                            <ImageWithBasePath
                              className="img-fluid"
                              alt=""
                              src="assets/img/course/trending-course-02.jpg"
                              width={600}
                              height={300}
                            />
                          </Link>
                          <span className="text-bottom">$600</span>
                        </div>
                        <div className="feature-texts bgs-blue">
                          <span>Featured</span>
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icon/feature-badge.svg"
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="product-content">
                          <div className="course-info ">
                            <div className="rating rating-star">
                              <span className="average-rating rate-point ">
                                Digital Marketer
                              </span>
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
                          <ul>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/user-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Students<span>700</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/star-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Ratings<span>4.8</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/star-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Lessons<span>25</span>
                                </h5>
                              </div>
                            </li>
                          </ul>
                          <div className="rating rating-star rating-two align-items-center">
                            <div className="rating-img">
                              <ImageWithBasePath src="assets/img/user/user11.jpg" alt="" />
                            </div>
                            <h5>Allen Davis</h5>
                            <div className="course-btn">
                              <Link to="#">View Details</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="course-box">
                      <div className="product">
                        <div className="product-img">
                          <Link to="#">
                            <ImageWithBasePath
                              className="img-fluid"
                              alt=""
                              src="assets/img/course/trending-course-03.jpg"
                              width={600}
                              height={300}
                            />
                          </Link>
                          <span className="text-bottom">$600</span>
                        </div>
                        <div className="feature-texts bgs-blue">
                          <span>Featured</span>
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icon/feature-badge.svg"
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="product-content">
                          <div className="course-info ">
                            <div className="rating rating-star">
                              <span className="average-rating rate-point ">
                                IT Security
                              </span>
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
                          <ul>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/user-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Students<span>850</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/star-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Ratings<span>4.6</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/star-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Lessons<span>16</span>
                                </h5>
                              </div>
                            </li>
                          </ul>
                          <div className="rating rating-star rating-two align-items-center">
                            <div className="rating-img">
                              <ImageWithBasePath src="assets/img/user/user12.jpg" alt="" />
                            </div>
                            <h5>Tyrone Roberts</h5>
                            <div className="course-btn">
                              <Link to="#">View Details</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="course-box">
                      <div className="product">
                        <div className="product-img">
                          <Link to="#">
                            <ImageWithBasePath
                              className="img-fluid"
                              alt=""
                              src="assets/img/course/trending-course-04.jpg"
                              width={600}
                              height={300}
                            />
                          </Link>
                          <span className="text-bottom">$600</span>
                        </div>
                        <div className="feature-texts bgs-blue">
                          <span>Featured</span>
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icon/feature-badge.svg"
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="product-content">
                          <div className="course-info ">
                            <div className="rating rating-star">
                              <span className="average-rating rate-point ">
                                IT Security
                              </span>
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
                          <ul>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/user-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Students<span>780</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/star-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Ratings<span>4.8</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/star-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Lessons<span>18</span>
                                </h5>
                              </div>
                            </li>
                          </ul>
                          <div className="rating rating-star rating-two align-items-center">
                            <div className="rating-img">
                              <ImageWithBasePath src="assets/img/user/user12.jpg" alt="" />
                            </div>
                            <h5>Tyrone Roberts</h5>
                            <div className="course-btn">
                              <Link to="#">View Details</Link>
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
            <div
              className="tab-pane fade"
              id="pills-sales"
              role="tabpanel"
              aria-labelledby="pills-sales-tab"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="trend-course-tab-slider ">
                  <OwlCarousel {...trendCourseTabSlider1}>
                    <div className="course-box">
                      <div className="product">
                        <div className="product-img">
                          <Link to="#">
                            <ImageWithBasePath
                              className="img-fluid"
                              alt=""
                              src="assets/img/course/trending-course-01.jpg"
                              width={600}
                              height={300}
                            />
                          </Link>
                          <span className="text-bottom">$600</span>
                        </div>
                        <div className="feature-texts bgs-blue">
                          <span>Featured</span>
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icon/feature-badge.svg"
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="product-content">
                          <div className="course-info ">
                            <div className="rating rating-star">
                              <span className="average-rating rate-point ">
                                marketing
                              </span>
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
                          <ul>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/user-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Students<span>800</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/star-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Ratings<span>5.0</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/star-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Lessons<span>20</span>
                                </h5>
                              </div>
                            </li>
                          </ul>
                          <div className="rating rating-star rating-two align-items-center">
                            <div className="rating-img">
                              <ImageWithBasePath src="assets/img/user/user10.jpg" alt="" />
                            </div>
                            <h5>James Collins</h5>
                            <div className="course-btn">
                              <Link to="#">View Details</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="course-box">
                      <div className="product">
                        <div className="product-img">
                          <Link to="#">
                            <ImageWithBasePath
                              className="img-fluid"
                              alt=""
                              src="assets/img/course/trending-course-02.jpg"
                              width={600}
                              height={300}
                            />
                          </Link>
                          <span className="text-bottom">$600</span>
                        </div>
                        <div className="feature-texts bgs-blue">
                          <span>Featured</span>
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icon/feature-badge.svg"
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="product-content">
                          <div className="course-info ">
                            <div className="rating rating-star">
                              <span className="average-rating rate-point ">
                                Digital Marketer
                              </span>
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
                          <ul>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/user-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Students<span>700</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/star-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Ratings<span>5.0</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/star-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Lessons<span>10</span>
                                </h5>
                              </div>
                            </li>
                          </ul>
                          <div className="rating rating-star rating-two align-items-center">
                            <div className="rating-img">
                              <ImageWithBasePath src="assets/img/user/user11.jpg" alt="" />
                            </div>
                            <h5>Allen Davis</h5>
                            <div className="course-btn">
                              <Link to="#">View Details</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="course-box">
                      <div className="product">
                        <div className="product-img">
                          <Link to="#">
                            <ImageWithBasePath
                              className="img-fluid"
                              alt=""
                              src="assets/img/course/trending-course-03.jpg"
                              width={600}
                              height={300}
                            />
                          </Link>
                          <span className="text-bottom">$600</span>
                        </div>
                        <div className="feature-texts bgs-blue">
                          <span>Featured</span>
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icon/feature-badge.svg"
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="product-content">
                          <div className="course-info ">
                            <div className="rating rating-star">
                              <span className="average-rating rate-point ">
                                IT Security
                              </span>
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
                          <ul>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/user-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Students<span>600</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/star-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Ratings<span>4.4</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/star-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Lessons<span>25</span>
                                </h5>
                              </div>
                            </li>
                          </ul>
                          <div className="rating rating-star rating-two align-items-center">
                            <div className="rating-img">
                              <ImageWithBasePath src="assets/img/user/user12.jpg" alt="" />
                            </div>
                            <h5>Tyrone Roberts</h5>
                            <div className="course-btn">
                              <Link to="#">View Details</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="course-box">
                      <div className="product">
                        <div className="product-img">
                          <Link to="#">
                            <ImageWithBasePath
                              className="img-fluid"
                              alt=""
                              src="assets/img/course/trending-course-04.jpg"
                              width={600}
                              height={300}
                            />
                          </Link>
                          <span className="text-bottom">$600</span>
                        </div>
                        <div className="feature-texts bgs-blue">
                          <span>Featured</span>
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icon/feature-badge.svg"
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="product-content">
                          <div className="course-info ">
                            <div className="rating rating-star">
                              <span className="average-rating rate-point ">
                                IT Security
                              </span>
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
                          <ul>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/user-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Students<span>850</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/star-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Ratings<span>4.5</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <span className="icon">
                                <ImageWithBasePath
                                  src="assets/img/icon/star-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div className="list-item">
                                <h5>
                                  Lessons<span>15</span>
                                </h5>
                              </div>
                            </li>
                          </ul>
                          <div className="rating rating-star rating-two align-items-center">
                            <div className="rating-img">
                              <ImageWithBasePath src="assets/img/user/user12.jpg" alt="" />
                            </div>
                            <h5>Tyrone Roberts</h5>
                            <div className="course-btn">
                              <Link to="#">View Details</Link>
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
          </div>
        </div>
      </section>
      {/* /Most popular course */}
      {/* Share Your Knowledge */}
      <section className="share-knowledge-three p-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 d-flex align-items-center ">
              <div className="knowledge-img-three aos " data-aos="fade-up">
                <ImageWithBasePath
                  src="assets/img/choose-mentor.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-7 d-flex align-items-center justify-content-center">
              <div className="join-us-all aos " data-aos="fade-up">
                <div className="join-us-heading">
                  <span>WHY CHOOSE MENTORING</span>
                  <h2>
                    Experts in local &amp; international Mentors From Industries
                  </h2>
                  <p>
                    Agent hen an unknown printer took a galley of type and
                    scramble it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic.
                  </p>
                </div>
                <div className="join-two-face">
                  <ul>
                    <li>
                      <ImageWithBasePath src="assets/img/icon/tick-icon.svg" alt="" />
                      Outstanding Mentos
                    </li>
                    <li>
                      <ImageWithBasePath src="assets/img/icon/tick-icon.svg" alt="" />
                      More than 200+ Locations
                    </li>
                    <li>
                      <ImageWithBasePath src="assets/img/icon/tick-icon.svg" alt="" />
                      Specialised Courses
                    </li>
                    <li>
                      <ImageWithBasePath src="assets/img/icon/tick-icon.svg" alt="" />
                      Market-leading research
                    </li>
                  </ul>
                  <div className="explore-more ">
                    <Link to="/mentee/search-mentor" className="btn bg-explore">
                      Read More
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Share Your Knowledge */}
      {/* Most Trending  Courses */}
      <section className="section trending-courses trending-courses-three popular-course-three">
        <div className="container">
          <div className="popular-three-head">
            <div className="section-header h-three aos " data-aos="fade-up">
              <h2>Our Popular Courses</h2>
              <div className="heading-bar">
                <span />
                <span />
              </div>
              <p className="sub-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                aenean accumsan bibendum{" "}
              </p>
            </div>
            <div className="view-all">
              <Link to="#">
                View All Courses
                <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="trend-course-tab-slider">
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
                    <div className="feature-texts">
                      <span>Featured</span>
                      <span>
                        <ImageWithBasePath src="assets/img/icon/feature-badge.svg" alt="" />
                      </span>
                    </div>
                    <div className="product-content">
                      <div className="rating rate-star mb-3">
                        <span className="average-rating rate-point ">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          5.0
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
                    <div className="feature-texts">
                      <span>Maths</span>
                      <span>
                        <ImageWithBasePath src="assets/img/icon/feature-badge.svg" alt="" />
                      </span>
                    </div>
                    <div className="product-content">
                      <div className="rating rate-star mb-3">
                        <span className="average-rating rate-point ">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          4.7
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
                          <span>$500</span>
                        </div>
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
                    <div className="feature-texts">
                      <span>Research</span>
                      <span>
                        <ImageWithBasePath src="assets/img/icon/feature-badge.svg" alt="" />
                      </span>
                    </div>
                    <div className="product-content">
                      <div className="rating rate-star mb-3">
                        <span className="average-rating rate-point ">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          4.6
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
                          <span>$700</span>
                        </div>
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
                    <div className="feature-texts">
                      <span>Featured</span>
                      <span>
                        <ImageWithBasePath src="assets/img/icon/feature-badge.svg" alt="" />
                      </span>
                    </div>
                    <div className="product-content">
                      <div className="rating rate-star mb-3">
                        <span className="average-rating rate-point ">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          4.5
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
                          <span>$650</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </OwlCarousel>
              </div>
            </div>
            <div className="trusted-by">
              <div className="row align-items-center">
                <div className="col-md-2">
                  <div className="trust-list-title">
                    <h5>Trusted by</h5>
                  </div>
                </div>
                <div className="col-md-10">
                  <ul className="trusted-list">
                  <OwlCarousel {...trustedSlider}>
                    <li>
                      <div className="trust-icon">
                        <ImageWithBasePath src="assets/img/icon/trust-icon-01.svg" alt="" />
                      </div>
                      <span>Angular Js</span>
                    </li>
                    <li>
                      <div className="trust-icon">
                        <ImageWithBasePath src="assets/img/icon/trust-icon-02.svg" alt="" />
                      </div>
                      <span>App Store</span>
                    </li>
                    <li>
                      <div className="trust-icon">
                        <ImageWithBasePath src="assets/img/icon/trust-icon-03.svg" alt="" />
                      </div>
                      <span>Podcast</span>
                    </li>
                    <li>
                      <div className="trust-icon">
                        <ImageWithBasePath src="assets/img/icon/trust-icon-04.svg" alt="" />
                      </div>
                      <span>Promit</span>
                    </li>
                    <li>
                      <div className="trust-icon">
                        <ImageWithBasePath src="assets/img/icon/trust-icon-05.svg" alt="" />
                      </div>
                      <span>Dribble</span>
                    </li>
                    </OwlCarousel>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Most Trending Courses */}
      {/* Say testimonial Two */}
      <section className="testimonial-two student-say-about testimonial-section">
        <div className="container">
          <div className="section-header h-three aos " data-aos="fade-up">
            <h2>Testimonials &amp; Reviews</h2>
            <div className="heading-bar">
              <span />
              <span />
            </div>
            <p className="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              aenean accumsan bibendum{" "}
            </p>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 aos"
              data-aos="fade-up"
              data-bs-interval={5000}
            >
              <div className="customer-review">
                <div className="review-card">
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <p>
                    “ I believe in lifelong learning and Skola is a great place
                    to learn from experts. I've learned a lot and recommend it
                    to all my friends “
                  </p>
                  <div className="customer">
                    <ImageWithBasePath src="assets/img/user/user30.jpg" alt="" />
                  </div>
                </div>
                <div className="cus-name">
                  <Link to="#">Madison</Link>
                  <span>Developer</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 aos"
              data-aos="fade-up"
              data-bs-interval={5000}
            >
              <div className="customer-review">
                <div className="review-card">
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <p>
                    “ I believe in lifelong learning and Skola is a great place
                    to learn from experts. I've learned a lot and recommend it
                    to all my friends “
                  </p>
                  <div className="customer">
                    <ImageWithBasePath src="assets/img/user/user12.jpg" alt="" />
                  </div>
                </div>
                <div className="cus-name">
                  <Link to="#">Alexander</Link>
                  <span>Designer</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 aos"
              data-aos="fade-up"
              data-bs-interval={5000}
            >
              <div className="customer-review">
                <div className="review-card">
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <p>
                    “ I believe in lifelong learning and Skola is a great place
                    to learn from experts. I've learned a lot and recommend it
                    to all my friends “
                  </p>
                  <div className="customer">
                    <ImageWithBasePath src="assets/img/user/user13.jpg" alt="" />
                  </div>
                </div>
                <div className="cus-name">
                  <Link to="#">Barrett Valentine</Link>
                  <span>Marketer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Say testimonial Two */}
      {/* Featured Instructor */}
      <section className="featured-instructor featured-instructor-three">
        <div className="container">
          <div className="popular-three-head">
            <div className="section-header h-three aos " data-aos="fade-up">
              <h2>Our Exclusive Mentors</h2>
              <div className="heading-bar">
                <span />
                <span />
              </div>
              <p className="sub-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                aenean accumsan bibendum{" "}
              </p>
            </div>
            <div className="view-all">
              <Link to="/mentee/search-mentor">
                View All Mentors
                <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="featured-instructor-head aos " data-aos="fade-up">
            <div className="row">
              <div className="col-md-12">
                <div className="instructor-slider">
                <OwlCarousel {...instructorSlider}>
                  <div className="large-team">
                    <div className="student-img">
                      <Link to="/mentee/mentor-profile">
                        <ImageWithBasePath
                          src="assets/img/mendor/exclusive-mentor-01.jpg"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="team-content">
                      <h4>
                        <Link to="/mentee/mentor-profile">Steve kennedy</Link>
                        <i className="fas fa-check-double" />
                      </h4>
                      <span className="star-rate">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        5.0
                      </span>
                      <div className="view-student-three">
                        <ul className="view-student-three-list justify-content-between">
                          <li>
                            <ImageWithBasePath
                              src="assets/img/icon/location-02.svg"
                              className="me-1"
                              alt=""
                            />
                            Norway
                          </li>
                          <li>17 Courses</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="large-team">
                    <div className="student-img">
                      <Link to="/mentee/mentor-profile">
                        <ImageWithBasePath
                          src="assets/img/mendor/exclusive-mentor-02.jpg"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="team-content">
                      <h4>
                        <Link to="/mentee/mentor-profile">William Harvey</Link>
                        <i className="fas fa-check-double" />
                      </h4>
                      <span className="star-rate">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        4.5
                      </span>
                      <div className="view-student-three">
                        <ul className="view-student-three-list justify-content-between">
                          <li>
                            <ImageWithBasePath
                              src="assets/img/icon/location-02.svg"
                              className="me-1"
                              alt=""
                            />
                            U.S.A
                          </li>
                          <li>16 Courses</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="large-team">
                    <div className="student-img">
                      <Link to="/mentee/mentor-profile">
                        <ImageWithBasePath
                          src="assets/img/mendor/exclusive-mentor-03.jpg"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="team-content">
                      <h4>
                        <Link to="/mentee/mentor-profile">Leonardo</Link>
                        <i className="fas fa-check-double" />
                      </h4>
                      <span className="star-rate">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        4.8
                      </span>
                      <div className="view-student-three">
                        <ul className="view-student-three-list justify-content-between">
                          <li>
                            <ImageWithBasePath
                              src="assets/img/icon/location-02.svg"
                              className="me-1"
                              alt=""
                            />
                            canada
                          </li>
                          <li>20 Courses</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="large-team">
                    <div className="student-img">
                      <Link to="/mentee/mentor-profile">
                        <ImageWithBasePath
                          src="assets/img/mendor/exclusive-mentor-04.jpg"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="team-content">
                      <h4>
                        <Link to="/mentee/mentor-profile">George Franklin</Link>
                        <i className="fas fa-check-double" />
                      </h4>
                      <span className="star-rate">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        4.9
                      </span>
                      <div className="view-student-three">
                        <ul className="view-student-three-list justify-content-between">
                          <li>
                            <ImageWithBasePath
                              src="assets/img/icon/location-02.svg"
                              className="me-1"
                              alt=""
                            />
                            Norway
                          </li>
                          <li>22 Courses</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="large-team">
                    <div className="student-img">
                      <Link to="/mentee/mentor-profile">
                        <ImageWithBasePath
                          src="assets/img/mendor/exclusive-mentor-02.jpg"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="team-content">
                      <h4>
                        <Link to="/mentee/mentor-profile">William Harvey</Link>
                        <i className="fas fa-check-double" />
                      </h4>
                      <span className="star-rate">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        5.0
                      </span>
                      <div className="view-student-three">
                        <ul className="view-student-three-list justify-content-between">
                          <li>
                            <ImageWithBasePath
                              src="assets/img/icon/location-02.svg"
                              className="me-1"
                              alt=""
                            />
                            U.S.A
                          </li>
                          <li>23Courses</li>
                        </ul>
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
      {/* Featured Instructor */}
      {/* Faq */}
      <section className="faq-four-sec">
        <div className="container">
          <div className="section-header h-three aos " data-aos="fade-up">
            <h2>Have Many Questions?</h2>
            <div className="heading-bar">
              <span />
              <span />
            </div>
            <p className="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              aenean accumsan bibendum{" "}
            </p>
          </div>
          <div className="faq-tab-list">
            <ul
              className="nav nav-pills mb-3"
              id="pills-tab-two"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-general-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-general"
                  type="button"
                  role="tab"
                  aria-controls="pills-general"
                  aria-selected="true"
                >
                  General
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-mentor-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-mentor"
                  type="button"
                  role="tab"
                  aria-controls="pills-mentor"
                  aria-selected="false"
                  tabIndex={-1}
                >
                  Mentor
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-mentee-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-mentee"
                  type="button"
                  role="tab"
                  aria-controls="pills-mentee"
                  aria-selected="false"
                >
                  Mentees
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-booking-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-booking"
                  type="button"
                  role="tab"
                  aria-controls="pills-booking"
                  aria-selected="false"
                  tabIndex={-1}
                >
                  Booking
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-download-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-download"
                  type="button"
                  role="tab"
                  aria-controls="pills-download"
                  aria-selected="false"
                  tabIndex={-1}
                >
                  Download
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContent-two">
            <div
              className="tab-pane fade active show"
              id="pills-general"
              role="tabpanel"
              aria-labelledby="pills-general-tab"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="faq-card">
                    <div
                      className="panel-group"
                      id="accordion"
                      role="tablist"
                      aria-multiselectable="true"
                    >
                      <div className="faq-tab">
                        <div className="panel panel-default">
                          <div
                            className="panel-heading"
                            role="tab"
                            id="headingOne"
                          >
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
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="faq-tab">
                        <div className="panel panel-default">
                          <div
                            className="panel-heading"
                            role="tab"
                            id="headingTwo"
                          >
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
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
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
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
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
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-mentor"
              role="tabpanel"
              aria-labelledby="pills-mentor-tab"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="faq-card">
                    <div
                      className="panel-group"
                      id="accordion-two"
                      role="tablist"
                      aria-multiselectable="true"
                    >
                      <div className="faq-tab">
                        <div className="panel panel-default">
                          <div
                            className="panel-heading"
                            role="tab"
                            id="headingOne-two"
                          >
                            <p className="panel-title">
                              <Link
                                className="collapsed"
                                data-bs-toggle="collapse"
                                data-bs-parent="#accordion-two"
                                to="#collapseOne-two"
                                aria-expanded="false"
                                aria-controls="collapseOne-two"
                              >
                                Is the regular license the same thing as an
                                editorial license?
                              </Link>
                            </p>
                          </div>
                          <div
                            id="collapseOne-two"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="headingOne-two"
                            data-bs-parent="#accordion-two"
                          >
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="faq-tab">
                        <div className="panel panel-default">
                          <div
                            className="panel-heading"
                            role="tab"
                            id="headingTwo-two"
                          >
                            <p className="panel-title">
                              <Link
                                className="collapsed"
                                data-bs-toggle="collapse"
                                data-bs-parent="#accordion-two"
                                to="#collapseTwo-two"
                                aria-expanded="false"
                                aria-controls="collapseTwo-two"
                              >
                                Is the regular license the same thing as an
                                editorial license?
                              </Link>
                            </p>
                          </div>
                          <div
                            id="collapseTwo-two"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="headingTwo-two"
                            data-bs-parent="#accordion-two"
                          >
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="faq-tab">
                        <div className="panel panel-default">
                          <div
                            className="panel-heading"
                            role="tab"
                            id="headingThree-two"
                          >
                            <p className="panel-title">
                              <Link
                                className="collapsed"
                                data-bs-toggle="collapse"
                                data-bs-parent="#accordion-two"
                                to="#collapseThree-two"
                                aria-expanded="false"
                                aria-controls="collapseThree-two"
                              >
                                Is the regular license the same thing as an
                                editorial license?
                              </Link>
                            </p>
                          </div>
                          <div
                            id="collapseThree-two"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="headingThree-two"
                            data-bs-parent="#accordion-two"
                          >
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="faq-tab">
                        <div className="panel panel-default">
                          <div
                            className="panel-heading"
                            role="tab"
                            id="headingFour-two"
                          >
                            <p className="panel-title">
                              <Link
                                className="collapsed"
                                data-bs-toggle="collapse"
                                data-bs-parent="#accordion-two"
                                to="#collapseFour-two"
                                aria-expanded="false"
                                aria-controls="collapseFour-two"
                              >
                                Is the regular license the same thing as an
                                editorial license?
                              </Link>
                            </p>
                          </div>
                          <div
                            id="collapseFour-two"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="headingFour-two"
                            data-bs-parent="#accordion-two"
                          >
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-mentee"
              role="tabpanel"
              aria-labelledby="pills-mentee-tab"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="faq-card">
                    <div
                      className="panel-group"
                      id="accordion-three"
                      role="tablist"
                      aria-multiselectable="true"
                    >
                      <div className="faq-tab">
                        <div className="panel panel-default">
                          <div
                            className="panel-heading"
                            role="tab"
                            id="headingOne-three"
                          >
                            <p className="panel-title">
                              <Link
                                className="collapsed"
                                data-bs-toggle="collapse"
                                data-bs-parent="#accordion-three"
                                to="#collapseOne-three"
                                aria-expanded="false"
                                aria-controls="collapseOne-three"
                              >
                                Is the regular license the same thing as an
                                editorial license?
                              </Link>
                            </p>
                          </div>
                          <div
                            id="collapseOne-three"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="headingOne-three"
                            data-bs-parent="#accordion-three"
                          >
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="faq-tab">
                        <div className="panel panel-default">
                          <div
                            className="panel-heading"
                            role="tab"
                            id="headingTwo-three"
                          >
                            <p className="panel-title">
                              <Link
                                className="collapsed"
                                data-bs-toggle="collapse"
                                data-bs-parent="#accordion-three"
                                to="#collapseTwo-three"
                                aria-expanded="false"
                                aria-controls="collapseTwo-three"
                              >
                                Is the regular license the same thing as an
                                editorial license?
                              </Link>
                            </p>
                          </div>
                          <div
                            id="collapseTwo-three"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="headingTwo-three"
                            data-bs-parent="#accordion-three"
                          >
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="faq-tab">
                        <div className="panel panel-default">
                          <div
                            className="panel-heading"
                            role="tab"
                            id="headingThree-three"
                          >
                            <p className="panel-title">
                              <Link
                                className="collapsed"
                                data-bs-toggle="collapse"
                                data-bs-parent="#accordion-three"
                                to="#collapseThree-three"
                                aria-expanded="false"
                                aria-controls="collapseThree-three"
                              >
                                Is the regular license the same thing as an
                                editorial license?
                              </Link>
                            </p>
                          </div>
                          <div
                            id="collapseThree-three"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="headingThree-three"
                            data-bs-parent="#accordion-three"
                          >
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="faq-tab">
                        <div className="panel panel-default">
                          <div
                            className="panel-heading"
                            role="tab"
                            id="headingFour-three"
                          >
                            <p className="panel-title">
                              <Link
                                className="collapsed"
                                data-bs-toggle="collapse"
                                data-bs-parent="#accordion-three"
                                to="#collapseFour-three"
                                aria-expanded="false"
                                aria-controls="collapseFour-three"
                              >
                                Is the regular license the same thing as an
                                editorial license?
                              </Link>
                            </p>
                          </div>
                          <div
                            id="collapseFour-three"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="headingFour-three"
                            data-bs-parent="#accordion-three"
                          >
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-booking"
              role="tabpanel"
              aria-labelledby="pills-booking-tab"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="faq-card">
                    <div
                      className="panel-group"
                      id="accordion-four"
                      role="tablist"
                      aria-multiselectable="true"
                    >
                      <div className="faq-tab">
                        <div className="panel panel-default">
                          <div
                            className="panel-heading"
                            role="tab"
                            id="headingOne-four"
                          >
                            <p className="panel-title">
                              <Link
                                className="collapsed"
                                data-bs-toggle="collapse"
                                data-bs-parent="#accordion-four"
                                to="#collapseOne-four"
                                aria-expanded="false"
                                aria-controls="collapseOne-four"
                              >
                                Is the regular license the same thing as an
                                editorial license?
                              </Link>
                            </p>
                          </div>
                          <div
                            id="collapseOne-four"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="headingOne-four"
                            data-bs-parent="#accordion-four"
                          >
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="faq-tab">
                        <div className="panel panel-default">
                          <div
                            className="panel-heading"
                            role="tab"
                            id="headingTwo-four"
                          >
                            <p className="panel-title">
                              <Link
                                className="collapsed"
                                data-bs-toggle="collapse"
                                data-bs-parent="#accordion-four"
                                to="#collapseTwo-four"
                                aria-expanded="false"
                                aria-controls="collapseTwo-four"
                              >
                                Is the regular license the same thing as an
                                editorial license?
                              </Link>
                            </p>
                          </div>
                          <div
                            id="collapseTwo-four"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="headingTwo-four"
                            data-bs-parent="#accordion-four"
                          >
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="faq-tab">
                        <div className="panel panel-default">
                          <div
                            className="panel-heading"
                            role="tab"
                            id="headingThree-four"
                          >
                            <p className="panel-title">
                              <Link
                                className="collapsed"
                                data-bs-toggle="collapse"
                                data-bs-parent="#accordion-four"
                                to="#collapseThree-four"
                                aria-expanded="false"
                                aria-controls="collapseThree-four"
                              >
                                Is the regular license the same thing as an
                                editorial license?
                              </Link>
                            </p>
                          </div>
                          <div
                            id="collapseThree-four"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="headingThree-four"
                            data-bs-parent="#accordion-four"
                          >
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="faq-tab">
                        <div className="panel panel-default">
                          <div
                            className="panel-heading"
                            role="tab"
                            id="headingFour-four"
                          >
                            <p className="panel-title">
                              <Link
                                className="collapsed"
                                data-bs-toggle="collapse"
                                data-bs-parent="#accordion-four"
                                to="#collapseFour-four"
                                aria-expanded="false"
                                aria-controls="collapseFour-four"
                              >
                                Is the regular license the same thing as an
                                editorial license?
                              </Link>
                            </p>
                          </div>
                          <div
                            id="collapseFour-four"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="headingFour-four"
                            data-bs-parent="#accordion-four"
                          >
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-download"
              role="tabpanel"
              aria-labelledby="pills-download-tab"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="faq-card">
                    <div
                      className="panel-group"
                      id="accordion-five"
                      role="tablist"
                      aria-multiselectable="true"
                    >
                      <div className="faq-tab">
                        <div className="panel panel-default">
                          <div
                            className="panel-heading"
                            role="tab"
                            id="headingOne-five"
                          >
                            <p className="panel-title">
                              <Link
                                className="collapsed"
                                data-bs-toggle="collapse"
                                data-bs-parent="#accordion-five"
                                to="#collapseOne-five"
                                aria-expanded="false"
                                aria-controls="collapseOne-five"
                              >
                                Is the regular license the same thing as an
                                editorial license?
                              </Link>
                            </p>
                          </div>
                          <div
                            id="collapseOne-five"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="headingOne-five"
                            data-bs-parent="#accordion-five"
                          >
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="faq-tab">
                        <div className="panel panel-default">
                          <div
                            className="panel-heading"
                            role="tab"
                            id="headingTwo-five"
                          >
                            <p className="panel-title">
                              <Link
                                className="collapsed"
                                data-bs-toggle="collapse"
                                data-bs-parent="#accordion-five"
                                to="#collapseTwo-five"
                                aria-expanded="false"
                                aria-controls="collapseTwo-five"
                              >
                                Is the regular license the same thing as an
                                editorial license?
                              </Link>
                            </p>
                          </div>
                          <div
                            id="collapseTwo-five"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="headingTwo-five"
                            data-bs-parent="#accordion-five"
                          >
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="faq-tab">
                        <div className="panel panel-default">
                          <div
                            className="panel-heading"
                            role="tab"
                            id="headingThree-five"
                          >
                            <p className="panel-title">
                              <Link
                                className="collapsed"
                                data-bs-toggle="collapse"
                                data-bs-parent="#accordion-five"
                                to="#collapseThree-five"
                                aria-expanded="false"
                                aria-controls="collapseThree-five"
                              >
                                Is the regular license the same thing as an
                                editorial license?
                              </Link>
                            </p>
                          </div>
                          <div
                            id="collapseThree-five"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="headingThree-five"
                            data-bs-parent="#accordion-five"
                          >
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="faq-tab">
                        <div className="panel panel-default">
                          <div
                            className="panel-heading"
                            role="tab"
                            id="headingFour-five"
                          >
                            <p className="panel-title">
                              <Link
                                className="collapsed"
                                data-bs-toggle="collapse"
                                data-bs-parent="#accordion-five"
                                to="#collapseFour-five"
                                aria-expanded="false"
                                aria-controls="collapseFour-five"
                              >
                                Is the regular license the same thing as an
                                editorial license?
                              </Link>
                            </p>
                          </div>
                          <div
                            id="collapseFour-five"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="headingFour-five"
                            data-bs-parent="#accordion-five"
                          >
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </div>
                        </div>
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
      {/* Our Blog */}
      <section className="section our-blog trending-courses-three popular-course-three blog-four">
        <div className="container">
          <div className="section-header h-three aos " data-aos="fade-up">
            <h2>From Our Blog</h2>
            <div className="heading-bar">
              <span />
              <span />
            </div>
            <p className="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
            </p>
          </div>
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="trend-course-tab-slider">
              <OwlCarousel {...trendCourseTabSlider2}>
                <div className="course-box">
                  <div className="product">
                    <div className="product-img trend-course">
                      <Link to="/blog/blog-details">
                        <ImageWithBasePath
                          className="img-fluid"
                          alt=""
                          src="assets/img/blog/blog-18.jpg"
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
                            <i className="fe fe-user" />
                          </span>
                          Robert Forex
                        </li>
                        <li>
                          <span>
                            <i className="fas fa-calendar-alt" />
                          </span>
                          21 Jan, 2023
                        </li>
                      </ul>
                      <h3 className="title">
                        <Link to="/blog/blog-details">
                          Learn Python – Interactive Free Tutorials
                        </Link>
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular{" "}
                      </p>
                      <div className="reads-more">
                        <Link to="/blog/blog-details">
                          Read More <i className="fe fe-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="course-box">
                  <div className="product">
                    <div className="product-img trend-course">
                      <Link to="/blog/blog-details">
                        <ImageWithBasePath
                          className="img-fluid"
                          alt=""
                          src="assets/img/blog/blog-19.jpg"
                        />
                      </Link>
                    </div>
                    <div className="feature-texts">
                      <span>Designer</span>
                    </div>
                    <div className="product-content">
                      <ul className="date">
                        <li>
                          <span>
                            <i className="fe fe-user" />
                          </span>
                          Leonardo
                        </li>
                        <li>
                          <span>
                            <i className="fas fa-calendar-alt" />
                          </span>
                          25 Jan, 2023
                        </li>
                      </ul>
                      <h3 className="title">
                        <Link to="/blog/blog-details">
                          Learn Python – Interactive Free Tutorials
                        </Link>
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular{" "}
                      </p>
                      <div className="reads-more">
                        <Link to="/blog/blog-details">
                          Read More <i className="fe fe-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="course-box">
                  <div className="product">
                    <div className="product-img trend-course">
                      <Link to="/blog/blog-details">
                        <ImageWithBasePath
                          className="img-fluid"
                          alt=""
                          src="assets/img/blog/blog-20.jpg"
                        />
                      </Link>
                    </div>
                    <div className="feature-texts">
                      <span>Developer</span>
                    </div>
                    <div className="product-content">
                      <ul className="date">
                        <li>
                          <span>
                            <i className="fe fe-user" />
                          </span>
                          Madison
                        </li>
                        <li>
                          <span>
                            <i className="fas fa-calendar-alt" />
                          </span>
                          19 Jan, 2023
                        </li>
                      </ul>
                      <h3 className="title">
                        <Link to="/blog/blog-details">
                          Learn Python – Interactive Free Tutorials
                        </Link>
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular{" "}
                      </p>
                      <div className="reads-more">
                        <Link to="/blog/blog-details">
                          Read More <i className="fe fe-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="course-box">
                  <div className="product">
                    <div className="product-img trend-course">
                      <Link to="/blog/blog-details">
                        <ImageWithBasePath
                          className="img-fluid"
                          alt=""
                          src="assets/img/blog/blog-18.jpg"
                        />
                      </Link>
                    </div>
                    <div className="feature-texts">
                      <span>Designer</span>
                    </div>
                    <div className="product-content">
                      <ul className="date">
                        <li>
                          <span>
                            <i className="fe fe-user" />
                          </span>
                          Alexander
                        </li>
                        <li>
                          <span>
                            <i className="fas fa-calendar-alt" />
                          </span>
                          20 Jan, 2023
                        </li>
                      </ul>
                      <h3 className="title">
                        <Link to="/blog/blog-details">
                          Learn Python – Interactive Free Tutorials
                        </Link>
                      </h3>
                      <p>
                        Do you want to move on next step? Choose your most
                        popular{" "}
                      </p>
                      <div className="reads-more">
                        <Link to="/blog/blog-details">
                          Read More <i className="fe fe-arrow-right" />
                        </Link>
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
      {/* /Our Blog */}
      {/* New Course join */}
      <section className="new-course new-course-three">
        <div className="container">
          <div className="become-mentor">
            <div className="row">
              <div className="col-md-12">
                <div className="every-new-course aos " data-aos="fade-up">
                  <div className="section-header">
                    <h2>Become a Popular Mentor </h2>
                    <p>We only work with the best Courses around the globe.</p>
                  </div>
                  <div className="mentor-btns">
                    <div className="log-btn">
                      <Link to="/login">
                        Start Login
                        <ImageWithBasePath
                          src="assets/img/icon/login-circle.svg"
                          alt=""
                          className="ms-2"
                        />
                      </Link>
                    </div>
                    <div className="register-btn">
                      <Link to="/register">
                        Register Now
                        <i className="fas fa-user ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* New Course */}
      <HomeFourfooter />
    </div>
  );
};

export default HomeFour;

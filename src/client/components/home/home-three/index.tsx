import React, { useEffect, useState } from "react";
import HomeThreeHeader from "./header";
import HomeThreeFooter from "./footer";
import Slider from "react-slick";
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import ProgressButton from "../../common/progress/progress";

const HomeThree = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const [isClassAdded, setIsClassAdded] = useState([false]);
  const toggleClass = (index) => {
    const newClassAdded = [...isClassAdded];

    newClassAdded[index] = !newClassAdded[index];

    setIsClassAdded(newClassAdded);
  };
  const browseCatSlider = {
    loop: true,
    margin: 24,
    dots: false,
    nav: true,
    smartSpeed: 1000,
    dotsSpeed: 500,
    dragEndSpeed: 1000,
    navText: [
      "<i class='fas fa-chevron-left'></i>",
      "<i class='fas fa-chevron-right'></i>",
    ],
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
        items: 4,
      },
      1300: {
        items: 4,
      },
    },
  };
  const mentoringCourseSlider = {
    dots: false,
    autoplay: false,
    slidesToShow: 4,
    margin: 20,
    speed: 500,
    nav: true,
    // navText : ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
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
        items: 4,
      },
      1300: {
        items: 4,
      },
    },
  };
  const popularCourseSlider = {
    dots: false,
    autoplay: false,
    nav: true,
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
  const testiCustomerSlider = {
    loop: true,
    margin: 24,
    dots: true,
    nav: true,
    smartSpeed: 1000,
    dotsSpeed: 500,
    dragEndSpeed: 1000,
    navText: [
      "<i class='fas fa-chevron-left'></i>",
      "<i class='fas fa-chevron-right'></i>",
    ],
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
      },
    },
  };
  const jobAreaSlider = {
    loop: true,
    margin: 24,
    dots: true,
    nav: true,
    smartSpeed: 1000,
    dotsSpeed: 500,
    dragEndSpeed: 1000,
    navText: [
      "<i class='fas fa-chevron-left'></i>",
      "<i class='fas fa-chevron-right'></i>",
    ],
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
      },
    },
  };
  const newsCardSlider = {
    loop: true,
    margin: 24,
    dots: false,
    nav: true,
    smartSpeed: 1000,
    dotsSpeed: 500,
    dragEndSpeed: 1000,
    navText: [
      "<i class='fas fa-chevron-left'></i>",
      "<i class='fas fa-chevron-right'></i>",
    ],
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
        items: 2,
      },
      1300: {
        items: 3,
      },
    },
  };

  return (
    <>
      <div className="main-wrapper main-wrapper-three">
        <HomeThreeHeader />
        {/* Home Banner */}
        <section className="section section-search home-slider-two index-three">
          <div className="container">
            <div
              className="banner-wrapper m-auto text-center aos"
              data-aos="fade-up"
            >
              <div className="banner-header">
                <h1>Find the Perfect Mentors Near Your Location</h1>
                <p>Own your future learning new skills online</p>
              </div>
              {/* Search */}
              <div className="search-box search-three">
                <form action="/mentee/search-mentor">
                  <div className="form-group search-location">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Keyword / Course Name"
                    />
                  </div>
                  <div className="form-group search-info">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City or Postalcode"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary search-btn">
                    <i>
                      <ImageWithBasePath
                        src="assets/img/icon/search-white-icon.svg"
                        alt=""
                      />
                    </i>{" "}
                    <span>Search</span>
                  </button>
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
        </section>
        {/* /Home Banner */}
        {/* Most popular Categories */}
        <section className="most-popular most-popular-two">
          <div className="container">
            <div className="section-top-head top-head-three">
              <div className="section-header aos " data-aos="fade-up">
                <h2>Browse by category</h2>
                <p className="sub-title">
                  Find the Categories that’s perfect for you. about 800+ new
                  courses everyday
                </p>
              </div>
            </div>
            <div className="popular-categories aos " data-aos="fade-up">
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <div className="browse-cat-slider owl-carousel owl-loaded owl-drag">
                    <OwlCarousel {...browseCatSlider}>
                      <Link to="/mentee/search-mentor">
                        <div className="sub-categories align-items-center">
                          <div className="categories-img d-flex justify-content-center align-items-center">
                            <ImageWithBasePath
                              src="assets/img/categories/cate-1.svg"
                              alt=""
                            />
                          </div>
                          <div className="categories-text">
                            <h4>UI Design</h4>
                            <h5>
                              <span>120</span> Mentors Available
                            </h5>
                          </div>
                        </div>
                      </Link>
                      <Link to="/mentee/search-mentor">
                        <div className="sub-categories align-items-center">
                          <div className="categories-img d-flex justify-content-center align-items-center">
                            <ImageWithBasePath
                              src="assets/img/categories/cate-2.svg"
                              alt=""
                            />
                          </div>
                          <div className="categories-text">
                            <h4>Development</h4>
                            <h5>
                              <span>200</span> Mentors Available
                            </h5>
                          </div>
                        </div>
                      </Link>
                      <Link to="/mentee/search-mentor">
                        <div className="sub-categories align-items-center">
                          <div className="categories-img d-flex justify-content-center align-items-center">
                            <ImageWithBasePath
                              src="assets/img/categories/cate-3.svg"
                              alt=""
                            />
                          </div>
                          <div className="categories-text">
                            <h4>IT &amp; Software</h4>
                            <h5>
                              <span>240</span> Mentors Available
                            </h5>
                          </div>
                        </div>
                      </Link>
                      <Link to="/mentee/search-mentor">
                        <div className="sub-categories align-items-center">
                          <div className="categories-img d-flex justify-content-center align-items-center">
                            <ImageWithBasePath
                              src="assets/img/categories/cate-4.svg"
                              alt=""
                            />
                          </div>
                          <div className="categories-text">
                            <h4>Business</h4>
                            <h5>
                              <span>292</span> Mentors Available
                            </h5>
                          </div>
                        </div>
                      </Link>
                      <Link to="/mentee/search-mentor">
                        <div className="sub-categories align-items-center">
                          <div className="categories-img d-flex justify-content-center align-items-center">
                            <ImageWithBasePath
                              src="assets/img/categories/cate-5.svg"
                              alt=""
                            />
                          </div>
                          <div className="categories-text">
                            <h4>Marketing</h4>
                            <h5>
                              <span>150</span> Mentors Available
                            </h5>
                          </div>
                        </div>
                      </Link>
                      <Link to="/mentee/search-mentor">
                        <div className="sub-categories align-items-center">
                          <div className="categories-img d-flex justify-content-center align-items-center">
                            <ImageWithBasePath
                              src="assets/img/categories/cate-6.svg"
                              alt=""
                            />
                          </div>
                          <div className="categories-text">
                            <h4>Photography</h4>
                            <h5>
                              <span>160</span> Mentors Available
                            </h5>
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
        {/* /Most popular Categories */}
        {/* Lets Work */}
        <section className="lets-work">
          <div className="container">
            <div className="lets-work-card">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <div className="explore-img">
                        <ImageWithBasePath
                          src="assets/img/work-img.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="explore-title">
                        <h2>
                          Let’s Work Together{" "}
                          <span> &amp; Explore Opportunities</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="work-btns">
                    <div className="btn-reg">
                      <Link to="/register">Register Now</Link>
                    </div>
                    <div className="btn-log">
                      <Link to="/login">Sign In</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Most trending course */}
        <section className="section trending-courses trending-courses-two trend-two">
          <div className="container">
            <div className="section-top-head top-head-three">
              <div className="section-header aos " data-aos="fade-up">
                <h2>Featured courses of the day</h2>
                <p className="sub-title">Featured courses of the day</p>
              </div>
            </div>
            <div className="broad-course-tab trending-tab">
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
                <div className="course-two-all aos " data-aos="fade-up">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-01.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span
                              onClick={() => toggleClass(0)}
                              className={isClassAdded[0] ? "favourite selected" : "favourite"}
                            >
                              <i className="fas fa-heart"></i>
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  800 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  60 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Learn CorelDraw – Interactive Tutorial
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$200</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-02.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span
                              onClick={() => toggleClass(0)}
                              className={isClassAdded[0] ? "favourite selected" : "favourite"}
                            >
                              <i className="fas fa-heart"></i>
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user3.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  700 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  60 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Information About UI/UX Design Degree
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$300</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-03.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span
                              onClick={() => toggleClass(1)}
                              className={isClassAdded[1] ? "favourite selected" : "favourite"}
                            >
                              <i className="fas fa-heart"></i>
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user4.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  800 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  50 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Information About UI/UX Design Degree
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$150</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-04.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span
                              onClick={() => toggleClass(2)}
                              className={isClassAdded[2] ? "favourite selected" : "favourite"}
                            >
                              <i className="fas fa-heart"></i>
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user5.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  500 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  80 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Information About UI/UX Design Degree
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$400</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-05.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span
                              onClick={() => toggleClass(3)}
                              className={isClassAdded[3] ? "favourite selected" : "favourite"}
                            >
                              <i className="fas fa-heart"></i>
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user6.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  800 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  60 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Learn CorelDraw – Interactive Tutorial
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$200</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-01.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span
                              onClick={() => toggleClass(4)}
                              className={isClassAdded[4] ? "favourite selected" : "favourite"}
                            >
                              <i className="fas fa-heart"></i>
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user7.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  400 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  40 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Information About UI/UX Design Degree
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$100</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
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
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="course-two-all aos " data-aos="fade-up">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-01.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span className="favourite">
                              <i className="fas fa-heart" />
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  800 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  60 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Learn CorelDraw – Interactive Tutorial
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$200</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-02.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span
                              onClick={() => toggleClass(5)}
                              className={isClassAdded[5] ? "favourite selected" : "favourite"}
                            >
                              <i className="fas fa-heart"></i>
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  700 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  60 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Information About UI/UX Design Degree
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$300</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-03.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span
                              onClick={() => toggleClass(6)}
                              className={isClassAdded[6] ? "favourite selected" : "favourite"}
                            >
                              <i className="fas fa-heart"></i>
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user3.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  800 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  50 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Information About UI/UX Design Degree
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$150</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-04.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span
                              onClick={() => toggleClass(7)}
                              className={isClassAdded[7] ? "favourite selected" : "favourite"}
                            >
                              <i className="fas fa-heart"></i>
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user4.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  500 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  80 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Information About UI/UX Design Degree
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$400</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-05.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span
                              onClick={() => toggleClass(8)}
                              className={isClassAdded[8] ? "favourite selected" : "favourite"}
                            >
                              <i className="fas fa-heart"></i>
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user5.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  800 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  60 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Learn CorelDraw – Interactive Tutorial
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$200</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-01.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span
                              onClick={() => toggleClass(9)}
                              className={isClassAdded[9] ? "favourite selected" : "favourite"}
                            >
                              <i className="fas fa-heart"></i>
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user6.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  400 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  40 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Information About UI/UX Design Degree
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$100</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
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
                id="pills-seo"
                role="tabpanel"
                aria-labelledby="pills-seo-tab"
              >
                <div className="course-two-all aos " data-aos="fade-up">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-01.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span
                              onClick={() => toggleClass(10)}
                              className={isClassAdded[10] ? "favourite selected" : "favourite"}
                            >
                              <i className="fas fa-heart"></i>
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  800 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  60 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Learn CorelDraw – Interactive Tutorial
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$200</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-02.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span
                              onClick={() => toggleClass(11)}
                              className={isClassAdded[11] ? "favourite selected" : "favourite"}
                            >
                              <i className="fas fa-heart"></i>
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user4.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  700 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  60 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Information About UI/UX Design Degree
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$300</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-03.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span
                              onClick={() => toggleClass(12)}
                              className={isClassAdded[12] ? "favourite selected" : "favourite"}
                            >
                              <i className="fas fa-heart"></i>
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user5.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  800 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  50 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Information About UI/UX Design Degree
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$150</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-04.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span
                              onClick={() => toggleClass(13)}
                              className={isClassAdded[13] ? "favourite selected" : "favourite"}
                            >
                              <i className="fas fa-heart"></i>
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user7.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  500 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  80 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Information About UI/UX Design Degree
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$400</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-05.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span
                              onClick={() => toggleClass(14)}
                              className={isClassAdded[14] ? "favourite selected" : "favourite"}
                            >
                              <i className="fas fa-heart"></i>
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user6.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  800 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  60 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Learn CorelDraw – Interactive Tutorial
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$200</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-01.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span
                              onClick={() => toggleClass(15)}
                              className={isClassAdded[15] ? "favourite selected" : "favourite"}
                            >
                              <i className="fas fa-heart"></i>
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user3.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  400 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  40 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Information About UI/UX Design Degree
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$100</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
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
                id="pills-sales"
                role="tabpanel"
                aria-labelledby="pills-sales-tab"
              >
                <div className="course-two-all aos " data-aos="fade-up">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-01.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span
                              onClick={() => toggleClass(16)}
                              className={isClassAdded[16] ? "favourite selected" : "favourite"}
                            >
                              <i className="fas fa-heart"></i>
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  800 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  60 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Learn CorelDraw – Interactive Tutorial
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$200</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-02.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span className="favourite">
                              <i className="fas fa-heart" />
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  700 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  60 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Information About UI/UX Design Degree
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$300</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-03.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span className="favourite">
                              <i className="fas fa-heart" />
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  800 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  50 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Information About UI/UX Design Degree
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$150</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-04.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span className="favourite">
                              <i className="fas fa-heart" />
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  500 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  80 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Information About UI/UX Design Degree
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$400</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-05.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span className="favourite">
                              <i className="fas fa-heart" />
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  800 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  60 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Learn CorelDraw – Interactive Tutorial
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$200</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-01.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span className="favourite">
                              <i className="fas fa-heart" />
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  400 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  40 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Information About UI/UX Design Degree
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$100</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
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
                id="pills-java"
                role="tabpanel"
                aria-labelledby="pills-java-tab"
              >
                <div className="course-two-all aos " data-aos="fade-up">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-01.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span className="favourite">
                              <i className="fas fa-heart" />
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  800 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  60 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Learn CorelDraw – Interactive Tutorial
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$200</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-02.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span className="favourite">
                              <i className="fas fa-heart" />
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  700 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  60 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Information About UI/UX Design Degree
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$300</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-03.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span className="favourite">
                              <i className="fas fa-heart" />
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  800 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  50 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Information About UI/UX Design Degree
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$150</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-04.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span className="favourite">
                              <i className="fas fa-heart" />
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  500 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  80 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Information About UI/UX Design Degree
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$400</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-05.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span className="favourite">
                              <i className="fas fa-heart" />
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  800 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  60 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Learn CorelDraw – Interactive Tutorial
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$200</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-01.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span className="favourite">
                              <i className="fas fa-heart" />
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  400 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  40 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Information About UI/UX Design Degree
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$100</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
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
                id="pills-it"
                role="tabpanel"
                aria-labelledby="pills-it-tab"
              >
                <div className="course-two-all aos " data-aos="fade-up">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-01.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span className="favourite">
                              <i className="fas fa-heart" />
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  800 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  60 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Learn CorelDraw – Interactive Tutorial
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$200</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-02.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span className="favourite">
                              <i className="fas fa-heart" />
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  700 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  60 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Information About UI/UX Design Degree
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$300</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-03.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span className="favourite">
                              <i className="fas fa-heart" />
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  800 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  50 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Information About UI/UX Design Degree
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$150</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-04.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span className="favourite">
                              <i className="fas fa-heart" />
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  500 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  80 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Information About UI/UX Design Degree
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$400</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-05.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span className="favourite">
                              <i className="fas fa-heart" />
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  800 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  60 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Learn CorelDraw – Interactive Tutorial
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$200</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="course-box course-box-three">
                        <div className="product">
                          <div className="product-img">
                            <Link to="#">
                              <ImageWithBasePath
                                className="img-fluid"
                                alt=""
                                src="assets/img/blog/trend-img-01.jpg"
                                width={600}
                                height={300}
                              />
                            </Link>
                          </div>
                          <div className="fav-star">
                            <span className="average-rating rate-point three-rate">
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              5.0
                            </span>
                            <span className="favourite">
                              <i className="fas fa-heart" />
                            </span>
                          </div>
                          <div className="rating-img">
                            <ImageWithBasePath
                              src="assets/img/user/user2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-content">
                            <div className="course-info d-flex align-items-center">
                              <div className="user-student">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/user-icon-05.svg"
                                    alt=""
                                  />
                                  400 Students
                                </span>
                              </div>
                              <div className="user-lesson">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icon/book-content-icon.svg"
                                    alt=""
                                  />
                                  40 Lessons
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="#">
                                Information About UI/UX Design Degree
                              </Link>
                            </h3>
                            <p>
                              Do you want to move on next step? Choose your most
                              popular{" "}
                            </p>
                            <div className="rating rating-star rating-two align-items-center">
                              <div className="course-price">
                                <h4>$100</h4>
                              </div>
                              <div className="book">
                                <Link to="#">Book Now</Link>
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
          </div>
        </section>
        {/* /Most trending course */}
        <section className="join-mentor join-mentor-two">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="join-mentor-img aos aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <ImageWithBasePath
                    src="assets/img/join-02.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 ">
                <div
                  className="head-join-us aos aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="join-mentor-details">
                    <span className="sub">Variety of Courses</span>
                    <h2>
                      Find The One That’s <span>Right</span> For You
                    </h2>
                    <p>
                      Search all the open positions on the web. Get your own
                      personalized salary estimate. Read reviews on over 600,000
                      companies worldwide. The right job is out there.
                    </p>
                  </div>
                  <div className="reg-log-btn">
                    <Link to="/mentee/search-mentor" className="find-ment">
                      Find Mentors
                    </Link>
                    <Link to="#" className="view-course">
                      View All Courses
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="course-counter">
              <div className="row justify-content-center">
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="counter-box text-center">
                    <h5>
                      <CountUp
                        className="counterUp"
                        start={0}
                        end={25}
                        duration={2.5}
                      />
                      K
                    </h5>
                    <h4>Updated Courses</h4>
                    <p>
                      We always provide people acomplete solution upon focused
                      of any business
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="counter-box text-center">
                    <h5>
                      <span className="counterUp">
                        <CountUp end={200} duration={2.5} />
                      </span>
                      K
                    </h5>
                    <h4>Featured Mentors</h4>
                    <p>
                      We always provide people acomplete solution upon focused
                      of any business
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="counter-box text-center">
                    <h5>
                      <span className="counterUp">
                        <CountUp start={0} end={600} duration={2.5} />
                      </span>
                      K
                    </h5>
                    <h4>Skilled Users</h4>
                    <p>
                      We always provide people acomplete solution upon focused
                      of any business
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="counter-box text-center">
                    <h5>
                      <span className="counterUp">
                        <CountUp start={0} end={100} duration={2.5} />
                      </span>
                      %
                    </h5>
                    <h4>Job Satisfaction</h4>
                    <p>
                      We always provide people acomplete solution upon focused
                      of any business
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Top Rating Instructor */}
        <section className="rating-instructor istructor-taring-three same-dots">
          <div className="container">
            <div className="section-top-head top-head-three">
              <div className="section-header aos " data-aos="fade-up">
                <h2>Top Mentors</h2>
                <p className="sub-title">
                  Discover your next career move, freelance gig, or internship
                </p>
              </div>
            </div>
            <div
              className="owl-carousel mentoring-course rating-instructor-slide owl-theme aos owl-loaded owl-drag aos-init aos-animate"
              data-aos="fade-up"
            >
              <OwlCarousel {...mentoringCourseSlider}>
                <div className="mentor-top-one">
                  <div className="mentor-slide-card">
                    <div className="slide-mentor-info d-flex align-items-center">
                      <div className="slide-img">
                        <Link to="/mentee/mentor-profile">
                          <ImageWithBasePath
                            src="assets/img/mendor/top-mentor-01.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="slide-name ">
                        <h4>
                          <Link to="/mentee/mentor-profile">Steve kennedy</Link>
                        </h4>
                        <span className="average-rating rate-point three-rate">
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          5.0
                        </span>
                      </div>
                    </div>
                    <div className="slide-location">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icon/location-02.svg"
                          alt=""
                        />
                        Italy
                      </span>
                      <span>17 Courses</span>
                    </div>
                  </div>
                  <div className="mentor-slide-card">
                    <div className="slide-mentor-info d-flex align-items-center">
                      <div className="slide-img">
                        <Link to="/mentee/mentor-profile">
                          <ImageWithBasePath
                            src="assets/img/mendor/top-mentor-02.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="slide-name ">
                        <h4>
                          <Link to="/mentee/mentor-profile">Wright</Link>
                        </h4>
                        <span className="average-rating rate-point three-rate">
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          5.0
                        </span>
                      </div>
                    </div>
                    <div className="slide-location">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icon/location-02.svg"
                          alt=""
                        />
                        Netherland
                      </span>
                      <span>18 Courses</span>
                    </div>
                  </div>
                </div>
                <div className="mentor-top-one">
                  <div className="mentor-slide-card">
                    <div className="slide-mentor-info d-flex align-items-center">
                      <div className="slide-img">
                        <Link to="/mentee/mentor-profile">
                          <ImageWithBasePath
                            src="assets/img/mendor/top-mentor-03.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="slide-name ">
                        <h4>
                          <Link to="/mentee/mentor-profile">Angela</Link>
                        </h4>
                        <span className="average-rating rate-point three-rate">
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          5.0
                        </span>
                      </div>
                    </div>
                    <div className="slide-location">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icon/location-02.svg"
                          alt=""
                        />
                        Germany
                      </span>
                      <span>20 Courses</span>
                    </div>
                  </div>
                  <div className="mentor-slide-card">
                    <div className="slide-mentor-info d-flex align-items-center">
                      <div className="slide-img">
                        <Link to="/mentee/mentor-profile">
                          <ImageWithBasePath
                            src="assets/img/mendor/top-mentor-04.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="slide-name ">
                        <h4>
                          <Link to="/mentee/mentor-profile">Barbara</Link>
                        </h4>
                        <span className="average-rating rate-point three-rate">
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          5.0
                        </span>
                      </div>
                    </div>
                    <div className="slide-location">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icon/location-02.svg"
                          alt=""
                        />
                        Norway
                      </span>
                      <span>22 Courses</span>
                    </div>
                  </div>
                </div>
                <div className="mentor-top-one">
                  <div className="mentor-slide-card">
                    <div className="slide-mentor-info d-flex align-items-center">
                      <div className="slide-img">
                        <Link to="/mentee/mentor-profile">
                          <ImageWithBasePath
                            src="assets/img/mendor/top-mentor-05.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="slide-name ">
                        <h4>
                          <Link to="/mentee/mentor-profile">Lee</Link>
                        </h4>
                        <span className="average-rating rate-point three-rate">
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          5.0
                        </span>
                      </div>
                    </div>
                    <div className="slide-location">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icon/location-02.svg"
                          alt=""
                        />
                        Jamaica
                      </span>
                      <span>17 Courses</span>
                    </div>
                  </div>
                  <div className="mentor-slide-card">
                    <div className="slide-mentor-info d-flex align-items-center">
                      <div className="slide-img">
                        <Link to="/mentee/mentor-profile">
                          <ImageWithBasePath
                            src="assets/img/mendor/top-mentor-06.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="slide-name ">
                        <h4>
                          <Link to="/mentee/mentor-profile">Gonzales</Link>
                        </h4>
                        <span className="average-rating rate-point three-rate">
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          5.0
                        </span>
                      </div>
                    </div>
                    <div className="slide-location">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icon/location-02.svg"
                          alt=""
                        />
                        USA
                      </span>
                      <span>15 Courses</span>
                    </div>
                  </div>
                </div>
                <div className="mentor-top-one">
                  <div className="mentor-slide-card">
                    <div className="slide-mentor-info d-flex align-items-center">
                      <div className="slide-img">
                        <Link to="/mentee/mentor-profile">
                          <ImageWithBasePath
                            src="assets/img/mendor/top-mentor-07.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="slide-name ">
                        <h4>
                          <Link to="/mentee/mentor-profile">Abigail</Link>
                        </h4>
                        <span className="average-rating rate-point three-rate">
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          5.0
                        </span>
                      </div>
                    </div>
                    <div className="slide-location">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icon/location-02.svg"
                          alt=""
                        />
                        Norway
                      </span>
                      <span>17 Courses</span>
                    </div>
                  </div>
                  <div className="mentor-slide-card">
                    <div className="slide-mentor-info d-flex align-items-center">
                      <div className="slide-img">
                        <Link to="/mentee/mentor-profile">
                          <ImageWithBasePath
                            src="assets/img/mendor/top-mentor-08.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="slide-name ">
                        <h4>
                          <Link to="/mentee/mentor-profile">Christopher</Link>
                        </h4>
                        <span className="average-rating rate-point three-rate">
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          5.0
                        </span>
                      </div>
                    </div>
                    <div className="slide-location">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icon/location-02.svg"
                          alt=""
                        />
                        Italy
                      </span>
                      <span>17 Courses</span>
                    </div>
                  </div>
                </div>
                <div className="mentor-top-one">
                  <div className="mentor-slide-card">
                    <div className="slide-mentor-info d-flex align-items-center">
                      <div className="slide-img">
                        <Link to="/mentee/mentor-profile">
                          <ImageWithBasePath
                            src="assets/img/mendor/top-mentor-01.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="slide-name ">
                        <h4>
                          <Link to="/mentee/mentor-profile">Steve kennedy</Link>
                        </h4>
                        <span className="average-rating rate-point three-rate">
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          5.0
                        </span>
                      </div>
                    </div>
                    <div className="slide-location">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icon/location-02.svg"
                          alt=""
                        />
                        Jamaica
                      </span>
                      <span>17 Courses</span>
                    </div>
                  </div>
                  <div className="mentor-slide-card">
                    <div className="slide-mentor-info d-flex align-items-center">
                      <div className="slide-img">
                        <Link to="/mentee/mentor-profile">
                          <ImageWithBasePath
                            src="assets/img/mendor/top-mentor-02.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="slide-name ">
                        <h4>
                          <Link to="/mentee/mentor-profile">Steve kennedy</Link>
                        </h4>
                        <span className="average-rating rate-point three-rate">
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          <i className="fas fa-star text-warning" />
                          5.0
                        </span>
                      </div>
                    </div>
                    <div className="slide-location">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icon/location-02.svg"
                          alt=""
                        />
                        Italy
                      </span>
                      <span>17 Courses</span>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>
        {/* Top Rating Instructor */}
        {/* Most Popular Courses */}
        <section className="trending-courses trending-courses-two popular-course-two same-dots home-three-course">
          <div className="container">
            <div className="section-top-head top-head-three">
              <div className="section-header aos " data-aos="fade-up">
                <h2>Popular Courses Near You</h2>
                <p className="sub-title">
                  Search and connect with the right Courses faster.
                </p>
              </div>
            </div>
            <div
              className="owl-carousel popular-course-slide-two owl-theme aos owl-loaded owl-drag aos-init aos-animate"
              data-aos="fade-up"
            >
              <OwlCarousel {...popularCourseSlider}>
                <div className="course-box course-box-three">
                  <div className="product">
                    <div className="product-img product-img-three">
                      <Link to="#">
                        <ImageWithBasePath
                          className="img-fluid"
                          alt=""
                          src="assets/img/blog/trend-img-01.jpg"
                          width={600}
                          height={300}
                        />
                      </Link>
                    </div>
                    <div className="fav-star">
                      <span className="average-rating rate-point three-rate">
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        5.0
                      </span>
                      <span
                              onClick={() => toggleClass(20)}
                              className={isClassAdded[20] ? "favourite selected" : "favourite"}
                            >
                              <i className="fas fa-heart"></i>
                            </span>
                    </div>
                    <div className="product-content">
                      <div className="course-info d-flex align-items-center">
                        <div className="user-student">
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icon/location-02.svg"
                              alt=""
                            />
                            Russia
                          </span>
                        </div>
                        <div className="user-lesson">
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icon/book-content-icon.svg"
                              alt=""
                            />
                            60 Lessons
                          </span>
                        </div>
                      </div>
                      <h3 className="title">
                        <Link to="#">
                          Learn CorelDraw – Interactive Tutorial
                        </Link>
                      </h3>
                      <div className="rating rating-star rating-two align-items-center">
                        <div className="course-price">
                          <h4>$200</h4>
                        </div>
                        <div className="rating-img price-img">
                          <ImageWithBasePath
                            src="assets/img/user/user2.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="course-box course-box-three">
                  <div className="product">
                    <div className="product-img product-img-three">
                      <Link to="#">
                        <ImageWithBasePath
                          className="img-fluid"
                          alt=""
                          src="assets/img/blog/trend-img-02.jpg"
                          width={600}
                          height={300}
                        />
                      </Link>
                    </div>
                    <div className="fav-star">
                      <span className="average-rating rate-point three-rate">
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        5.0
                      </span>
                      <span
                              onClick={() => toggleClass(21)}
                              className={isClassAdded[21] ? "favourite selected" : "favourite"}
                            >
                              <i className="fas fa-heart"></i>
                            </span>
                    </div>
                    <div className="product-content">
                      <div className="course-info d-flex align-items-center">
                        <div className="user-student">
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icon/location-02.svg"
                              alt=""
                            />
                            Russia
                          </span>
                        </div>
                        <div className="user-lesson">
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icon/book-content-icon.svg"
                              alt=""
                            />
                            60 Lessons
                          </span>
                        </div>
                      </div>
                      <h3 className="title">
                        <Link to="#">
                          Learn CorelDraw – Interactive Tutorial
                        </Link>
                      </h3>
                      <div className="rating rating-star rating-two align-items-center">
                        <div className="course-price">
                          <h4>$200</h4>
                        </div>
                        <div className="rating-img price-img">
                          <ImageWithBasePath
                            src="assets/img/user/user3.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="course-box course-box-three">
                  <div className="product">
                    <div className="product-img product-img-three">
                      <Link to="#">
                        <ImageWithBasePath
                          className="img-fluid"
                          alt=""
                          src="assets/img/blog/trend-img-03.jpg"
                          width={600}
                          height={300}
                        />
                      </Link>
                    </div>
                    <div className="fav-star">
                      <span className="average-rating rate-point three-rate">
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        5.0
                      </span>
                      <span
                              onClick={() => toggleClass(22)}
                              className={isClassAdded[22] ? "favourite selected" : "favourite"}
                            >
                              <i className="fas fa-heart"></i>
                            </span>
                    </div>
                    <div className="product-content">
                      <div className="course-info d-flex align-items-center">
                        <div className="user-student">
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icon/location-02.svg"
                              alt=""
                            />
                            Russia
                          </span>
                        </div>
                        <div className="user-lesson">
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icon/book-content-icon.svg"
                              alt=""
                            />
                            60 Lessons
                          </span>
                        </div>
                      </div>
                      <h3 className="title">
                        <Link to="#">
                          Learn CorelDraw – Interactive Tutorial
                        </Link>
                      </h3>
                      <div className="rating rating-star rating-two align-items-center">
                        <div className="course-price">
                          <h4>$200</h4>
                        </div>
                        <div className="rating-img price-img">
                          <ImageWithBasePath
                            src="assets/img/user/user4.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="course-box course-box-three">
                  <div className="product">
                    <div className="product-img product-img-three">
                      <Link to="#">
                        <ImageWithBasePath
                          className="img-fluid"
                          alt=""
                          src="assets/img/blog/trend-img-04.jpg"
                          width={600}
                          height={300}
                        />
                      </Link>
                    </div>
                    <div className="fav-star">
                      <span className="average-rating rate-point three-rate">
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        5.0
                      </span>
                      <span
                              onClick={() => toggleClass(23)}
                              className={isClassAdded[23] ? "favourite selected" : "favourite"}
                            >
                              <i className="fas fa-heart"></i>
                            </span>
                    </div>
                    <div className="product-content">
                      <div className="course-info d-flex align-items-center">
                        <div className="user-student">
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icon/location-02.svg"
                              alt=""
                            />
                            Russia
                          </span>
                        </div>
                        <div className="user-lesson">
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icon/book-content-icon.svg"
                              alt=""
                            />
                            60 Lessons
                          </span>
                        </div>
                      </div>
                      <h3 className="title">
                        <Link to="#">
                          Learn CorelDraw – Interactive Tutorial
                        </Link>
                      </h3>
                      <div className="rating rating-star rating-two align-items-center">
                        <div className="course-price">
                          <h4>$200</h4>
                        </div>
                        <div className="rating-img price-img">
                          <ImageWithBasePath
                            src="assets/img/user/user5.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="course-box course-box-three">
                  <div className="product">
                    <div className="product-img product-img-three">
                      <Link to="#">
                        <ImageWithBasePath
                          className="img-fluid"
                          alt=""
                          src="assets/img/blog/trend-img-05.jpg"
                          width={600}
                          height={300}
                        />
                      </Link>
                    </div>
                    <div className="fav-star">
                      <span className="average-rating rate-point three-rate">
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        5.0
                      </span>
                      <span
                              onClick={() => toggleClass(24)}
                              className={isClassAdded[24] ? "favourite selected" : "favourite"}
                            >
                              <i className="fas fa-heart"></i>
                            </span>
                    </div>
                    <div className="product-content">
                      <div className="course-info d-flex align-items-center">
                        <div className="user-student">
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icon/location-02.svg"
                              alt=""
                            />
                            Russia
                          </span>
                        </div>
                        <div className="user-lesson">
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icon/book-content-icon.svg"
                              alt=""
                            />
                            60 Lessons
                          </span>
                        </div>
                      </div>
                      <h3 className="title">
                        <Link to="#">
                          Learn CorelDraw – Interactive Tutorial
                        </Link>
                      </h3>
                      <div className="rating rating-star rating-two align-items-center">
                        <div className="course-price">
                          <h4>$200</h4>
                        </div>
                        <div className="rating-img price-img">
                          <ImageWithBasePath
                            src="assets/img/user/user6.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="course-box course-box-three">
                  <div className="product">
                    <div className="product-img product-img-three">
                      <Link to="#">
                        <ImageWithBasePath
                          className="img-fluid"
                          alt=""
                          src="assets/img/blog/trend-img-06.jpg"
                          width={600}
                          height={300}
                        />
                      </Link>
                    </div>
                    <div className="fav-star">
                      <span className="average-rating rate-point three-rate">
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        5.0
                      </span>
                      <span
                              onClick={() => toggleClass(25)}
                              className={isClassAdded[25] ? "favourite selected" : "favourite"}
                            >
                              <i className="fas fa-heart"></i>
                            </span>
                    </div>
                    <div className="product-content">
                      <div className="course-info d-flex align-items-center">
                        <div className="user-student">
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icon/location-02.svg"
                              alt=""
                            />
                            Russia
                          </span>
                        </div>
                        <div className="user-lesson">
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icon/book-content-icon.svg"
                              alt=""
                            />
                            60 Lessons
                          </span>
                        </div>
                      </div>
                      <h3 className="title">
                        <Link to="#">
                          Learn CorelDraw – Interactive Tutorial
                        </Link>
                      </h3>
                      <div className="rating rating-star rating-two align-items-center">
                        <div className="course-price">
                          <h4>$200</h4>
                        </div>
                        <div className="rating-img price-img">
                          <ImageWithBasePath
                            src="assets/img/user/user7.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="course-box course-box-three">
                  <div className="product">
                    <div className="product-img product-img-three">
                      <Link to="#">
                        <ImageWithBasePath
                          className="img-fluid"
                          alt=""
                          src="assets/img/blog/trend-img-07.jpg"
                          width={600}
                          height={300}
                        />
                      </Link>
                    </div>
                    <div className="fav-star">
                      <span className="average-rating rate-point three-rate">
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        5.0
                      </span>
                      <span
                              onClick={() => toggleClass(26)}
                              className={isClassAdded[26] ? "favourite selected" : "favourite"}
                            >
                              <i className="fas fa-heart"></i>
                            </span>
                    </div>
                    <div className="product-content">
                      <div className="course-info d-flex align-items-center">
                        <div className="user-student">
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icon/location-02.svg"
                              alt=""
                            />
                            Russia
                          </span>
                        </div>
                        <div className="user-lesson">
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icon/book-content-icon.svg"
                              alt=""
                            />
                            60 Lessons
                          </span>
                        </div>
                      </div>
                      <h3 className="title">
                        <Link to="#">
                          Learn CorelDraw – Interactive Tutorial
                        </Link>
                      </h3>
                      <div className="rating rating-star rating-two align-items-center">
                        <div className="course-price">
                          <h4>$200</h4>
                        </div>
                        <div className="rating-img price-img">
                          <ImageWithBasePath
                            src="assets/img/user/user2.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
            <div className="reg-log-btn d-flex">
              <Link to="#" className="view-course">
                View All Courses
              </Link>
            </div>
          </div>
        </section>
        {/* Most Popular Courses */}
        {/* Say testimonial Two */}
        <section className="testimonial-two">
          <div className="container">
            <div className="section-top-head top-head-three">
              <div className="section-header aos " data-aos="fade-up">
                <h2>See Some Words</h2>
                <p className="sub-title">
                  Thousands of employee get their ideal jobs and feed back to
                  us!
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="testi-customer-slider owl-carousel owl-loaded owl-drag">
                  <OwlCarousel {...testiCustomerSlider}>
                    <div className="review-testi-box">
                      <div className="testi-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed vitae neque metus. Vivamus consectetur
                          ultricies commodo. Pellentesque at nisl sit amet neque
                          finibus egestas ut at magna. Cras tincidunt tortorsed
                          eros aliquam eleifend.
                        </p>
                        <div className="polygon-arrow">
                          <ImageWithBasePath
                            src="assets/img/polygon.svg"
                            className="img-fluid w-auto"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="news-user-name">
                        <Link to="/mentor/review">
                          <ImageWithBasePath
                            src="assets/img/user/profile-02.jpg"
                            alt=""
                          />
                        </Link>
                        <h5>
                          <Link to="/mentor/review">Steve</Link>
                          <span>Designer</span>
                        </h5>
                      </div>
                    </div>
                    <div className="review-testi-box">
                      <div className="testi-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed vitae neque metus. Vivamus consectetur
                          ultricies commodo. Pellentesque at nisl sit amet neque
                          finibus egestas ut at magna. Cras tincidunt tortorsed
                          eros aliquam eleifend.
                        </p>
                        <div className="polygon-arrow">
                          <ImageWithBasePath
                            src="assets/img/polygon.svg"
                            className="img-fluid w-auto"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="news-user-name">
                        <Link to="/mentor/review">
                          <ImageWithBasePath
                            src="assets/img/user/profile-03.jpg"
                            alt=""
                          />
                        </Link>
                        <h5>
                          <Link to="/mentor/review">Harvey</Link>
                          <span>Business Marketing</span>
                        </h5>
                      </div>
                    </div>
                    <div className="review-testi-box">
                      <div className="testi-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed vitae neque metus. Vivamus consectetur
                          ultricies commodo. Pellentesque at nisl sit amet neque
                          finibus egestas ut at magna. Cras tincidunt tortorsed
                          eros aliquam eleifend.
                        </p>
                        <div className="polygon-arrow">
                          <ImageWithBasePath
                            src="assets/img/polygon.svg"
                            className="img-fluid w-auto"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="news-user-name">
                        <Link to="/mentor/review">
                          <ImageWithBasePath
                            src="assets/img/user/user.jpg"
                            alt=""
                          />
                        </Link>
                        <h5>
                          <Link to="/mentor/review">Tyson</Link>
                          <span>Finance</span>
                        </h5>
                      </div>
                    </div>
                    <div className="review-testi-box">
                      <div className="testi-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed vitae neque metus. Vivamus consectetur
                          ultricies commodo. Pellentesque at nisl sit amet neque
                          finibus egestas ut at magna. Cras tincidunt tortorsed
                          eros aliquam eleifend.
                        </p>
                        <div className="polygon-arrow">
                          <ImageWithBasePath
                            src="assets/img/polygon.svg"
                            className="img-fluid w-auto"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="news-user-name">
                        <Link to="/mentor/review">
                          <ImageWithBasePath
                            src="assets/img/user/user1.jpg"
                            alt=""
                          />
                        </Link>
                        <h5>
                          <Link to="/mentor/review">Gonzales</Link>
                          <span>Developer</span>
                        </h5>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Say testimonial Two */}
        {/* Job Location */}
        <section className="job-location-sec location-sec-three">
          <div className="container">
            <div className="section-top-head top-head-three">
              <div className="section-header aos " data-aos="fade-up">
                <h2>Popular Locations</h2>
                <p className="sub-title">
                  Search and connect with the right Courses faster.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="job-area-slider">
                  <OwlCarousel {...jobAreaSlider}>
                    <div className="job-area-card">
                      <div className="job-img">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/city/city-14.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="job-place">
                        <h5>Paris, France</h5>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/user-circle-03.svg"
                            alt=""
                          />
                          14 Mentors
                        </span>
                      </div>
                    </div>
                    <div className="job-area-card">
                      <div className="job-img">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/city/city-11.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="job-place">
                        <h5>Elpo, Mexico</h5>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/user-circle-03.svg"
                            alt=""
                          />
                          18 Mentors
                        </span>
                      </div>
                    </div>
                    <div className="job-area-card">
                      <div className="job-img">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/city/city-12.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="job-place">
                        <h5>Elpo, Mexico</h5>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/user-circle-03.svg"
                            alt=""
                          />
                          18 Mentors
                        </span>
                      </div>
                    </div>
                    <div className="job-area-card">
                      <div className="job-img">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/city/city-13.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="job-place">
                        <h5>Elpo, Mexico</h5>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/user-circle-03.svg"
                            alt=""
                          />
                          18 Mentors
                        </span>
                      </div>
                    </div>
                    <div className="job-area-card">
                      <div className="job-img">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/city/city-11.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="job-place">
                        <h5>Elpo, Mexico</h5>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/user-circle-03.svg"
                            alt=""
                          />
                          18 Mentors
                        </span>
                      </div>
                    </div>
                    <div className="job-area-card">
                      <div className="job-img">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/city/city-12.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="job-place">
                        <h5>Buenos Aires, Argentina</h5>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/user-circle-03.svg"
                            alt=""
                          />
                          22 Mentors
                        </span>
                      </div>
                    </div>
                    <div className="job-area-card">
                      <div className="job-img">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/city/city-13.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="job-place">
                        <h5>London, England</h5>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/user-circle-03.svg"
                            alt=""
                          />
                          20 Mentors
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
        {/* New Course subscribe */}
        <section className="new-course great-option">
          <div className="bg-img">
            <ImageWithBasePath
              src="assets/img/great-option-01.png"
              className="img-fluid bg-option"
              alt=""
            />
            <ImageWithBasePath
              src="assets/img/great-option-02.png"
              className="img-fluid bg-option-two"
              alt=""
            />
          </div>
          <div className="container">
            <div className="head-join-us">
              <div className="row">
                <div className="col-lg-12">
                  <div className="great-option-three text-center">
                    <h2>Find Your Next Great Opportunity!</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed vitae neque metus. Vivamus consectetur ultricies{" "}
                    </p>
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
          </div>
        </section>
        {/* /New Course */}
        {/* Faq */}
        <section className="faq-sec faq-sec-three">
          <div className="container">
            <div className="section-top-head top-head-three">
              <div className="section-header aos " data-aos="fade-up">
                <h2>Frequently Asked Qusetions</h2>
                <p className="sub-title">Have Questions? We are here to help</p>
              </div>
            </div>
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
        {/* Blog Two */}
        <div className="news-blog-three">
          <div className="container">
            <div className="section-top-head top-head-three">
              <div className="section-header aos " data-aos="fade-up">
                <h2>News and Blog</h2>
                <p className="sub-title">
                  Get the latest news, updates and tips
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="news-card-slider owl-carousel owl-loaded owl-drag">
                  <OwlCarousel {...newsCardSlider}>
                    <div className="news-card">
                      <div className="news-card-img">
                        <Link to="/blog/blog-details">
                          <ImageWithBasePath
                            src="assets/img/blog/news-blog-01.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="news-card-content">
                        <div className="marketing-text">
                          <span>Marketing</span>
                        </div>
                        <h3>
                          <Link to="/blog/blog-details">
                            How to Make a Perfect CV That Attracts the Attention
                          </Link>
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, et alii clita tritani per.
                          Vix ut vidisse pertinacia, ius ut maiorum omittam....
                        </p>
                        <div className="news-user-info">
                          <div className="news-user-name">
                            <Link to="/mentee/mentor-profile">
                              <ImageWithBasePath
                                src="assets/img/user/profile-01.jpg"
                                alt=""
                              />
                            </Link>
                            <h5>
                              <Link to="/mentee/mentor-profile">Harvey</Link>
                              <span>06 Jan 2023</span>
                            </h5>
                          </div>
                          <div className="read-duration">
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icon/time-icon.svg"
                                alt=""
                              />
                              20 Min to read
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="news-card">
                      <div className="news-card-img">
                        <Link to="/blog/blog-details">
                          <ImageWithBasePath
                            src="assets/img/blog/news-blog-02.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="news-card-content">
                        <div className="marketing-text">
                          <span>Marketing</span>
                        </div>
                        <h3>
                          <Link to="/blog/blog-details">
                            Interview Question: Why Dont You Have a Degree?
                          </Link>
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, et alii clita tritani per.
                          Vix ut vidisse pertinacia, ius ut maiorum omittam....
                        </p>
                        <div className="news-user-info">
                          <div className="news-user-name">
                            <Link to="/mentee/mentor-profile">
                              <ImageWithBasePath
                                src="assets/img/user/profile-02.jpg"
                                alt=""
                              />
                            </Link>
                            <h5>
                              <Link to="/mentee/mentor-profile">Steve</Link>
                              <span>06 Jan 2023</span>
                            </h5>
                          </div>
                          <div className="read-duration">
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icon/time-icon.svg"
                                alt=""
                              />
                              20 Min to read
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="news-card">
                      <div className="news-card-img">
                        <Link to="/blog/blog-details">
                          <ImageWithBasePath
                            src="assets/img/blog/news-blog-03.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="news-card-content">
                        <div className="marketing-text">
                          <span>Marketing</span>
                        </div>
                        <h3>
                          <Link to="/blog/blog-details">
                            39 Strengths and Weaknesses To Discuss in a Courses
                          </Link>
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, et alii clita tritani per.
                          Vix ut vidisse pertinacia, ius ut maiorum omittam....
                        </p>
                        <div className="news-user-info">
                          <div className="news-user-name">
                            <Link to="/mentee/mentor-profile">
                              <ImageWithBasePath
                                src="assets/img/user/profile-03.jpg"
                                alt=""
                              />
                            </Link>
                            <h5>
                              <Link to="/mentee/mentor-profile">Casandra</Link>
                              <span>06 Jan 2023</span>
                            </h5>
                          </div>
                          <div className="read-duration">
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icon/time-icon.svg"
                                alt=""
                              />
                              20 Min to read
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="news-card">
                      <div className="news-card-img">
                        <Link to="/blog/blog-details">
                          <ImageWithBasePath
                            src="assets/img/blog/news-blog-01.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="news-card-content">
                        <div className="marketing-text">
                          <span>Marketing</span>
                        </div>
                        <h3>
                          <Link to="/blog/blog-details">
                            How to Make a Perfect CV That Attracts the Attention
                          </Link>
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, et alii clita tritani per.
                          Vix ut vidisse pertinacia, ius ut maiorum omittam....
                        </p>
                        <div className="news-user-info">
                          <div className="news-user-name">
                            <Link to="/mentee/mentor-profile">
                              <ImageWithBasePath
                                src="assets/img/user/profile-01.jpg"
                                alt=""
                              />
                            </Link>
                            <h5>
                              <Link to="/mentee/mentor-profile">Steve</Link>
                              <span>06 Jan 2023</span>
                            </h5>
                          </div>
                          <div className="read-duration">
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icon/time-icon.svg"
                                alt=""
                              />
                              20 Min to read
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
            <div className="reg-log-btn d-flex">
              <Link to="/blog/blog-list" className="view-course">
                View All Blogs
              </Link>
            </div>
          </div>
        </div>
        {/* /Blog Two */}
        <HomeThreeFooter />
        <ProgressButton/>
      </div>
     
    </>
  );
};

export default HomeThree;

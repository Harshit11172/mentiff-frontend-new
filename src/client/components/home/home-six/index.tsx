import React from 'react'
import HomeSixHeader from './header'
import HomeSixFooter from './footer'
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath'
import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const HomeSix = () => {
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
    <div>
      <HomeSixHeader/>
<>
  {/* Home Banner */}
  <section className="home-slide  home-slide-five home-slide-eight d-flex align-items-center">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-12">
          <div
            className="home-slide-face slide-face-eight aos"
            data-aos="fade-up"
          >
            <div className="home-slide-text ">
              <h1>
                Learn New Skills with Top <span>Mentors</span>{" "}
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
            </div>
            {/* Search */}
            <div className="search-box search-eightbox">
              <form action="/mentee/search-mentor">
                <div className="form-group search-info location-search location-search-four six-banner-search">
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
                  <Link to="/mentee/search-mentor" className="">
                    <ImageWithBasePath src="assets/img/icon/search-10.svg" alt="" />
                  </Link>
                </div>
              </form>
            </div>
            {/* /Search */}
            <div className="pop-search">
              <p>
                <span>Popular Search :</span> Designer, Developer, Web, iOS, PHP
              </p>
            </div>
          </div>
        </div>
        <div className="banner-tab-card">
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
                Near Your Location
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
                Popular
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
                Best Rated
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
              <div className="col-lg-3 col-sm-6">
                <div className="banner-cards">
                  <div className="banner-tab-img">
                    <Link to="/mentee/mentor-profile">
                      <ImageWithBasePath
                        src="assets/img/mendor/banner-card-01.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="team-content">
                    <h4>
                      <Link to="/mentee/mentor-profile">Steve kennedy</Link>
                      <i className="fas fa-check-double" />
                    </h4>
                    <div className="view-student-three">
                      <ul className="view-student-three-list justify-content-between">
                        <li>
                          <ImageWithBasePath src="assets/img/icon/location-02.svg" alt="" />
                          Norway
                        </li>
                        <li>12 Courses</li>
                        <li>
                          <span className="star-rate">
                            <i className="fas fa-star" />{" "}
                          </span>{" "}
                          4.5
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="banner-cards">
                  <div className="banner-tab-img">
                    <Link to="/mentee/mentor-profile">
                      <ImageWithBasePath
                        src="assets/img/mendor/banner-card-02.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="team-content">
                    <h4>
                      <Link to="/mentee/mentor-profile">Stephan</Link>
                      <i className="fas fa-check-double" />
                    </h4>
                    <div className="view-student-three">
                      <ul className="view-student-three-list justify-content-between">
                        <li>
                          <ImageWithBasePath src="assets/img/icon/location-02.svg" alt="" />
                          Canada
                        </li>
                        <li>18 Courses</li>
                        <li>
                          <span className="star-rate">
                            <i className="fas fa-star" />{" "}
                          </span>{" "}
                          5.0
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="banner-cards">
                  <div className="banner-tab-img">
                    <Link to="/mentee/mentor-profile">
                      <ImageWithBasePath
                        src="assets/img/mendor/banner-card-03.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="team-content">
                    <h4>
                      <Link to="/mentee/mentor-profile">Cinderella</Link>
                      <i className="fas fa-check-double" />
                    </h4>
                    <div className="view-student-three">
                      <ul className="view-student-three-list justify-content-between">
                        <li>
                          <ImageWithBasePath src="assets/img/icon/location-02.svg" alt="" />
                          U.S.A
                        </li>
                        <li>17 Courses</li>
                        <li>
                          <span className="star-rate">
                            <i className="fas fa-star" />{" "}
                          </span>{" "}
                          4.8
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="banner-cards">
                  <div className="banner-tab-img">
                    <Link to="/mentee/mentor-profile">
                      <ImageWithBasePath
                        src="assets/img/mendor/banner-card-04.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="team-content">
                    <h4>
                      <Link to="/mentee/mentor-profile">John Mathew</Link>
                      <i className="fas fa-check-double" />
                    </h4>
                    <div className="view-student-three">
                      <ul className="view-student-three-list justify-content-between">
                        <li>
                          <ImageWithBasePath src="assets/img/icon/location-02.svg" alt="" />
                          Los Angeles
                        </li>
                        <li>15 Courses</li>
                        <li>
                          <span className="star-rate">
                            <i className="fas fa-star" />{" "}
                          </span>{" "}
                          4.7
                        </li>
                      </ul>
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
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="banner-cards">
                  <div className="banner-tab-img">
                    <Link to="/mentee/mentor-profile">
                      <ImageWithBasePath
                        src="assets/img/mendor/banner-card-01.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="team-content">
                    <h4>
                      <Link to="/mentee/mentor-profile">Steve kennedy</Link>
                      <i className="fas fa-check-double" />
                    </h4>
                    <div className="view-student-three">
                      <ul className="view-student-three-list justify-content-between">
                        <li>
                          <ImageWithBasePath src="assets/img/icon/location-02.svg" alt="" />
                          Norway
                        </li>
                        <li>12 Courses</li>
                        <li>
                          <span className="star-rate">
                            <i className="fas fa-star" />{" "}
                          </span>{" "}
                          4.5
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="banner-cards">
                  <div className="banner-tab-img">
                    <Link to="/mentee/mentor-profile">
                      <ImageWithBasePath
                        src="assets/img/mendor/banner-card-02.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="team-content">
                    <h4>
                      <Link to="/mentee/mentor-profile">Stephan</Link>
                      <i className="fas fa-check-double" />
                    </h4>
                    <div className="view-student-three">
                      <ul className="view-student-three-list justify-content-between">
                        <li>
                          <ImageWithBasePath src="assets/img/icon/location-02.svg" alt="" />
                          Canada
                        </li>
                        <li>18 Courses</li>
                        <li>
                          <span className="star-rate">
                            <i className="fas fa-star" />{" "}
                          </span>{" "}
                          5.0
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="banner-cards">
                  <div className="banner-tab-img">
                    <Link to="/mentee/mentor-profile">
                      <ImageWithBasePath
                        src="assets/img/mendor/banner-card-03.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="team-content">
                    <h4>
                      <Link to="/mentee/mentor-profile">Cinderella</Link>
                      <i className="fas fa-check-double" />
                    </h4>
                    <div className="view-student-three">
                      <ul className="view-student-three-list justify-content-between">
                        <li>
                          <ImageWithBasePath src="assets/img/icon/location-02.svg" alt="" />
                          U.S.A
                        </li>
                        <li>17 Courses</li>
                        <li>
                          <span className="star-rate">
                            <i className="fas fa-star" />{" "}
                          </span>{" "}
                          4.8
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="banner-cards">
                  <div className="banner-tab-img">
                    <Link to="/mentee/mentor-profile">
                      <ImageWithBasePath
                        src="assets/img/mendor/banner-card-04.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="team-content">
                    <h4>
                      <Link to="/mentee/mentor-profile">John Mathew</Link>
                      <i className="fas fa-check-double" />
                    </h4>
                    <div className="view-student-three">
                      <ul className="view-student-three-list justify-content-between">
                        <li>
                          <ImageWithBasePath src="assets/img/icon/location-02.svg" alt="" />
                          Los Angeles
                        </li>
                        <li>15 Courses</li>
                        <li>
                          <span className="star-rate">
                            <i className="fas fa-star" />{" "}
                          </span>{" "}
                          4.7
                        </li>
                      </ul>
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
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="banner-cards">
                  <div className="banner-tab-img">
                    <Link to="/mentee/mentor-profile">
                      <ImageWithBasePath
                        src="assets/img/mendor/banner-card-01.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="team-content">
                    <h4>
                      <Link to="/mentee/mentor-profile">Steve kennedy</Link>
                      <i className="fas fa-check-double" />
                    </h4>
                    <div className="view-student-three">
                      <ul className="view-student-three-list justify-content-between">
                        <li>
                          <ImageWithBasePath src="assets/img/icon/location-02.svg" alt="" />
                          Norway
                        </li>
                        <li>12 Courses</li>
                        <li>
                          <span className="star-rate">
                            <i className="fas fa-star" />{" "}
                          </span>{" "}
                          4.5
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="banner-cards">
                  <div className="banner-tab-img">
                    <Link to="/mentee/mentor-profile">
                      <ImageWithBasePath
                        src="assets/img/mendor/banner-card-02.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="team-content">
                    <h4>
                      <Link to="/mentee/mentor-profile">Stephan</Link>
                      <i className="fas fa-check-double" />
                    </h4>
                    <div className="view-student-three">
                      <ul className="view-student-three-list justify-content-between">
                        <li>
                          <ImageWithBasePath src="assets/img/icon/location-02.svg" alt="" />
                          Canada
                        </li>
                        <li>18 Courses</li>
                        <li>
                          <span className="star-rate">
                            <i className="fas fa-star" />{" "}
                          </span>{" "}
                          5.0
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="banner-cards">
                  <div className="banner-tab-img">
                    <Link to="/mentee/mentor-profile">
                      <ImageWithBasePath
                        src="assets/img/mendor/banner-card-03.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="team-content">
                    <h4>
                      <Link to="/mentee/mentor-profile">Cinderella</Link>
                      <i className="fas fa-check-double" />
                    </h4>
                    <div className="view-student-three">
                      <ul className="view-student-three-list justify-content-between">
                        <li>
                          <ImageWithBasePath src="assets/img/icon/location-02.svg" alt="" />
                          U.S.A
                        </li>
                        <li>17 Courses</li>
                        <li>
                          <span className="star-rate">
                            <i className="fas fa-star" />{" "}
                          </span>{" "}
                          4.8
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="banner-cards">
                  <div className="banner-tab-img">
                    <Link to="/mentee/mentor-profile">
                      <ImageWithBasePath
                        src="assets/img/mendor/banner-card-04.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="team-content">
                    <h4>
                      <Link to="/mentee/mentor-profile">John Mathew</Link>
                      <i className="fas fa-check-double" />
                    </h4>
                    <div className="view-student-three">
                      <ul className="view-student-three-list justify-content-between">
                        <li>
                          <ImageWithBasePath src="assets/img/icon/location-02.svg" alt="" />
                          Los Angeles
                        </li>
                        <li>15 Courses</li>
                        <li>
                          <span className="star-rate">
                            <i className="fas fa-star" />{" "}
                          </span>{" "}
                          4.7
                        </li>
                      </ul>
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
  {/* /Home Banner */}
  {/* Most popular Categories */}
  <section className="most-popular most-popular-five most-popular-six">
    <div className="container">
      <div className="heder-eight aos " data-aos="fade-up">
        <div className="section-head-eight">
          <h2>
            Browse Top <span>Categories</span>
          </h2>
          <p>
            Do you want to move on next step? Choose your most popular leaning
            mentors, it will help you to achieve your professional goals.
          </p>
        </div>
      </div>
      <div className="popular-categories aos " data-aos="fade-up">
        <div className="row">
          <div className="col-xl-2 col-lg-4 col-sm-6">
            <Link to="/mentee/search-mentor">
              <div className="sub-categories-five sub-categories-eight">
                <div className="categories-five-img">
                  <span>
                    <ImageWithBasePath src="assets/img/categories/rec-01.jpg" alt="" />
                  </span>
                </div>
                <div className="categories-text">
                  <h4>Design &amp; Development</h4>
                  <h5>
                    Over <span> 2500 </span> Courses
                  </h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-xl-2 col-lg-4 col-sm-6">
            <Link to="/mentee/search-mentor">
              <div className="sub-categories-five sub-categories-eight">
                <div className="categories-five-img">
                  <span>
                    <ImageWithBasePath src="assets/img/categories/rec-02.jpg" alt="" />
                  </span>
                </div>
                <div className="categories-text">
                  <h4>Digital Marketing</h4>
                  <h5>
                    Over <span> 2500 </span> Courses
                  </h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-xl-2 col-lg-4 col-sm-6">
            <Link to="/mentee/search-mentor">
              <div className="sub-categories-five sub-categories-eight">
                <div className="categories-five-img">
                  <span>
                    <ImageWithBasePath src="assets/img/categories/rec-03.jpg" alt="" />
                  </span>
                </div>
                <div className="categories-text">
                  <h4>Marketing &amp; Communication</h4>
                  <h5>
                    Over <span> 2500 </span> Courses
                  </h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-xl-2 col-lg-4 col-sm-6">
            <Link to="/mentee/search-mentor">
              <div className="sub-categories-five sub-categories-eight">
                <div className="categories-five-img">
                  <span>
                    <ImageWithBasePath src="assets/img/categories/rec-04.jpg" alt="" />
                  </span>
                </div>
                <div className="categories-text seo-text">
                  <h4>SEO &amp; Security</h4>
                  <h5>
                    Over <span> 2500 </span> Courses
                  </h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-xl-2 col-lg-4 col-sm-6">
            <Link to="/mentee/search-mentor">
              <div className="sub-categories-five sub-categories-eight">
                <div className="categories-five-img">
                  <span>
                    <ImageWithBasePath src="assets/img/categories/rec-05.jpg" alt="" />
                  </span>
                </div>
                <div className="categories-text">
                  <h4>Business &amp; Consulting</h4>
                  <h5>
                    Over <span> 2500 </span> Courses
                  </h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-xl-2 col-lg-4 col-sm-6">
            <Link to="/mentee/search-mentor">
              <div className="sub-categories-five sub-categories-eight">
                <div className="categories-five-img">
                  <span>
                    <ImageWithBasePath src="assets/img/categories/rec-06.jpg" alt="" />
                  </span>
                </div>
                <div className="categories-text">
                  <h4>Finance Management</h4>
                  <h5>
                    Over <span> 2500 </span> Courses
                  </h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Most popular Categories */}
  <section className="banner-feature-sec work-eight-sec">
    <div className="container">
      <div className="section-bg-imgs">
        <ImageWithBasePath
          src="assets/img/bg/arrow-bg.png"
          className="img-fluid arrow-bg"
          alt=""
        />
        <ImageWithBasePath
          src="assets/img/bg/index-six-bg-01.png"
          className="img-fluid arrow-bgtwo"
          alt=""
        />
      </div>
      <div className="heder-eight aos" data-aos="fade-up">
        <div className="section-head-eight">
          <h2>
            How It <span> Works?</span>
          </h2>
          <p>
            Are you looking to join online institutions? Now it's very simple,
            Sign up with mentoring
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div
            className="feature-box feature-box-eight text-center aos"
            data-aos="fade-up"
          >
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
              Are you looking to join online Learning? Now it's very simple, Now
              Sign up
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div
            className="feature-box feature-box-eight text-center aos"
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
              Collaborate on your own timing, by scheduling with mentor booking
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div
            className="feature-box feature-box-eight text-center aos"
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
              You can gather different skill set, and you can become mentor too
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="trusted-by-sec">
    <div className="container">
      <div className="trusted-by" data-aos="fade-up">
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
  </section>
  {/* Most Trending  Courses */}
  <section className="section trending-courses trending-courses-three popular-course-three popular-course-five">
    <div className="container">
      <div className="aos " data-aos="fade-up">
        <div className="heder-eight aos " data-aos="fade-up">
          <div className="section-head-eight">
            <h2>
              Our Popular <span>Courses</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              aenean accumsan bibendum{" "}
            </p>
          </div>
        </div>
      </div>
      <ul
        className="nav nav-pills course-eight-tab"
        id="pills-tab-two"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-allcourse-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-allcourse"
            type="button"
            role="tab"
            aria-controls="pills-allcourse"
            aria-selected="true"
          >
            All Courses
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-animation-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-animation"
            type="button"
            role="tab"
            aria-controls="pills-animation"
            aria-selected="false"
            tabIndex={-1}
          >
            Animation
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-web-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-web"
            type="button"
            role="tab"
            aria-controls="pills-web"
            aria-selected="false"
          >
            Web Development
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-security-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-security"
            type="button"
            role="tab"
            aria-controls="pills-security"
            aria-selected="false"
            tabIndex={-1}
          >
            SEO &amp; Security
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
      <div className="tab-content course-tab-six" id="pills-tabContent-two">
        <div
          className="tab-pane fade active show"
          id="pills-allcourse"
          role="tabpanel"
          aria-labelledby="pills-allcourse-tab"
        >
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-five course-box-eight">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/course/trending-course-05.jpg"
                        width={600}
                        height={300}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <div className="card-mark">
                      <span className="mark">Marketing</span>
                      <span className="popular">Popular</span>
                    </div>
                    <div className="rating rate-star rating-star-five">
                      <span className="average-rating rate-point ">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        5.0 <b> (2566)</b>
                      </span>
                      <div className="feature-texts-eight">
                        <h5>
                          <Link to="/mentee/mentor-profile">Brittany Garcia</Link>
                        </h5>
                        <div className="rating-img">
                          <ImageWithBasePath src="assets/img/user/profile-01.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="title">
                      <Link to="#">
                        Learn CorelDraw – Interactive Tutorial
                      </Link>
                    </h3>
                    <div className="lesson-student-five">
                      <div className="student-five">
                        <span>
                          <ImageWithBasePath src="assets/img/icon/user-icon-05.svg" alt="" />
                          800 Students
                        </span>
                      </div>
                      <div className="lesson-five">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/book-content-icon.svg"
                            alt=""
                          />
                          60 Lessons
                        </span>
                      </div>
                    </div>
                    <div className="rating rating-star rating-two rating-five align-items-center justify-content-between">
                      <div className="course-btn">
                        <span className="line-through">$40.00</span>
                        <span>$30.00</span>
                      </div>
                      <span className="card-arrow">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icon/white-arrow-up.svg"
                            alt=""
                          />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-five course-box-eight">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/course/trending-course-15.jpg"
                        width={600}
                        height={300}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <div className="card-mark">
                      <span className="mark">Marketing</span>
                      <span className="new">New</span>
                    </div>
                    <div className="rating rate-star rating-star-five">
                      <span className="average-rating rate-point ">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        4.8 <b> (2470)</b>
                      </span>
                      <div className="feature-texts-eight">
                        <h5>
                          <Link to="/mentee/mentor-profile">Tyrone Roberts</Link>
                        </h5>
                        <div className="rating-img">
                          <ImageWithBasePath src="assets/img/user/profile-02.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="title">
                      <Link to="#">
                        Interview Question: Why Dont You Have a Degree?
                      </Link>
                    </h3>
                    <div className="lesson-student-five">
                      <div className="student-five">
                        <span>
                          <ImageWithBasePath src="assets/img/icon/user-icon-05.svg" alt="" />
                          850 Students
                        </span>
                      </div>
                      <div className="lesson-five">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/book-content-icon.svg"
                            alt=""
                          />
                          55 Lessons
                        </span>
                      </div>
                    </div>
                    <div className="rating rating-star rating-two rating-five align-items-center justify-content-between">
                      <div className="course-btn">
                        <span className="line-through">$40.00</span>
                        <span>$34.00</span>
                      </div>
                      <span className="card-arrow">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icon/white-arrow-up.svg"
                            alt=""
                          />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-five course-box-eight">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/course/trending-course-16.jpg"
                        width={600}
                        height={300}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <div className="card-mark">
                      <span className="mark">Marketing</span>
                    </div>
                    <div className="rating rate-star rating-star-five">
                      <span className="average-rating rate-point ">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        4.5 <b> (2500)</b>
                      </span>
                      <div className="feature-texts-eight">
                        <h5>
                          <Link to="/mentee/mentor-profile">Remora Jaine</Link>
                        </h5>
                        <div className="rating-img">
                          <ImageWithBasePath src="assets/img/user/profile-03.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="title">
                      <Link to="#">
                        Learn CorelDraw – Interactive Tutorial
                      </Link>
                    </h3>
                    <div className="lesson-student-five">
                      <div className="student-five">
                        <span>
                          <ImageWithBasePath src="assets/img/icon/user-icon-05.svg" alt="" />
                          700 Students
                        </span>
                      </div>
                      <div className="lesson-five">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/book-content-icon.svg"
                            alt=""
                          />
                          50 Lessons
                        </span>
                      </div>
                    </div>
                    <div className="rating rating-star rating-two rating-five align-items-center justify-content-between">
                      <div className="course-btn">
                        <span className="line-through">$40.00</span>
                        <span>$36.00</span>
                      </div>
                      <span className="card-arrow">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icon/white-arrow-up.svg"
                            alt=""
                          />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-animation"
          role="tabpanel"
          aria-labelledby="pills-animation-tab"
        >
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-five course-box-eight">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/course/trending-course-17.jpg"
                        width={600}
                        height={300}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <div className="card-mark">
                      <span className="mark">Marketing</span>
                      <span className="popular">Popular</span>
                    </div>
                    <div className="rating rate-star rating-star-five">
                      <span className="average-rating rate-point ">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        5.0 <b> (2566)</b>
                      </span>
                      <div className="feature-texts-eight">
                        <h5>
                          <Link to="/mentee/mentor-profile">Brittany Garcia</Link>
                        </h5>
                        <div className="rating-img">
                          <ImageWithBasePath src="assets/img/user/profile-01.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="title">
                      <Link to="#">
                        Learn CorelDraw – Interactive Tutorial
                      </Link>
                    </h3>
                    <div className="lesson-student-five">
                      <div className="student-five">
                        <span>
                          <ImageWithBasePath src="assets/img/icon/user-icon-05.svg" alt="" />
                          750 Students
                        </span>
                      </div>
                      <div className="lesson-five">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/book-content-icon.svg"
                            alt=""
                          />
                          50 Lessons
                        </span>
                      </div>
                    </div>
                    <div className="rating rating-star rating-two rating-five align-items-center justify-content-between">
                      <div className="course-btn">
                        <span className="line-through">$40.00</span>
                        <span>$34.00</span>
                      </div>
                      <span className="card-arrow">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icon/white-arrow-up.svg"
                            alt=""
                          />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-five course-box-eight">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/course/trending-course-18.jpg"
                        width={600}
                        height={300}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <div className="card-mark">
                      <span className="mark">Marketing</span>
                      <span className="new">New</span>
                    </div>
                    <div className="rating rate-star rating-star-five">
                      <span className="average-rating rate-point ">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        5.0 <b> (2566)</b>
                      </span>
                      <div className="feature-texts-eight">
                        <h5>
                          <Link to="/mentee/mentor-profile">Tyrone Roberts</Link>
                        </h5>
                        <div className="rating-img">
                          <ImageWithBasePath src="assets/img/user/profile-02.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="title">
                      <Link to="#">
                        Interview Question: Why Dont You Have a Degree?
                      </Link>
                    </h3>
                    <div className="lesson-student-five">
                      <div className="student-five">
                        <span>
                          <ImageWithBasePath src="assets/img/icon/user-icon-05.svg" alt="" />
                          840 Students
                        </span>
                      </div>
                      <div className="lesson-five">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/book-content-icon.svg"
                            alt=""
                          />
                          65 Lessons
                        </span>
                      </div>
                    </div>
                    <div className="rating rating-star rating-two rating-five align-items-center justify-content-between">
                      <div className="course-btn">
                        <span className="line-through">$40.00</span>
                        <span>$33.00</span>
                      </div>
                      <span className="card-arrow">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icon/white-arrow-up.svg"
                            alt=""
                          />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-five course-box-eight">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/course/trending-course-19.jpg"
                        width={600}
                        height={300}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <div className="card-mark">
                      <span className="mark">Marketing</span>
                    </div>
                    <div className="rating rate-star rating-star-five">
                      <span className="average-rating rate-point ">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        5.0 <b> (2566)</b>
                      </span>
                      <div className="feature-texts-eight">
                        <h5>
                          <Link to="/mentee/mentor-profile">Remora Jaine</Link>
                        </h5>
                        <div className="rating-img">
                          <ImageWithBasePath src="assets/img/user/profile-03.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="title">
                      <Link to="#">
                        Learn CorelDraw – Interactive Tutorial
                      </Link>
                    </h3>
                    <div className="lesson-student-five">
                      <div className="student-five">
                        <span>
                          <ImageWithBasePath src="assets/img/icon/user-icon-05.svg" alt="" />
                          700 Students
                        </span>
                      </div>
                      <div className="lesson-five">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/book-content-icon.svg"
                            alt=""
                          />
                          40 Lessons
                        </span>
                      </div>
                    </div>
                    <div className="rating rating-star rating-two rating-five align-items-center justify-content-between">
                      <div className="course-btn">
                        <span className="line-through">$40.00</span>
                        <span>$35.00</span>
                      </div>
                      <span className="card-arrow">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icon/white-arrow-up.svg"
                            alt=""
                          />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-web"
          role="tabpanel"
          aria-labelledby="pills-web-tab"
        >
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-five course-box-eight">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/course/trending-course-05.jpg"
                        width={600}
                        height={300}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <div className="card-mark">
                      <span className="mark">Marketing</span>
                      <span className="popular">Popular</span>
                    </div>
                    <div className="rating rate-star rating-star-five">
                      <span className="average-rating rate-point ">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        5.0 <b> (2566)</b>
                      </span>
                      <div className="feature-texts-eight">
                        <h5>
                          <Link to="/mentee/mentor-profile">Brittany Garcia</Link>
                        </h5>
                        <div className="rating-img">
                          <ImageWithBasePath src="assets/img/user/profile-01.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="title">
                      <Link to="#">
                        Learn CorelDraw – Interactive Tutorial
                      </Link>
                    </h3>
                    <div className="lesson-student-five">
                      <div className="student-five">
                        <span>
                          <ImageWithBasePath src="assets/img/icon/user-icon-05.svg" alt="" />
                          800 Students
                        </span>
                      </div>
                      <div className="lesson-five">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/book-content-icon.svg"
                            alt=""
                          />
                          60 Lessons
                        </span>
                      </div>
                    </div>
                    <div className="rating rating-star rating-two rating-five align-items-center justify-content-between">
                      <div className="course-btn">
                        <span className="line-through">$40.00</span>
                        <span>$36.00</span>
                      </div>
                      <span className="card-arrow">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icon/white-arrow-up.svg"
                            alt=""
                          />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-five course-box-eight">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/course/trending-course-06.jpg"
                        width={600}
                        height={300}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <div className="card-mark">
                      <span className="mark">Marketing</span>
                      <span className="new">New</span>
                    </div>
                    <div className="rating rate-star rating-star-five">
                      <span className="average-rating rate-point ">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        4.7 <b> (2466)</b>
                      </span>
                      <div className="feature-texts-eight">
                        <h5>
                          <Link to="/mentee/mentor-profile">Tyrone Roberts</Link>
                        </h5>
                        <div className="rating-img">
                          <ImageWithBasePath src="assets/img/user/profile-02.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="title">
                      <Link to="#">
                        Interview Question: Why Dont You Have a Degree?
                      </Link>
                    </h3>
                    <div className="lesson-student-five">
                      <div className="student-five">
                        <span>
                          <ImageWithBasePath src="assets/img/icon/user-icon-05.svg" alt="" />
                          650 Students
                        </span>
                      </div>
                      <div className="lesson-five">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/book-content-icon.svg"
                            alt=""
                          />
                          50 Lessons
                        </span>
                      </div>
                    </div>
                    <div className="rating rating-star rating-two rating-five align-items-center justify-content-between">
                      <div className="course-btn">
                        <span className="line-through">$40.00</span>
                        <span>$32.00</span>
                      </div>
                      <span className="card-arrow">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icon/white-arrow-up.svg"
                            alt=""
                          />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-five course-box-eight">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/course/trending-course-07.jpg"
                        width={600}
                        height={300}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <div className="card-mark">
                      <span className="mark">Marketing</span>
                    </div>
                    <div className="rating rate-star rating-star-five">
                      <span className="average-rating rate-point ">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        5.0 <b> (2566)</b>
                      </span>
                      <div className="feature-texts-eight">
                        <h5>
                          <Link to="/mentee/mentor-profile">Remora Jaine</Link>
                        </h5>
                        <div className="rating-img">
                          <ImageWithBasePath src="assets/img/user/profile-03.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="title">
                      <Link to="#">
                        Learn CorelDraw – Interactive Tutorial
                      </Link>
                    </h3>
                    <div className="lesson-student-five">
                      <div className="student-five">
                        <span>
                          <ImageWithBasePath src="assets/img/icon/user-icon-05.svg" alt="" />
                          850 Students
                        </span>
                      </div>
                      <div className="lesson-five">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/book-content-icon.svg"
                            alt=""
                          />
                          55 Lessons
                        </span>
                      </div>
                    </div>
                    <div className="rating rating-star rating-two rating-five align-items-center justify-content-between">
                      <div className="course-btn">
                        <span className="line-through">$40.00</span>
                        <span>$35.00</span>
                      </div>
                      <span className="card-arrow">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icon/white-arrow-up.svg"
                            alt=""
                          />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-security"
          role="tabpanel"
          aria-labelledby="pills-security-tab"
        >
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-five course-box-eight">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/course/trending-course-17.jpg"
                        width={600}
                        height={300}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <div className="card-mark">
                      <span className="mark">Marketing</span>
                      <span className="popular">Popular</span>
                    </div>
                    <div className="rating rate-star rating-star-five">
                      <span className="average-rating rate-point ">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        5.0 <b> (2566)</b>
                      </span>
                      <div className="feature-texts-eight">
                        <h5>
                          <Link to="/mentee/mentor-profile">Remora Jaine</Link>
                        </h5>
                        <div className="rating-img">
                          <ImageWithBasePath src="assets/img/user/profile-01.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="title">
                      <Link to="#">
                        Learn CorelDraw – Interactive Tutorial
                      </Link>
                    </h3>
                    <div className="lesson-student-five">
                      <div className="student-five">
                        <span>
                          <ImageWithBasePath src="assets/img/icon/user-icon-05.svg" alt="" />
                          800 Students
                        </span>
                      </div>
                      <div className="lesson-five">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/book-content-icon.svg"
                            alt=""
                          />
                          60 Lessons
                        </span>
                      </div>
                    </div>
                    <div className="rating rating-star rating-two rating-five align-items-center justify-content-between">
                      <div className="course-btn">
                        <span className="line-through">$40.00</span>
                        <span>$36.00</span>
                      </div>
                      <span className="card-arrow">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icon/white-arrow-up.svg"
                            alt=""
                          />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-five course-box-eight">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/course/trending-course-18.jpg"
                        width={600}
                        height={300}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <div className="card-mark">
                      <span className="mark">Marketing</span>
                      <span className="new">New</span>
                    </div>
                    <div className="rating rate-star rating-star-five">
                      <span className="average-rating rate-point ">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        5.0 <b> (2566)</b>
                      </span>
                      <div className="feature-texts-eight">
                        <h5>
                          <Link to="/mentee/mentor-profile">Brittany Garcia</Link>
                        </h5>
                        <div className="rating-img">
                          <ImageWithBasePath src="assets/img/user/profile-01.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="title">
                      <Link to="#">
                        Interview Question: Why Dont You Have a Degree?
                      </Link>
                    </h3>
                    <div className="lesson-student-five">
                      <div className="student-five">
                        <span>
                          <ImageWithBasePath src="assets/img/icon/user-icon-05.svg" alt="" />
                          850 Students
                        </span>
                      </div>
                      <div className="lesson-five">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/book-content-icon.svg"
                            alt=""
                          />
                          50 Lessons
                        </span>
                      </div>
                    </div>
                    <div className="rating rating-star rating-two rating-five align-items-center justify-content-between">
                      <div className="course-btn">
                        <span className="line-through">$40.00</span>
                        <span>$34.00</span>
                      </div>
                      <span className="card-arrow">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icon/white-arrow-up.svg"
                            alt=""
                          />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-five course-box-eight">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/course/trending-course-19.jpg"
                        width={600}
                        height={300}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <div className="card-mark">
                      <span className="mark">Marketing</span>
                    </div>
                    <div className="rating rate-star rating-star-five">
                      <span className="average-rating rate-point ">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        5.0 <b> (2566)</b>
                      </span>
                      <div className="feature-texts-eight">
                        <h5>
                          <Link to="/mentee/mentor-profile">Tyrone Roberts</Link>
                        </h5>
                        <div className="rating-img">
                          <ImageWithBasePath src="assets/img/user/profile-01.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="title">
                      <Link to="#">
                        Learn CorelDraw – Interactive Tutorial
                      </Link>
                    </h3>
                    <div className="lesson-student-five">
                      <div className="student-five">
                        <span>
                          <ImageWithBasePath src="assets/img/icon/user-icon-05.svg" alt="" />
                          650 Students
                        </span>
                      </div>
                      <div className="lesson-five">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/book-content-icon.svg"
                            alt=""
                          />
                          45 Lessons
                        </span>
                      </div>
                    </div>
                    <div className="rating rating-star rating-two rating-five align-items-center justify-content-between">
                      <div className="course-btn">
                        <span className="line-through">$40.00</span>
                        <span>$37.00</span>
                      </div>
                      <span className="card-arrow">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icon/white-arrow-up.svg"
                            alt=""
                          />
                        </Link>
                      </span>
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
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-five course-box-eight">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/course/trending-course-18.jpg"
                        width={600}
                        height={300}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <div className="card-mark">
                      <span className="mark">Marketing</span>
                      <span className="popular">Popular</span>
                    </div>
                    <div className="rating rate-star rating-star-five">
                      <span className="average-rating rate-point ">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        5.0 <b> (2566)</b>
                      </span>
                      <div className="feature-texts-eight">
                        <h5>
                          <Link to="/mentee/mentor-profile">Brittany Garcia</Link>
                        </h5>
                        <div className="rating-img">
                          <ImageWithBasePath src="assets/img/user/profile-01.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="title">
                      <Link to="#">
                        Learn CorelDraw – Interactive Tutorial
                      </Link>
                    </h3>
                    <div className="lesson-student-five">
                      <div className="student-five">
                        <span>
                          <ImageWithBasePath src="assets/img/icon/user-icon-05.svg" alt="" />
                          600 Students
                        </span>
                      </div>
                      <div className="lesson-five">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/book-content-icon.svg"
                            alt=""
                          />
                          65 Lessons
                        </span>
                      </div>
                    </div>
                    <div className="rating rating-star rating-two rating-five align-items-center justify-content-between">
                      <div className="course-btn">
                        <span className="line-through">$40.00</span>
                        <span>$36.00</span>
                      </div>
                      <span className="card-arrow">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icon/white-arrow-up.svg"
                            alt=""
                          />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-five course-box-eight">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/course/trending-course-17.jpg"
                        width={600}
                        height={300}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <div className="card-mark">
                      <span className="mark">Marketing</span>
                      <span className="new">New</span>
                    </div>
                    <div className="rating rate-star rating-star-five">
                      <span className="average-rating rate-point ">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        5.0 <b> (2566)</b>
                      </span>
                      <div className="feature-texts-eight">
                        <h5>
                          <Link to="/mentee/mentor-profile">Tyrone Roberts</Link>
                        </h5>
                        <div className="rating-img">
                          <ImageWithBasePath src="assets/img/user/profile-01.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="title">
                      <Link to="#">
                        Interview Question: Why Dont You Have a Degree?
                      </Link>
                    </h3>
                    <div className="lesson-student-five">
                      <div className="student-five">
                        <span>
                          <ImageWithBasePath src="assets/img/icon/user-icon-05.svg" alt="" />
                          700 Students
                        </span>
                      </div>
                      <div className="lesson-five">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/book-content-icon.svg"
                            alt=""
                          />
                          50 Lessons
                        </span>
                      </div>
                    </div>
                    <div className="rating rating-star rating-two rating-five align-items-center justify-content-between">
                      <div className="course-btn">
                        <span className="line-through">$40.00</span>
                        <span>$35.00</span>
                      </div>
                      <span className="card-arrow">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icon/white-arrow-up.svg"
                            alt=""
                          />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-five course-box-eight">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/course/trending-course-05.jpg"
                        width={600}
                        height={300}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <div className="card-mark">
                      <span className="mark">Marketing</span>
                    </div>
                    <div className="rating rate-star rating-star-five">
                      <span className="average-rating rate-point ">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        5.0 <b> (2566)</b>
                      </span>
                      <div className="feature-texts-eight">
                        <h5>
                          <Link to="/mentee/mentor-profile">Remora Jaine</Link>
                        </h5>
                        <div className="rating-img">
                          <ImageWithBasePath src="assets/img/user/profile-01.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="title">
                      <Link to="#">
                        Learn CorelDraw – Interactive Tutorial
                      </Link>
                    </h3>
                    <div className="lesson-student-five">
                      <div className="student-five">
                        <span>
                          <ImageWithBasePath src="assets/img/icon/user-icon-05.svg" alt="" />
                          800 Students
                        </span>
                      </div>
                      <div className="lesson-five">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/book-content-icon.svg"
                            alt=""
                          />
                          60 Lessons
                        </span>
                      </div>
                    </div>
                    <div className="rating rating-star rating-two rating-five align-items-center justify-content-between">
                      <div className="course-btn">
                        <span className="line-through">$40.00</span>
                        <span>$33.00</span>
                      </div>
                      <span className="card-arrow">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icon/white-arrow-up.svg"
                            alt=""
                          />
                        </Link>
                      </span>
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
  {/* Most Trending Courses */}
  <section className="improve-skills-sec">
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <div className="skills-content">
            <div className="skills-content-heading">
              <h2>Book Our Course &amp; Improve Your Skills</h2>
              <p>
                Lorem ipsum dolor sit amet, et alii clita tritani per. Vix ut
                vidisse pertinacia, ius ut maiorum omittam. Duis ludus no mea,
                te has delenit maiorum, an ius admodum constituto. Nostrud
                urbanitas.
              </p>
            </div>
            <div className="skills-counter">
              <div className="counter-box">
                <h5>
                <CountUp className="counterUp" end={5890} duration={2.75} />+
                </h5>
                <h4>Students</h4>
              </div>
              <div className="counter-box">
                <h5>
                <CountUp className="counterUp" end={254} duration={2.75} />+
                </h5>
                <h4>Courses</h4>
              </div>
              <div className="counter-box">
                <h5>
                <CountUp className="counterUp" end={900} duration={2.75} />k+
                 
                </h5>
                <h4>Mentors</h4>
              </div>
            </div>
            <div className="join-btns">
              <Link to="/login" className="join">
                Join Now
              </Link>
              <Link to="/mentee/search-mentor" className="find">
                Find Mentor
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="improve-img">
            <ImageWithBasePath
              src="assets/img/improve-skill.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Most Trending  Courses */}
  <section className="section trending-courses trending-courses-three popular-course-three popular-course-five">
    <div className="container">
      <div className="aos " data-aos="fade-up">
        <div className="heder-eight aos " data-aos="fade-up">
          <div className="section-head-eight">
            <h2>
              Our Popular <span>Courses</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              aenean accumsan bibendum{" "}
            </p>
          </div>
        </div>
      </div>
      <ul
        className="nav nav-pills course-eight-tab"
        id="pills-tab-three"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-allcoursetwo-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-allcoursetwo"
            type="button"
            role="tab"
            aria-controls="pills-allcoursetwo"
            aria-selected="true"
          >
            All Courses
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-animationtwo-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-animationtwo"
            type="button"
            role="tab"
            aria-controls="pills-animationtwo"
            aria-selected="false"
            tabIndex={-1}
          >
            Animation
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-webtwo-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-webtwo"
            type="button"
            role="tab"
            aria-controls="pills-webtwo"
            aria-selected="false"
          >
            Web Development
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-securitytwo-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-securitytwo"
            type="button"
            role="tab"
            aria-controls="pills-securitytwo"
            aria-selected="false"
            tabIndex={-1}
          >
            SEO &amp; Security
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-salestwo-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-salestwo"
            type="button"
            role="tab"
            aria-controls="pills-salestwo"
            aria-selected="false"
            tabIndex={-1}
          >
            Sales
          </button>
        </li>
      </ul>
      <div className="tab-content course-tab-six" id="pills-tabContent-three">
        <div
          className="tab-pane fade active show"
          id="pills-allcoursetwo"
          role="tabpanel"
          aria-labelledby="pills-allcoursetwo-tab"
        >
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-five course-box-eight">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/course/trending-course-05.jpg"
                        width={600}
                        height={300}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <div className="card-mark">
                      <span className="mark">Marketing</span>
                      <span className="popular">Popular</span>
                    </div>
                    <div className="rating rate-star rating-star-five">
                      <span className="average-rating rate-point ">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        5.0 <b> (2566)</b>
                      </span>
                      <div className="feature-texts-eight">
                        <h5>
                          <Link to="/mentee/mentor-profile">Brittany Garcia</Link>
                        </h5>
                        <div className="rating-img">
                          <ImageWithBasePath src="assets/img/user/profile-01.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="title">
                      <Link to="#">
                        Learn CorelDraw – Interactive Tutorial
                      </Link>
                    </h3>
                    <div className="lesson-student-five">
                      <div className="student-five">
                        <span>
                          <ImageWithBasePath src="assets/img/icon/user-icon-05.svg" alt="" />
                          800 Students
                        </span>
                      </div>
                      <div className="lesson-five">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/book-content-icon.svg"
                            alt=""
                          />
                          60 Lessons
                        </span>
                      </div>
                    </div>
                    <div className="rating rating-star rating-two rating-five align-items-center justify-content-between">
                      <div className="course-btn">
                        <span className="line-through">$40.00</span>
                        <span>$30.00</span>
                      </div>
                      <span className="card-arrow">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icon/white-arrow-up.svg"
                            alt=""
                          />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-five course-box-eight">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/course/trending-course-15.jpg"
                        width={600}
                        height={300}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <div className="card-mark">
                      <span className="mark">Marketing</span>
                      <span className="new">New</span>
                    </div>
                    <div className="rating rate-star rating-star-five">
                      <span className="average-rating rate-point ">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        4.8 <b> (2470)</b>
                      </span>
                      <div className="feature-texts-eight">
                        <h5>
                          <Link to="/mentee/mentor-profile">Tyrone Roberts</Link>
                        </h5>
                        <div className="rating-img">
                          <ImageWithBasePath src="assets/img/user/profile-02.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="title">
                      <Link to="#">
                        Interview Question: Why Dont You Have a Degree?
                      </Link>
                    </h3>
                    <div className="lesson-student-five">
                      <div className="student-five">
                        <span>
                          <ImageWithBasePath src="assets/img/icon/user-icon-05.svg" alt="" />
                          850 Students
                        </span>
                      </div>
                      <div className="lesson-five">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/book-content-icon.svg"
                            alt=""
                          />
                          55 Lessons
                        </span>
                      </div>
                    </div>
                    <div className="rating rating-star rating-two rating-five align-items-center justify-content-between">
                      <div className="course-btn">
                        <span className="line-through">$40.00</span>
                        <span>$34.00</span>
                      </div>
                      <span className="card-arrow">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icon/white-arrow-up.svg"
                            alt=""
                          />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-five course-box-eight">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/course/trending-course-16.jpg"
                        width={600}
                        height={300}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <div className="card-mark">
                      <span className="mark">Marketing</span>
                    </div>
                    <div className="rating rate-star rating-star-five">
                      <span className="average-rating rate-point ">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        4.5 <b> (2500)</b>
                      </span>
                      <div className="feature-texts-eight">
                        <h5>
                          <Link to="/mentee/mentor-profile">Remora Jaine</Link>
                        </h5>
                        <div className="rating-img">
                          <ImageWithBasePath src="assets/img/user/profile-03.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="title">
                      <Link to="#">
                        Learn CorelDraw – Interactive Tutorial
                      </Link>
                    </h3>
                    <div className="lesson-student-five">
                      <div className="student-five">
                        <span>
                          <ImageWithBasePath src="assets/img/icon/user-icon-05.svg" alt="" />
                          700 Students
                        </span>
                      </div>
                      <div className="lesson-five">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/book-content-icon.svg"
                            alt=""
                          />
                          50 Lessons
                        </span>
                      </div>
                    </div>
                    <div className="rating rating-star rating-two rating-five align-items-center justify-content-between">
                      <div className="course-btn">
                        <span className="line-through">$40.00</span>
                        <span>$36.00</span>
                      </div>
                      <span className="card-arrow">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icon/white-arrow-up.svg"
                            alt=""
                          />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-animationtwo"
          role="tabpanel"
          aria-labelledby="pills-animationtwo-tab"
        >
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-five course-box-eight">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/course/trending-course-17.jpg"
                        width={600}
                        height={300}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <div className="card-mark">
                      <span className="mark">Marketing</span>
                      <span className="popular">Popular</span>
                    </div>
                    <div className="rating rate-star rating-star-five">
                      <span className="average-rating rate-point ">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        5.0 <b> (2566)</b>
                      </span>
                      <div className="feature-texts-eight">
                        <h5>
                          <Link to="/mentee/mentor-profile">Brittany Garcia</Link>
                        </h5>
                        <div className="rating-img">
                          <ImageWithBasePath src="assets/img/user/profile-01.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="title">
                      <Link to="#">
                        Learn CorelDraw – Interactive Tutorial
                      </Link>
                    </h3>
                    <div className="lesson-student-five">
                      <div className="student-five">
                        <span>
                          <ImageWithBasePath src="assets/img/icon/user-icon-05.svg" alt="" />
                          750 Students
                        </span>
                      </div>
                      <div className="lesson-five">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/book-content-icon.svg"
                            alt=""
                          />
                          50 Lessons
                        </span>
                      </div>
                    </div>
                    <div className="rating rating-star rating-two rating-five align-items-center justify-content-between">
                      <div className="course-btn">
                        <span className="line-through">$40.00</span>
                        <span>$34.00</span>
                      </div>
                      <span className="card-arrow">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icon/white-arrow-up.svg"
                            alt=""
                          />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-five course-box-eight">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/course/trending-course-18.jpg"
                        width={600}
                        height={300}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <div className="card-mark">
                      <span className="mark">Marketing</span>
                      <span className="new">New</span>
                    </div>
                    <div className="rating rate-star rating-star-five">
                      <span className="average-rating rate-point ">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        5.0 <b> (2566)</b>
                      </span>
                      <div className="feature-texts-eight">
                        <h5>
                          <Link to="/mentee/mentor-profile">Tyrone Roberts</Link>
                        </h5>
                        <div className="rating-img">
                          <ImageWithBasePath src="assets/img/user/profile-02.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="title">
                      <Link to="#">
                        Interview Question: Why Dont You Have a Degree?
                      </Link>
                    </h3>
                    <div className="lesson-student-five">
                      <div className="student-five">
                        <span>
                          <ImageWithBasePath src="assets/img/icon/user-icon-05.svg" alt="" />
                          840 Students
                        </span>
                      </div>
                      <div className="lesson-five">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/book-content-icon.svg"
                            alt=""
                          />
                          65 Lessons
                        </span>
                      </div>
                    </div>
                    <div className="rating rating-star rating-two rating-five align-items-center justify-content-between">
                      <div className="course-btn">
                        <span className="line-through">$40.00</span>
                        <span>$33.00</span>
                      </div>
                      <span className="card-arrow">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icon/white-arrow-up.svg"
                            alt=""
                          />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-five course-box-eight">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/course/trending-course-19.jpg"
                        width={600}
                        height={300}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <div className="card-mark">
                      <span className="mark">Marketing</span>
                    </div>
                    <div className="rating rate-star rating-star-five">
                      <span className="average-rating rate-point ">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        5.0 <b> (2566)</b>
                      </span>
                      <div className="feature-texts-eight">
                        <h5>
                          <Link to="/mentee/mentor-profile">Remora Jaine</Link>
                        </h5>
                        <div className="rating-img">
                          <ImageWithBasePath src="assets/img/user/profile-03.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="title">
                      <Link to="#">
                        Learn CorelDraw – Interactive Tutorial
                      </Link>
                    </h3>
                    <div className="lesson-student-five">
                      <div className="student-five">
                        <span>
                          <ImageWithBasePath src="assets/img/icon/user-icon-05.svg" alt="" />
                          700 Students
                        </span>
                      </div>
                      <div className="lesson-five">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/book-content-icon.svg"
                            alt=""
                          />
                          40 Lessons
                        </span>
                      </div>
                    </div>
                    <div className="rating rating-star rating-two rating-five align-items-center justify-content-between">
                      <div className="course-btn">
                        <span className="line-through">$40.00</span>
                        <span>$35.00</span>
                      </div>
                      <span className="card-arrow">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icon/white-arrow-up.svg"
                            alt=""
                          />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-webtwo"
          role="tabpanel"
          aria-labelledby="pills-webtwo-tab"
        >
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-five course-box-eight">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/course/trending-course-05.jpg"
                        width={600}
                        height={300}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <div className="card-mark">
                      <span className="mark">Marketing</span>
                      <span className="popular">Popular</span>
                    </div>
                    <div className="rating rate-star rating-star-five">
                      <span className="average-rating rate-point ">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        5.0 <b> (2566)</b>
                      </span>
                      <div className="feature-texts-eight">
                        <h5>
                          <Link to="/mentee/mentor-profile">Brittany Garcia</Link>
                        </h5>
                        <div className="rating-img">
                          <ImageWithBasePath src="assets/img/user/profile-01.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="title">
                      <Link to="#">
                        Learn CorelDraw – Interactive Tutorial
                      </Link>
                    </h3>
                    <div className="lesson-student-five">
                      <div className="student-five">
                        <span>
                          <ImageWithBasePath src="assets/img/icon/user-icon-05.svg" alt="" />
                          800 Students
                        </span>
                      </div>
                      <div className="lesson-five">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/book-content-icon.svg"
                            alt=""
                          />
                          60 Lessons
                        </span>
                      </div>
                    </div>
                    <div className="rating rating-star rating-two rating-five align-items-center justify-content-between">
                      <div className="course-btn">
                        <span className="line-through">$40.00</span>
                        <span>$36.00</span>
                      </div>
                      <span className="card-arrow">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icon/white-arrow-up.svg"
                            alt=""
                          />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-five course-box-eight">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/course/trending-course-06.jpg"
                        width={600}
                        height={300}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <div className="card-mark">
                      <span className="mark">Marketing</span>
                      <span className="new">New</span>
                    </div>
                    <div className="rating rate-star rating-star-five">
                      <span className="average-rating rate-point ">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        4.7 <b> (2466)</b>
                      </span>
                      <div className="feature-texts-eight">
                        <h5>
                          <Link to="/mentee/mentor-profile">Tyrone Roberts</Link>
                        </h5>
                        <div className="rating-img">
                          <ImageWithBasePath src="assets/img/user/profile-02.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="title">
                      <Link to="#">
                        Interview Question: Why Dont You Have a Degree?
                      </Link>
                    </h3>
                    <div className="lesson-student-five">
                      <div className="student-five">
                        <span>
                          <ImageWithBasePath src="assets/img/icon/user-icon-05.svg" alt="" />
                          650 Students
                        </span>
                      </div>
                      <div className="lesson-five">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/book-content-icon.svg"
                            alt=""
                          />
                          50 Lessons
                        </span>
                      </div>
                    </div>
                    <div className="rating rating-star rating-two rating-five align-items-center justify-content-between">
                      <div className="course-btn">
                        <span className="line-through">$40.00</span>
                        <span>$32.00</span>
                      </div>
                      <span className="card-arrow">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icon/white-arrow-up.svg"
                            alt=""
                          />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-five course-box-eight">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/course/trending-course-07.jpg"
                        width={600}
                        height={300}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <div className="card-mark">
                      <span className="mark">Marketing</span>
                    </div>
                    <div className="rating rate-star rating-star-five">
                      <span className="average-rating rate-point ">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        5.0 <b> (2566)</b>
                      </span>
                      <div className="feature-texts-eight">
                        <h5>
                          <Link to="/mentee/mentor-profile">Remora Jaine</Link>
                        </h5>
                        <div className="rating-img">
                          <ImageWithBasePath src="assets/img/user/profile-03.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="title">
                      <Link to="#">
                        Learn CorelDraw – Interactive Tutorial
                      </Link>
                    </h3>
                    <div className="lesson-student-five">
                      <div className="student-five">
                        <span>
                          <ImageWithBasePath src="assets/img/icon/user-icon-05.svg" alt="" />
                          850 Students
                        </span>
                      </div>
                      <div className="lesson-five">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/book-content-icon.svg"
                            alt=""
                          />
                          55 Lessons
                        </span>
                      </div>
                    </div>
                    <div className="rating rating-star rating-two rating-five align-items-center justify-content-between">
                      <div className="course-btn">
                        <span className="line-through">$40.00</span>
                        <span>$35.00</span>
                      </div>
                      <span className="card-arrow">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icon/white-arrow-up.svg"
                            alt=""
                          />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-securitytwo"
          role="tabpanel"
          aria-labelledby="pills-securitytwo-tab"
        >
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-five course-box-eight">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/course/trending-course-17.jpg"
                        width={600}
                        height={300}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <div className="card-mark">
                      <span className="mark">Marketing</span>
                      <span className="popular">Popular</span>
                    </div>
                    <div className="rating rate-star rating-star-five">
                      <span className="average-rating rate-point ">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        5.0 <b> (2566)</b>
                      </span>
                      <div className="feature-texts-eight">
                        <h5>
                          <Link to="/mentee/mentor-profile">Remora Jaine</Link>
                        </h5>
                        <div className="rating-img">
                          <ImageWithBasePath src="assets/img/user/profile-01.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="title">
                      <Link to="#">
                        Learn CorelDraw – Interactive Tutorial
                      </Link>
                    </h3>
                    <div className="lesson-student-five">
                      <div className="student-five">
                        <span>
                          <ImageWithBasePath src="assets/img/icon/user-icon-05.svg" alt="" />
                          800 Students
                        </span>
                      </div>
                      <div className="lesson-five">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/book-content-icon.svg"
                            alt=""
                          />
                          60 Lessons
                        </span>
                      </div>
                    </div>
                    <div className="rating rating-star rating-two rating-five align-items-center justify-content-between">
                      <div className="course-btn">
                        <span className="line-through">$40.00</span>
                        <span>$36.00</span>
                      </div>
                      <span className="card-arrow">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icon/white-arrow-up.svg"
                            alt=""
                          />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-five course-box-eight">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/course/trending-course-18.jpg"
                        width={600}
                        height={300}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <div className="card-mark">
                      <span className="mark">Marketing</span>
                      <span className="new">New</span>
                    </div>
                    <div className="rating rate-star rating-star-five">
                      <span className="average-rating rate-point ">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        5.0 <b> (2566)</b>
                      </span>
                      <div className="feature-texts-eight">
                        <h5>
                          <Link to="/mentee/mentor-profile">Brittany Garcia</Link>
                        </h5>
                        <div className="rating-img">
                          <ImageWithBasePath src="assets/img/user/profile-01.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="title">
                      <Link to="#">
                        Interview Question: Why Dont You Have a Degree?
                      </Link>
                    </h3>
                    <div className="lesson-student-five">
                      <div className="student-five">
                        <span>
                          <ImageWithBasePath src="assets/img/icon/user-icon-05.svg" alt="" />
                          850 Students
                        </span>
                      </div>
                      <div className="lesson-five">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/book-content-icon.svg"
                            alt=""
                          />
                          50 Lessons
                        </span>
                      </div>
                    </div>
                    <div className="rating rating-star rating-two rating-five align-items-center justify-content-between">
                      <div className="course-btn">
                        <span className="line-through">$40.00</span>
                        <span>$34.00</span>
                      </div>
                      <span className="card-arrow">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icon/white-arrow-up.svg"
                            alt=""
                          />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-five course-box-eight">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/course/trending-course-19.jpg"
                        width={600}
                        height={300}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <div className="card-mark">
                      <span className="mark">Marketing</span>
                    </div>
                    <div className="rating rate-star rating-star-five">
                      <span className="average-rating rate-point ">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        5.0 <b> (2566)</b>
                      </span>
                      <div className="feature-texts-eight">
                        <h5>
                          <Link to="/mentee/mentor-profile">Tyrone Roberts</Link>
                        </h5>
                        <div className="rating-img">
                          <ImageWithBasePath src="assets/img/user/profile-01.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="title">
                      <Link to="#">
                        Learn CorelDraw – Interactive Tutorial
                      </Link>
                    </h3>
                    <div className="lesson-student-five">
                      <div className="student-five">
                        <span>
                          <ImageWithBasePath src="assets/img/icon/user-icon-05.svg" alt="" />
                          650 Students
                        </span>
                      </div>
                      <div className="lesson-five">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/book-content-icon.svg"
                            alt=""
                          />
                          45 Lessons
                        </span>
                      </div>
                    </div>
                    <div className="rating rating-star rating-two rating-five align-items-center justify-content-between">
                      <div className="course-btn">
                        <span className="line-through">$40.00</span>
                        <span>$37.00</span>
                      </div>
                      <span className="card-arrow">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icon/white-arrow-up.svg"
                            alt=""
                          />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-salestwo"
          role="tabpanel"
          aria-labelledby="pills-salestwo-tab"
        >
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-five course-box-eight">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/course/trending-course-18.jpg"
                        width={600}
                        height={300}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <div className="card-mark">
                      <span className="mark">Marketing</span>
                      <span className="popular">Popular</span>
                    </div>
                    <div className="rating rate-star rating-star-five">
                      <span className="average-rating rate-point ">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        5.0 <b> (2566)</b>
                      </span>
                      <div className="feature-texts-eight">
                        <h5>
                          <Link to="/mentee/mentor-profile">Brittany Garcia</Link>
                        </h5>
                        <div className="rating-img">
                          <ImageWithBasePath src="assets/img/user/profile-01.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="title">
                      <Link to="#">
                        Learn CorelDraw – Interactive Tutorial
                      </Link>
                    </h3>
                    <div className="lesson-student-five">
                      <div className="student-five">
                        <span>
                          <ImageWithBasePath src="assets/img/icon/user-icon-05.svg" alt="" />
                          600 Students
                        </span>
                      </div>
                      <div className="lesson-five">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/book-content-icon.svg"
                            alt=""
                          />
                          65 Lessons
                        </span>
                      </div>
                    </div>
                    <div className="rating rating-star rating-two rating-five align-items-center justify-content-between">
                      <div className="course-btn">
                        <span className="line-through">$40.00</span>
                        <span>$36.00</span>
                      </div>
                      <span className="card-arrow">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icon/white-arrow-up.svg"
                            alt=""
                          />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-five course-box-eight">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/course/trending-course-17.jpg"
                        width={600}
                        height={300}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <div className="card-mark">
                      <span className="mark">Marketing</span>
                      <span className="new">New</span>
                    </div>
                    <div className="rating rate-star rating-star-five">
                      <span className="average-rating rate-point ">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        5.0 <b> (2566)</b>
                      </span>
                      <div className="feature-texts-eight">
                        <h5>
                          <Link to="/mentee/mentor-profile">Tyrone Roberts</Link>
                        </h5>
                        <div className="rating-img">
                          <ImageWithBasePath src="assets/img/user/profile-01.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="title">
                      <Link to="#">
                        Interview Question: Why Dont You Have a Degree?
                      </Link>
                    </h3>
                    <div className="lesson-student-five">
                      <div className="student-five">
                        <span>
                          <ImageWithBasePath src="assets/img/icon/user-icon-05.svg" alt="" />
                          700 Students
                        </span>
                      </div>
                      <div className="lesson-five">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/book-content-icon.svg"
                            alt=""
                          />
                          50 Lessons
                        </span>
                      </div>
                    </div>
                    <div className="rating rating-star rating-two rating-five align-items-center justify-content-between">
                      <div className="course-btn">
                        <span className="line-through">$40.00</span>
                        <span>$35.00</span>
                      </div>
                      <span className="card-arrow">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icon/white-arrow-up.svg"
                            alt=""
                          />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="course-box course-box-five course-box-eight">
                <div className="product">
                  <div className="product-img trend-course">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt=""
                        src="assets/img/course/trending-course-05.jpg"
                        width={600}
                        height={300}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <div className="card-mark">
                      <span className="mark">Marketing</span>
                    </div>
                    <div className="rating rate-star rating-star-five">
                      <span className="average-rating rate-point ">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        5.0 <b> (2566)</b>
                      </span>
                      <div className="feature-texts-eight">
                        <h5>
                          <Link to="/mentee/mentor-profile">Remora Jaine</Link>
                        </h5>
                        <div className="rating-img">
                          <ImageWithBasePath src="assets/img/user/profile-01.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <h3 className="title">
                      <Link to="#">
                        Learn CorelDraw – Interactive Tutorial
                      </Link>
                    </h3>
                    <div className="lesson-student-five">
                      <div className="student-five">
                        <span>
                          <ImageWithBasePath src="assets/img/icon/user-icon-05.svg" alt="" />
                          800 Students
                        </span>
                      </div>
                      <div className="lesson-five">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icon/book-content-icon.svg"
                            alt=""
                          />
                          60 Lessons
                        </span>
                      </div>
                    </div>
                    <div className="rating rating-star rating-two rating-five align-items-center justify-content-between">
                      <div className="course-btn">
                        <span className="line-through">$40.00</span>
                        <span>$33.00</span>
                      </div>
                      <span className="card-arrow">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icon/white-arrow-up.svg"
                            alt=""
                          />
                        </Link>
                      </span>
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
  {/* Most Trending Courses */}
  {/* Student Feedback */}
  <section className="student-feedback">
    <div className="container">
      <div className=" aos " data-aos="fade-up">
        <div className="heder-eight aos " data-aos="fade-up">
          <div className="section-head-eight">
            <h2>
              Our Latest <span>Reviews </span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              aenean accumsan bibendum{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="student-profile-five profile-six">
            <div className="student-profile-text">
              <h3>Lorem ipsum dolor</h3>
              <div className="quatation-para">
                <span>
                  <ImageWithBasePath src="assets/img/icon/quatation-white.svg" alt="" />
                </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vitae neque metus. Vivamus consectetur ultricies commodo.
                  Pellentesque at nisl sit amet.
                </p>
              </div>
              <div className="student-profile-viewfive">
                <div className="student-name">
                  <div className="student-img">
                    <span>
                      <ImageWithBasePath src="assets/img/user/user.jpg" alt="" />
                    </span>
                  </div>
                  <div className="student-name-info">
                    <h3>
                      <Link to="/mentor/review">Steve</Link>
                    </h3>
                    <span> Designer</span>
                  </div>
                </div>
                <div className="rating">
                  <i className="fa fa-star filled" />
                  <i className="fa fa-star filled" />
                  <i className="fa fa-star filled" />
                  <i className="fa fa-star filled" />
                  <i className="fa fa-star filled" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="student-profile-five profile-six">
            <div className="student-profile-text">
              <h3>Lorem ipsum dolor</h3>
              <div className="quatation-para">
                <span>
                  <ImageWithBasePath src="assets/img/icon/quatation-white.svg" alt="" />
                </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vitae neque metus. Vivamus consectetur ultricies commodo.
                  Pellentesque at nisl sit amet.
                </p>
              </div>
              <div className="student-profile-viewfive">
                <div className="student-name">
                  <div className="student-img">
                    <span>
                      <ImageWithBasePath src="assets/img/user/user11.jpg" alt="" />
                    </span>
                  </div>
                  <div className="student-name-info">
                    <h3>
                      <Link to="/mentor/review">Designer</Link>
                    </h3>
                    <span> Developer</span>
                  </div>
                </div>
                <div className="rating">
                  <i className="fa fa-star filled" />
                  <i className="fa fa-star filled" />
                  <i className="fa fa-star filled" />
                  <i className="fa fa-star filled" />
                  <i className="fa fa-star filled" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="student-profile-five profile-six">
            <div className="student-profile-text">
              <h3>Lorem ipsum dolor</h3>
              <div className="quatation-para">
                <span>
                  <ImageWithBasePath src="assets/img/icon/quatation-white.svg" alt="" />
                </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vitae neque metus. Vivamus consectetur ultricies commodo.
                  Pellentesque at nisl sit amet.
                </p>
              </div>
              <div className="student-profile-viewfive">
                <div className="student-name">
                  <div className="student-img">
                    <span>
                      <ImageWithBasePath src="assets/img/user/user12.jpg" alt="" />
                    </span>
                  </div>
                  <div className="student-name-info">
                    <h3>
                      <Link to="/mentor/review">Mathan</Link>
                    </h3>
                    <span> Marketer</span>
                  </div>
                </div>
                <div className="rating">
                  <i className="fa fa-star filled" />
                  <i className="fa fa-star filled" />
                  <i className="fa fa-star filled" />
                  <i className="fa fa-star filled" />
                  <i className="fa fa-star filled" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Student Feedback */}
  {/* Faq */}
  <section className="faq-four-sec faq-five-sec">
    <div className="container">
      <div className="faq-sec-five sec-six-faq pt-0">
        <div className="heder-eight aos " data-aos="fade-up">
          <div className="section-head-eight">
            <h2>
              Frequently Asked <span>Questions</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              aenean accumsan bibendum{" "}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
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
                              <span>01</span> Is the regular license the same
                              thing as an editorial license?
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
                            Do you want to move on next step? Choose your most
                            popular leaning mentors, it will help you to achieve
                            your professional goals.
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
                              <span>02</span>Is the regular license the same
                              thing as an editorial license?
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
                            Do you want to move on next step? Choose your most
                            popular leaning mentors, it will help you to achieve
                            your professional goals.
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
                              <span>03</span>Is the regular license the same
                              thing as an editorial license?
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
                            Do you want to move on next step? Choose your most
                            popular leaning mentors, it will help you to achieve
                            your professional goals.
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
                              <span>04</span>Is the regular license the same
                              thing as an editorial license?
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
                            Do you want to move on next step? Choose your most
                            popular leaning mentors, it will help you to achieve
                            your professional goals.
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
    </div>
  </section>
  {/* /Faq */}
  {/* Student Place */}
  <section className="student-place">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-3">
          <div className="student-place-img">
            <ImageWithBasePath
              src="assets/img/student-bg-01.png"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="heder-eight aos " data-aos="fade-up">
            <div className="section-head-eight student-place-title mb-0">
              <h2>
                25K+ Students Are In <span> One Place </span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                aenean accumsan bibendum{" "}
              </p>
              <div className="student-join-btn">
                <Link to="/login">Join Now</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="student-place-img">
            <ImageWithBasePath
              src="assets/img/student-bg-02.png"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Student Place */}
  {/* Most Trending  Courses */}
  <section className="section trending-courses trending-courses-three popular-course-three popular-course-five">
    <div className="container">
      <div className="heder-eight aos " data-aos="fade-up">
        <div className="section-head-eight">
          <h2>
            Latest <span> Blogs</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
            accumsan bibendum{" "}
          </p>
        </div>
      </div>
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="course-box course-box-five">
            <div className="product">
              <div className="product-img trend-course">
                <Link to="/blog/blog-details">
                  <ImageWithBasePath
                    className="img-fluid"
                    alt=""
                    src="assets/img/course/trending-course-11.jpg"
                    width={600}
                    height={300}
                  />
                </Link>
              </div>
              <div className="product-content">
                <div className="rating rate-star rating-star-five">
                  <div className="rating-img d-flex align-items-center me-0">
                    <ImageWithBasePath
                      src="assets/img/user/profile-01.jpg"
                      className="me-2"
                      alt=""
                    />
                    <h5 className="user-name blog-user-name m-0">
                      <Link to="/mentee/mentor-profile">Steve </Link>
                    </h5>
                  </div>
                  <span className="average-rating rate-point ">
                    <ImageWithBasePath
                      src="assets/img/icon/calendar.svg"
                      className="me-2"
                      alt=""
                    />{" "}
                    09 Jan 2023
                  </span>
                </div>
                <h3 className="title">
                  <Link to="/blog/blog-details">
                    How to Make a Perfect CV That Attracts the Attention
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, et alii clita tritani per. Vix ut
                  vidisse pertinacia, ius ut maiorum omittam....
                </p>
                <div className="rating rating-star blog-latest rating-two rating-five align-items-center">
                  <span className="average-rating rate-point ">
                    <ImageWithBasePath src="assets/img/icon/time-icon.svg" alt="" /> 20 Min to
                    read
                  </span>
                  <span className="card-arrow ms-auto">
                    <Link to="/blog/blog-details">
                      <ImageWithBasePath
                        src="assets/img/icon/white-arrow-up.svg"
                        className="me-0"
                        alt=""
                      />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="course-box course-box-five">
            <div className="product">
              <div className="product-img trend-course">
                <Link to="/blog/blog-details">
                  <ImageWithBasePath
                    className="img-fluid"
                    alt=""
                    src="assets/img/course/trending-course-12.jpg"
                    width={600}
                    height={300}
                  />
                </Link>
              </div>
              <div className="product-content">
                <div className="rating rate-star rating-star-five">
                  <div className="rating-img d-flex align-items-center me-0">
                    <ImageWithBasePath
                      src="assets/img/user/profile-02.jpg"
                      className="me-2"
                      alt=""
                    />
                    <h5 className="user-name blog-user-name m-0">
                      <Link to="/mentee/mentor-profile">Harvey</Link>
                    </h5>
                  </div>
                  <span className="average-rating rate-point ">
                    <ImageWithBasePath
                      src="assets/img/icon/calendar.svg"
                      className="me-2"
                      alt=""
                    />{" "}
                    20 Jan 2023
                  </span>
                </div>
                <h3 className="title">
                  <Link to="/blog/blog-details">
                    39 Strengths and Weaknesses To Discuss in a Courses
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, et alii clita tritani per. Vix ut
                  vidisse pertinacia, ius ut maiorum omittam....
                </p>
                <div className="rating rating-star blog-latest rating-two rating-five align-items-center">
                  <span className="average-rating rate-point ">
                    <ImageWithBasePath src="assets/img/icon/time-icon.svg" alt="" /> 25 Min to
                    read
                  </span>
                  <span className="card-arrow ms-auto">
                    <Link to="/blog/blog-details">
                      <ImageWithBasePath
                        src="assets/img/icon/white-arrow-up.svg"
                        className="me-0"
                        alt=""
                      />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="course-box course-box-five">
            <div className="product">
              <div className="product-img trend-course">
                <Link to="/blog/blog-details">
                  <ImageWithBasePath
                    className="img-fluid"
                    alt=""
                    src="assets/img/course/trending-course-13.jpg"
                    width={600}
                    height={300}
                  />
                </Link>
              </div>
              <div className="product-content">
                <div className="rating rate-star rating-star-five">
                  <div className="rating-img d-flex align-items-center me-0">
                    <ImageWithBasePath
                      src="assets/img/user/profile-03.jpg"
                      className="me-2"
                      alt=""
                    />
                    <h5 className="user-name blog-user-name m-0">
                      <Link to="/mentee/mentor-profile">Casandra</Link>{" "}
                    </h5>
                  </div>
                  <span className="average-rating rate-point ">
                    <ImageWithBasePath
                      src="assets/img/icon/calendar.svg"
                      className="me-2"
                      alt=""
                    />{" "}
                    15 Jan 2023
                  </span>
                </div>
                <h3 className="title">
                  <Link to="/blog/blog-details">
                    Interview Question: Why Dont You Have a Degree?
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, et alii clita tritani per. Vix ut
                  vidisse pertinacia, ius ut maiorum omittam....
                </p>
                <div className="rating rating-star blog-latest rating-two rating-five align-items-center">
                  <span className="average-rating rate-point ">
                    <ImageWithBasePath src="assets/img/icon/time-icon.svg" alt="" /> 15 Min to
                    read
                  </span>
                  <span className="card-arrow ms-auto">
                    <Link to="/blog/blog-details">
                      <ImageWithBasePath
                        src="assets/img/icon/white-arrow-up.svg"
                        className="me-0"
                        alt=""
                      />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Most Trending Courses */}
  <section className="want-mentor">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="want-mentor-content">
            <div className="heder-eight aos " data-aos="fade-up">
              <div className="section-head-eight">
                <h2>
                  Want To Become <span>A Mentor?</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  aenean accumsan bibendum{" "}
                </p>
                <Link to="/login" className="join-now">
                  Join Now
                </Link>
              </div>
              <div className="bg-imgs">
                <ImageWithBasePath
                  src="assets/img/bg/index-six-bg-02.png"
                  className="blue-arrow"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="become-mentor-img">
            <ImageWithBasePath
              src="assets/img/become-mentor.png"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</>
<HomeSixFooter/>
    </div>
  )
}

export default HomeSix
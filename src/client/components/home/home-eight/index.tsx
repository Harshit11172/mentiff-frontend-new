import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HomeEightHeader from "./header";
import HomeEightfooter from "./footer";
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath";
import AOS from "aos";
import "aos/dist/aos.css";
import ProgressButton from "../../common/progress/progress";

const HomeEight = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <HomeEightHeader />
      {/* Home Banner */}
      <section className=" home-slide home-slide-four d-flex align-items-center">
        <div className="container">
          <div className="side-four-right">
            <ImageWithBasePath src="assets/img/img-1.png" alt="" />
          </div>
          <div className="row ">
            <div className="col-lg-6 d-flex align-items-center">
              <div className="section-banner-three aos" data-aos="fade-up">
                <div className="hometwo-slide-text">
                  <h1>
                    Engaging &amp; Accessible <span>Online Courses</span> For
                    All
                  </h1>
                  <p>Own your future learning new skills online</p>
                </div>
                {/* Search */}
                <div className="search-box search-eight-box">
                  <form action="/mentee/search-mentor">
                    <div className="form-group search-info location-search">
                      <input
                        type="text"
                        className="form-control text-truncate"
                        placeholder=" Search School, Online educational centers, etc"
                      />
                      <Link
                        to="/mentee/search-mentor"
                        className="btn bg-search search-btn align-items-center d-flex justify-content-center"
                      >
                        Search
                      </Link>
                    </div>
                  </form>
                </div>
                {/* /Search */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="object-slide-img aos " data-aos="fade-up">
                <ImageWithBasePath
                  src="assets/img/object-5.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Home Banner */}
      {/* Course Categories four */}
      <section className="most-popular course-categories-four">
        <div className="container">
          <div className="side-four">
            <ImageWithBasePath src="assets/img/img-2.png" alt="" />
          </div>
          <div
            className="section-header h-four text-center aos "
            data-aos="fade-up"
          >
            <span>Top Categories</span>
            <h2>Popular Courses Categories</h2>
            <p className="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              aenean accumsan bibendum gravida maecenas augue elementum et
              neque. Suspendisse imperdiet.
            </p>
          </div>
          <div className="popular-categories aos " data-aos="fade-up">
            <div className="row justify-content-center">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <Link to="/mentee/search-mentor">
                  <div className="sub-categories bg-design d-flex align-items-center justify-content-center">
                    <div className="sub-categories-group">
                      <div className="categories-img ">
                        <ImageWithBasePath
                          src="assets/img/categories/cate-19.png"
                          alt=""
                        />
                      </div>
                      <div className="categories-text text-center">
                        <h4>Business</h4>
                        <p className="course-count">Over 200+ Courses</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <Link to="/mentee/search-mentor">
                  <div className="sub-categories bg-development d-flex align-items-center justify-content-center">
                    <div className="sub-categories-group">
                      <div className="categories-img ">
                        <ImageWithBasePath
                          src="assets/img/categories/cate-20.png"
                          alt=""
                        />
                      </div>
                      <div className="categories-text text-center">
                        <h4>Marketing</h4>
                        <p className="course-count">Over 100+ Courses</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <Link to="/mentee/search-mentor">
                  <div className="sub-categories bg-software d-flex align-items-center justify-content-center">
                    <div className="sub-categories-group">
                      <div className="categories-img ">
                        <ImageWithBasePath
                          src="assets/img/categories/cate-21.png"
                          alt=""
                        />
                      </div>
                      <div className="categories-text text-center">
                        <h4>Design</h4>
                        <p className="course-count">Over 300+ Courses</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <Link to="/mentee/search-mentor">
                  <div className="sub-categories bg-business d-flex align-items-center justify-content-center">
                    <div className="sub-categories-group">
                      <div className="categories-img ">
                        <ImageWithBasePath
                          src="assets/img/categories/cate-22.png"
                          alt=""
                        />
                      </div>
                      <div className="categories-text text-center">
                        <h4>Development</h4>
                        <p className="course-count">Over 250+ Courses</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <Link to="/mentee/search-mentor">
                  <div className="sub-categories bg-marketing d-flex align-items-center justify-content-center">
                    <div className="sub-categories-group">
                      <div className="categories-img ">
                        <ImageWithBasePath
                          src="assets/img/categories/cate-23.png"
                          alt=""
                        />
                      </div>
                      <div className="categories-text text-center">
                        <h4>IT &amp; Networking</h4>
                        <p className="course-count">Over 400+ Courses</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <Link to="/mentee/search-mentor">
                  <div className="sub-categories bg-photography d-flex align-items-center justify-content-center">
                    <div className="sub-categories-group">
                      <div className="categories-img ">
                        <ImageWithBasePath
                          src="assets/img/categories/cate-24.png"
                          alt=""
                        />
                      </div>
                      <div className="categories-text text-center">
                        <h4>Photography</h4>
                        <p className="course-count">Over 450+ Courses</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <Link to="/mentee/search-mentor">
                  <div className="sub-categories bg-design d-flex align-items-center justify-content-center">
                    <div className="sub-categories-group">
                      <div className="categories-img ">
                        <ImageWithBasePath
                          src="assets/img/categories/cate-25.png"
                          alt=""
                        />
                      </div>
                      <div className="categories-text text-center">
                        <h4>Art &amp; Cultures</h4>
                        <p className="course-count">Over 150+ Courses</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <Link to="/mentee/search-mentor">
                  <div className="sub-categories bg-photography d-flex align-items-center justify-content-center">
                    <div className="sub-categories-group">
                      <div className="categories-img ">
                        <ImageWithBasePath
                          src="assets/img/categories/cate-26.png"
                          alt=""
                        />
                      </div>
                      <div className="categories-text text-center">
                        <h4>Research</h4>
                        <p className="course-count">Over 300+ Courses</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="explore-more text-center aos " data-aos="fade-up">
            <Link to="/mentee/search-mentor" className="btn bg-explore">
              Show All Categories
            </Link>
          </div>
        </div>
      </section>
      {/* /Course Categories four */}
      {/* Featured Courses four */}
      <section className="section featured-course-four">
        <div className="container">
          <div className="side-four-right">
            <ImageWithBasePath src="assets/img/img-3.png" alt="" />
          </div>
          <div className="side-four">
            <ImageWithBasePath src="assets/img/img-2.png" alt="" />
          </div>
          <div
            className="section-header h-four text-center aos "
            data-aos="fade-up"
          >
            <span>What’s New</span>
            <h2>Featured Courses</h2>
            <p className="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              aenean accumsan bibendum gravida maecenas augue elementum et
              neque. Suspendisse imperdiet.
            </p>
          </div>
          <div className="featured-course-new aos " data-aos="fade-up">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="featured-course-face">
                  <div className="featured-course-design">
                    <div className="course-info d-flex align-items-center">
                      <div className="course-bg-left">
                        <ImageWithBasePath
                          src="assets/img/course-bg-1.png"
                          alt=""
                        />
                      </div>
                      <div className="course-bg-right">
                        <ImageWithBasePath
                          src="assets/img/course-bg-2.png"
                          alt=""
                        />
                      </div>
                      <div className="rating rating-star">
                        <i className="fas fa-star filled" />
                        <span className="d-inline-block average-rating rate-point ">
                          4.4<span className="rate-star-point">(15)</span>
                        </span>
                      </div>
                      <div className="course-price">
                        <h4>$400</h4>
                      </div>
                    </div>
                    <div className="featured-course-four-head text-center">
                      <h2>
                        <Link to="/mentee/search-mentor">UI/UX Design</Link>
                      </h2>
                    </div>
                    <div className="view-student">
                      <ul className="view-student-four justify-content-center">
                        <li>
                          <i className="fas fa-users" />
                        </li>
                        <li>50 Students</li>
                        <li>
                          <i className="fas fa-file-alt" />
                        </li>
                        <li>85</li>
                      </ul>
                    </div>
                  </div>
                  <div className="course-footer-text text-center">
                    <h4>
                      <Link to="/mentee/search-mentor">
                        Information About UI/UX Design Degree
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="featured-course-face">
                  <div className="featured-course-design">
                    <div className="course-info d-flex align-items-center">
                      <div className="course-bg-left">
                        <ImageWithBasePath
                          src="assets/img/course-bg-1.png"
                          alt=""
                        />
                      </div>
                      <div className="course-bg-right">
                        <ImageWithBasePath
                          src="assets/img/course-bg-2.png"
                          alt=""
                        />
                      </div>
                      <div className="rating rating-star">
                        <i className="fas fa-star filled" />
                        <span className="d-inline-block average-rating rate-point ">
                          4.2<span className="rate-star-point">(15)</span>
                        </span>
                      </div>
                      <div className="course-price">
                        <h4>Free</h4>
                      </div>
                    </div>
                    <div className="featured-course-four-head text-center">
                      <h2>
                        <Link to="/mentee/search-mentor">Photography</Link>
                      </h2>
                    </div>
                    <div className="view-student">
                      <ul className="view-student-four justify-content-center">
                        <li>
                          <i className="fas fa-users" />
                        </li>
                        <li>40 Students</li>
                        <li>
                          <i className="fas fa-file-alt" />
                        </li>
                        <li>65</li>
                      </ul>
                    </div>
                  </div>
                  <div className="course-footer-text text-center">
                    <h4>
                      <Link to="/mentee/search-mentor">
                        Photography Crash Course for Photographer
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="featured-course-face">
                  <div className="featured-course-design">
                    <div className="course-info d-flex align-items-center">
                      <div className="course-bg-left">
                        <ImageWithBasePath
                          src="assets/img/course-bg-1.png"
                          alt=""
                        />
                      </div>
                      <div className="course-bg-right">
                        <ImageWithBasePath
                          src="assets/img/course-bg-2.png"
                          alt=""
                        />
                      </div>
                      <div className="rating rating-star">
                        <i className="fas fa-star filled" />
                        <span className="d-inline-block average-rating rate-point ">
                          3.4<span className="rate-star-point">(15)</span>
                        </span>
                      </div>
                      <div className="course-price">
                        <h4>$200</h4>
                      </div>
                    </div>
                    <div className="featured-course-four-head text-center">
                      <h2>
                        <Link to="/mentee/search-mentor">React</Link>
                      </h2>
                    </div>
                    <div className="view-student">
                      <ul className="view-student-four justify-content-center">
                        <li>
                          <i className="fas fa-users" />
                        </li>
                        <li>30 Students</li>
                        <li>
                          <i className="fas fa-file-alt" />
                        </li>
                        <li>75</li>
                      </ul>
                    </div>
                  </div>
                  <div className="course-footer-text text-center">
                    <h4>
                      <Link to="/mentee/search-mentor">
                        React – The Complete Guide (React Router){" "}
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="featured-course-face">
                  <div className="featured-course-design">
                    <div className="course-info d-flex align-items-center">
                      <div className="course-bg-left">
                        <ImageWithBasePath
                          src="assets/img/course-bg-1.png"
                          alt=""
                        />
                      </div>
                      <div className="course-bg-right">
                        <ImageWithBasePath
                          src="assets/img/course-bg-2.png"
                          alt=""
                        />
                      </div>
                      <div className="rating rating-star">
                        <i className="fas fa-star filled" />
                        <span className="d-inline-block average-rating rate-point ">
                          4.3<span className="rate-star-point">(15)</span>
                        </span>
                      </div>
                      <div className="course-price">
                        <h4>$100</h4>
                      </div>
                    </div>
                    <div className="featured-course-four-head text-center">
                      <h2>
                        <Link to="/mentee/search-mentor">Marketing</Link>
                      </h2>
                    </div>
                    <div className="view-student">
                      <ul className="view-student-four justify-content-center">
                        <li>
                          <i className="fas fa-users" />
                        </li>
                        <li>40 Students</li>
                        <li>
                          <i className="fas fa-file-alt" />
                        </li>
                        <li>80</li>
                      </ul>
                    </div>
                  </div>
                  <div className="course-footer-text text-center">
                    <h4>
                      <Link to="/mentee/search-mentor">
                        Email &amp; Affiliate Marketing Mastermind
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="featured-course-face">
                  <div className="featured-course-design">
                    <div className="course-info d-flex align-items-center">
                      <div className="course-bg-left">
                        <ImageWithBasePath
                          src="assets/img/course-bg-1.png"
                          alt=""
                        />
                      </div>
                      <div className="course-bg-right">
                        <ImageWithBasePath
                          src="assets/img/course-bg-2.png"
                          alt=""
                        />
                      </div>
                      <div className="rating rating-star">
                        <i className="fas fa-star filled" />
                        <span className="d-inline-block average-rating rate-point ">
                          4.5<span className="rate-star-point">(15)</span>
                        </span>
                      </div>
                      <div className="course-price">
                        <h4>Free</h4>
                      </div>
                    </div>
                    <div className="featured-course-four-head text-center">
                      <h2>
                        <Link to="/mentee/search-mentor">Java</Link>
                      </h2>
                    </div>
                    <div className="view-student">
                      <ul className="view-student-four justify-content-center">
                        <li>
                          <i className="fas fa-users" />
                        </li>
                        <li>50 Students</li>
                        <li>
                          <i className="fas fa-file-alt" />
                        </li>
                        <li>90</li>
                      </ul>
                    </div>
                  </div>
                  <div className="course-footer-text text-center ">
                    <h4>
                      <Link to="/mentee/search-mentor">
                        Java (Beginner) Programming Tutorials
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="featured-course-face">
                  <div className="featured-course-design">
                    <div className="course-info d-flex align-items-center">
                      <div className="course-bg-left">
                        <ImageWithBasePath
                          src="assets/img/course-bg-1.png"
                          alt=""
                        />
                      </div>
                      <div className="course-bg-right">
                        <ImageWithBasePath
                          src="assets/img/course-bg-2.png"
                          alt=""
                        />
                      </div>
                      <div className="rating rating-star">
                        <i className="fas fa-star filled" />
                        <span className="d-inline-block average-rating rate-point ">
                          4.4<span className="rate-star-point">(15)</span>
                        </span>
                      </div>
                      <div className="course-price">
                        <h4>$400</h4>
                      </div>
                    </div>
                    <div className="featured-course-four-head text-center">
                      <h2>
                        <Link to="/mentee/search-mentor">Python</Link>
                      </h2>
                    </div>
                    <div className="view-student">
                      <ul className="view-student-four justify-content-center">
                        <li>
                          <i className="fas fa-users" />
                        </li>
                        <li>50 Students</li>
                        <li>
                          <i className="fas fa-file-alt" />
                        </li>
                        <li>85</li>
                      </ul>
                    </div>
                  </div>
                  <div className="course-footer-text text-center">
                    <h4>
                      <Link to="/mentee/search-mentor">
                        Complete Python Bootcamp: Go from zero to hero.
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="explore-more text-center aos " data-aos="fade-up">
            <Link to="/mentee/search-mentor" className="btn bg-explore">
              Show All Categories
            </Link>
          </div>
        </div>
      </section>
      {/* /Featured Courses four */}
      {/* Top Rating Instructor four */}
      <section className="rating-instructor-four">
        <div className="container">
          <div
            className="section-header h-four text-center aos "
            data-aos="fade-up"
          >
            <span>EXPERT</span>
            <h2>Top Rating Instructor</h2>
            <p className="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              aenean accumsan bibendum gravida maecenas augue elementum et
              neque. Suspendisse imperdiet.
            </p>
          </div>
          <div className="instructor-four-face aos " data-aos="fade-up">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="large-team">
                  <div className="student-img">
                    <Link to="/mentee/mentor-profile">
                      <ImageWithBasePath
                        src="assets/img/user/user-26.jpg"
                        alt=""
                      />
                    </Link>
                    <div className="rating-student-four">
                      <div className="expert-student">
                        <ul className="student-view-four">
                          <li>
                            <i className="fas fa-users" />
                          </li>
                          <li>40 Students</li>
                        </ul>
                      </div>
                      <div className="expert-social-icon d-flex align-items-center">
                        <ul className="social-icon-four">
                          <li>
                            <Link
                              to="#"
                              className="social-icon-space d-flex align-items-center justify-content-center"
                              target="_blank"
                            >
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="social-icon-space d-flex align-items-center justify-content-center"
                              target="_blank"
                            >
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="social-icon-space d-flex align-items-center justify-content-center"
                              target="_blank"
                            >
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="team-name">
                    <h4>
                      <Link to="/mentee/mentor-profile">Jack Wilson</Link>
                    </h4>
                    <span className="designation">Developer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="large-team">
                  <div className="student-img">
                    <Link to="/mentee/mentor-profile">
                      <ImageWithBasePath
                        src="assets/img/user/user-27.jpg"
                        alt=""
                      />
                    </Link>
                    <div className="rating-student-four">
                      <div className="expert-student">
                        <ul className="student-view-four">
                          <li>
                            <i className="fas fa-users" />
                          </li>
                          <li>30 Students</li>
                        </ul>
                      </div>
                      <div className="expert-social-icon d-flex align-items-center">
                        <ul className="social-icon-four">
                          <li>
                            <Link
                              to="#"
                              className="social-icon-space d-flex align-items-center justify-content-center"
                              target="_blank"
                            >
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="social-icon-space d-flex align-items-center justify-content-center"
                              target="_blank"
                            >
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="social-icon-space d-flex align-items-center justify-content-center"
                              target="_blank"
                            >
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="team-name">
                    <h4>
                      <Link to="/mentee/mentor-profile">Daziy Millar</Link>
                    </h4>
                    <span className="designation">PHP Expert</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="large-team">
                  <div className="student-img">
                    <Link to="/mentee/mentor-profile">
                      <ImageWithBasePath
                        src="assets/img/user/user-28.jpg"
                        alt=""
                      />
                    </Link>
                    <div className="rating-student-four">
                      <div className="expert-student">
                        <ul className="student-view-four">
                          <li>
                            <i className="fas fa-users" />
                          </li>
                          <li>50 Students</li>
                        </ul>
                      </div>
                      <div className="expert-social-icon d-flex align-items-center">
                        <ul className="social-icon-four">
                          <li>
                            <Link
                              to="#"
                              className="social-icon-space d-flex align-items-center justify-content-center"
                              target="_blank"
                            >
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="social-icon-space d-flex align-items-center justify-content-center"
                              target="_blank"
                            >
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="social-icon-space d-flex align-items-center justify-content-center"
                              target="_blank"
                            >
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="team-name">
                    <h4>
                      <Link to="/mentee/mentor-profile">James</Link>
                    </h4>
                    <span className="designation">Web Developer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="large-team">
                  <div className="student-img">
                    <ImageWithBasePath
                      src="assets/img/user/user-29.jpg"
                      alt=""
                    />
                    <div className="rating-student-four">
                      <div className="expert-student">
                        <ul className="student-view-four">
                          <li>
                            <i className="fas fa-users" />
                          </li>
                          <li>40 Students</li>
                        </ul>
                      </div>
                      <div className="expert-social-icon d-flex align-items-center">
                        <ul className="social-icon-four">
                          <li>
                            <Link
                              to="#"
                              className="social-icon-space d-flex align-items-center justify-content-center"
                              target="_blank"
                            >
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="social-icon-space d-flex align-items-center justify-content-center"
                              target="_blank"
                            >
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="social-icon-space d-flex align-items-center justify-content-center"
                              target="_blank"
                            >
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="team-name">
                    <h4>
                      <Link to="/mentee/mentor-profile">David Lee</Link>
                    </h4>
                    <span className="designation">Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="explore-more text-center aos " data-aos="fade-up">
            <Link to="/mentee/mentor-profile" className="btn bg-explore">
              Show All Categories
            </Link>
          </div>
        </div>
      </section>
      {/* /Top Rating Instructor four */}
      {/* Faq */}
      <section className="faq-five-sec">
        <div className="container">
          {/* Section Header */}
          <div
            className="section-header h-four text-center aos "
            data-aos="fade-up"
          >
            <span>Most Viewed</span>
            <h2>Frequently Asked Questions</h2>
            <p className="sub-title">
              Are you looking to join online institutions? Now it’s very simple,
              Sign up with mentoring
            </p>
          </div>
          {/* /Section Header */}
          <div className="row">
            <div className="col-lg-6">
              <div className="faq-box-eight" data-aos="fade-up">
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
              <div className="faq-box-eight" data-aos="fade-up">
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
              <div className="faq-box-eight border-0" data-aos="fade-up">
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
              <div className="faq-box-eight" data-aos="fade-up">
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
              <div className="faq-box-eight" data-aos="fade-up">
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
              <div className="faq-box-eight border-0" data-aos="fade-up">
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
              <Link to="#" className="btn bg-explore">
                View All
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* /Faq */}
      {/* Blog Section */}
      <section className="section section-blogs-five">
        <div className="container">
          {/* Section Header */}
          <div
            className="section-header h-four text-center aos "
            data-aos="fade-up"
          >
            <span>Latest</span>
            <h2>Blogs &amp; News</h2>
            <p className="sub-title">
              Are you looking to join online institutions? Now it’s very simple,
              Sign up with mentoring
            </p>
          </div>
          {/* /Section Header */}
          <div className="row blog-grid-row justify-content-center">
            <div className="col-md-6 col-lg-4 col-sm-12 aos" data-aos="fade-up">
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
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor.
                  </p>
                  <Link to="/blog/blog-details" className="read">
                    Read more
                  </Link>
                </div>
              </div>
              {/* /Blog Post */}
            </div>
            <div className="col-md-6 col-lg-4 col-sm-12 aos" data-aos="fade-up">
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
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor.
                  </p>
                  <Link to="/blog/blog-details" className="read">
                    Read more
                  </Link>
                </div>
              </div>
              {/* /Blog Post */}
            </div>
            <div className="col-md-6 col-lg-4 col-sm-12 aos" data-aos="fade-up">
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
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor.
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
            <Link to="/blog/blog-list" className="btn btn-primary bg-explore">
              View All
            </Link>
          </div>
        </div>
      </section>
      {/* /Blog Section */}
      <HomeEightfooter />
      <ProgressButton />
    </>
  );
};

export default HomeEight;

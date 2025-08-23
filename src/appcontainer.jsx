/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import config from "config";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import LoginContainer from "./client/components/login/login.jsx";
import Register from "./client/components/register/register.jsx";
import Verification from "./client/components/register/verification.jsx";
import ForgotPassword from "./client/components/forgot-password";
//blog
import BlogList from "./client/components/blog/bloglist";
import BlogGrid from "./client/components/blog/bloggrid";
import BlogDetails from "./client/components/blog/blogdetails";
//pages
import VideoCall from "./client/components/pages/videocall";
import VoiceCall from "./client/components/pages/voicecall";
import SearchMentor from "./client/components/pages/SearchMentor/search-doctor1";
import Components from "./client/components/pages/component";
import Invoice from "./client/components/pages/invoices/invoices";
import InvoiceView from "./client/components/pages/invoices/view";
import MentorGrid from "./client/components/mentee/mentorgrid/index.jsx";
import MentorList from "./client/components/mentee/mentorlist/index.jsx";
import MentorProfile from "./client/components/mentee/mentorprofile/index.jsx";
import DoctorChat from "./client/components/mentor/chat";
import PatientChat from "./client/components/mentee/chat";
import MenteeList from "./client/components/mentor/mentee-list/index.jsx";
import Booking from "./client/components/mentee/booking/booking1";
import Booking2 from "./client/components/mentee/booking/booking2";

import Checkout from "./client/components/mentee/checkout";
import BookingSuccess from "./client/components/mentee/booking-success";
import Dashboard from "./client/components/mentee/dashboard";
import PatientDependent from "./client/components/mentee/dependent";
import PatientAccounts from "./client/components/mentee/accounts";
import Orders from "./client/components/mentee/orders";
import Favourties from "./client/components/mentee/dashboard/favourties";
import Profile from "./client/components/mentee/dashboard/profile";
import Password from "./client/components/mentee/dashboard/password";
import MentorDashboard from "./client/components/mentor/dashboard";
import SocialMedia from "./client/components/mentor/socialmedia";
import ScheduleTiming from "./client/components/mentor/scheduletimings";
import DoctorPassword from "./client/components/mentor/password";
import Appointments from "./client/components/mentor/appointments";
import AppointmentsMentee from "./client/components/mentee/appointments";
import MenteeProfile from "./client/components/mentor/mentee-profile/index.jsx";
import AddBilling from "./client/components/mentor/addbilling";
import ProfileSetting from "./client/components/mentor/profilesetting";
import Review from "./client/components/mentor/reviews";
import DoctorRegister from "./client/components/mentor/register";
import MenteeRegister from "./client/components/mentor/mentee-register";
import Registerstepone from "./client/components/mentor/register/registerstepone";
import Registersteptwo from "./client/components/mentor/register/registersteptwo";
import Registerstepthree from "./client/components/mentor/register/registerstepthree";


import AppUniversal from "./admin/app-universal";
import BlankPage from "./client/components/pages/starter page/index.jsx";

import Mentorblog from "./client/components/blog/mentorblog/mentorblog.jsx";
import Mentoraddblog from "./client/components/blog/mentorblog/mentoraddblog.jsx";
import Mentorpendingblog from "./client/components/blog/mentorblog/mentorpendingblog.jsx";
import Mentoreditblog from "./client/components/blog/mentorblog/mentoreditblog.jsx";
import EditBilling from "./client/components/mentor/editbilling/index";
import AvailableTiming from "./client/components/mentor/availabletiming/index.jsx";
import Accounts from "./client/components/mentor/account/index.jsx";
import SearchMentor2 from "./client/components/pages/SearchMentor/search-doctor2.jsx";
import HomeOne from "./client/components/home/home-one";
import HomeTwo from "./client/components/home/home-two";
import HomeThree from "./client/components/home/home-three";
import HomeFour from "./client/components/home/home-four";
import HomeFive from "./client/components/home/home-five";
import HomeSix from "./client/components/home/home-six";
import HomeSeven from "./client/components/home/home-seven";
import HomeEight from "./client/components/home/home-eight";


// import MentorProfile from "./client/components/mentee/mentorprofile";


const AppContainer = function (props) {
  // const config = "/react/template/";
  if (props) {
    const url = props.location.pathname.split("/")[1];

    useEffect(() => {
      const handleMouseMove = (event) => {
        const cursorInner = document.querySelector(".cursor-inner");
        const cursorOuter = document.querySelector(".cursor-outer");

        if (cursorOuter) {
          cursorOuter.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
        }

        if (cursorInner) {
          cursorInner.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
        }
      };

      const handleMouseEnter = () => {
        const cursorInner = document.querySelector(".cursor-inner");
        const cursorOuter = document.querySelector(".cursor-outer");

        if (cursorInner) {
          cursorInner.classList.add("s");
        }

        if (cursorOuter) {
          cursorOuter.classList.add("s");
        }
      };

      const handleMouseLeave = (event) => {
        const cursorInner = document.querySelector(".cursor-inner");
        const cursorOuter = document.querySelector(".cursor-outer");

        if (
          event.target.tagName !== "A" ||
          !event.target.closest(".cursor-pointer")
        ) {
          if (cursorInner) {
            cursorInner.classList.remove("cursor-hover");
          }

          if (cursorOuter) {
            cursorOuter.classList.remove("cursor-hover");
          }
        }
      };

      document.body.addEventListener("mousemove", handleMouseMove);
      document.body.addEventListener("mouseenter", handleMouseEnter);
      document.body.addEventListener("mouseleave", handleMouseLeave);

      const cursorInner = document.querySelector(".cursor-inner");
      const cursorOuter = document.querySelector(".cursor-outer");

      if (cursorInner) {
        cursorInner.style.visibility = "visible";
      }

      if (cursorOuter) {
        cursorOuter.style.visibility = "visible";
      }

      return () => {
        document.body.removeEventListener("mousemove", handleMouseMove);
        document.body.removeEventListener("mouseenter", handleMouseEnter);
        document.body.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, []);

    return (
      <Router basename={`${config.publicPath}`}>
        {" "}
        {url === "admin" ? (
          <div>
            <Switch>
              <Route path="/admin" component={AppUniversal} />
            </Switch>
          </div>
        ) : url === "pharmacyadmin" ? (
          <div>
            {/* <Switch>
              <Route path="/pharmacyadmin" component={PharmacyadminApp} />
            </Switch> */}
          </div>
        ) : (
          <div>
            <Switch>
              <Route path="/mentee/map-grid" exact component={MentorGrid} />
              <Route path="/mentee/map-list" exact component={MentorList} />
              <Route path="/pages/video-call" exact component={VideoCall} />
              <Route path="/pages/voice-call" exact component={VoiceCall} />
              <Route path="/mentor/chat-mentor" exact component={DoctorChat} />

              <Route path="/login" exact component={LoginContainer} />
              <Route path="/register" exact component={Register} />
              <Route path="/verify-email" exact component={Verification} />
              <Route
                path="/pages/forgot-password"
                exact
                component={ForgotPassword}
              />


              {/* home */}
              <Route path="/" exact component={HomeFive} />

              {/* <Route path="/index-1" exact component={HomeOne} />
              <Route path="/index" exact component={Generalhome} />
              <Route path="/homeslider1" exact component={HomeSlider1} />
              <Route path="/index-2" exact component={Home2} />
              <Route path="/index-3" exact component={Home3} />
              <Route path="/homeslider2" exact component={HomeSlider2} />
              <Route path="/index-5" exact component={Cardiohome} />
              <Route path="/index-8" exact component={Paediatrichome} />
              <Route path="/index-6" exact component={Home6} />
              <Route path="/index-7" exact component={Home7} />
              <Route path="/index-4" exact component={Home4} />
              <Route path="/index-9" exact component={Home9} />
              <Route path="/index-10" exact component={Home10} />
              <Route path="/home11" exact component={Home11} />
              <Route path="/index-11" exact component={CosmeticsHome} />
              <Route path="/index-12" exact component={HomeTwelve} />
              <Route path="/home12" exact component={Home12} />
              <Route path="/home13" exact component={Home13} />
              <Route path="/home14" exact component={Home14} /> */}

              {/* blog */}
              <Route path="/blog/blog-list" exact component={BlogList} />
              <Route path="/blog/blog-grid" exact component={BlogGrid} />
              <Route path="/blog/blog-details" exact component={BlogDetails} />
              <Route path="/mentor-blog" exact component={Mentorblog} />
              <Route
                path="/blog/add-blog"
                exact
                component={Mentoraddblog}
              />
              <Route
                path="/blog/doctor-pending-blog"
                exact
                component={Mentorpendingblog}
              />
              <Route
                path="/blog/edit-blog"
                exact
                component={Mentoreditblog}
              />
              {/* pages */}

              <Route
                path="/mentee/search-mentor"
                exact
                component={SearchMentor}
              />
              <Route
                path="/mentee/search-doctor2"
                exact
                component={SearchMentor2}
              />
              <Route path="/pages/component" exact component={Components} />
              <Route path="/pages/blank-page" exact component={BlankPage} />
              <Route path="/pages/invoice" exact component={Invoice} />
              <Route path="/mentor/invoice" exact component={Invoice} />
              <Route path="/pages/invoice-view" exact component={InvoiceView} />




              <Route
                path="/mentee/mentor-profile"
                exact
                component={MentorProfile}
              />
              <Route
                path="/mentee/mentor-profile/:id"
                exact
                component={MentorProfile}
              />





              <Route path="/mentor/mentee-list" exact component={MenteeList} />
              <Route path="/mentee/booking1" exact component={Booking} />
              <Route path="/mentee/booking2" exact component={Booking2} />
              <Route
                path="/mentee/mentee-chat"
                exact
                component={PatientChat}
              />
              <Route path="/mentee/checkout" exact component={Checkout} />
              <Route
                path="/mentee/booking-success"
                exact
                component={BookingSuccess}
              />
              <Route path="/mentee/dashboard" exact component={Dashboard} />
              <Route
                path="/mentee/dependent"
                exact
                component={PatientDependent}
              />
              <Route
                path="/mentee/accounts"
                exact
                component={PatientAccounts}
              />
              <Route path="/mentee/orders" exact component={Orders} />

              <Route path="/mentee/favourites" exact component={Favourties} />
              <Route path="/mentee/profile" exact component={Profile} />
              <Route
                path="/mentee/change-password"
                exact
                component={Password}
              />
              <Route
                path="/mentor/mentor-dashboard"
                exact
                component={MentorDashboard}
              />
              <Route
                path="/mentor/social-media"
                exact
                component={SocialMedia}
              />
              <Route
                path="/mentor/schedule-timing"
                exact
                component={ScheduleTiming}
              />
              <Route
                path="/mentor/available-timing"
                exact
                component={AvailableTiming}
              />
              <Route path="/mentor/account" exact component={Accounts} />
              <Route
                path="/mentor/doctor-change-password"
                exact
                component={DoctorPassword}
              />
              <Route
                path="/mentor/bookings"
                exact
                component={Appointments}
              />
              <Route
                path="/univ/universities"
                exact
                component={AppointmentsMentee}
              />
              <Route
                path="/mentor/mentee-profile"
                exact
                component={MenteeProfile}
              />
              <Route path="/add-billing" exact component={AddBilling} />
              <Route
                path="/mentor/profile-setting"
                exact
                component={ProfileSetting}
              />
              <Route path="/mentor/review" exact component={Review} />
              <Route
                path="/mentor/mentor-register"
                exact
                component={DoctorRegister}
              />
              <Route
                path="/mentor/mentee-register"
                exact
                component={MenteeRegister}
              />
              <Route
                path="/registerstepone"
                exact
                component={Registerstepone}
              />
              <Route
                path="/register-step-2"
                exact
                component={Registersteptwo}
              />
              <Route
                path="/register-step- 3"
                exact
                component={Registerstepthree}
              />
              <Route path="/editbilling" exact component={EditBilling} />

              <Route path="/index" exact component={HomeOne} />
              <Route path="/index-2" exact component={HomeTwo} />
              <Route path="/index-3" exact component={HomeThree} />
              <Route path="/index-4" exact component={HomeFour} />
              <Route path="/index-5" exact component={HomeFive} />
              <Route path="/index-6" exact component={HomeSix} />
              <Route path="/index-7" exact component={HomeSeven} />
              <Route path="/index-8" exact component={HomeEight} />

            </Switch>
          </div>
        )}
      </Router>
    );
  }
  return null;
};

export default AppContainer;

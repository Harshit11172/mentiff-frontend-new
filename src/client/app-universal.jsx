/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";

import { Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";

import LoginContainer from "./components/login/login.jsx";
import Register from "./components/register/register.jsx";

import Verification from "./components/register/verification.jsx";

import ForgotPassword from "./components/forgot-password";
import Home from "./components/home";
//blog
import BlogList from "./components/blog/bloglist";
import BlogGrid from "./components/blog/bloggrid";
import BlogDetails from "./components/blog/blogdetails";
//pages
import Components from "./components/pages/component";
import BlankPage from "./components/pages/blankpage";
import VideoCall from "./components/pages/videocall";
import VoiceCall from "./components/pages/voicecall";
import SearchMentor from "./components/pages/SearchMentor";
import Calendar from "./components/pages/calender";
import Invoice from "./components/pages/invoices/invoices";
import InvoiceView from "./components/pages/invoices/view";
import DoctorGrid from "./components/mentee/doctorgrid";
import DoctorList from "./components/mentee/doctorlist";
import DoctorProfile from "./components/mentee/doctorprofile";
import DoctorChat from "./components/doctors/chat";
import PatientChat from "./components/mentee/chat";
import MyPatient from "./components/doctors/mypatient";
import Booking from "./components/mentee/booking";
import Checkout from "./components/mentee/checkout";
import BookingSuccess from "./components/mentee/booking-success";
import Dashboard from "./components/mentee/dashboard";
import Favourties from "./components/mentee/dashboard/favourties";
import Profile from "./components/mentee/dashboard/profile";
import Password from "./components/mentee/dashboard/password";
import DoctorDashboard from "./components/doctors/dashboard";
import SocialMedia from "./components/doctors/socialmedia";
import ScheduleTiming from "./components/doctors/scheduletimings";
import DoctorPassword from "./components/doctors/password";
import Appointments from "./components/doctors/appointments";
import PatientProfile from "./components/doctors/patientprofile";
import AddPescription from "./components/doctors/addpescription";
import AddBilling from "./components/doctors/addbilling";
import ProfileSetting from "./components/doctors/profilesetting";
import Review from "./components/doctors/reviews";
import DoctorRegister from "./components/doctors/register";
import Terms from "./components/pages/terms";
import Policy from "./components/pages/policy";
// admin
import SideMenu from "./components/admin/menu/menu";
import Dropzone from "./components/doctors/profilesetting/dropimage";
import Booking2 from "./components/mentee/booking/booking2.jsx";
import { base_path } from "../environment.js";
import RazorpayPayment from "./components/RazorpayPayment";


// import MentorProfile from "./components/mentee/mentorprofile";



const ClientAppUniversal = function (props) {
  return (
    <BrowserRouter basename={base_path}>
      
      {/* <div className="App">
        <RazorpayPayment />
      </div> */}
      

      <div>
        <Route path="/join" exact component={Dropzone} />
        <Route path="/sider-menu" exact component={SideMenu} />
        <Route render={(props) => <Header {...props} />} />
        <Switch>


          {/* <Route path="/mentee/mentor-profile/:id" exact component={MentorProfile} /> */}


          <Route path="/payment" exact component={RazorpayPayment} />

          <Route path="/mentee/map-grid" exact component={DoctorGrid} />
          <Route path="/mentee/map-list" exact component={DoctorList} />
          <Route path="/pages/video-call" exact component={VideoCall} />
          <Route path="/pages/component" exact component={Components} />
          <Route path="/pages/blank-page" exact component={BlankPage} />
          <Route path="/pages/voice-call" exact component={VoiceCall} />
          <Route path="/mentor/chat-mentor" exact component={DoctorChat} />

          <Route path="/login" exact component={LoginContainer} />
          <Route path="/register" exact component={Register} />

          <Route path="/verify-email" component={Verification} /> 

          <Route path="/forgot-password" exact component={ForgotPassword} />
          <Route path="/index-2" exact component={Home} />
          {/* blog */}
          <Route path="/blog/blog-list" exact component={BlogList} />
          <Route path="/blog/blog-grid" exact component={BlogGrid} />
          <Route path="/blog/blog-details" exact component={BlogDetails} />
          {/* pages */}
          {/* <Route path="/video-call" exact component={VideoCall} />
					<Route path="/voice-call" exact component={VoiceCall} /> */}
          <Route path="/mentee/search-doctor" exact component={SearchMentor} />
          <Route path="/pages/calendar" exact component={Calendar} />
          <Route path="/pages/invoice" exact component={Invoice} />
          <Route path="/mentor/invoice-view" exact component={InvoiceView} />

          <Route
            path="/mentee/mentor-profile"
            exact
            component={DoctorProfile}
          />
          <Route path="/mentor/mentee-list" exact component={MyPatient} />
          <Route path="/mentee/booking/booking1" exact component={Booking} />
          <Route path="/mentee/booking/booking2" exact component={Booking2} />

          <Route path="/mentee/mentee-chat" exact component={PatientChat} />
          <Route path="/mentee/checkout" exact component={Checkout} />
          <Route
            path="/mentee/booking-success"
            exact
            component={BookingSuccess}
          />
          <Route path="/mentee/dashboard" exact component={Dashboard} />
          <Route path="/mentee/favourites" exact component={Favourties} />
          <Route path="/mentee/profile" exact component={Profile} />
          <Route path="/mentee/change-password" exact component={Password} />
          <Route
            path="/mentor/mentor-dashboard"
            exact
            component={DoctorDashboard}
          />
          <Route path="/social-media" exact component={SocialMedia} />
          <Route
            path="/mentor/schedule-timing"
            exact
            component={ScheduleTiming}
          />
          <Route
            path="/doctor-change-passwword"
            exact
            component={DoctorPassword}
          />
          {/* <Route path="/chat-mentor" exact component={DoctorChat} /> */}
          <Route path="/mentor/bookings" exact component={Appointments} />
          <Route
            path="/mentor/mentee-profile"
            exact
            component={PatientProfile}
          />
          <Route path="/add-prescription" exact component={AddPescription} />
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
          <Route path="/terms" exact component={Terms} />
          <Route path="/privacy-policy" exact component={Policy} />
        </Switch>
        <Route render={(props) => <Footer {...props} />} />
      </div>
    </BrowserRouter>
  );
};

export default ClientAppUniversal;

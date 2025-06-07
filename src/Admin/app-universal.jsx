/* eslint-disable react/prop-types */
import React, { useState, useContext, useMemo } from "react";
import config from "config";

import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "./components/header/index";
import Dashboard from "./components/dashboard";
import Appointments from "./components/appointments";
import Specialities from "./components/specialities";
import Mentor from "./components/mentor";
import Mentee from "./components/mentee";
import Reviews from "./components/reviews";
import Transaction from "./components/transaction";
import Settings from "./components/settings";
import InvoiceReport from "./components/Reports/InvoiceReport/InvoiceReport";
// import PharmacyList from "./components/pharmacylist";
// import Categories from "./components/pharmacylist/Categories";
import Blog from "./components/Blog/blog";
import BlogDetails from "./components/Blog/blogdetails";
import AddBlog from "./components/Blog/addblog";
import EditBlog from "./components/Blog/editblog";
import PendingBlog from "./components/Blog/pendingblog";
import Profile from "./components/profile/Profile";
import Login from "./components/login";
import Register from "./components/register";
import ForgotPassword from "./components/forgotpassword";
import Lockscreen from "./components/lockscreen";
import Error from "./components/error404";
import ErrorPage from "./components/error500";
import BasicInput from "./components/forms/baiscinput";
import FormInput from "./components/forminput";
import FormHorizontal from "./components/formhorizontal";
import FormVertical from "./components/formvertical";
import FormMask from "./components/formask";
import FormValidation from "./components/formvalidation";
import BlankPage from "./components/blankpage";
import Components from "./components/component";
import DataTables from "./components/datatables";
import BasicTables from "./components/basictables";
import GendralSettings from "./components/settings/GendralSettings"
import OtherSettings from "./components/settings/OtherSettings"
import Seo from "./components/settings/Seo"
import SocialLinks from "./components/settings/SocialLinks"
import SocialSettings from "./components/settings/SocialSettings"
import EmailSettings from "./components/settings/EmailSettings"
import PaymentSettings from "./components/settings/PaymentSettings"
import Localization from "./components/settings/Localization"
import { Appcontext } from "../approuter";
import InvoiceReportList from "./components/Reports/InvoiceReport/InvoiceReportList";
import InvoiceGrid from "./components/Reports/invoice-grid";
import InvoicePaid from "./components/Reports/invoice-paid";
import BankSetting from "./components/Reports/banksetting";
import TaxSetting from "./components/Reports/taxsetting";
import InvoiceSettings from "./components/Reports/invoicesettings";
import ViewInvoice from "./components/Reports/viewinvoice";
import EditInvoice from "./components/Reports/editinvoice";
import AddInvoice from "./components/Reports/addinvoice";
import InvoiceOverdue from "./components/Reports/invoice-overdue";
import InvoiceRecurring from "./components/Reports/invoice-recurring";
import InvoiceDraft from "./components/Reports/invoice-draft";
import InvoiceCancelled from "./components/Reports/invoice-cancelled";

const AppUniversal = function (props) {
  const [menu, setMenu] = useState(false);
  const toggleMobileMenu = () => {
    setMenu(!menu);
  };
  const { isAuth, setIsAuth } = useContext(Appcontext);

  const location = props?.location;

  useMemo(() => {
    if (
      location?.pathname == "/admin/login" ||
      location?.pathname == "/admin/register" ||
      location?.pathname == "/admin/forgotPassword" ||
      location?.pathname == "/admin/lockscreen" ||
      location?.pathname == "/admin/conform-email" ||
      location?.pathname == "/admin/404" ||
      location?.pathname == "/admin/500"
    ) {
      setIsAuth("admin");
    } else {
      setIsAuth("user");
    }
  }, [location]);

  return (
    <BrowserRouter basename={`${config.publicPath}`}>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        {isAuth !== "admin" && (
          <Route
            render={(props) => (
              <Header {...props} onMenuClick={() => toggleMobileMenu()} />
            )}
          />
        )}
        <Switch>
          <Route path="/admin/login" exact component={Login} />
          <Route path="/admin/register" exact component={Register} />
          <Route
            path="/admin/forgotPassword"
            exact
            component={ForgotPassword}
          />
          <Route path="/admin/lockscreen" exact component={Lockscreen} />
          <Route path="/admin" exact component={Dashboard} />
          <Route
            path="/admin/booking-list"
            exact
            component={Appointments}
          />
          <Route path="/admin/specialities" exact component={Specialities} />
          <Route path="/admin/mentor-list" exact component={Mentor} />
          <Route path="/admin/mentee-list" exact component={Mentee} />
          <Route path="/admin/reviews" exact component={Reviews} />
          <Route
            path="/admin/transactions-list"
            exact
            component={Transaction}
          />
          <Route path="/admin/settings" exact component={Settings} />
          <Route path="/admin/generalsettings" component={GendralSettings} />
        <Route path="/admin/localization" component={Localization} />
        <Route path="/admin/paymentsettings" component={PaymentSettings} />
        <Route path="/admin/emailsettings" component={EmailSettings} />
        <Route path="/admin/socialsettings" component={SocialSettings} />
        <Route path="/admin/sociallinks" component={SocialLinks} />
        <Route path="/admin/seo" component={Seo} />
        <Route path="/admin/othersettings" component={OtherSettings} />
          <Route path="/admin/invoice-list" exact component={InvoiceReport} />
          <Route path="/admin/invoice" exact component={InvoiceReportList} />
          <Route path="/admin/blogs" exact component={Blog} />
          <Route path="/admin/blog-details" exact component={BlogDetails} />
          <Route path="/admin/add-blog" exact component={AddBlog} />
          <Route path="/admin/edit-blog" exact component={EditBlog} />
          <Route path="/admin/pending-blog" exact component={PendingBlog} />
          <Route path="/admin/profile" exact component={Profile} />
          

          <Route path="/admin/404" exact component={Error} />
          <Route path="/admin/500" exact component={ErrorPage} />
          <Route path="/admin/blank-page" exact component={BlankPage} />
          <Route path="/admin/components" exact component={Components} />
          <Route path="/admin/basic-input" exact component={BasicInput} />
          <Route path="/admin/form-input-group" exact component={FormInput} />
          <Route
            path="/admin/form-horizontal"
            exact
            component={FormHorizontal}
          />
          <Route path="/admin/form-vertical" exact component={FormVertical} />
          <Route path="/admin/form-mask" exact component={FormMask} />
          <Route
            path="/admin/form-validation"
            exact
            component={FormValidation}
          />
          <Route path="/admin/tables-basic" exact component={BasicTables} />
          <Route path="/admin/data-tables" exact component={DataTables} />
         
          <Route path="/admin/invoice-grid" exact component={InvoiceGrid} />
          <Route path="/admin/invoices-paid" exact component={InvoicePaid} />
          <Route path="/admin/invoices-overdue" exact component={InvoiceOverdue} />
          <Route path="/admin/invoices-recurring" exact component={InvoiceRecurring} />
          <Route path="/admin/invoices-draft" exact component={InvoiceDraft} />
          <Route path="/admin/invoices-cancelled" exact component={InvoiceCancelled} />
          <Route path="/admin/add-invoice" exact component={AddInvoice} />
        <Route path="/admin/edit-invoice" exact component={EditInvoice} />
        <Route path="/admin/view-invoice" exact component={ViewInvoice} />
        <Route path="/admin/invoices-settings" exact component={InvoiceSettings} />
        <Route path="/admin/tax-setting" exact component={TaxSetting} />
        <Route path="/admin/bank-setting" exact component={BankSetting} />

        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppUniversal;

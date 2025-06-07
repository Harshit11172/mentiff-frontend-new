import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
// import FeatherIcon from "feather-icons-react";
import { Appcontext } from "../../../approuter";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const SidebarNav = () => {
  // let pathname = props?.location?.pathname;

  const location = useLocation();
  const pathname = location.pathname;

  const { setIsAuth } = useContext(Appcontext);
  const [isSideMenu, setSideMenu] = useState("");
  const [isSideMenuNew, setSideMenuNew] = useState("");
  const [isSideMenuNew2, setSideMenuNew2] = useState("");

  const toggleSidebar = (value) => {
    setSideMenu(value);
  };

  const toggleSidebarNew = (value) => {
    setSideMenuNew(value);
  };

  const toggleSidebarNew2 = (value) => {
    setSideMenuNew2(value);
  };

  // eslint-disable-next-line no-unused-vars
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  const [isMouseOverSidebar, setMouseOverSidebar] = useState(false);

  useEffect(() => {
    if (
      isMouseOverSidebar &&
      document.body.classList.contains("mini-sidebar")
    ) {
      document.body.classList.add("expand-menu");
      return;
    }
    document.body.classList.remove("expand-menu");
  }, [isMouseOverSidebar]);

  const handleMouseEnter = () => {
    setMouseOverSidebar(true);
  };

  const handleMouseLeave = () => {
    setMouseOverSidebar(false);
  };

  return (
    <>
      {/* <!-- Sidebar --> */}
      <div
        className={`sidebar ${isSidebarExpanded ? "" : "hidden"}`}
        id="sidebar"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          autoHeight
          autoHeightMin={0}
          autoHeightMax="95vh"
          thumbMinSize={30}
          universal={false}
          hideTracksWhenNotNeeded={true}
        >
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              <ul>
                <li className="menu-title">
                  <span>
                    <i className="fe fe-home"></i> MAIN
                  </span>
                </li>
                <li className={pathname === "/admin" ? "active" : ""}>
                  <Link to="/admin">
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li
                  className={pathname?.includes("mentor-list") ? "active" : ""}
                >
                  <Link to="/admin/mentor-list">
                    <span>Mentor</span>
                  </Link>
                </li>
                <li
                  className={pathname?.includes("mentee-list") ? "active" : ""}
                >
                  <Link to="/admin/mentee-list">
                    <span>Mentee</span>
                  </Link>
                </li>
                <li
                  className={
                    pathname?.includes("/admin/booking-list") ? "active" : ""
                  }
                >
                  <Link to="/admin/booking-list">
                    <span>Booking List</span>
                  </Link>
                </li>
                <li
                  className={pathname?.includes("specialities") ? "active" : ""}
                >
                  <Link to="/admin/specialities">
                    <span>Categories</span>
                  </Link>
                </li>
                <li
                  className={
                    pathname?.includes("transactions-list") ? "active" : ""
                  }
                >
                  <Link to="/admin/transactions-list">
                    <span>Transactions</span>
                  </Link>
                </li>
                <li
                  className={
                    pathname?.includes("settings") ||
                    pathname?.includes("localization") ||
                    pathname?.includes("sociallinks") ||
                    pathname?.includes("seo") 
                      ? "active"
                      : ""
                  }
                >
                  <Link to="/admin/generalsettings">
                    <span> Settings</span>
                  </Link>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={isSideMenu == "reports" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu == "reports" ? "" : "reports")
                    }
                  >
                    <span> Reports</span> <span className="menu-arrow"></span>
                  </Link>
                  {isSideMenu == "reports" ? (
                    <ul
                      style={{
                        display: isSideMenu == "reports" ? "block" : "none",
                      }}
                    >
                      <li>
                        <Link
                          to="/admin/invoice-list"
                          className={
                            pathname?.includes("invoice-list") ? "active" : ""
                          }
                        >
                          Invoices List
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/admin/invoice-grid"
                          className={
                            pathname?.includes("invoice-grid") ? "active" : ""
                          }
                        >
                          Invoices Grid
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/admin/add-invoice"
                          className={
                            pathname?.includes("add-invoice") ? "active" : ""
                          }
                        >
                          Add Invoices
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/admin/edit-invoice"
                          className={
                            pathname?.includes("edit-invoice") ? "active" : ""
                          }
                        >
                          Edit Invoices
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/admin/view-invoice"
                          className={
                            pathname?.includes("view-invoice") ? "active" : ""
                          }
                        >
                          Invoices Details
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/admin/invoices-settings"
                          className={
                            pathname?.includes("invoices-settings") ||
                            pathname?.includes("bank-setting") ||
                            pathname?.includes("tax-setting")
                              ? "active"
                              : ""
                          }
                        >
                          Invoices Settings
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li className="menu-title">
                  <span>
                    <i className="fe fe-document"></i>PAGES
                  </span>
                </li>
                <li className={pathname?.includes("profile") ? "active" : ""}>
                  <Link to="/admin/profile">
                    <span>My Profile</span>
                  </Link>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={isSideMenu == "authentication" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu == "authentication" ? "" : "authentication"
                      )
                    }
                  >
                    {" "}
                    <span> Authentication </span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul
                    style={{
                      display:
                        isSideMenu == "authentication" ? "block" : "none",
                    }}
                  >
                    <li>
                      <Link
                        to="/admin/login"
                        className={pathname?.includes("login") ? "active" : ""}
                        onClick={() => setIsAuth("admin")}
                      >
                        {" "}
                        Login{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/register"
                        className={
                          pathname?.includes("register") ? "active" : ""
                        }
                        onClick={() => setIsAuth("admin")}
                      >
                        {" "}
                        Register{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/forgotpassword"
                        className={
                          pathname?.includes("forgotpassword") ? "active" : ""
                        }
                        onClick={() => setIsAuth("admin")}
                      >
                        {" "}
                        Forgot Password{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/lockscreen"
                        className={
                          pathname?.includes("lockscreen") ? "active" : ""
                        }
                        onClick={() => setIsAuth("admin")}
                      >
                        {" "}
                        Lock Screen{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={isSideMenu == "errorpages" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu == "errorpages" ? "" : "errorpages"
                      )
                    }
                  >
                    <span> Error Pages </span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul
                    style={{
                      display: isSideMenu == "errorpages" ? "block" : "none",
                    }}
                  >
                    <li>
                      <Link
                        to="/admin/404"
                        className={pathname?.includes("404") ? "active" : ""}
                        onClick={() => setIsAuth("admin")}
                      >
                        404 Error{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/500"
                        className={pathname?.includes("500") ? "active" : ""}
                        onClick={() => setIsAuth("admin")}
                      >
                        500 Error{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={isSideMenu == "blog" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu == "blog" ? "" : "blog")
                    }
                  >
                    <span> Blog </span> <span className="menu-arrow"></span>
                  </Link>
                  <ul
                    style={{
                      display: isSideMenu == "blog" ? "block" : "none",
                    }}
                  >
                    <li>
                      <Link
                        to="/admin/blogs"
                        className={pathname?.includes("blogs") ? "active" : ""}
                      >
                        Blog{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/blog-details"
                        className={
                          pathname?.includes("blog-details") ? "active" : ""
                        }
                      >
                        Blog Details{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/add-blog"
                        className={
                          pathname?.includes("add-blog") ? "active" : ""
                        }
                      >
                        Add Blog{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/edit-blog"
                        className={
                          pathname?.includes("edit-blog") ? "active" : ""
                        }
                      >
                        Edit Blog{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={pathname?.includes("blank-page") ? "active" : ""}
                >
                  <Link to="/admin/blank-page">
                    <span>Blank Page</span>
                  </Link>
                </li>
                <li className="menu-title">
                  <span>
                    <i className="fe fe-star-o"></i> UI INTERFACE
                  </span>
                </li>
                <li
                  className={pathname?.includes("components") ? "active" : ""}
                >
                  <Link to="/admin/components">
                    <span>Components</span>
                  </Link>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={isSideMenu == "forms" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu == "forms" ? "" : "forms")
                    }
                  >
                    <span> Forms </span> <span className="menu-arrow"></span>
                  </Link>
                  <ul
                    style={{
                      display: isSideMenu == "forms" ? "block" : "none",
                    }}
                  >
                    <li>
                      <Link
                        to="/admin/basic-input"
                        className={
                          pathname?.includes("basic-input") ? "active" : ""
                        }
                      >
                        Basic Inputs{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/form-input-group"
                        className={
                          pathname?.includes("form-input-group") ? "active" : ""
                        }
                      >
                        Input Groups{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/form-horizontal"
                        className={
                          pathname?.includes("form-horizontal") ? "active" : ""
                        }
                      >
                        Horizontal Form{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/form-vertical"
                        className={
                          pathname?.includes("form-vertical") ? "active" : ""
                        }
                      >
                        {" "}
                        Vertical Form{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/form-mask"
                        className={
                          pathname?.includes("form-mask") ? "active" : ""
                        }
                      >
                        Form Mask{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/form-validation"
                        className={
                          pathname?.includes("form-validation") ? "active" : ""
                        }
                      >
                        Form Validation{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={isSideMenu == "tables" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu == "tables" ? "" : "tables")
                    }
                  >
                    <span> Tables </span> <span className="menu-arrow"></span>
                  </Link>
                  <ul
                    style={{
                      display: isSideMenu == "tables" ? "block" : "none",
                    }}
                  >
                    <li>
                      <Link
                        to="/admin/tables-basic"
                        className={
                          pathname?.includes("tables-basic") ? "active" : ""
                        }
                      >
                        Basic Tables{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/data-tables"
                        className={
                          pathname?.includes("data-tables") ? "active" : ""
                        }
                      >
                        Data Table{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={isSideMenu == "multilevel" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu == "multilevel" ? "" : "multilevel"
                      )
                    }
                  >
                    <span>Multi Level</span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul
                    style={{
                      display: isSideMenu == "multilevel" ? "block" : "none",
                    }}
                  >
                    <li className="submenu">
                      <Link
                        to="#"
                        className={isSideMenuNew == "levelone" ? "subdrop" : ""}
                        onClick={() =>
                          toggleSidebarNew(
                            isSideMenuNew == "levelone" ? "" : "levelone"
                          )
                        }
                      >
                        {" "}
                        <span>Level 1</span>{" "}
                        <span className="menu-arrow"></span>
                      </Link>
                      <ul
                        style={{
                          display:
                            isSideMenuNew == "levelone" ? "block" : "none",
                        }}
                      >
                        <li>
                          <Link to="#">
                            <span>Level 2</span>
                          </Link>
                        </li>
                        <li className="submenu">
                          <Link
                            to="#"
                            className={
                              isSideMenuNew2 == "leveltwo" ? "subdrop" : ""
                            }
                            onClick={() =>
                              toggleSidebarNew2(
                                isSideMenuNew2 == "leveltwo" ? "" : "leveltwo"
                              )
                            }
                          >
                            {" "}
                            <span> Level 2</span>{" "}
                            <span className="menu-arrow"></span>
                          </Link>
                          <ul
                            style={{
                              display:
                                isSideMenuNew2 == "leveltwo" ? "block" : "none",
                            }}
                          >
                            <li>
                              <Link to="#">Level 3</Link>
                            </li>
                            <li>
                              <Link to="#">Level 3</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#">
                            {" "}
                            <span>Level 2</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#">
                        {" "}
                        <span>Level 1</span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </Scrollbars>
      </div>
      {/* <!-- /Sidebar --> */}
    </>
  );
};

export default SidebarNav;

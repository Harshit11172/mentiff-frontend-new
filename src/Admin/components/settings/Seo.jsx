import React from 'react'
import { Link } from 'react-router-dom';
import ReactTagsInput from '../ReactTagsInput';
import SidebarNav from '../sidebar';

const Seo = () => {
  return (
    <div>
        <>
        <div >
                    {/* Header */}
                    <SidebarNav />
                    {/* Page Wrapper */}

                    <div className="page-wrapper">
  <div className="content container-fluid">
    <div className="page-header">
      <div className="row">
        <div className="col">
          <h3 className="page-title">Settings</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/admin/generalsettings">Settings</Link>
            </li>
            <li className="breadcrumb-item active">SEO Settings</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        {/* Settings Menu */}
        <div className="settings-menu-links">
          <ul className="nav nav-tabs menu-tabs">
            <li className="nav-item">
              <Link className="nav-link" to="/admin/generalsettings">
                General Settings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/localization">
                Localization
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/paymentsettings">
                Payment Settings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/emailsettings">
                Email Settings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/socialsettings">
                Social Media Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/sociallinks">
                Social Links
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/admin/seo">
                SEO Settings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/othersettings">
                Others
              </Link>
            </li>
          </ul>
        </div>
        {/* Settings Menu */}
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">SEO Settings</h5>
              </div>
              <div className="card-body pt-0">
                <form>
                  <div className="settings-form">
                    <div className="form-group form-placeholder">
                      <label>
                        Meta Title <span className="star-red">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>
                        Meta Keywords <span className="star-red">*</span>
                      </label>
                      {/* <input
                        type="text"
                        data-role="tagsinput"
                        className="input-tags form-control"
                        placeholder="Meta Keywords"
                        name="services"
                        defaultValue="Lorem,Ipsum"
                        id="services"
                      /> */}
                      <ReactTagsInput />
                    </div>
                    <div className="form-group">
                      <label>
                        Meta Description <span className="star-red">*</span>
                      </label>
                      <textarea className="form-control" defaultValue={""} />
                    </div>
                    <div className="form-group mb-0">
                      <div className="settings-btns">
                        <button type="submit" className="btn btn-orange">
                          Submit
                        </button>
                        <button type="submit" className="btn btn-grey">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* /Page Wrapper */}
</div>
{/* /Main Wrapper */}

</>
</div>
  )
}

export default Seo;

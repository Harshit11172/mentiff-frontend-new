import React from 'react'
import { Link } from 'react-router-dom';
import SidebarNav from '../sidebar';

const PaymentSettings = () => {
  return (
    <div>
         <>
                <div>
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
            <li className="breadcrumb-item active">Payment Settings</li>
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
            <li className="nav-item active">
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
            <li className="nav-item">
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
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="card-title">Paypal</h5>
                <div className="status-toggle d-flex justify-content-between align-items-center">
                  <input type="checkbox" id="status_1" className="check" />
                  <label htmlFor="status_1" className="checktoggle">
                    checkbox
                  </label>
                </div>
              </div>
              <div className="card-body pt-0">
                <form>
                  <div className="settings-form">
                    <div className="form-group">
                      <p className="pay-cont">Paypal Option</p>
                      <label className="custom_radio me-4">
                        <input
                          type="radio"
                          name="budget"
                          defaultValue="Yes"
                          defaultChecked="yes"
                        />
                        <span className="checkmark" 
                       /> Sandbox
                      </label>
                      <label className="custom_radio">
                        <input type="radio" name="budget" defaultValue="Yes" />
                        <span className="checkmark" /> Live
                      </label>
                    </div>
                    <div className="form-group form-placeholder">
                      <label>
                        Braintree Tokenization key{" "}
                        <span className="star-red">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="sandbox_pgjcppvs_pd6gznv7zbrx9hb8"
                      />
                    </div>
                    <div className="form-group form-placeholder">
                      <label>
                        Braintree Merchant ID{" "}
                        <span className="star-red">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="pd6gznv7zbrx9hb8"
                      />
                    </div>
                    <div className="form-group form-placeholder">
                      <label>
                        Braintree Public key <span className="star-red">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="h8bydrz7gcjkp7d4"
                      />
                    </div>
                    <div className="form-group form-placeholder">
                      <label>
                        Braintree Private key{" "}
                        <span className="star-red">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="sandbox_pgjcppvs_pd6gznv7zbrx9hb8"
                      />
                    </div>
                    <div className="form-group form-placeholder">
                      <label>
                        Paypal APP ID <span className="star-red">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="pd6gznv7zbrx9hb8"
                      />
                    </div>
                    <div className="form-group form-placeholder">
                      <label>
                        Paypal Secret Key <span className="star-red">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="h8bydrz7gcjkp7d4"
                      />
                    </div>
                    <div className="form-group mb-0">
                      <div className="settings-btns">
                        <button type="submit" className="btn btn-orange">
                          Save
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
          <div className="col-md-6">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="card-title">Stripe</h5>
                <div className="status-toggle d-flex justify-content-between align-items-center">
                  <input
                    type="checkbox"
                    id="status_2"
                    className="check"
                    defaultChecked=""
                  />
                  <label htmlFor="status_2" className="checktoggle">
                    checkbox
                  </label>
                </div>
              </div>
              <div className="card-body pt-0">
                <form>
                  <div className="settings-form">
                    <div className="form-group">
                      <p className="pay-cont">Stripe Option</p>
                      <label className="custom_radio me-4">
                        <input
                          type="radio"
                          name="budget"
                          defaultValue="Yes"
                          defaultChecked="true"
                        />
                        <span className="checkmark" /> Sandbox
                      </label>
                      <label className="custom_radio">
                        <input type="radio" name="budget" defaultValue="Yes" />
                        <span className="checkmark" /> Live
                      </label>
                    </div>
                    <div className="form-group form-placeholder">
                      <label>
                        Gateway Name <span className="star-red">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Stripe"
                      />
                    </div>
                    <div className="form-group form-placeholder">
                      <label>
                        API Key <span className="star-red">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="pk_test_AealxxOygZz84AruCGadWvUV00mJQZdLvr"
                      />
                    </div>
                    <div className="form-group form-placeholder">
                      <label>
                        Rest Key <span className="star-red">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="sk_test_8HwqAWwBd4C4E77bgAO1jUgk00hDlERgn3"
                      />
                    </div>
                    <div className="form-group mb-0">
                      <div className="settings-btns">
                        <button type="submit" className="btn btn-orange">
                          Save
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

                </div>
                {/* /Main Wrapper */}
                
            </>
      
    </div>
  )
}

export default PaymentSettings;

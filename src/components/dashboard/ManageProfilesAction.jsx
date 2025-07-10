import React, { useState } from "react";
import classNames from "classnames";
import { AddAddressLine, PhoneNumberInput, StateSelect } from "../input/InputFields";
import Modal from "../common/PopupModal";
import DatePicker from "../input/DatePicker";

const tabs = [
  { key: "personalInformation", label: "Personal Information" },
  { key: "login", label: "Login" },
  { key: "addAddress", label: "Add address book" },
  { key: "paymentMethod", label: "Payment Method" },
  { key: "payoutMethod", label: "Payout Method" },
  { key: "taxes", label: "Taxes" },
  { key: "taxStatement", label: "Tax Statements" },
  { key: "messageAlerts", label: "Messages & Alerts" },
  { key: "exit", label: "Exit" },
];

const ManageProfilesActions = () => {
  const [activeTab, setActiveTab] = useState("personalInformation");

  // const [switchStates, setSwitchStates] = useState({
  //   showEmail: false,
  //   showPhone: true,
  //   showFacebook: false,
  //   showInstagram: false,
  //   showTwitter: true,
  //   showEnrollment: true,
  // });

  // const handleSwitchChange = (key) => {
  //   setSwitchStates((prev) => ({
  //     ...prev,
  //     [key]: !prev[key],
  //   }));
  // };

  const renderContent = () => {
    switch (activeTab) {
      case "personalInformation":
        return (
          <div class="personal-info setting-desc-itm">
            <div class="head-tt">Personal Information</div>
            <div class="input-section mt-3">
              <div>
                <div class="input-wrapper d-flex">
                  <div class="lb-in">
                    <label for="">Name*</label>
                    <div class="inp">
                      <input type="text" placeholder="Soku*" required="" />
                      <div class="edit-tool">
                        <i class="ri-pencil-fill"></i>
                        <span>Cannot be changed</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="input-gender mt-3">
                  <div class="lb-in">
                    <label for="">Gender</label><br />
                    <select name="" id="">
                      <option value="">Select</option>
                      <option value="">Male</option>
                      <option value="">Female</option>
                      <option value="">Other</option>
                    </select>
                  </div>
                  <div class="lb-in">
                    <label for="birth-date">Birth Date</label><br />
                    <div class="date-im d-flex gap-2">
                      <DatePicker CalendarIcon={true} arrowIcon={true} />
                    </div>
                  </div>
                </div>

                <div class="btn-sec mt-4 text-end">
                  <button class="tsp-btn">Cancel</button>
                  <button class="black-btn black-btn-sm">Save</button>
                </div>

                <div>
                  <div class="input-wrapper">
                    <div class="lb-in">
                      <label for="">Email*</label>
                      <div class="inp">
                        <input type="email" placeholder="someone@gmail.com" />
                        <div class="edit-tool">
                          <span class="fw-medium green-title">Add</span>
                        </div>
                      </div>
                      <div class="inp mt-3">
                        <input type="email" placeholder="" />
                        <div class="edit-tool">
                          <span class="fw-medium green-title">Verify Your Email Address*</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="btn-sec text-end mt-4">
                    <button class="tsp-btn">Cancel</button>
                    <button class="black-btn black-btn-sm">Save</button>
                  </div>
                </div>

                <div>
                  <div class="input-wrapper">
                    <div class="lb-in">
                      <label for="">Primary Phone *</label><br />

                      <div class="inp">
                        <PhoneNumberInput />
                        <div class="edit-tool">
                          <span class="fw-medium green-title">Add</span>
                        </div>
                      </div>

                      <div class="inp mt-3">
                        <PhoneNumberInput />
                        <div class="edit-tool">
                          <span class="fw-medium green-title">Verify Your Phone Number*</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="btn-sec text-end mt-4">
                    <button class="tsp-btn">Cancel</button>
                    <button class="black-btn black-btn-sm">Save</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );



      /* Login */

      case "login": return (
        <div class="login-info setting-desc-itm activeEwallet">
          <div class="head-tt">Login</div>

          <div class="input-section mt-3">
            <div>
              <div class="input-wrapper d-flex">
                <div class="lb-in">
                  <label for="">Username*</label>
                  <div class="inp">
                    <input type="text" placeholder="username" />
                    <div class="edit-tool green-title">
                      <i class="ri-pencil-fill"></i>
                      <span>Update</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="input-wrapper d-flex mt-3">
                <div class="lb-in">
                  <label for="">New Username</label>
                  <div class="inp">
                    <input type="text" placeholder="" />
                    <div class="edit-tool green-title fw-medium">
                      <span>Submit</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="input-wrapper d-flex mt-3">
                <div class="lb-in">
                  <label for="">Passowrd*</label>
                  <div class="inp">
                    <input type="password" placeholder="" />
                    <div class="edit-tool green-title">
                      <i class="ri-pencil-fill"></i>
                      <span>Update</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="input-wrapper d-flex mt-3">
              <div class="lb-in">
                <div class="label-sec d-flex justify-content-between">
                  <label for="">New Passowrd</label>
                  <div class="hideShow green-title">Show</div>
                </div>
                <div class="inp">
                  <input type="password" class="passwordField" placeholder="" />
                </div>
              </div>
              <div class="edit-tool green-title fw-medium"></div>
            </div>

            <div class="input-wrapper d-flex mt-3">
              <div class="lb-in">
                <div class="label-sec d-flex justify-content-between">
                  <label for="">Re-enter Passowrd</label>
                  <div class="hideShow green-title">Show</div>
                </div>
                <div class="inp">
                  <input type="password" class="passwordField" placeholder="" />
                </div>
              </div>
              <div class="edit-tool green-title fw-medium pt-lg-4 pt-md-4">
                <span class="green-title">Submit</span>
              </div>
            </div>
          </div>
        </div>
      );



      case "addAddress": return (
        <div class="address-book setting-desc-itm activeEwallet">
          <div class="head-tt">Add address book</div>
          <div class="mt-3 checkmark-opt mt-2 d-flex align-items-start gap-2">
            <div class="bullet-input active-bullet mt-1"></div>
            <label for="">23232 142nd St SE Seattle, WA 98059-3258, US</label>
          </div>
          <div class="btn-sec mt-3 gap-3 d-flex align-items-center">
            <button class="black-btn black-btn-sm">
              Update Address
            </button>
            <button class="black-btn black-btn-sm">Add New</button>
          </div>

          <form action="">
            <div class="input-section mt-4">
              <div class="">
                <AddAddressLine LabelShow={true} />
                <div class="zone-details-container mt-3">
                  <div class="zone-details">
                    <input type="text" placeholder="*City" />
                    <StateSelect />
                    <input type="text" placeholder="*Postal Code" />
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div class="btn-sec text-end mt-4">
            <button class="tsp-btn">Cancel</button>
            <button class="black-btn black-btn-sm">Save</button>
          </div>
        </div>
      );

      default:
        return (
          <div className="setting-desc-itm">
            <div className="head-tt">Select a section</div>
          </div>
        );
    }
  };

  return (
    <section className="manage-profile-actions mt-5">
      <div className="container">
        <div className="row">
          {/* Sidebar Tabs */}
          <div className="col-lg-4">
            <div className="setting-info">
              {tabs.map((tab) => (
                <div
                  key={tab.key}
                  className={classNames("setting-itm", {
                    activeSettingItem: activeTab === tab.key,
                  })}
                  onClick={() => setActiveTab(tab.key)}
                >
                  <div className="itm-nm">{tab.label}</div>
                  <div className="icon">
                    <i className="ri-arrow-right-s-line"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="col-lg-8 mt-lg-0 mt-5">
            <div className="setting-description">{renderContent()}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageProfilesActions;

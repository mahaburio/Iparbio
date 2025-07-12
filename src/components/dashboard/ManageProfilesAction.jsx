import React, { useState } from "react";
import classNames from "classnames";
import { AddAddressLine, PhoneNumberInput, StateSelect } from "../input/InputFields";
import DatePicker from "../input/DatePicker";
import PaymentMethod from "../signup-page/Checkout/PaymentMethod";

import { BsTrash3 } from "react-icons/bs";

const tabs = [
  { key: "personalInformation", label: "Personal Information" },
  { key: "login", label: "Login" },
  { key: "addAddress", label: "Add address book" },
  { key: "paymentMethod", label: "Payment Method" },
  { key: "payoutMethod", label: "Payout Method" },
  { key: "taxes", label: "Taxes" },
  { key: "taxStatement", label: "Tax Statements" },
  { key: "messageAlerts", label: "Messages & Alerts" },
  { key: "exit", label: "Exit to dashboard" },
];

const notificationOptions = ["push", "sms", "email", "none"];

const notificationItems = [
  { key: "newTeam", label: "New Team Member", icon: "../svg/people.svg" },
  { key: "newOrders", label: "New Orders", icon: "../svg/list.svg" },
  { key: "failedOrders", label: "Failed Orders", icon: "../svg/warning.svg" },
  { key: "orderShipped", label: "Order Shipped", icon: "../svg/delivery-van.svg" },
  { key: "cancelled", label: "Cancelled Orders", icon: "../svg/cancel.svg" },
  { key: "bcInactive", label: "BC Inactive", icon: "../svg/return.svg" },
  { key: "donation", label: "Donation Summary", icon: "../svg/donation.svg" },
  { key: "cardExpire", label: "Card Expire", icon: "../svg/credit-card.svg" },
  { key: "commission", label: "Commission Statement", icon: "../svg/hot-sale.svg" },
  { key: "qualification", label: "Qualification Alert", icon: "../svg/approved-signal.svg" },
  { key: "titleUpgrade", label: "Title Upgrade", icon: "../svg/text-format.svg" },
  { key: "bcExtension", label: "BC Extension Alert", icon: "../svg/approved-signal.svg" },
];

const ManageProfilesActions = () => {


  const [activeTab, setActiveTab] = useState("personalInformation");

  const [preferences, setPreferences] = useState(
    Object.fromEntries(
      notificationItems.map((item) => [
        item.key,
        { push: false, sms: false, email: true, none: false },
      ])
    )
  );

  const handleClick = (itemKey, type) => {
    setPreferences((prev) => {
      const updated = { ...prev };
      const current = { ...updated[itemKey] };

      if (type === "none") {
        updated[itemKey] = {
          push: false,
          sms: false,
          email: false,
          none: true,
        };
      } else {
        current[type] = !current[type];
        if (current.push || current.sms || current.email) {
          current.none = false;
        }
        updated[itemKey] = current;
      }

      return updated;
    });
  };

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


      // Add Address

      case "addAddress":
        return (
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


      // Payment Method
      case "paymentMethod":
        return (
          <div class="setting-desc-itm ">
            <div class="head-tt">Payment Method</div>
            <PaymentMethod HeaderTitle={false} />
          </div>
        );



      // Taxes
      case "taxes":
        return (
          <div class="taxs-info setting-desc-itm ">
            <div class="head-tt">Taxes</div>
            <p class="gray mt-3">
              If you're selling products in-person or online, you may need
              to report your earnings on your annual tax return. Adding
              your tax ID here helps us provide the right tax documents
              when you start earning.
            </p>
            <div class="btn-sec mt-4 text-end">
              <button class="black-btn black-btn-sm">Add</button>
            </div>

            <div class="type-tax">
              <div class="input-wrapper">
                <div class="lb-in">
                  <label for="">Tax type*</label>
                  <select name="" id="">
                    <option value="">Business</option>
                    <option value="">Corporation</option>
                    <option value="">Sole Proprietorship</option>
                  </select>
                </div>
              </div>

              <div class="input-wrapper">
                <div class="lb-in">
                  <label for="">Tax ID</label>
                  <input type="text" placeholder="NNN-NN-NNNN*" />
                  <p class="gray">
                    Please enter a valid registration number
                  </p>
                </div>
              </div>
            </div>

            <div class="business-name mt-3">
              <div class="lb-in">
                <label for="birth-date">Effective date*</label><br />
                <DatePicker CalendarIcon={true} arrowIcon={true} />
              </div>
              <div class="input-wrapper">
                <div class="lb-in">
                  <label for="">Business Name</label>
                  <input type="text" placeholder="" />
                </div>
              </div>

              <div class="mt-4">
                <div class="radio-checkmark">
                  <div class="radio-input activeLabelInput"></div>
                  <span class="gray">Send 1099/Tax Summary</span>
                </div>
              </div>
              <div class="btn-sec text-end mt-4">
                <button class="black-btn">Save</button>
              </div>
            </div>
          </div>
        );


      // Tax Statement
      case "taxStatement":
        return (
          <div class="statements-info setting-desc-itm ">
            <div class="head-tt">Tax Statements</div>
            <p class="gray mt-3">
              Ipar’s Earnings Statement gives you a detailed breakdown of
              your earnings. Some earnings, like contest prizes and
              special bonuses, may not show up on your regular check stubs
              but are included here for full transparency.
            </p>

            <div class="input-wrapper input-wrapper-v2">
              <div class="lb-in">
                <label for="">Tax Year</label>
                <div class="inp">
                  <select name="" id="">
                    <option value="">2025</option>
                    <option value="">2024</option>
                    <option value="">2023</option>
                    <option value="">2022</option>
                    <option value="">2021</option>
                    <option value="">2020</option>
                  </select>
                  <div class="dsc gray">
                    View and print your
                    <a href="" className="green-title"> 2024 Earnings Statement.</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="input-wrapper input-wrapper-v2 mt-5">
              <div class="lb-in">
                <label for="">1099 Tax Forms</label>
                <div class="inp">
                  <select name="" id="">
                    <option value="">2025</option>
                    <option value="">2024</option>
                    <option value="">2023</option>
                    <option value="">2022</option>
                    <option value="">2021</option>
                    <option value="">2020</option>
                  </select>
                  <div class="dsc gray">
                    The earnings reported on your
                    <a href="" className="green-title"> 1099 tax form</a> are also reported to the
                    Internal Revenue Service.
                  </div>
                </div>
              </div>
            </div>

            <p class="gray mt-4">
              Note: We strongly recommend reviewing your earnings, name,
              and taxpayer number for accuracy. Adjustments to your total
              yearly earnings may occur until January 31.
            </p>
          </div>
        );



      case "messageAlerts":
        return (
          <div class="message-info setting-desc-itm activeEwallet">
            <div class="head-tt">Messages &amp; Alerts</div>
            <div class="gray mt-3">
              You'll see every notification on Dashboard but you can turn
              off notifications about specific posts. <br /><br />
              <strong>SMS Information</strong>
              <br /><br />
              Here’s a list of devices that are set up for SMS alerts.
            </div>
            <div class="input-wrapper mt-4 time-zone">
              <div class="lb-in">
                <label for="">Time Zone</label>
                <select name="" id="">
                  <option value="">
                    Pacific Standard Time - America/Los_Angeles
                  </option>
                  <option value="">
                    Mountain Time - America/Los_Angeles
                  </option>
                  <option value="">
                    Central Time - America/Los_Angeles
                  </option>
                  <option value="">
                    Eastern Time - America/Los_Angeles
                  </option>
                </select>
              </div>
            </div>

            <div class="lb-in addRemovePhoneN mt-3">
              <label for="">Phone Number</label>
              <div class="inp-sec">

                <div class="dts d-flex align-items-center gap-3">
                  <PhoneNumberInput />
                  <div class="remove d-flex align-items-center gap-1 gray">
                    <BsTrash3 fontSize={22} /> Remove
                  </div>
                  <button class="green-btn green-btn-sm">Add</button>
                  <div class="edit green-title">
                    <i class="ri-pencil-fill"></i>
                  </div>
                </div>
              </div>
            </div>


            {/* Notification Center */}

            <div className="notification-center mt-4">
              <div className="notification-body mt-3">
                <table className="w-100">
                  <thead>
                    <tr>
                      <th className="name"></th>
                      <th>Push Notification</th>
                      <th>Text Message</th>
                      <th>Email</th>
                      <th>None of them</th>
                    </tr>
                  </thead>
                  <tbody>
                    {notificationItems.map((item) => (
                      <tr className="notification-row" key={item.key}>
                        <td className="nft-itm">
                          <div className="icon">
                            <img src={`../assets/${item.icon}`} alt="" />
                          </div>
                          <span>{item.label}</span>
                        </td>

                        {notificationOptions.map((type) => (
                          <td key={type}>
                            <div
                              className={`checkmark-opt ${type === "none" ? "none-option" : ""
                                }`}
                              onClick={() => handleClick(item.key, type)}
                            >
                              <div
                                className={`bullet-input ${preferences[item.key][type] ? "active-bullet" : ""
                                  }`}
                              ></div>
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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

import React from 'react';
import 'flatpickr/dist/themes/material_green.css';
import HeaderDashboard from '../../components/header/HeaderDashboard';
import SideNav from '../../components/enrollment/Sidenav/SideNav';
import Footer from '../../components/footer/footer';

const EWallet = () => {

  return (
    <div>
      <HeaderDashboard isEwalletPage={true} />
      <SideNav />






<section class="e-wallet-section mt-5">
        <div class="container">
          <div class="main-head-title">E-wallet</div>

          <div class="e-wallet-wrapper mt-5">
            <div class="row">
              <div class="col-lg-3">
                <div class="wallet-hub">
                  <div class="acc-hub">
                    <h5>Account</h5>
                    <div class="account-subhub ps-2 mt-2">
                      <li class="summeryBtn">Summery</li>
                      <li class="transfer-toggle d-flex align-items-center justify-content-between">
                        <span>Transfer</span>
                        <i class="toggle-arrow ri-arrow-down-s-line rotate"></i>
                      </li>
                      <div class="transfer-hub show">
                        <li class="sendBtn ps-4 activeWalletHub">Send</li>
                        <li class="cashboutBtn ps-4">Cashout</li>
                      </div>
                     
                      <li class="statementBtn">Statement</li>
                    </div>
                  </div>

                  <div class="setting-hub mt-4">
                    <h5>Setting</h5>
                    <div class="setting-subhub ps-2 mt-2">
                      <li class="changePasswordBtn">Change Password</li>
                      <li>Modify Profile</li>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-9 mt-lg-0 mt-md-5 mt-sm-5 mt-5">
                <div class="wallet-details summeryDetails">
                  <div class="coupons-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Account Name</th>
                          <th>Account Number</th>
                          <th>Currency</th>
                          <th>Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Commission Account</td>
                          <td>100103853174</td>
                          <td>USD</td>
                          <td>0.00</td>
                        </tr>

                        <tr>
                          <td>Coupons</td>
                          <td>100103853174</td>
                          <td>Point</td>
                          <td>0.00</td>
                        </tr>

                        <tr>
                          <td>Volumes</td>
                          <td>100103853174</td>
                          <td>PV</td>
                          <td>0.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- Todo ~~~~~~~ ACCOUNT-SEND-DETAILS ~~~~~~ -->
                <div class="statement">
                  <div class="select-box">
                    <div class="select-btn">
                      <span class="select-text" id="selected-value">Past 3 months</span>
                      <div class="arrowIcon" id="arrow-icon">
                        <i class="ri-arrow-down-s-line"></i>
                      </div>
                    </div>
                    <div class="options-list" id="options-menu">
                      <div class="option-item">Past 7 days</div>
                      <div class="option-item">Past 30 days</div>
                      <div class="option-item">Past 3 months</div>
                      <div class="option-item">Past 6 months</div>
                      <div class="option-item">Last year</div>
                    </div>
                  </div>
                  <div class="coupons-table mt-3">
                    <table>
                      <thead>
                        <tr>
                          <th>Beginning balance on <br>January 1, 2023</th>
                          <th>Deposits and other <br>credits</th>
                          <th>Send</th>
                          <th>Service fees</th>
                          <th>Ending balance on <br>January 31, 2023</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>-$50.44</td>
                          <td>494</td>
                          <td>344</td>
                          <td>0.66</td>
                          <td>106.66</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div class="coupons-table mt-3">
                    <table>
                      <thead>
                        <tr>
                          <th>Beginning balance on <br>January 1, 2023</th>
                          <th>Deposits and other <br>credits</th>
                          <th>Send</th>
                          <th>Service fees</th>
                          <th>Ending balance on <br>January 31, 2023</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>-$50.44</td>
                          <td>494</td>
                          <td>344</td>
                          <td>0.66</td>
                          <td>106.66</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div class="coupons-table mt-3">
                    <table>
                      <thead>
                        <tr>
                          <th>Beginning balance on <br>January 1, 2023</th>
                          <th>Deposits and other <br>credits</th>
                          <th>Send</th>
                          <th>Service fees</th>
                          <th>Ending balance on <br>January 31, 2023</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>-$50.44</td>
                          <td>494</td>
                          <td>344</td>
                          <td>0.66</td>
                          <td>106.66</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- Todo ~~~~~~~ CHNAGE PASSWORD ~~~~~~ -->
                <div class="change-password">
                  <div class="username-change d-flex align-items-center gap-3">
                    <div class="username-details">
                      <div class="username">
                        <div><label for="">Username</label><br></div>
                        <div class="d-flex align-items-center gap-3">
                          <input type="text" placeholder="Username">
                          <div class="update d-flex gap-1">
                            <i class="ri-pencil-fill"></i> Update
                          </div>
                        </div>
                      </div>
                      <div class="new-username mt-3">
                        <div><label for="">New Username</label><br></div>
                        <div class="d-flex align-items-center gap-3">
                          <input type="text" placeholder="Enter New Username">
                          <button>Submit</button>
                        </div>
                      </div>
                    </div>
                    <div class="note">
                      Username must contain one non numeric character, Username
                      cannot be less than 5 characters.
                    </div>
                  </div>

                  <div class="mt-4 username-change d-flex align-items-center gap-3">
                    <div class="username-details">
                      <div class="password">
                        <div><label for="">Password</label><br></div>
                        <div class="d-flex align-items-center gap-3">
                          <input type="text" placeholder="Password">
                          <div class="update d-flex gap-1">
                            <i class="ri-pencil-fill"></i> Update
                          </div>
                        </div>
                      </div>
                      <div class="new-password mt-3">
                        <div><label for="">New Password</label><br></div>
                        <div class="d-flex align-items-center gap-3">
                          <input type="text" placeholder="New Password">
                        </div>
                      </div>
                      <div class="re-password mt-3">
                        <div><label for="">Re-enter Password</label><br></div>
                        <div class="d-flex align-items-center gap-3">
                          <input type="text" placeholder="Re-enter Password">
                          <button>Submit</button>
                        </div>
                      </div>
                    </div>
                    <div class="note">
                      The password you entered does not meet the security
                      requirements
                    </div>
                  </div>
                </div>

                <!-- Todo ~~~~~~~ SEND-DETAILS ~~~~~~ -->

                <div class="send-details activeEwallet">
                  <div class="send-header">
                    <div class="active">Amount</div>
                    <div>Reciepent</div>
                    <div>Review</div>
                    <div>Send</div>
                  </div>
                  <div class="sender-details mt-3">
                    <div class="send">
                      <div class="header-tt">You Send</div>
                      <div class="p-lg-3 p-2">
                        <p class="subtitle">You Send</p>
                        <div class="left">
                          <div class="currency">
                            <div class="select-box">
                              <div class="select-btn">
                                <span class="select-text" id="selected-value">USD</span>
                                <div class="arrowIcon" id="arrow-icon">
                                  <i class="ri-arrow-down-s-line"></i>
                                </div>
                              </div>
                              <div class="options-list" id="options-menu">
                                <div class="option-item">USD</div>
                                <div class="option-item">Point</div>
                                <div class="option-item">PV</div>
                              </div>
                            </div>
                          </div>
                          <div class="amount">
                            <input type="text" placeholder="0.00">
                            <br>
                            <p>Enter an amount in any currency</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="receive">
                      <div class="header-tt">Reciepent</div>
                      <div class="p-lg-3 p-2">
                        <p class="subtitle">Reciepent Country/ Currency</p>
                        <div class="left">
                          <div class="currency">
                            <div class="dropdown" id="countryDropdown">
                              <div class="selected" id="selectedCountry">
                                <div class="">
                                  <img src="https://flagcdn.com/w40/gb.png" alt="Flag">
                                </div>
                                <div class="right-chevron">
                                  <i class="ri-arrow-down-s-line"></i>
                                </div>
                              </div>
                              <div class="dropdown-list">
                                <div class="option" data-flag="https://flagcdn.com/w40/us.png" data-name="United States">
                                  <img src="https://flagcdn.com/w40/us.png" alt="Flag">
                                </div>
                                <div class="option" data-flag="https://flagcdn.com/w40/gb.png" data-name="United Kingdom">
                                  <img src="https://flagcdn.com/w40/gb.png" alt="Flag">
                                </div>
                                <div class="option" data-flag="https://flagcdn.com/w40/ca.png" data-name="Canada">
                                  <img src="https://flagcdn.com/w40/ca.png" alt="Flag">
                                </div>
                                <div class="option" data-flag="https://flagcdn.com/w40/au.png" data-name="Australia">
                                  <img src="https://flagcdn.com/w40/au.png" alt="Flag">
                                </div>
                                <div class="option" data-flag="https://flagcdn.com/w40/in.png" data-name="India">
                                  <img src="https://flagcdn.com/w40/in.png" alt="Flag">
                                </div>
                                <div class="option" data-flag="https://flagcdn.com/w40/fr.png" data-name="France">
                                  <img src="https://flagcdn.com/w40/fr.png" alt="Flag">
                                </div>
                                <div class="option" data-flag="https://flagcdn.com/w40/de.png" data-name="Germany">
                                  <img src="https://flagcdn.com/w40/de.png" alt="Flag">
                                </div>
                              </div>
                            </div>
                            <div class="select-box">
                              <div class="select-btn">
                                <span class="select-text" id="selected-value">PV</span>
                                <div class="arrowIcon" id="arrow-icon">
                                  <i class="ri-arrow-down-s-line"></i>
                                </div>
                              </div>
                              <div class="options-list" id="options-menu">
                                <div class="option-item">USD</div>
                                <div class="option-item">Point</div>
                                <div class="option-item">PV</div>
                              </div>
                            </div>
                          </div>
                          <div class="amount">
                            <input type="text" placeholder="0.00">
                            <br>
                            <p>Enter an amount in any currency</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="mt-4 total-fee">
                    Total Fees ( Bank + Our fee) <b> 0.00</b>
                  </p>

                  <!-- paying details -->
                  <div class="paying-with-details">
                    <div class="paying-with">
                      <div class="header-tt">Paying with</div>
                      <div class="pay-itm">Connected bank account (ACH)</div>
                      <div class="pay-itm">Debit Card</div>
                      <div class="pay-itm">Credit Card</div>
                      <div class="pay-itm">Your Balance</div>
                    </div>
                    <div class="details">
                      Here are the ways you can pay for this transfer
                    </div>
                  </div>

                  <!-- Add Recipent -->
                  <div class="add-recipient mt-4">
                    <div class="header-tt">Add a recipient</div>
                    <div class="recipient-select">
                      <div class="recipient-itm" data-bs-toggle="modal" data-bs-target="#addRecipientModal">
                        Search &amp; find them by Ipar ID, email, phone number
                      </div>
                      <div class="recipient-itm">Girls' Hope Donations</div>
                    </div>
                    <div class="recipient-modal mt-3">
                      <strong>Added recipient</strong>
                      <div class="mt-3">
                        <div class="radio-checkmark">
                          <div class="radio-input"></div>
                          <span>Murzamatova Kanayim</span>
                        </div>
                      </div>

                      <div class="mt-3">
                        <div class="radio-checkmark">
                          <div class="radio-input"></div>
                          <span>Murzamatova Kanayim</span>
                        </div>
                      </div>

                      <div class="add-credit mt-3" data-bs-toggle="modal" data-bs-target="#addRecipientModal">
                        <span>+ Add a recipient
                          <i class="ri-arrow-right-s-line"></i></span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Todo ~~~~~~~ CASHOUT ~~~~~~ -->

                <div class="cashout">
                  <div class="add-credit mt-3" data-bs-toggle="modal" data-bs-target="#cashoutModal">
                    <span>+ Created a Cash out Request
                      <i class="ri-arrow-right-s-line"></i></span>
                  </div>

                  <div class="select-box mt-3">
                    <div class="select-btn">
                      <span class="select-text" id="selected-value">Past 3 months</span>
                      <div class="arrowIcon" id="arrow-icon">
                        <i class="ri-arrow-down-s-line"></i>
                      </div>
                    </div>
                    <div class="options-list" id="options-menu">
                      <div class="option-item">Past 7 days</div>
                      <div class="option-item">Past 30 days</div>
                      <div class="option-item">Past 3 months</div>
                      <div class="option-item">Past 6 months</div>
                      <div class="option-item">Last year</div>
                    </div>
                  </div>
                  <div class="coupons-table mt-3" id="mainTableList">
                    <table>
                      <thead>
                        <tr>
                          <th>Status</th>
                          <th>To</th>
                          <th>Amount</th>
                          <th>Request Date</th>
                          <th>Type</th>
                          <th>Confirmation</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Completed</td>
                          <td>Trump D.</td>
                          <td>106.05</td>
                          <td>02/04/25</td>
                          <td>Cashout</td>
                          <td>9809528</td>
                        </tr>
                        <tr>
                          <td>Pending</td>
                          <td>48********666</td>
                          <td>106.05</td>
                          <td>02/04/25</td>
                          <td>Send</td>
                          <td>9809528</td>
                        </tr>

                        <tr>
                          <td>Completed</td>
                          <td>Trump D.</td>
                          <td>106.05</td>
                          <td>02/04/25</td>
                          <td>Cashout</td>
                          <td>9809528</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div class="btn-sec mt-5">
                    <button class="black-btn">Recharge</button>
                  </div>

                  <div class="order-w-details">
                    <div class="payment-mt mt-3">
                      <div class="ck-ct gf-ct py-2 pb-3 px-2">
                        <div class="gf-cd-ct d-flex flex-lg-row flex-md-row flex-sm-column flex-column align-items-lg-center align-items-md-center align-items-sm-start align-items-start gap-3">
                          <div class="img">
                            <img src="../assets/ipar-gift-card.png" alt="">
                          </div>
                          <div class="gift-dt">
                            <div>Got a reason to celebrate?</div>
                            <div>Select, Send – It’s that simple!</div>
                            <i>Add Ipar eGift card</i>
                          </div>
                        </div>

                        <div class="promo-cd mt-2">
                          <div class="promo-body d-flex flex-lg-row flex-md-row flex-sm-column flex-column gap-3 align-items-lg-center align-items-md-center align-items-sm-start align-items-start justify-content-between mt-2">
                            <span class="pr-tt">Enter a gift card, voucher or promotional
                              code</span>
                            <div class="d-flex align-items-center gap-3">
                              <input type="text">
                              <button class="black-btn">Apply</button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="add-credit mt-3 ps-3" data-bs-toggle="modal" data-bs-target="#addPaymentModal">
                        <span>+ Add payment <i class="ri-arrow-right-s-line"></i></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EWallet;

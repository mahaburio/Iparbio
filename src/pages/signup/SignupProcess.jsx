import React, { useState, useEffect } from 'react';
import StepProgress from "../../components/common/StepProgressBar.jsx";
import MainWrapper from '../../components/common/Mainwrapper.jsx';
import { Header } from '../../components/index.js';
import Footer from '../../components/footer/footer.jsx';
import { Help } from '../../components/common/Help.jsx';
import SelectMarketModal from '../../components/signup-page/SelectMarketModal.jsx';
import { PhoneNumberInput } from '../../components/input/InputFields.jsx';
import CheckboxInput from "../../components/input/CheckboxInput.jsx";
import DatePicker from '../../components/input/DatePicker.jsx';


import { AddAddressLine, StateSelect } from '../../components/input/InputFields.jsx';

import { SubscriptionPackage } from '../../components/signup-page/SubscriptionPackage.jsx';
import ProductPageSubscription from '../../components/product-page/ProductPageSubscription.jsx';
import SubscriptionPlan from '../../components/signup-page/SubscriptionPlan.jsx';
import CheckoutWrapper from '../../components/signup-page/CheckoutWrapper.jsx';
import { CartSummary, PromoCode } from '../../components/product-page/CartSummery.jsx';
import CartItem from '../../components/product-page/CartItem.jsx';
import UserCard from '../../components/signup-page/Checkout/UserDetails.jsx';
import PaymentMethod from '../../components/signup-page/Checkout/PaymentMethod.jsx';
import Reviews from '../../components/signup-page/Checkout/Reviews.jsx';

const SignupProcess = () => {
  const steps = ['Sign up', 'Create profile', 'Subscription', 'Checkout', 'Complete'];
  const [currentStep, setCurrentStep] = useState(1);
  const [completedStep, setCompletedStep] = useState(1);
  const [step3Phase, setStep3Phase] = useState(1);
  const [step4Phase, setStep4Phase] = useState(1);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(null); // Track selected plan


  useEffect(() => {
    if (currentStep !== 3) {
      setStep3Phase(1);
    }
  }, [currentStep]);


  useEffect(() => {
    if (currentStep !== 4) {
      setStep4Phase(1);
    }
  }, [currentStep]);

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    code: "US",
    name: "United States - English",
    flag: "/flag/usa-flag.png",
  });

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setIsModalOpen(false);
  };

  // Form Data
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    birthDate: "",
    taxId: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContinue = () => {
    const next = currentStep + 1;
    setCurrentStep(next);
    setCompletedStep(prev => Math.max(prev, next));
  };

  const handleStepClick = (stepIndex) => {
    if (stepIndex <= completedStep) setCurrentStep(stepIndex);
  };



  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Welcome Kit",
      price: "$80",
      quantity: 2,
      image: '../images/product-img-2.webp',
      itemCode: "105",
      showControls: true,
      editOptions: {
        showColor: true,
        showSize: false,
      },
    },
    {
      id: 2,
      name: "Balance",
      price: "$80",
      quantity: 2,
      image: '../images/product-img-2.webp',
      itemCode: "103/500ml",
      showControls: true,
      editOptions: {
        showColor: false,
        showSize: true,
      },
    },
    {
      id: 3,
      name: "Lipstick",
      price: "$80",
      quantity: 2,
      image: '../images/product-img-2.webp',
      itemCode: "262/No5",
      showControls: false,
      editOptions: {
        showColor: true,
        showSize: true,
      },
    },


  ]);


  // For the Cart Item Delete and Quantity change
  const handleDelete = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };


  const packagesData = [
    {
      name: "Welcome Package Eng",
      price: "USD 26",
      volume: 0,
      itemNumber: 262,
      image: "/images/wel-pack.webp",
    },
    {
      name: "Welcome Package -Ru",
      price: "USD 26",
      volume: 0,
      itemNumber: 263,
      image: "/images/wel-pack.webp",
    },
    {
      name: "Welcome Package Tr",
      price: "USD 26",
      volume: 0,
      itemNumber: 264,
      image: "/images/Pink-podium-cosmetic.webp",
    },
  ];

  // Subscription Plan Package


  const plans = [
    {
      name: "Experiential",
      pv: "50PV",
      benefits: ["10% cash back", "10% sponsorship", "10% match"],
      description: [
        "- Earn a 10% cashback on repeat order sales.",
        "- Get up to a 15% sponsor bonus for every associate you bring into your team once they join."
      ],
      className: "exp-item",
    },
    {
      name: "Silver",
      pv: "100PV",
      benefits: ["10% cash back", "15% sponsorship", "12% match"],
      description: [
        "- Earn a 10% cashback on repeat order sales.",
        "- Get up to a 15% sponsor bonus for every associate you bring into your team once they join."
      ],
      className: "sv-item",
    },
    {
      name: "Gold",
      pv: "500PV",
      benefits: ["10% cash back", "20% sponsorship", "5% coaching", "15% match", "Fission"],
      description: [
        "- Earn a 10% cashback on repeat order sales.",
        "- Get up to a 15% sponsor bonus for every associate you bring into your team once they join.",
        "- Get up to a 5% coaching.",
        "- 15% Match.",
      ],
      className: "gd-item",
    },
    {
      name: "Platinum",
      pv: "1000PV",
      benefits: ["10% cash back", "20% sponsorship", "5% coaching", "15% match", "Fission"],
      description: [
        "- Earn a 10% cashback on repeat order sales.",
        "- Get up to a 15% sponsor bonus for every associate you bring into your team once they join.",
        "- Get up to a 5% coaching.",
        "- 15% Match.",
      ],
      className: "plt-item",
    },
    {
      name: "Diamond",
      pv: "1800PV",
      benefits: ["10% cash back", "20% sponsorship", "5% coaching", "15% match", "Fission"],
      description: [
        "- Earn a 10% cashback on repeat order sales.",
        "- Get up to a 15% sponsor bonus for every associate you bring into your team once they join.",
        "- Get up to a 5% coaching.",
        "- 15% Match.",
      ],
      className: "dm-item",
    },
  ];



  // const [cartItems] = useState([
  //   {
  //     id: 1,
  //     name: "Welcome Kit",
  //     price: "$80",
  //     quantity: 2,
  //     image: '../images/product-img-2.webp',
  //     itemCode: "105",
  //     showControls: false,

  //   },
  //   {
  //     id: 2,
  //     name: "Balance",
  //     price: "$80",
  //     quantity: 2,
  //     image: '../images/product-img-2.webp',
  //     itemCode: "103/500ml",
  //     showControls: false,

  //   },
  //   {
  //     id: 3,
  //     name: "Lipstick",
  //     price: "$80",
  //     quantity: 2,
  //     image: '../images/product-img-2.webp',
  //     itemCode: "262/No5",
  //     showControls: false,

  //   },
  // ]);



  return (
    <MainWrapper>
      <div className="signup_page sign-up-IBA-shop create-profile">
        <Header showSearch={false} MeneBarSec={false} showDashboardMenu={false} />
        <StepProgress currentStep={currentStep} steps={steps} onStepClick={handleStepClick} maxStepReached={completedStep} />

        <div>
          {currentStep === 1 && (
            <section className="SignupSteps">
              <section className="title-section mt-5">
                <div className="container">
                  <div className="title-desc-green fw-medium">
                    <i>Step 2: Create Account</i>
                  </div>
                  <div className="title-desc mt-4">
                    Time to create your account! Fill in the necessary details to set up
                    your account and move forward in the process.
                  </div>
                </div>
              </section>

              <div className="signup-input-section">
                <div className="container">
                  <div className="country d-flex align-items-center gap-2">
                    <span>*You're currently signing up in <span>{selectedCountry.code}</span></span>
                    <div className="img">
                      <img src={selectedCountry.flag} alt="" />
                    </div>
                  </div>
                  <p onClick={() => setIsModalOpen(true)}>Change Location (Select Market)</p>

                  <form onSubmit={(e) => { e.preventDefault(); handleContinue(); }}>
                    <div className="input-item d-flex flex-lg-row flex-md-row flex-sm-column flex-column align-items-lg-center align-items-md-center align-items-sm-start align-items-start">
                      <div className="lb-in">
                        <label>Email*</label><br />
                        <input name="email" value={formData.email} onChange={handleInputChange} type="email" required />
                      </div>
                      <div className="tt-txt mt-lg-4 mt-md-4 mt-sm-1 mt-1 ms-lg-3 ms-md-3 ms-sm-0 ms-0 "><i>Verify Your Email Address*</i></div>
                    </div>

                    <div className="input-item mt-3 d-flex flex-lg-row flex-md-row flex-sm-column flex-column align-items-lg-center align-items-md-center align-items-sm-start align-items-start">
                      <div className="lb-in d-flex d-flex flex-lg-row flex-md-row flex-sm-column flex-column align-items-lg-center align-items-md-center align-items-sm-start align-items-start">
                        <PhoneNumberInput label={true} value={formData.phone} onChange={(val) => setFormData(prev => ({ ...prev, phone: val }))} />

                        <div className="tt-txt mt-lg-4 mt-md-4 mt-sm-1 mt-1 ms-lg-3 ms-md-3 ms-sm-0 ms-0">
                          <i>Verify Your phone number*</i>
                        </div>
                      </div>

                    </div>

                    <div className="input-item-pass mt-3 d-flex flex-lg-row flex-md-row flex-sm-column flex-column align-items-lg-center align-items-md-center align-items-sm-start align-items-start">
                      <div className="lb-in">
                        <label>Password*</label><br />
                        <input name="password" value={formData.password} onChange={handleInputChange} type="password" required />
                      </div>
                      <div className="tt-txt-gr mt-lg-4 mt-md-4 mt-sm-1 mt-1 ms-lg-3 ms-md-3 ms-sm-0 ms-0">
                        Your password should be at least 8 characters long, including a mix of letters (both uppercase and lowercase), numbers, and special characters (like !, @, #, etc.). This helps keep your account secure.
                      </div>
                    </div>

                    <div className="input-name mt-3 d-flex flex-lg-row flex-md-row flex-sm-column flex-column align-items-lg-center align-items-md-center align-items-sm-start align-items-start">
                      <div className="lb-in">
                        <label>First Name*</label><br />
                        <input name="firstName" value={formData.firstName} onChange={handleInputChange} type="text" required />
                      </div>
                      <div className="lb-in">
                        <label>Middle Name</label><br />
                        <input name="middleName" value={formData.middleName} onChange={handleInputChange} type="text" />
                      </div>
                      <div className="lb-in">
                        <label>Last Name*</label><br />
                        <input name="lastName" value={formData.lastName} onChange={handleInputChange} type="text" required />
                      </div>
                    </div>

                    <div className="input-gender mt-3 d-flex flex-lg-row flex-md-row flex-sm-column flex-column align-items-lg-center align-items-md-center align-items-sm-start align-items-start">
                      <div className="lb-in">
                        <label>Gender</label><br />
                        <select name="gender" value={formData.gender} onChange={handleInputChange}>
                          <option value="">Select</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div className="lb-in">
                        <label>Birth Date</label><br />
                        <div className="date-im d-flex gap-2"></div>
                        <DatePicker
                          value={formData.birthDate}
                          onChange={(val) => setFormData(prev => ({ ...prev, birthDate: val }))}
                          id="birth-date"
                          CalendarIcon={true}
                          className="flatpickr-input" />

                      </div>
                    </div>

                    <div className="input-tax-id mt-3 d-flex flex-lg-row flex-md-row flex-sm-column flex-column align-items-lg-center align-items-md-center align-items-sm-start align-items-start">
                      <div className="lb-in">
                        <label>Social Security Number or Tax ID*</label><br />
                        <input name="taxId" value={formData.taxId} onChange={handleInputChange} type="text" required />
                      </div>
                    </div>

                    <div className="btn-sec d-flex justify-content-between align-items-center mt-5">
                      <div className="pr-pl">
                        * We care about your privacy. <a href="">Privacy Policy</a>
                      </div>
                      <button className="black-btn mt-4" onClick={handleContinue} type="submit">Continue</button>
                    </div>
                  </form>

                  <SelectMarketModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSelect={handleSelectCountry} />
                </div>
              </div>
            </section>
          )}

          {currentStep === 2 && (
            <div className='step-content'>
              <section className="title-section mt-5">
                <div className="container">
                  <div className="title-desc-green fw-medium">
                    <i>Step 3: Create Account</i>
                  </div>
                  <div className="title-desc mt-3">
                    Time to create your account! Fill in the necessary details to set up
                    your account and move forward in the process.
                  </div>
                </div>
              </section>

              <section className="add-address-sec">
                <div className="container">
                  <form onSubmit={(e) => { e.preventDefault(); handleContinue(); }}>
                    <h5 className="mt-5">Add address book</h5>

                    <div className='mt-3'>
                      <AddAddressLine LabelShow={true} required />
                    </div>
                    <div className="zone-details-container mt-3">
                      <div className="zone-details">
                        <input type="text" placeholder="*City" required />
                        <StateSelect />
                        <input type="text" placeholder="*Postal Code" required />
                      </div>
                    </div>

                    <div className="btn-sec mt-5">
                      <button className="black-btn">Update Address</button>
                      <button className="black-btn ms-3">Add New</button>
                    </div>

                    <div className="btn-sec d-flex justify-content-between align-items-center mt-5">
                      <div className="pr-pl">
                        * We care about your privacy. <a href="">Privacy Policy</a>
                      </div>
                      <button className="black-btn btn-wrap mt-4" onClick={handleContinue} type="submit" >Continue</button>
                    </div>
                  </form>
                </div>
              </section>
            </div>
          )}



          {currentStep === 3 && (
            <>
              {/* Step 3 Phase 1: ProductPageSubscription */}
              {step3Phase === 1 && (
                <div className="subscription-step">
                  <ProductPageSubscription navigation={false} GoCart={false} />
                  <div className="container">
                    <div className="btn-sec mt-5 text-end">
                      <button
                        className="black-btn"
                        onClick={() => setStep3Phase(2)}
                      >
                        Go to Cart
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3 Phase 2: SubscriptionPackage */}
              {step3Phase === 2 && (
                <div className="subscription-step">
                  <SubscriptionPackage packages={packagesData} />
                  <div className="container">
                    <div className="btn-sec mt-5 text-end">
                      <button
                        className="black-btn mt-5"
                        onClick={() => setStep3Phase(3)}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3 Phase 3: SubscriptionPlan */}
              {step3Phase === 3 && (
                <div className="subscription-step">
                  <SubscriptionPlan
                    plans={plans}
                    selectedIndex={selectedPlanIndex}
                    handleSelect={setSelectedPlanIndex}
                  />

                  <div className="container">
                    <div className="btn-sec mt-5 text-end">
                      <button
                        className="black-btn mt-5"
                        onClick={() => {
                          if (selectedPlanIndex === null) {
                            alert("Please select a plan before continuing.");
                            return;
                          }
                          setCurrentStep(4); // ✅ Proceed to Step 4
                        }}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}


          {currentStep === 4 && (

            <>
              {/* Checkout */}
              {step4Phase === 1 && (

                <section className="order-cart-section mt-lg-5 mt-md-5 mt-sm-4 mt-0">
                  <UserCard
                    username="Alex Smith"
                    userId="551 958 583"
                    pv={500}
                    pvMin={0}
                    pvMax={500}
                    imageSrc="/images/person.webp"
                    statusMessage="You are getting GOLD with eligible items"
                  />

                  <div className="container mt-5">
                    <div className="row">
                      <div className="col-lg-7 col-md-12 pe-lg-4 pe-md-4 pe-sm-auto pe-auto">
                        <h3>Your Cart (6 items)</h3>

                        <div className="all-cart-items">
                          {cartItems.map(item => (
                            <CartItem
                              key={item.id}
                              name={item.name}
                              price={item.price}
                              image={item.image}
                              quantity={item.quantity}
                              itemCode={item.itemCode}
                              showControls={item.showControls}
                              onDelete={() => handleDelete(item.id)}
                              editOptions={item.editOptions}
                              onQuantityChange={(qty) => handleQuantityChange(item.id, qty)
                              }
                            />
                          ))}
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-12">
                        <div className='sm-desc mt-3 px-lg-3 px-md-3 px-sm-0 px-0'>
                          <CartSummary
                            // Country Currency Code here
                            title="First order Summary (6 Items)"
                            currency="USD"
                            summaryItems={[
                              { id: 1, title: 'Subtotal', amount: 500.22 },
                              { id: 2, title: 'Discount', amount: 0, hide: true },
                              { id: 3, title: 'Free Shipping Applied', amount: 0 },
                              { id: 4, title: 'Tax', amount: 0 },
                              { id: 5, title: 'Total amount', amount: 700.00, isTotal: true },
                            ]}
                          />



                        </div>
                      </div>
                      <div className="btn-sec my-5 text-end">
                        <button className="black-btn " onClick={() => setStep4Phase(2)}>
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </section>

              )}

              {step4Phase === 2 && (
                <section className="order-cart-section mt-lg-5 mt-md-5 mt-sm-4 mt-0">
                  <UserCard
                    username="Alex Smith"
                    userId="551 958 583"
                    pv={500}
                    pvMin={0}
                    pvMax={500}
                    imageSrc="/images/person.webp"
                    statusMessage="You are getting GOLD with eligible items"
                  />

                  <div className="container mt-5">
                    <div className="row">
                      <div className="col-lg-7 col-md-12 pe-lg-4 pe-md-4 pe-sm-auto pe-auto">
                        <CheckoutWrapper />
                      </div>
                      <div className="col-lg-5 col-md-12">
                        <div className='sm-desc mt-3 px-lg-3 px-md-3 px-sm-0 px-0'>
                          <CartSummary
                            // Country Currency Code here
                            title="First order Summary (6 Items)"
                            currency="USD"

                            summaryItems={[
                              { id: 1, title: 'Subtotal', amount: 500.22 },
                              { id: 2, title: 'Discount', amount: 0, hide: true },
                              { id: 3, title: 'Free Shipping Applied', amount: 0 },
                              { id: 4, title: 'Tax', amount: 0 },
                              { id: 5, title: 'Total amount', amount: 700.00, isTotal: true },
                            ]}
                          />
                          <PromoCode volumne={true} />

                          <div className="all-cart-items">
                            {cartItems.map(item => (
                              <CartItem
                                key={item.id}
                                name={item.name}
                                price={item.price}
                                image={item.image}
                                quantity={item.quantity}
                                itemCode={item.itemCode}
                                showControls={false}
                              />
                            ))}
                          </div>

                          <div className="btn-sec my-5 text-end">
                            <button className="black-btn " onClick={() => setStep4Phase(3)}>
                              Payment Method
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}


              {/* payment Method */}

              {step4Phase === 3 && (
                <section className="order-cart-section mt-lg-5 mt-md-5 mt-sm-4 mt-0">
                  <div className="container">
                    <UserCard
                      username="Alex Smith"
                      userId="551 958 583"
                      imageSrc="/images/person.webp"
                      rangeLine={false}
                    />

                    <div className="mt-5">
                      <PaymentMethod />
                    </div>


                    <div class="btn-sec my-5 text-end">
                      <button class="black-btn" onClick={() => setStep4Phase(4)}>Use this payment method</button>
                    </div>
                  </div>
                </section>
              )}

              {step4Phase === 4 && (
                <>
                  <Reviews />
                </>
              )}
            </>
          )}

          {currentStep === 5 && (
            <section className="step-content container mt-5">
              <h2>Complete</h2>
              <p>Thank you for signing up!</p>
            </section>
          )}
        </div>



        <Help />
        <Footer footerOnlyDesc={true} footerDefault={false} />
      </div>
    </MainWrapper>
  );
};

export default SignupProcess;


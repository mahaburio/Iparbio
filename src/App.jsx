

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './pages/main/Homepage';
import JoinUsePage from './pages/main/JoinUs';

// ProductPages
import ProductPage from './pages/main/ProductPage';
import ProductPageColor from './pages/main/ProductPage-Color';
import ProductPageSize from './pages/main/ProductPage-Size';
import ProductPageEgift from './pages/main/ProductPage-Egift';
import ProductPageAll from './pages/main/ProductPage-All';
import CartPage from './pages/main/CartPage';


import CustomerSignin from './pages/main/CustomerSignin';
import OrderConfirmation from './pages/main/OrderConfirmation';

import CheckoutReviews from './pages/signup/CheckoutReviews';

// SIgnUp Pages
import SignupPage from './pages/signup/Signup';
import SignupPageIBA from './pages/signup/SignupIBA';
import SignupInfluencer from './pages/signup/SignupInfluencer';
import SignupProcess from './pages/signup/SignupProcess';

import Checkout from './pages/signup/Checkout';


import SigninPage from './pages/signup/Signin';
import WelcomeEmailPage from './pages/signup/WelcomeEmail';


// Enrollment 

import PersonallyEnrolled from './pages/enrollment/PersonallyEnrolled';
import AssociateCouncil from './pages/enrollment/AssociateCouncil';
import EwalletLogin from './pages/enrollment/EwalletLogin';
import Enhancement from './pages/enrollment/Enhancement';
import { IparElite, IparEliteDoctor, IparEliteJourney } from './pages/enrollment/IparElite';
import IparUserInfo from './pages/enrollment/IparUserInfo';
import UplineLeaderPlacementPage from './pages/enrollment/UplineLeaderPlacement';
import FormsAndDocuments from './pages/enrollment/FormsDocuments';
import ResourceCenterLogin from './pages/enrollment/ResourceCenterLogin';
import SubscriptionPc from './pages/subscription/SubscriptionPc';
import { RankUpReportDeca, RankUpReportMonth } from './pages/enrollment/RankUpMonth';
import SubscriptionOrder from './pages/subscription/SubscriptionOrder';
import SubscriptionProductAll from './pages/subscription/SubscriptionProductAll';
import SubscriptionCart from './pages/subscription/SubscriptionCart';
import SubscriptionOrderHistory from './pages/subscription/SubscriptionOrderHistory';
import BusinessReport from './pages/dashboard/BusinessReport';
import Performance from './pages/dashboard/Performance';
import Qualification from './pages/dashboard/Qualification';
import MonthlyReport from './pages/dashboard/MonthlyReport';
import EnrollmentReport from './pages/dashboard/EnrollmentReport';
import OrderHistoryReport from './pages/dashboard/OrderHistoryReport';
import Coupons from './pages/dashboard/Coupons';
import VolumeReport from './pages/dashboard/VolumeReport';
import PaymentStatement from './pages/dashboard/PaymentStatement';
import WebsiteSetting from './pages/dashboard/WebsiteSetting';
import ManageProfiles from './pages/dashboard/ManageProfiles';
import EWallet from './pages/dashboard/EWallet';
import Resources  from './pages/dashboard/Resources';
import ResourcesFaq from './pages/dashboard/ResourceFaq';
import ResourcesContacts from './pages/dashboard/ResourceContacts';
import Library from './components/dashboard/Library';
import EnrollmentNetworkView from './pages/enrollment/EnrollmentNetworkView';
import PerformanceReport from './pages/dashboard/PerformanceReport';
import Membership from './pages/dashboard/Membership';
import Share from './pages/dashboard/Share';
import Invite from './pages/main/Invite';
import MyDashboard from './pages/dashboard/MyDashboard';


function App() {

  const orderInfo = {
    confirmationNumber: "345678908876",
    orderDate: "February 27, 2025",
    email: "aasaa87@gmail.com",
  };

  const accountInfo = {
    ibaId: "10656408",
    name: "Amazon",
    email: "xsvfd88@gmail.com",
    phone: "2064688695",
  };

  const cartItems = [
    { id: 1, name: "Welcome Kit", price: "$80", quantity: 2, image: "../images/product-img-2.webp" },
    { id: 2, name: "Welcome Kit", price: "$80", quantity: 2, image: "../images/product-img-2.webp" },
    { id: 3, name: "Welcome Kit", price: "$80", quantity: 2, image: "../images/product-img-2.webp" },
  ];

  const summary = {
    totalItems: 6,
    totalPrice: "$342.34",
    subtotal: "$500.34",
    shipping: "Free",
    tax: "￥0",
    totalOrder: "￥700.00",
    totalVolume: 88,
  };


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/joinus' element={<JoinUsePage />} />

        {/* Product pages */}
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product-color" element={<ProductPageColor />} />
        <Route path="/product-size" element={<ProductPageSize />} />
        <Route path="/product-egift" element={<ProductPageEgift />} />
        <Route path="/product-all" element={<ProductPageAll />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="/customer-signin" element={<CustomerSignin />} />

        <Route path="/order-confirmation" element={
          <OrderConfirmation
            isCongratulations={false}
            orderInfo={orderInfo}
            cartItems={cartItems}
            summary={summary}
          />
        } />
        <Route path="/congratulations" element={<OrderConfirmation
          isCongratulations={true}
          orderInfo={orderInfo}
          accountInfo={accountInfo}
          cartItems={cartItems}
          summary={summary}
        />} />

        {/* SignUp */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup-iba" element={<SignupPageIBA />} />
        <Route path="/signup-influencer" element={<SignupInfluencer />} />
        <Route path="/signup-process" element={<SignupProcess />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout-review" element={<CheckoutReviews />} />

        {/* Sign in Page Switch mode here */}

        <Route path="/signin" element={<SigninPage method="phone" />} />
        <Route path="/signin-with-email" element={<SigninPage method="email" />} />
        <Route path="/signin-with-passcode" element={<SigninPage method="passcode" />} />

        {/* Here's Dynamicall changeable for the welcome Email for signup and Welcome email for Order */}
        <Route path="/welcome-email" element={<WelcomeEmailPage userName='Mahabur' userId='58712' emailType='signup' /* emailtype='order' */ />} />


        {/* Enrollment */}
        <Route path='/personal-enrollment' element={<PersonallyEnrolled />}></Route>
        <Route path='/associate-council' element={<AssociateCouncil />}></Route>
        <Route path='/ewallet-login' element={<EwalletLogin />}></Route>
        <Route path='/enhancement' element={<Enhancement />}></Route>
        <Route path='/elite' element={<IparElite />}></Route>
        <Route path='/elite-journey' element={<IparEliteJourney />}></Route>
        <Route path='/elite-doctor' element={<IparEliteDoctor />}></Route>
        <Route path='/ipar-user-info' element={<IparUserInfo />}></Route>
        <Route path='/upline' element={<UplineLeaderPlacementPage />}></Route>
        <Route path='/forms' element={<FormsAndDocuments />}></Route>
        <Route path='/resource-center-login' element={<ResourceCenterLogin />}></Route>
        <Route path='/rankup-report-deca' element={<RankUpReportDeca />}></Route>
        <Route path='/rankup-report-month' element={<RankUpReportMonth />}></Route>
        
        {/* Subscription */}
        <Route path='/subscription' element={<SubscriptionPc />}></Route>
        <Route path='/subscription-order' element={<SubscriptionOrder />}></Route>
        <Route path='/subscription-product-all' element={<SubscriptionProductAll />}></Route>
        <Route path='/subscription-cart' element={<SubscriptionCart />}></Route>
        <Route path='/subscription-order-history' element={<SubscriptionOrderHistory />}></Route>

        {/* Dasboard Report */}

        <Route path='/business-report' element={<BusinessReport />}></Route>
        <Route path='/performance' element={<Performance />}></Route>
        <Route path='/qualification' element={<Qualification />}></Route>
        <Route path='/monthly-report' element={<MonthlyReport />}></Route>
        <Route path='/enrollment-report' element={<EnrollmentReport />}></Route>
        <Route path='/order-history-report' element={<OrderHistoryReport />}></Route>
        <Route path='/coupons' element={<Coupons />}></Route>
        <Route path='/performance-report' element={<PerformanceReport />}></Route>
        <Route path='/volume-report' element={<VolumeReport />}></Route>
        <Route path='/payment-statement' element={<PaymentStatement />}></Route>
        <Route path='/website-setting' element={<WebsiteSetting />}></Route>
        <Route path='/manage-profiles' element={<ManageProfiles />}></Route>
        <Route path='/ewallet' element={<EWallet />}></Route>
        <Route path='/resources' element={<Resources />}></Route>
        <Route path='/dashboard' element={<MyDashboard />}></Route>
        
        <Route path='/resources-faq' element={<ResourcesFaq />}></Route>
        <Route path='/resources-contact' element={<ResourcesContacts />}></Route>
        <Route path='/library' element={<Library />}></Route>
        <Route path='/enrollment-network' element={<EnrollmentNetworkView />}></Route>
        <Route path='/membership' element={<Membership />}></Route>
        <Route path='/share' element={<Share />}></Route>
        <Route path='/invite' element={<Invite />}></Route>

        {/* Optionally add a 404 Not Found route */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



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


        {/* Optionally add a 404 Not Found route */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

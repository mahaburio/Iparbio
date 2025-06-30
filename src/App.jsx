import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './pages/main/Homepage';
import JoinUsePage from './pages/main/JoinUs';

// ProductPages
import ProductPage from './pages/main/ProductPage';
import ProductPageColor from './pages/main/ProductPage-Color';
import ProductPageSize from './pages/main/ProductPage-Size';
import ProductPageEgift from './pages/main/ProductPage-Egift';
import ProductPageAll from './pages/main/ProductPage-All';
import CustomerSignin from './pages/main/CustomerSignin';
import OrderConfirmation from './pages/main/OrderConfirmation';


// SIgnUp Pages
import SignupPage from './pages/signup/Signup';
import SignupPageIBA from './pages/signup/SignupIBA';
import SignupInfluencer from './pages/signup/SignupInfluencer';

import SubscriptionShop from './pages/signup/SubscriptioShop';

import SigninPage from './pages/signup/Signin';
import WelcomeEmailPage from './pages/signup/WelcomeEmail';


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
        <Route path="/subscription-shop" element={<SubscriptionShop />} />

        {/* Sign in Page Switch mode here */}

        <Route path="/signin" element={<SigninPage method="phone" />} />
        <Route path="/signin-with-email" element={<SigninPage method="email" />} />
        <Route path="/signin-with-passcode" element={<SigninPage method="passcode" />} />

        {/* Here's Dynamicall changeable for the welcome Email for signup and Welcome email for Order */}
        <Route path="/welcome-email" element={<WelcomeEmailPage userName='Mahabur' userId='58712' emailType='signup' /* emailtype='order' */ />} />




        {/* Optionally add a 404 Not Found route */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React, { useState } from 'react'
import CheckoutWrapper from '../../components/signup-page/CheckoutWrapper'
import { Header } from '../../components'
import MainWrapper from '../../components/common/Mainwrapper'
import Footer from '../../components/footer/footer'
import CartItem from '../../components/product-page/CartItem'

import { CartSummary, PromoCode } from '../../components/product-page/CartSummery'
import UserCard from '../../components/signup-page/Checkout/UserDetails'
import Reviews from '../../components/signup-page/Checkout/Reviews'

const Checkout = () => {
  const [showReviewPage, setShowReviewPage] = useState(false);
  const [startStep, setStartStep] = useState(1); // Default is Contact

  const [cartItems] = useState([
    {
      id: 1,
      name: "Welcome Kit",
      price: "$80",
      quantity: 2,
      image: '../images/product-img-2.webp',
      itemCode: "105",
      showControls: false,

    },
    {
      id: 2,
      name: "Balance",
      price: "$80",
      quantity: 2,
      image: '../images/product-img-2.webp',
      itemCode: "103/500ml",
      showControls: false,

    },
    {
      id: 3,
      name: "Lipstick",
      price: "$80",
      quantity: 2,
      image: '../images/product-img-2.webp',
      itemCode: "262/No5",
      showControls: false,

    },

    {
      id: 4,
      name: "Lipstick",
      price: "$200",
      quantity: 1,
      image: '../images/product-img-1.webp',
      itemCode: "103/500ml",
      showControls: false,

    },
  ]);

  return (
    <MainWrapper>
      <div className='signup_page checkout-page product_checkout'>
        <Header logoSrc={'../svg/ipar-logo-checkout.svg'} showSearch={false} tabsMenuList={false} ReturnToCart={true} />
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

                {!showReviewPage ? (
                  <CheckoutWrapper
                    onReviewClick={() => setShowReviewPage(true)}
                    startStep={startStep}
                  />
                ) : (
                  <Reviews
                    onBack={(step) => {
                      setStartStep(step);
                      setShowReviewPage(false);
                    }}
                  />
                )}
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

                  <div className="all-cart-items mt-3">
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
                    <button className="black-btn placeOrder">
                      <a href="/order-confirmation">Place Order</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer footerOnlyDesc={true} footerDefault={false} />
    </MainWrapper>
  )
}

export default Checkout

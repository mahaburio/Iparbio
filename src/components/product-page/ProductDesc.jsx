import React from "react";

const productDescData = {
  description: `As one of Ipar's classic products, the Shah Monzej™ represents a pinnacle of innovation where ancient wisdom meets modern science. The 2025 version of Shah Monzej™ features the Balance™ 7-Day Rebalance & Detox system, which focuses on optimizing hormone balance and detoxification.

Inspired by the time-tested Monzej-Mocil theory, this product offers a dual-action formula supported by scientific research. The 2025 Balance™ 7-Day system uniquely combines our Cleansing+ Blend (1000 mg) and Digestive+ Blend (200 mg) to provide exceptional support for hormone balance, digestive health, and detoxification.`,
  image: '../images/better-ad.webp',
};

export default function ProductDescSection() {
  const { description, image } = productDescData;

  return (
    <section className="product-desc-section">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7 d-flex align-items-center">
            <p>{description}</p>
          </div>
          <div className="col-xl-5 col-lg-5 mt-xl-0 mt-lg-0 mt-md-5 mt-sm-5 mt-4">
            <div className="product-add">
              <img className="w-100" src={image} alt="Product Description Visual" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

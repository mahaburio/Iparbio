import React, {useState} from "react";
import Modal from "../../common/PopupModal";
import AddPaymentContent from "../../common/AddPaymentContent";



const PaymentMethod = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <div>
      <div className="order-w-details">
        <div className="payment-mt mt-3">
          <h3 className="ck-tt d-flex justify-content-between align-items-center pe-lg-5 pe-md-4 pe-sm-3 pe-2">
            <span>payment method</span>
            <span className="av-bl">
              Your available balance: <strong>$ 200</strong>
            </span>
          </h3>

          <div className="ck-ct gf-ct py-2 pb-3 px-2">
            <div className="gf-cd-ct d-flex flex-lg-row flex-md-row flex-sm-column flex-column align-items-lg-center align-items-md-center align-items-sm-start align-items-start gap-3">
              <div className="img">
                <img src="../images/ipar-gift-card.webp" alt="" />
              </div>
              <div className="gift-dt">
                <div>Got a reason to celebrate?</div>
                <div>Select, Send – It’s that simple!</div>
                <i>Add Ipar eGift card</i>
              </div>
            </div>

            <div className="promo-cd mt-2">
              <div className="promo-body d-flex flex-lg-row flex-md-row flex-sm-column flex-column gap-3 align-items-lg-center align-items-md-center align-items-sm-start align-items-start justify-content-between mt-2">
                <span className="pr-tt">
                  Enter a gift card, voucher or promotional code
                </span>
                <div className="d-flex align-items-center gap-3">
                  <input type="text" />
                  <button className="black-btn">Apply</button>
                </div>
              </div>
            </div>
          </div>

          <div className="ck-ct-dt mt-2 ps-3 card-tt-header d-flex align-items-center justify-content-between">
            <span className="card-type">Your credit and debit cards</span>
            <span className="card-name">Name on card</span>
            <span className="card-exp">Expiry</span>
          </div>

          <div className="ck-ct-dt ps-3 mt-2 d-flex align-items-lg-center align-items-md-center gap-2 justify-content-between">
            <div className="checkmark-opt card-type mt-1 d-flex align-items-start gap-2">
              <div className="bullet-input mt-1"></div>
              <label>Visa ending in 3422</label>
            </div>
            <div className="card-name">Amazon Amazon</div>
            <div className="date card-exp">03/2029</div>
          </div>

          <div className="ck-ct-dt ps-3 mt-2 d-flex align-items-lg-center align-items-md-center gap-2 justify-content-between">
            <div className="checkmark-opt card-type mt-1 d-flex align-items-start gap-2">
              <div className="bullet-input active-bullet mt-1"></div>
              <label>Master ending in 3422</label>
            </div>
            <div className="card-name">Amazon Amazon</div>
            <div className="date card-exp">03/2029</div>
          </div>

          <div
            className="add-credit mt-3 ps-3"
            onClick={() => setIsModalOpen(true)}
          >
            <span>
              + Add a credit or debit card
              <i className="ri-arrow-right-s-line"></i>
            </span>
          </div>
        </div>
      </div>

      {/* payment Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddPaymentContent />
      </Modal>
    </div>
  );
};

export default PaymentMethod;

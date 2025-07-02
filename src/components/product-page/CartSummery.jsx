import { useState } from "react";


export const CartSummary = ({
  title = 'Cart Summary',
  summaryItems = [],
  currency = 'USD'
}) => {
  return (
    <div className="summary">
      <div className="title">{title}</div>
      <div className="sm-desc mt-3 pb-3">
        {summaryItems.map(({ id, title, amount, isTotal, hide }) => {
          if (hide) return null;

          return (
            <div
              key={id}
              className={`item ${isTotal ? 'total-item total-amount pt-2' : ''}`}
            >
              <span>{title}</span>
              <span>
                {amount.toLocaleString(undefined, {
                  style: 'currency',
                  currency,
                })}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};


// Promo Code Initialize HEre

export const PromoCode = ({volumne}) => {

  // Handle promo code toggle (like your promo section in Congratulations)
  const [showPromo, setShowPromo] = useState(false);
  const [promoCode, setPromoCode] = useState("");

  const togglePromo = () => setShowPromo((prev) => !prev);



  return (
    <div>

      {volumne && (
        <div className="volume item">
          <span>Total Volume</span>
          <span>88</span>
        </div>
      )}
      <div className="promo-cd mt-2">
        <div
          className="promo-header d-flex align-items-center justify-content-between"
          onClick={togglePromo}
          style={{ cursor: "pointer" }}
        >
          <span className="pr-tt">Enter a e-gift card or promo code</span>
          <span className={`arrow ${showPromo ? "rotate" : ""}`}>
            <i className="ri-arrow-down-s-line"></i>
          </span>
        </div>

        <div
          id="promoBody"
          className={`promo-body d-flex gap-4 align-items-center mt-2 ${showPromo ? "activePromoBody" : ""
            }`}
        >
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter code"
          />
          <button
            className="black-btn"
            onClick={() => alert(`Apply code: ${promoCode}`)}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  )
}
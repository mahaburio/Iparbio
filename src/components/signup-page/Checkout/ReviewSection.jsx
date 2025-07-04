import React from "react";
import SectionWrapper from "./SectionWrapper";

const ReviewSection = ({ active, onEdit, completed, onReviewClick }) => {
  return (
    <div className="review-pl mt-4">
      <SectionWrapper
        title="Review & Place Order"
        active={active}
        onEdit={onEdit}
        linkText="Review"
        linkHref="#"
        completed={completed}
        onLinkClick={onReviewClick} // this triggers the parent toggle
      >
        <div className="ck-ct py-2 pb-3 px-2">
          <strong>
            Please review your order info before finalizing your purchase.
          </strong>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ReviewSection;


import React, { useState, useRef, useEffect } from "react";

export default function FaqSection({ faqData = [], showHeader, faqFooter='true' }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef([]);

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.maxHeight = activeIndex === index ? ref.scrollHeight + "px" : "0px";
      }
    });
  }, [activeIndex]);

  const toggleIndex = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-section">
      <div className="container">
        {showHeader && (
          <div className="header-logo">
            <img src="/svg/microscope.svg" alt="Microscope" />
            <p className="desc">
              Science Behind <br />
              the <a href="#">Balance</a>
            </p>
          </div>
        )}

        <div className="faq-items">
          {faqData.map((item, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
            >
              <div className="header" onClick={() => toggleIndex(index)}>
                <div className="name">{item.title}</div>
                <div className="icon">{activeIndex === index ? "−" : "+"}</div>
              </div>

              <div
                className="body"
                ref={(el) => (contentRefs.current[index] = el)}
                style={{
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                  maxHeight: "0px",
                }}
              >
                <div className="content-inner p-2">
                  {item.paragraphs.map((p, i) => (
                    <p key={i} style={{ marginBottom: "1rem" }}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {faqFooter && (
          <>
            <div className="see-full mt-4">
              <p className="title-txt">See full list of ingredients</p>
              <div className="desc-txt">
                *These statements have not been evaluated by the Food and Drug
                Administration. These products are not intended to diagnose,
                treat, cure, or prevent any disease.
              </div>
            </div>

            <div className="faq-footer text-center">
              <div className="img d-flex justify-content-center">
                <img className="w-75 m-auto" src="../images/science.webp" alt="" />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

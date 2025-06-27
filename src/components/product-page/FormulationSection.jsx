import React, { useState, useRef, useEffect } from "react";

const formulationData = [
{
text: `Science-Driven Detoxification: The Cleansing+ Blend combines natural botanicals like Senna Leaf and Aloe Vera with scientifically backed fibers such as Psyllium Husk to support the body's natural detoxification processes. Research indicates that these ingredients can help reduce toxic buildup while promoting regular bowel movements.*`,
},
{
text: `Digestive Comfort & Enzyme Efficiency: Papaya Leaf Extract, with its papain enzymes, works alongside Fennel Seed to alleviate bloating and improve digestive efficiency, ensuring nutrient bioavailability and comfort.*`,
},
{
text: `Digestive Comfort & Enzyme Efficiency: Papaya Leaf Extract, with its papain enzymes, works alongside Fennel Seed to alleviate bloating and improve digestive efficiency, ensuring nutrient bioavailability and comfort.*`,
},
{
text: `Digestive Comfort & Enzyme Efficiency: Papaya Leaf Extract, with its papain enzymes, works alongside Fennel Seed to alleviate bloating and improve digestive efficiency, ensuring nutrient bioavailability and comfort.*`,
},
];

export default function FormulationSection() {
const [activeIndex, setActiveIndex] = useState(null);
const contentRefs = useRef([]);

useEffect(() => {
contentRefs.current.forEach((ref, index) => {
if (ref) {
if (activeIndex === index) {
ref.style.maxHeight = ref.scrollHeight + "px";
} else {
ref.style.maxHeight = "50px";
}
}
});
}, [activeIndex]);

const toggle = (index) => {
setActiveIndex((prev) => (prev === index ? null : index));
};

return (
<section className="formulation-section">
  <div className="container">
    <div className="row">
      {/* Left Text Section */}
      <div className="scroll__left col-xl-4 col-lg-4">
        <h4>Formulation</h4>
        <p className="mt-4">
          Crafted to address the interconnectedness of hormone balance,
          digestive health, and detoxification, Balance™ 7-Day Rebalance
          leverages advanced science and clinically validated ingredients
          to deliver transformative health benefits*
        </p>
        <div className="company-logo mt-4">
          <img src="/images/Intertek-Logo.webp" alt="Intertek Certified" />
        </div>
      </div>

      {/* Right Accordion Section */}
      <div className="col-xl-8 col-lg-8 mt-xl-0 mt-lg-0 mt-md-5 mt-sm-5 mt-4">
        {formulationData.map((item, index) => (
        <div className="frm-wrapper" key={index}>
          <div className="capsul-img">
            <img src="/svg/capsule.svg" alt="Capsule Icon" />
          </div>
          <div className={`frm-item ${activeIndex===index ? "shownFullText" : "" }`} onClick={()=> toggle(index)}
            >
            <div className="frm-txt" ref={(el)=> (contentRefs.current[index] = el)}
              style={{
                      overflow: "hidden",
                      transition: "max-height 0.4s ease",
                      maxHeight: "60px",
                    }}
              >
              {item.text}
            </div>
            <div className="frm-plus-icon">
              {activeIndex === index ? "−" : "+"}
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  </div>
</section>
);
}
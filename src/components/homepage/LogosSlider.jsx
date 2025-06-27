import React, { useState } from "react";

const logoItems = [
{ src: "/svg/eac.svg", text: "Invented & Formulated in the USA" },
{ src: "/svg/cruelty.svg", text: "Invented & Formulated in the USA" },
{ src: "/svg/iso.svg", text: "Invented & Formulated in the USA" },
{ src: "/svg/inj.svg", text: "Invented & Formulated in the USA" },
{ src: "/svg/formula.svg", text: "Invented & Formulated in the USA" },
{ src: "/svg/tube.svg", text: "Invented & Formulated in the USA" },
{ src: "/svg/drop.svg", text: "Invented & Formulated in the USA" },
];

export default function LogoSlider() {
const [paused, setPaused] = useState(false);

return (
<section className="logos-slider">
  <div className="container">
    <div className="pause-icon text-end pe-4">
      <button id="playPauseBtn" onClick={()=> setPaused(!paused)}>
        <i className={`ri-pause-line ${paused ? "d-none" : "" }`} id="pauseIcon"></i>
        <i className={`ri-play-fill ${paused ? "" : "d-none" }`} id="playIcon"></i>
      </button>
    </div>
    <div className="logos mt-4 mt-sm-5 mt-md-5 mt-lg-5">
      <div className={`logos-slide ${paused ? "paused" : "" }`}>
        {[...logoItems, ...logoItems].map((item, index) => (
        <div className="slide-item" key={index}>
          <div className="img">
            <img src={item.src} alt={item.text} />
          </div>
          <div className="dsc">{item.text}</div>
        </div>
        ))}
      </div>
    </div>
  </div>
</section>
);
}
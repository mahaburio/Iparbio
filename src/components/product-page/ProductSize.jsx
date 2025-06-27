import React, { useState } from "react";
import { PiHandSoapLight } from "react-icons/pi";


const ProductSizePickerCard = ({ sizes = [] }) => {
const [selectedIndex, setSelectedIndex] = useState(null);

const handleSelect = (index) => {
setSelectedIndex(index);
};

return (
<div className="size-group mt-2">
  <strong>Size Options:</strong>
  <div className="size-container mt-3">
    {sizes.map((size, i) => {
    const isActive = selectedIndex === i;
    return (
    <div key={i} className={`size-opt ${isActive ? "activeSize" : "" }`} onClick={()=> handleSelect(i)}
      >
      <div className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="21.781" height="40.216" viewBox="802.252 651.685 21.781 40.216">
          <g data-name="Group 8277">
            <g data-name="Retângulo 149676">
              <g data-name="Vector" fill={isActive ? "var(--green-color)" : "var(--gray-100)" }>
                <path d="M813.576 666.707c4.85 0 8.78 3.713 8.78 8.293 0 4.58-3.93 8.294-8.78 8.294-4.849 0-8.78-3.713-8.78-8.294 0-4.58 3.931-8.293 8.78-8.293Z" fill="#95c12b" fill-rule="evenodd"></path>
                <path d="M8.78 0c4.85 0 8.78 3.713 8.78 8.294 0 4.58-3.93 8.293-8.78 8.293-4.849 0-8.78-3.713-8.78-8.293C0 3.714 3.931 0 8.78 0Z" stroke-linejoin="round" stroke-linecap="round" stroke="#000" fill="transparent" transform="matrix(.94305 0 0 .93971 805.296 667.207)"></path>
              </g>
              <g data-name="Vector">
                <path d="M813.576 667.207c4.573 0 8.28 3.489 8.28 7.793 0 4.305-3.707 7.794-8.28 7.794-4.573 0-8.28-3.49-8.28-7.794 0-4.304 3.707-7.793 8.28-7.793Z" fill="#fff" fill-rule="evenodd"></path>
                <path d="M813.576 667.207c4.573 0 8.28 3.489 8.28 7.793 0 4.305-3.707 7.794-8.28 7.794-4.573 0-8.28-3.49-8.28-7.794 0-4.304 3.707-7.793 8.28-7.793Z" stroke-linejoin="round" stroke-linecap="round" stroke="#000" fill="transparent"></path>
              </g>
            </g>
            <g data-name="Group 8274" transform="translate(802.252 651.682)" clip-path="url(&quot;#a&quot;)">
              <path d="M20.13 9.108H16.5V6.074h-2.64V2.28h.99c.437 0 .78-.333 1.144-.684.424-.41.862-.834 1.496-.834 1.166 0 2.395 1.392 2.407 1.406l.468-.537C20.306 1.566 18.93.003 17.49.003c-.875 0-1.454.56-1.92 1.012-.282.271-.524.506-.72.506H5.61v.759h2.311v3.794h-2.64v3.034H1.65C.74 9.108 0 9.959 0 11.006v27.316c0 1.046.74 1.897 1.65 1.897h18.48c.911 0 1.65-.85 1.65-1.897V11.006c0-1.047-.739-1.898-1.65-1.898M8.58 2.28h4.62v3.794H8.58V2.28ZM5.94 6.833h9.9v2.275h-9.9V6.833Zm15.18 31.49c0 .626-.444 1.137-.99 1.137H1.65c-.545 0-.99-.51-.99-1.138V11.006c0-.627.445-1.14.99-1.14h18.48c.546 0 .99.513.99 1.14v27.316Z" fill-rule="evenodd" data-name="Path 9001"></path>
            </g>

          </g>
          <defs>
            <clipPath id="a">
              <path d="M0 0h21.78v40.223H0V0z" data-name="Rectangle 3659"></path>
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="size-det">
        <strong>{size.fl}</strong>
        <br />
        <span>{size.ml}</span>
      </div>
    </div>
    );
    })}
  </div>
</div>
);
};

export default ProductSizePickerCard;
import React, { useEffect, useRef, useState } from "react";
import "./DualRangeSlider.css"; // Make sure styles match updated class names

const DualRangeSlider = ({
  min = 0,
  max = 6000,
  step = 5,
  initialFrom = 500,
  initialTo = 5000,
}) => {
  const [from, setFrom] = useState(initialFrom);
  const [to, setTo] = useState(initialTo);
  const rangeTrack = useRef(null);

  const updateTrackFill = () => {
    const fromPercent = ((from - min) / (max - min)) * 100;
    const toPercent = ((to - min) / (max - min)) * 100;
    rangeTrack.current.style.background = `linear-gradient(
      to right,
      #ccc 0%,
      #ccc ${fromPercent}%,
      #95c12b ${fromPercent}%,
      #95c12b ${toPercent}%,
      #ccc ${toPercent}%,
      #ccc 100%
    )`;
  };

  const handleFromChange = (e) => {
    const val = Math.min(Number(e.target.value), to - step);
    setFrom(val);
  };

  const handleToChange = (e) => {
    const val = Math.max(Number(e.target.value), from + step);
    setTo(val);
  };

  const getTooltipPosition = (val) => {
    const percent = ((val - min) / (max - min)) * 100;
    const offset = ((percent - 50) / 50) * 15;
    return `calc(${percent}% - ${offset}px)`;
  };

  useEffect(() => {
    updateTrackFill();
  }, [from, to]);

  return (
    <div className="dual-range-slider">
      <div className="dual-sliders-control">
        <div
          className="dual-slider-tooltip"
          style={{ left: getTooltipPosition(from) }}
        >
          {from}
        </div>
        <div
          className="dual-slider-tooltip"
          style={{ left: getTooltipPosition(to) }}
        >
          {to}
        </div>

        <input
          type="range"
          ref={rangeTrack}
          min={min}
          max={max}
          value={to}
          className="dual-range-track"
          readOnly
        />

        <input
          type="range"
          className="dual-range-thumb dual-from"
          min={min}
          max={max}
          step={step}
          value={from}
          onChange={handleFromChange}
        />
        <input
          type="range"
          className="dual-range-thumb dual-to"
          min={min}
          max={max}
          step={step}
          value={to}
          onChange={handleToChange}
        />

        <div className="dual-min-scale">{min}</div>
        <div className="dual-max-scale">{max}</div>
      </div>
    </div>
  );
};

export default DualRangeSlider;

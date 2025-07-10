import React, { useEffect, useImperativeHandle, useRef, forwardRef } from "react";
import Flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import { FaCalendarDays } from "react-icons/fa6";

const DatePicker = forwardRef(({ value, onChange, arrowIcon = false, placeholder = "Select date", CalendarIcon, id, className = "" }, ref) => {
  const inputRef = useRef();

  useEffect(() => {
    const picker = Flatpickr(inputRef.current, {
      dateFormat: "Y-m-d",
      allowInput: true,
      defaultDate: value,
      onChange: ([date]) => onChange?.(date),
    });

    return () => picker.destroy();
  }, [value, onChange]);

  // Expose the input and flatpickr instance to parent
  useImperativeHandle(ref, () => ({
    open: () => inputRef.current._flatpickr.open(),
  }));

  return (
    <>
      <div className="d-flex align-items-center gap-2">
        <div className="d-flex align-items-center justify-content-between position-relative">
          <input type="text" ref={inputRef} placeholder={placeholder} className={className} id={id} readOnly />
          {arrowIcon && (
            <div className="span position-absolute" style={{ right: '6px', fontSize: '24px', color: 'var(--gray-100)' }}>
  <i className="ri-arrow-down-s-line"></i>
</div>
          )}
        </div>
        {CalendarIcon && (
          <span className="" onClick={() => inputRef.current._flatpickr.open()} >
            <FaCalendarDays fontSize={24} color="var(--green-color)" style={{ cursor: 'pointer' }} />
          </span>
        )}

      </div>
    </>
  );
});

export default DatePicker;
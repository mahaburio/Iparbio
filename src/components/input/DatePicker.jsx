import React, { useEffect, useImperativeHandle, useRef, forwardRef } from "react";
import Flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const DatePicker = forwardRef(({ value, onChange, placeholder = "Select date", id, className = "" }, ref) => {
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
<input type="text" ref={inputRef} placeholder={placeholder} className={className} id={id} readOnly />
);
});

export default DatePicker;
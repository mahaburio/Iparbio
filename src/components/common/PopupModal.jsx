import React, { useEffect, useRef, useState } from "react";
import "../../styles/components/modal.css";

const Modal = ({ isOpen, onClose, children, className = "" }) => {
  const [visible, setVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else if (visible) {
      setIsClosing(true);
      setTimeout(() => {
        setVisible(false);
        setIsClosing(false);
      }, 100); // match CSS animation duration
    }

    return () => document.body.classList.remove("modal-open");
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose?.();
    }
  };

  if (!visible) return null;

  return (
    <div className="custom-modal-backdrop" onClick={handleBackdropClick}>
      <div
        className={`custom-modal ${className} ${isClosing ? "fade-out" : "fade-in"}`}
        ref={modalRef}
      >
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

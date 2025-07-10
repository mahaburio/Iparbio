import React, { useState } from "react";
import Modal from "../common/PopupModal";

const WriteMyStoryModal = ({ isOpen, onClose, initialValue = "", onSave }) => {
  const [storyText, setStoryText] = useState(initialValue);

  const handleSave = () => {
    onSave(storyText);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="writeMyStory medium-modal">
      <div className="modal-body">
        <textarea value={storyText}
          onChange={(e) => setStoryText(e.target.value)}
          rows={6}
          className="form-control" placeholder="Write your Ipar story here. Be clear, engaging, and customer-focused. Think about what your visitors would want to know about you or Ipar. How can you connect with their needs and interests? (&gt;500 ) "></textarea>
        <div className="btn-sec text-end mt-3">
          <button className="green-btn" id="saveBtn" onClick={handleSave}>Save</button>
        </div>


      </div>
    </Modal >
  );
};

export default WriteMyStoryModal;

import React, { useRef, useState, useCallback } from "react";
import Modal from "./PopupModal";
import Cropper from "react-easy-crop";
import Slider from "@mui/material/Slider";
import getCroppedImg from "../../utils/CropImage";

const UploadImageModal = ({ isOpen, onClose, onFileSelect }) => {
  const fileInputRef = useRef();
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((_, croppedPixels) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageDataUrl = await readFile(file);
      setImageSrc(imageDataUrl);
    }
  };

  const readFile = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result));
      reader.readAsDataURL(file);
    });
  };

  const showFileDialog = () => {
    fileInputRef.current.click();
  };

  const handleCropDone = async () => {
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      onFileSelect?.(croppedImage); // Pass cropped blob or base64
      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="uploadFile ">
      <div className="modal-header ">
        <h5>Image Upload</h5>
      </div>
      <div className="modal-body pt-4">
        {!imageSrc ? (
          <>
            <p>
              This image will be used for recognition purposes and your Ipar Website.
            </p>
            <div className="upload-container">
              <input
                type="file"
                hidden
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              <button className="upload-btn" onClick={showFileDialog}>
                Upload File
              </button>
              <p>OR</p>
              <div
                className="drop-area"
                onDragOver={(e) => e.preventDefault()}
                onDrop={async (e) => {
                  e.preventDefault();
                  const file = e.dataTransfer.files[0];
                  const imageDataUrl = await readFile(file);
                  setImageSrc(imageDataUrl);
                }}
              >
                + Drag and Drop an Image
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="crop-container" style={{ position: "relative", width: "100%", height: 300 }}>
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                aspect={1} // 👈 square crop
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>
            <div className="mt-3">
              <Slider
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                onChange={(e, z) => setZoom(z)}
              />
            </div>
            <div className="text-end mt-4">
              <button className="tsp-btn me-2" onClick={() => setImageSrc(null)}>
                Cancel
              </button>
              <button className="black-btn black-btn-sm px-4" onClick={handleCropDone}>
                Save Image
              </button>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

export default UploadImageModal;

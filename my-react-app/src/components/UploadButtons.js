import React, { useRef } from 'react';
import './UploadButtons.css';

const UploadButtons = () => {
  const imageInputRef = useRef(null);
  const printInputRef = useRef(null);

  const handleButtonClick = (inputRef) => {
    inputRef.current.click();
  };

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      console.log(`Selected ${type} file:`, file.name);
      // Handle the file upload here
    }
  };

  return (
    <div className="upload-buttons-container">
      <input
        type="file"
        accept=".jpg,.jpeg,.png"
        ref={imageInputRef}
        onChange={(e) => handleFileChange(e, 'image')}
        style={{ display: 'none' }}
      />
      <input
        type="file"
        accept=".jpg,.jpeg,.png"
        ref={printInputRef}
        onChange={(e) => handleFileChange(e, 'print')}
        style={{ display: 'none' }}
      />
      <button 
        className="upload-button"
        onClick={() => handleButtonClick(imageInputRef)}
      >
        Upload your image
      </button>
      <button 
        className="upload-button"
        onClick={() => handleButtonClick(printInputRef)}
      >
        Upload print image
      </button>
    </div>
  );
};

export default UploadButtons;

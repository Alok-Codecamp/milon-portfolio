
import React from 'react';
import './ImageViewer.css'; // Create a separate CSS file for styling

const ImageViewer = ({ src, alt, onClose }) => {
  return (
    <dialog className="image-viewer" open>
      <div className="image-viewer-content">
        <button className="close-button" onClick={onClose}>✕</button>
        <img src={src} alt={alt} className="full-screen-image" />
      </div>
    </dialog>
  );
};

export default ImageViewer;

import React, { useState } from "react";
import "./Modal.css";

const DeleteModal = ({ isOpen, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <button className="close-button" onClick={handleClose}>
                &times;
              </button>
            </div>
            <div className="modal-content">
              <div className="modal-text">
                Do you want to delete this content?
              </div>
              <div className="buttons">
                <button className="cancel-btn" onClick={onClose}>Cancel</button>
                <button className="delete-btn">Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteModal;

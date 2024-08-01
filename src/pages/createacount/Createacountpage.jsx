import React, { useState, useEffect, useRef } from "react";

export const CreateAccount = ({ onClose }) => {
  const modalRef = useRef(null);

  const handleCloseModal = () => {
    onClose();
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="modal-overlay visible">
      <div className="modal-content" ref={modalRef}>
        <span className="close-button" onClick={handleCloseModal}>
          &times;
        </span>
        <div className="create-account-dropdown">
          <div className="dropdown-item">
            <label htmlFor="new-id">New ID</label>
            <input type="text" id="new-id" name="new-id" />
          </div>
          <div className="dropdown-item">
            <label htmlFor="new-password">New Password</label>
            <input type="password" id="new-password" name="new-password" />
          </div>
          <div className="dropdown-item">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
            />
          </div>
          <div className="dropdown-item">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="dropdown-item">
            <button className="create-account-button">Create Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

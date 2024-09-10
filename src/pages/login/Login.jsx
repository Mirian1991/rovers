import React, { useState, useEffect, useRef } from "react";
import loginicon from "../../global/Images/headericons/login.svg.svg";
import { CreateAccount } from "../createacount/Createacountpage";

export const Login = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isCreateAccountVisible, setCreateAccountVisible] = useState(false);
  const modalRef = useRef(null);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleOpenCreateAccount = () => {
    setModalVisible(false);
    setCreateAccountVisible(true);
  };

  const handleCloseCreateAccount = () => {
    setCreateAccountVisible(false);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    if (isModalVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalVisible]);

  return (
    <div className="login-container">
      <div className="login-flex" onClick={handleOpenModal}>
        <img src={loginicon} alt="login" width="20px" height="20px" />
        <div className="login-button">Login</div>
      </div>
      <div className={`modal-overlay ${isModalVisible ? "visible" : ""}`}>
        <div className="modal-content" ref={modalRef}>
          <span className="close-button" onClick={handleCloseModal}>
            &times;
          </span>
          <div className="login-dropdown">
            <div className="dropdown-item">
              <label htmlFor="id">ID</label>
              <input type="text" id="id" name="id" />
            </div>
            <div className="dropdown-item">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
            </div>
            <div className="dropdown-item">
              <button className="sign-in-button">Sign In</button>
            </div>
            <div className="dropdown-item">
              <button
                className="create-account-button"
                onClick={handleOpenCreateAccount}
              >
                Create Account
              </button>
            </div>
            <button>forgot password ?</button>
          </div>
        </div>
      </div>
      {isCreateAccountVisible && (
        <CreateAccount onClose={handleCloseCreateAccount} />
      )}
    </div>
  );
};

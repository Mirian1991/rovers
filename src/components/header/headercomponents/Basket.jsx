import React, { useState, useEffect, useRef } from "react";
import basketicon from "../../../global/Images/headericons/basket.svg.svg";

export const Basket = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const offcanvasRef = useRef(null);

  const handleShow = () => setShowOffcanvas(true);
  const handleClose = () => setShowOffcanvas(false);

  useEffect(() => {
    const handleMouseLeave = () => {
      if (offcanvasRef.current) {
        offcanvasRef.current.scrollTop = 0;
      }
    };

    const offcanvasElement = offcanvasRef.current;
    if (offcanvasElement) {
      offcanvasElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (offcanvasElement) {
        offcanvasElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [showOffcanvas]);

  return (
    <>
      <div className="basket-main">
        <img src={basketicon} alt="basket" width="20px" height="20px" />
        <div className="basket-button" onClick={handleShow}>
          Basket
        </div>
      </div>

      <div
        ref={offcanvasRef}
        className={`offcanvas offcanvas-end ${showOffcanvas ? "show" : ""}`}
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        style={{ visibility: showOffcanvas ? "visible" : "hidden" }}
      >
        <div className="offcanvas-header border-bottom">
          <div className="text-start">
            <h5 id="offcanvasRightLabel" className="mb-0 fs-4">
              Shop Cart
            </h5>
            <small>Location in 382480</small>
          </div>
          <button
            type="button"
            className="btn-close text-reset"
            onClick={handleClose}
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="alert alert-danger" role="alert">
            You’ve got FREE delivery. Start checkout now!
          </div>
          <div>
            <div className="py-3">
              <ul className="list-group list-group-flush">
                <li className="list-group-item py-3 px-0 border-top">
                  <div className="row align-items-center">
                    <div className="col-2">
                      <img
                        src="assets/images/products/product-img-1.jpg"
                        alt="Ecommerce"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-5">
                      <h6 className="mb-0">Organic Banana</h6>
                      <span>
                        <small className="text-muted">.98 / lb</small>
                      </span>
                      <div className="mt-2 small">
                        <a href="#!" className="text-decoration-none">
                          <span className="me-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-trash-2"
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                          </span>
                          Remove
                        </a>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="input-group flex-nowrap justify-content-center">
                        <input
                          type="button"
                          value="-"
                          className="button-minus form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
                          data-field="quantity"
                        />
                        <input
                          type="number"
                          step="1"
                          max="10"
                          value="1"
                          name="quantity"
                          className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
                        />
                        <input
                          type="button"
                          value="+"
                          className="button-plus form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
                          data-field="quantity"
                        />
                      </div>
                    </div>
                    <div className="col-2 text-end">
                      <span className="fw-bold">$35.00</span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item py-3 px-0">
                  <div className="row align-items-center">
                    <div className="col-2">
                      <img
                        src="assets/images/products/product-img-2.jpg"
                        alt="Ecommerce"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-5">
                      <h6 className="mb-0">Fresh Garlic, 250g</h6>
                      <span>
                        <small className="text-muted">250g</small>
                      </span>
                      <div className="mt-2 small">
                        <a href="#!" className="text-decoration-none">
                          <span className="me-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-trash-2"
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                          </span>
                          Remove
                        </a>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="input-group flex-nowrap justify-content-center">
                        <input
                          type="button"
                          value="-"
                          className="button-minus form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
                          data-field="quantity"
                        />
                        <input
                          type="number"
                          step="1"
                          max="10"
                          value="1"
                          name="quantity"
                          className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
                        />
                        <input
                          type="button"
                          value="+"
                          className="button-plus form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
                          data-field="quantity"
                        />
                      </div>
                    </div>
                    <div className="col-2 text-end">
                      <span className="fw-bold">$20.97</span>
                      <span className="text-decoration-line-through text-muted small">
                        $26.97
                      </span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item py-3 px-0">
                  <div className="row align-items-center">
                    <div className="col-2">
                      <img
                        src="assets/images/products/product-img-3.jpg"
                        alt="Ecommerce"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-5">
                      <h6 className="mb-0">Fresh Onion, 1kg</h6>
                      <span>
                        <small className="text-muted">1 kg</small>
                      </span>
                      <div className="mt-2 small">
                        <a href="#!" className="text-decoration-none">
                          <span className="me-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-trash-2"
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                          </span>
                          Remove
                        </a>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="input-group flex-nowrap justify-content-center">
                        <input
                          type="button"
                          value="-"
                          className="button-minus form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
                          data-field="quantity"
                        />
                        <input
                          type="number"
                          step="1"
                          max="10"
                          value="1"
                          name="quantity"
                          className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
                        />
                        <input
                          type="button"
                          value="+"
                          className="button-plus form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
                          data-field="quantity"
                        />
                      </div>
                    </div>
                    <div className="col-2 text-end">
                      <span className="fw-bold">$8.99</span>
                      <span className="text-decoration-line-through text-muted small">
                        $10.99
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="offcanvas-footer border-top p-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="mb-0">Total:</h6>
            <h6 className="mb-0">$50.00</h6>
          </div>
          <a href="checkout.html" className="btn btn-primary w-100">
            Checkout
          </a>
        </div>
      </div>
    </>
  );
};

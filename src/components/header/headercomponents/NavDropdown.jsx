import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const NavDropdown = () => {
  const [dropdownState, setDropdownState] = useState({
    home: false,
    shop: false,
    stores: false,
    megaMenu: false,
    pages: false,
    account: false,
  });

  const handleMouseEnter = (menu) => {
    setDropdownState({ ...dropdownState, [menu]: true });
  };

  const handleMouseLeave = (menu) => {
    setDropdownState({ ...dropdownState, [menu]: false });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li
              className={`nav-item dropdown ${
                dropdownState.home ? "show" : ""
              }`}
              onMouseEnter={() => handleMouseEnter("home")}
              onMouseLeave={() => handleMouseLeave("home")}
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                aria-expanded={dropdownState.home}
              >
                Home
              </a>
              <ul
                className={`dropdown-menu ${dropdownState.home ? "show" : ""}`}
              >
                <li>
                  <a className="dropdown-item" href="index.html">
                    Home 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="pages/index-2.html">
                    Home 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="pages/index-3.html">
                    Home 3
                  </a>
                </li>
              </ul>
            </li>
            <li
              className={`nav-item dropdown ${
                dropdownState.shop ? "show" : ""
              }`}
              onMouseEnter={() => handleMouseEnter("shop")}
              onMouseLeave={() => handleMouseLeave("shop")}
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                aria-expanded={dropdownState.shop}
              >
                Shop
              </a>
              <ul
                className={`dropdown-menu ${dropdownState.shop ? "show" : ""}`}
              >
                <li>
                  <a className="dropdown-item" href="pages/shop-grid.html">
                    Shop Grid - Filter
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="pages/shop-grid-3-column.html"
                  >
                    Shop Grid - 3 column
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="pages/shop-list.html">
                    Shop List - Filter
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="pages/shop-filter.html">
                    Shop - Filter
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="pages/shop-fullwidth.html">
                    Shop Wide
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="pages/shop-single.html">
                    Shop Single
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="pages/shop-wishlist.html">
                    Shop Wishlist
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="pages/shop-cart.html">
                    Shop Cart
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="pages/shop-checkout.html">
                    Shop Checkout
                  </a>
                </li>
              </ul>
            </li>
            <li
              className={`nav-item dropdown ${
                dropdownState.stores ? "show" : ""
              }`}
              onMouseEnter={() => handleMouseEnter("stores")}
              onMouseLeave={() => handleMouseLeave("stores")}
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                aria-expanded={dropdownState.stores}
              >
                Stores
              </a>
              <ul
                className={`dropdown-menu ${
                  dropdownState.stores ? "show" : ""
                }`}
              >
                <li>
                  <a className="dropdown-item" href="pages/store-list.html">
                    Store List
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="pages/store-grid.html">
                    Store Grid
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="pages/store-single.html">
                    Store Single
                  </a>
                </li>
              </ul>
            </li>
            <li
              className={`nav-item dropdown dropdown-fullwidth ${
                dropdownState.megaMenu ? "show" : ""
              }`}
              onMouseEnter={() => handleMouseEnter("megaMenu")}
              onMouseLeave={() => handleMouseLeave("megaMenu")}
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                aria-expanded={dropdownState.megaMenu}
              >
                Mega Menu
              </a>
              <div
                className={`dropdown-menu pb-0 ${
                  dropdownState.megaMenu ? "show" : ""
                }`}
              >
                <div className="row p-4 p-lg-6">
                  <div className="col-lg-8 col-4 mb-4 mb-lg-8">
                    <h6 className="text-primary ps-0">Dairy, Bread & Eggs</h6>
                    <a className="dropdown-item" href="pages/shop-grid.html">
                      Butter
                    </a>
                    <a className="dropdown-item" href="pages/shop-grid.html">
                      Milk Drinks
                    </a>
                    <a className="dropdown-item" href="pages/shop-grid.html">
                      Curd & Yogurt
                    </a>
                    <a className="dropdown-item" href="pages/shop-grid.html">
                      Eggs
                    </a>
                    <a className="dropdown-item" href="pages/shop-grid.html">
                      Buns & Bakery
                    </a>
                    <a className="dropdown-item" href="pages/shop-grid.html">
                      Cheese
                    </a>
                    <a className="dropdown-item" href="pages/shop-grid.html">
                      Condensed Milk
                    </a>
                    <a className="dropdown-item" href="pages/shop-grid.html">
                      Dairy Products
                    </a>
                  </div>
                  <div className="col-lg-3 col-6 mb-4 mb-lg-0">
                    <h6 className="text-primary ps-3">
                      Breakfast & Instant Food
                    </h6>
                    <a className="dropdown-item" href="pages/shop-grid.html">
                      Breakfast Cereal
                    </a>
                    <a className="dropdown-item" href="pages/shop-grid.html">
                      Noodles, Pasta & Soup
                    </a>
                    <a className="dropdown-item" href="pages/shop-grid.html">
                      Frozen Veg Snacks
                    </a>
                    <a className="dropdown-item" href="pages/shop-grid.html">
                      Frozen Non-Veg Snacks
                    </a>
                    <a className="dropdown-item" href="pages/shop-grid.html">
                      Vermicelli
                    </a>
                    <a className="dropdown-item" href="pages/shop-grid.html">
                      Instant Mixes
                    </a>
                    <a className="dropdown-item" href="pages/shop-grid.html">
                      Batter
                    </a>
                    <a className="dropdown-item" href="pages/shop-grid.html">
                      Fruit and Juices
                    </a>
                  </div>
                  <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                    <h6 className="text-primary ps-3">Cold Drinks & Juices</h6>
                    <a className="dropdown-item" href="pages/shop-grid.html">
                      Soft Drinks
                    </a>
                    <a className="dropdown-item" href="pages/shop-grid.html">
                      Fruit Juices
                    </a>
                    <a className="dropdown-item" href="pages/shop-grid.html">
                      Coldpress
                    </a>
                    <a className="dropdown-item" href="pages/shop-grid.html">
                      Water & Ice Cubes
                    </a>
                    <a className="dropdown-item" href="pages/shop-grid.html">
                      Soda & Mixers
                    </a>
                    <a className="dropdown-item" href="pages/shop-grid.html">
                      Health Drinks
                    </a>
                    <a className="dropdown-item" href="pages/shop-grid.html">
                      Herbal Drinks
                    </a>
                    <a className="dropdown-item" href="pages/shop-grid.html">
                      Milk Drinks
                    </a>
                  </div>
                  <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                    <div className="card border-0">
                      <img
                        src="assets/images/banner/menu-banner.jpg"
                        alt="eCommerce HTML Template"
                        className="img-fluid rounded-3"
                      />
                      <div className="position-absolute ps-6 mt-8">
                        <h5 className="mb-0">
                          Don't miss this <br />
                          offer today.
                        </h5>
                        <a href="#" className="btn btn-primary btn-sm mt-3">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              className={`nav-item dropdown ${
                dropdownState.pages ? "show" : ""
              }`}
              onMouseEnter={() => handleMouseEnter("pages")}
              onMouseLeave={() => handleMouseLeave("pages")}
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                aria-expanded={dropdownState.pages}
              >
                Pages
              </a>
              <ul
                className={`dropdown-menu ${dropdownState.pages ? "show" : ""}`}
              >
                <li>
                  <a className="dropdown-item" href="pages/blog.html">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="pages/blog-single.html">
                    Blog Single
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="pages/blog-category.html">
                    Blog Category
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="pages/about.html">
                    About us
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="pages/404error.html">
                    404 Error
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="pages/contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </li>
            <li
              className={`nav-item dropdown ${
                dropdownState.account ? "show" : ""
              }`}
              onMouseEnter={() => handleMouseEnter("account")}
              onMouseLeave={() => handleMouseLeave("account")}
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                aria-expanded={dropdownState.account}
              >
                Account
              </a>
              <ul
                className={`dropdown-menu ${
                  dropdownState.account ? "show" : ""
                }`}
              >
                <li>
                  <a className="dropdown-item" href="pages/signin.html">
                    Sign in
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="pages/signup.html">
                    Signup
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="pages/forgot-password.html"
                  >
                    Forgot Password
                  </a>
                </li>
                <li className="dropdown-submenu">
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    id="myAccountDropdown"
                    role="button"
                  >
                    My Account
                  </a>
                  <ul
                    className={`dropdown-menu ${
                      dropdownState.account ? "show" : ""
                    }`}
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="pages/account-orders.html"
                      >
                        Orders
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="pages/account-settings.html"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="pages/account-address.html"
                      >
                        Address
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="pages/account-payment-method.html"
                      >
                        Payment Method
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="pages/account-notification.html"
                      >
                        Notification
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="docs/index.html">
                Docs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

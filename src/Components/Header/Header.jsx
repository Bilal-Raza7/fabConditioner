import React from "react";
import './header.css'
import { IoCallOutline } from "react-icons/io5";

function Header() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand mx-3 fw-bold color-blue" href="#">
        FabConditioner
        </a>
        <button
          className="navbar-toggler mx-3"
          type="button"
          //   data-toggle="collapse"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          data-target="#navbarNav"
          aria-controls="offcanvasRight"
          //   aria-expanded="false"
          //   aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div> */}
        <div
          className="offcanvas offcanvas-end bg-dark w-75"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel" className="text-white">
              FabConditioner
            </h5>
            <button
              type="button"
              className="btn-close text-reset bg-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body text-white">
            <a
              href="+918176932325"
              className="text-decoration-none fs-3 text-white fw-medium m-3"
            >
              <IoCallOutline className="mx-2 mb-2 fw-bold" />
              Call Now
            </a>
          </div>
          {/* <ul>
            <li className="text-white">1</li>
            <li className="text-white">2</li>
            <li className="text-white">3</li>
          </ul> */}
        </div>
      </nav>
    </>
  );
}

export default Header;

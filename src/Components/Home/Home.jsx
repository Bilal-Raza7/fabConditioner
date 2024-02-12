import React from "react";
import img1 from "../../images/slider-7.jpg";
import img2 from "../../images/repair.png";
import img3 from "../../images/slider-6.jpg";
import img4 from "../../images/repair1.png";
import { IoCallOutline } from "react-icons/io5";
import "./home.css";

function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="img-container w-100">
              <img
                src={img1}
                alt=""
                className="object-fit-cover rounded w-100"
              />
            </div>
            <div className="d-flex justify-content-center">
              <div className="rounded p-3 w-100">
                <h2 className="mb-0 color-blue">
                  Professional Ac <span className="fs-20">ENGINEER</span>
                </h2>
                <p className="fs-4 mb-0">
                  For Emergencies repairs, please call
                </p>
                <p className="fs-10 text-danger fw-bolder">+918176932325</p>
                <div className="icon-container border rounded p-1 bg-danger w-50">
                  <a
                    href="tel:+918176932325"
                    className="text-decoration-none fs-3 text-white fw-medium m-3"
                  >
                    <IoCallOutline className="mx-2 mb-2 fw-bold" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="img-container">
              <img src={img2} alt="" className="object-fit-cover w-100" />
              <p className="fs-20 fw-bold color-blue text-center">Services</p>
            </div>
            <div className="row">
              <div className="col-12 d-flex justify-content-center mb-3">
                <div className="">
                  <div className="img-container cusHight radius mb-3">
                    <img
                      src={img4}
                      alt="repair"
                      className="object-fit-contain w-100"
                    />
                  </div>
                  <a href="tel:+918176932325" className="text-decoration-none">
                  <div className="fs-4 fw-medium text-center color-blue-bg">
                    Install & Replace
                  </div>
                  </a>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center mb-3">
                <div className="">
                  <div className="img-container cusHight radius mb-3">
                    <img
                      src={img4}
                      alt="repair"
                      className="object-fit-contain w-100"
                    />
                  </div>
                  <a href="tel:+918176932325" className="text-decoration-none">
                  <div className="fs-4 fw-medium text-center color-blue-bg">
                    Service & repair
                  </div>
                  </a>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center mb-3">
                <div className="">
                  <div className="img-container cusHight radius mb-3">
                    <img
                      src={img4}
                      alt="repair"
                      className="object-fit-contain w-100"
                    />
                  </div>
                  <a href="tel:+918176932325" className="text-decoration-none">
                  <div className="fs-4 fw-medium text-center color-blue-bg">
                    Air Conditioning
                  </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

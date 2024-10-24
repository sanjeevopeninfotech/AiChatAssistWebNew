import { Link } from "react-router-dom";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import HeroBtnGroup from "./MarHeroSecBtn";
import "/src/styles/SassHero.css";

const Hero = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="hero-heading hero-banner-two position-relative pt-200 lg-pt-200 md-pt-150">
        <img
          src="/images/shape/shape_26.svg"
          alt="shape"
          className="lazy-img shapes shape-left"
        />
        <img
          src="/images/shape/shape_27.svg"
          alt="shape"
          className="lazy-img shapes shape-right"
        />

        <div className="container">
          <div className="row">
            <div
              className="col-lg-8 col-md-9 m-auto text-center"
              data-aos="fade-up"
            >
              <h1 className="hero-heading fw-normal position-relative">
                <img
                  src="/images/shape/shape_25.svg"
                  alt="shape"
                  className="lazy-img shapes line-shape"
                />
                Transform Your{" "}
                <span className="fw-bold customColor">Marketing</span> with AI
              </h1>
              <p className="text-lg mb-75 pt-20 lg-mb-50 lg-pt-10">
                Harness the power of AI to optimize your marketing strategies,
                automate tasks, and deliver personalized experiences to your
                customers, all while saving time and driving results.
              </p>
              <div className="d-sm-flex justify-content-center align-items-center">
                <HeroBtnGroup />
              </div>
            </div>
          </div>
          {/* End .row */}

          <div
            className="illustration-holder position-relative mt-120 lg-mt-80 xs-mt-30"
            data-aos="fade-up"
          >
            <div className="bg-wrapper">
              <img
                src="/images/media/img_05.jpg"
                alt="media"
                className="lazy-img main-screen w-100"
              />
            </div>
            {/* /.bg-wrapper */}
            <img
              src="/images/shape/shape_28.svg"
              alt="media"
              className="lazy-img shapes shape-one"
            />
            <img
              src="/images/shape/shape_29.svg"
              alt="media"
              className="lazy-img shapes shape-two"
            />
            <img
              src="/images/shape/shape_30.svg"
              alt="media"
              className="lazy-img shapes shape-three"
            />
            <img
              src="/images/shape/shape_31.svg"
              alt="media"
              className="lazy-img shapes shape-four"
            />
          </div>
          {/* /.illustration-holder */}
        </div>
        {/* /.container */}
      </div>
    </>
  );
};

export default Hero;

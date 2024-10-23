import { useState } from "react";
import ModalVideo from "react-modal-video";

const HeroBtnGroup = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (event, value) => {
    event.preventDefault();
    setSelectedValue(value);
    setShowDropdown(false);
  };

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="20QUNgFIrK0"
        onClose={() => setOpen(false)}
      />

      <div className="d-sm-flex align-items-center">
        <div
          className="fancybox video-icon tran3s mb-25 d-flex align-items-center order-sm-last"
          onClick={() => setOpen(true)}
          role="button"
        >
          <i className="bi bi-play" />
          <div className="ps-3">
            <span className="d-block fs-15 text-uppercase">Watch</span>
            <strong className="fs-18 fw-normal tx-dark d-block">Demo</strong>
          </div>
        </div>

        <div className="download-btn d-inline-block mb-25 me-4 order-sm-first">
          <button
            className="tran3s gradientBtn"
            type="button"
            id="appDownBtn"
            aria-expanded="false"
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroBtnGroup;

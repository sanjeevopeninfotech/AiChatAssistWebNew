const logos = [
  {
    src: "/images/customAssets/Logo.png",
    width: "80px",
    height: "80px",
    className: "",
  },
  {
    src: "/images/customAssets/hubspot.svg",
    width: "65px",
    height: "65px",
    className: "shapes logo-one",
  },
  {
    src: "/images/customAssets/gmail.svg",
    width: "90px",
    height: "90px",
    className: "shapes logo-two",
  },
  {
    src: "/images/customAssets/slack.svg",
    width: "70px",
    height: "70px",
    className: "shapes logo-three",
  },
  {
    src: "/images/customAssets/drive.svg",
    width: "70px",
    height: "70px",
    className: "shapes logo-four",
  },
  {
    src: "/images/customAssets/google-meet.svg",
    width: "90px",
    height: "90px",
    className: "shapes logo-five",
  },
];

const ScreenHolder = () => {
  return (
    <div className="screen-holder-one d-flex align-items-center justify-content-center">
      {logos.map((logo, index) => (
        <div
          key={index}
          className={`round-bg d-flex align-items-center justify-content-center ${logo.className}`}
          style={{ width: logo.width, height: logo.height }}
        >
          <img src={logo.src} alt={`logo ${index}`} className="lazy-img" />
        </div>
      ))}
      <img
        src="/images/shape/shape_32.svg"
        alt="shape"
        className="lazy-img shapes shape-one"
      />
    </div>
  );
};

export default ScreenHolder;

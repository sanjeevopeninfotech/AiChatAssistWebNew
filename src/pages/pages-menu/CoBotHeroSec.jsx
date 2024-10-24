const Hero = () => {
  return (
    <div className="hero-banner-thirteen position-relative zn2 pt-190 pb-150 lg-pb-100 lg-pt-150 md-pb-50">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 m-auto">
            <div
              className="text-wrapper position-relative d-flex flex-column flex-md-row align-items-center justify-content-center"
              data-aos="fade-right"
            >
              <h1 className="personaHeading tx-dark text-center mb-3 mb-md-0">
                Effortless
                <span className="fw-bold customColor"> Coordination</span>
                <br />
                Let the
                <span className="fw-bold customColor"> Bot Handle It</span>
              </h1>

              {/* Adding the image beside the H1 */}
              <img
                src="/images/customAssets/chatbotCo.png"
                alt="AI-Powered Bot"
                className="svg-icon"
                style={{
                  width: "120px", // Adjust size of the SVG
                  height: "120px",
                  marginLeft: "15px", // Space between the text and SVG
                }}
              />
            </div>

            {/* Reduce the bottom margin of the paragraph */}
            <p
              className="text-lg tx-dark mb-40 pt-35 text-center lg-pt-20 lg-mb-30"
              data-aos="fade-left"
            >
              Efficiently streamline customer interactions and boost sales
              performance with a smart bot that goes beyond automation. From
              coordinating leads to collecting customer data and managing
              workflows, the Coordinator Bot saves time and drives results,
              empowering your sales team while enhancing the user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

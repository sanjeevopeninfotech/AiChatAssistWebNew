const Block = () => {
  return (
    <>
      <div className="row align-items-end" data-aos="fade-up">
        <div className="col-md-5 col-sm-4">
          <img
            src="/images/shape/shape_136.svg"
            alt="shape"
            className="lazy-img d-none d-sm-inline-block"
          />
        </div>
        <div className="col-md-7 col-sm-8" data-aos="fade-down">
          <img
            src="/images/customAssets/infoBotSec5.svg"
            alt="graph"
            className="w-75"
          />
          {/* /.block-wrapper */}
        </div>
      </div>
      {/* End .row */}

      <div className="row gx-xxl-5" data-aos="fade-down">
        <img
          src="/images/customAssets/Graph.svg"
          alt="graph"
          className="w-50 mt-5"
        />
        {/* End .col */}

        <div className="col-sm-5" data-aos="fade-up">
          {/* <img
            src="/images/customAssets/infoBotSec5img.svg"
            alt="graph"
            className="w-50"
          /> */}
          {/* /.block-wrapper */}
          <img
            src="/images/shape/shape_137.svg"
            alt="shape"
            className="lazy-img mt-30 ms-auto me-auto d-none d-sm-inline-block"
          />
        </div>
      </div>
    </>
  );
};

export default Block;

import HeroBtnGroup from "./HeroBtnGroup";
import "/src/styles/SassHero.css";

const Hero = () => {
  return (
    <>
      <a href="#" className="slogan d-inline-block glassy">
        <strong className="fw-500">Offer</strong> is going on till friday,
        $1.99/mo. <i className="fas fa-chevron-right" />
      </a>
      <h1 className="hero-heading mt-45 mb-40 md-mt-20">
        Your Trusted
        <span className="fw-bold customColor"> Knowledge Source</span>,
        On-Demand!
      </h1>
      <p className="text-sm mb-50 lg-mb-30 pe-xxl-4">
        Empower your users with instant access to accurate information from a
        knowledgeable guide. With a friendly persona and a touch of fun, our
        Information Bot delivers real-time updates and simplifies complex
        answers—here to assist you anytime!
      </p>
      <HeroBtnGroup />
      <h2 className="fw-500 mt-40 mb-5">A+ Rating </h2>
      <p className="fs-18 opacity-75">
        Avg rating 4.8 makes us world most best apps.
      </p>
    </>
  );
};

export default Hero;

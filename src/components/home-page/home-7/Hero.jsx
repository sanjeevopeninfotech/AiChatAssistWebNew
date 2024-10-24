import HeroBtnGroup from "./HeroBtnGroup";
import "/src/styles/SassHero.css";

const Hero = () => {
  return (
    <>
      <a href="#" className="slogan d-inline-block glassy">
        Start <span className="fw-bold customColor">free</span> trial today
        <i className="fas fa-chevron-right" />
      </a>
      <h1 className="hero-heading mt-45 mb-40 md-mt-20">
        Instant
        <span className="fw-bold customColor"> Solution </span>
        with <span className="fw-bold customColor"> AI-Powered </span>Chatbots
        {/* <img
          src="/images/customAssets/chatbot.png"
          alt="AI Chatbot GIF"
          className="d-inline-block gif-icon"
          style={{
            width: "50px",
            height: "50px",
            marginLeft: "10px",
            marginBottom: "10px",
          }}
        /> */}
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

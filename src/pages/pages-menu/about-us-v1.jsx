import Seo from "../../components/common/Seo";
import Header from "../../components/home-page/home-6/Header";
import DefaultFooter from "../../components/footer/DefaultFooter";
import Partners from "../../components/services/Partners";
import Faq from "../../components/services/Faq";
import Testimonial from "../../components/home-page/home-3/Testimonial";
import Block from "../../components/services/Block";
import Team3 from "../../components/team/Team3";
import { Link } from "react-router-dom";
import VideoBlock from "../../components/about/VideoBlock";
import Counter from "../../components/about/Counter";
// import HeroBtnGroup from "../../components/home-page/home-7/HeroBtnGroup";
import "/src/styles/SassHero.css";
// import NET from "vanta/src/vanta.dots";
import Hero from "./HeroInfoBot";
import InfoBotSec3 from "./InfoBotSec3";
import { useEffect, useRef } from "react";

const AboutUsV1 = () => {
  // const vantaRef = useRef(null);

  // useEffect(() => {
  //   const vantaEffect = NET({
  //     el: vantaRef.current,
  //     mouseControls: true,
  //     touchControls: true,
  //     gyroControls: false,
  //     minHeight: 200.0,
  //     minWidth: 200.0,
  //     scale: 1.0,
  //     scaleMobile: 1.0,
  //     color: 0xd51bd6,
  //     color2: 0xaf20ff,
  //     backgroundColor: 0xffffff,
  //     showLines: false,
  //   });

  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, []);
  const features = [
    { text: "Amazing communication." },
    { text: "Best trending designing experience." },
    { text: "Email & Live chat." },
  ];

  const starRating = Array(5)
    .fill()
    .map((_, index) => (
      <li key={index}>
        <i className="fa-solid fa-star" />
      </li>
    ));

  return (
    <>
      <Seo pageTitle="About Us V1" />

      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <Header />

      <div
        // id="vanta"
        // ref={vantaRef}
        className="hero-banner-three position-relative pt-180 md-pt-150 bg"
        data-aos="fade-right"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Hero />
            </div>
          </div>
        </div>
        {/* /.container */}

        <div className="mobile-screen" data-aos="fade-right">
          <div className="row gx-xxl-5 justify-content-center align-items-center">
            <img
              src="/images/customAssets/infobotHero.svg"
              alt="heroGIF"
              className="custom-hero-gif"
            />
          </div>
        </div>
        {/* /.mobile-screen */}
      </div>

      <div className="infoBotSec2 fancy-feature-thirtyEight mt-180 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="mobile-screen" data-aos="fade-right">
                <div className="row gx-xxl-5 justify-content-center align-items-center">
                  <img
                    src="/images/customAssets/infobotPersona.svg"
                    alt="heroGIF"
                    className="infobotPersona"
                  />
                </div>
              </div>
              {/* /.block-style-seven */}
            </div>
            {/* End .col-lg-5 */}
            <div className="col-lg-6 ms-auto" data-aos="fade-left">
              <h1 className="personaHeading text-sm mt-45 mb-40 md-mt-20">
                <span className="fw-bold customColor">Adaptable Personas</span>
                <br />
                One Reliable Guide
              </h1>
              <p className="text-sm mb-50 lg-mb-30 pe-xxl-4">
                The Information Bot is more than just a source of answers—it’s a
                dynamic companion that adapts to your needs. Whether it takes on
                the role of a friendly guide, a knowledgeable expert, or a
                playful assistant, every interaction is crafted to be precise,
                engaging, and effortless. Experience information delivered with
                personality, tailored to fit any situation.
              </p>
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>

      <div
        // id="vanta"
        // ref={vantaRef}
        className="hero-banner-three position-relative pt-180 md-pt-150 bg"
        data-aos="fade-right"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <InfoBotSec3 />
            </div>
          </div>
        </div>
        {/* /.container */}

        <div className="mobile-screen" data-aos="fade-right">
          <div className="row gx-xxl-5 justify-content-center align-items-center">
            <img
              src="/images/customAssets/InfoBotSec3.svg"
              alt="heroGIF"
              className="infoBotSec3"
            />
          </div>
        </div>
      </div>

      <div className="fancy-feature-thirtyEight mt-180 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="mobile-screen" data-aos="fade-right">
                <div className="row gx-xxl-5 justify-content-center align-items-center">
                  <img
                    src="/images/customAssets/infoBotSec4.svg"
                    alt="heroGIF"
                    className="infoBotSec4 ml-0"
                  />
                </div>
              </div>
              {/* /.block-style-seven */}
            </div>
            {/* End .col-lg-5 */}
            <div className="col-lg-6 ms-auto" data-aos="fade-left">
              <h1 className="personaHeading text-sm mt-45 mb-40 md-mt-20">
                <span className="fw-bold customColor">Customize the Bot</span>
                <br />
                to Fit your Brand
              </h1>
              <p className="text-sm mb-50 lg-mb-30 pe-xxl-4">
                Keep your users informed with instant responses and
                up-to-the-minute updates. From frequently asked questions to
                detailed business information, the bot ensures that accurate and
                relevant content is always just a question away. It adapts to
                evolving needs, providing personalized answers based on user
                queries. Whether it’s quick facts or in-depth instructions, the
                bot delivers clarity when it’s needed most.
              </p>
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>

      <div className="infoBotbgSec fancy-feature-thirtySeven mt-150 lg-mt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 " data-aos="fade-right">
              <h1 className="personaHeading text-sm mt-45 mb-40 md-mt-20">
                <span className="fw-bold customColor">Tracking Insights </span>
                <br />
                that Drives<span className="fw-bold customColor"> Success</span>
              </h1>
              <p className="text-sm mb-50 lg-mb-30 pe-xxl-4">
                Unlock insights into user behavior, monitor top queries, and
                access detailed reports that reveal customer preferences,
                trends, and emerging needs. Leverage this data to refine the
                bot’s performance, identify areas for improvement, and
                personalize interactions based on user feedback. With in-depth
                analytics at your fingertips, continuously optimize the bot's
                responses to provide a seamless, engaging, and high-quality user
                experience, ensuring your bot always exceeds user expectations.
              </p>
            </div>
            {/* End .col */}

            <div className="col-xxl-5 col-lg-6 ms-auto">
              <Block />
            </div>
            {/* End .col */}
          </div>
        </div>
        {/* /.container */}
      </div>

      <div className="fancy-feature-twentyFive mt-170 lg-mt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-9 m-auto" data-aos="fade-up">
              <div
                className="title-style-seven text-center pb-120 lg-pb-50"
                data-aos="fade-up"
              >
                <h2 className="personaHeading  tx-dark">
                  <span className="fw-bold customColor">FAQ's </span>
                </h2>
                <h2 className="personaHeading tx-dark">
                  Explore a list of frequently asked questions to learn more
                  about{" "}
                  <span className="fw-bold customColor">
                    Bot's capabilities{" "}
                  </span>
                </h2>
              </div>
              {/* /.title-style-seven */}
            </div>
            <div className="col-xl-9 col-lg-10 m-auto " data-aos="fade-up">
              <Faq />

              <div className="text-center  mt-80 lg-mt-50">
                <h3 className="fw-bold tx-dark mb-30">
                  Didn’t get your answer?
                </h3>
                <Link to="/contact" className="btn-fourteen fw-500 tran3s">
                  Submit your question
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>

      {/*
			=====================================================
				Fancy Short Banner Sixteen
			=====================================================
			*/}
      <div
        className="fancy-short-banner-sixteen mt-130 lg-mt-80"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40">
            <div className="row">
              <div className="col-xl-10 col-md-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <div className="sc-title fs-18 pb-10">
                        Have Any Project?
                      </div>
                      <h2 className="main-title fw-500 text-white m0">
                        Don’t hesitate to send us message.
                      </h2>
                    </div>
                  </div>
                  {/* End .col-6 */}

                  <div className="col-lg-5 ms-auto text-center text-lg-end">
                    <Link to="/contact" className="btn-twentyOne fw-500 tran3s">
                      Get Started Today!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>
      {/* /.fancy-short-banner-sixteen */}

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default AboutUsV1;

import Seo from "../../components/common/Seo";
import Header from "../../components/home-page/home-6/Header";
import Quote from "../../components/home-page/home-5/Quote";
import About from "../../components/home-page/home-5/about";
import Testimonial from "../../components/home-page/home-5/Testimonial";
import Blog from "../../components/home-page/home-5/Blog";
import DefaultFooter from "../../components/footer/DefaultFooter";
import Faq from "../../components/services/Faq";
import Team4 from "../../components/team/Team4";
import { Link } from "react-router-dom";
import CoBotHeroSec from "./CoBotHeroSec";
import CoBotSec3 from "./CoBotSec3";
import CoBotBlock from "./CoBotBlock";

const AboutUsV2 = () => {
  return (
    <>
      <Seo pageTitle="About Us v2" />

      {/* <!--  =============================================
        Theme Header3 Menu
        ============================================== 	--> */}
      <Header />

      <CoBotHeroSec />

      <div className="fancy-feature-thirtyEight mt-100 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="mobile-screen" data-aos="fade-right">
                <div className="row gx-xxl-5 justify-content-center align-items-center">
                  <img
                    src="/images/customAssets/CoBotSec2.svg"
                    alt="heroGIF"
                    className="CoBotSec2 mt-50"
                  />
                </div>
              </div>
              {/* /.block-style-seven */}
            </div>
            {/* End .col-lg-5 */}
            <div className="col-lg-6 ms-auto" data-aos="fade-left">
              <h1 className="personaHeading text-sm mt-45 mb-40 md-mt-20">
                <span className="fw-bold customColor">Versatile Solution</span>{" "}
                for Every Business Need
                <span className="fw-bold customColor"> Across Industries</span>
              </h1>
              <p className="text-sm mb-50 lg-mb-30 pe-xxl-4">
                Discover endless possibilities with the Coordinator Bot, from
                customer engagement and lead management to data collection and
                seamless integrations. Whether focusing on sales, service, or
                insights, the bot adapts effortlessly to meet evolving business
                needs and objectives.
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
              <CoBotSec3 />
            </div>
          </div>
        </div>
        {/* /.container */}

        <div className="mobile-screen" data-aos="fade-right">
          <div className="row gx-xxl-5 justify-content-center align-items-center">
            <img
              src="/images/customAssets/CoBotSec3.svg"
              alt="heroGIF"
              className="CoBotSec3 w-75 mt-50"
            />
          </div>
        </div>
      </div>

      <div className="fancy-feature-thirtyEight mt-150 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="mobile-screen" data-aos="fade-right">
                <div className="row gx-xxl-5 justify-content-center align-items-center">
                  <img
                    src="/images/customAssets/CoBotSec4.svg"
                    alt="heroGIF"
                    className="CoBotSec4 w-100"
                  />
                </div>
              </div>
              {/* /.block-style-seven */}
            </div>
            {/* End .col-lg-5 */}
            <div className="col-lg-6 ms-auto" data-aos="fade-left">
              <h1 className="personaHeading text-sm mt-45 mb-40 md-mt-20">
                <span className="fw-bold customColor">Say Goodbye </span> To
                <br />
                Traditional Forms
              </h1>
              <p className="text-sm mb-50 lg-mb-30 pe-xxl-4">
                Forget about the outdated, time-consuming process of filling out
                lengthy lead generation forms. The Coordinator Bot simplifies
                lead capture by engaging customers in interactive conversations
                that gather key details effortlessly. Improve the user
                experience while ensuring you collect the information that
                matters most for your sales and marketing efforts
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
      >
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6">
              <CoBotBlock />
            </div>
          </div>
        </div>
        {/* /.container */}

        <div className="mobile-screen" data-aos="fade-down">
          <div className="row gx-xxl-5 justify-content-center align-items-center">
            <img
              src="/images/customAssets/CoBotSec5.svg"
              alt="heroGIF"
              className="CoBotSec5 w-75 mt-75"
            />
          </div>
        </div>
      </div>

      {/* 
        =============================================
        Feature Section Forty Six
        ============================================== 
        */}

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

export default AboutUsV2;

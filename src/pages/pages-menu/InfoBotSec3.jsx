import "/src/styles/SassHero.css";

const Hero = () => {
  return (
    <>
      <h1 className="hero-heading mt-45 mb-40 md-mt-20">
        Stay Ahead with <br />
        <span className="fw-bold customColor"> Real-Time Updates </span>
      </h1>
      <p className="text-sm mb-50 lg-mb-30 pe-xxl-4">
        Keep your users informed with instant responses and up-to-the-minute
        updates. From frequently asked questions to detailed business
        information, the bot ensures that accurate and relevant content is
        always just a question away. It adapts to evolving needs, providing
        personalized answers based on user queries. Whether it’s quick facts or
        in-depth instructions, the bot delivers clarity when it’s needed most.
      </p>
    </>
  );
};

export default Hero;

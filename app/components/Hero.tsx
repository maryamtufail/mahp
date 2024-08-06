const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="w-layout-blockcontainer container w-container">
        <div className="hero-wrap">
          <div className="hero-left">
            <div className="hero-tag-wrap">
              <div className="hero-tag"> Development </div>
              <div className="hero-tag"> SEO </div>
              <div className="hero-tag"> Design </div>
            </div>
            <h1 className="hero-title">
              Crafting unforgettable digital journeys
            </h1>
            <div className="hero-btn-wrap">
              <a
                id="c2598176-1f9b-1df1-e3df-470053fb9c92"
                href="https://nolan-template.webflow.io/contact-me"
                className="hero-btn w-inline-block"
              >
                <div>Work with me </div>
              </a>
            </div>
          </div>
          <div className="hero-right">
            <p className="hero-text">
              I’m a web developer & software engineer✌, transforming ideas into
              interactive experiences.
            </p>
            <h1 className="hero-title mobile">
              Crafting unforgettable digital journeys
            </h1>
            <div id="272c1674-3eaf-376a-b63f-a7ba3c43af46" className="hero-img">
              <div style={{ display: "block" }} className="on-scroll"></div>
              <img
                src="https://assets-global.website-files.com/651e827c41af7f43a5d770e2/6570595cded1ccc8e287557d_hero.jpg"
                loading="eager"
                sizes="(max-width: 479px) 92vw, (max-width: 767px) 90vw, (max-width: 991px) 44vw, 37vw"
                alt="Hero Image"
                className="hero-image"
              />
            </div>
            <div className="hero-fact">
              <div className="fact-data">
                <div className="fact-text"> 14k </div>
                <div># Happy Clients </div>
                <div className="fact-tag">
                  <img
                    src="https://assets-global.website-files.com/651e827c41af7f43a5d770e2/65705b4af1374efc10306430_ic-trend-up.svg"
                    loading="lazy"
                    alt="Icon"
                  />
                  <div>+92 % </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

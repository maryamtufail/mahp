const Hero: React.FC = () => {
  return (
    <section className="hero mt-12">
      <div className="w-layout-blockcontainer container w-container">
        <div className="hero-wrap">
          <div className="hero-left">
            <div className="hero-tag-wrap">
              <div className="hero-tag uppercase mr-2 bg-white">
                <img
                  src="https://cdn.prod.website-files.com/667f26085470c91a9709cff1/667f26085470c91a9709d005_Feather.svg"
                  alt=""
                />
                all-in-one Development
              </div>
            </div>
            <h1 className="hero-title">
              Crafting unforgettable digital journeys
            </h1>
            <div className="hero-btn-wrap">
              <a
                id="c2598176-1f9b-1df1-e3df-470053fb9c92"
                href="#contact"
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
                src="./hamza.jpg"
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

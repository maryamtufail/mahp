import Brand from "./Brand";

const Passion: React.FC = () => {
  return (
    <section id="about" className="passion pt-12">
      <div className="w-layout-blockcontainer container w-container">
        <div className="passion-wrap">
          <div className="passion-img">
            <img
              src="/about-hamza.png"
              loading="lazy"
              sizes="100vw"
              alt="Passion Image"
            />
          </div>
          <div className="passion-data">
            <h2>About Me</h2>
            <div className="passion-info">
              <div className="passion-block">
                <p className="single-text">
                  Hi there! I&apos;m Muhammad Ameer Hamza, a passionate Full-Stack
                  Software Engineer transforming ideas into exquisite solutions.
                  With a diverse skill set in both front-end and back-end
                  development, I excel at creating seamless user experiences and
                  efficient, scalable solutions. Driven by an unwavering passion
                  for technology, I thrive on solving complex challenges and
                  continuously learning to stay at the forefront of industry
                  trends.
                </p>
              </div>
              <div className="passion-block sub-passion">
                <div className="passion-text">Passion for Web Development</div>
                <p className="single-text">
                  Discussing your enthusiasm for creating digital experiences.
                </p>
              </div>
              <Brand />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Passion;

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience pt-24">
      <div className="w-layout-blockcontainer container w-container">
        <h2 className="section-title">My Experience</h2>
        <div className="experience-wrap">
          <div className="experience-info">
            <p className="single-text">
              I have gained valuable insights and expertise in Full Stack
              Development. I have had the opportunity to work on a wide range of
              projects.
            </p>
            <div className="tool-wrap">
              <div className="tool-tag">React.js</div>
              <div className="tool-tag">Next.js</div>
              <div className="tool-tag">Tailwind CSS</div>
              <div className="tool-tag">Bootstrap</div>
              <div className="tool-tag">MongoDB</div>
              <div className="tool-tag">Node.js</div>
            </div>
          </div>
          <div className="experience-data">
            <div className="experience-block">
              <div className="exp-year">
                <div>2023</div>
                <div className="exp-line"></div>
                <div>Present</div>
              </div>
              <div className="exp-info">
                <h6 className="exp-title">Senior Software Consultant</h6>
                <div className="body-small">Bytestan</div>
              </div>
            </div>     
            <div className="experience-block">
              <div className="exp-year">
                <div>2022</div>
                <div className="exp-line"></div>
                <div>2023</div>
              </div>
              <div className="exp-info">
                <h6 className="exp-title">Frontend Software Engineer</h6>
                <div className="body-small">Marketplug</div>
              </div>
            </div>
            <div className="experience-block">
              <div className="exp-year">
                <div>2022</div>
                <div className="exp-line"></div>
                <div>2023</div>
              </div>
              <div className="exp-info">
                <h6 className="exp-title">Software Engineer</h6>
                <div className="body-small">Minty.Art</div>
              </div>
            </div>
            <div className="experience-block">
              <div className="exp-year">
                <div>2020</div>
                <div className="exp-line"></div>
                <div>2022</div>
              </div>
              <div className="exp-info">
                <h6 className="exp-title">Full Stack Engineer</h6>
                <div className="body-small">Data Mechanics Pvt Ltd</div>
              </div>
            </div>
            <div className="experience-block">
              <div className="exp-year">
                <div>2019</div>
                <div className="exp-line"></div>
                <div>2020</div>
              </div>
              <div className="exp-info">
                <h6 className="exp-title">Software Engineer</h6>
                <div className="body-small">Oxibit Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

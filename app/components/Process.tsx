const Process: React.FC = () => {
  return (
    <section id="process" className="work-process">
      <div className="w-layout-blockcontainer container w-container">
        <h2 className="section-title">Work Process</h2>
        <div className="wp-wrap">
          <div className="wp-block main-block">
            <div>
              <div className="body-small">01</div>
              <h5 className="wp-title">Discovery &amp; Planning</h5>
            </div>
            <p className="single-text">
              I immerse myself in understanding the project's objectives, target
              audience, and unique requirements.
            </p>
          </div>
          <div className="wp-block">
            <div>
              <div className="body-small">02</div>
              <h5 className="wp-title">Development &amp; Implementation</h5>
            </div>
            <p className="single-text">
              With a solid plan in place, I transition into the development
              phase. This is where I bring ideas to life through a combination.
            </p>
          </div>
          <div className="wp-block">
            <div>
              <div className="body-small">03</div>
              <h5 className="wp-title">Testing &amp; Deployment</h5>
            </div>
            <p className="single-text">
              This includes functional testing to verify all features work as
              intended, compatibility testing to ensure seamless performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

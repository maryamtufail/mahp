const Passion: React.FC = () => {
  return (
    <section className="passion">
      <div className="w-layout-blockcontainer container w-container">
        <div className="passion-wrap">
          <div className="passion-img">
            <img
              src="https://assets-global.website-files.com/651e827c41af7f43a5d770e2/657006e9f6d56da753b22c7c_passion.jpg"
              loading="lazy"
              sizes="100vw"
              srcSet="https://assets-global.website-files.com/651e827c41af7f43a5d770e2/657006e9f6d56da753b22c7c_passion-p-500.jpg 500w, https://assets-global.website-files.com/651e827c41af7f43a5d770e2/657006e9f6d56da753b22c7c_passion-p-800.jpg 800w, https://assets-global.website-files.com/651e827c41af7f43a5d770e2/657006e9f6d56da753b22c7c_passion-p-1080.jpg 1080w, https://assets-global.website-files.com/651e827c41af7f43a5d770e2/657006e9f6d56da753b22c7c_passion.jpg 1236w"
              alt="Passion Image"
            />
          </div>
          <div className="passion-data">
            <p className="single-text">
              From the early days of tinkering with code to becoming a seasoned web developer. Every step has a testament to the power of persistence and learning. The digital world has evolved into a lifelong passion.
            </p>
            <div className="passion-info">
              <div className="passion-block">
                <div className="passion-text">Fusion of Design &amp; Functionality</div>
                <p className="single-text">Highlighting the synergy between aesthetics and usability in your work.</p>
              </div>
              <div className="passion-block">
                <div className="passion-text">Specialization or Area of Interest</div>
                <p className="single-text">Mentioning a specific aspect of technology that fascinates you.</p>
              </div>
              <div className="passion-block">
                <div className="passion-text">Passion for Web Development</div>
                <p className="single-text">Discussing your enthusiasm for creating digital experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Passion;

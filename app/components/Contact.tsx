import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="cta">
      <div className="w-layout-blockcontainer container w-container">
        <div className="cta-wrap">
          <p className="cta-text">
            Whether it's a stunning website, a custom software solution, or a seamless mobile app, I'm here to help.
          </p>
          <div className="cta-link-wrap">
            <div>Ready? Let’s</div>
            <a href="https://nolan-template.webflow.io//contact-me" className="cta-link">Get Started.</a>
          </div>
          <img
            src="https://assets-global.website-files.com/651e827c41af7f43a5d770e2/657050d17dc1b7509039d1aa_autograph.svg"
            loading="lazy"
            alt="Autograph"
            className="autograph"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;

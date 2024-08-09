const Contact: React.FC = () => {
  return (
    <section id="contact" className="cta pt-24">
      <div className="w-layout-blockcontainer container w-container">
        <div className="cta-wrap">
          <p className="cta-text">
            Whether it&apos;s a stunning website, a custom software solution, or a
            seamless mobile app, I&apos;m here to help.
          </p>
          <div className="cta-link-wrap">
            <div>Ready? Let’s</div>
            <a
              href="mailto:hamza@gmail.com"
              className="cta-link"
            >
              Get Started.
            </a>
          </div>
          <img
            src="/signature.png"
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

import React from 'react';

const Footer: React.FC = () => {
  return (
    <section className="footer">
      <div className="w-layout-blockcontainer container w-container">
        <div className="ft-wrap">
          <div className="ft-left">
            <div className="nav-brand">
              <a
                href="https://nolan-template.webflow.io//"
                aria-current="page"
                className="brand w-nav-brand w--current"
              >
                <img
                  src="https://assets-global.website-files.com/651e827c41af7f43a5d770e2/656db28d3f2b8c9c25523b16_logo.svg"
                  loading="eager"
                  alt="Nolan"
                  className="footer-logo"
                />
              </a>
              <div>
                <div className="name">Nolan Smith</div>
                <div className="nolan-text">Product Developer</div>
              </div>
            </div>
            <div className="ft-link-wrap">
              <a href="mailto:hello@nolan.io" className="ft-link">hello@nolan.io</a>
              <a href="tel:(316)555-0116" className="ft-link">(316)555-0116</a>
            </div>
          </div>
          <div className="ft-right">
            <div className="ft-menu-wrap">
              <div className="footer-menu">
                <a href="https://nolan-template.webflow.io//about-me" className="footer-link top">About Me</a>
                <a href="https://nolan-template.webflow.io//works" className="footer-link">My Works</a>
                <a href="https://nolan-template.webflow.io//reviews" className="footer-link last">Reviews</a>
              </div>
              <div className="footer-menu">
                <a href="https://nolan-template.webflow.io//blogs" className="footer-link top">Blogs</a>
                <a href="https://nolan-template.webflow.io//about-me#experience" className="footer-link">Experience</a>
                <a href="https://nolan-template.webflow.io//contact-me" className="footer-link">Contact</a>
                <a href="https://nolan-template.webflow.io//template-info/licensing" className="footer-link last">Licensing</a>
              </div>
            </div>
            <div className="social-wrap">
              <a href="https://twitter.com/" target="_blank" className="social-link w-inline-block">
                <img
                  src="https://assets-global.website-files.com/651e827c41af7f43a5d770e2/656dcb5af5d12f75c21b1f59_ic-twitter.svg"
                  loading="lazy"
                  alt="Twitter"
                  className="social-img"
                />
              </a>
              <a href="https://www.facebook.com/" target="_blank" className="social-link w-inline-block">
                <img
                  src="https://assets-global.website-files.com/651e827c41af7f43a5d770e2/656dcb5a6d508e6233d43430_ic-facebook.svg"
                  loading="lazy"
                  alt="Facebook"
                  className="social-img"
                />
              </a>
              <a href="https://www.youtube.com/" target="_blank" className="social-link w-inline-block">
                <img
                  src="https://assets-global.website-files.com/651e827c41af7f43a5d770e2/656dcb5a5fd26b18faf00f11_ic-youtube.svg"
                  loading="lazy"
                  alt="YouTube"
                  className="social-img"
                />
              </a>
              <a href="https://www.instagram.com/" target="_blank" className="social-link w-inline-block">
                <img
                  src="https://assets-global.website-files.com/651e827c41af7f43a5d770e2/656dcb5ae090a122a4b39d12_ic-insta.svg"
                  loading="lazy"
                  alt="Instagram"
                  className="social-img"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="fb-wrap">
          <div className="w-layout-blockcontainer container w-container">
            <div className="fb">
              <div>Copyright © 2023 Nolan. All Rights Reserved.</div>
              <div>
                Designed by <a href="https://nixar.io/" target="_blank" className="ft-btm-link">Nixar</a>. Powered by
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

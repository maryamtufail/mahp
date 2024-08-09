import React from 'react';

const Footer: React.FC = () => {
  return (
    <section className="footer">
      <div className="w-layout-blockcontainer container w-container">
        <div className="ft-wrap">
          <div className="ft-left">
            <div className="nav-brand">
              <a
                href="#"
                aria-current="page"
                className="brand w-nav-brand w--current"
              >
                <img
                className="w-36"
                  src="/logo.png"
                  loading="eager"
                  alt="Hamza"
               
                />
              </a>
             
            </div>
        
          </div>
          <div className="ft-right">
            <div className="ft-menu-wrap">
              <div className="footer-menu">
                <a href="#about" className="footer-link top">About</a>
                <a href="#work" className="footer-link">Portfolio</a>
                <a href="#experience" className="footer-link last">Experience</a>
             
              </div>
              <div className="footer-menu">
              <a href="#process" className="footer-link last">Process</a>
              <a href="#testimonials" className="footer-link last">Testimonials</a>
              <a href="#contact" className="footer-link last">Contact</a>
      
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
              <div>Copyright © 2024. All Rights Reserved.</div>
              <div>
                Designed by <a href="https://maryamtufail.com" target="_blank" className="ft-btm-link">Maryam Tufail</a>. Powered by <a href="#"  className="ft-btm-link">Muhammad Ameer Hamza </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

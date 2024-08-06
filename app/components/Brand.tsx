import React from "react";
import Marquee from "react-fast-marquee";

const Brand: React.FC = () => {
  return (
    <section className="brand-logo">
      <div className="w-layout-blockcontainer container w-container">
        <div className="logo-title-wrap">
          <div className="logo-dot"></div>
          <h6 className="logo-title">
            Companies and industries I’ve created experiences for
          </h6>
        </div>
        <div className="logo-wrap">
          <Marquee pauseOnHover={true} direction="left" speed={50}>
              <div className="logo-row">
                <img
                  src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/google-logo.png"
                  loading="lazy"
                  alt="Logo"
                  className="logo"
                />
                <img
                  src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/microsoft-logo.png"
                  loading="lazy"
                  alt="Logo"
                  className="logo"
                />
                <img
                  src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/samsung-logo.png"
                  loading="lazy"
                  alt="Logo"
                  className="logo"
                />
                   <img
                  src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/microsoft-logo.png"
                  loading="lazy"
                  alt="Logo"
                  className="logo"
                />
                <img
                  src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/samsung-logo.png"
                  loading="lazy"
                  alt="Logo"
                  className="logo"
                />
                   <img
                  src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/microsoft-logo.png"
                  loading="lazy"
                  alt="Logo"
                  className="logo"
                />
                <img
                  src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/samsung-logo.png"
                  loading="lazy"
                  alt="Logo"
                  className="logo"
                />
              </div>

          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Brand;

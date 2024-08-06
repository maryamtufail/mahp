"use client";

import { useEffect, useState } from "react";

const Whyme: React.FC = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const [expertiseItems, setExpertiseItems] = useState<any[]>([]);

  
  useEffect(() => {
    const fetchExpertiseData = async () => {
      const response = await fetch("/data/work.json");
      const data = await response.json();
      setExpertiseItems(data.expertiseItems);
    };

    fetchExpertiseData();
  }, []);

 
  const toggleVisibility = (index: number) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <section className="my-expertise">
      <div className="w-layout-blockcontainer container w-container">
        <div className="expertise-wrap">
          <div className="expertise-left">
            <h2>Why Me</h2>
            <p className="single-text">
              I specialize in crafting custom solutions that seamlessly blend innovation with functionality.
            </p>
          </div>
          <div className="expertise-right">
            {expertiseItems.map((item, index) => (
              <div
                key={index}
                data-hover="false"
                data-delay="0"
                className="expertise w-dropdown"
              >
                <div className="que-title w-dropdown-toggle" onClick={() => toggleVisibility(index)}>
                  <div className="exp-head">
                    <img
                      src={item.icon}
                      loading="lazy"
                      alt="Icon"
                      className="expertise-icon"
                    />
                    <div className="expertise-title">{item.title}</div>
                  </div>
                  <div className="que-icon">
                    <div
                      style={{
                        transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                      }}
                      className="vertical-line"
                    />
                    <div className="horizontal-line" />
                  </div>
                </div>
                {visibleIndex === index && (
                  <nav style={{ height: "auto" }} className="ans w-dropdown-list">
                    <div className="exp-box">
                      <p className="exp-text">{item.description}</p>
                    </div>
                  </nav>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyme;

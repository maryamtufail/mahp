"use client"

import { useEffect, useState } from "react";

interface Category {
  id: string;
  href: string;
  name: string;
}

interface Work {
  id: string;
  href: string;
  src: string;
  srcSet: string;
  title: string;
  year: string;
  categories: Category[];
}

const Work: React.FC = () => {
  const [works, setWorks] = useState<Work[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/works.json");
      const data: Work[] = await response.json();
      setWorks(data);
    };

    fetchData();
  }, []);

  return (
    <section className="my-work">
      <div className="w-layout-blockcontainer container w-container">
        <h2 className="section-title">My Selected Works</h2>
        <div className="w-dyn-list">
          <div role="list" className="work-list w-dyn-items">
            {works.map((work) => (
              <div
                key={work.id}
                role="listitem"
                className="work-item w-dyn-item"
              >
                <a href={work.href} className="work-link w-inline-block">
                  <div className="work-img">
                    <img
                      alt="Work Image"
                      loading="eager"
                      style={{
                        transform:
                          "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      src={work.src}
                      sizes="(max-width: 479px) 92vw, (max-width: 991px) 46vw, 47vw"
                      className="work-image"
                      
                    />
                  </div>
                </a>
                <div className="work-data">
                  <div className="work-info">
                    <h4 className="work-title">{work.title}</h4>
                    <div className="work-year">{work.year}</div>
                  </div>
                  <div className="w-dyn-list">
                    <div role="list" className="category-list w-dyn-items">
                      {work.categories.map((category) => (
                        <div
                          key={category.id}
                          role="listitem"
                          className="category-item w-dyn-item"
                        >
                          <a
                            href={category.href}
                            className="work-category w-inline-block"
                          >
                            <div>{category.name}</div>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Work;

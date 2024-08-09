"use client";
// import Brand from "./Brand";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface Review {
  logo: string;
  testimonial: string;
  name: string;
  title: string;
  image: string;
}

const Testimonial: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Review[]>([]);

  useEffect(() => {
    fetch("/data/testimonial.json")
      .then((response) => response.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  return (
    <section id="testimonials" className="m-4">
      <div className="testimonials">
  
        <div className=" container w-container">
        <h2>Pin Values</h2>
          <Swiper
            spaceBetween={5}
            slidesPerView={1}
            navigation
            loop
            breakpoints={{
              480: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((review) => (
              <SwiperSlide key={review.name}>
                <div className="review-slide">
                  <img
                    alt="Review Logo"
                    loading="lazy"
                    src="https://img.icons8.com/?size=100&id=93331&format=png&color=000000"
                    className="review-logo"
                  />
                  <p className="review-text">{review.testimonial}</p>
                  <div className="review-data">
                    <div className="review-img">
                      <img
                        alt="Review Image"
                        loading="eager"
                        src={review.image}
                        className="review-image"
                      />
                    </div>
                    <div>
                      <div className="review-name">{review.name}</div>
                      <div className="body-small">{review.title}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* <Brand /> */}
    </section>
  );
};

export default Testimonial;

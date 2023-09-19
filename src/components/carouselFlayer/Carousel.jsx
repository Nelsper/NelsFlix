import React from "react";
import "./scss/carousel.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import dbMovies from "../../database/dbMovies";

const Carousel = () => {
  return (
    <>
      <div className="swiper-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={false}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
        >
          {dbMovies.premiere.map((movie) => {
            return (
              <SwiperSlide key={movie.id}>
                <div className="slid">
                  <h2 id="title">{movie.title}</h2>
                  <img
                    className="image"
                    src={`../../../public/images/premiere/${movie.flayer}`}
                    alt={movie.alt}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;

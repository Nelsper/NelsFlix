import React, { useRef } from "react";
import "./scss/card.css";

import dbMovies from "../../database/dbMovies";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import "swiper/css/bundle";

const Carousel = () => {
  const swiperRef = useRef(null);

  const handleNextClick = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.slideNext();
    }
  };
  const handlePrevClick = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <>
      <div className="content-title-btns">
        <h2>Marvel</h2>
        <div className="next-prev">
          <button onClick={handlePrevClick}>
            <FontAwesomeIcon
              icon={faCaretLeft}
              size="2xl"
              color="#48C9B0"
              id="arrows"
            />
          </button>
          <button onClick={handleNextClick}>
            <FontAwesomeIcon
              icon={faCaretRight}
              size="2xl"
              color="#48C9B0"
              id="arrows"
            />
          </button>
        </div>
      </div>

      <div className="swiper-container-card">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation, Pagination, Autoplay]}
          navigation={false}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          slidesPerView={5}
        >
          {dbMovies.marvel.map((movie) => {
            return(
              <SwiperSlide className="slide-item-card" key={movie.id}>
                <img
                  className="image-card"
                  src={`../../../public/images/marvel/poster/${movie.img}`}
                  alt={movie.alt}
                />
                <FontAwesomeIcon icon={faCirclePlay} color="#48C9B0" size="2xl" id="iconPlay"/>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;

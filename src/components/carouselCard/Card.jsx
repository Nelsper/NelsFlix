import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./scss/card.css";

import dbMovies from "../../database/dbMovies";
import dbMarvel from "../../database/dbMarvel";
import dbDc from "../../database/dbDc";
import dbAction from "../../database/dbAction";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft, faFrog } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import "swiper/css/bundle";

const categories = ["marvel", "dc", "action"];
const rutas = ["/marvel", "/dc", "/action"];



const Carousel = () => {
  
  const dataBases = {
    marvel: dbMarvel,
    dc: dbDc,
    action: dbAction,
  };

  const swiperRef = categories.map(() => useRef(null));

  const handleNextClick = (idx) => {
    if (swiperRef[idx].current !== null) {
      swiperRef[idx].current.slideNext();
    }
  };
  const handlePrevClick = (idx) => {
    if (swiperRef[idx].current !== null) {
      swiperRef[idx].current.slidePrev();
    }
  };
  
  return (
    <>
      {categories.map((category, idx) => (
        <div className="contenedor" key={category}>
          <div className="content-title-btns">
            <h2 id="categ">{category.toUpperCase()} <Link id="categMas" to={rutas[idx]}><FontAwesomeIcon icon={faFrog} size="2xs"/></Link></h2>
            <div className="next-prev" key={category}>
              <button onClick={() => handlePrevClick(idx)}>
                <FontAwesomeIcon
                  icon={faCaretLeft}
                  size="2xl"
                  color="#48C9B0"
                  id="arrows"
                  />
              </button>
              <button onClick={() => handleNextClick(idx)}>
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
                swiperRef[idx].current = swiper;
              }}
              modules={[Navigation, Pagination, Autoplay]}
              loop={true}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              slidesPerView={5}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                540: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                740: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                868: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
                1920: {
                  slidesPerView: 6,
                  spaceBetween: 50,
                },
              }}
            >
              {dataBases[category].map((movie, index) => {
                return(
                  <SwiperSlide className="slide-item-card" key={index}>
                    <img
                      className="image-card"
                      src={`../../../public/images/${category}/poster/${movie.img}`}
                      alt={movie.alt}
                    />
                    <FontAwesomeIcon icon={faCirclePlay} color="#48C9B0" size="2xl" id="iconPlay"/>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      ))}
    </>
  );
};

export default Carousel;

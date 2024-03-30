import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../../src/index.css";

import kiosco from "../../kiosco.json";

import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        freeMode={false}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper  shadow-card bg-white"
      >
        {kiosco[0].combos.map((elem) => (
          <SwiperSlide key={elem.id}>{elem.id}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

// src/components/BannerCarousel.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import banner1 from "../assets/Banner-1.png";
import banner2 from "../assets/Banner-2.png";
import banner3 from "../assets/Banner-3.png";
import banner4 from "../assets/Banner-4.png";

const BannerCarousel = () => {
  const banners = [banner1, banner2, banner3, banner4];

  return (
    <div className="w-[100vw] px-2 py-6 sm:px-6 md-0 relative left-1/2 right-1/2 -mx-[50vw]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="rounded-lg shadow-lg"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full bg-gradient-to-r from-blue-200 to-blue-500 flex items-center justify-center rounded-lg">
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                className="w-full h-[180px] sm:h-[360px] md:h-[460px] rounded-lg transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerCarousel;

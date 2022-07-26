import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import img1 from "public/avataralbul.jpeg";
import img2 from "public/img2.jpeg";
import img3 from "public/img3.jpeg";
import img4 from "public/img4.jpeg";
import img5 from "public/avtrecent.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        // pagination={{
        //   type: "fraction",
        // }}
        slidesPerView={5}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <p className="max-w-[172.97px]">
          <SwiperSlide>
            <Image className="w-[172.97px] object-cover" src={img1}></Image>
          </SwiperSlide>
        </p>
        <p className="max-w-[172.97px]">
          <SwiperSlide>
            <Image className="w-[172.97px] object-cover" src={img2}></Image>
          </SwiperSlide>
        </p>
        <p className="max-w-[172.97px]">
          <SwiperSlide>
            <Image className="w-[172.97px] object-cover" src={img3}></Image>
          </SwiperSlide>
        </p>
        <p className="max-w-[172.97px]">
          <SwiperSlide>
            <Image className="w-[172.97px] object-cover" src={img4}></Image>
          </SwiperSlide>
        </p>
        <p className="max-w-[172.97px]">
          <SwiperSlide>
            <Image className="w-[172.97px] object-cover" src={img5}></Image>
          </SwiperSlide>
        </p>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}

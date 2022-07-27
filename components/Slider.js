import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Recentlies } from "data/songData";
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
        {Recentlies.map((Recently) => {
          return (
            <p key={Recently.id} className=" ">
              <SwiperSlide>
                <div className="flex flex-col">
                  <Image
                    width={172.97}
                    height={172.97}
                    style={Recently.author && { borderRadius: "9999px" }}
                    src={Recently.src || Recently.author}
                  ></Image>
                  <p className="text-sm text-left line-clamp-1 my-1.5">
                    {Recently.name}
                  </p>
                  <p className="text-sm text-left line-clamp-1 my-1.5">
                    {Recently.title || Recently.follow || Recently.toptrack}
                  </p>
                </div>
              </SwiperSlide>
            </p>
          );
        })}
      </Swiper>
    </>
  );
}

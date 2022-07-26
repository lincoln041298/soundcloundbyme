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
        {Recentlies.map((Recently, index) => {
          return (
            <p key={index} className=" ">
              <SwiperSlide>
                <div className="flex flex-col">
                  <Image
                    width={172.97}
                    height={172.97}
                    style={Recently.author && { borderRadius: "9999px" }}
                    src={Recently.src || Recently.author}
                  ></Image>
                  <p
                    className="text-sm text-left line-clamp-1 my-1.5"
                    style={Recently.authorname && { textAlign: "center" }}
                  >
                    {Recently.name || Recently.authorname}
                  </p>
                  <p
                    className="text-sm text-left line-clamp-1 my-1.5"
                    style={Recently.follow && { textAlign: "center" }}
                  >
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

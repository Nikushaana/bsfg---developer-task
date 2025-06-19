"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import SliderArrowIcon from "../icons/SliderArrowIcon";
import Image from "next/image";
import useScreenWidth from "../screenWidth";

export default function GamesSlider({
  data,
  title,
  icon,
  cardType,
}: GamesSliderProps) {
  let swiperRef = useRef<SwiperClass>(null!);

  const screenWidth = useScreenWidth();

  const [sldsPerView, setSldsPerView] = useState<number>(8);

  useEffect(() => {
    if (screenWidth > 800) {
      setSldsPerView(8);
    } else if (screenWidth <= 800 && screenWidth > 0) {
      setSldsPerView(3);
    }
  }, [screenWidth]);

  return (
    <div className="flex flex-col gap-y-[15px] mt-[10px] overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px] text-white">
          {icon}
          <h1 className="max-[800px]:text-[12px]">{title}</h1>
        </div>
        <div className="flex items-center gap-[5px]">
          <button
            className={`w-[35px] h-[35px] max-[800px]:w-[28px] max-[800px]:h-[28px] flex items-center justify-center duration-100 rounded-[5px] border-[1px] border-custGray
                ${
                  true
                    ? "text-white bg-[#141F2B] cursor-pointer"
                    : "text-custWhite bg-[#141F2B]"
                }`}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <SliderArrowIcon className={`w-[10px] h-[13px]`} />
          </button>
          <button
            className={`w-[35px] h-[35px] max-[800px]:w-[28px] max-[800px]:h-[28px] flex items-center justify-center duration-100 rounded-[5px] border-[1px] border-custGray
                ${
                  true
                    ? "text-white bg-[#141F2B] cursor-pointer"
                    : "text-custWhite bg-[#141F2B]"
                }`}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <SliderArrowIcon className={`w-[10px] h-[13px] rotate-[180deg]`} />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        slidesPerView={sldsPerView}
        spaceBetween={15}
        loop={false}
        pagination={false}
        className={`w-[calc(100%+70px)] max-[800px]:w-full`}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        speed={1200}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`relative w-full rounded-[5px] overflow-hidden ${
                cardType === "1"
                  ? "h-[200px] max-[800px]:h-[150px]"
                  : cardType === "2" && "h-[60px] max-[800px]:h-[50px]"
              }`}
            >
              <Image
                src={item.image}
                alt={""}
                sizes="500px"
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

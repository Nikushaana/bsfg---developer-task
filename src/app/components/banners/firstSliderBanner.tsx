"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Image from "next/image";
import useScreenWidth from "../screenWidth";

export default function FirstSliderBanner() {
  let swiperRef = useRef<SwiperClass>(null!);
  const screenWidth = useScreenWidth();

  const [sldsPerView, setSldsPerView] = useState<number>(2);

  useEffect(() => {
    if (screenWidth > 800) {
      setSldsPerView(2);
    } else if (screenWidth <= 800 && screenWidth > 0) {
      setSldsPerView(1);
    }
  }, [screenWidth]);

  return (
    <div className="relative mb-[-18px]">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        slidesPerView={sldsPerView}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className={`h-[333.09px] max-[800px]:h-[233.09px] FirstSliderBanner `}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onBeforeInit={(swiper: SwiperType) => {
          swiperRef.current = swiper;
        }}
        speed={1200}
      >
        {[
          "/images/799f58184cac852581060fb19acaf160d6ceb3b4.png",
          "/images/ba871a69f80f317586730a91dec71da87e9360d1.png",
          "/images/799f58184cac852581060fb19acaf160d6ceb3b4.png",
          "/images/ba871a69f80f317586730a91dec71da87e9360d1.png",
          "/images/799f58184cac852581060fb19acaf160d6ceb3b4.png",
        ].map((item: string, index: number) => (
          <SwiperSlide
            key={index}
            className={`h-full rounded-[5px] overflow-hidden relative`}
          >
            <Image
              src={item}
              alt={""}
              sizes="500px"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

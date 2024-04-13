"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import MovingComponent from "react-moving-text";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PreloadResources from "@/app/preload-resources";

function SlidingHeroSection({ setLoading, indexLoad }) {
  PreloadResources();
  useEffect(() => {
    // const img1 = new window.Image();
    // img1.src = "";
    setLoading((prevLoad) => {
      const newLoading = [...prevLoad];
      newLoading[indexLoad] = true;
      return newLoading;
    });
  }, []);
  return (
    /*On header1 pt-0 else pt-[120px]*/
    <div className="xl:pt-[80px] pt-[80px]">
      <Swiper
        // spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-[100%] mr-0 pr-0"
      >
        <SwiperSlide>
          <div className="relative xl:h-[680px] h-[50vh]">
            <div
              className="absolute inset-0 bg-cover bg-center w-full filter contrast-150 "
              style={{
                backgroundImage: `url(/sls-images/1.jpeg)`,
              }}
            >
              <div className="w-full h-full bg-blue-700/50">
                <div className="flex justify-center xl:pt-[120px] pt-[5vh] mx-[2px]">
                  <div className="gap-[-10px]">
                    <MovingComponent
                      type="fadeInFromTop"
                      duration="600ms"
                      delay="0s"
                      direction="normal"
                      timing="linear"
                      iteration="1"
                      fillMode="forwards"
                    >
                      <p className="xl:text-[50px] text-[4vh] font-medium text-white">
                        Empowering Great <br className="block xl:hidden"></br>Traders
                      </p>
                    </MovingComponent>
                    <MovingComponent
                      type="fadeInFromTop"
                      duration="500ms"
                      delay="0s"
                      direction="normal"
                      timing="linear"
                      iteration="1"
                      fillMode="forwards"
                    >
                      <p className="xl:text-[95px] text-[7vh] font-[800] text-white">
                        Empowering
                      </p>
                    </MovingComponent>
                    <MovingComponent
                      type="fadeInFromTop"
                      duration="400ms"
                      delay="0s"
                      direction="normal"
                      timing="linear"
                      iteration="1"
                      fillMode="forwards"
                    >
                      <p className="xl:text-[95px] text-[7vh] font-[800] text-white">
                        Futures.
                      </p>
                    </MovingComponent>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative xl:h-[680px] h-[50vh]">
            <div
              className="absolute inset-0 bg-cover bg-center w-full filter contrast-150"
              style={{
                backgroundImage: `url(/sls-images/2.jpeg)`,
              }}
            >
              <div className="w-full h-full bg-blue-700/50">
                <div className="flex justify-center xl:pl-[20px] xl:pt-[120px] xl:justify-start pt-[5vh] pl-[1vh]">
                  <div className="flex-col justify-start">
                    <MovingComponent
                      type="fadeInFromTop"
                      duration="600ms"
                      delay="0s"
                      direction="normal"
                      timing="linear"
                      iteration="1"
                      fillMode="forwards"
                    >
                      <p className="xl:text-[95px] text-[6vh] font-[800] text-white">
                        Unlocking
                      </p>
                    </MovingComponent>
                    <MovingComponent
                      type="fadeInFromTop"
                      duration="500ms"
                      delay="0s"
                      direction="normal"
                      timing="linear"
                      iteration="1"
                      fillMode="forwards"
                    >
                      <p className="xl:text-[95px] text-[6vh] font-[800] text-white mt-0">
                        Trading Potential
                      </p>
                    </MovingComponent>
                    <MovingComponent
                      type="fadeInFromTop"
                      duration="400ms"
                      delay="0s"
                      direction="normal"
                      timing="linear"
                      iteration="1"
                      fillMode="forwards"
                    >
                      <p className="xl:text-[50px] text-[4vh] font-medium text-white">
                        One Algorithm at a Time.
                      </p>
                    </MovingComponent>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative xl:h-[680px] h-[50vh]">
            <div
              className="absolute inset-0 bg-cover bg-center w-full filter contrast-150"
              style={{
                backgroundImage: `url(/sls-images/3.jpeg)`,
              }}
            >
              <div className="w-full h-full bg-blue-700/50">
                <div className="flex xl:justify-end justify-center xl:pt-[120px] xl:pr-[20px]  pt-[5vh] ">
                  <div className="xl:gap-[-10px] flex-col justify-start">
                    <MovingComponent
                      type="fadeInFromTop"
                      duration="600ms"
                      delay="0s"
                      direction="normal"
                      timing="linear"
                      iteration="1"
                      fillMode="forwards"
                    >
                      <p className="xl:text-[50px] text-[4.5vh] font-medium text-white">
                        Navigate the <br className="block xl:hidden"></br>Markets with
                      </p>
                    </MovingComponent>
                    <MovingComponent
                      type="fadeInFromTop"
                      duration="500ms"
                      delay="0s"
                      direction="normal"
                      timing="linear"
                      iteration="1"
                      fillMode="forwards"
                    >
                      <p className="xl:text-[95px] text-[7.5vh] font-[800] text-white">
                        Precision
                      </p>
                    </MovingComponent>
                    <MovingComponent
                      type="fadeInFromTop"
                      duration="400ms"
                      delay="0s"
                      direction="normal"
                      timing="linear"
                      iteration="1"
                      fillMode="forwards"
                    >
                      <p className="xl:text-[95px] text-[7.5vh] font-[800] text-white">
                        and Ease.
                      </p>
                    </MovingComponent>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SlidingHeroSection;

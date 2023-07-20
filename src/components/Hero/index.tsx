"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
const Hero = () => {
  return (
    <>
      <section id="home">
        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={2000}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <Image
              src="/images/hero/hero-image1.jpg"
              alt="nice"
              width={1900}
              height={800}
              style={{ zIndex: 0 }}
              className="hero-image lg:h-screen"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/hero/hero-image2.jpg"
              alt="nice"
              width={1900}
              height={800}
              style={{ zIndex: 0 }}
              className="hero-image lg:h-screen"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/hero/hero-image3.jpg"
              alt="nice"
              width={1900}
              height={800}
              style={{ zIndex: 0 }}
              className="hero-image lg:h-screen"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/hero/hero-image4.jpg"
              alt="nice"
              width={1900}
              height={800}
              style={{ zIndex: 0 }}
              className="hero-image lg:h-screen"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/hero/hero-image5.jpg"
              alt="nice"
              width={1900}
              height={800}
              style={{ zIndex: 0 }}
              className="hero-image lg:h-screen"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/hero/hero-image6.jpg"
              alt="nice"
              width={1900}
              height={800}
              style={{ zIndex: 0 }}
              className="hero-image lg:h-screen"
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Hero;

"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import heroData from "./heroData.json";
// Import Swiper styles
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./HeroSlider.module.css";
// import Slide from "react-reveal/Slide";
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";
const Hero = () => {
  return (
    <>
      <section id="home">
        <div className={styles.heroSlider}>
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
            {heroData.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className={styles.slide}>
                    <Image
                      src={item.url}
                      alt="nice"
                      width={1900}
                      height={800}
                      style={{ zIndex: 0 }}
                      className={`${styles.slideImage} slide-image hero-image lg:h-screen`}
                      // className="hero-image lg:h-screen"
                    />
                    <div className={styles.slideText + " hidden md:block"}>
                      <Slide direction="down" duration={2000} delay={500}>
                        <div>
                          <h2 className="w-96 text-5xl font-bold text-white">
                            Visit Beautiful Unleashing Places
                          </h2>
                          <Fade delay={2e3} cascade damping={2e-1}>
                            <p className="text-white text-xl">
                              We are offering you unleashing beauty places of
                              Bangladesh!
                            </p>
                          </Fade>
                        </div>
                      </Slide>
                      <Slide direction="up" duration={2000} delay={500}>
                        <Link href="/place" className={styles.btn}>
                          Visit Places
                        </Link>
                      </Slide>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Hero;

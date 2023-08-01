"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
// Import Swiper styles
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./HeroSlider.module.css";
import Slide from "react-reveal/Slide";
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
            {/* Slide 1 */}
            <SwiperSlide>
              <div className={styles.slide}>
                <Image
                  src="/images/hero/hero-image2.jpg"
                  alt="nice"
                  width={1900}
                  height={800}
                  style={{ zIndex: 0 }}
                  className={`${styles.slideImage} slide-image hero-image lg:h-screen`}
                  // className="hero-image lg:h-screen"
                />
                <div className={styles.slideText + " hidden md:block"}>
                  <h2>Slide 1 Heading</h2>
                  <p>Slide 1 Description</p>
                  <Slide distance="50%" bottom>
                    <a href="#" className={styles.btn}>
                      Button 1
                    </a>
                  </Slide>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className={styles.slide}>
                <Image
                  src="/images/hero/hero-image1.jpg"
                  alt="nice"
                  width={1900}
                  height={800}
                  style={{ zIndex: 0 }}
                  className={`${styles.slideImage} slide-image hero-image lg:h-screen`}
                  // className="hero-image lg:h-screen"
                />
                <div className={styles.slideText}>
                  <h2>Slide 2 Heading</h2>
                  <p>Slide 2 Description</p>
                  <a href="#" className={styles.btn}>
                    Button 2
                  </a>
                </div>
              </div>
            </SwiperSlide>

            {/* Add more slides as needed */}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Hero;
{
  /* <Swiper
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
        </Swiper> */
}

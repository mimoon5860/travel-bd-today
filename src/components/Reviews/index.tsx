"use client";
import SectionTitle from "../Common/SectionTitle";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
const Reviews = async () => {
  const rating = 3;
  return (
    <section id="places" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Top Reviews"
          paragraph="View Our Top Reviews Of Many Places"
          center
        />
        <div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={2000}
            loop={true}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
          >
            <SwiperSlide>
              <div className="shadow-lg rounded-lg bg">
                <div className="flex gap-2 bg-gray p-3 rounded-lg">
                  <Image
                    className="rounded-full"
                    height={50}
                    width={50}
                    src="/uploads/places/766f4c7b-4ca7-4b8f-a6ee-0a8145c75009.jpg"
                    alt=""
                  />
                  <div>
                    <h5>Mahmudul islam Moon</h5>
                    <span>24 Mar 2023</span>
                  </div>
                </div>
                <div className="p-2">
                  <div>
                    <span>
                      Modhutila is a beautyful place where you can enjoy with
                      your family
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_n, i) => {
                        return rating > i ? (
                          <AiFillStar key={i + 1} color="#FFC237" />
                        ) : (
                          <AiFillStar key={i + 1} />
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Fugit itaque, qui ducimus rem magnam sunt ipsam libero
                      dolorum minima. Consequatur, voluptas repellendus? Enim
                      culpa quisquam optio saepe! Obcaecati, omnis voluptates?
                    </p>
                  </div>
                  <div className="m-2 shadow-lg">
                    <Swiper
                      slidesPerView={3}
                      spaceBetween={30}
                      pagination={{
                        clickable: true,
                      }}
                      className="mySwiper"
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      speed={2000}
                      loop={true}
                      navigation={true}
                      modules={[Autoplay, Pagination, Navigation]}
                    >
                      <SwiperSlide>
                        <div className="p-2  shadow-md">
                          <Image
                            // className=""
                            height={100}
                            width={100}
                            src="/uploads/places/766f4c7b-4ca7-4b8f-a6ee-0a8145c75009.jpg"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="p-2  shadow-md">
                          <Image
                            // className=""
                            height={100}
                            width={100}
                            src="/uploads/places/766f4c7b-4ca7-4b8f-a6ee-0a8145c75009.jpg"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="p-2 shadow-md">
                          <Image
                            height={100}
                            width={100}
                            src="/uploads/places/766f4c7b-4ca7-4b8f-a6ee-0a8145c75009.jpg"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="p-2  shadow-md">
                          <Image
                            // className=""
                            height={100}
                            width={100}
                            src="/uploads/places/766f4c7b-4ca7-4b8f-a6ee-0a8145c75009.jpg"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="shadow-lg rounded-lg bg">
                <div className="flex gap-2 bg-gray p-3 rounded-lg">
                  <Image
                    className="rounded-full"
                    height={50}
                    width={50}
                    src="/uploads/places/766f4c7b-4ca7-4b8f-a6ee-0a8145c75009.jpg"
                    alt=""
                  />
                  <div>
                    <h5>Mahmudul islam Moon</h5>
                    <span>24 Mar 2023</span>
                  </div>
                </div>
                <div className="p-2">
                  <div>
                    <span>
                      Modhutila is a beautyful place where you can enjoy with
                      your family
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_n, i) => {
                        return rating > i ? (
                          <AiFillStar key={i + 1} color="#FFC237" />
                        ) : (
                          <AiFillStar key={i + 1} />
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Fugit itaque, qui ducimus rem magnam sunt ipsam libero
                      dolorum minima. Consequatur, voluptas repellendus? Enim
                      culpa quisquam optio saepe! Obcaecati, omnis voluptates?
                    </p>
                  </div>
                  <div className="m-2 shadow-lg">
                    <Swiper
                      slidesPerView={3}
                      spaceBetween={30}
                      pagination={{
                        clickable: true,
                      }}
                      className="mySwiper"
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      speed={2000}
                      loop={true}
                      navigation={true}
                      modules={[Autoplay, Pagination, Navigation]}
                    >
                      <SwiperSlide>
                        <div className="p-2  shadow-md">
                          <Image
                            // className=""
                            height={100}
                            width={100}
                            src="/uploads/places/766f4c7b-4ca7-4b8f-a6ee-0a8145c75009.jpg"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="p-2  shadow-md">
                          <Image
                            // className=""
                            height={100}
                            width={100}
                            src="/uploads/places/766f4c7b-4ca7-4b8f-a6ee-0a8145c75009.jpg"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="p-2 shadow-md">
                          <Image
                            height={100}
                            width={100}
                            src="/uploads/places/766f4c7b-4ca7-4b8f-a6ee-0a8145c75009.jpg"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="p-2  shadow-md">
                          <Image
                            // className=""
                            height={100}
                            width={100}
                            src="/uploads/places/766f4c7b-4ca7-4b8f-a6ee-0a8145c75009.jpg"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Reviews;

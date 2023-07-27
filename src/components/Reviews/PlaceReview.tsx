"use client";
import { IReview } from "@/types/review";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import dayjs from "dayjs";

export default function PlaceReview({ reviews }: { reviews: IReview[] }) {
  return (
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
        {reviews.map((review) => {
          return (
            <SwiperSlide key={review.id}>
              <div className="shadow-lg rounded-lg bg">
                <div className="flex gap-2 bg-gray p-3 rounded-lg">
                  <Image
                    className="rounded-full"
                    height={50}
                    width={50}
                    src={
                      review.user.photo
                        ? `/uploads/user/${review.user.photo}`
                        : "/images/testimonials/demo-author.png"
                    }
                    alt=""
                  />
                  <div>
                    <h5>{review.user.name}</h5>
                    <span>
                      {dayjs(review.createdAt).format("DD MMMM YYYY")}
                    </span>
                  </div>
                </div>
                <div className="p-2">
                  <div className="flex items-center gap-3">
                    <span>Rating</span>
                    <div className="flex">
                      {[...Array(5)].map((_n, i) => {
                        return review.rating > i ? (
                          <AiFillStar key={i + 1} color="#FFC237" />
                        ) : (
                          <AiFillStar key={i + 1} />
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <p>{review.review}</p>
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
                      {review.reviewContent.map((item) => {
                        return (
                          <SwiperSlide key={item.id}>
                            <div className="p-2  shadow-md">
                              <Image
                                // className=""
                                height={100}
                                width={100}
                                src={`/uploads/reviews/${item.fileName}`}
                                alt=""
                              />
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

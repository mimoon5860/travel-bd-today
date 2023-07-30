"use client";
import SectionTitle from "../Common/SectionTitle";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import { getReviews } from "@/utils/actions/reveiw";
import dayjs from "dayjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IReview } from "@/types/review";

const Reviews = () => {
  const [reviews, setReviews] = useState<IReview[]>([]);

  useEffect(() => {
    (async () => {
      const reviews = await getReviews({ status: "active" });
      setReviews(reviews);
    })();
  }, []);

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
            // slidesPerView={"auto"}
            breakpoints={{
              // when window width is >= 640px
              640: {
                width: 640,
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 2,
              },
            }}
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
                            ? `/uploads/${review.user.photo}`
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
                      <Link
                        className="text-primary"
                        href={`/place/${review.place.id}`}
                      >
                        {review.place.title}
                      </Link>
                      <div className="flex items-center gap-3">
                        <span>Rating</span>
                        <Rating
                          size={30}
                          transition
                          allowFraction
                          readonly
                          disableFillHover
                          showTooltip
                          SVGstyle={{ display: "inline" }}
                          initialValue={review.rating}
                        />
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
                                    src={`/uploads/${item.fileName}`}
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
      </div>
    </section>
  );
};
export default Reviews;

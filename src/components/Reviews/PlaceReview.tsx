"use client";
import { IReview } from "@/types/review";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Rating } from "react-simple-star-rating";
import Image from "next/image";
import dayjs from "dayjs";
import { useState } from "react";
import ReviewModal from "./ReviewModal";
import { useSession } from "next-auth/react";

interface IProps {
  reviews: IReview[];
  placeId: string;
}

export default function PlaceReview({ reviews, placeId }: IProps) {
  const [modalState, setModalState] = useState(false);
  const { status, data } = useSession();
  const show = () => {
    setModalState(true);
  };
  const hide = () => {
    setModalState(false);
  };

  return (
    <div>
      <div className="my-3 flex justify-between">
        <h3 className="font-bold text-xl">Reviews:</h3>
        {status === "authenticated" && (
          <button
            className="cursor-pointer text-white rounded-md px-4 py-3 text-center text-sm font-semibold bg-primary uppercase transition duration-200 ease-in-out "
            onClick={show}
          >
            Add Review
          </button>
        )}
      </div>
      {reviews.length ? (
        <Swiper
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
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-xl">Rating:</span>
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
      ) : (
        <h3 className="text-center text-xl">No review found...</h3>
      )}
      <ReviewModal
        hide={hide}
        modalState={modalState}
        placeId={placeId}
        userId={data?.user?.id}
      />
    </div>
  );
}

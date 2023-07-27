import { IPlaceDetails } from "@/types/place";
import { getSinglePlace } from "@/utils/actions/place";
import Image from "next/image";
import dayjs from "dayjs";
import PlaceReview from "@/components/Reviews/PlaceReview";

const Page = async ({ params }: { params: { id: string } }) => {
  const place: IPlaceDetails = await getSinglePlace(params.id);

  if (!place) {
    return (
      <div className="container">
        <p className="text-center pt-5">Not found</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div>
        <h2 className="text-2xl">{place.title}</h2>
        <div className="flex items-center justify-between my-2">
          <div className="flex items-center gap-1">
            <Image
              src={
                place.author.photo
                  ? `/uploads/user/${place.author.photo}`
                  : "/images/testimonials/demo-author.png"
              }
              className="rounded-full"
              alt=""
              width={30}
              height={30}
            />
            <p className="text-sm text-gray">{place.author.name}</p>
          </div>
          <p className="text-sm">
            {dayjs(place.createdAt).format("DD MMMM YYYY")}
          </p>
        </div>
      </div>
      <div className="mt-2">
        <div className="mb-8">
          <Image
            src={`/uploads/places/${place.coverImage}`}
            alt="Article cover"
            className="mx-auto"
            width={700}
            height={700}
          />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: place.description }}
          className="mt-2"
        ></div>
      </div>
      <div>
        {place.review.length ? (
          <PlaceReview reviews={place.review} />
        ) : (
          <h3>No review</h3>
        )}
      </div>
    </div>
  );
  ``;
};

export default Page;

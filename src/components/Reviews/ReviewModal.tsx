"use client";
import { createReview } from "@/utils/actions/reveiw";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import Rodal from "rodal";

interface IProps {
  modalState: boolean;
  hide: () => void;
  placeId: string;
  userId: string;
}

const tooltipArray = [
  "Terrible",
  "Terrible+",
  "Bad",
  "Bad+",
  "Average",
  "Average+",
  "Great",
  "Great+",
  "Awesome",
  "Awesome+",
];
const fillColorArray = [
  "#f17a45",
  "#f17a45",
  "#f19745",
  "#f19745",
  "#f1a545",
  "#f1a545",
  "#f1b345",
  "#f1b345",
  "#f1d045",
  "#f1d045",
];

interface IInput {
  rating: string;
  userId: string;
  placeId: string;
  review: string;
}

const ReviewModal = ({ modalState, hide, placeId, userId }: IProps) => {
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState<IInput>({
    rating: "5",
    userId: userId,
    review: "",
    placeId,
  });
  const [photos, setPhotos] = useState([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputs.review) {
      alert("You must write something for add review!");
      return;
    }
    setLoading(true);

    const formData = new FormData();

    formData.append("userId", inputs.userId);
    formData.append("placeId", inputs.placeId);
    formData.append("rating", inputs.rating);
    formData.append("review", inputs.review);

    photos.forEach((photo, index) => {
      formData.append(`review_photo${index + 1}`, photo);
    });
    const res = await createReview(formData);

    if (res.success) {
      setInputs({
        rating: "5",
        userId: "1",
        review: "",
        placeId,
      });
      setLoading(false);
      alert("Your review created!");
      hide();
    } else {
      alert("Cannot create review now!");
      setLoading(false);
    }
  };

  const handleRating = (rate: number) => {
    setInputs({ ...inputs, rating: rate.toString() });
  };

  return (
    <Rodal width={410} height={550} visible={modalState} onClose={hide}>
      <div className="dark:bg-dark">
        <h3 className="font-bold text-xl">Add Review</h3>

        <hr />
        <form onSubmit={handleSubmit} className="mt-2" action="">
          <textarea
            className="border"
            placeholder="Write review..."
            name="review"
            id=""
            cols={40}
            rows={5}
            style={{ resize: "none" }}
            onChange={(e) => {
              setInputs({ ...inputs, review: e.target.value });
            }}
            value={inputs.review}
          ></textarea>
          <div className="mt-2 mb-3">
            <h3>Mark your rating:</h3>
            <Rating
              onClick={handleRating}
              size={40}
              transition
              allowFraction
              showTooltip
              tooltipArray={tooltipArray}
              fillColorArray={fillColorArray}
              SVGstyle={{ display: "inline" }}
              initialValue={5}
            />
          </div>
          <h3>Upload review photos:</h3>
          <div className="flex flex-col gap-3">
            <input
              onChange={(e) => setPhotos([...photos, e.target.files[0]])}
              type="file"
              name="review_photo1"
            />
            <input
              onChange={(e) => setPhotos([...photos, e.target.files[0]])}
              type="file"
              name="review_photo2"
            />
            <input
              onChange={(e) => setPhotos([...photos, e.target.files[0]])}
              type="file"
              name="review_photo3"
            />
            <input
              onChange={(e) => setPhotos([...photos, e.target.files[0]])}
              type="file"
              name="review_photo4"
            />
            <input
              onChange={(e) => setPhotos([...photos, e.target.files[0]])}
              type="file"
              name="review_photo5"
            />
          </div>
          <div className="text-center">
            <input
              className="cursor-pointer text-white rounded-md px-5 py-2 text-center text-sm font-semibold bg-primary uppercase transition duration-200 ease-in-out mt-3"
              type="submit"
              name="submit"
              id=""
              value={loading ? "Please wait..." : "Submit"}
              disabled={loading}
            />
          </div>
        </form>
      </div>
    </Rodal>
  );
};

export default ReviewModal;

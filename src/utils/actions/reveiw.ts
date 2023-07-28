import { IResponse } from "@/types/response";
import { IReview } from "@/types/review";
import { fetcherGet, fetcherPost } from "../fetcher";
import { baseUrl } from "../constants";

const url = `${baseUrl}/review`;
export const getReviews: () => Promise<IReview[]> = async () => {
  const data: IResponse<IReview[]> = await fetcherGet(url);
  if (data.success) {
    return data.data;
  } else {
    return [];
  }
};

export const createReview = async (body: FormData) => {
  return await fetcherPost(url, body);
};

import { IResponse } from "@/types/response";
import { IReview } from "@/types/review";
import { fetcherGet, fetcherPost } from "../fetcher";
import { baseUrl } from "../constants";
interface IParams {
  [key: string]: string | undefined;
}
let url = `${baseUrl}/review?`;
export const getReviews: (params?: IParams) => Promise<IReview[]> = async (
  params
) => {
  if (params?.status) {
    url += `status=${params.status}&`;
  }

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

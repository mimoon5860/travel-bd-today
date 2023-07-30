import { IResponse } from "@/types/response";
import { fetcherGet, fetcherPatch } from "../fetcher";
import { IPlaceDetails, IPlaceLIst } from "@/types/place";
import { baseUrl } from "../constants";

interface IParams {
  [key: string]: string | undefined;
}

export const getPlaces: (params?: IParams) => Promise<IPlaceLIst[]> = async (
  params
) => {
  let url = `${baseUrl}/place?`;

  if (params?.division) {
    url += `division_id=${params.division}&`;
  }

  if (params?.author_id) {
    url += `author_id=${params.author_id}&`;
  }

  if (params?.status) {
    url += `status=${params.status}&`;
  }

  if (params?.limit) {
    url += `limit=${params.limit}&`;
  }

  if (params?.skip) {
    url += `skip=${params.skip}&`;
  }

  const data: IResponse<IPlaceLIst[]> = await fetcherGet(url);
  if (data.success) {
    return data.data;
  } else {
    return [];
  }
};

export const getSinglePlace: (id: string) => Promise<any> = async (id) => {
  const data: IResponse<IPlaceDetails> = await fetcherGet(
    `${baseUrl}/place/${id}`
  );
  if (data.success) {
    return data.data;
  } else {
    return null;
  }
};

export const updateSinglePlace: (
  id: number,
  body: any
) => Promise<any> = async (id, body) => {
  return await fetcherPatch(`${baseUrl}/place/${id}`, body);
};

import { IResponse } from "@/types/response";
import { fetcherGet } from "../fetcher";
import { IPlaceDetails, IPlaceLIst } from "@/types/place";
import { baseUrl } from "../constants";

export const getPlaces = async () => {
  const data: IResponse<IPlaceLIst[]> = await fetcherGet(`/api/place`);
  if (data.success) {
    return data.data;
  } else {
    return [];
  }
};

export const getSinglePlace = async (id: string) => {
  const data: IResponse<IPlaceDetails> = await fetcherGet(
    `${baseUrl}/place/${id}`
  );
  if (data.success) {
    return data.data;
  } else {
    return null;
  }
};

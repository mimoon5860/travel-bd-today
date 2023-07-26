import { IResponse } from "@/types/response";
import { fetcherGet } from "../fetcher";
import { IPlaceDetails, IPlaceLIst } from "@/types/place";
import { baseUrl } from "../constants";

export const getPlaces: () => Promise<IPlaceLIst[]> = async () => {
  const data: IResponse<IPlaceLIst[]> = await fetcherGet(`${baseUrl}/place`);
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

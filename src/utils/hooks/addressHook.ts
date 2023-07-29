import {
  // IAddress,
  // IAddressSelect,
  IDistrict,
  IDivision,
  IThana,
} from "@/types/address";
import { IResponse } from "@/types/response";
import { fetcherGet } from "../fetcher";

// const address: IAddress = {
//   division: [],
//   district: [],
//   thana: [],
// };

// const addressSelect: IAddressSelect = {
//   division: 0,
//   district: 0,
//   thana: 0,
// };

export const getDivision = async () => {
  const data: IResponse<IDivision[]> = await fetcherGet(
    `/api/address/division`
  );
  if (data.success) {
    return data.data;
  } else {
    return [];
  }
};

export const getDistrict = async (id: number) => {
  const data: IResponse<IDistrict[]> = await fetcherGet(
    `/api/address/district?divisionId=${id}`
  );
  if (data.success) {
    return data.data;
  } else {
    return [];
  }
};

export const getThana = async (id: number) => {
  const data: IResponse<IThana[]> = await fetcherGet(
    `/api/address/thana?districtId=${id}`
  );
  if (data.success) {
    return data.data;
  } else {
    return [];
  }
};

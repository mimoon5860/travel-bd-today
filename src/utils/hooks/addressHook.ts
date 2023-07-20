import {
  IAddress,
  IAddressSelect,
  IDistrict,
  IDivision,
  IThana,
} from "@/types/address";
import { IResponse } from "@/types/response";
import { fetcherGet } from "../fetcher";

const address: IAddress = {
  division: [],
  district: [],
  thana: [],
};

const addressSelect: IAddressSelect = {
  division: 0,
  district: 0,
  thana: 0,
};

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

const selectDivision = async (id: number) => {
  // setAddressSelect({ division: id, district: 0, thana: 0 });
  addressSelect.division = id;
  addressSelect.district = 0;
  addressSelect.thana = 0;
  const data: IResponse<IDistrict[]> = await fetcherGet(
    `/api/address/district?divisionId=${id}`
  );
  if (data.success) {
    //   setAddress({ ...address, district: data.data || [], thana: [] });
    address.district = data.data || [];
    address.thana = [];
  }
};

const selectDistrict = async (id: number) => {
  // setAddressSelect({ ...addressSelect, district: id, thana: 0 });
  addressSelect.district = id;
  addressSelect.thana = 0;
  const data: IResponse<IThana[]> = await fetcherGet(
    `/api/address/thana?districtId=${id}`
  );
  if (data.success) {
    //   setAddress({ ...address, thana: data.data || [] });
    address.thana = data.data || [];
  }
};

const selectThana = async (id: number) => {
  // setAddressSelect({ ...addressSelect, thana: id });
  addressSelect.thana = id;
};

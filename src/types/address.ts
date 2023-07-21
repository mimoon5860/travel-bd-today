export interface IAddressInput {
  division: string;
  district: string;
  thana: string;
}

export interface IAddress {
  division: IDivision[];
  district: IDistrict[];
  thana: IThana[];
}

export interface IAddressSelect {
  division: number;
  district: number;
  thana: number;
}

export interface IDivision {
  id: number;
  name: string;
  bn_name?: string;
  url?: string;
}
export interface IDistrict {
  id: number;
  name: string;
  bn_name?: string;
  lat?: string;
  lon?: string;
  url?: string;
  division_id?: number;
  division?: IDivision;
}
export interface IThana {
  id: number;
  name: string;
  bn_name?: string;
  url?: string;
  district_id?: number;
  district?: IDistrict;
}

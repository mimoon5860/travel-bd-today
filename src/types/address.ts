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
}
export interface IDistrict {
  id: number;
  name: string;
  divisionId?: number;
  division?: IDivision;
}
export interface IThana {
  id: number;
  name: string;
  districtId?: number;
  district?: IDistrict;
}

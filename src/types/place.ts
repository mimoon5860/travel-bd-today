import { IReview } from "./review";

export interface IPlaceLIst {
  id: number;
  title: string;
  coverImage: string;
  status: boolean;
  createdAt: string;
}

interface IAuthor {
  id: number;
  name: string;
  photo: string | null;
}

interface IAddress {
  name: string;
  district: {
    name: string;
    division: {
      name: string;
    };
  };
}

export interface IPlaceDetails {
  id: number;
  title: string;
  coverImage: string;
  description: string;
  author: IAuthor;
  thana: IAddress;
  review: IReview[];
  status: boolean;
  createdAt: string;
}

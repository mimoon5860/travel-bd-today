export interface IApiIdParams {
  params: { id: string };
}

export interface IApiQuery {
  placeId?: string;
}

export interface IReview {
  id: number;
  rating: number;
  review: string;
  createdAt: string;
  user: {
    id: number;
    name: string;
    photo: string | null;
  };
  reviewContent: {
    id: number;
    fileName: string;
    type: "photo" | "video";
  }[];
}

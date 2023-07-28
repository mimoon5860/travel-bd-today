import { baseUrl } from "../constants";
import { fetcherPost } from "../fetcher";

export const createAccount = async (body: any) => {
  const url = `${baseUrl}/signup`;
  return await fetcherPost(url, body);
};

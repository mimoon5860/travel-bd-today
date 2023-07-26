import axios from "axios";

export const fetcherGet = async (url: string) => {
  try {
    const data = await axios.get(url);
    console.log({ data });
    return data.data;
  } catch (err: any) {
    // console.log({ err });
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};

export const fetcherPost = async (url: string, body: any) => {
  try {
    const data = await axios.post(url, body);
    console.log({ data });

    return data.data;
  } catch (err: any) {
    // console.log({err})

    return {
      success: false,
      message: "Something went wrong",
    };
  }
};

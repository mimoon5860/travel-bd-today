"use client";
import { fetcherPost } from "@/utils/fetcher";
import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { IAddress, IAddressSelect } from "@/types/address";
import { getDistrict, getDivision, getThana } from "@/utils/hooks/addressHook";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const Page = () => {
  const [writtedBlog, setwrittenBlog] = useState("");
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [addressSelect, setAddressSelect] = useState<IAddressSelect>({
    division: 0,
    district: 0,
    thana: 0,
  });
  const [address, setAddress] = useState<IAddress>({
    division: [],
    district: [],
    thana: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const division = await getDivision();
      setAddress((address) => {
        return { ...address, division };
      });
      setLoading(false);
    })();
  }, []);

  const editor = useRef(null);

  const handleSubmit = async () => {
    if (!title) {
      alert("Title is empty");
      return;
    }
    if (!thumbnail) {
      alert("Must select thumbnail photo");
      return;
    }
    if (!addressSelect.thana) {
      alert("Must select a thana");
      return;
    }
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("coverImage", thumbnail);
    formData.append("thanaId", addressSelect.thana.toString());
    formData.append("authorId", "1");
    formData.append("description", writtedBlog);

    const data = await fetcherPost("/api/place", formData);

    if (data.success) {
      setTitle("");
      setwrittenBlog("");
      setThumbnail("");
      setLoading(false);
      alert("Place added");
    } else {
      setLoading(false);
      alert("place not added");
    }
  };

  return (
    <div className="container">
      <div className="center-info">
        <main>
          <div className="mb-7 grid md:grid-cols-4 row-reverse">
            <div className="md:col-span-1 place-self-center md:place-self-end md:order-last">
              <button
                disabled={loading}
                onClick={handleSubmit}
                className="cursor-pointer text-white rounded-md px-4 py-3 text-center text-sm font-semibold bg-primary uppercase transition duration-200 ease-in-out "
              >
                {loading ? "Loading..." : "Add Place"}
              </button>
            </div>
            <div className="md:col-span-3 mt-4 md:mt-0">
              <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter place name"
                className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
              />
            </div>
          </div>

          <div className="grid xs:grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label>
                <p>Upload thumbnail photo:</p>
                <input
                  onChange={(event: any) => setThumbnail(event.target.files[0])}
                  style={{ padding: "0" }}
                  type="file"
                  name="thumbnail"
                  id="thumbnail"
                />
              </label>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select division
              </label>
              <select
                onChange={async (event) => {
                  setLoading(true);
                  setAddressSelect({
                    thana: 0,
                    district: 0,
                    division: parseInt(event.target.value),
                  });
                  const district = await getDistrict(
                    parseInt(event.target.value)
                  );
                  setAddress({ ...address, district: district, thana: [] });
                  setLoading(false);
                }}
                id="division"
                defaultValue=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option disabled value="">
                  Choose a division
                </option>
                {address.division.map((item) => {
                  return (
                    <option value={item.id} key={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select district
              </label>
              <select
                id="district"
                defaultValue=""
                onChange={async (event) => {
                  setLoading(true);
                  setAddressSelect({
                    division: addressSelect.division,
                    district: parseInt(event.target.value),
                    thana: 0,
                  });
                  const thana = await getThana(parseInt(event.target.value));
                  setAddress({ ...address, thana });
                  setLoading(false);
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option disabled value="">
                  Choose a district
                </option>
                {address.district.map((item) => {
                  return (
                    <option value={item.id} key={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select thana
              </label>
              <select
                id="thana"
                defaultValue=""
                onChange={(event) =>
                  setAddressSelect({
                    ...addressSelect,
                    thana: parseInt(event.target.value),
                  })
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option disabled value="">
                  Choose a thana
                </option>
                {address.thana.map((item) => {
                  return (
                    <option value={item.id} key={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <br />
          <div>
            <p>
              <strong>Post details:</strong>
            </p>
            <JoditEditor
              // config={useMemo({placeholder:"Start"},['Start wrining...'])}
              ref={editor}
              className="text-black"
              value={writtedBlog}
              onBlur={(newContent) => setwrittenBlog(newContent)}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page;

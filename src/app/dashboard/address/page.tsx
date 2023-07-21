"use client";
import { IAddress, IAddressInput, IAddressSelect } from "@/types/address";
import { fetcherPost } from "@/utils/fetcher";
import { getDistrict, getDivision, getThana } from "@/utils/hooks/addressHook";
import { useEffect, useState } from "react";

const Page = () => {
  const [addressInput, setAddressInput] = useState<IAddressInput>({
    division: "",
    district: "",
    thana: "",
  });

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

  useEffect(() => {
    (async () => {
      const division = await getDivision();
      setAddress((address) => {
        return { ...address, division };
      });
    })();
  }, []);

  const handleInsertDistrict = async () => {
    const data = await fetcherPost("/api/address/district", {
      division_id: addressSelect.division,
      name: addressInput.district,
    });

    if (data.success) {
      alert("District added!");
      const district = [
        ...address.district,
        { id: data.data.id, name: data.data.name },
      ];
      setAddress({ ...address, district });
      setAddressInput({ ...addressInput, district: "" });
    } else {
      alert(data.message);
    }
  };

  const handleInsertThana = async () => {
    const data = await fetcherPost("/api/address/thana", {
      district_id: addressSelect.district,
      name: addressInput.thana,
    });
    if (data.success) {
      alert("Thana added!");
      const thana = [
        ...address.thana,
        { id: data.data.id, name: data.data.name },
      ];
      setAddress({ ...address, thana });
      setAddressInput({ ...addressInput, thana: "" });
    } else {
      alert(data.message);
    }
  };

  return (
    <div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Select division
        </label>
        <select
          onChange={async (event) => {
            setAddressSelect({
              thana: 0,
              district: 0,
              division: parseInt(event.target.value),
            });
            const district = await getDistrict(parseInt(event.target.value));
            setAddress({ ...address, district: district, thana: [] });
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
      {addressSelect.division ? (
        <div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select district
            </label>
            <select
              id="district"
              defaultValue=""
              onChange={async (event) => {
                setAddressSelect({
                  division: addressSelect.division,
                  district: parseInt(event.target.value),
                  thana: 0,
                });
                const thana = await getThana(parseInt(event.target.value));
                setAddress({ ...address, thana });
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
          <div className="my-2">
            <input
              onChange={(e) =>
                setAddressInput({ ...addressInput, district: e.target.value })
              }
              value={addressInput.district}
              type="text"
              id="default-input"
              placeholder="Enter district name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <button
              type="button"
              className="px-5 py-2.5 text-sm font-medium border rounded ms-2"
              onClick={handleInsertDistrict}
            >
              Add District
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      {addressSelect.district ? (
        <div>
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
          <div className="my-2">
            <input
              onChange={(e) =>
                setAddressInput({ ...addressInput, thana: e.target.value })
              }
              type="text"
              id="default-input"
              value={addressInput.thana}
              placeholder="Enter thana name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <button
              type="button"
              className="px-5 py-2.5 text-sm font-medium border rounded ms-2"
              onClick={handleInsertThana}
            >
              Add Thana
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Page;

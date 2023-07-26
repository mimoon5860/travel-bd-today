import PlaceCard from "@/components/Places/PlaceCard";
import { IPlaceLIst } from "@/types/place";
import { getPlaces } from "@/utils/actions/place";
// import { useEffect, useState } from "react";

const Page = async () => {
  // const [places, setPlaces] = useState<IPlaceLIst[]>([]);

  // useEffect(() => {
  //   (async () => {
  //     const places = await getPlaces();
  //     setPlaces(places);
  //   })();
  // }, []);

  // const updateStatus = async (id: number, status: boolean) => {
  //   const select = window.confirm(
  //     `You want to ${status ? "Deactive" : "Active"} this article?`
  //   );

  //   if (select) {
  //     setPlaces(
  //       places.map((item) => {
  //         if (item.id === id) {
  //           item.status = !status;
  //         }
  //         return item;
  //       })
  //     );
  //   }
  // };

  const places: IPlaceLIst[] = await getPlaces();
  console.log({ places });

  return (
    <div className="container">
      <div className="grid md:grid-cols-5 grid-cols-2 gap-2">
        {places.map((place: IPlaceLIst) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
};

export default Page;

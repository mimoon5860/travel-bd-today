"use client";
import NotFound from "@/components/NotFound/NotFound";
import PlaceCard from "@/components/Places/PlaceCard";
import { IPlaceLIst } from "@/types/place";
import { getPlaces } from "@/utils/actions/place";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
interface IFilter {
  [key: string]: string | undefined;
}
const Page = () => {
  const [places, setPlaces] = useState<IPlaceLIst[]>([]);
  const { data } = useSession();

  useEffect(() => {
    const filter: IFilter = {};
    (async () => {
      if (data.user.role === "User") {
        filter.author_id = data.user.id;
      }
      const division = await getPlaces(filter);
      setPlaces(division);
    })();
  }, [data.user]);

  return (
    <div className="container">
      {places.length ? (
        <div className="grid md:grid-cols-5 grid-cols-2 gap-2">
          {places.map((place) => {
            return <PlaceCard key={place.id} place={place} />;
          })}
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Page;

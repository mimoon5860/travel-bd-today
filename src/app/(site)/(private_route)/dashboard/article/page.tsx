"use client";
import NotFound from "@/components/NotFound/NotFound";
import PlaceCard from "@/components/Places/PlaceCard";
import { IPlaceLIst } from "@/types/place";
import { getPlaces } from "@/utils/actions/place";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import AwesomeLoadingPage from "@/components/Loading/Loading";
interface IFilter {
  [key: string]: string | undefined;
}
const Page = () => {
  const [places, setPlaces] = useState<IPlaceLIst[]>([]);
  const { data } = useSession();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const filter: IFilter = {};
    if (!places.length) {
      (async () => {
        if (data.user.role === "User") {
          filter.author_id = data.user.id;
        }
        const division = await getPlaces(filter);
        setPlaces(division);
      })();
    }
    setLoading(false);
  }, [data.user, places.length]);

  if (loading) {
    return <AwesomeLoadingPage />;
  }

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

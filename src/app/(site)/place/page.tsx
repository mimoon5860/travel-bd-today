"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import AwesomeLoadingPage from "@/components/Loading/Loading";
import NotFound from "@/components/NotFound/NotFound";
import PlaceCardForPublic from "@/components/Places/PlaceCardForPublic";
import { IPlaceLIst } from "@/types/place";
import { getPlaces } from "@/utils/actions/place";
import { useEffect, useState } from "react";

const Page = ({
  searchParams,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | undefined };
}) => {
  const [places, setPlaces] = useState<IPlaceLIst[]>([]);
  const [loading, setLoading] = useState(true);

  let desc = "Visit your favorite place";

  if (searchParams.title) {
    desc = `Search result of "${searchParams.title}"`;
  }

  if (searchParams.division && searchParams.name) {
    desc = `Places of ${searchParams.name} division`;
  }

  useEffect(() => {
    (async () => {
      const places: IPlaceLIst[] = await getPlaces({
        ...searchParams,
        status: "active",
      });
      setPlaces(places);
    })();
    setLoading(false);
  }, [searchParams]);

  if (loading) {
    return <AwesomeLoadingPage />;
  }
  return (
    <>
      <Breadcrumb pageName="Places" description={desc} />
      {places.length ? (
        <div className="grid md:grid-cols-4 grid-cols-2 mt-2 gap-5 mb-5">
          {places.map((place: IPlaceLIst) => (
            <PlaceCardForPublic key={place.id} place={place} />
          ))}
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Page;

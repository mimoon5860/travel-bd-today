"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import AwesomeLoadingPage from "@/components/Loading/Loading";
import NotFound from "@/components/NotFound/NotFound";
import PlaceCardForPublic from "@/components/Places/PlaceCardForPublic";
import { IPlaceLIst } from "@/types/place";
import { getPlaces } from "@/utils/actions/place";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const [places, setPlaces] = useState<IPlaceLIst[]>([]);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const name = searchParams.get("name");
  const division = searchParams.get("division");

  let desc = "Visit your favorite place";

  if (title) {
    desc = `Search result of "${title}"`;
  }

  if (division && name) {
    desc = `Places of ${name} division`;
  }

  useEffect(() => {
    const searchParams: any = {};

    if (title) {
      searchParams.title = title;
    }

    if (division) {
      searchParams.division = division;
    }
    (async () => {
      const places: IPlaceLIst[] = await getPlaces({
        ...searchParams,
        status: "active",
      });
      setPlaces(places);
    })();
    setLoading(false);
  }, [division, title]);

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

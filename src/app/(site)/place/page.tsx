import NotFound from "@/components/NotFound/NotFound";
import PlaceCardForPublic from "@/components/Places/PlaceCardForPublic";
import { IPlaceLIst } from "@/types/place";
import { getPlaces } from "@/utils/actions/place";

const Page = async ({
  searchParams,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | undefined };
}) => {
  const places: IPlaceLIst[] = await getPlaces({
    ...searchParams,
    status: "active",
  });

  return (
    <>
      {places.length ? (
        <div className="grid md:grid-cols-4 grid-cols-2 gap-5 mb-5">
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

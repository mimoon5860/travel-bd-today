import PlaceCardForPublic from "@/components/Places/PlaceCardForPublic";
import { IPlaceLIst } from "@/types/place";
import { getPlaces } from "@/utils/actions/place";

const Page = async () => {
  const places: IPlaceLIst[] = await getPlaces();

  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-5 mb-5">
      {places.map((place: IPlaceLIst) => (
        <PlaceCardForPublic key={place.id} place={place} />
      ))}
    </div>
  );
};

export default Page;

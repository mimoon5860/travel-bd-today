import { fetcherGet } from "@/utils/fetcher";
import SectionTitle from "../Common/SectionTitle";
import { getPlaces } from "@/utils/actions/place";
import { IPlaceLIst } from "@/types/place";
import PlaceCardForPublic from "./PlaceCardForPublic";

const Places = async () => {
  const data = await getPlaces();
  return (
    <section id="places" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Popular places"
          paragraph="Visit some popular places of Bangladesh"
          center
        />
        <div>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
            {data.map((place: IPlaceLIst) => (
              <PlaceCardForPublic key={place.id} place={place} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Places;

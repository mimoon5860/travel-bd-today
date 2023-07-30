"use client";
import SectionTitle from "../Common/SectionTitle";
import { getPlaces } from "@/utils/actions/place";
import { IPlaceLIst } from "@/types/place";
import PlaceCardForPublic from "./PlaceCardForPublic";
import { useEffect, useState } from "react";

const Places = async () => {
  const [places, setPlaces] = useState<IPlaceLIst[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getPlaces({ status: "active", limit: "8" });
      setPlaces(data);
    })();
  }, []);

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
            {places.map((place: IPlaceLIst) => (
              <PlaceCardForPublic key={place.id} place={place} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Places;

import React from "react";
import SectionTitle from "../Common/SectionTitle";

const TravelTipsSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Travel Tips"
          paragraph="Make the most out of your travel adventures with these helpful tips
          and advice."
          center
        />

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">
              1. Pack Light and Smart
            </h3>
            <p className="text-gray-700">
              Choose versatile clothing, pack travel-sized toiletries, and roll
              your clothes to save space.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">
              2. Research Local Customs
            </h3>
            <p className="text-gray-700">
              Learn about the culture, customs, and etiquette of your
              destination to show respect to locals.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">
              3. Stay Hydrated and Rested
            </h3>
            <p className="text-gray-700">
              Drink plenty of water, get enough sleep, and listen to your body
              while exploring.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">4. Capture Memories</h3>
            <p className="text-gray-700">
              Take photos, keep a travel journal, or create videos to preserve
              your travel experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelTipsSection;

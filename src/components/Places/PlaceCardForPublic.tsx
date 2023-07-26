import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { IPlaceLIst } from "@/types/place";

interface PageProps {
  place: IPlaceLIst;
}

const PlaceCardForPublic = async ({ place }: PageProps) => {
  return (
    <div className="max-w-sm rounded-lg shadow">
      <Image
        className="rounded-t-lg"
        height={500}
        width={500}
        src={`/uploads/places/${place.coverImage}`}
        alt={place.title}
      />
      <div className="p-1 flex flex-col justify-between ">
        <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900">
          {place.title}
        </h5>
        <div className="flex items-center justify-between">
          <Link
            href={`/dashboard/article/${place.id}`}
            className="inline-flex bg-primary items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4"
          >
            Read more
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlaceCardForPublic;

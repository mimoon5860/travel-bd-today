import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { IPlaceLIst } from "@/types/place";

interface PageProps {
  place: IPlaceLIst;
}

const PlaceCard = async ({ place }: PageProps) => {
  return (
    <div className="max-w-sm rounded-lg shadow">
      <Image
        className="rounded-t-lg"
        height={500}
        width={500}
        src={`/uploads/${place.coverImage}`}
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
          <span
            // onClick={() => updateStatus(place.id, place.status)}
            className={`px-2 py-1 rounded-lg text-white ${
              place.status ? "bg-success" : "bg-danger"
            } opacity-50 hover:opacity-100 duration-200 cursor-pointer`}
          >
            {place.status ? "Active" : "Inactive"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;

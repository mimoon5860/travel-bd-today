import { fetcherGet } from "@/utils/fetcher";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const Places = async () => {
  const data = await fetcherGet("");
  return (
    <section id="places" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Popular places"
          paragraph="Visit some popular places of Bangladesh"
          center
        />
        <div>
          <div className="max-w-sm  border border-gray-200 rounded-lg shadow">
            <Link href="/">
              <Image
                className="rounded-t-lg"
                height={500}
                width={500}
                src="/uploads/places/766f4c7b-4ca7-4b8f-a6ee-0a8145c75009.jpg"
                alt=""
              />
            </Link>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <a
                href="#"
                className="inline-flex bg-primary items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <FiArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Places;

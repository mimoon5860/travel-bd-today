import { Feature } from "@/types/feature";
import Image from "next/image";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, id } = feature;
  return (
    <Link href={`/place?division=${id}&name=${title}`}>
      <div className="w-full hover:shadow-xl shadow-cyan-500/50 p-2 rounded-md">
        <div className="wow fadeInUp" data-wow-delay=".15s">
          <div className="mb-10 flex p-2 items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
            <Image
              className="rounded-md"
              src={icon}
              alt=""
              width={150}
              height={150}
            />
          </div>
          <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            {title}
          </h3>
          <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
            {paragraph}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SingleFeature;

import Breadcrumb from "@/components/Common/Breadcrumb";
import Header from "@/components/Header";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <Header />
      <Breadcrumb
        pageName="About"
        description="This project is done by students of european university of bangladesh!"
      />

      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              About Travel BD Today
            </h1>
            <p className="text-gray-600 mb-6">
              Welcome to Travel BD Today – your ultimate guide to exploring the
              enchanting and diverse landscapes of Bangladesh. We are dedicated
              to providing you with a curated collection of remarkable places
              and hidden treasures that this beautiful country has to offer.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of passionate travelers and local experts work tirelessly
              to unearth the most captivating destinations, from serene
              countryside retreats to vibrant city experiences. We believe in
              the power of travel to inspire, educate, and connect people from
              all walks of life.
            </p>
            <Image
              width={1000}
              height={500}
              src="/images/about/about1.webp" // Replace with your image URL
              alt="Travel BD Today"
              className="mb-6 rounded-lg shadow-lg"
            />
            <p className="text-gray-600 mb-6">
              Whether you&apos;re an intrepid explorer seeking
              off-the-beaten-path adventures or a culture enthusiast looking to
              immerse yourself in the local traditions, Travel BD Today is your
              go-to resource for all things travel in Bangladesh.
            </p>
            <p className="text-gray-600 mb-6">
              Join us on this incredible journey as we share captivating
              stories, practical travel tips, and breathtaking images that
              showcase the beauty and charm of Bangladesh. Together, let&apos;s
              discover the heart and soul of this remarkable nation.
            </p>
            <Image
              width={1000}
              height={500}
              src="/images/about/about2.jpg" // Replace with your image URL
              alt="Travel BD Today"
              className="mb-6 rounded-lg shadow-lg"
            />
            {/* Additional Section 1: Why Choose Us */}
            <div className=" rounded-lg shadow-lg p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">
                Why Choose Travel BD Today?
              </h2>
              <p className="">
                At Travel BD Today, we are committed to delivering an
                unparalleled travel experience. Here&apos;s why you should
                choose us:
              </p>
              <ul className="list-disc list-inside mt-3">
                <li>Curated list of unique destinations</li>
                <li>Expert local insights and recommendations</li>
                <li>Engaging travel stories and photography</li>
                <li>Interactive maps for easy navigation</li>
                <li>Community of fellow travelers to connect with</li>
              </ul>
            </div>
            {/* Additional Section 2: Our Team */}
            <div className="bg-gray-200 rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Meet Our Team
              </h2>
              <div className="mb-5 text-gray">
                <p>
                  We are the students of CSE department of the European
                  University of Bangladesh.{" "}
                </p>
              </div>
              <div className="grid grid-cols-2 items-center  text-center gap-6 ">
                <div>
                  <Image
                    width={500}
                    height={500}
                    src="/images/about/team1.jpeg" // Replace with team member image URL
                    alt="Team Member 1"
                    className="rounded-full w-52 h-52 mb-2 mx-auto"
                  />
                  <p className="text-gray font-bold">Mahmudul Islam Moon</p>
                </div>
                <div>
                  <Image
                    width={500}
                    height={500}
                    src="/images/about/team2.jpg" // Replace with team member image URL
                    alt="Team Member 1"
                    className="rounded-full w-52 h-52 mb-2  mx-auto"
                  />
                  <p className="text-gray font-bold">Biplab Hossain</p>
                </div>
                <div>
                  <Image
                    width={500}
                    height={500}
                    src="/images/about/team3.jpeg" // Replace with team member image URL
                    alt="Team Member 1"
                    className="rounded-full w-52 h-52 mb-2  mx-auto"
                  />
                  <p className="text-gray font-bold">Bale Akter</p>
                </div>
                <div>
                  <Image
                    width={500}
                    height={500}
                    src="/images/about/team4.jpeg" // Replace with team member image URL
                    alt="Team Member 1"
                    className="rounded-full w-52 h-52 mb-2  mx-auto"
                  />
                  <p className="text-gray font-bold">Sanzida Islam</p>
                </div>
              </div>
            </div>
            {/* Additional Section 3: Get Involved */}
            <div className=" rounded-lg shadow-lg p-6 mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Get Involved
              </h2>
              <p className="text-gray-600">
                Have a favorite travel spot in Bangladesh that you&apos;d like
                to share? We encourage you to contribute to our platform by
                adding new places and sharing your experiences. Your insights
                can help fellow travelers explore and appreciate the beauty of
                our country even more.
              </p>
              <button className="bg-blue-500  px-4 py-2 mt-4 rounded-md">
                Contribute Now
              </button>
            </div>
            {/* Additional Section 4: Contact Us */}
            <div className="bg-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600">
                Have questions, feedback, or suggestions? Feel free to reach out
                to us. We&apos;d love to hear from you!
              </p>
              <a
                href="mailto:info@travelbdtoday.com"
                className="text-blue-500 hover:underline mt-2 block"
              >
                info@travelbdtoday.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;

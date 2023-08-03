import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import Header from "@/components/Header";

const GuidePage = () => {
  return (
    <>
      <Header />
      <Breadcrumb
        pageName="User guideline and functionality"
        description="You can find all the user guidelines and functionality here."
      />
      <main className="container mx-auto py-8 max-w-5xl mx-auto">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">User Guidelines</h2>
          <ul className="list-disc pl-6">
            <li>Explore and Discover</li>
            <li>Detailed Information</li>
            <li>User Registration and Login</li>
            <li>Adding Places and Reviews</li>
            <li>
              Community Engagement:
              <ul className="list-disc pl-6">
                <li>
                  Engage with other travel enthusiasts through comments,
                  discussions, and sharing experiences.
                </li>
                <li>
                  Respect the diversity of opinions and maintain a positive and
                  welcoming atmosphere within our community.
                </li>
              </ul>
            </li>
            <li>Responsible Travel</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Website Functionality</h2>
          <ul className="list-disc pl-6">
            <li>
              Search Functionality: Easily search for travel destinations using
              the search bar at the top of the page. Filter search results by
              location, attractions, activities, and more.
            </li>
            <li>
              Destination Pages: Each destination page provides detailed
              information, including descriptions, photos, attractions,
              accommodations, and local tips. Read and contribute reviews to
              help others make informed decisions.
            </li>
            <li>
              User Registration and Profiles: Register for an account to access
              personalized features. Create and update your profile with your
              travel preferences and experiences.
            </li>
            <li>
              Contribution and Interaction: Registered users can add new travel
              destinations and share their insights. Leave reviews for places
              you&apos;ve visited and engage in discussions with other users.
            </li>
            <li>
              Mobile-Friendly Design: Enjoy a seamless experience on both
              desktop and mobile devices.
            </li>
            <li>
              Interactive Maps: Visualize the location of each destination on an
              interactive map.
            </li>
            <li>
              Community Interaction:
              <ul className="list-disc pl-6">
                <li>
                  Engage with other users through comments, likes, and shares.
                  Join discussions and connect with fellow travelers who share
                  your interests.
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default GuidePage;

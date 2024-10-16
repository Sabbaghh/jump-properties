import Data from "@/dummydata/properties.json";
import PropertyCard from "@/components/PropertyCardHorizontal";
import Link from "next/link";
const RecentProperties = () => {
  const recentProperties = Data.splice(0, 3);
  return (
    <>
      <section className="container-xl m-auto px-4 pb-10 pt-6 lg:container">
        <h2 className="mb-6 text-center text-3xl font-bold text-blue-500">
          Recent Properties
        </h2>
        {recentProperties.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {recentProperties.map((property, index) => (
                <PropertyCard key={index} {...property} />
              ))}
            </div>
          </>
        ) : (
          <p>No data</p>
        )}
      </section>

      <section className="container-xl m-auto lg:container">
        <Link
          className="m-auto block w-1/2 rounded-xl bg-black py-4 text-center text-white hover:bg-gray-800"
          href="/properties"
        >
          Show all properties
        </Link>
      </section>
    </>
  );
};

export default RecentProperties;

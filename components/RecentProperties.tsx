import PropertyCard from "@/components/PropertyCardHorizontal";
import Link from "next/link";
import Property from "@/models/Property";
import propertyType from "@/types/property";
const RecentProperties = async () => {
  const recentProperties = await Property.find({})
    .sort({ createdAt: -1 })
    .limit(3)
    .lean<propertyType[]>();
  return (
    <>
      <section className="container-xl m-auto px-4 pb-10 pt-6 lg:container">
        <h2 className="mb-6 text-center text-3xl font-bold text-blue-500">
          Recent Properties
        </h2>
        {recentProperties.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              {recentProperties.map((property) => (
                <PropertyCard key={property._id.toString()} {...property} />
              ))}
            </div>
          </>
        ) : (
          <p>No data</p>
        )}
        <Link
          href="/properties"
          className="m-auto mt-12 block rounded-lg bg-black p-5 text-center text-white sm:w-1/2"
        >
          Show All Properties
        </Link>
      </section>
    </>
  );
};

export default RecentProperties;

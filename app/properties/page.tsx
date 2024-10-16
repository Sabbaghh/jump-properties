import PropertyCard from "@/components/PropertyCardHorizontal";
import Data from "@/dummydata/properties.json";
const PropertiesPage = () => {
  return (
    <section className="px-4 py-6">
      <div className="container-xl m-auto px-4 py-6 lg:container">
        {Data.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {Data.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
        ) : (
          <p className="text-center text-2xl font-bold">
            No properties available
          </p>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;

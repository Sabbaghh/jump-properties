import PropertyCard from "@/components/PropertyCardHorizontal";
import Property from "@/models/Property";
import PropertyType from "@/types/property";
const PropertiesPage = async () => {
  const properties = await Property.find({}).lean<PropertyType[]>();
  return (
    <section className="px-4 py-6">
      <div className="container-xl m-auto px-4 py-6 lg:container">
        {properties.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {properties.map((property, index) => (
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

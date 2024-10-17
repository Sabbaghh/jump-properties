import PropertyCard from "@/components/PropertyCardVertical";
import Property from "@/models/Property";
import PropertyType from "@/types/property";
const FeaturedProperties = async () => {
  const featuredProperties = await Property.find({ featured: true })
    .limit(2)
    .lean<PropertyType[]>();
  return (
    <section className="bg-blue-100 px-4 pb-10 pt-6">
      <h2 className="mb-6 text-center text-3xl font-bold text-blue-500">
        Featured Properties
      </h2>
      {featuredProperties.length > 0 ? (
        <>
          <div className="container-xl m-auto grid grid-cols-1 gap-4 lg:container lg:grid-cols-2">
            {featuredProperties.map((property) => (
              <PropertyCard key={property._id.toString()} {...property} />
            ))}
          </div>
        </>
      ) : (
        <p>No data</p>
      )}
    </section>
  );
};

export default FeaturedProperties;

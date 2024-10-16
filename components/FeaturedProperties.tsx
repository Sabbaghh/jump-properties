import Data from "@/dummydata/properties.json";
import PropertyCard from "@/components/PropertyCardVertical";
const FeaturedProperties = () => {
  const featuredProperties = Data.filter(
    (property) => property.is_featured,
  ).splice(0, 2);
  return (
    <section className="bg-blue-100 px-4 pb-10 pt-6">
      <h2 className="mb-6 text-center text-3xl font-bold text-blue-500">
        Featured Properties
      </h2>
      {featuredProperties.length > 0 ? (
        <>
          <div className="container-xl m-auto grid grid-cols-1 gap-4 lg:container md:grid-cols-2">
            {featuredProperties.map((property, index) => (
              <PropertyCard key={index} {...property} />
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

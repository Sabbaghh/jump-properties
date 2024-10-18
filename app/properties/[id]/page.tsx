import SearchComponent from "@/components/SearchProperty";
import { FaMapPin } from "react-icons/fa";
import Property from "@/models/Property";
import propertyType from "@/types/property";
import BackgroundImage from "@/components/PropertyPage/backgroundImage";
import Aside from "@/components/PropertyPage/Aside";
import InfoCard from "@/components/PropertyPage/InfoCard";
import Rates from "@/components/PropertyPage/Rates";
import Amenities from "@/components/PropertyPage/Amenities";
import Descreption from "@/components/PropertyPage/Descreption";
const PropertyPage = async ({ params }: { params: { id: string } }) => {
  const property = (await Property.findById(params.id).lean()) as propertyType;

  return (
    <section className="bg-blue-50">
      <div className="bg-blue-700 pt-5">
        <SearchComponent />
        <BackgroundImage image={property.images[0]} />
      </div>
      <section className="container m-auto grid gap-5 px-5 sm:grid-cols-1 sm:px-0 lg:grid-cols-3">
        <div className="grid grid-cols-1 gap-5 lg:col-span-2">
          <InfoCard>
            <span>{property.type}</span>
            <h2 className="text-3xl font-bold">{property.name}</h2>
            <p className="text-red-500">
              <FaMapPin className="m-2 inline" />
              {property.location.street}, {property.location.city}
              {property.location.state} {property.location.zipcode}
            </p>
            <Rates rates={property.rates} />
          </InfoCard>
          <InfoCard>
            <Descreption
              beds={property.beds}
              baths={property.baths}
              square_feet={property.square_feet}
            />
          </InfoCard>
          <InfoCard>
            <Amenities amenities={property.amenities} />
          </InfoCard>
        </div>
        <Aside />
      </section>
    </section>
  );
};

export default PropertyPage;

import PropertyType from "@/types/property";
import Image from "next/image";
import Link from "next/link";
import {
  FaBed,
  FaBath,
  FaMoneyBill,
  FaMapPin,
  FaRulerCombined,
} from "react-icons/fa";
const PropertyCardVertical = (props: PropertyType) => {
  const { _id, name, type, location, beds, baths, square_feet, rates, images } =
    props;
  const getRatesShortcuts = (rateType: string): string => {
    switch (rateType) {
      case "weekly":
        return "Wk";
      case "monthly":
        return "Mo";
      case "nightly":
        return "Ng";
      default:
        return "N/A";
    }
  };
  const getAvailableRatesTypes = (): string[] => {
    return Object.keys(rates);
  };
  return (
    <div className="grid grid-cols-1 gap-3 rounded-md bg-white shadow-md md:grid-cols-2">
      <div className="relative h-64 md:h-auto">
        <Image
          src={`/properties/${images[0]}`}
          alt=""
          className="h-auto w-full rounded-lg rounded-bl-none object-cover md:rounded-bl-md md:rounded-br-none md:rounded-tr-none"
          quality={100}
          fill
          sizes="100vw"
        />
        {/* rates dynamically with shortcuts */}
        <div className="absolute left-[10px] top-[10px] flex gap-2">
          {Object.entries(rates).map(([key, value], index) => (
            <h3
              key={index}
              className="rounded-lg bg-white px-4 py-2 text-right text-sm font-bold capitalize text-blue-500 md:text-center lg:text-right"
            >
              ${value} / {getRatesShortcuts(key)}
            </h3>
          ))}
        </div>
      </div>
      <div className="p-4">
        <div className="mb-6 text-left md:text-center lg:text-left">
          <div className="text-gray-600">{type}</div>
          <h3 className="text-xl font-bold">{name}</h3>
        </div>

        <div className="mb-4 flex justify-center gap-4 text-gray-500">
          <p>
            <FaBed className="mr-2 inline-block" />

            <span className="md:hidden lg:inline">{beds} Beds</span>
          </p>
          <p>
            <FaBath className="mr-2 inline-block" />
            <span className="md:hidden lg:inline">{baths} Baths</span>
          </p>
          <p>
            <FaRulerCombined className="mr-2 inline-block" />
            <span className="md:hidden lg:inline">{square_feet} sqft</span>
          </p>
        </div>

        <div className="mb-4 flex justify-center gap-4 text-sm text-green-900">
          {getAvailableRatesTypes().map((rateType, index) => (
            <p key={index}>
              <FaMoneyBill className="mr-2 inline-block" /> {rateType}
            </p>
          ))}
        </div>

        <div className="mb-5 border border-gray-100"></div>
        <div className="sm:grid-col-2 grid gap-3 sm:flex-row">
          <div className="overflow-hidden text-center">
            <FaMapPin className="mr-2 inline text-orange-700" />
            <span className="overflow-hidden text-ellipsis text-nowrap text-orange-700">
              {location.city} , {location.street}
            </span>
          </div>
          <Link
            href={`/properties/${_id}`}
            className="rounded-lg bg-blue-500 p-2 px-4 text-center text-white hover:bg-blue-600"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCardVertical;

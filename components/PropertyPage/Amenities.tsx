import React from "react";
import { FaCheck } from "react-icons/fa";
function Amenities({ amenities }: { amenities: string[] }) {
  return (
    <>
      <p className="mb-5 text-lg font-semibold">Amenities</p>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {amenities.map((amenity) => (
          <p key={amenity}>
            <FaCheck className="mr-5 inline text-green-300" />
            {amenity}
          </p>
        ))}
      </div>
    </>
  );
}

export default Amenities;

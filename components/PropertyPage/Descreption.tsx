import React from "react";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
function Descreption({
  beds,
  baths,
  square_feet,
}: {
  beds: number;
  baths: number;
  square_feet: number;
}) {
  return (
    <>
      <p className="mb-5 text-lg font-semibold">Description & Details</p>
      <div className="grid justify-center gap-5 p-5 text-2xl font-semibold text-blue-500 sm:grid-cols-3 sm:gap-0 sm:text-center">
        <p>
          <FaBed className="mr-5 inline" />
          {beds} Beds
        </p>
        <p>
          <FaBath className="mr-5 inline" />
          {baths} Baths
        </p>
        <p>
          <FaRulerCombined className="mr-5 inline" />
          {square_feet} sqft
        </p>
      </div>
    </>
  );
}

export default Descreption;

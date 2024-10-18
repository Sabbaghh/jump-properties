import React from "react";

function Rates({ rates }: { rates: { [key: string]: number } }) {
  return (
    <>
      <p className="mt-4 border-t-2 pt-4 text-center text-slate-500">
        Rates & Options
      </p>
      <div className="grid justify-center gap-5 sm:grid-cols-2 sm:gap-0">
        {rates &&
          Object.keys(rates).map((key) => (
            <p key={key} className="inline-block sm:text-center">
              <span className="mr-5 text-xl font-semibold capitalize text-gray-600">
                {key}
              </span>
              <span className="text-2xl font-semibold text-blue-500">
                AED {rates[key as keyof typeof rates]}
              </span>
            </p>
          ))}
      </div>
    </>
  );
}

export default Rates;

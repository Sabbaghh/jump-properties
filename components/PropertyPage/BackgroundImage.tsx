import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
type prop = {
  image: string;
};
function Hero(props: prop) {
  return (
    <>
      <Image
        className="h-96 w-full object-cover pt-5"
        src={`/properties/${props.image}`}
        alt="background"
        width={0}
        height={0}
        sizes={"100vw"}
      />
      <section className="mb-10 bg-white p-5">
        <Link href="/properties" className="blocktext-center text-blue-700">
          <FaArrowLeft className="mr-2 inline" />
          Back to Properties
        </Link>
      </section>
    </>
  );
}

export default Hero;

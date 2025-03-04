import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBath, FaBed } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";
import Banner from "@/components/ui/banner";

const properties = [
  {
    id: 1,
    image: "/apartment-1-1.jpg",
    label: "Featured",
    location: "Pasadena 809b-2, Oklahoma",
    title: "SUPER DELUXE BED ROOM NEAR SEA BEACH",
    beds: 4,
    baths: 2,
    area: "6×8 m²",
    price: "$2,400",
    link: "/property/1",
  },
  {
    id: 2,
    image: "/apartment-1-2.jpg",
    label: "20% off",
    location: "Pasadena 809b-2, Oklahoma",
    title: "SUPER DELUXE BED ROOM NEAR SEA BEACH",
    beds: 4,
    baths: 2,
    area: "6×8 m²",
    price: "$2,400",
    link: "/property/1",
  },
  {
    id: 3,
    image: "/apartment-1-3.jpg",
    label: "Featured",
    location: "Pasadena 809b-2, Oklahoma",
    title: "SUPER DELUXE BED ROOM NEAR SEA BEACH",
    beds: 4,
    baths: 2,
    area: "6×8 m²",
    price: "$2,400",
    link: "/property/1",
  },
  {
    id: 4,
    image: "/apartment-1-4.jpg",
    label: "Featured",
    location: "Pasadena 809b-2, Oklahoma",
    title: "SUPER DELUXE BED ROOM NEAR SEA BEACH",
    beds: 4,
    baths: 2,
    area: "6×8 m²",
    price: "$2,400",
    link: "/property/1",
  },
  {
    id: 5,
    image: "/apartment-1-1.jpg",
    label: "Featured",
    location: "Pasadena 809b-2, Oklahoma",
    title: "SUPER DELUXE BED ROOM NEAR SEA BEACH",
    beds: 4,
    baths: 2,
    area: "6×8 m²",
    price: "$2,400",
    link: "/property/1",
  },
  {
    id: 6,
    image: "/apartment-1-2.jpg",
    label: "Featured",
    location: "Pasadena 809b-2, Oklahoma",
    title: "SUPER DELUXE BED ROOM NEAR SEA BEACH",
    beds: 4,
    baths: 2,
    area: "6×8 m²",
    price: "$2,400",
    link: "/property/1",
  },
];

const Props = () => {
  return (
    <>
      {/* banner */}
      <Banner title={"Property"} breadcrumbs={"Property"}/>

      <div className="containe mx-auto px-6 lg:px-20 py-12 text-center lg:mt-[30px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.map((property) => (
            <Link key={property.id} href={property.link} passHref>
              <div className="bg-white rounded-xl shadow-md p-4 cursor-pointer hover:shadow-lg transition">
                <div className="relative">
                  <Image
                    src={property.image}
                    alt={property.title}
                    width={400}
                    height={250}
                    className="rounded-lg w-full h-60 object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-amber-800 text-white px-3 py-1 rounded-full text-sm">
                    {property.label}
                  </span>
                </div>
                <p className="text-amber-800 mt-4">{property.location}</p>
                <h3 className="text-lg font-semibold">{property.title}</h3>
                <div className="flex justify-center gap-4 text-gray-600 text-sm mt-3">
                  <span className="flex items-center">
                    <FaBed className="mr-2" /> {property.beds} Beds
                  </span>
                  <span className="flex items-center">
                    <FaBath className="mr-2" /> {property.baths} Bathrooms
                  </span>
                  <span className="flex items-center">
                    <TbRulerMeasure className="mr-2" /> {property.area}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-bold">
                    {property.price}{" "}
                    <span className="text-gray-500 text-sm">/month</span>
                  </span>
                  <button className="text-gray-400 hover:text-red-500 text-2xl">
                    ♡
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Props;

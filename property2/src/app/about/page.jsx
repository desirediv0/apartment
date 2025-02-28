import Banner from "@/components/ui/banner";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { FaShareAlt } from "react-icons/fa";

const cards = [
  {
    image: "/feature-1.webp",
    title: "MODERN SPACES & COMPLEXES",
    description:
      "Nullam eu nibh vitae est tempor molestie id sed ex. Quisque dignissim maximus ipsum.",
  },
  {
    image: "/feature-1.webp",
    title: "VALUES OF SMART LIVING",
    description:
      "Nullam eu nibh vitae est tempor molestie id sed ex. Quisque dignissim maximus ipsum.",
  },
  {
    image: "/feature-1.webp",
    title: "ENJOY LUXURY RESIDENTIAL LIFE",
    description:
      "Nullam eu nibh vitae est tempor molestie id sed ex. Quisque dignissim maximus ipsum.",
  },
];

const agents = [
  { name: "Jessica Brown", image: "/team-1.webp", role: "Architecture" },
  { name: "Mike Hardson", image: "/team-2.webp", role: "Architecture" },
  { name: "Sarah Albert", image: "/team-3.webp", role: "Architecture" },
];

const Testimonial = () => {
  return (
    <div className="bg-gray-100 p-8 text-center">
      <h2 className="text-2xl font-bold">Testimonials</h2>
      <p className="mt-4 text-gray-600">
        What our customers are saying about us.
      </p>
    </div>
  );
};

const Page = () => {
  return (
    <>
      {/* banner */}

      <Banner title={"About Us"} breadcrumbs={"About"}/>

      {/* Section 1: Cards */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card key={index}>
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <div className="overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={400}
                    height={300}
                    className="w-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-500 group-hover:bg-opacity-50"></div>
                <div className="relative z-10 p-6 text-center lg:mt-4">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-gray-600 group-hover:text-gray-200">
                    {card.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Section 2: Testimonials */}

      {/* section-3: company */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 h-auto mt-10 p-4 sm:p-7 ml-2 sm:ml-4">
        {[
          "brand-1-1.png",
          "brand-1-2.png",
          "brand-1-3.png",
          "brand-1-4.png",
          "brand-1-5.png",
          "brand-1-6.png",
        ].map((brand, index) => (
          <Image
            key={index}
            src={`/${brand}`}
            width={200}
            height={100}
            className="w-[100px] h-auto mx-auto"
            alt="company"
          />
        ))}
      </div>

      {/* section-4:  apartment*/}

      <div className="mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Large Image */}
          <div className="relative md:left-7">
            <Image
              src="/values.jpg"
              alt="Apartment"
              width={700}
              height={400}
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Right Side - Content Section */}
          <div className="bg-black text-white p-8 sm:p-12 lg:p-16 rounded-lg relative lg:h-[500px]">
            <span className="text-orange-500 uppercase text-sm font-semibold">
              Apartments Amenities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2">
              Values of Smart Living in Amazon Residence
            </h2>
            <p className="text-gray-400 mt-4 text-sm sm:text-base">
              Lorem ipsum simply free text available in the market. At vero eos
              et accusamus et iusto odio dig ducimus qui blan ditiis sit
              praesentium.
            </p>

            {/* Small Image and Features List */}
            <div className="mt-14 flex flex-col sm:flex-row items-center gap-4">
              {/* Small Image */}
              <div className="w-full sm:w-auto">
                <Image
                  src="/values-1-2.webp"
                  alt="Luxury Room"
                  width={200}
                  height={100}
                  className="rounded-lg shadow-md w-full sm:w-[200px]"
                />
              </div>

              {/* Features List */}
              <ul className="mt-4 sm:mt-0 space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 text-lg">✔</span>
                  <span className="text-gray-300">Nsectetur cing elit</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 text-lg">✔</span>
                  <span className="text-gray-300">
                    Suspe ndsisse suscipit leo
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 text-lg">✔</span>
                  <span className="text-gray-300">
                    Strong communication skills
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: agents*/}

      <section className="container mx-auto px-6 py-12 text-center">
        {/* Section Title */}
        <h3 className="text-orange-500 uppercase text-sm font-semibold">
          Expert Agents
        </h3>
        <h2 className="text-3xl font-bold mt-2">Meet Property Agents</h2>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="relative group overflow-hidden shadow-lg rounded-lg bg-white border border-gray-200"
            >
              {/* Image */}
              <div className="relative">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  width={400}
                  height={500}
                  className="w-full h-auto transform transition-all duration-500 group-hover:scale-105"
                />
                {/* Hover Shadow Effect */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
                {/* Share Icon Animation */}
                <div className="absolute bottom-0 right-0 bg-orange-400 p-3 rounded-tl-lg transform translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                  <FaShareAlt className="text-white text-lg" />
                </div>
              </div>

              {/* Agent Name */}
              <div className="p-4">
                <h3 className="text-lg font-bold">{agent.name}</h3>
                <p className="text-gray-600">{agent.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: appointment */}

      <section
        className="relative bg-orange-400 text-white py-16 px-6 md:px-16"
        style={{
          backgroundImage: "url('/blueprint-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-orange-500 opacity-80"></div>

        {/* Content */}
        <div className="relative flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
          {/* Left Side - Text */}
          <div className="text-center md:text-left">
            <p className="text-sm uppercase font-semibold tracking-wide">
              Don't Hesitate to Contact Us
            </p>
            <h2 className="text-4xl font-bold mt-2">Make an Appointment Now</h2>
          </div>

          {/* Right Side - Button */}
          <a
            href="#"
            className="bg-black text-white px-6 py-3 font-semibold uppercase text-sm mt-6 md:mt-0 transition duration-300 hover:bg-gray-800"
          >
            Schedule a Visit
          </a>
        </div>
      </section>
    </>
  );
};

export default Page;

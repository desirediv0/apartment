"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  BedDouble,
  Boxes,
  Car,
  Check,
  CircleCheck,
  Mail,
  Phone,
  Play,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaBuilding } from "react-icons/fa6";
import { FaPenRuler } from "react-icons/fa6";
import { FaCarAlt } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Case } from "@/components/ui/cases-with-infinite-scroll";

const testimonials = [
  {
    name: "MIKE HARDSON",
    position: "MARKETING HEAD",
    image: "/testimonial-1-5.jpg",
    review:
      "Leverage agile frameworks to provide a robust synopsis for high-level overviews. Iterative approaches to corporate strategy foster collaborative thinking.",
  },
  {
    name: "SARAH JONES",
    position: "PROJECT MANAGER",
    image: "/testimonial-1-5.jpg",
    review:
      "User-friendly designs and excellent customer service. The best experience I've had so far!",
  },
  {
    name: "DAVID SMITH",
    position: "CEO, TECH INC.",
    image: "/testimonial-1-5.jpg",
    review:
      "Exceptional quality and service. I highly recommend this for anyone looking for professionalism!",
  },
  {
    name: "LINDA WILLIAMS",
    position: "HR MANAGER",
    image: "/testimonial-1-5.jpg",
    review:
      "Amazing results! The dedication and effort put into each project really shine through.",
  },
  {
    name: "JASON BROWN",
    position: "SOFTWARE ENGINEER",
    image: "/testimonial-1-5.jpg",
    review:
      "Top-notch service with incredible attention to detail. Will definitely work with them again!",
  },
];

const data = [
  {
    title: "Water Storage",
  },
  {
    title: "Fire Exiting",
  },
  {
    title: "Solar Systems",
  },
  {
    title: "Playgrounds",
  },
  {
    title: "Swimming Pools",
  },
  {
    title: "Fitness Club",
  },
];

const stats = [
  {
    id: 1,
    icon: <FaPenRuler size={50} />,
    value: "34,000",
    label: "Total sqft Areas",
  },
  {
    id: 2,
    icon: <FaCarAlt size={50} />,
    value: "680",
    label: "Total Car Parkings",
  },
  {
    id: 3,
    icon: <FaBuilding size={50} />,
    value: "390",
    label: "Luxury Apartments",
  },
  { id: 4, icon: <FaBed size={50} />, value: "726", label: "Deluxe Bedrooms" },
];

const plans = {
  PENTHOUSE: {
    img: "floor-plan-tab-content-img-1.png",
    description:
      "Interior of volumes, space, air, proportion, with certain light and mood. These interiors are meant to last forever. You need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
  STUDIO: {
    img: "floor-plan-tab-content-img-1.png",
    description:
      "Interior of volumes, space, air, proportion, with certain light and mood. These interiors are meant to last forever. You need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
  DUPLEX: {
    img: "floor-plan-tab-content-img-1.png",
    description:
      "Interior of volumes, space, air, proportion, with certain light and mood. These interiors are meant to last forever. You need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
};

const newdata = [
  {
    newtitle: "TOTAL AREA",
    area: "2800 SQFT",
  },
  {
    newtitle: "FLOOR NO.",
    area: "2ND",
  },
  {
    newtitle: "CURRENT STATUS",
    area: "AVAILABLE",
  },
  {
    newtitle: "NO. OF ROOMS",
    area: "04",
  },
  {
    newtitle: "PARKING AVAILABLE",
    area: "YES",
  },
  {
    newtitle: "PRICE FROM ",
    area: "$4500",
  },
];

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  const [activePlan, setActivePlan] = useState("STUDIO");

  const [borderPosition, setBorderPosition] = useState("top-1");

  useEffect(() => {
    const interval = setInterval(() => {
      setBorderPosition((prev) => (prev === "top-1" ? "top-20" : "top-20"));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* banner */}

      <div className="w-full h-[700px] bg-[url(/slider-2.webp)] bg-no-repeat bg-cover flex items-center px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Left Side - Heading */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-tight">
              MODERN RESIDENTIAL APARTMENTS
            </h1>
            <div className="flex flex-wrap md:flex-nowrap items-center gap-4 text-white font-semibold mt-5 justify-center md:justify-start">
              <p className="w-28 h-8 bg-amber-800 text-white p-1 flex items-center justify-center">
                34000 SQFT
              </p>
              <span className="text-sm sm:text-base">
                BEST PRICE 2 BEDROOM APARTMENT
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* section-2 */}

      <div className="w-full md:h-screen grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6 lg:p-16 bg-[#1c1c1c] text-white">
        {/* Left Side - Image with Animated Border */}
        <div className="relative flex items-center justify-center">
          <Image
            src="/about-1-1.jpg"
            alt="Luxury Apartment"
            width={100}
            height={100}
            className="w-full max-w-md rounded-lg shadow-lg"
          />
          <div
            className={`absolute w-[60%] h-[90%] border-[6px] border-amber-800 transition-all duration-1000 lg:right-2 hidden sm:block `}
          ></div>
        </div>

        {/* Right Side - Text Content */}
        <div className="space-y-6">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-wide">
            Our Building Overview
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            The High Premium Quality Luxury Apartments
          </h1>
          <p className="text-xl font-semibold text-amber-600">
            Many important brands have given us their trust
          </p>
          <p className="text-gray-300 text-sm sm:text-base">
            Interior of volumes, space, air, proportion, with certain light and
            mood. These interiors are meant to last forever. You need to be sure
            there isn’t anything embarrassing hidden in the middle of the text.
          </p>

          {/* Features Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="">
              <div className="flex items-center">
                <FaCheck
                  title="Water Storage"
                  className="border rounded-full text-[23px] border-white bg-orange-500 text-white"
                />
                <h4 className="ml-4 text-lg font-bold uppercase">
                  Water Storage
                </h4>
              </div>
              <p className="mt-4 font-semibold">
                Lorem ipsum dolor sited amet consectetur notted.
              </p>
            </div>
            <div className="">
              <div className="flex items-center">
                <FaCheck
                  title="Solar Systems"
                  className="border rounded-full text-[23px] border-white bg-orange-500 text-white"
                />
                <h4 className="ml-4 text-lg font-bold uppercase">
                  Solar Systems
                </h4>
              </div>
              <p className="mt-4 font-semibold">
                Lorem ipsum dolor sited amet consectetur notted.
              </p>
            </div>
          </div>

          {/* Button + image movement */}
          <div className="flex items-center gap-4">
            {/* Button */}
            <Link href={"/"}>
              <button className="w-40 h-12 bg-amber-800 hover:bg-amber-700 transition text-white text-xs font-semibold uppercase tracking-wide mt-6 rounded-lg">
                More Details
              </button>
            </Link>

            {/* Moving Image (Right to Left) */}
            <motion.div
              className="relative w-[80px] h-[10px] sm:w-[100px] lg:ml-4 hidder sm:block"
              animate={{ x: [-10, -40, -10] }} // Right to left motion
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Image
                src="/arrow.webp"
                alt="Arrow Animation"
                width={100}
                height={10}
                className="rounded-lg shadow-lg sm:w-[80px] sm:h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* section-3 */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 lg:p-16">
        {stats.map((item) => (
          <div
            key={item.id}
            className="shadow-xl p-10 bg-[#1a1a1a] text-white rounded-lg"
          >
            <div className="w-full flex items-center justify-between">
              <div className="w-12 h-12 bg-gray-700">
              </div>

              {/* Animated Icon */}
              <motion.div
                whileHover={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                {item.icon}
              </motion.div>
            </div>

            <h1 className="font-bold text-2xl mt-3">{item.value}</h1>
            <p className="text-gray-400">{item.label}</p>
          </div>
        ))}
      </div>

      {/* section-4 */}

      <div className="grid grid-cols-1 md:grid-cols-2 bg-fixed bg-cover h-auto lg:h-[521px] max-w-screen p-6 sm:p-8 md:p-12 mx-auto bg-[url(https://pixydrops.com/alipes/main-html/assets/images/backgrounds/why-choose-one-bg-img.jpg)]">
        {/* Left Side */}
        <div className="bg-no-repeat flex flex-col justify-center items-center pr-4 sm:pr-10 md:pr-24 lg:pr-64">
          <div className="bg-black h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 flex items-center justify-center border-2">
            <Link href={"/"}>
              <Play color="white" />
            </Link>
          </div>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white w-[90%] sm:w-[85%] md:w-[700px] pt-6 sm:pt-8 lg:ml-[500px] md:pt-14 text-center md:text-left">
            WHY YOU SHOULD CHOOSE OUR BUILDING & APPARTMENTS
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center h-min px-4 sm:px-6 md:px-12">
            {data.map((item, idx) => (
              <div
                key={idx}
                className="bg-white flex items-center p-3 sm:p-4 px-6 md:px-12 font-bold gap-2"
              >
                <CircleCheck />
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION-5 */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 h-auto mt-10 p-4 lg:p-16 sm:p-7 ml-2 sm:ml-4">
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

      {/* section-6 */}

      <div>
        {/* Title Section */}
        <div className="text-center pt-20 p-6 sm:p-12">
          <p className="font-bold text-[#C88964] p-2">APARTMENT & COMPLEX</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            CHOOSE YOUR APARTMENT
          </h1>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-8 lg:px-12 justify-center">
          {[
            { img: "apartment-1-1.jpg", title: "STUDIO APARTMENT" },
            { img: "apartment-1-2.jpg", title: "LUXURY APARTMENT" },
            { img: "apartment-1-3.jpg", title: "DELUXE APARTMENT" },
            { img: "apartment-1-4.jpg", title: "ONE ROOM APARTMENT" },
          ].map((apartment, idx) => (
            <div
              key={idx}
              className="relative group hover:-translate-y-3 duration-500 overflow-hidden"
            >
              {/* Image */}
              <Image
                src={`https://pixydrops.com/alipes/main-html/assets/images/resources/${apartment.img}`}
                width={400}
                height={400}
                alt={apartment.title}
                className="w-full h-auto object-cover"
              />

              {/* Hover Overlay - Black Shade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>

              {/* Apartment Size Tag */}
              <span className="bg-[#b1886e] p-1 text-sm px-2 absolute top-5 right-5 text-white font-semibold rounded-md">
                120 M²
              </span>

              {/* Title */}
              <p className="absolute text-lg sm:text-xl bottom-6 left-6 w-auto font-bold text-white">
                {apartment.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* section-7 */}

      <div className="grid grid-cols-1 sm:grid-cols-2 py-12 sm:py-20 lg:mt-10 w-full px-4 sm:px-12 lg:px-12">
        {/* Left Side - Plan Info */}
        <div className="px-4 sm:px-10 w-full">
          <p className="font-bold text-[#C88964] pb-2">CHECKOUT THE PLAN</p>
          <h1 className="text-2xl sm:text-4xl font-bold text-black">
            APARTMENT PLANS
          </h1>

          {/* Plan Selection Buttons */}
          <div className="flex flex-wrap gap-4 py-10">
            {Object.keys(plans).map((plan) => (
              <button
                key={plan}
                onClick={() => setActivePlan(plan)}
                className={`w-[140px] sm:w-[160px] px-6 py-3 text-sm font-semibold rounded-md transition-all duration-300 ${activePlan === plan
                  ? "bg-[#CD8C66] text-white"
                  : "bg-gray-300 text-black hover:bg-gray-400"
                  }`}
              >
                {plan}
              </button>
            ))}
          </div>

          {/* Plan Details List */}
          <div className="flex flex-col sm:flex-row sm:space-x-6 py-10">
            <div className="w-full sm:w-[440px]">
              {newdata.map((data, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between p-4 px-6 rounded-md ${idx % 2 === 0 ? "bg-[#F6F4F1]" : "bg-white"
                    } border border-gray-300`}
                >
                  <span>{data.newtitle}</span>
                  <span>{data.area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Image & Description */}
        <div className="w-full mt-10 sm:mt-0">
          <p className="text-start text-gray-600 pl-0 sm:pl-8">
            {plans[activePlan].description}
          </p>
          <div className="flex justify-center sm:justify-start mt-6 sm:mt-24">
            <Image
              className="border-2 p-4 rounded-lg h-[420px] w-[500px]"
              width={500}
              height={700}
              src={`https://pixydrops.com/alipes/main-html/assets/images/resources/${plans[activePlan].img}`}
              alt={activePlan}
            />
          </div>
        </div>
      </div>

      {/* section-8 */}

      <Case />

      {/* section-9 */}

      <div className="w-full min-h-[70vh] bg-orange-700/60 grid grid-cols-1 md:grid-cols-2 bg-[url(/testimonial-one-bg-img-1.png)] bg-no-repeat bg-cover px-4  sm:px-10 lg:px-20 py-10">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left max-w-7xl mx-auto">
          <p className="text-white font-semibold text-md">WHAT IS HAPPENING</p>
          <h1 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl mt-3">
            WHAT THEY ARE SAYING <br className="hidden sm:block" /> ABOUT
            BUILDING
          </h1>
          <h1 className="text-white font-semibold mt-6 sm:mt-10 text-lg sm:text-xl">
            Trust Score 4.5 (Based on 2,500 Reviews)
          </h1>
          <div className="flex items-center mt-4 sm:mt-5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={30} className="text-white" />
            ))}
          </div>
        </div>

        {/* Right Section (Carousel) */}
        <Carousel className="w-full flex justify-center mt-12 sm:mt-0">
          <CarouselContent
            className="transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="flex justify-center">
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-md sm:max-w-lg lg:max-w-xl relative lg:mt-24">
                  <div className="absolute lg:top-5 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 border-4 border-white rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      width={100}
                      height={100}
                      alt="Profile"
                      className="object-cover w-full"
                    />
                  </div>
                  <div className="text-center mt-10 sm:mt-12">
                    <div className="flex justify-center mb-2">
                      <span className="text-[#c18e6c] text-lg">★★★★★</span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                      {testimonial.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-500 font-semibold">
                      {testimonial.position}
                    </p>
                  </div>
                  <div className="mt-3 sm:mt-4 text-center text-gray-600 text-sm sm:text-lg p-3 sm:p-5">
                    <p>{testimonial.review}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* section-10 */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {/* Left Section - Agent Info */}
        <div>
          <p className="text-md text-[#CD8C66] font-semibold uppercase">
            Visit the Property
          </p>
          <h2 className="text-4xl md:text-5xl font-bold my-2 uppercase">
            Request a Visit
          </h2>

          <div className="flex flex-col md:flex-row items-start gap-4 mt-6">
            {/* Image */}
            <Image
              src="/contact.webp"
              alt="Agent"
              width={70}
              height={70}
              className="rounded-full"
            />

            {/* Agent Info */}
            <div className="flex flex-col">
              <p className="font-semibold">Ram</p>
              <span className="text-[#666057]">Agent</span>
            </div>

            <p className="text-[#666057] mt-2 md:mt-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta ultrices.
            </p>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div className="flex items-center gap-3 text-[#CD8C66] font-semibold">
              <Phone size={30} className="border rounded-full bg-orange-200 p-2" />
              <div className="flex flex-col">
                <span>Have any question?</span>
                Free +92 (8800) - 8960
              </div>
            </div>
            <div className="flex items-center gap-3 text-[#CD8C66] font-semibold">
              <Mail size={30} className="border rounded-full bg-orange-200 p-2" />
              <div className="flex flex-col">
                <span>Write email</span>
                needhelp@company.com
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-[#221C13] text-white p-6 md:p-8 rounded-md w-full max-w-md mx-auto">
          <p className="text-[#CD8C66] font-semibold uppercase">Contact with me</p>
          <h2 className="text-2xl font-bold mt-2">Write to Agent</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
              className="w-full p-3 bg-transparent border-b border-gray-500 outline-none"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

            <input
              type="email"
              placeholder="Email Address"
              {...register("email", { required: "Email is required" })}
              className="w-full p-3 bg-transparent border-b border-gray-500 outline-none"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

            <input
              type="tel"
              placeholder="Phone Number"
              {...register("phone", { required: "Phone is required" })}
              className="w-full p-3 bg-transparent border-b border-gray-500 outline-none"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}

            <textarea
              placeholder="Write a Message"
              {...register("message", { required: "Message is required" })}
              className="w-full p-3 bg-transparent border-b border-gray-500 outline-none"
              rows="4"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

            <button
              type="submit"
              className="bg-[#CD8C66] p-3 w-full font-bold rounded mt-4 hover:bg-[#a56a50] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="mt-10 lg:mb-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7006.403739129376!2d77.04282946701775!3d28.59372020373486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1739445379354!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-md shadow-lg"
        ></iframe>
      </div>

    </>
  );
}


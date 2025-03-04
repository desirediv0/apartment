import React from "react";
import Banner from "@/components/ui/banner";
import Link from "next/link";

const Page = () => {
  return (
    <>
      {/* banner */}

      <Banner title={"Contact us"} breadcrumbs={"Contact us"} />

      <div className="w-full h-full  ">
        <div className="text-center pt-12 md:pt-24">
          <p className="text-[#CD8C66] font-bold">GET IN TOUCH WITH US</p>
          <p className="text-[#221C13] text-2xl md:text-4xl font-bold pt-2">
            WRITE US ANYTIME
          </p>
        </div>

        <form className="px-4 md:px-0 pt-8 md:pt-14 max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0">
            <input
              placeholder="Your Name"
              className="bg-[#F6F4F1] p-3 pl-6 w-full md:w-auto pr-[121px]"
            />
            <input
              placeholder="Email Address"
              className="bg-[#F6F4F1] p-3 pl-6 w-full md:w-auto pr-[121px]"
            />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0 pt-5">
            <input
              placeholder="Phone Number"
              className="bg-[#F6F4F1] p-3 pl-6 w-full md:w-auto pr-[121px]"
            />
            <input
              placeholder="Subject"
              className="bg-[#F6F4F1] p-3 pl-6 w-full md:w-auto pr-[121px]"
            />
          </div>
          <div className="pt-5">
            <textarea
              placeholder="Write a Message"
              className="bg-[#F6F4F1] p-5 pl-6 w-full h-48 "
            />
          </div>
          <div className="flex justify-center pt-4">
            <button className="bg-[#CD8C66] p-4 text-white font-bold text-sm px-14">
              SEND A MESSAGE
            </button>
          </div>
        </form>

        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-10 pt-20 md:pt-36 md:pl-20">
          <div className="w-full">
            <h1 className="font-bold text-xl">New Delhi</h1>
            <p className="text-gray-500 pt-2">
              <Link
                href="https://www.google.com/maps/search/?q=T-16,+Pocket-5,+Plot+no-6,+Malik+Builcon,+Commercial+Plaza+Dwarka+Sector-12,+New+Delhi,+110075"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:underline"
              >
                T-16, Pocket-5, Plot no-6, Malik Builcon, Commercial Plaza Dwarka Sector-12, New Delhi, 110075
              </Link>
              <br />
              <Link href="mailto:hello@desirediv.com" className="text-gray-500 hover:underline">
                hello@desirediv.com
              </Link>
              <br />
              <Link href="tel:+919871228881" className="text-gray-500 hover:underline">
                +91 9871228881
              </Link>
            </p>
          </div>
          <div className="w-full">
            <h1 className="font-bold text-xl">Gurgaon</h1>
            <p className="text-gray-500 pt-2">
              <Link
                href="https://www.google.com/maps/search/?q=T-16,+Pocket-5,+Plot+no-6,+Malik+Builcon,+Commercial+Plaza+Dwarka+Sector-12,+New+Delhi,+110075"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:underline"
              >
                T-16, Pocket-5, Plot no-6, Malik Builcon, Commercial Plaza Dwarka Sector-12, New Delhi, 110075
              </Link> <br />
              <Link href="mailto:hello@desirediv.com" className="text-gray-500 hover:underline">
                hello@desirediv.com
              </Link>
              <br />
              <Link href="tel:+9871228880" className="text--500 hover:underline">
                +91 9871228881
              </Link>
            </p>
          </div>
          <div className="w-full">
            <h1 className="font-bold text-xl">New Delhi</h1>
            <p className="text-gray-500 pt-2">
              <Link
                href="https://www.google.com/maps/search/?q=T-16,+Pocket-5,+Plot+no-6,+Malik+Builcon,+Commercial+Plaza+Dwarka+Sector-12,+New+Delhi,+110075"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:underline"
              >
                T-16, Pocket-5, Plot no-6, Malik Builcon, Commercial Plaza Dwarka Sector-12, New Delhi, 110075
              </Link>
              <br />
              <Link href="mailto:hello@desirediv.com" className="text-gray-500 hover:underline">
                hello@desirediv.com
              </Link>
              <br />
              <Link href="tel:+919871228881" className="text-gray-500 hover:underline">
                +91 9871228881
              </Link>
            </p>
          </div>
          <div className="w-full">
            <h1 className="font-bold text-xl">Gurgaon</h1>
            <p className="text-gray-500 pt-2">
              <Link
                href="https://www.google.com/maps/search/?q=T-16,+Pocket-5,+Plot+no-6,+Malik+Builcon,+Commercial+Plaza+Dwarka+Sector-12,+New+Delhi,+110075"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:underline"
              >
                T-16, Pocket-5, Plot no-6, Malik Builcon, Commercial Plaza Dwarka Sector-12, New Delhi, 110075
              </Link> <br />
              <Link href="mailto:hello@desirediv.com" className="text-gray-500 hover:underline">
                hello@desirediv.com
              </Link>
              <br />
              <Link href="tel:+9871228880" className="text--500 hover:underline">
                +91 9871228881
              </Link>
            </p>
          </div>
        </div>

        <section className="w-full h-[300px] md:h-[470px] mt-20 md:mt-40">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086165!2d144.95592831531685!3d-37.81720997975167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577cc4c0f9b19d1!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sus!4v1633079622227!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </section>
      </div>
    </>
  );
};

export default Page;

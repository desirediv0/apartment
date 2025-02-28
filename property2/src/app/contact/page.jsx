import React from "react";
import Banner from "@/components/ui/banner";

const Page = () => {
  return (
    <>
      {/* banner */}

      <Banner title={"Contact us"} breadcrumbs={"Contact us"}/>

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
            <h1 className="font-bold text-xl">AUSTIN</h1>
            <p className="text-gray-500 pt-4">
              22 Texas West Hills <br /> needhelp@company.com <br /> +92 (0088)
              - 8690
            </p>
          </div>
          <div className="w-full">
            <h1 className="font-bold text-xl">BOSTON</h1>
            <p className="text-gray-500 pt-4">
              5 Federal Street Boston <br /> needhelp@company.com <br /> +92
              (0088) - 8690
            </p>
          </div>
          <div className="w-full">
            <h1 className="font-bold text-xl">NEW YORK</h1>
            <p className="text-gray-500 pt-4">
              8th Broklyn New York <br /> needhelp@company.com <br /> +92 (0088)
              - 8690
            </p>
          </div>
          <div className="w-full">
            <h1 className="font-bold text-xl">BALTIMORE</h1>
            <p className="text-gray-500 pt-4">
              3 Lombabr 50 Baltimore <br /> needhelp@company.com <br /> +92
              (0088) - 8690
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

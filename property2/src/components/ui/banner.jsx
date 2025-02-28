import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Banner = (
  {
   title,
   breadcrumbs,
  }
) => {
  return (
    <>
     <section
  className="relative h-[400px] flex flex-col items-center justify-center text-white text-center"
  style={{
    backgroundImage: "url('/banner.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black opacity-50"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center">
    <Breadcrumb className="text-white">
      <BreadcrumbList className="flex justify-center items-center space-x-2">
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="text-white">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-white"/>
        <BreadcrumbItem>
          <BreadcrumbPage className="text-white">{breadcrumbs}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>

    <h1 className="text-5xl font-bold mt-2">{title}</h1>
  </div>
</section>

    </>
  );
};

export default Banner;

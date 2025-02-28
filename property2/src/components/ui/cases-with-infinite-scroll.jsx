"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

function Case() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent((prev) => prev + 1);
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [api]);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      {/* Carousel Container */}
      <div className="w-full max-w-7xl mx-auto px-4">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {Array.from({ length: 15 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                {/* Card with Hover Effect */}
                <div className="relative flex rounded-lg aspect-square overflow-hidden m-2 group">
                  {/* Image */}
                  <Image
                    src="/apartment-1-1.jpg" // Replace with your image path
                    alt={`Product ${index + 1}`}
                    fill
                    className="object-cover"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/50"></div>

                  {/* Animated Shadow */}
                  <div className="absolute top-0 left-0 w-full h-0 bg-black/50 transition-all duration-500 group-hover:h-full"></div>

                  {/* Product Name */}
                  <div className="absolute bottom-0 left-0 w-full p-4 text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <h3 className="text-lg font-semibold">Product {index + 1}</h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export { Case };
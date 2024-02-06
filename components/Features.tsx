import { FeaturesList } from "@/constants/Features";
import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

const Features = () => {
  return (
    <div className="mx-auto mt-4 lg:mt-7 flexCenter">
      <div className="grid grid-cols-2 xs:grid-cols-4 gap-2 xxs:gap-3 lg:gap-7 items-center justify-center w-[90vw]">
        {FeaturesList.map((feature) => (
          <div
            className="w-[43vw] h-[43vw] xs:w-[21vw] xs:h-[21vw] relative"
            key={feature.id}
          >
            <div className="absolute bg-black/40 z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md flexCenter text-center text-white w-[85%] h-[85%] p-2 hover:bg-black/50 hover:text-white/70">
              <div className="flexCenter flex-col">
                <Image
                  src={feature.icon}
                  alt=""
                  width={50}
                  height={50}
                  className="mb-3"
                />
                <h1 className="text-white/80 text-sm xxs:text-base md:text-lg lg:text-2xl truncate font-medium ">
                  {feature.name}
                </h1>
              </div>
            </div>
            <Image
              src={feature.image}
              alt={feature.name}
              width={150}
              height={150}
              className="object-cover w-full h-full rounded-md brightness-[60%] "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

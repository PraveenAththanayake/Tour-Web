"use client";

import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { BsArrowRightCircle } from "react-icons/bs";

export default class Hero extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4500,
    };

    return (
      <div className="mx-auto mt-20 flexCenter">
        <div className="relative w-[90vw]">
          <div className="z-0 h-[50vw] md:h-[45vw] xl:h-[40vw] overflow-hidden rounded-lg relative">
            <Slider {...settings}>
              <div className="relative">
                <Image
                  width={8000}
                  height={8000}
                  src="/assets/images/NuwaraEliya.jpg"
                  alt="Hero"
                  className="object-cover brightness-[60%]"
                  loading="lazy"
                />
                <div className="absolute w-[90%] top-[38%] md:top-[38%] xl:top-[32%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flexCenter flex-col text-center">
                  <h1 className="text-base xxs:text-lg xs:text-2xl lg:text-5xl xxxl:text-7xl font-medium">
                    Journey to Serenity: Uncover Sri Lanka's Beauty
                  </h1>
                  <p className="text-white/60 italic mt-3 xl:mt-11 text-[10px] sm:text-base lg:text-xl xxxl:text-2xl">
                    "Unveil pristine landscapes and untouched wonders.
                    Experience the raw beauty of Sri Lanka, where nature's
                    treasures await your exploration."
                  </p>
                  <CustomButton
                    title="Explore Now"
                    containerStyles="bg-green-500 max-xs:hidden mt-5 text-xs sm:text-base xxxl:text-xl py-2 px-6 sm:py-3 xxxl:py-5 xxxl:px-8 hover:bg-green-600"
                    rightIcon={<BsArrowRightCircle />}
                  />
                </div>
              </div>
              <div className="relative">
                <Image
                  width={8000}
                  height={8000}
                  src="/assets/images/heritage.jpg"
                  alt="Hero"
                  className="object-cover brightness-[60%]"
                  loading="lazy"
                />
                <div className="absolute w-[90%] top-[38%] md:top-[38%] xl:top-[32%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flexCenter flex-col text-center">
                  <h1 className="text-base xxs:text-lg xs:text-2xl lg:text-5xl xxxl:text-7xl font-medium">
                    Immerse Yourself in Sri Lanka's Rich Heritage
                  </h1>
                  <p className="text-white/60 italic mt-3 xl:mt-11 text-[10px] sm:text-base lg:text-xl xxxl:text-2xl">
                    "Dive into a tapestry of history and tradition. Walk through
                    ancient temples, explore cultural gems, and immerse yourself
                    in the vibrant heritage of Sri Lanka."
                  </p>
                  <CustomButton
                    title="Explore Now"
                    containerStyles="bg-green-500 max-xs:hidden mt-5 text-xs sm:text-base xxxl:text-xl py-2 px-6 sm:py-3 xxxl:py-5 xxxl:px-8 hover:bg-green-600"
                    rightIcon={<BsArrowRightCircle />}
                  />
                </div>
              </div>
              <div className="relative">
                <Image
                  width={8000}
                  height={8000}
                  src="/assets/images/Beaches.jpg"
                  alt="Hero"
                  className="object-cover brightness-[60%]"
                  loading="lazy"
                />
                <div className="absolute w-[90%] top-[38%] md:top-[38%] xl:top-[32%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flexCenter flex-col text-center">
                  <h1 className="text-base xxs:text-lg xs:text-2xl lg:text-5xl xxxl:text-7xl font-medium">
                    From Beaches to Mountains - Nature's Masterpiece
                  </h1>
                  <p className="text-white/60 italic mt-3 xl:mt-11 text-[10px] sm:text-base lg:text-xl xxxl:text-2xl">
                    "Journey from sun-kissed beaches to misty mountains. Sri
                    Lanka, a natural masterpiece, offers diverse landscapes that
                    promise awe-inspiring views and unforgettable adventures."
                  </p>
                  <CustomButton
                    title="Explore Now"
                    containerStyles="bg-green-500 max-xs:hidden mt-5 text-xs sm:text-base xxxl:text-xl py-2 px-6 sm:py-3 xxxl:py-5 xxxl:px-8 hover:bg-green-600"
                    rightIcon={<BsArrowRightCircle />}
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

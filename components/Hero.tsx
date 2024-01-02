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
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4500,
    };

    return (
      <div className="mx-auto my-20 flexCenter">
        <div className="relative w-[93vw]">
          <div className="z-0 h-[60vw] md:h-[45vw] xl:h-[40vw] overflow-hidden rounded-lg relative">
            <Slider {...settings}>
              <div className="relative">
                <Image
                  width={8000}
                  height={8000}
                  src="/assets/images/Hero.jpg"
                  alt="Hero"
                  className="object-cover brightness-[60%]"
                  priority={true}
                  loading="eager"
                />
                <div className="absolute w-[90%] top-1/2 md:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flexCenter flex-col text-center">
                  <h1 className="text-lg sm:text-3xl lg:text-5xl xxxl:text-7xl font-medium">
                    Journey to Serenity: Uncover Sri Lanka's Natural Beauty
                  </h1>
                  <p className="italic mt-3 md:mt-8 text-[10px] sm:text-base lg:text-xl xxxl:text-2xl">
                    "Unveil pristine landscapes and untouched wonders.
                    Experience the raw beauty of Sri Lanka, where nature's
                    treasures await your exploration."
                  </p>
                  <CustomButton
                    title="Explore Now"
                    containerStyles="bg-green-500 max-xs:hidden"
                    rightIcon={<BsArrowRightCircle />}
                  />
                </div>
              </div>
              <div className="relative">
                <Image
                  width={8000}
                  height={8000}
                  src="/assets/images/NuwaraEliya.jpg"
                  alt="Hero"
                  className="object-cover brightness-[60%]"
                  priority={true}
                  loading="eager"
                />
                <div className="absolute w-[90%] top-1/2 md:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flexCenter flex-col text-center">
                  <h1 className="text-lg sm:text-3xl lg:text-5xl xxxl:text-7xl font-medium">
                    Immerse Yourself in Sri Lanka's Rich Heritage
                  </h1>
                  <p className="italic mt-3 md:mt-8 text-[10px] sm:text-base lg:text-xl xxxl:text-2xl">
                    "Dive into a tapestry of history and tradition. Walk through
                    ancient temples, explore cultural gems, and immerse yourself
                    in the vibrant heritage of Sri Lanka."
                  </p>
                  <CustomButton
                    title="Explore Now"
                    containerStyles="bg-green-500 max-xs:hidden"
                    rightIcon={<BsArrowRightCircle />}
                  />
                </div>
              </div>
              <div className="relative">
                <Image
                  width={8000}
                  height={8000}
                  src="/assets/images/Beach.jpg"
                  alt="Hero"
                  className="object-cover brightness-[60%]"
                  priority={true}
                  loading="eager"
                />
                <div className="absolute w-[90%] top-1/2 md:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flexCenter flex-col text-center">
                  <h1 className="text-lg sm:text-3xl lg:text-5xl xxxl:text-7xl font-medium">
                    From Beaches to Mountains - Nature's Masterpiece
                  </h1>
                  <p className="italic mt-3 md:mt-8 text-[10px] sm:text-base lg:text-xl xxxl:text-2xl">
                    "Journey from sun-kissed beaches to misty mountains. Sri
                    Lanka, a natural masterpiece, offers diverse landscapes that
                    promise awe-inspiring views and unforgettable adventures."
                  </p>
                  <CustomButton
                    title="Explore Now"
                    containerStyles="bg-green-500 max-xs:hidden"
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
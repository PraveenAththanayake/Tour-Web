"use client";

import { Button, Collapse } from "@chakra-ui/react";
import { useState } from "react";
import CustomButton from "../CustomButton";

const OurTours = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <div className="mx-auto mt-8 w-[90vw]">
      <div className="border border-black rounded-lg flexCenter flex-col p-5">
        <h1>Our Awesome Tours</h1>
        <div className="w-[80vw]">
          <div className="mx-auto px-5">
            <div className="flex flex-col md:flex-row cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:shadow-md">
              <img
                className="w-full rounded-lg object-cover object-center max-w-xs h-56"
                src="/assets/images/Minneriya.jpg"
                alt="product"
              />
              <div className="my-4 pl-4">
                <h3 className="font-bold">Splendor Lovers</h3>
                <Collapse startingHeight={75} in={show}>
                  This is a tour plan for newly married couples or couples who
                  are celebrating their anniversary. It will be a delight to
                  have this tour plan. We make it so that we can have a more
                  enjoyable time.Our main goal is to travel around Sri Lanka and
                  experience its unique hospitality and culture. Your holiday
                  plan created according to all the flights arrivals are in the
                  morning time period to Sri Lanka on a certain day. Due to
                  flight schedule first day holiday plan will be change. Thank
                  you.
                </Collapse>
                <div className="flex flex-row gap-3">
                  <Button
                    size="sm"
                    onClick={handleToggle}
                    mt="1rem"
                    className="border border-black hover:bg-black hover:text-white duration-150 py-3 px-5 rounded-md"
                  >
                    Show {show ? "Less" : "More"}
                  </Button>
                  <Button
                    size="sm"
                    mt="1rem"
                    className="bg-green-400 hover:bg-white border border-green-400 duration-150 py-3 px-7 rounded-md"
                  >
                    Book Tour
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTours;

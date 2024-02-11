import React from "react";

const Destinations = () => {
  return (
    <div className="mx-auto flexCenter">
      <div className="w-[90vw]">
        <h1>Top Destinations</h1>
        <span>Top Notch Areas to visit in Sri Lanka</span>
        <div className="grid grid-cols-3 grid-rows-2">
          <div className="row-span-1">
            <img
              src="/images/destinations/destination1.jpg"
              alt="destination1"
            />
            <h3>Colombo</h3>
          </div>
          <div className="col-span-1">
            <img
              src="/images/destinations/destination2.jpg"
              alt="destination2"
            />
            <h3>Kandy</h3>
          </div>
          <div>
            <img
              src="/images/destinations/destination3.jpg"
              alt="destination3"
            />
            <h3>Galle</h3>
          </div>
          <div>
            <img
              src="/images/destinations/destination4.jpg"
              alt="destination4"
            />
            <h3>Trincomalee</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;

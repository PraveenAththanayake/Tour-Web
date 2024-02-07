"use client";

import { useState } from "react";

const AboutUs = () => {
  const [mission, setMission] = useState(true);
  const [focus, setFocus] = useState(false);

  return (
    <div className="mx-auto flexCenter mt-5">
      <div className="w-[90vw]">
        <h1 className="text-sm font-medium text-green-600">About Us</h1>
        <div className="text-base font-medium my-2">
          Let's Know About Our Journey For Splendors
        </div>
        <div>
          <div className="flexBetween mb-3">
            <button
              onClick={() => {
                setMission(true);
                setFocus(false);
              }}
              className="text-xs border border-green-600 hover:bg-green-400 py-2 px-3 rounded-md"
            >
              Mission and Vision
            </button>
            <button
              onClick={() => {
                setMission(false);
                setFocus(true);
              }}
              className="text-xs border border-green-600 hover:bg-green-400 py-2 px-3 rounded-md"
            >
              Focus On Customer
            </button>
          </div>
          <p className="text-xs text-justify">
            {mission
              ? "Embark on a journey of unparalleled discovery with Splendors Tours, where our mission is to unveil the hidden treasures of Sri Lanka's rich tapestry. Guided by a vision of immersive experiences, we strive to redefine travel, offering unforgettable adventures that celebrate the beauty, culture, and diversity of our island paradise."
              : focus
              ? "Embark on a journey of unparalleled hospitality with Splendors Tours, your ultimate companion in exploring the breathtaking wonders of Sri Lanka. With a relentless focus on customer satisfaction, we tailor each experience to exceed your expectations, ensuring every moment is filled with joy, comfort, and unforgettable memories. Discover Sri Lanka like never before with Splendors Tours."
              : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

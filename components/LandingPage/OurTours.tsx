"use client";

import { Button, Collapse } from "@chakra-ui/react";
import { useState } from "react";
import CustomButton from "../CustomButton";

const OurTours = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  return <div className="w-full"></div>;
};

export default OurTours;

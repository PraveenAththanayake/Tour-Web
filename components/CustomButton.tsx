"use client";

import { CustomButtonProps } from "@/types/Button";
import Image from "next/image";

const CustomButton = ({
  isDisabled,
  btnType,
  containerStyles,
  textStyles,
  title,
  rightIcon,
  handleClick,
}: CustomButtonProps) => (
  <button
    disabled={isDisabled}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
  >
    <span className={`${textStyles}`}>{title}</span>
    {rightIcon && <div className="ml-2 sm:ml-5">{rightIcon}</div>}
  </button>
);

export default CustomButton;

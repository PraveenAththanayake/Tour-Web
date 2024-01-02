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
    <span className={`flex-1 ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className="relative w-6 h-6">
        <Image
          width={30}
          height={30}
          src={rightIcon}
          alt="rightIcon"
          className="object-contain"
        />
      </div>
    )}
  </button>
);

export default CustomButton;

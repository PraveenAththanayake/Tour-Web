"use client";

import { NavLinks } from "@/constants/NavLinks";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const Navbar = () => {
  const handleClose = () => {};
  return (
    <nav className="fixed top-0 w-full z-50 bg-white">
      <div className="max-w-screen-xl flexBetween flex-row px-5 sm:px-10 mx-auto py-5">
        <h1 className="text-2xl">
          Tour <span className="text-green-400">X</span>
        </h1>
        <div className="space-x-8 text-lg max-lg:hidden">
          {NavLinks.map((link) => (
            <Link
              href={link.path}
              key={link.name}
              className="hover:bg-green-400 px-4 py-2 rounded-md"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <Menu>
          <MenuButton className="rounded-full">
            <Image
              src="/assets/images/user.png"
              width={30}
              height={30}
              alt="user"
            />
          </MenuButton>
          <MenuList className="shadow-lg p-5 flex flex-col gap-2 bg-white">
            <MenuItem>My Account</MenuItem>
            <MenuItem>Payments</MenuItem>
            <MenuDivider />
            <CustomButton
              title="Logout"
              containerStyles="bg-green-400"
              handleClick={handleClose}
            />
          </MenuList>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;

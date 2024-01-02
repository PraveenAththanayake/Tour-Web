"use client";

import { NavLinks } from "@/constants/NavLinsk";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav className="sticky">
      <div className="max-w-screen-xl flexBetween flex-row px-10 mx-auto py-5">
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
              width="30"
              height="30"
              alt="user"
            />
          </MenuButton>
          <MenuList className="shadow-lg p-5 flex flex-col gap-2">
            <MenuItem>My Account</MenuItem>
            <MenuItem>Payments</MenuItem>
            <MenuDivider />
            <MenuItem>
              <button>Log out</button>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;

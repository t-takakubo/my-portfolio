import React from "react";
import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { SiGithub } from "react-icons/si";
import { SiQiita } from "react-icons/si";
import { AiFillMail } from "react-icons/ai";
import LinkDropdown from "./LinkDropdown";

const Header = () => {
  return (
    <Navbar isBordered>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/profile">
            Profile
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Works
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <LinkDropdown />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link isExternal href="https://github.com/toshiki-git">
            <SiGithub size={20} color="white" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link isExternal href="https://qiita.com/takakubo_toshiki">
            <SiQiita size={35} color="white" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link isExternal href="https://qiita.com/takakubo_toshiki">
            <AiFillMail size={20} color="white" />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;

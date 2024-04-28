"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Link,
} from "@nextui-org/react";
import { SiGithub, SiQiita } from "react-icons/si";
import { PiStudentBold } from "react-icons/pi";
import { BiChevronDown } from "react-icons/bi";

export const LinkDropdown = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          disableRipple
          className="p-0 bg-transparent data-[hover=true]:bg-transparent"
          endContent={<BiChevronDown size={25} />}
          radius="sm"
          variant="light"
        >
          MyLink
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="git" startContent={<SiGithub />}>
          <Link
            isExternal
            href="https://github.com/toshiki-git"
            className="text-foregrand"
          >
            Github
          </Link>
        </DropdownItem>
        <DropdownItem key="research" startContent={<PiStudentBold />}>
          <Link
            isExternal
            href="http://www.li-nlab.org/?page_id=156"
            className="text-foregrand"
          >
            Research
          </Link>
        </DropdownItem>
        <DropdownItem key="qiita" startContent={<SiQiita />}>
          <Link
            isExternal
            href="https://qiita.com/takakubo_toshiki"
            className="text-foregrand"
          >
            Qiita
          </Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

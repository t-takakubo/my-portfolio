import React from "react";
import { AiFillMail } from "react-icons/ai";
import { SiGithub, SiQiita } from "react-icons/si";
import { Link } from "@nextui-org/react";

const Footer = () => {
  const lastUpdated = `最終更新日: 2024年01月21日`; // 最終更新日を設定

  return (
    <footer className="body-font border-t border-gray-100 mt-8">
      <div className="container px-5 py-3 mx-auto flex items-center justify-between flex-col sm:flex-row">
        <div className="flex justify-center sm:order-2 mb-4 sm:mb-0">
          <Link
            isExternal
            href="https://github.com/toshiki-git"
            className="mx-3"
          >
            <SiGithub size={20} color="white" />
          </Link>
          <Link
            isExternal
            href="https://qiita.com/takakubo_toshiki"
            className="mx-3"
          >
            <SiQiita size={35} color="white" />
          </Link>
          <Link href="/contact" className="mx-3">
            <AiFillMail size={20} color="white" />
          </Link>
        </div>

        <p className="text-sm text-center sm:text-left sm:order-1">
          © Toshiki Takakubo. All rights reserved.
        </p>

        <div className="text-sm text-center sm:text-right sm:order-3">
          {lastUpdated}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Image } from "@nextui-org/react";

const BasicInfo = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8">
        {/* Profile Section Title */}
        <div className="text-3xl font-bold">Profile</div>

        {/* Profile Content */}
        <div className="mt-6 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
          {/* Profile Image */}
          <Image
            alt="Profile"
            className="object-cover rounded-full" // Adjust the size as needed
            src="/icon.png"
            width={630}
          />

          {/* Profile Description */}
          <div className="text-lg leading-relaxed">
            <p>
              &emsp;はじめまして。金沢大学大学院電子情報通信学専攻1年の高窪俊企です。現在、私は
              <a
                className="text-primary hover:underline" // Styling for the link
                href="http://www.li-nlab.org/?page_id=156"
                target="_blank"
                rel="noopener noreferrer"
              >
                情報ネットワーク研究室
              </a>
              に所属しています。この研究室ではブロックチェーンや人口知能(AI)、メタバース、量子ネットワークなどの研究を行っています。
              私の専門分野はブロックチェーンであり、ブロックチェーンを使ったECサイトにおける価格監査システムの構築やスループット向上のためのシャーディングに関する研究を行っています。
            </p>
            <p>
              &emsp;プログラミング経験は、大学2年の頃に始めて3年半くらい続けています。研究に使ったり、趣味でいろいろ触ってます。
              将来はフロントとバックどっちもできるようなエンジニアになりたいです。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;

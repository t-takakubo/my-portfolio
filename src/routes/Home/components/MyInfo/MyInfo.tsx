import { Avatar } from "@nextui-org/react";
import { PiStudentBold } from "react-icons/pi";
import { BiMap } from "react-icons/bi";
import { Heading } from "@/components/Heading";

export const MyInfo = () => {
  return (
    <div className="mt-5">
      <Heading heading="Basic Information" />
      <div className="flex flex-col items-center w-full my-9 p-6">
        <Avatar
          alt="Avatar Image"
          className="w-[220px] h-[220px]"
          src="/icon.png"
        />
        <p className="my-5 text-4xl font-semibold">高窪俊企</p>
        <div>
          <BiMap className="text-blue-500 inline" size={25} />
          <span className="ml-2 text-xl">石川県</span>
        </div>
        <div>
          <PiStudentBold className="text-green-500 inline" size={25} />
          <span className="ml-2 text-xl">金沢大学大学院</span>
        </div>
        <div className="mt-4 border-t-1 max-w-3xl">
          <p className="mt-2 text-lg text-center">
            はじめまして。金沢大学大学院の学生で、情報ネットワーク研究室に所属しています。
            <br />
            ブロックチェーン技術に興味があり、その応用研究を行っています。
            <br />
            フロントエンドとバックエンドの両方が扱えるエンジニアになることを目指しています。
          </p>
        </div>
      </div>
    </div>
  );
};

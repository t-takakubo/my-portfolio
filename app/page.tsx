import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { BiMap } from "react-icons/bi";
import { PiStudentBold } from "react-icons/pi";

export default function App() {
  return (
    <div>
      <Card className="mt-5">
        <CardHeader className="font-bold text-large">
          Basic Information
        </CardHeader>
        <div className="flex justify-center">
          <div className="max-w-3xl w-full rounded-lg overflow-hidden my-10 p-6 space-y-4">
            <div className="flex justify-center">
              <Image
                alt="Card background"
                className="object-cover rounded-full"
                src="/icon.png"
              />
            </div>

            {/* 名前 */}
            <div className="text-center mt-4">
              <p className="text-4xl font-semibold text-foregrand">高窪俊企</p>
            </div>

            {/* 地理的情報 & 学歴 */}
            <div className="mt-6 text-center space-y-2">
              <div className="flex justify-center items-center text-foregrand">
                <BiMap className="text-blue-500" size={25} />{" "}
                <span className="ml-2 text-xl">石川県</span>
              </div>
              <div className="flex justify-center items-center text-foregrand">
                <PiStudentBold className="text-green-500" size={25} />{" "}
                <span className="ml-2 text-xl">金沢大学大学院</span>
              </div>

              <hr className="my-6 mt-4" />

              {/* 自己紹介 */}
              <div className="text-foregrand mb-4">
                <p className="text-lg text-center">
                  はじめまして。金沢大学大学院の学生で、情報ネットワーク研究室に所属しています。
                  ブロックチェーン技術に興味があり、その応用研究を行っています。
                  <br />
                  フロントエンドとバックエンドの両方が扱えるエンジニアになることを目指しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

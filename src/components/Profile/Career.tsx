"use client";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
  Image,
} from "@nextui-org/react";
import React from "react";

const Career = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-3xl font-bold">Career</div>
      <div className="flex w-full flex-col">
        <Tabs aria-label="Options" className="mt-3">
          <Tab key="graduate" title="大学院">
            <Card>
              <CardBody>
                <div className="text-2xl font-bold">学校名</div>
                <div>
                  金沢大学大学院&nbsp;電子情報通信学専攻&nbsp;2023年4月〜2025年3月(卒業予定)
                </div>
                <div className="text-2xl font-bold mt-5">活動</div>
                <div>
                  大学院では情報ネットワーク研究室に所属しており、そこで研究をしています。
                  研究内容は、ブロックチェーンの処理速度を向上させるためのシャーディングという技術について研究しています。
                  下の写真が研究室の概要になります。
                </div>
                <Image
                  alt="Card background"
                  width={300}
                  src="/Labo.png"
                  className="mt-3"
                />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="university" title="大学">
            <Card>
              <CardBody>
                <div className="text-2xl font-bold">学校名</div>
                <div>
                  金沢大学&nbsp;電子情報通信学類&nbsp;情報通信コース&nbsp;2019年4月〜2023年3月
                </div>
                <div className="text-2xl font-bold mt-5">活動</div>
                <div>
                  大学ではプログラミングや、機械学習、論理回路、数学、物理などの幅広い知識を学びました。
                  <br />
                  また、焼肉店でのアルバイトを4年間続けていました。
                </div>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="high" title="高校">
            <Card>
              <CardBody>
                <div className="text-2xl font-bold">学校名</div>
                <div>
                  石川県立金沢西高等学校&nbsp;普通科&nbsp;2016年4月〜2019年3月
                </div>
                <div className="text-2xl font-bold mt-5">活動</div>
                <div>
                  高校では写真部に所属していて、主に下の写真のような風景画などを中心に撮影していました。
                  <Image
                    alt="Card background"
                    width={300}
                    src="/picture.jpg"
                    className="mt-3"
                  />
                </div>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="junior" title="中学">
            <Card>
              <CardBody>
                <div className="text-2xl font-bold">学校名</div>
                <div>金沢市立金石中学校&nbsp;2013年4月〜2016年3月</div>
                <div className="text-2xl font-bold mt-5">活動</div>
                <div>
                  中学では陸上部に所属しており、主に長距離を走っていました。
                </div>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Career;

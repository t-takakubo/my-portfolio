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
        <Tabs aria-label="Options">
          <Tab key="graduate" title="大学院">
            <Card>
              <CardHeader>
                金沢大学大学院&nbsp;電子情報通信学専攻&nbsp;2023年4月〜2025年3月(卒業予定)
              </CardHeader>
              <CardBody>
                大学院では学部生の時に作成した、ECサイトの価格監査システムの応用について研究しています。
                具体的にはシャーディングという技術を使って、ブロックチェーンのスループット(処理速度)を向上させることを目指しています。
                <Image
                  alt="Card background"
                  isZoomed
                  width={300}
                  src="/Labo.png"
                />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="university" title="大学">
            <Card>
              <CardHeader>
                金沢大学&nbsp;電子情報通信学類&nbsp;情報通信コース&nbsp;2019年4月〜2023年3月
              </CardHeader>
              <CardBody>
                大学では基礎的なプログラミングやデータ構造、アルゴリズムなどの授業を受けました。
              </CardBody>
            </Card>
          </Tab>
          <Tab key="high" title="高校">
            <Card>
              <CardHeader>
                石川県立金沢西高等学校&nbsp;普通科&nbsp;2016年4月〜2019年3月
              </CardHeader>
              <CardBody>
                高校では写真部に所属していて、主に下の写真のような風景画などを中心に撮影していました。
                <Image alt="Card background" width={300} src="/picture.jpg" />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="junior" title="中学">
            <Card>
              <CardHeader>
                金沢市立金石中学校&nbsp;2013年4月〜2016年3月
              </CardHeader>
              <CardBody>
                中学では陸上部に所属しており、主に長距離を走っていました。
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Career;

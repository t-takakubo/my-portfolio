"use client";
import React, { useState } from "react";
import { ECPASModal } from "@/routes/Works/components/ECPASModal";
import { NexModal } from "@/routes/Works/components/NexModal";
import { ECModal } from "@/routes/Works/components/ECModal";
import { WeatherModal } from "@/routes/Works/components/WeatherModal";
import { PrefectureModal } from "@/routes/Works/components/PrefectureModal";
import { CharityModal } from "@/routes/Works/components/CharityModal";
import {
  Card,
  CardBody,
  CardFooter,
  useDisclosure,
  Image,
} from "@nextui-org/react";

export const WorksPage = () => {
  const [activeModal, setActiveModal] = useState(0);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleCardClick = (id: number) => {
    setActiveModal(id);
    onOpen();
  };

  const renderActiveModal = () => {
    switch (activeModal) {
      case 1:
        return <ECPASModal isOpen={isOpen} onOpenChange={onOpenChange} />;
      case 2:
        return <NexModal isOpen={isOpen} onOpenChange={onOpenChange} />;
      case 3:
        return <ECModal isOpen={isOpen} onOpenChange={onOpenChange} />;
      case 4:
        return <WeatherModal isOpen={isOpen} onOpenChange={onOpenChange} />;
      case 5:
        return <PrefectureModal isOpen={isOpen} onOpenChange={onOpenChange} />;
      case 6:
        return <CharityModal isOpen={isOpen} onOpenChange={onOpenChange} />;
      default:
        return null;
    }
  };

  const list = [
    {
      id: 1,
      title: "価格監査システム",
      img: "/ECPAS.png",
    },
    {
      id: 2,
      title: "Nex: ゲーム専用掲示板",
      img: "/nex.png",
    },
    {
      id: 3,
      title: "ECサイト構築",
      img: "/ECsite.png",
    },
    {
      id: 4,
      title: "Weather Remind Tool",
      img: "/WhetherRemind.png",
    },
    {
      id: 5,
      title: "都道府県人口推移グラフ",
      img: "/Prefecture.png",
    },
    {
      id: 6,
      title: "CharityChain",
      img: "/CharityChain.png",
    },
  ];
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="text-3xl font-bold">Works</div>
      </div>
      <div>
        <div className="gap-4 grid grid-cols-2 sm:grid-cols-4 mt-4">
          {list.map((item, index) => (
            <Card
              shadow="sm"
              key={index}
              isPressable
              onPress={() => handleCardClick(item.id)}
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-large justify-between">
                <b>{item.title}</b>
              </CardFooter>
            </Card>
          ))}
        </div>
        {renderActiveModal()}
      </div>
    </div>
  );
};

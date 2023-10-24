"use client";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";
import ECPASModal from "./ECPASModal";
import NexModal from "./NexModal";
import ECModal from "./ECModal";
import WeatherModal from "./WeatherModal";

const Work = () => {
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
  ];

  return (
    <div>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 mt-4">
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => handleCardClick(item.id)}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                isZoomed
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
  );
};

export default Work;

"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";

const Internship = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-3xl font-bold">Internship</div>
      <Accordion>
        <AccordionItem key="1" aria-label="Accordion 1" title="ASKUL">
          2週間の間、フロントエンドの開発を行いました。 Spring
          Boot,Thymeleaf,TypeScriptを使って開発を行いました。
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Intage">
          ハッカソン形式で与えられたデータを使って、価格予測モデルの作成を行いました。
          Pytorchを使ってニューラルネットワークを作成して、モデルの作成を行いました。
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="HRBrain">
          アイデアソン形式で、2050年の労働人口不足問題を
          HR&技術を使って解決する課題に取り組みました。
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Internship;

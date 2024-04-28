"use client";
import { Accordion, AccordionItem, Link } from "@nextui-org/react";
import React from "react";

const Hackathon = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-3xl font-bold mt-4">Hackathon</div>
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="【技育CAMP】マンスリーハッカソン vol.8"
        >
          Google Apps ScriptとOpenWeather
          APIを使って、明日の予定天気をリマインドしてくれるWether
          Remindツールを作成しました。 詳細は<Link href="/works">こちら</Link>
          から確認できます。
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title="【技育CAMP】マンスリーハッカソン vol.9"
        >
          Next.jsとFastAPIを使って、ゲーム専用掲示板Nexを作成しました。詳細は
          <Link href="/works">こちら</Link>
          から確認できます。
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Hackathon;

"use client";
import { Accordion, AccordionItem, Link } from "@nextui-org/react";
import React from "react";

export const Internship = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-3xl font-bold mt-4">Internship</div>
      <Accordion>
        <AccordionItem key="1" aria-label="Accordion 1" title="ASKUL">
          <div className="text-xl font-semibold">概要:</div>
          <p>
            2週間、ECサイトのフロントエンド開発に携わり、特にスマートフォン用の検索結果ページにおいて、価格やカテゴリで商品をフィルタリングする機能を持つモーダルウィンドウの開発を担当しました。
          </p>
          <div className="text-xl mt-5 font-semibold">苦労した点:</div>
          <p>
            初めて、大規模なプロジェクトに参加して、大規模なプログラムを解読して、修正箇所を特定することが一番苦労しました。メンターの方に積極的に質問することで、プログラムの全体像を理解することができて、解決することができました。
          </p>
          <div className="text-xl mt-5 font-semibold">得られたもの:</div>
          <p>
            この経験を通じて、報酬を受け取りながらエンジニアとしての実務経験を積むことができました。特に、エンジニアとしての業務プロセスや、大規模なプログラムの理解と読解スキルを養うことができたのは大きな収穫です。
          </p>
          <div className="text-xl mt-5 font-semibold">使用技術:</div>
          <p>TypeScript, Spring Boot, Thymeleaf, Kotlin, AWS, Docker, Git.</p>
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Intage">
          <div className="text-xl font-semibold">概要:</div>
          <p>
            3日間にわたり、商品価格の予測モデルを作成するプロジェクトに取り組みました。提供された商品データセットを基に、ニューラルネットワークを使用してモデルを構築し、約20円の誤差範囲で未知のデータを予測できる成果を得ました。
          </p>
          <div className="text-xl mt-5 font-semibold">苦労した点:</div>
          <p>
            データセットのクレンジング(破損したデータ、不正確なデータ、無関係のデータを特定して解決する手法)作業に最も苦労しました。多くの欠損値と、商品価格予測において不要と思われるパラメータが含まれていました。データセットがそもそも大規模ではなかったため、欠損値をデータ全体の平均値で補完し、相関分析を行って価格予測に重要なパラメータを選定することで、これらの問題に対処しました。
          </p>
          <div className="text-xl mt-5 font-semibold">得られたもの:</div>
          <p>
            機械学習は授業などでしか使ったことがなかったが、実際のデータセットでモデルを構築する経験ができました。
          </p>
          <div className="text-xl mt-5 font-semibold">使用技術:</div>
          <p>Python, PyTorch.</p>
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="HRBrain">
          2050年の労働人口不足問題をHR&技術を使って解決する課題に取り組みました。
        </AccordionItem>
        <AccordionItem key="4" aria-label="Accordion 4" title="Mercari">
          3日間にわたり、ブロックチェーンを用いた寄付システムの開発を行いました。詳細は
          <Link href="/works">こちら</Link>
          から確認できます。
        </AccordionItem>
      </Accordion>
    </div>
  );
};

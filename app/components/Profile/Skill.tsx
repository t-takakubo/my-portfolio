"use client";
import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import Rating from "./Rating";

const Skill = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-3xl font-bold">Skills</div>
      <Card>
        <CardHeader className="flex flex-col justify-center items-center text-center">
          <div className="font-bold text-3xl mt-5">プログラミング言語</div>
          <div className="mt-3">
            最近はRubyを使ったバックエンドの勉強もしています。
          </div>
        </CardHeader>
        <CardBody>
          <Table isStriped aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>言語</TableColumn>
              <TableColumn>経験年数</TableColumn>
              <TableColumn>用途</TableColumn>
              <TableColumn>レベル</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>JavaScript</TableCell>
                <TableCell>2年</TableCell>
                <TableCell>研究、フロントエンド開発</TableCell>
                <TableCell>
                  <Rating value={5} />
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>TypeScript</TableCell>
                <TableCell>6ヶ月</TableCell>
                <TableCell>フロントエンド開発、インターンシップ</TableCell>
                <TableCell>
                  <Rating value={3} />
                </TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>Solidity</TableCell>
                <TableCell>1年6ヶ月</TableCell>
                <TableCell>研究(ブロックチェーン)</TableCell>
                <TableCell>
                  <Rating value={4} />
                </TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>Python</TableCell>
                <TableCell>2年6ヶ月</TableCell>
                <TableCell>機械学習、グラフの作成</TableCell>
                <TableCell>
                  <Rating value={4} />
                </TableCell>
              </TableRow>
              <TableRow key="5">
                <TableCell>Ruby</TableCell>
                <TableCell>3ヶ月</TableCell>
                <TableCell>バックエンド開発</TableCell>
                <TableCell>
                  <Rating value={2} />
                </TableCell>
              </TableRow>
              <TableRow key="6">
                <TableCell>C言語</TableCell>
                <TableCell>1年</TableCell>
                <TableCell>数値計算、画像処理</TableCell>
                <TableCell>
                  <Rating value={2} />
                </TableCell>
              </TableRow>
              <TableRow key="7">
                <TableCell>HTML</TableCell>
                <TableCell>1年</TableCell>
                <TableCell>Webページ作成、インターンシップ</TableCell>
                <TableCell>
                  <Rating value={4} />
                </TableCell>
              </TableRow>
              <TableRow key="7">
                <TableCell>CSS</TableCell>
                <TableCell>1年</TableCell>
                <TableCell>Webページ作成</TableCell>
                <TableCell>
                  <Rating value={3} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardBody>
      </Card>

      <Card>
        <CardHeader className="flex flex-col justify-center items-center text-center">
          <div className="font-bold text-3xl mt-5">
            その他技術やフレームワーク
          </div>
          <div className="mt-3">
            最近はNext.jsやRailsをメインで勉強しています。このサイトもNext.jsで作りました。
          </div>
        </CardHeader>
        <CardBody>
          <Table isStriped aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>技術</TableColumn>
              <TableColumn>経験年数</TableColumn>
              <TableColumn>用途</TableColumn>
              <TableColumn>レベル</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>Linuxコマンド</TableCell>
                <TableCell>3年6ヶ月</TableCell>
                <TableCell>研究、開発全般</TableCell>
                <TableCell>
                  <Rating value={5} />
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>Node.js</TableCell>
                <TableCell>1年6ヶ月</TableCell>
                <TableCell>研究、Webサーバの立ち上げ</TableCell>
                <TableCell>
                  <Rating value={4} />
                </TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>React</TableCell>
                <TableCell>6ヶ月</TableCell>
                <TableCell>フロントエンド開発</TableCell>
                <TableCell>
                  <Rating value={4} />
                </TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>Next.js</TableCell>
                <TableCell>3ヶ月</TableCell>
                <TableCell>フロントエンド開発</TableCell>
                <TableCell>
                  <Rating value={3} />
                </TableCell>
              </TableRow>
              <TableRow key="5">
                <TableCell>Rails</TableCell>
                <TableCell>3ヶ月</TableCell>
                <TableCell>バックエンド開発</TableCell>
                <TableCell>
                  <Rating value={2} />
                </TableCell>
              </TableRow>
              <TableRow key="6">
                <TableCell>PostgreSQL</TableCell>
                <TableCell>6ヶ月</TableCell>
                <TableCell>RailsのDBとして使ってます</TableCell>
                <TableCell>
                  <Rating value={3} />
                </TableCell>
              </TableRow>
              <TableRow key="7">
                <TableCell>MongoDB</TableCell>
                <TableCell>3ヶ月</TableCell>
                <TableCell>ECサイトのDBとして使いました</TableCell>
                <TableCell>
                  <Rating value={2} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardBody>
      </Card>

      <Card>
        <CardHeader className="flex flex-col justify-center items-center text-center">
          <div className="font-bold text-3xl mt-5">ツール</div>
          <div className="mt-3">Dcokerを使った環境構築について勉強中です。</div>
        </CardHeader>
        <CardBody>
          <Table isStriped aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>技術</TableColumn>
              <TableColumn>経験年数</TableColumn>
              <TableColumn>用途</TableColumn>
              <TableColumn>レベル</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>Git</TableCell>
                <TableCell>6ヶ月</TableCell>
                <TableCell>開発全般、インターンシップ</TableCell>
                <TableCell>
                  <Rating value={4} />
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>Docker</TableCell>
                <TableCell>6ヶ月</TableCell>
                <TableCell>環境構築</TableCell>
                <TableCell>
                  <Rating value={3} />
                </TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>AWS</TableCell>
                <TableCell>3ヶ月</TableCell>
                <TableCell>インターンシップ</TableCell>
                <TableCell>
                  <Rating value={1} />
                </TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>Slack</TableCell>
                <TableCell>2年</TableCell>
                <TableCell>研究、インターンシップ</TableCell>
                <TableCell>
                  <Rating value={5} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default Skill;

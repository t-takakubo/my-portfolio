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
  Image,
  Link,
} from "@nextui-org/react";
import Rating from "./Rating";

const Skill = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-3xl font-bold mb-4">Skills</div>
      <Card className="mb-4">
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
                <TableCell className="flex items-center">
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    isExternal
                  >
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                      alt="javascript"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">JavaScript</span>
                </TableCell>
                <TableCell>2年</TableCell>
                <TableCell>研究、フロントエンド開発</TableCell>
                <TableCell>
                  <Rating value={5} />
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell className="flex items-center">
                  <Link href="https://www.typescriptlang.org/" isExternal>
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                      alt="typescript"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">TypeScript</span>
                </TableCell>
                <TableCell>6ヶ月</TableCell>
                <TableCell>フロントエンド開発、インターンシップ</TableCell>
                <TableCell>
                  <Rating value={3} />
                </TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell className="flex items-center">
                  <Link href="https://soliditylang.org/" isExternal>
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/solidity/solidity-original.svg"
                      alt="solidity"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">Solidity</span>
                </TableCell>
                <TableCell>1年6ヶ月</TableCell>
                <TableCell>研究(ブロックチェーン)</TableCell>
                <TableCell>
                  <Rating value={4} />
                </TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell className="flex items-center">
                  <Link href="https://www.python.org/" isExternal>
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                      alt="python"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">Python</span>
                </TableCell>
                <TableCell>2年6ヶ月</TableCell>
                <TableCell>機械学習、グラフの作成</TableCell>
                <TableCell>
                  <Rating value={4} />
                </TableCell>
              </TableRow>
              <TableRow key="5">
                <TableCell className="flex items-center">
                  <Link href="https://www.ruby-lang.org/" isExternal>
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg"
                      alt="ruby"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">Ruby</span>
                </TableCell>
                <TableCell>3ヶ月</TableCell>
                <TableCell>バックエンド開発</TableCell>
                <TableCell>
                  <Rating value={2} />
                </TableCell>
              </TableRow>
              <TableRow key="6">
                <TableCell className="flex items-center">
                  <Link
                    href="https://www.iso.org/standard/74528.html"
                    isExternal
                  >
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                      alt="c-lang"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">C言語</span>
                </TableCell>
                <TableCell>1年</TableCell>
                <TableCell>数値計算、画像処理</TableCell>
                <TableCell>
                  <Rating value={2} />
                </TableCell>
              </TableRow>
              <TableRow key="7">
                <TableCell className="flex items-center">
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                    isExternal
                  >
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                      alt="html5"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">HTML</span>
                </TableCell>
                <TableCell>1年</TableCell>
                <TableCell>Webページ作成、インターンシップ</TableCell>
                <TableCell>
                  <Rating value={4} />
                </TableCell>
              </TableRow>
              <TableRow key="8">
                <TableCell className="flex items-center">
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                    isExternal
                  >
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                      alt="css3"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">CSS</span>
                </TableCell>
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

      <Card className="mb-4">
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
                <TableCell className="flex items-center">
                  <Link href="https://www.linux.org/" isExternal>
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
                      alt="Linux"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">Linuxコマンド</span>
                </TableCell>
                <TableCell>3年6ヶ月</TableCell>
                <TableCell>研究、開発全般</TableCell>
                <TableCell>
                  <Rating value={5} />
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell className="flex items-center">
                  <Link href="https://nodejs.org/" isExternal>
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                      alt="Node.js"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">Node.js</span>
                </TableCell>
                <TableCell>1年6ヶ月</TableCell>
                <TableCell>研究、Webサーバの立ち上げ</TableCell>
                <TableCell>
                  <Rating value={4} />
                </TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell className="flex items-center">
                  <Link href="https://reactjs.org/" isExternal>
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                      alt="React"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">React</span>
                </TableCell>
                <TableCell>6ヶ月</TableCell>
                <TableCell>フロントエンド開発</TableCell>
                <TableCell>
                  <Rating value={4} />
                </TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell className="flex items-center">
                  <Link href="https://nextjs.org/" isExternal>
                    <Image
                      src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                      alt="Next.js"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">Next.js</span>
                </TableCell>
                <TableCell>3ヶ月</TableCell>
                <TableCell>フロントエンド開発</TableCell>
                <TableCell>
                  <Rating value={3} />
                </TableCell>
              </TableRow>
              <TableRow key="5">
                <TableCell className="flex items-center">
                  <Link href="https://rubyonrails.org/" isExternal>
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg"
                      alt="Rails"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">Rails</span>
                </TableCell>
                <TableCell>3ヶ月</TableCell>
                <TableCell>バックエンド開発</TableCell>
                <TableCell>
                  <Rating value={2} />
                </TableCell>
              </TableRow>
              <TableRow key="6">
                <TableCell className="flex items-center">
                  <Link href="https://www.postgresql.org/" isExternal>
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                      alt="PostgreSQL"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">PostgreSQL</span>
                </TableCell>
                <TableCell>6ヶ月</TableCell>
                <TableCell>RailsのDBとして使ってます</TableCell>
                <TableCell>
                  <Rating value={3} />
                </TableCell>
              </TableRow>
              <TableRow key="7">
                <TableCell className="flex items-center">
                  <Link href="https://www.mongodb.com/" isExternal>
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                      alt="MongoDB"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">MongoDB</span>
                </TableCell>
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

      <Card className="mb-8">
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
                <TableCell className="flex items-center">
                  <Link href="https://git-scm.com/" isExternal>
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
                      alt="Git"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">Git</span>
                </TableCell>
                <TableCell>6ヶ月</TableCell>
                <TableCell>開発全般、インターンシップ</TableCell>
                <TableCell>
                  <Rating value={4} />
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell className="flex items-center">
                  <Link href="https://www.docker.com/" isExternal>
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
                      alt="Docker"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">Docker</span>
                </TableCell>
                <TableCell>6ヶ月</TableCell>
                <TableCell>環境構築</TableCell>
                <TableCell>
                  <Rating value={3} />
                </TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell className="flex items-center">
                  <Link href="https://aws.amazon.com/" isExternal>
                    <Image
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                      alt="AWS"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">AWS</span>
                </TableCell>
                <TableCell>3ヶ月</TableCell>
                <TableCell>インターンシップ</TableCell>
                <TableCell>
                  <Rating value={1} />
                </TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell className="flex items-center">
                  <Link href="https://slack.com/" isExternal>
                    <Image
                      src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"
                      alt="Slack"
                      width={15}
                      radius="none"
                    />
                  </Link>
                  <span className="ml-2">Slack</span>
                </TableCell>
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

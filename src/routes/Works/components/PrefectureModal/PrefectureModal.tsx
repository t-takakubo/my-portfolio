import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Link,
} from "@nextui-org/react";
import React from "react";

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
}

export const PrefectureModal: React.FC<Props> = ({ isOpen, onOpenChange }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        size="lg"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-3xl font-bold">
                都道府県人口推移グラフ
              </ModalHeader>
              <ModalBody>
                <div className="text-2xl font-bold">概要</div>
                <div>
                  株式会社ゆめみのフロントエンドのコーディング試験として、都道府県人口推移グラフを作成しました。
                </div>

                <div className="text-2xl font-bold mt-5">使用技術</div>
                <div>TypeScript, Next.js, Jest, Highcharts</div>

                <div className="text-2xl font-bold mt-5">リンク</div>
                <div>
                  github:{" "}
                  <Link
                    isExternal
                    className="text-blue-500 hover:underline"
                    href="https://github.com/t-takakubo/prefecture-population-dashboard"
                  >
                    都道府県人口推移グラフ
                  </Link>
                </div>
                <div>
                  サービスURL:{" "}
                  <Link
                    isExternal
                    className="text-blue-500 hover:underline"
                    href="https://prefecture-population-dashboard.vercel.app/"
                  >
                    都道府県人口推移グラフ
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

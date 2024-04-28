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

const ECPASModal: React.FC<Props> = ({ isOpen, onOpenChange }) => {
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
              <ModalHeader className="flex flex-col gap-1 text-3xl font-bold">
                Nex:ゲーム専用掲示板
              </ModalHeader>
              <ModalBody>
                <div className="text-2xl font-bold">概要</div>
                <div>
                  ハッカソンに参加して、ゲーム専用の掲示板Nexを作成しました。
                  フロントエンドを担当しました。バックエンドも興味あったので、
                  Rubyを使って、バックエンドを作り直してみました。
                </div>

                <div className="text-2xl font-bold mt-5">使用技術</div>
                <div>TypeScript, Ruby, Next.js, Rails, PostgreSQL, Docker</div>

                <div className="text-2xl font-bold mt-5">リンク</div>
                <div>
                  サービスURL:{" "}
                  <Link
                    isExternal
                    className="text-blue-500 hover:underline"
                    href="https://nex-game-bulletin-board-rails.vercel.app/login"
                  >
                    Nex
                  </Link>
                </div>
                <div>
                  github:{" "}
                  <Link
                    isExternal
                    className="text-blue-500 hover:underline"
                    href="https://github.com/toshiki-git/Nex-GameBulletinBoard-Rails"
                  >
                    Nex
                  </Link>
                  (Ver.一人で作り直した)
                </div>
                <div>
                  github:{" "}
                  <Link
                    isExternal
                    className="text-blue-500 hover:underline"
                    href="https://github.com/geekcamp2023-vol9-team28/Nex"
                  >
                    Nex
                  </Link>
                  (Ver.ハッカソン)
                </div>
                <div>
                  ハッカソン発表スライド:{" "}
                  <Link
                    isExternal
                    className="text-blue-500 hover:underline"
                    href="https://docs.google.com/presentation/d/1libFk5UqIsMaeLc2bnAL3hAX4Lh5ShBeGaf4VXCPaMw/edit?usp=sharing"
                  >
                    スライド
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

export default ECPASModal;

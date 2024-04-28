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

export const CharityModal: React.FC<Props> = ({ isOpen, onOpenChange }) => {
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
                CharityChain
              </ModalHeader>
              <ModalBody>
                <div className="text-2xl font-bold">概要</div>
                <div>
                  メルカリのハッカソン形式のインターンシップに参加し、ブロックチェーンを用いた寄付システムの開発を行いました。
                </div>

                <div className="text-2xl font-bold mt-5">使用技術</div>
                <div>
                  TypeScript, Next.js, Python, FastAPI, MySQL, Solidty, Geth,
                  Remix IDE
                </div>

                <div className="text-2xl font-bold mt-5">リンク</div>
                <div>
                  github:{" "}
                  <Link
                    isExternal
                    className="text-blue-500 hover:underline"
                    href="https://github.com/Mercoin-Hackathon-TeamB/Mercari-CharityChain"
                  >
                    CharityChain
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

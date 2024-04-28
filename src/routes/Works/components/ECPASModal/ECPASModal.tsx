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

export const ECPASModal: React.FC<Props> = ({ isOpen, onOpenChange }) => {
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
                ECサイトの価格監査システム
              </ModalHeader>
              <ModalBody>
                <div className="text-2xl font-bold">概要</div>
                <div>
                  学部生の研究として、ブロックチェーンを用いた価格監査システムを構築しました。
                </div>

                <div className="text-2xl font-bold mt-5">使用技術</div>
                <div>JavaScript, Solidity, Geth, Truffle, IPFS, Caliper</div>

                <div className="text-2xl font-bold mt-5">リンク</div>
                <div>
                  <Link
                    isExternal
                    className="text-blue-500 hover:underline"
                    href="https://icc2024.ieee-icc.org/"
                  >
                    ICC
                  </Link>
                  に論文を投稿して査読中です。
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

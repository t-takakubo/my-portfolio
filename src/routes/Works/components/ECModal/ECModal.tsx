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

export const ECModal: React.FC<Props> = ({ isOpen, onOpenChange }) => {
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
                ECサイト構築
              </ModalHeader>
              <ModalBody>
                <div className="text-2xl font-bold">概要</div>
                <div>
                  初めての、Webアプリ作成として、簡単なECサイトを作成しました。
                </div>

                <div className="text-2xl font-bold mt-5">使用技術</div>
                <div>JavaScript, Node.js, Express, MongoDB</div>

                <div className="text-2xl font-bold mt-5">リンク</div>
                <div>
                  github:{" "}
                  <Link
                    isExternal
                    className="text-blue-500 hover:underline"
                    href="https://github.com/toshiki-git/my_ec_site"
                  >
                    ECサイト
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

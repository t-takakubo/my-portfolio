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

export const WeatherModal: React.FC<Props> = ({ isOpen, onOpenChange }) => {
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
                Weather Remind Tool
              </ModalHeader>
              <ModalBody>
                <div className="text-2xl font-bold">概要</div>
                <div>
                  ハッカソンに参加して、明日の予定と天気をリマインドしてくれるWeather
                  Remind Toolを作成しました。
                  ハッカソンが終わったあと、緯度と経度から場所を取得できるように改良しました。
                </div>

                <div className="text-2xl font-bold mt-5">使用技術</div>
                <div>GAS, OpenWeatherMap API, Maps JavaScript API</div>

                <div className="text-2xl font-bold mt-5">リンク</div>
                <div>
                  github:{" "}
                  <Link
                    isExternal
                    className="text-blue-500 hover:underline"
                    href="https://github.com/toshiki-git/Hackathon_WeatherRemindTool"
                  >
                    Weather Remind Tool
                  </Link>
                </div>
                <div>
                  ハッカソン発表スライド:{" "}
                  <Link
                    isExternal
                    className="text-blue-500 hover:underline"
                    href="https://docs.google.com/presentation/d/1KdjD6N4tHd4v8lN2CmsKrPxrXqkWeBWv-4O-1Ulrjwc/edit?usp=sharing"
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

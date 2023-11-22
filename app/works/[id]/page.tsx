import { Card, CardBody, Image } from "@nextui-org/react";
import React from "react";
import data from "@/app/components/Works/WorkDetail/WorkDetail.json";

const WorkDetail = ({ params }: { params: { id: string } }) => {
  const filteredData = data.filter((item) => item.id === params.id);

  if (filteredData.length === 0) {
    return <div>指定されたIDの作品が見つかりません。</div>;
  }

  const work = filteredData[0];

  return (
    <div>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 mt-4">
        {work.images.map((image, index) => (
          <Card shadow="sm" key={index}>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={work.name}
                className="w-full object-cover"
                src={image}
              />
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WorkDetail;

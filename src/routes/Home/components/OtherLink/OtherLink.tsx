import { Card, CardBody, CardFooter, Image, Link } from "@nextui-org/react";

const list = [
  {
    id: 1,
    title: "私について詳しく知りたい方へ",
    img: "/LinkMe.png",
    link: "/profile",
  },
  {
    id: 2,
    title: "作成したプロダクトについて",
    img: "/MyProduct.png",
    link: "/works",
  },
  {
    id: 3,
    title: "連絡はこちらから",
    img: "/MailMe.png",
    link: "/contact",
  },
];

export const OtherLink = () => {
  return (
    <div className="gap-4 grid sm:grid-cols-3 mt-4">
      {list.map((item, index) => (
        <Link href={item.link} key={index}>
          <Card shadow="sm" isPressable>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-md justify-between">
              <b>{item.title}</b>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};

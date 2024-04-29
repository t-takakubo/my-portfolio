interface HeadingProps {
  heading: string;
}

export const Heading = ({ heading }: HeadingProps) => {
  return <div className="my-5 text-3xl font-bold">{heading}</div>;
};

interface HeadingProps {
  heading: string;
}

export const Heading = ({ heading }: HeadingProps) => {
  return <div className="text-3xl font-bold">{heading}</div>;
};

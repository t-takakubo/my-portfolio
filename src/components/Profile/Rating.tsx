import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

interface Props {
  value: number;
}
const Rating: React.FC<Props> = ({ value }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => {
        const isFilledStar = i < value;
        return (
          <span
            key={i}
            className={isFilledStar ? "text-yellow-500" : "text-gray-300"}
          >
            {isFilledStar ? (
              <FaStar className="w-5 h-5" />
            ) : (
              <FaRegStar className="w-5 h-5" />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Rating;

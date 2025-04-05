"use client"; // クライアントコンポーネントとしてマーク

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

type Props = {
  rating: number;
};

export default function StarRating({ rating }: Props) {
  return (
    <div className="flex space-x-1 text-yellow-400">
      {[1, 2, 3, 4, 5].map((i) => (
        <FontAwesomeIcon
          key={i}
          icon={i <= rating ? solidStar : regularStar}
          className="text-[20px]"
        />
      ))}
    </div>
  )
}

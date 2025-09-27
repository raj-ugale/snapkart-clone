import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-500" />);
    }
  }

  return (
    <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600 font-medium">{rating ? rating.toFixed(1): "no rating"}</span>
      <div className="flex space-x-1">{stars}</div>
    </div>
  );
};

export default StarRating;

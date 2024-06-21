import React from "react";

interface StarsProps {
  stars: number;
  maxStars?: number;
}

const Stars = ({ stars, maxStars = 5 }: StarsProps) => {
  const fullStars = Math.floor(stars);
  const halfStar = stars % 1 >= 0.5;
  const emptyStars = maxStars - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex flex-row">
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <span key={`full-${i}`} className="text-yellow-500 text-2xl mr-1">
            ★
          </span>
        ))}
      {halfStar && <span className="text-yellow-500 text-2xl mr-1">☆</span>}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <span key={`empty-${i}`} className="text-yellow-500 text-2xl mr-1">
            ☆
          </span>
        ))}
    </div>
  );
};

export default Stars;

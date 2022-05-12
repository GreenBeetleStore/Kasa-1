import React from "react";

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {/* Loop to display star by rating */}
      {stars.map((star) =>
        rating >= star ? (
          <img
            key={star.toString()}
            className="rating__icon"
            src="../design/redStar.svg"
            alt=""
          />
        ) : (
          <img
            key={star.toString()}
            className="rating__icon"
            src="../design/greyStar.svg"
            alt=""
          />
        )
      )}
    </div>
  );
};

export default Rating;

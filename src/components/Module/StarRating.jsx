import React, { useState, useEffect, memo } from "react";
import styles from "./InputDesign.module.css";

const Star = memo(({ filled, size, onClick, onMouseEnter, onMouseLeave }) => (
  <svg
    width={size.width}
    height={size.height}
    viewBox="0 0 49 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.star}
    style={{ fill: filled ? "#BF9B30" : "#9E9B9B" }}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <path d="M12.2293 42.4857L15.5169 28.2731L4.49075 18.7137L19.0574 17.4493L24.7222 4.0459L30.387 17.4493L44.9537 18.7137L33.9275 28.2731L37.2152 42.4857L24.7222 34.9495L12.2293 42.4857Z" />
  </svg>
));

const getStarSize = (size) => {
  switch (size) {
    case "small":
      return { width: "26px", height: "26px" };
    case "large":
      return { width: "49px", height: "49px" };
    default:
      return { width: "49px", height: "49px" };
  }
};

const StarRating = memo(({ rating = 0, size = "medium", interactive = false, onRatingChange }) => {
  const [selected, setSelected] = useState(rating);
  const [hover, setHover] = useState(0);
  const starSize = getStarSize(size);

  useEffect(() => {
    if (!interactive) setSelected(rating);
  }, [rating, interactive]);

  const handleClick = (index) => {
    if (!interactive) return;
    setSelected(index);
    if (onRatingChange) onRatingChange(index);
  };

  const renderStar = (index) => {
    const isFilled = interactive ? (hover >= index || (!hover && selected >= index)) : selected >= index;
    return (
      <Star
        key={index}
        filled={isFilled}
        size={starSize}
        onClick={() => handleClick(index)}
        onMouseEnter={() => interactive && setHover(index)}
        onMouseLeave={() => interactive && setHover(0)}
      />
    );
  };

  return (
    <div style={{ display: "flex", gap: "10px", cursor: interactive ? "pointer" : "default" }}>
      {[1, 2, 3, 4, 5].map(renderStar)}
    </div>
  );
});

export default StarRating;


import React from "react";
import styles from "./InputDesign.module.css";
import StarRating from "./StarRating";

function FeedbackItem({ name, showDelete = false, showEdit = true, rating = 4 }) {
  return (
    <article className={styles.feedbackItem}>
      <div className={styles.avatarContainer}>
        <svg
          width="64"
          height="65"
          viewBox="0 0 64 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: "64px",
            height: "64px",
            flexShrink: 0,
            borderRadius: "64px",
            background: "lightgray 50% / cover no-repeat, #D9D9D9",
            position: "absolute",
            left: "40px",
            top: "48px",
          }}
        >
          <circle cx="32" cy="32.3662" r="32" fill="#D9D9D9"></circle>
        </svg>
      </div>
      <div className={styles.feedbackContent}>
        <h3 className={styles.feedbackName}>{name}</h3>
        <p className={styles.feedbackRole}>student</p>
        <p className={styles.feedbackText}>It is an Interesting moudule</p>
        <div className={styles.feedbackStars}>
          <StarRating rating={rating} size="small" />
        </div>
        {showEdit && <button className={styles.editButton}>Edit</button>}
        {showDelete && <button className={styles.deleteButton}>Delete</button>}
      </div>
    </article>
  );
}

export default FeedbackItem;

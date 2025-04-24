import React, { useState } from "react";
import styles from "./InputDesign.module.css";
import StarRating from "./StarRating";


function ModuleRating({ onRatingChange, onTextChange }) {
  return (
    <section className={styles.ratingSection}>
      <h3 className={styles.ratingTitle}>Write a review</h3>
      <p className={styles.ratingDescription}>
        Write your description about your experience in this module throughout the semester
      </p>
      <div className={styles.starsContainer}>
        <StarRating interactive={true} onRatingChange={onRatingChange} />
      </div>
      <textarea
        className={styles.textarea}
        rows="4"
        placeholder="Write your feedback here..."
        onChange={(e) => onTextChange(e.target.value)}
      />
    </section>
  );
}

export default ModuleRating;

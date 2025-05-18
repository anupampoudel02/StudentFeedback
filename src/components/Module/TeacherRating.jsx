import React from "react";
import styles from "./InputDesign.module.css";
import StarRating from "./StarRating";
import { useState } from "react";

function TeacherRating({ onRatingChange, onTextChange, tutor, image, setIsAnonymous, isAnonymous }) {
    

  const toggleAnonymous = () => {
    setIsAnonymous(!isAnonymous);
  };


  return (
    <section>
      <h2 className={styles.sectionTitle}>Rate Teachers from this module</h2>
      <div className={styles.teacherContainer}>
        <img
          src={image}
          alt="Teacher profile"
          className={styles.teacherImage}
        />
        <div className={styles.teacherInfo}>
          <h3 className={styles.teacherName}>Tutor : {tutor}</h3>
          <div className="toggle-container">
          <label className="toggle-label">Send anonymously</label>
          <button
            className={`toggle-switch ${isAnonymous ? "active" : ""}`}
            onClick={toggleAnonymous}
          >
            <span className={`toggle-circle ${isAnonymous ? "active" : ""}`} />
          </button>
        </div>
          <h4 className={styles.reviewTitle}>Write a review</h4>
          <p className={styles.reviewDescription}>
            Write your description about your experience and reviews about your experience in this module
          </p>
          <div className={styles.teacherStarsContainer}>
            <StarRating interactive={true} onRatingChange={onRatingChange} />
          </div>
          <textarea
            className={styles.textarea}
            rows="4"
            placeholder="Write your feedback about the tutor here..."
            onChange={(e) => onTextChange(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}

export default TeacherRating;

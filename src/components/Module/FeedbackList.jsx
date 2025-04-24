import React from "react";
import styles from "./InputDesign.module.css";
import FeedbackItem from "./FeedbackList";


function FeedbackList() {
  return (
    <section className={styles.feedbackSection}>
      <h2 className={styles.feedbackTitle}>Module Feedback</h2>
      <div className={styles.feedbackList}>
        <div className={styles.feedbackItemWrapper}>
          {/* <FeedbackItem name="Rabin Karki" rating={4} showEdit={true} showDelete={true} /> */}
        </div>
        <div className={styles.feedbackItemWrapper}>
          {/* <FeedbackItem name="Rabin Sarki" rating={5} showEdit={false} /> */}
        </div>
        <div className={styles.feedbackItemWrapper}>
          {/* <FeedbackItem name="Rabin Sarki" rating={3} showEdit={false} /> */}
        </div>
      </div>
    </section>
  );
}

export default FeedbackList;

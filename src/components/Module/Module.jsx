import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./InputDesign.module.css";
import Header from "../Header";
import ModuleDescription from "./ModuleDescription";
import ModuleRating from "./ModuleRating";
import TeacherRating from "./TeacherRating";
import FeedbackList from "./FeedbackList";
import AuthLayout from "../AuthLayout";
import { useParams, useSearchParams } from "react-router-dom";
import http from "../../request/http";
import { toast, Toaster } from "react-hot-toast";

export default function Module() {
  const [moduleRating, setModuleRating] = useState(0);
  const [moduleReview, setModuleReview] = useState("");

  const [teacherRating, setTeacherRating] = useState(0);
  const [teacherReview, setTeacherReview] = useState("");
  const { id } = useParams();
  const [module, setModule] = useState({});
  const [loading, setLoading] = useState(false);


    const fetchModule = async (isMounted = true) => {
      if (!id) return;
      setLoading(true);
      try {
        const res = await http.get(`/modules/${id}`);
        if (isMounted && res.data) {
          setModule(res.data.data);
        }
      } catch (error) {
        if (isMounted) {
          console.error("Error fetching module:", error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
  const handleSubmit = async () => {
    
    const moduleReviewData = {
      module_id: 1, 
      user_id: 2,  
      rating: moduleRating,
      feedback: moduleReview
    };

    // Prepare the data for teacher review
    // const teacherReviewData = {
    //   teacher_id: 3,  
    //   module_id: 1,   
    //   user_id: 2,    
    //   rating: moduleRating,
    //   feedback: teacherReview
    // };
    //
    try {
      await http.post(`/modules/${id}/reviews`, moduleReviewData);
      console.log("✅ Module review submitted successfully!");
      console.log("✅ Teacher review submitted successfully!");
      fetchModule();
    } catch (error) {
      if(axios.isAxiosError(error)) {
        if(error.response.data) {
          if(error.response.data.message) {
            toast.error(error.response.data.message)
          }
        }
      }
    }
  };


  useEffect(() => {
    let isMounted = true; // flag to track if the component is still mounted

    fetchModule(isMounted);

    return () => {
      isMounted = false; // cleanup to prevent state updates after unmount
    };
  }, [id]);

  return (
    <AuthLayout>
      <Toaster />
      {
        loading 
          ? "Loading..." 
          : (
            <>
              <main className={styles.container}>
                {<Header title={module?.title} buttonText="DashBoard" />}
                <section className={styles.contentCard}>
                  <ModuleDescription description={module?.description} />
                  {/* <ModuleRating */}
                  {/*   onRatingChange={(val) => setModuleRating(val)} */}
                  {/*   onTextChange={(val) => setModuleReview(val)} */}
                  {/* /> */}
                  <TeacherRating
                    onRatingChange={(val) => setModuleRating(val)}
                    onTextChange={(val) => setModuleReview(val)}
                    tutor={module.tutor}
                    image={module.image}
                  />
                  <div style={{ textAlign: "center", marginTop: "40px" }}>
                    <button className={styles.submitButton} onClick={handleSubmit}>
                      Submit
                    </button>
                  </div>
                  <section className={styles.feedbackSection}></section>
                    <h2 className={styles.feedbackTitle}>Module Feedback</h2>
                    
                    <div className={styles.statsCard}>
                      <div className={styles.statItem}>
                        <span className={styles.statValue}>{module?.rating_avg || 0}</span>
                        <span className={styles.statLabel}>Average Rating</span>
                      </div>
                      <div className={styles.statItem}>
                        <span className={styles.statValue}>{module?.reviews_count || 0}</span>
                        <span className={styles.statLabel}>Total Reviews</span>
                      </div>
                    </div>

                    {module?.feedbacks?.length > 0 ? (
                      <div className={styles.feedbackList}>
                        {module.feedbacks.map((review, index) => (
                          <div key={index} className={styles.feedbackCard}>
                            <div className={styles.feedbackHeader}>
                              <div className={styles.userInfo}>
                                <div className={styles.userInitial}>
                                  {review.user.name?.charAt(0) || "A"}
                                </div>
                                <span className={styles.userName}>{review.user.name || "Anonymous"}</span>
                              </div>
                              <div className={styles.ratingDisplay}>
                                {[...Array(5)].map((_, i) => (
                                  <span key={i} className={i < review.rating ? styles.starFilled : styles.starEmpty}>
                                    ★
                                  </span>
                                ))}
                                <span className={styles.ratingDate}>
                                  {new Date(review.created_at).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                            <p className={styles.feedbackText}>{review.feedback}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className={styles.noFeedback}>
                        <p>No feedback available for this module yet.</p>
                      </div>
                    )}
                  {/* {<FeedbackList />} */}
                </section>
              </main>
            </>
          )
      }
    </AuthLayout>
  );
}

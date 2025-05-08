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

export default function Module() {
  const [moduleRating, setModuleRating] = useState(0);
  const [moduleReview, setModuleReview] = useState("");

  const [teacherRating, setTeacherRating] = useState(0);
  const [teacherReview, setTeacherReview] = useState("");
  const { id } = useParams();
  const [module, setModule] = useState({});
  const [loading, setLoading] = useState(false);

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

      //
      // // Send teacher review to the backend
      // await axios.post("https://your-api-url.com/api/teachers/3/modules/1/reviews", teacherReviewData, {
      //   headers: {
      //     Authorization: `70|Ecsp0EpA7q1Blj2VYNOWDtzZjmmHygsy1xOsi8go40730832`, // Replace with the actual auth token
      //   }
      // });
      //
      console.log("✅ Teacher review submitted successfully!");
    } catch (error) {
      console.error("❌ Error submitting reviews:", error.response ? error.response.data : error.message);
    }
  };


  useEffect(() => {
    let isMounted = true; // flag to track if the component is still mounted

    const fetchModule = async () => {
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

    fetchModule();

    return () => {
      isMounted = false; // cleanup to prevent state updates after unmount
    };
  }, [id]);

  return (
    <AuthLayout>
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
                  {<FeedbackList />}
                </section>
              </main>
            </>
          )
      }
    </AuthLayout>
  );
}

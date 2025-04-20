import React from 'react';
import './CollaborativeDashboard.css';

const CollaborativeDashboard = () => {
  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Collaborative Development</h1>
        <button className="dashboard-btn">Dashboard</button>
      </div>

      <div className="module-description-card">
        <p>
          <strong>Collaborative Development</strong> is a module focused on enhancing teamwork and
          communication skills in software and application development. It introduces students to
          collaborative tools, version control systems like Git, and agile methodologies such as
          Scrum. Through group projects and real-world scenarios, students learn how to plan,
          develop, and manage software collaboratively, ensuring effective coordination, task
          delegation, and problem-solving within development teams.
        </p>
      </div>
      <div className="review-left">
  <label className="review-label">Write a review</label>
  
  <textarea
    className="review-textarea"
    placeholder="Write your review about this module here..."
  ></textarea>

  <div className="stars">
    ★ ★ ★ ★ ★
  </div>

  <button className="submit-btn">Submit</button>
</div>

<h2 className="rate-heading">Rate Teachers from this module</h2>
<div className="teacher-rating-box">
    <img
      src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg"
      alt="Teacher Module"
      className="teacher-image"
    />
    <div className="module-title">5CS024/HJI: Collaborative Development</div>
    <div className="star-rating">
      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
    </div>
  </div>

  {/* Right: Tutor Review Section */}
  <div className="review-right">
    <h3>Tutor : Sulav Shrestha</h3>
    <label className="review-label">Write a review</label>
    <p className="review-desc">
      Write your description about your experience and reviews about your experience in this module throughout the semester
    </p>

    <textarea
      className="review-textarea"
      placeholder="Write your review about this module here..."
    ></textarea>

    <div className="stars">★ ★ ★ ★ ★</div>
    <button className="submit-btn">Submit</button>
  </div>
</div>
 

    
  );
  
};


export default CollaborativeDashboard;

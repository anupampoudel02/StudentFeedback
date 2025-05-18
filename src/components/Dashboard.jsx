import React, { useEffect, useState } from "react";
import AuthLayout from "./AuthLayout";
import Header from "./Header";
import http from "../request/http";
import { Link } from "react-router-dom";
import './Dashboard.css';

export default function Dashboard() {
  const [modules, setModules] = useState();
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (value) => {
    setSearchQuery(value);
  };


  useEffect(() => {
    setLoading(true);
    http.get("/modules/list").then((res) => {
      if(res.data) {
        setModules(res.data);
      }
    }).finally(() => setLoading(false));
  }, []);

  return (
    <AuthLayout>
      <Header title="Dashboard">
        {/* <div className="search-bar">
          <input
            type="text"
            placeholder="Search for modules"
            value={searchQuery}
            onChange={(event) => handleSearch(event.target.value)}
            className="search-input"
          />
          <svg className="search-icon" viewBox="0 0 24 24" fill="none">
            <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div> */}
      </Header>

      <main className="dashboard">
        <div className="module-grid">
          {modules?.data?.map((module) => (
            <Link key={module.id} to={`/module/${module.id}`} className="module-card">
              <img
                src={module.image}
                alt="Module"
                className="module-image"
              />
              <div className="module-content">
                <h3 className="module-title">{module.name}</h3>
                <div className="module-stats">
                  <div className="rating-wrap">
                    <span className="star-icon">★</span>
                    <span className="rating-value">{module.rating_avg || 0}</span>
                  </div>
                  <div className="review-count">
                    {module.reviews_count || 0} reviews
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </AuthLayout>
  );
}

import React, { useEffect, useState } from "react";
import AuthLayout from "./AuthLayout";
import http from "../request/http";
import { Link, useSearchParams } from "react-router-dom";
import './Dashboard.css';

export default function Dashboard() {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState();
    
  const [isAnonymous, setIsAnonymous] = useState(false);

    const handleLogout = async () => {
        await localStorage.removeItem('token');

        window.location.href = "/login"
    }
    const handleSearch = (value) => {
        setSearchQuery(value);
      };
      
  const toggleAnonymous = () => {
    setIsAnonymous(!isAnonymous);
  };

    useEffect(() => {
        setLoading(true);
        http.get("/user").then(res => {
            if(res.data) {
                setUser(res.data);
            }
        }).catch(err => {
            // handleLogout();
        }).finally(() => setLoading(false))

    }, [])

   

    return (
        <AuthLayout>
            <main className="dashboard">
      <header className="header">
        <h1 className="title">Dashboard</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for modules"
            value={searchQuery}
            onChange={(event) => handleSearch(event.target.value)}
            className="search-input"
          />
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg"
            className="search-icon"
          >
            <path
              d="M19 19L15.364 15.364C16.742 13.589 15.89 10.82 13.928 9.574C11.965 8.329 8.92 8.736 7.788 10.238C6.657 11.74 7.049 14.538 8.672 15.783C10.295 17.027 13.111 16.84 14.4 15.205C15.692 13.572 13.679 12.013 12.548 13.259C11.411 14.502 8.896 13.74 8.4 11.8C7.905 9.862 10.003 8.5 11.6 9.118C13.189 9.741 15.486 11.462 16.332 12.75C17.178 14.037 19 19 19 19Z"
            />
          </svg>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          LogOut
        </button>
      </header>

      <div className="toggle-container">
        <label className="toggle-label">Send anonymously</label>
        <button
          className={`toggle-switch ${isAnonymous ? "active" : ""}`}
          onClick={toggleAnonymous}
        >
          <span className={`toggle-circle ${isAnonymous ? "active" : ""}`} />
        </button>
      </div>

      <div className="module-grid">
        {/* Module Cards with Links */}
        <Link to="/course/1" className="module-card">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3137b64dcae99c3da54cd9d650b50b0fed2b96ed?placeholderIfAbsent=true"
            alt="Module"
            className="module-image"
          />
          <p className="module-title">5CS024/HJI: Collaborative Development</p>
        </Link>

        <Link to="/course/2" className="module-card">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3137b64dcae99c3da54cd9d650b50b0fed2b96ed?placeholderIfAbsent=true"
            alt="Module"
            className="module-image"
          />
          <p className="module-title">5CS024/HJI: Collaborative Development</p>
        </Link>

        <Link to="/course/3" className="module-card">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3137b64dcae99c3da54cd9d650b50b0fed2b96ed?placeholderIfAbsent=true"
            alt="Module"
            className="module-image"
          />
          <p className="module-title">5CS024/HJI: Collaborative Development</p>
        </Link>
      </div>
    </main>

        </AuthLayout>
    )
}
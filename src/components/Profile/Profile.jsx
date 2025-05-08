import React, { useState, useEffect } from "react";
import AuthLayout from "../AuthLayout";
import Header from "../Header";
import styles from "./Profile.module.css";
import http from "../../request/http";
import { toast } from "react-hot-toast";

export default function Profile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    avatar: null
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    http.get("/user").then(res => {
      if(res.data) {
        setUser(res.data);
      }
    }).finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await http.put("/user", user);
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <AuthLayout>
      <Header title="Feedback" />
      <main className={styles.container}>
        <div className={styles.profileCard}>
          <div className={styles.avatarSection}>
            <div className={styles.avatar}>
              {user.avatar ? (
                <img src={user.avatar} alt="Profile" />
              ) : (
                <span>{user.name?.charAt(0)}</span>
              )}
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={user.name}
                onChange={(e) => setUser({...user, name: e.target.value})}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
              />
            </div>
            
            <button type="submit" className={styles.submitButton}>
              Save Changes
            </button>
          </form>
        </div>
      </main>
    </AuthLayout>
  );
}
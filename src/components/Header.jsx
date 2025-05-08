import React from "react";
import { Link } from "react-router-dom";
import styles from "./Module/InputDesign.module.css";

function Header({ title, buttonText }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <Link to={"/dashboard"} className={styles.dashboardButton}>{buttonText}</Link>
    </header>
  );
}

export default Header;

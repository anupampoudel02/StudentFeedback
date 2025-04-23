import React from "react";
import styles from "./Module/InputDesign.module.css";

function Header({ title, buttonText }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <button className={styles.dashboardButton}>{buttonText}</button>
    </header>
  );
}

export default Header;

import React from "react";
import styles from "./InputDesign.module.css";

function ModuleDescription({description}) {
  return (
    <section className={styles.moduleDescription}>
      {description}
    </section>
  );
}

export default ModuleDescription;

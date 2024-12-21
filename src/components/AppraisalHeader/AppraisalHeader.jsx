import React from "react";
import styles from "./AppraisalHeader.module.css";

const AppraisalHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>APPRAISAL</div>
      <div className={styles.header}>
        <button className={styles.tab}>APPRAISAL</button>
        <button className={`${styles.tab} ${styles.inactive}`}>ANALYSIS</button>
      </div>
    </div>
  );
};

export default AppraisalHeader;

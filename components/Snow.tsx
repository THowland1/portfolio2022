import React from "react";
import styles from './Snow.module.css';

export default function Snow() {
  return (
    <div className={styles.snowflakes} aria-hidden="true">
      <div className={styles.snowflake}>❅</div>
      <div className={styles.snowflake}>❅</div>
      <div className={styles.snowflake}>❆</div>
      <div className={styles.snowflake}>❄</div>
      <div className={styles.snowflake}>❅</div>
      <div className={styles.snowflake}>❆</div>
      <div className={styles.snowflake}>❄</div>
      <div className={styles.snowflake}>❅</div>
      <div className={styles.snowflake}>❆</div>
      <div className={styles.snowflake}>❄</div>
    </div>
  );
}

import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

export const Statistics = ({
  positiveFeedback,
  neutralFeedback,
  negativeFeedback,
  countSum,
  countPercentage,
}) => {
  return (
    <>
      <p className={styles.text}>Good: {positiveFeedback}</p>
      <p className={styles.text}>Neutral: {neutralFeedback}</p>
      <p className={styles.text}>Bad: {negativeFeedback}</p>
      <p className={styles.text}>Total: {countSum}</p>
      <p className={styles.text}>Positive feedback: {countPercentage}%</p>
    </>
  );
};

Statistics.propTypes = {
  positiveFeedback: PropTypes.number,
  neutralFeedback: PropTypes.number,
  negativeFeedback: PropTypes.number,
  countSum: PropTypes.number,
  countPercentage: PropTypes.number,
};

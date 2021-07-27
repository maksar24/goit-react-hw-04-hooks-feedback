import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.list}>
      {options.map((option) => {
        return (
          <li key={option} className={styles.item}>
            <button
              className={styles.button}
              type="button"
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

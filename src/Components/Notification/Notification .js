import React from "react";
import PropTypes from "prop-types";
import styles from "./Notification.module.css";

export const Notification = ({ message }) => {
  return <p className={styles.text}>{message}</p>;
};

Notification.defaultProps = {
  message: "No feedback given",
};

Notification.propTypes = {
  message: PropTypes.string,
};

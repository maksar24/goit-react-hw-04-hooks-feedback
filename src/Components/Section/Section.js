import React from "react";
import PropTypes from "prop-types";
import styles from "./Section.module.css";

export const Section = ({ children, title }) => {
  return (
    <section>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

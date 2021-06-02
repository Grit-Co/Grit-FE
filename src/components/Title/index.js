import React from "react";
import PropTypes from "prop-types";

import styles from "./title.module.scss";

const Title = ({ text }) => {
    return <h1 className={styles.title}>{text}</h1>;
};

export default Title;

Title.propTypes = {
    text: PropTypes.string
};

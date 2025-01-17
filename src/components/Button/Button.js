import React from "react";
import PropTypes from "prop-types";

import styles from "./Button.module.scss";

const Button = ({ text, onClick, isPrimary = true }) => (
    <button
        className={
            isPrimary
                ? `${styles.primary} ${styles.btn}`
                : `${styles.secondary} ${styles.btn}`
        }
        onClick={() => onClick()}
    >
        {text ? text : "Click me"}
    </button>
);

export default Button;

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    isPrimary: PropTypes.bool
};

import React from "react";
import PropTypes from "prop-types";

import styles from "./text-area.module.scss";

const TextArea = ({ value, handleChange, placeholder, name }) => {
    return (
        <textarea
            name={name}
            className={styles.textArea}
            placeholder={placeholder}
            value={value || ""}
            onChange={(e) => handleChange(e)}
        />
    );
};

export default TextArea;

TextArea.propTypes = {
    value: PropTypes.string,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    name: PropTypes.string
};

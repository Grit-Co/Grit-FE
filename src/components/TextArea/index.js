import React from 'react';
import PropTypes from 'prop-types';

import styles from './text-area.module.scss'

const TextArea = ({ value, handleChange, placeholder }) => {
    
    return (
        <textarea 
            className={styles.textArea}
            placeholder={placeholder}
            value={value || ''}
            onChange={(e) => handleChange(e.target.value)}
        />
    );
}

export default TextArea;

TextArea.propTypes = {
    value: PropTypes.string, 
    handleChange: PropTypes.func,
    placeholder: PropTypes.string
};
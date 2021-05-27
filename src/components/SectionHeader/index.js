import React from 'react';
import PropTypes from 'prop-types';

import Pea from '../../icons/Pea'
import styles from './section-header.module.scss'

const SectionHeader = ({ section, text }) => {
    const emojis = {
        'goal' : '🌟',
        'completed-goals': '🏆',
        'task' : '📝',
        'community': '👥'
    };
    
    return (
        <h1 className={styles.sectionHeader}>
            <span>{
                section != 'pod' ? 
                    emojis[section]
                    :
                    <Pea />
            }</span>
            {text}
        </h1>
    );
}

export default SectionHeader; 

SectionHeader.propTypes = {
    section: PropTypes.string, 
    text: PropTypes.string
};
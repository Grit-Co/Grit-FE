import React from 'react';
import PropTypes from 'prop-types';

import styles from './list-item.module.scss'

const ListItem = ({ children, selected, handleClick }) => (
    <li 
        className={selected ? `${styles.listItem} ${styles.selected}` : styles.listItem}
        onClick={() => handleClick(children)}
    >
        {children}
    </li>
)

export default ListItem;

ListItem.propTypes = {
    children: PropTypes.object,
    selected: PropTypes.bool,
    handleClick: PropTypes.func
};
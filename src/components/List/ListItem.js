import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../../styles/components/listitem.module.scss'

const ListItem = ({ children }) => (
    <li className={styles['list-item']}>{children}</li>
)

export default ListItem;

ListItem.propTypes = {
    children: PropTypes.obj
};
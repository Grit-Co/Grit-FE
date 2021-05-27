import React from 'react';

// import Button from '../Button/Button'
import Vector from '../../icons/Vector';

import styles from './index.module.scss';

export default function Setup() {
    return (
        <nav className={styles.navbar}>
        <Vector />
            <h3>Set Goal</h3>
            {/* <Button
                text='Skip'
                isPrimary={false}
            /> */}
            <p>Skip</p>
        </nav>
    )
}
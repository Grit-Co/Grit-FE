
import React from 'react';

import Search from '../../icons/Search'
import Voice from '../../icons/Voice'
import styles from './search.module.scss'

const SearchBar = () => {

    return (
        <div className={styles.row}>
            <Search className={styles.icon}/>
            <input className={styles.inputField} type="text" placeholder="Search"></input>
            <Voice className={styles.icon}/>
        </div>
    );
}

export default SearchBar; 

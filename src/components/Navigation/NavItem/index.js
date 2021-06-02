import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

const NavItem = ({ children, text, selected }) => (
    <div className={styles["nav-item-container"]}>
        {children}
        <p className={selected ? styles.selected : styles.item}>{text}</p>
    </div>
);

export default NavItem;

NavItem.propTypes = {
    children: PropTypes.object,
    text: PropTypes.string,
    selected: PropTypes.bool
};

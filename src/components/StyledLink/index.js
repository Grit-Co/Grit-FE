import React from "react";
import Link from "next/link";
import PropTypes from "prop-types"

import styles from "./styled-link.module.scss";

const StyledLink = ({ isPrimary, text, href }) => (
    <Link href={href}>
        <a className={
            isPrimary ?
                `${styles.primary} ${styles.link}`
                : 
                `${styles.secondary} ${styles.link}`
        }>
            {text}
        </a>
    </Link>
)

export default StyledLink;

StyledLink.propTypes = {
    isPrimary: PropTypes.bool,
    text: PropTypes.string,
    href: PropTypes.string,
};
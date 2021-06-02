import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

import styles from "./user-icon.module.scss";

const UserIcon = ({ img }) => (
    <div className={styles.userIcon}>
        <Image
            src={`/${img}-img.png`}
            alt="user profile img"
            width={40}
            height={40}
        />
    </div>
);

export default UserIcon;

UserIcon.propTypes = {
    img: PropTypes.string
};

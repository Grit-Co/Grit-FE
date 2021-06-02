import React from "react";
import PropTypes from "prop-types";

import styles from "./welcome-title.module.scss";

const WelcomeTitle = ({ user }) => {
    // Todo: Randomize this
    const phrase = "Let's go";

    return (
        <h1 className={styles.welcomeTitle}>
            <span>{phrase}</span>
            <br />
            {user}
        </h1>
    );
};

export default WelcomeTitle;

WelcomeTitle.propTypes = {
    user: PropTypes.string
};

import React from "react";
import Link from "next/link";

import Vector from "../../icons/Vector";

import styles from "./index.module.scss";

export default function Setup() {
    return (
        <nav className={styles.navbar}>
            <Vector />
            <h3>Set Goal</h3>
            {/* <p>Skip</p> */}
            <Link
                href="/dashboard"
            >
                <p>Skip</p>
            </Link>
        </nav>
    );
}

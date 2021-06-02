import React from "react";
import styles from "./splash.module.scss";
import Link from "next/link";
import Button from "../components/Button/Button";

const Splash = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>Your Goal is set!</h1>

                <h3>Goal: Find a new job</h3>

                <h3>Would you like to plan how to achieve your goal?</h3>

                <Link href="/dashboard">
                    <a className={styles["primary-link"]}>Get Started</a>
                </Link>
                <Button text="Skip" isPrimary={false} />
            </main>
        </div>
    );
};

export default Splash;

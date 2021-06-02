import React from "react";
import PropTypes from "prop-types";
import styles from "./card.module.scss";

// TODO: this card should be more generic, not just for goals etc
const Card = ({ goal, fullCard, completed }) => {
    const { title, dueDate } = goal;

    let cardClassNames;

    if (fullCard && completed) {
        cardClassNames = `${styles.container} ${styles.fullCard} ${styles.disabled}`;
    } else if (fullCard) {
        cardClassNames = `${styles.container} ${styles.fullCard}`;
    } else {
        cardClassNames = styles.container;
    }

    return (
        <div className={cardClassNames}>
            <label>Goal</label>
            <div className={styles.row}>
                <div className={styles.goalContainer}>
                    <p>{title}</p>
                    <p className={styles.dueDate}>By: {dueDate}</p>
                </div>
                <div
                    className={
                        fullCard
                            ? styles.fullMilestoneContainer
                            : styles.milestoneContainer
                    }
                >
                    {fullCard ? (
                        <>
                            <div>
                                <p>Milestones:</p>
                                <p className={styles.count}>1/3</p>
                            </div>
                            <div>
                                <p>Tasks:</p>
                                <p className={styles.count}>1/8</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <p>Milestones:</p>
                            <p className={styles.count}>1/3</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;

Card.propTypes = {
    goal: PropTypes.object,
    fullCard: PropTypes.bool,
    completed: PropTypes.bool
};

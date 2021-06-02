import React from "react";
import Calendar from "../src/icons/Calendar";
import Card from "../src/components/Card/Card";
import FooterNav from "../src/components/FooterNav";
import Plus from "../src/icons/Plus";
import SectionHeader from "../src/components/SectionHeader";
import Title from "../src/components/Title";

import styles from "../styles/pages/goals.module.scss";

export default function Goals() {
    const exampleGoals = [
        {
            title: "Find a new job",
            dueDate: "5/5/22"
        },
        {
            title: "Manage a team",
            dueDate: "12/15/22"
        }
    ];

    const completedGoals = [
        {
            title: "Do a UX Bootcamp",
            dueDate: "1/3/21"
        },
        {
            title: "Find a career path",
            dueDate: "12/15/22"
        }
    ];

    return (
        <div className={styles.container}>
            <main>
                <div className={styles.header}>
                    <Title text="Goals" />
                    <div>
                        <Calendar />
                        <Plus />
                    </div>
                </div>

                <div className={styles.goals}>
                    <SectionHeader section="goal" text="Your Goals" />
                    {exampleGoals.map((goal) => (
                        <Card
                            key={goal.title}
                            goal={goal}
                            fullCard={true}
                            completed={false}
                        />
                    ))}
                </div>
                <div className={styles.completedGoals}>
                    <SectionHeader
                        section="completed-goals"
                        text="Completed Goals"
                    />
                    <Card
                        goal={completedGoals[0]}
                        fullCard={true}
                        completed={true}
                    />
                    <Card
                        goal={completedGoals[1]}
                        fullCard={true}
                        completed={true}
                    />
                </div>
            </main>
            <FooterNav />
        </div>
    );
}

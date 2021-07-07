import React, { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import useSwr from 'swr'

import AddTaskItem from "../src/components/Task/AddTaskItem";
import Bell from "../src/icons/Bell";
import Card from "../src/components/Card/Card";
import FooterNav from "../src/components/FooterNav";
import HorizontalDivider from "../src/components/decorators/HorizontalDivider";
import SectionHeader from "../src/components/SectionHeader";
import TaskItem from "../src/components/Task/TaskItem";
import UserIcon from "../src/components/UserIcon";
import WelcomeTitle from "../src/components/WelcomeTitle";

import styles from "../styles/pages/dashboard.module.scss";

// const fetcher = (url, user) => fetch(url,
//     { body: user }
// ).then((res) => res.json())

export default function Dashboard() {
    
    const { user } = useUser();
    console.log('user: ', user);
    
    // const testUser = { 'id': '1234', 'token': '1231231231' };
    // // const { data, error } = useSwr(['/api/user', testUser], fetcher)
    // // console.log('data: ', data);

    // fetch('/api/user', {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(testUser)
    // })
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    
    const exampleGoal = {
        title: "Find a new job",
        dueDate: "5/5/22"
    };

    const [mockedTasks, setMockedTasks] = useState([
        {
            text: "Interview",
            complete: false
        },
        {
            text: "Work on portfolio",
            complete: false
        },
        {
            text: "Attend networking event",
            complete: true
        },
        {
            text: "Complete workshop",
            complete: true
        }
    ]);

    const onTaskClick = (clickedTask) => {
        const updatedTasks = mockedTasks.map((task) => {
            if (task.text === clickedTask) {
                task.complete = !task.complete;
            }
            return task;
        });

        setMockedTasks(updatedTasks);
    };

    return (
        <div className={styles.container}>
            <main>
                <div className={styles.header}>
                    <WelcomeTitle user={user?.name || ''} />
                    <div>
                        <Bell />
                        <UserIcon img="user" />
                    </div>
                </div>
                <div className={styles.goals}>
                    <SectionHeader section="goal" text="Your Goals" />
                    <Card goal={exampleGoal} />
                </div>
                <HorizontalDivider />
                <div className={styles.tasks}>
                    <SectionHeader section="task" text="Today's Tasks" />
                    {mockedTasks
                        .filter((task) => !task.complete)
                        .map((task) => (
                            <TaskItem
                                key={task.text}
                                task={task}
                                handleClick={onTaskClick}
                            />
                        ))}
                    <AddTaskItem />
                </div>
                <div className={styles.completedTasks}>
                    <p>Completed Tasks</p>
                    {mockedTasks
                        .filter((task) => task.complete === true)
                        .map((task) => (
                            <TaskItem
                                key={task.text}
                                task={task}
                                handleClick={onTaskClick}
                            />
                        ))}
                </div>
            </main>
            <FooterNav />
        </div>
    );
}

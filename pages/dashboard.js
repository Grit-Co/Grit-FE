import Card from '../src/components/Card/Card'
import WelcomeTitle from '../src/components/WelcomeTitle'
import Bell from '../src/icons/Bell'
import UserIcon from '../src/components/UserIcon'
import SectionHeader from '../src/components/SectionHeader'
import HorizontalDivider from '../src/components/decorators/HorizontalDivider'
import FooterNav from '../src/components/FooterNav'
import styles from '../styles/dashboard.module.scss'
import TaskItem from '../src/components/Task/TaskItem'
import AddTaskItem from '../src/components/Task/AddTaskItem'

export default function Dashboard() {
    const exampleGoal = {
        title: 'Find a new job', 
        dueDate: '5/5/22'
    }

    const exampleUser = 'Lisa'

    const exampleTask = {
        text: 'Interview',
        complete: false
    }

    const exampleTask2 = {
        text: 'Work on portfolio',
        complete: false
    }

    const completedTask = {
        text: 'Interview',
        complete: true
    }

    return (
        <div className={styles.container}>
            <main>
                <div className={styles.header}>
                    <WelcomeTitle 
                        user={exampleUser}
                    />
                    <div>
                        <Bell />
                        <UserIcon />
                    </div>
                </div>
                <div className={styles.goals}>
                    <SectionHeader section='goal' text='Your Goals' />
                    {/* <div className={styles.cardContainer}> */}
                        <Card goal={exampleGoal} />
                        {/* <Card goal={exampleGoal} /> */}
                    {/* </div> */}
                </div>
                <HorizontalDivider />
                <div className={styles.tasks}>
                    <SectionHeader section='task' text="Today's Tasks" />
                    <TaskItem task={exampleTask}/>
                    <TaskItem task={exampleTask2}/>
                    <AddTaskItem />
                </div>
                <div className={styles.completedTasks}>
                    <p>Completed Tasks</p>
                    <TaskItem task={completedTask}/>
                    <TaskItem task={completedTask}/>
                    <TaskItem task={completedTask}/>
                    <TaskItem task={completedTask}/>
                </div>
            </main>
            <FooterNav />
        </div>
    )
}
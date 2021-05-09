import styles from './add-task-item.module.scss'

const AddTaskItem = ({ task }) => (
    <div className={styles.addTaskItem}>
        {task.text}
    </div>
);

export default AddTaskItem;          
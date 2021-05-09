import styles from './task-item.module.scss'

const TaskItem = ({ task }) => (
    <div className={styles.taskItem}>
        {task.text}
        <input 
            type='checkbox' 
            value=''
        />
    </div>
);

export default TaskItem; 
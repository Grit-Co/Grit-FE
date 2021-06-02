import React from "react";
import PropTypes from "prop-types";

import styles from "./task-item.module.scss";

const TaskItem = ({ task, handleClick }) => (
    <div className={styles.taskItem}>
        {task.text}
        <input
            type="checkbox"
            checked={task.complete}
            onClick={() => handleClick(task.text)}
        />
    </div>
);

export default TaskItem;

TaskItem.propTypes = {
    task: PropTypes.string,
    handleClick: PropTypes.func
};

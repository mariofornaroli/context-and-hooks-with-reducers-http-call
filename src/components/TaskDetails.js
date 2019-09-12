import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const TaskDetails = ({ task }) => {
    const { taskDispatcher } = useContext(TaskContext);
    return (
        <li key={task.id}
            onClick={() => taskDispatcher( {type: 'REMOVE_TASK', payload: { id: task.id }})}>
            {task.title}
        </li>
    )
};

export default TaskDetails;

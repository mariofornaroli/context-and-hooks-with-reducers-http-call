import React, { useContext } from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import { TaskContext } from '../contexts/TaskContext';

function TaskSection() {

    const { taskState, taskDispatcher } = useContext(TaskContext);
    return (
        <div className="task-section">
            {taskState.isLoading && <h3>Loading...</h3>}
            <AddTaskForm />
            <TaskList />
        </div>
    );
}

export default TaskSection;

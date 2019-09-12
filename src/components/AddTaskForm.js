import React, { useContext, useState } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const AddTaskForm = () => {
    const {taskDispatcher} = useContext(TaskContext);
    const [newTaskName, setNewTask] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        taskDispatcher({type:'ADD_TASK', payload: {title: newTaskName}});
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="newTask">Add task</label>
                <input id="newTask" onChange={(e) => setNewTask(e.target.value)}/>
            </form>
        </div>
    )
}

export default AddTaskForm;

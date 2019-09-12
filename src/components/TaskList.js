import React, { useContext, useEffect } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import TaskDetails from './TaskDetails';
import axios from 'axios';

const TaskList = () => {
    const { taskState, taskDispatcher } = useContext(TaskContext);

    useEffect(() => {

        taskDispatcher({ type: 'TASK_API_LOADING' });

        setTimeout(() => {

            axios.get('https://jsonplaceholder.typicode.com/todos').then(
                (res) => {
                    taskDispatcher({ type: 'TASK_API_LIST_SUCCESS', payload: { data: res.data } });
                }).catch(
                    taskDispatcher({ type: 'TASK_API_LIST_ERROR' }
                    )
                );            
        }, 2000);


        console.log('fetch from backend');
    }, [])
    return (
        <ul>
            {
                taskState.list && taskState.list.map(t => <TaskDetails key={t.id} task={t} />)
            }
        </ul>
    );
}

export default TaskList;

import React, {useState, useEffect} from 'react';
import { Levels } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

// importamos la hoja de estilos de task.scss
import "../../styles/task.scss"
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {

    const defaultTask1 = new Task("Example1", "Description 1", true, Levels.NORMAL)
    const defaultTask2 = new Task("Example2", "Description 2", false, Levels.BLOCKING)
    const defaultTask3 = new Task("Example3", "Description 3", true, Levels.URGENT)

    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida
    useEffect(() => {
        console.log("Task State has been modified");
        setLoading(false)
        return () => {
            console.log("Task list component is gpong to unmount...")
        };
    }, [tasks]);

    const completeTask = (task) =>{
        console.log("Complete this Task: ", task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks]
        tempTasks[index].completed = !tempTasks[index].completed;

        //We update the state of the component and it will update the
        //Iteration of the tasks in order to show the task updated
        setTasks(tempTasks);
    }

    const deleteTask = (task) => {
        console.log("Complete this Task: ", task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        setTasks(tempTasks);
    }

    const addTask = (task) => {
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    return (
        <div>
            <div className="col-12">
                <div className='card'>
                    {/** Card header (title) */}
                    <div className='card-header p-3'>
                        <h5>
                            Tus tareas: 
                        </h5>
                        {/** Card body (Content) */}
                        <div className='card-body' data-mdb-perfect-scrollbar="true" style={{position: "relative", height: "400px"}}>
                            <table>
                                <thead>
                                    <tr>
                                        <th scope="col">Title</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Priority</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tasks.map((task,index) => {
                                        return (
                                            <TaskComponent task={task} key={index} complete={completeTask} remove={deleteTask} />
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <TaskForm add={addTask}     />
        </div>
    );
};


export default TaskListComponent;

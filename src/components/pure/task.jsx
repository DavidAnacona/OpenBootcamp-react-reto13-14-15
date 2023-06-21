import React,{useEffect} from 'react'
import PropTypes from 'prop-types'
import {Task} from "../../models/task.class"

//Importamos la hoja de estilos de tas.scss
import "../../styles/task.scss"
import { Levels } from '../../models/levels.enum'

const TaskComponent = ({task, complete, remove }) => {

  useEffect(() => {
    console.log("Created task")
    return () => {
      console.log(`Task: ${task.name} is going to`)
    };
  }, [task]);

  /**
   * Function that returns a Badge 
   * depending on the level of the task
   */

  const taskLevelBadge = () =>{
    switch (task.level) {
      case Levels.NORMAL:
        return(
          <h6 className='mb-0'><span className='badge bg-primary'>{task.level}</span></h6>
        )
      case Levels.URGENT:
        return(
          <h6 className='mb-0'><span className='badge bg-warning'>{task.level}</span></h6>
        )
      case Levels.BLOCKING:
        return(
          <h6 className='mb-0'><span className='badge bg-danger'>{task.level}</span></h6>
        )
      default:

        break;
    }
  }

  /**
   * Function that returns icon depending on completion of the task
   */
  const tasCompletedIcon = () => {
    if(task.completed){
      return (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{ color: "green", fontSize: "20px"}}></i>) 
    }else{
      return (<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{ color: "red", fontSize: "20px"}}></i>)
    }
  }

  const taskCompleted = {
    color: "gray",
    textDecoration: "line-through",
  }

  const taskPending = {
    fontWeight: "bold",
    color: "tomato",
  }

  return (

    // <tr className={task.completed ? "fw-normal task-completed" : "fw-normal task-pending"}> forma colocando estilos desde sass
    <tr className="fw-normal" style={task.completed ? taskCompleted : taskPending}>
      <th>
        <span className='ms-2'>{task.name}</span>
      </th>
      <td>
        <span className='align-middle'>{task.description}</span>
      </td>
      <td>
        {taskLevelBadge()}
      </td>
      <td>
        {tasCompletedIcon()}
        <i className='bi-trash task-action' onClick={() => remove(task) } style={{ color: "blue", fontSize: "20px"}}></i>
      </td>
    </tr>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
}

export default TaskComponent

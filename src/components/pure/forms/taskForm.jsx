import React,{useRef} from 'react';
import PropTypes from 'prop-types'
import { Levels } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({add, length}) => {

    const nameRef = useRef("");
    const descriptionRef = useRef("");
    const levelRef = useRef(Levels.NORMAL);

    const addTask = (e) => {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        )
        add(newTask)
    }

    return (
        <form onSubmit={addTask} className="d-flex justify-content-center align-items-center mb-4">
            <div className='form-outline flex-fill'>
                <input placeholder='Nombre de la tarea' ref={nameRef} id="inputName" type="text" className='form-control form-control-lg' required autoFocus />
                <input placeholder='Descripcion de la tarea' ref={descriptionRef} id="inputDescription" type="text" className='form-control form-control-lg' required />
                <select ref={levelRef} defaultValue={Levels.NORMAL} id="selectLevel" className='form-control form-control-lg'>
                    <option value={Levels.NORMAL}>Normal</option>
                    <option value={Levels.BLOCKING}>Blocking</option>
                    <option value={Levels.URGENT}>Urgent</option>
                </select>
                <button type='submit' className='btn btn-success btn-lg ms-2'>{length > 0 ? "Agregar nueva tarea" : "Agrega tu primera tarea"}</button>
            </div>
            
        </form>
    );
}

TaskForm.protoTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired,
}

export default TaskForm;

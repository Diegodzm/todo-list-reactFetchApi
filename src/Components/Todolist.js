import './Todolist.css'
import React, { useEffect, useState } from 'react';
import { AgregarEnter } from './AgregarEnter';



function Todolist() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
  

  
    function handleInputchange(event) {
        setNewTask(event.target.value)
    }


    function AgregarTarea() {
        if (newTask.trim() !== "") {

            setTasks(t => [...t, newTask]);
            setNewTask("");

        }

    }
    function QuitarTarea(index) {
        const Quitar = tasks.filter((_, i) => i !== index);
        setTasks(Quitar);


    }
    AgregarEnter(AgregarTarea,'Enter')
    return <div className='Page bg-light p-2'>
        <p className="Titulo text-body-tertiary">todos</p>
        <div className='Todo border d-flex-block p-2 '>
            <div className="mx-auto ">
                <input id='TareaInput' placeholder="Agregar Tarea" className=" border-0 float-start ms-3 mt-3 col-7 " type="text" value={newTask} onChange={handleInputchange} />
            </div>
            <ol className='ListaDeTodo bg-white d-inline-flex row mt-3 p-0 '>
                {tasks.map((task, index) =>
                    <li className='border-top p-3' key={index}>
                        <span className='text float-start'>{task}</span>
                        <button type="button" className="btn-close RemoveButton float-end" onClick={() => QuitarTarea(index)} > </button>
                    </li>
                )}
            </ol>

        </div>



        <div className='endTodo border border-top-0 bg-white'> {tasks.length === 0 ? "add items" : tasks.length + " items left"}</div>
        <div className='bottomPart border border-top-0 bg-white'></div>
        <div className='bottomPartSmaller border border-top-0 bg-white '></div>
        <div className='bottom-page bg-light'></div>

    </div>
}


export default Todolist
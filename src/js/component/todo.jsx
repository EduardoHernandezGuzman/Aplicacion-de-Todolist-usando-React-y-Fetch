import React, { useState } from "react";

const Todo = () => {

    const [inputValue , setInputValue] = useState ("");
    const [todos , setTodos] = useState ([]);


    function crearToDoList() {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify([]);

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://playground.4geeks.com/apis/fake/todos/user/satan5", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    };

    function traerToDoList() {
        
        let requestOptions2 = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://playground.4geeks.com/apis/fake/todos/user/satan", requestOptions2)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    };

    function actualizarToDoList() {
        var raw = "";

        var requestOptions = {
            method: 'PUT',
            body: raw,
            redirect: 'follow'
        };

        fetch("https://playground.4geeks.com/apis/fake/todos/user/satan", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    };





    return (
        <>
            <div className="container col-4 todofondo">
                <h1 className="display-4" >Mi lista de tareas</h1>
                <ul>
                    <li> 
                        <input 
                            onChange={(e)=> setInputValue(e.target.value) } 
                            value={inputValue} 
                            onKeyUp={ (e)=> { if (e.key=== "Enter") { setTodos(todos.concat(inputValue)); setInputValue("")}}} 
                            type="text" 
                            placeholder="¿Qué quieres hacer?" >
                        </input> 
                    </li>
                    {todos.map((item, index) => (
                    <li>{item} {""} <svg onClick={ ()=> setTodos (todos.filter ((t , currentIndex)=> index !=currentIndex))} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg> </li>
                    ))}
                    
                </ul>
                <div className="tareas" >{todos.length} tareas</div>
                <button onClick={crearToDoList} >Crea TO DO LIST</button>
                <button onClick={traerToDoList} >Traer tareas</button>
                <button onClick={actualizarToDoList} >Actualizar tareas</button>
            </div>
           
        </>
        
    );
};

export default Todo
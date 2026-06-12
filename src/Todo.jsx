import './App.css'
import {useState} from "react"

function Todo(){
    
     const[task, setTask] = useState("");
     const[tasks, setTasks] = useState([]);

     function addTask(){
      if(task.trim() == "") return;
        setTasks([...tasks, task]);
        setTask("");
     }
     
     function deleteTask(indexToDelete){
      setTasks(tasks.filter((_, index) => index !== indexToDelete));
      
     }

     return(

    <div className='box'>
        <h1>To-do List!</h1>

        <input className='input'
        type= "text"
        placeholder="Add Tasks"
        value={task}
        onChange={(event) => setTask(event.target.value)}>
            
        </input>

        <button 
        className='add' 
               onClick={addTask}
                value={task}>Add</button>
        
        <ul>
           {tasks.map((task, index) => (
            <li key={index}>
               {task}
               <button className='delete'
                              onClick={() => deleteTask(index)}
                              value={tasks}>🗑️</button>
            </li>
           ))}

        </ul>


    </div>

    )

}

export default Todo
       
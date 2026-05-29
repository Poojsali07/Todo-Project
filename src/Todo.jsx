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

    <div>
        <h1>To-do List</h1>

        <input 
        type= "text"
        placeholder="Enter Tasks"
        value={task}
        onChange={(event) => setTask(event.target.value)}>
            
        </input>

        <button onClick={addTask}
                value={task}>Add</button>
        
        <ul>
           {tasks.map((task, index) => (
            <li key={index}>
               {task}
               <button onClick={() => deleteTask(index)}
                              value={tasks}>Delete</button>
            </li>
           ))}

        </ul>


    </div>

    )

}

export default Todo
       
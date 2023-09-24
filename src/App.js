import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addTask, removeTask } from './actions';
import {useState} from 'react'


function App() {
  const [newTask, setNewTask] = useState('');
  const tasks = useSelector((state)=>state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = ()=>{
    if(newTask.trim() !== ''){
      dispatch(addTask({id: Date.now(), text: newTask}))
      setNewTask('');
    }
  }
  const handleRemoveTask = (taskId) =>{
    dispatch(removeTask(taskId))
  }
  return (
    <div className="App">
      <h1>Redux TODO List</h1>
      <div>
        <input
        type="text" 
        placeholder='Add new todo'
        value={newTask}
        onChange={(e)=>{ setNewTask(e.target.value) }} />
         <button onClick={handleAddTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task)=> (
          <li key={task.id}>
            {task.text}
            <button onClick={()=>{ handleRemoveTask(task.id) }}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

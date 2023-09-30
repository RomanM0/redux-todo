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
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault()
  });

  return (
    <div className="App" onKeyDown={(e) => {if(e.keyCode === 13){handleAddTask()}}}>
      <h1 className='pgTitle'>Redux TODO List</h1>
      <div>
        <input
        type="text"
        className='todoContent' 
        placeholder='Add new todo'
        value={newTask}
        onChange={(e)=>{ setNewTask(e.target.value) }} />
         <button className='addBtn Btn' title='Left click to Add new todo, Right click to delete all todos' onClick={handleAddTask} onContextMenu={(e)=>{window.confirm('Are you sure you want delete all todos?')}}>➕ Add</button>
      </div>
      <ul>
        {tasks.map((task)=> (
          <li className='todoElement' key={task.id}>
            <p className='todoElName'>{task.text}</p>
            <button className='todoDelBtn Btn' onClick={()=>{ handleRemoveTask(task.id) }}>🗑 Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/slices/taskSlice';
import '../App.css'

const Add = () => {
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
  
    const handleAddTask = () => {
      if (task.trim() && description.trim()) {
        dispatch(addTask({task,description}));
        setTask('');
        setDescription('')
      }
    };
  return (
    <div className='add flex justify-center items-center h-[100vh]'>
        <div className='bg-white rounded  w-[70vw] md:w-[40vw] lg:w-[23vw] p-8 flex flex-col gap-5'>
            <p className='text-center text-xl font-semibold'>Add a Task</p>
      <input 
        required
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        className='border border-black rounded p-4 '
        placeholder="Add a task"
      />
    
      <input 
       required
        type="text" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
          className='border border-black rounded p-4 '
        placeholder="Description"
      />
  
      <button 
      className='bg-black text-white rounded py-3'
      onClick={handleAddTask}>Add</button>
     </div>
    </div>
  )
}

export default Add
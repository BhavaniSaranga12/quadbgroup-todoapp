import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteTask, editTask, toggleTask } from '../redux/slices/taskSlice';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

  

const AllTasks = () => {
    const dispatch=useDispatch();
     const tasks = useSelector((state) => state.tasks);
     const [open, setOpen] =useState(false);
    
     
     const [updateTask, setUpdateTask] = useState('');
    const [updateDescription, setUpdateDescription] = useState('');
    const [taskToEdit, setTaskToEdit] = useState(null)

    const handleOpen = (id,title,des) => {
        console.log(id)
        setUpdateTask(title);
        setUpdateDescription(des);
        setTaskToEdit(id)
        setOpen(true);
    }


    const handleClose = () => {
         setTaskToEdit(null);
         setUpdateDescription('');
         setUpdateTask('')
        setOpen(false);
    } 


    function handleToggle(id) {
        dispatch(toggleTask(id));
      };

      function handleEdit() {
        dispatch(editTask({ id: taskToEdit, title: updateTask, description: updateDescription }));
         handleClose();
      };   


      const handleDelete = (id) => {
        dispatch(deleteTask(id));
      };


  return (
    <div className='h-[100vh] w-[100vw] pt-14 bg-black text-white'>
    <div className='flex flex-col  border md:mx-[23%] border-white p-5 shadow-white shadow-md' >
        <p className='text-3xl text-center m-5 font-semibold border border-white'>Your Tasks</p>
       {tasks.length?<div className='m-3'>
        {tasks.map((tasks)=>(<>
        <div className='flex md:flex-row flex-col justify-between items-center p-2 my-4 border border-white'>
         <div key={tasks.id}>
            <p className='text-xl font-semibold'>{tasks.title}</p>
            <p className='text-md'>{tasks.description}</p>
           
         </div>
         <div>
            {tasks.completed? <button className='bg-green-500 px-2  m-2 py-1 text-white font-semibold rounded-3xl ' onClick={()=>handleToggle(tasks.id)}>Completed</button>:<button onClick={()=>handleToggle(tasks.id)} className='m-2 text-white font-semibold   bg-red-500  px-2 py-1 rounded-3xl'>Completed</button>}
            <EditNoteIcon  onClick={()=>handleOpen(tasks.id,tasks.title,tasks.description)} style={{fontSize: 40, margin:5}}/>
           <DeleteIcon style={{fontSize: 33,margin:5}} onClick={()=>handleDelete(tasks.id)}/>
         </div>
         
         </div>
         {open? 
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div className='flex flex-col gap-5'>
        <input 
        
        type="text" 
        value={updateTask} 
        onChange={(e) => setUpdateTask(e.target.value)} 
        className='border border-black rounded p-4 '
        placeholder="Update task"
      />
    
      <input 
     
        type="text" 
        value={updateDescription} 
        onChange={(e) => setUpdateDescription(e.target.value)} 
          className='border border-black rounded p-4 '
        placeholder="Update Description"
      />
  
      <button 
      className='bg-black text-white rounded py-3'
      onClick={()=>handleEdit()}>Update</button>
       </div>   
        </Box>
      </Modal>: null}
         </>
        ))}
        </div>:<p className='text-2xl'>No Tasks were added!</p>}
        
    </div>
    </div>
  )
}

export default AllTasks
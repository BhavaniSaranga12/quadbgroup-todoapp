import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
 const navigate=useNavigate();
  const buttonClicked = () => {
    setIsClicked(!isClicked);
  };

  return (
    <nav className='px-[2%] py-[3%] flex text-white bg-black rounded justify-between items-center mt-2  relative z-50'>
    
      <div className='text-3xl font-semibold' >ToDo App</div>
      <div className={`absolute md:relative bg-black md:bg-transparent top-[10.5vh] md:top-0 left-0 w-full md:w-auto md:py-0 px-3 md:px-0 transition-transform duration-300 ease-in-out ${isClicked ? 'block' : 'hidden'}  md:flex md:items-center`}>
        <ul className='flex flex-col md:flex-row justify-between gap-6 items-center md:ml-auto'>
          <li onClick={() =>{ setIsClicked(false); navigate('/home')}} className='hover:text-gray-500 md:text-lg font-semibold  text-center cursor-pointer hover:underline'>Home</li>
          <li onClick={() =>{ setIsClicked(false); navigate('/all-tasks')}} className='hover:text-gray-500 md:text-lg font-semibold text-center cursor-pointer hover:underline'>All Tasks</li>
          <li onClick={() =>{ setIsClicked(false); navigate('/add')}} className='hover:text-gray-500 md:text-lg font-semibold text-center cursor-pointer hover:underline'>Add a task</li>
         
        </ul>
      </div>

      <div className='md:hidden'>
        {isClicked ? (
          <CloseIcon onClick={buttonClicked} className='text-3xl block cursor-pointer' />
        ) : (
          <MenuIcon onClick={buttonClicked} className='text-3xl block cursor-pointer' />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
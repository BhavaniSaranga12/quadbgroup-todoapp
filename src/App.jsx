
import React from 'react';

import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home'
import Add from './Components/Add'
import AllTasks from './Components/AllTasks';

const App = () => {
  return (
    <div>
     
    <BrowserRouter>
    <Navbar/> 
    <Routes>
     <Route path='/' Component={Home}/>
     <Route path='/home' Component={Home}/>
     <Route path='/all-tasks' Component={AllTasks}/>
     <Route path='/add' Component={Add} />
 
    </Routes>
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto px-4">
        <p className="text-center">&copy; {new Date().getFullYear()} All rights reserved.</p>
        <nav className="flex justify-center mt-4">
          <ul className="flex gap-6">
            <li><a href="#home" className="text-white hover:text-gray-300">Home</a></li>
            <li><a href="#about" className="text-white hover:text-gray-300">About</a></li>
            <li><a href="#contact" className="text-white hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </footer>
    </BrowserRouter>
    </div>
  );
};

export default App;

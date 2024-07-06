import React from 'react'
import { useNavigate } from 'react-router-dom'
import hero from '../assets/to-do-lists-toolshero.jpg'
const Home = () => {
    const navigate=useNavigate();
  return ( <>
    <div className='text-center'>
            <img src={hero} className='w-full relative z-99 lg:h-[600px] filter brightness-50' alt="" />
           <div className='absolute lg:bottom-[35%] left-[2%] right-[2%] bottom-[70%] md:bottom-[50%] '> <p className=' lg:text-3xl md:text-xl text-md font-bold lg:mb-4 mb-2.5 text-white '>"Embrace the day with purpose, for every task completed is a step toward fulfillment"</p>
           </div>
    </div>
    <div className='my-10 mx-12 px-4 py-4 bg-black text-white rounded'>
        <p className='text-2xl font-semibold'>Never put off until tomorrow what you can do today</p>
        <button onClick={()=>navigate('/add')} className='bg-white text-black my-3 px-4 py-4 rounded font-semibold'>Add a task</button>
    </div>
    
    </>
  )
}

export default Home
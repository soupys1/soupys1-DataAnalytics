import React from "react";
import green from '../assets/green.jpg'

const Analytics =  () =>{
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className ='w-[500px] mx-auto my-4'src={green} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className=' text-[#00df9a] font-bold py-0.5'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl py-1'>Manage Data Analytics Centrally</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Porro corporis qui reprehenderit quidem sunt suscipit tempore quod aliquam! Dolorem dolore, facilis pariatur vero non accusantium voluptatem iure aut quis porro.
                    </p>
                    <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics
import React from 'react'
import { Link } from 'react-router-dom';
import landingbg from '../../../resources/bglanding.png'
const Section1 = () => {
  return (
    <div className='flex flex-col gap-y-4 justify-center items-center  w-full h-[100vh] bg-[length:100%_120%] bg-no-repeat font-inter uppercase text-text2' style={{backgroundImage: `url(${landingbg})`}}>
        <h1 className='text-4xl font-bold border-b-2 border-second'>
            Insuring <span className='text-2xl underline'>work</span><br />with <br />Compentant
        </h1>
        
        <div className='flex gap-x-3 '>
            <button className='border w-[14vh] py-3 text-xs rounded bg-text2'></button>
            <button className='border px-3 py-1 text-xs rounded'>Hire with us</button>
        </div>
        {/* <div className='flex h-[30vh] bg-[#eefafa] self-start items-end'>
            <Sec1Footer num='1500' text='Enrolled'/>
            <Sec1Footer num='900' text='Hired'/>
            <Sec1Footer num='15' text='Recruiters'/>
        </div> */}

      <Link to='recruite'><button className='absolute bg-second text-sm p-2 rounded-sm right-0 bottom-0 f] hover:font-bold'>Next page</button></Link>
    </div>
  )
}

export default Section1
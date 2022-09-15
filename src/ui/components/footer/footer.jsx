import React from 'react'
import solvitLogo from '../../resources/solvitlogo.png'
const Footer = () => {
  return (
    <div className='flex flex-wrap  bg-primary justify-around px-6 py-8 font-mono text-bgcolor1 gap-y-8'>
        <div className='flex-1  m-1 text-white flex flex-col gap-y-3'>
            <h1 className='text-xl uppercase '>Coding Cadet</h1>
            <p className='tracking-tighter text-xs  w-40'>Lorem ipsjum dolor sit amet, consectetur adipiscing elit. Tristique accumsan proin id amet. Lacus sed ut felis tortor risus. Sit neque quam.</p>
            <div className='flex items-center'>
                <span ><img src={solvitLogo} alt="" /></span>
                <span className='text-text1 uppercase tracking-tighter text-xs '>powered <br /> by solvit Africa </span>
            </div>
        </div>
        <div className='flex-1 m-1'>
            <h1 className='text-sm font-bold uppercase '>About company</h1>
            <ul className='text-sm flex flex-col gap-3 text-gray-200 pt-5'>
                <li>Who we are</li>
                <li>Our Potential</li>
                <li>Mission</li>
                <li>Partners</li>
                <li>Support</li>
            </ul>
        </div>
        <div className='flex-1 m-1'>
            <h1 className='text-xl uppercase '>For Business</h1>
            <ul className='text-sm flex flex-col gap-3 text-gray-200 pt-5'>
                <li>Recruiting graduate</li>
                <li>Train for your talents</li>
                <li>Outsourcing</li>
            </ul>
        </div>
        <div className='flex-1 m-1'>
            <h1 className='text-sm font-bold uppercase '>Our Program</h1>
        
          <ul className='text-sm flex flex-col gap-3  pt-5'>
            <li>Guidance</li>
            <li>onsite Training</li>
            <li>Online Trainings</li>
            <li>Job Seekers</li>
          </ul>
        </div>
        <div className='w-full flex flex-col gap-3'>
            <h1 className='text-sm font-bold uppercase '>Keep in touch</h1>
            <input type="Email"  placeholder='Email' className='rounded placeholder:pl-3 placeholder:text-xs placeholder:font-bold placeholder:text-gray-900 w-56' />
            <p className='text-sm capitalize'>Get in Touch</p>
        </div>
    </div>
  )
}

export default Footer
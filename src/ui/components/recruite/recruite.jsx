import React from 'react'
import Talents from './talents';
import Technology from './technology';
import { Link } from 'react-router-dom'

const Recruite = () => {
  return (
    <div className='bg-bgcolor1 flex flex-col gap-4 font-nunito w-3/4 p-5 rounded-lg'>
        <div className='flex flex-col items-center gap-y-1 text-xs text-tertiary '>
        <h1 className='text-base text-[#292323] font-bold'>Recruite with Us</h1>
        <Link to='/login'><button className='py-2 rounded border w-20 hover:bg-second hover:text-bgcolor1'>Login In</button></Link>
        <span >Or</span>
        <span >Request Talents</span>
        </div>
        
        <div className='flex flex-col gap-4'>
            <div>
                <div className="flex justify-between items-center text-tertiary text-sm "><span>Company Name</span> <span className='text-xs text-text4'>Required(*)</span></div>
                <input type="text" placeholder='your company name' className='border border-solid border-text4  rounded py-2 px-2 mt-1 placeholder:text-xs focus:border-second outline-none w-full '/>
            </div>
            <div>
                <div className="flex justify-between items-center text-tertiary text-sm "><span>Contact Personal's Names</span> <span className='text-xs text-text4'>With a space between names(*)</span></div>
                <input type="text" placeholder='Muk Lamb' className='border border-solid border-text4  rounded py-2 px-2 mt-1 placeholder:text-xs focus:border-second outline-none w-full '/>
            </div>
            <div>
                <div className="flex justify-between items-center text-tertiary text-sm "><span>Email</span> <span className='text-xs text-text4'>Required(*)</span></div>
                <input type="email" placeholder='email@company.com' className='border border-solid border-text4  rounded py-2 px-2 mt-1 placeholder:text-xs focus:border-second outline-none w-full '/>
            </div>
            <div>
                <div className="flex justify-between items-center text-tertiary text-sm "><span>Company website</span> <span className='text-xs text-text4'>Optional</span></div>
                <input type="email" placeholder='email@company.com' className='border border-solid border-text4  rounded py-2 px-2 mt-1 placeholder:text-xs focus:border-second outline-none w-full '/>
            </div>
        </div>
        <div className='flex items-center justify-center gap-2'>
            <div>
                <div className="flex justify-between items-center text-tertiary text-sm "><span>Country</span> <span className='text-xs text-text4'>Required(*)</span></div>
                <input type="text" placeholder='Rwanda' className='border border-solid border-text4  rounded py-2 px-2 mt-2 placeholder:text-xs focus:border-second outline-none w-full '/>
            </div>
            <div>
                <div className="flex justify-between items-center text-tertiary text-sm "><span>Phone Number</span> <span className='text-xs text-text4'>Required(*)</span ></div>
                <input type="text" placeholder='+25078----' className='border border-solid border-text4  rounded py-2 px-2 mt-1 placeholder:text-xs focus:border-second outline-none w-full '/>
            </div>
        </div>

        <div className='flex justify-between '>
            <div className='flex-1 border-r border-r-[#cbd3d1]'>
                <h2 className='text-sm'>Our Technologies</h2>
                <div className='flex flex-wrap gap-2'>
                    <Technology technology="UX/UI" />
                    <Technology technology="Node JS" />
                    <Technology technology="Larvel" />
                    <Technology technology="Django" />
                    <Technology technology="React Js" />
                    <Technology technology="Fullstack" />
                    
                </div>
            </div>
            <div className='flex-1 ml-2 '>
                <h2 className='text-sm'>Talents you wants</h2>
                <div className='flex flex-col flex-wrap gap-2 '>
                    <Talents tech="React Js" num="300"/>
                    <Talents tech="Django" num="3"/>
                    <Talents tech="Fullstack" num="3"/>
                </div>
            </div>
        </div>

        <button className=' flex justify-center items-center self-center py-2 rounded border text-tertiary text-xs font-bold w-40'>Request Talents</button>
    </div>
  )
}

export default Recruite
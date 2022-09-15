import React from 'react'
import { AiOutlineMinus,AiOutlinePlus } from 'react-icons/ai'
const Talents = (props) => {
  return (
    <div className='flex  flex-wrap text-xs items-center  '>
        <span className='flex-1'>{props.tech}</span>
        <div className='flex flex-1'>
            <span className='flex flex-1 items-center justify-center bg-[#cfd8d6] px-1 rounded-tl rounded-bl w-8'>{props.num|| 300}</span>
            <div className='flex-1 bg-[#a0a3a3] rounded-tr rounded-br'><AiOutlinePlus/><AiOutlineMinus/></div>
        </div>
    </div>
  )
}

export default Talents
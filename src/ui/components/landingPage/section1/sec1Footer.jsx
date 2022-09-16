import React from 'react'

const Sec1Footer = (props) => {
  return (
    <div className='flex flex-col items-center text-[#1b1209] font-bold capitalize border-r border-r-text3 px-3'>
        <span className='text-sm'>+{props.num}</span>
        <span className=' font-nunito text-lg'>{props.text}</span>
        
    </div>
  )
}

export default Sec1Footer